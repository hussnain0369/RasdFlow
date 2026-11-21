import type { Lang } from '../i18n/routes';
import type { Meta } from './pages';

/**
 * Customer Reviews & Feedback page. Public reviews and private feedback are labelled separately.
 * Reviews are only shown from src/data/reviews.ts (approved, with permission). Nothing here is a review.
 */
export interface ReviewsPage {
  meta: Meta;
  h1: string;
  intro: string;
  publicTitle: string;
  publicBadge: string;
  publicEmpty: string;
  googleText: string;
  privateTitle: string;
  privateBadge: string;
  privateText: string;
  privateFormText: string;
  privateWaNote: string;
  howTitle: string;
  how: string[];
}

const en: ReviewsPage = {
  meta: {
    title: 'Customer Reviews & Feedback | LeakFix Riyadh',
    description:
      'Send LeakFix private feedback about a plumbing or water leak visit in Riyadh, and see how customer reviews are published only with permission.',
  },
  h1: 'Customer Reviews & Feedback',
  intro:
    'Tell us how your visit went. Private feedback is seen only by LeakFix. Customer reviews appear on this page only when the customer has agreed to share them.',
  publicTitle: 'Public reviews',
  publicBadge: 'Public: visible to everyone',
  publicEmpty:
    'No customer reviews are published on this website yet. We only publish reviews that customers have agreed to share, in their own words, and we never write or edit reviews ourselves.',
  googleText: 'You can also review LeakFix on Google. Google reviews are public and appear on LeakFix’s Google profile.',
  privateTitle: 'Private feedback',
  privateBadge: 'Private: only LeakFix sees it',
  privateText: 'Tell us what went well and what we could improve. Every rating helps, good or bad. Private feedback is read by LeakFix and is not published.',
  privateFormText: 'The feedback form takes a minute. You can choose to let us publish your feedback; otherwise it stays private.',
  privateWaNote: 'If you are happy for your feedback to be published as a review, say so in your message and tell us the name to show, or that you prefer to stay anonymous.',
  howTitle: 'How reviews are published',
  how: [
    'A review is published only if the customer gives permission and LeakFix approves it.',
    'The rating and the customer’s words are shown as given, with the display name they chose or as “Customer”.',
    'Phone numbers and email addresses are never published.',
    'A review is removed if the customer asks.',
  ],
};

const ar: ReviewsPage = {
  meta: {
    title: 'آراء العملاء والملاحظات | LeakFix الرياض',
    description:
      'أرسل ملاحظاتك الخاصة إلى LeakFix عن زيارة سباكة أو تسرب مياه في الرياض، وتعرّف على طريقة نشر تقييمات العملاء بعد موافقتهم فقط.',
  },
  h1: 'آراء العملاء والملاحظات',
  intro:
    'أخبرنا كيف كانت زيارتك. الملاحظات الخاصة لا يطّلع عليها إلا فريق LeakFix، ولا تُنشر تقييمات العملاء في هذه الصفحة إلا بعد موافقة أصحابها.',
  publicTitle: 'التقييمات العامة',
  publicBadge: 'عامة: يراها الجميع',
  publicEmpty:
    'لا توجد تقييمات عملاء منشورة على الموقع حتى الآن. ننشر فقط التقييمات التي وافق أصحابها على مشاركتها، بكلماتهم هم، ولا نكتب التقييمات أو نعدّلها بأنفسنا.',
  googleText: 'يمكنك أيضًا تقييم LeakFix على Google. تقييمات Google عامة وتظهر في ملف LeakFix على Google.',
  privateTitle: 'الملاحظات الخاصة',
  privateBadge: 'خاصة: لا يراها إلا فريق LeakFix',
  privateText: 'أخبرنا بما أعجبك وما يمكننا تحسينه. كل تقييم يفيدنا، إيجابيًا كان أو سلبيًا. يقرأ فريق LeakFix الملاحظات الخاصة ولا تُنشر.',
  privateFormText: 'نموذج الملاحظات لا يستغرق أكثر من دقيقة. ويمكنك أن تسمح لنا بنشر ملاحظتك، وإلا تبقى خاصة.',
  privateWaNote: 'إذا كنت لا تمانع نشر ملاحظتك كتقييم، فاذكر ذلك في رسالتك مع الاسم الذي تودّ ظهوره، أو أنك تفضّل عدم ذكر اسمك.',
  howTitle: 'كيف ننشر التقييمات',
  how: [
    'لا يُنشر التقييم إلا إذا وافق العميل على نشره ووافقت LeakFix عليه.',
    'يظهر التقييم وكلمات العميل كما كتبها، مع الاسم الذي اختاره أو باسم «عميل».',
    'لا تُنشر أرقام الهواتف أو عناوين البريد الإلكتروني أبدًا.',
    'يُحذف التقييم إذا طلب العميل ذلك.',
  ],
};

export const reviewsPage = { en, ar } satisfies Record<Lang, ReviewsPage>;
