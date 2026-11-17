import type { Faq } from '../content/pages';

/** FAQPage markup mirrors the questions shown on the page, word for word. */
export function faqJsonLd(faqs: Faq[], lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
