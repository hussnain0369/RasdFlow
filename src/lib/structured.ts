import type { Faq } from '../content/pages';

/**
 * FAQPage markup. Not used: FAQ rich results are limited to authoritative
 * government and health sites, so the visible FAQs are left unmarked.
 */
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

/** Service markup for a service page, linked to the single Organization entity by @id. */
export function serviceJsonLd(opts: { name: string; description: string; url?: string; siteUrl?: string; lang: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    inLanguage: opts.lang,
    areaServed: { '@type': 'City', name: 'Riyadh' },
    ...(opts.url ? { url: opts.url } : {}),
    ...(opts.siteUrl ? { provider: { '@id': `${opts.siteUrl}/#organization` } } : {}),
  };
}

/** BreadcrumbList matching the visible breadcrumb trail. */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}
