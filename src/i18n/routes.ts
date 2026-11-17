export type Lang = 'en' | 'ar';
export type PageKey = 'home' | 'detection' | 'repair' | 'areas' | 'about' | 'contact' | 'privacy';

const slugs: Record<PageKey, string> = {
  home: '',
  detection: 'water-leak-detection/',
  repair: 'water-leak-repair/',
  areas: 'areas-we-cover/',
  about: 'about/',
  contact: 'contact/',
  privacy: 'privacy-policy/',
};

export const pageKeys = Object.keys(slugs) as PageKey[];

export function path(page: PageKey, lang: Lang): string {
  return (lang === 'ar' ? '/ar/' : '/') + slugs[page];
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'ar' : 'en');
