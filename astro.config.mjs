// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const site = process.env.SITE_URL?.trim().replace(/\/+$/, '') || undefined;

export default defineConfig({
  site,
  trailingSlash: 'always',
  // Pages are prerendered to static HTML; only /api/enquiry runs on the server.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  build: { format: 'directory' },
  compressHTML: true,
  // Cross-site posts are rejected in the enquiry route itself, against SITE_URL.
  security: { checkOrigin: false },
});
