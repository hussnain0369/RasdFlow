import { isProduction } from './site';

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
   * TRIAL ONLY. While true, any contact method that is still null is shown with an
   * obvious placeholder (+966 5X XXX XXXX, info@leakfix.example). Tapping it opens a
   * "trial preview" message instead of calling anyone. Set to false before launch.
   */
  demoContact: boolean;
  /** Team member shown on the Our Engineer page. Only facts the business has supplied. */
  engineer: {
    name: { en: string; ar: string };
    trainedIn: { en: string; ar: string } | null;
    /** Professional title confirmed by the business (verified). */
    title: { en: string; ar: string };
    /** Portrait supplied or approved by the engineer, in src/assets/team/. null = text-only profile. */
    photo: string | null;
    /** Verified qualification, e.g. degree and awarding body. null = not shown. */
    qualification: { en: string; ar: string } | null;
    /** Verified experience: a sentence for prose and a short form for the profile facts. null = not shown. */
    experience: { en: string; ar: string } | null;
    experienceShort: { en: string; ar: string } | null;
    /** Verified training provider, shown with trainedIn. null = not shown. */
    trainingProvider: { en: string; ar: string } | null;
  };
  /** Detection methods the business has confirmed it offers. Unconfirmed methods are never published. */
  methods: Record<MethodKey, boolean>;
  /** Whether reinstatement of opened surfaces is included. null = not confirmed; copy says it is agreed per job. */
  reinstatement: 'included' | 'separate' | null;
  /** Completed jobs approved for publication. Empty = section hidden. */
  projects: ProjectExample[];
  /**
   * Google "write a review" link from the verified Google Business Profile
   * (Profile > Ask for reviews). Shown to every visitor alike. null = not shown.
   * Approved reviews themselves live in src/data/reviews.ts.
   */
  googleReviewUrl: string | null;
  /** Verified inspection fee wording in Saudi riyals, e.g. { en: 'SAR 250 for a standard villa visit', ar: '...' }. null = not shown. */
  inspectionFee: Bi | null;
  /** Riyadh districts the business confirms it serves. Empty = coverage described as Riyadh with availability checked per enquiry. */
  serviceDistricts: Bi[];
  /** A redacted sample inspection report in /public, e.g. '/sample-inspection-report.pdf'. null = not linked. */
  sampleReport: string | null;
  /** Public Google Business Profile URL, used for structured data sameAs once verified. */
  googleBusinessProfileUrl: string | null;
}

export type MethodKey = 'acoustic' | 'thermal' | 'pressure' | 'underground';
export type Bi = { en: string; ar: string };

export interface ProjectExample {
  /** Only with the customer's permission. */
  district: Bi | null;
  problem: Bi;
  method: MethodKey[];
  findings: Bi;
  repair: Bi;
  outcome: Bi;
  /** How the result was checked, e.g. a pressure test after the repair. */
  checked: Bi;
  /** Service page this example belongs to. */
  service: 'detection' | 'hidden' | 'underground' | 'repair' | 'pipeRepair';
  /** Approved job photo in src/assets/projects/. */
  photo: string | null;
  photoAlt: Bi | null;
}


export const business: BusinessConfig = {
  name: 'LeakFix',
  taglineEn: 'Plumbing, Water Leak Detection & Repair',
  taglineAr: 'السباكة وكشف تسربات المياه وإصلاحها',
  city: { en: 'Riyadh', ar: 'الرياض' },
  phone: '+966 59 221 7510',
  whatsapp: '+966 59 221 7510',
  email: 'hussnainhh369@gmail.com',
  privacyEmail: null,
  legalName: null,
  registrationNumber: null,
  hours: null,
  enquiryRetention: null,
  hostingProvider: null,
  demoContact: false,
  engineer: {
    name: { en: 'Engineer Muhammad Faisal', ar: 'المهندس محمد فيصل' },
    /** Documented qualification or training details. null = no training line is shown. */
    trainedIn: null,
    title: { en: 'Engineer', ar: 'مهندس' },
    photo: null,
    qualification: null,
    // Confirmed by the owner: 25 years of personal experience.
    experience: {
      en: 'He has 25 years of experience in plumbing, water leak detection and repair.',
      ar: 'لديه 25 عامًا من الخبرة في أعمال السباكة وكشف تسربات المياه وإصلاحها.',
    },
    experienceShort: {
      en: '25 years in plumbing, water leak detection and repair',
      ar: '25 عامًا في أعمال السباكة وكشف تسربات المياه وإصلاحها',
    },
    trainingProvider: null,
  },
  // Confirmed by the business owner.
  methods: { acoustic: true, thermal: true, pressure: true, underground: true },
  reinstatement: null,
  projects: [],
  googleReviewUrl: null,
  inspectionFee: null,
  serviceDistricts: [],
  sampleReport: null,
  googleBusinessProfileUrl: null,
};

/* ---------- derived helpers (no business facts below this line) ---------- */

const digits = (value: string) => value.replace(/[^\d]/g, '');

function isInternational(value: string | null): value is string {
  return !!value && /^\+\d{8,15}$/.test(value.replace(/[\s-]/g, ''));
}

export interface ContactMethod {
  href: string;
  display: string;
  /** True for trial placeholders; never used in structured data or the privacy policy. */
  demo?: boolean;
}

/** Link target for trial placeholders; a script opens the trial notice instead. */
export const DEMO_HREF = '#trial-contact';
/** Placeholders never reach a production build, whatever demoContact says. */
const demo = (display: string): ContactMethod | null =>
  business.demoContact && !isProduction ? { href: DEMO_HREF, display, demo: true } : null;

export const contact: Record<'phone' | 'whatsapp' | 'email', ContactMethod | null> = {
  phone: isInternational(business.phone)
    ? { href: `tel:+${digits(business.phone)}`, display: business.phone.trim() }
    : demo('+966 5X XXX XXXX'),
  whatsapp: isInternational(business.whatsapp)
    ? { href: `https://wa.me/${digits(business.whatsapp)}`, display: business.whatsapp.trim() }
    : demo('+966 5X XXX XXXX'),
  email:
    business.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email)
      ? { href: `mailto:${business.email}`, display: business.email }
      : demo('info@leakfix.example'),
};

/** Only real, configured methods: for structured data and the privacy policy. */
export const realContact = {
  phone: contact.phone?.demo ? null : contact.phone,
  whatsapp: contact.whatsapp?.demo ? null : contact.whatsapp,
  email: contact.email?.demo ? null : contact.email,
};
export const isDemoContact = Boolean(contact.phone?.demo || contact.whatsapp?.demo || contact.email?.demo);

export const hasDirectContact = Boolean(contact.phone || contact.whatsapp || contact.email);

/** Pre-filled WhatsApp text so the business knows where the enquiry came from. */
export function whatsappHref(lang: 'en' | 'ar', message?: string): string | null {
  if (!contact.whatsapp) return null;
  if (contact.whatsapp.demo) return contact.whatsapp.href;
  const text =
    message ??
    (lang === 'ar'
      ? 'السلام عليكم، أبي أستفسر عن تسرب مياه في الرياض.'
      : 'Hello LeakFix, I would like to ask about a water leak in Riyadh.');
  return `${contact.whatsapp.href}?text=${encodeURIComponent(text)}`;
}
