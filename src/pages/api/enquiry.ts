import type { APIRoute } from 'astro';
import { validateEnquiry } from '../../lib/enquiry';
import { ui } from '../../i18n/ui';
import { path, type Lang } from '../../i18n/routes';

export const prerender = false;

/* Read at request time so credentials are never baked into the build. */
const env = (k: string) => process.env[k]?.trim() || undefined;

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

const serviceLabel = { detection: 'Leak detection', repair: 'Leak repair', unsure: 'Not sure' } as const;

function respond(request: Request, lang: Lang, status: number, body: Record<string, unknown>): Response {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  // Plain HTML response for browsers without JavaScript.
  const f = ui[lang].form;
  const ok = status === 200;
  const title = ok ? f.successTitle : lang === 'ar' ? 'لم يُرسَل الاستفسار' : 'Enquiry not sent';
  const text = ok ? f.success : status === 429 ? f.errorRate : status === 400 ? f.errorSummary : f.errorSend;
  const back = path('contact', lang);
  const html = `<!doctype html><html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} | LeakFix</title><style>body{font-family:system-ui,sans-serif;max-width:36rem;margin:4rem auto;padding:0 1rem;color:#072641;line-height:1.6}a{color:#0566a8}</style></head><body><h1>${title}</h1><p>${text}</p><p><a href="${back}">${ui[lang].nav.contact}</a></p></body></html>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let fields: Record<string, unknown> = {};
  try {
    const type = request.headers.get('content-type') ?? '';
    if (type.includes('application/json')) fields = await request.json();
    else fields = Object.fromEntries(await request.formData());
  } catch {
    return respond(request, 'en', 400, { ok: false, error: 'invalid' });
  }
  const lang: Lang = fields.lang === 'ar' ? 'ar' : 'en';

  const apiKey = env('RESEND_API_KEY');
  const to = env('ENQUIRY_TO_EMAIL');
  const from = env('ENQUIRY_FROM_EMAIL');
  if (!apiKey || !to || !from) {
    return respond(request, lang, 503, { ok: false, error: 'not_configured' });
  }

  // Reject cross-site submissions when the production origin is known.
  const site = env('SITE_URL')?.replace(/\/+$/, '');
  const origin = request.headers.get('origin');
  if (site && origin && origin !== site) {
    return respond(request, lang, 403, { ok: false, error: 'forbidden' });
  }

  // Spam checks: hidden honeypot field and a minimum time on the page.
  const startedAt = Number(fields.started_at);
  const tooFast = Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 3000;
  if (String(fields.website ?? '').trim() !== '' || tooFast) {
    // Do not reveal the check to bots, but never tell a person it was sent: return a generic failure.
    return respond(request, lang, 400, { ok: false, error: 'rejected' });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  if (rateLimited(ip)) {
    return respond(request, lang, 429, { ok: false, error: 'rate_limited' });
  }

  const { data, errors } = validateEnquiry(fields);
  if (Object.keys(errors).length) {
    return respond(request, lang, 400, { ok: false, error: 'validation', fields: errors });
  }

  const text = [
    `New enquiry from the LeakFix website (${lang === 'ar' ? 'Arabic' : 'English'} page)`,
    '',
    `Name: ${data.name}`,
    `Telephone: ${data.phone}`,
    `District: ${data.district}`,
    `Service: ${serviceLabel[data.service]}`,
    '',
    'Description:',
    data.message,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s: string) => s.trim()),
        subject: `Website enquiry: ${serviceLabel[data.service]} – ${data.district}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      console.error('Enquiry delivery failed with status', res.status);
      return respond(request, lang, 502, { ok: false, error: 'delivery_failed' });
    }
  } catch (err) {
    console.error('Enquiry delivery error', err instanceof Error ? err.message : err);
    return respond(request, lang, 502, { ok: false, error: 'delivery_failed' });
  }

  return respond(request, lang, 200, { ok: true });
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { allow: 'POST' } });
