/**
 * Shared server-side helpers for the form routes (/api/enquiry/, /api/feedback/).
 * Everything is read at request time so credentials are never baked into the build.
 */
export const env = (k: string) => process.env[k]?.trim() || undefined;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function readFields(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const type = request.headers.get('content-type') ?? '';
    if (type.includes('application/json')) return await request.json();
    return Object.fromEntries(await request.formData());
  } catch {
    return null;
  }
}

/** Email delivery settings. `to` can be overridden per form (e.g. FEEDBACK_TO_EMAIL). */
export function delivery(toKey?: string) {
  const apiKey = env('RESEND_API_KEY');
  const from = env('ENQUIRY_FROM_EMAIL');
  const to = (toKey && env(toKey)) || env('ENQUIRY_TO_EMAIL');
  return apiKey && from && to ? { apiKey, from, to } : null;
}

/**
 * Origin, honeypot, minimum-time and rate-limit checks.
 * Returns an error code and HTTP status, or null when the request may proceed.
 */
export function guard(request: Request, fields: Record<string, unknown>, clientAddress: string | undefined, bucket: string) {
  const site = env('SITE_URL')?.replace(/\/+$/, '');
  const origin = request.headers.get('origin');
  if (site && origin && origin !== site) return { status: 403, error: 'forbidden' };

  const startedAt = Number(fields.started_at);
  const tooFast = Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 3000;
  // Never tell a bot which check failed, and never tell a person it was sent.
  if (String(fields.website ?? '').trim() !== '' || tooFast) return { status: 400, error: 'rejected' };

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  if (rateLimited(`${bucket}:${ip}`)) return { status: 429, error: 'rate_limited' };
  return null;
}

/** Sends a plain-text email through Resend. RESEND_API_URL can point at a test server. */
export async function sendEmail(d: { apiKey: string; from: string; to: string }, subject: string, text: string): Promise<boolean> {
  try {
    const res = await fetch(env('RESEND_API_URL') ?? 'https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${d.apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from: d.from, to: d.to.split(',').map((s) => s.trim()), subject, text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) console.error('Email delivery failed with status', res.status);
    return res.ok;
  } catch (err) {
    console.error('Email delivery error', err instanceof Error ? err.message : err);
    return false;
  }
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** JSON for the page script, or a small HTML page for browsers without JavaScript. */
export function respond(
  request: Request,
  status: number,
  body: Record<string, unknown>,
  page: { lang: 'en' | 'ar'; title: string; text: string; backHref: string; backLabel: string },
): Response {
  if ((request.headers.get('accept') ?? '').includes('application/json')) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  const { lang } = page;
  const html = `<!doctype html><html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(page.title)} | LeakFix</title><style>body{font-family:system-ui,sans-serif;max-width:36rem;margin:4rem auto;padding:0 1rem;color:#072641;line-height:1.6}a{color:#0566a8}</style></head><body><h1>${esc(page.title)}</h1><p>${esc(page.text)}</p><p><a href="${esc(page.backHref)}">${esc(page.backLabel)}</a></p></body></html>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
