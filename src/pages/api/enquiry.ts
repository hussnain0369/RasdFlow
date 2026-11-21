import type { APIRoute } from 'astro';
import { validateEnquiry } from '../../lib/enquiry';
import { delivery, guard, readFields, respond, sendEmail } from '../../lib/server';
import { ui } from '../../i18n/ui';
import { path, type Lang } from '../../i18n/routes';

export const prerender = false;

const serviceLabel = { detection: 'Leak detection', repair: 'Leak repair', unsure: 'Not sure' } as const;

function reply(request: Request, lang: Lang, status: number, body: Record<string, unknown>) {
  const f = ui[lang].form;
  const ok = status === 200;
  return respond(request, status, body, {
    lang,
    title: ok ? f.successTitle : lang === 'ar' ? 'لم يُرسَل الاستفسار' : 'Enquiry not sent',
    text: ok ? f.success : status === 429 ? f.errorRate : status === 400 ? f.errorSummary : f.errorSend,
    backHref: path('contact', lang),
    backLabel: ui[lang].nav.contact,
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const fields = await readFields(request);
  if (!fields) return reply(request, 'en', 400, { ok: false, error: 'invalid' });
  const lang: Lang = fields.lang === 'ar' ? 'ar' : 'en';

  const d = delivery();
  if (!d) return reply(request, lang, 503, { ok: false, error: 'not_configured' });

  const blocked = guard(request, fields, clientAddress, 'enquiry');
  if (blocked) return reply(request, lang, blocked.status, { ok: false, error: blocked.error });

  const { data, errors } = validateEnquiry(fields);
  if (Object.keys(errors).length) return reply(request, lang, 400, { ok: false, error: 'validation', fields: errors });

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

  const sent = await sendEmail(d, `Website enquiry: ${serviceLabel[data.service]} – ${data.district}`, text);
  if (!sent) return reply(request, lang, 502, { ok: false, error: 'delivery_failed' });
  return reply(request, lang, 200, { ok: true });
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { allow: 'POST' } });
