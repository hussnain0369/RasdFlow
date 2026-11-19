// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const site = process.env.SITE_URL?.trim().replace(/\/+$/, '') || undefined;
// Sub-folder hosting, e.g. BASE_PATH=/RasdFlow/ for GitHub Pages. Defaults to the domain root.
const base = process.env.BASE_PATH?.trim() || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Pages are prerendered to static HTML; only /api/enquiry runs on the server.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  build: { format: 'directory' },
  compressHTML: true,
  // Cross-site posts are rejected in the enquiry route itself, against SITE_URL.
  security: { checkOrigin: false },
});
