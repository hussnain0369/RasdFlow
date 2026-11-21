import type { APIRoute } from 'astro';
import { validateFeedback } from '../../lib/feedback';
import { delivery, guard, readFields, respond, sendEmail } from '../../lib/server';
import { feedbackText } from '../../content/feedback';
import { path, type Lang } from '../../i18n/routes';

export const prerender = false;

const serviceName: Record<string, string> = {
  detection: 'Water leak detection',
  hidden: 'Leak detection in walls, floors and ceilings',
  underground: 'Underground leak detection',
  repair: 'Water leak repair',
  pipeRepair: 'Pipe and connection repair',
  other: 'Other or not sure',
};

function reply(request: Request, lang: Lang, status: number, body: Record<string, unknown>) {
  const f = feedbackText[lang].form;
  const ok = status === 200;
  return respond(request, status, body, {
    lang,
    title: ok ? f.successTitle : lang === 'ar' ? 'لم يُرسَل رأيك' : 'Feedback not sent',
    text: ok ? f.success : status === 429 ? f.errorRate : status === 400 ? f.errorSummary : f.errorSend,
    backHref: path(ok ? 'home' : 'feedback', lang),
    backLabel: ok ? (lang === 'ar' ? 'الرئيسية' : 'Home') : feedbackText[lang].h1,
  });
}

/**
 * Receives private feedback and emails it to the owner (FEEDBACK_TO_EMAIL, or
 * ENQUIRY_TO_EMAIL). Nothing is stored on the website or published automatically.
 * The response never echoes the customer's details.
 */
export const POST: APIRoute = async ({ request, clientAddress }) => {
  const fields = await readFields(request);
  if (!fields) return reply(request, 'en', 400, { ok: false, error: 'invalid' });
  const lang: Lang = fields.lang === 'ar' ? 'ar' : 'en';

  const d = delivery('FEEDBACK_TO_EMAIL');
  if (!d) return reply(request, lang, 503, { ok: false, error: 'not_configured' });

  const blocked = guard(request, fields, clientAddress, 'feedback');
  if (blocked) return reply(request, lang, blocked.status, { ok: false, error: blocked.error });

  const { data, errors } = validateFeedback(fields);
  if (Object.keys(errors).length) return reply(request, lang, 400, { ok: false, error: 'validation', fields: errors });

  const shownAs = data.publish ? (data.display === 'name' ? data.displayName : 'Anonymous') : '—';
  const text = [
    `New feedback from the LeakFix website (${lang === 'ar' ? 'Arabic' : 'English'} ${data.quick ? 'homepage quick form' : 'feedback page'})`,
    '',
    `Rating: ${data.rating} out of 5`,
    `Service: ${data.service ? serviceName[data.service] : 'Not given'}`,
    '',
    'Feedback:',
    data.message || '(No comment, rating only)',
    '',
    `Permission to publish: ${data.publish ? 'YES' : 'NO'}`,
    `Display name if published: ${shownAs}`,
    '',
    '--- Private: never publish below this line ---',
    `Name: ${data.name || 'Not given'}`,
    `Phone or email: ${data.contact || 'Not given'}`,
    '',
    data.publish
      ? 'To publish after approval: add the rating, the feedback text and the display name above to src/data/reviews.ts.'
      : 'Do not publish: the customer did not give permission.',
  ].join('\n');

  const subject = `Website feedback: ${data.rating}/5${data.publish ? ' (may be published)' : ' (private)'}`;
  const sent = await sendEmail(d, subject, text);
  if (!sent) return reply(request, lang, 502, { ok: false, error: 'delivery_failed' });
  return reply(request, lang, 200, { ok: true });
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { allow: 'POST' } });
