import type { APIRoute } from 'astro';
import { indexable, siteUrl } from '../config/site';

export const GET: APIRoute = () => {
  const body =
    indexable && siteUrl
      ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${siteUrl}/sitemap.xml\n`
      : // Preview, staging and unconfigured builds stay out of search indexes.
        `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
