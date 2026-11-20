#!/usr/bin/env node
/**
 * Checks the built site in dist/client (or the folder given as the first argument):
 * - every page has one <h1>, a unique <title> and meta description, and correct lang/dir
 * - canonical and hreflang links (when a production domain is set) point to existing, reciprocal pages
 * - internal links and assets resolve to built files
 * - every <img> has an alt attribute
 * - tel:, wa.me and mailto: links appear only when configured, and are well formed
 * Run: npm run verify  (after npm run build)
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.argv[2] ?? 'dist/client';
// Same BASE_PATH the site was built with, e.g. /RasdFlow/ for GitHub Pages.
const base = (process.env.BASE_PATH ?? '/').trim().replace(/\/+$/, '');
const problems = [];
const fail = (file, msg) => problems.push(`${file}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const htmlFiles = walk(root).filter((f) => f.endsWith('.html'));
const toUrlPath = (file) => base + '/' + relative(root, file).replace(/index\.html$/, '').replace(/\\/g, '/');
const pages = new Map(htmlFiles.map((f) => [toUrlPath(f), readFileSync(f, 'utf8')]));

const titles = new Map();
const descriptions = new Map();
const hreflangs = new Map();
const entityIds = new Set();
const typeCount = new Map();

const resolves = (href) => {
  let clean = decodeURI(href.split('#')[0].split('?')[0]);
  if (!clean) return true;
  if (base) {
    if (!clean.startsWith(base + '/')) return false;
    clean = clean.slice(base.length);
  }
  if (clean.startsWith('/api/')) return true;
  const target = join(root, clean);
  return existsSync(target) && statSync(target).isFile()
    ? true
    : existsSync(join(target, 'index.html'));
};

for (const [url, html] of pages) {
  const file = url;
  const isErrorPage = url === `${base}/404.html`;
  const lang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1];
  const dir = html.match(/<html[^>]*\bdir="([^"]+)"/)?.[1];
  const expectAr = url.startsWith(`${base}/ar/`);
  if (lang !== (expectAr ? 'ar' : 'en')) fail(file, `lang is ${lang}`);
  if (dir !== (expectAr ? 'rtl' : 'ltr')) fail(file, `dir is ${dir}`);

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(file, `has ${h1s.length} <h1> elements`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) fail(file, 'missing title');
  if (!desc) fail(file, 'missing meta description');
  if (!isErrorPage) {
    if (titles.has(title)) fail(file, `duplicate title with ${titles.get(title)}`);
    if (descriptions.has(desc)) fail(file, `duplicate description with ${descriptions.get(desc)}`);
    titles.set(title, file);
    descriptions.set(desc, file);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical && !canonical.endsWith(url)) fail(file, `canonical ${canonical} does not match path`);
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  if (alts.length) hreflangs.set(url, Object.fromEntries(alts));

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      fail(file, 'invalid JSON-LD');
      continue;
    }
    const text = JSON.stringify(data);
    if (/aggregateRating|"review"|"address"|"openingHours/.test(text)) fail(file, 'JSON-LD contains unsupported business claims');
    for (const id of text.matchAll(/"@id":"([^"]+)"/g)) entityIds.add(id[1]);
    if (data['@type']) typeCount.set(`${file}|${data['@type']}`, (typeCount.get(`${file}|${data['@type']}`) ?? 0) + 1);
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) fail(file, `img without alt: ${m[0].slice(0, 80)}`);
  }

  for (const m of html.matchAll(/\b(?:href|src|srcset)="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const href = part.trim().split(/\s+/)[0];
      if (href.startsWith('/') && !href.startsWith('//') && !resolves(href)) fail(file, `broken link ${href}`);
      if (href.startsWith('tel:') && !/^tel:\+\d{8,15}$/.test(href)) fail(file, `malformed ${href}`);
      if (href.startsWith('https://wa.me/') && !/^https:\/\/wa\.me\/\d{8,15}(\?text=.*)?$/.test(href)) fail(file, `malformed ${href}`);
      if (href.startsWith('mailto:') && !/^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/.test(href)) fail(file, `malformed ${href}`);
    }
  }
  if (/href="(?:#|javascript:)"/.test(html)) fail(file, 'placeholder link');
}

for (const [key, n] of typeCount) if (n > 1) fail(key.split('|')[0], `duplicate ${key.split('|')[1]} JSON-LD blocks`);
const orgIds = [...entityIds].filter((id) => id.endsWith('#organization'));
if (orgIds.length > 1) problems.push(`More than one Organization @id in use: ${orgIds.join(', ')}`);

// Reciprocal hreflang: every alternate must list this page back.
for (const [url, alts] of hreflangs) {
  for (const [lang, href] of Object.entries(alts)) {
    if (lang === 'x-default') continue;
    const path = new URL(href).pathname;
    const back = hreflangs.get(path);
    if (!back) fail(url, `hreflang ${lang} target ${path} not built or has no alternates`);
    else if (!Object.values(back).some((h) => new URL(h).pathname === url)) fail(url, `hreflang ${lang} not reciprocal`);
  }
}

const robots = existsSync(join(root, 'robots.txt')) ? readFileSync(join(root, 'robots.txt'), 'utf8') : '';
const indexable = /Allow: \//.test(robots);
for (const [url, html] of pages) {
  const robotsMeta = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? '';
  if (url === `${base}/404.html`) {
    if (!robotsMeta.includes('noindex')) fail(url, '404 page should be noindex');
  } else if (indexable === robotsMeta.includes('noindex')) {
    fail(url, `robots meta "${robotsMeta}" disagrees with robots.txt`);
  }
}

if (indexable) {
  for (const [url, html] of pages) {
    for (const marker of ['5X XXX XXXX', 'info@leakfix.example', 'trial-contact', 'Trial preview', 'نسخة تجريبية']) {
      if (html.includes(marker)) fail(url, `production build contains placeholder "${marker}"`);
    }
  }
  // Launch gate: an indexable build must offer at least one real way to call or message LeakFix.
  const home = pages.get(`${base}/`) ?? '';
  if (!/href="(tel:|https:\/\/wa\.me\/)/.test(home)) {
    problems.push('Production build has no telephone or WhatsApp link: set phone/whatsapp in src/config/business.ts before launch.');
  }
}

console.log(`Checked ${pages.size} pages in ${root}. Indexable build: ${indexable ? 'yes' : 'no'}.`);
if (problems.length) {
  console.error(problems.map((p) => ` - ${p}`).join('\n'));
  process.exit(1);
}
console.log('No problems found.');
