import type { APIRoute } from 'astro';
import { pageKeys, path } from '../i18n/routes';
import { indexable, siteUrl } from '../config/site';

/** Lists canonical, indexable pages with their language alternates. Empty until production is configured. */
export const GET: APIRoute = () => {
  const urls =
    indexable && siteUrl
      ? pageKeys
          .flatMap((key) => (['en', 'ar'] as const).map((lang) => ({ key, lang })))
          .map(({ key, lang }) => {
            const loc = `${siteUrl}${path(key, lang)}`;
            const alts = (['en', 'ar'] as const)
              .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrl}${path(key, l)}"/>`)
              .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${path(key, 'en')}"/>`)
              .join('\n');
            return `  <url>\n    <loc>${loc}</loc>\n${alts}\n  </url>`;
          })
          .join('\n')
      : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};
