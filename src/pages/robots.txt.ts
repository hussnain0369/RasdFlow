import type { APIRoute } from 'astro';
import { indexable, siteUrl } from '../config/site';
import { withBase } from '../i18n/routes';

export const GET: APIRoute = () => {
  const body =
    indexable && siteUrl
      ? `User-agent: *\nAllow: /\nDisallow: ${withBase('/api/')}\n\nSitemap: ${siteUrl}${withBase('/sitemap.xml')}\n`
      : // Preview, staging and unconfigured builds stay out of search indexes.
        `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
