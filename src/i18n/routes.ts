export type Lang = 'en' | 'ar';
export type PageKey =
  | 'home'
  | 'detection'
  | 'repair'
  | 'hidden'
  | 'underground'
  | 'pipeRepair'
  | 'howItWorks'
  | 'guide'
  | 'areas'
  | 'about'
  | 'engineer'
  | 'contact'
  | 'privacy';

const slugs: Record<PageKey, string> = {
  home: '',
  detection: 'water-leak-detection/',
  repair: 'water-leak-repair/',
  hidden: 'hidden-water-leak-detection/',
  underground: 'underground-water-leak-detection/',
  pipeRepair: 'pipe-leak-repair/',
  howItWorks: 'how-it-works/',
  guide: 'water-leak-guide/',
  areas: 'areas-we-cover/',
  about: 'about/',
  engineer: 'our-engineer/',
  contact: 'contact/',
  privacy: 'privacy-policy/',
};

export const pageKeys = Object.keys(slugs) as PageKey[];

/** Site base path, e.g. "" at a domain root or "/RasdFlow" on GitHub Pages. No trailing slash. */
export const basePath = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/** Prefix a root-relative path ("/favicon.png") with the base path. */
export const withBase = (p: string): string => basePath + (p.startsWith('/') ? p : `/${p}`);

export function path(page: PageKey, lang: Lang): string {
  return withBase((lang === 'ar' ? '/ar/' : '/') + slugs[page]);
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'ar' : 'en');
