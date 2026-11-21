/**
 * Site menu, shared by the desktop bar and the mobile drawer.
 * Built only from pages that exist and contact methods that are configured.
 */
import { path, type Lang, type PageKey } from './routes';
import { t } from './ui';
import { contact, whatsappHref } from '../config/business';

export interface MenuLink {
  href: string;
  label: string;
  /** Page key for aria-current; null for Call and WhatsApp actions. */
  key: PageKey | null;
  action?: 'call' | 'whatsapp';
}
export interface MenuGroup {
  id: string;
  label: string;
  /** Overview page the group label itself links to, if there is one. */
  overview: PageKey | null;
  links: MenuLink[];
}

export function buildMenu(lang: Lang): { home: MenuLink; groups: MenuGroup[] } {
  const ui = t(lang);
  const label = (key: PageKey) => ui.menuLabels[key] ?? (key === 'plumbing' ? ui.plumbingLong : ui.nav[key]);
  const page = (key: PageKey): MenuLink => ({ href: path(key, lang), label: label(key), key });

  // Call and WhatsApp are direct actions using the configured business number (never trial placeholders).
  const actions: MenuLink[] = [];
  if (contact.phone && !contact.phone.demo) actions.push({ href: contact.phone.href, label: ui.call, key: null, action: 'call' });
  const wa = contact.whatsapp && !contact.whatsapp.demo ? whatsappHref(lang) : null;
  if (wa) actions.push({ href: wa, label: ui.whatsappShort, key: null, action: 'whatsapp' });

  return {
    home: { href: path('home', lang), label: ui.nav.home, key: 'home' },
    groups: [
      {
        id: 'services',
        label: ui.services,
        overview: null,
        // Main detection page, its specialist pages, repair (and its specialist page), then plumbing.
        links: (['detection', 'hidden', 'underground', 'repair', 'pipeRepair', 'plumbing'] as PageKey[]).map(page),
      },
      {
        id: 'about',
        label: ui.aboutUs,
        overview: null, // the About Us page is the first link in the group
        links: [
          page('about'),
          page('engineer'),
          page('reviews'),
          page('howItWorks'),
          page('guide'),
          // Completed Projects joins here once a genuine job can be described and its page exists.
        ],
      },
      {
        id: 'contact',
        label: ui.contactUs,
        overview: null, // "Contact LeakFix" is the first link in the group
        links: [page('contact'), page('areas'), page('faqs'), ...actions],
      },
    ],
  };
}
