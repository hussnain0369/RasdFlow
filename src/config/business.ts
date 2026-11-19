/**
 * LeakFix business configuration — the single source of truth for business facts.
 *
 * Every value set to `null` is UNCONFIRMED and is hidden from the public site.
 * Never put placeholder or example values here: whatever is set is published.
 *
 * Contact numbers: use full international format with the country code,
 * digits only after the plus sign, e.g. "+9665XXXXXXXX".
 */

export interface BusinessConfig {
  name: string;
  taglineEn: string;
  taglineAr: string;
  city: { en: string; ar: string };
  /** Telephone number for tel: links. null = hidden. */
  phone: string | null;
  /** WhatsApp number in international format. null = hidden. */
  whatsapp: string | null;
  /** Public enquiry email address. null = hidden. */
  email: string | null;
  /** Contact for privacy requests. Falls back to `email` when null. */
  privacyEmail: string | null;
  /** Registered legal name of the business (for the privacy policy). */
  legalName: string | null;
  /** Commercial registration or similar identifier, if the business wants it shown. */
  registrationNumber: string | null;
  /** Working hours, as the business wants them written. null = not shown. */
  hours: { en: string; ar: string } | null;
  /** How long enquiry data is kept, as the business has decided. null = policy says it is being confirmed. */
  enquiryRetention: { en: string; ar: string } | null;
  /** Name of the website hosting provider, for the privacy policy. */
  hostingProvider: string | null;
  /**
   * The supplied photos showing a thermal imaging camera and an acoustic listening
   * device imply the business uses that equipment. Keep false until the business
   * confirms it does; the photos are then shown on the leak detection page.
   */
  equipmentPhotosConfirmed: boolean;
  /** Team member shown on the Our Engineer page. Only facts the business has supplied. */
  engineer: {
    name: { en: string; ar: string };
    /** Where the engineer trained, as supplied by the business. */
    trainedIn: { en: string; ar: string };
    /** Portrait in src/assets/team/, e.g. 'muhammad-faisal.jpg'. null shows a name badge instead. */
    photo: string | null;
  };
}

export const business: BusinessConfig = {
  name: 'LeakFix',
  taglineEn: 'Water Leak Detection & Repair',
  taglineAr: 'كشف تسربات المياه وإصلاحها',
  city: { en: 'Riyadh', ar: 'الرياض' },
  phone: null,
  whatsapp: null,
  email: null,
  privacyEmail: null,
  legalName: null,
  registrationNumber: null,
  hours: null,
  enquiryRetention: null,
  hostingProvider: null,
  equipmentPhotosConfirmed: false,
  engineer: {
    name: { en: 'Engineer Muhammad Faisal', ar: 'المهندس محمد فيصل' },
    trainedIn: { en: 'Pakistan', ar: 'باكستان' },
    photo: null,
  },
};

/* ---------- derived helpers (no business facts below this line) ---------- */

const digits = (value: string) => value.replace(/[^\d]/g, '');

function isInternational(value: string | null): value is string {
  return !!value && /^\+\d{8,15}$/.test(value.replace(/[\s-]/g, ''));
}

export const contact = {
  phone: isInternational(business.phone)
    ? {
        href: `tel:+${digits(business.phone)}`,
        display: business.phone.trim(),
      }
    : null,
  whatsapp: isInternational(business.whatsapp)
    ? {
        href: `https://wa.me/${digits(business.whatsapp)}`,
        display: business.whatsapp.trim(),
      }
    : null,
  email:
    business.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email)
      ? { href: `mailto:${business.email}`, display: business.email }
      : null,
};

export const hasDirectContact = Boolean(contact.phone || contact.whatsapp || contact.email);

/** Pre-filled WhatsApp text so the business knows where the enquiry came from. */
export function whatsappHref(lang: 'en' | 'ar'): string | null {
  if (!contact.whatsapp) return null;
  const text =
    lang === 'ar'
      ? 'السلام عليكم، أبي أستفسر عن تسرب مياه في الرياض.'
      : 'Hello LeakFix, I would like to ask about a water leak in Riyadh.';
  return `${contact.whatsapp.href}?text=${encodeURIComponent(text)}`;
}
