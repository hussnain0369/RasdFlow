import type { Lang } from '../i18n/routes';
import type { Faq, Meta, Section } from './pages';

/**
 * Plumbing Services page. Only categories confirmed by the owner are listed:
 * kitchen/bathroom plumbing, taps and fixtures (customer-supplied fixtures allowed),
 * pipe and fitting replacement, and blocked individual fixtures.
 * Water heaters, pumps and larger drainage lines are NOT confirmed and are not listed.
 */
export interface PlumbingPage {
  meta: Meta;
  h1: string;
  intro: string;
  imageAlt: string;
  workTitle: string;
  work: { icon: 'fixture' | 'repair' | 'damp' | 'usage'; title: string; notice: string; text: string }[];
  hidden: { title: string; text: string; detectionLink: string; repairLink: string };
  beforeWork: Section;
  faqs: Faq[];
  cta: { title: string; text: string };
}

const en: PlumbingPage = {
  meta: {
    title: 'Plumbing Services in Riyadh | LeakFix',
    description:
      'Plumbing in Riyadh: dripping sink connections, taps and toilet cisterns, damaged pipes and fittings, and blocked sinks or toilets. Call or WhatsApp LeakFix.',
  },
  h1: 'Plumbing Services in Riyadh',
  intro:
    'Need help with a plumbing problem in Riyadh? Tell LeakFix which fixture or pipe is affected and what you have noticed. We can discuss the work, any parts needed and availability for a visit.',
  imageAlt: 'Illustration of plumbing work: a technician tightens a brass valve connection under a washbasin using two spanners',
  workTitle: 'Plumbing Work We Can Help With',
  work: [
    {
      icon: 'fixture',
      title: 'Kitchen and bathroom plumbing',
      notice: 'Water under the sink, a damp cabinet base, or a hose or valve that drips.',
      text: 'We look at dripping connections beneath sinks, leaking supply hoses, worn isolation valves and pipe fittings that can be reached without opening a wall.',
    },
    {
      icon: 'usage',
      title: 'Taps and sanitary fixtures',
      notice: 'A tap that drips or will not shut off, a loose basin, a leaking bidet sprayer or a toilet cistern that keeps running.',
      text: 'We repair or replace mixer taps, basins, bidet sprayers and cistern parts. You can supply your own replacement fixture: tell us the model when you get in touch so we can check it suits the existing connection.',
    },
    {
      icon: 'repair',
      title: 'Pipe and fitting replacement',
      notice: 'A joint that weeps, a valve that no longer seals, or a section of pipe that is damaged or corroded.',
      text: 'We replace damaged joints, valves and pipe sections. If the pipe runs behind a wall or under tiles, reaching it adds access work and affects the quote, so we explain that before the price is agreed.',
    },
    {
      icon: 'damp',
      title: 'Blocked sinks, basins and toilets',
      notice: 'Water that drains slowly or not at all from one sink, basin or toilet.',
      text: 'We clear blockages in individual fixtures. If several fixtures are slow at the same time, the cause may be further along a larger drainage line, so mention it when you contact us and we will tell you whether it is work we can take on.',
    },
  ],
  hidden: {
    title: 'Leaks you cannot see',
    text: 'Damp walls, a rising water bill or the sound of running water you cannot trace usually point to a hidden leak rather than a plumbing fixture.',
    detectionLink: 'Water Leak Detection',
    repairLink: 'Water Leak Repair, for a leak already found',
  },
  beforeWork: {
    title: 'What to Confirm Before Work Starts',
    body: ['Before you agree to the work, make sure you know:'],
    list: [
      'Any inspection or call-out charge.',
      'The labour for the work agreed.',
      'Which parts are needed, and whether you are supplying any yourself.',
      'Any access needed, such as opening a wall or lifting tiles.',
      'Whether finishing of any opened surfaces is included.',
    ],
  },
  faqs: [
    {
      q: 'Can the job be finished in one visit?',
      a: 'That depends on the problem and whether the parts needed are to hand. If a part has to be ordered, we tell you and agree a return visit before leaving.',
    },
    {
      q: 'Should I turn the water off before you arrive?',
      a: 'If water is escaping and you know where the isolation valve or main stop valve is, close it. If you are not sure, leave it and describe what is happening when you call or message us.',
    },
    {
      q: 'Do you work in apartments as well as villas?',
      a: 'Yes. In an apartment building, let us know if the building management must approve access or if the work involves a pipe shared with other flats.',
    },
  ],
  cta: {
    title: 'Talk to LeakFix About a Plumbing Job',
    text: 'Call or WhatsApp us with the fixture or pipe affected and what you have noticed.',
  },
};

const ar: PlumbingPage = {
  meta: {
    title: 'سباك بالرياض | خدمات السباكة | LeakFix',
    description:
      'خدمات السباكة في الرياض: تسرب توصيلات المغاسل، والخلاطات وسيفونات المراحيض، واستبدال المواسير والوصلات التالفة، وتسليك انسداد المغاسل والمراحيض. اتصل أو راسل LeakFix عبر واتساب.',
  },
  h1: 'خدمات السباكة في الرياض',
  intro:
    'تحتاج إلى سباك في الرياض؟ أخبرنا بمكان المشكلة وما لاحظته، سواء كانت في أحد التمديدات أو في قطعة من الأدوات الصحية. نوضح لك الخطوة المناسبة، وما قد يلزم من قطع، وإمكانية ترتيب زيارة.',
  imageAlt: 'صورة توضيحية لأعمال السباكة: فنّي يشدّ وصلة محبس نحاسية أسفل مغسلة باستخدام مفتاحين',
  workTitle: 'أعمال السباكة التي نساعدك فيها',
  work: [
    {
      icon: 'fixture',
      title: 'سباكة المطابخ ودورات المياه',
      notice: 'مياه تحت المغسلة، أو رطوبة في قاعدة الخزانة، أو ليّ أو محبس يقطّر.',
      text: 'نفحص التوصيلات التي تقطّر أسفل المغاسل، واللّيّات المسرّبة، والمحابس التالفة، والوصلات التي يمكن الوصول إليها دون فتح الجدار.',
    },
    {
      icon: 'usage',
      title: 'الخلاطات والأدوات الصحية',
      notice: 'حنفية تقطّر أو لا تُغلق، أو مغسلة غير ثابتة، أو شطّاف يسرّب، أو سيفون مرحاض يستمر في الجريان.',
      text: 'نصلح أو نستبدل الخلاطات والمغاسل والشطّافات وقطع السيفون. ويمكنك توفير القطعة البديلة بنفسك: أخبرنا بنوعها عند تواصلك معنا لنتأكد من مناسبتها للتوصيلة الموجودة.',
    },
    {
      icon: 'repair',
      title: 'استبدال المواسير والوصلات',
      notice: 'وصلة ترشح، أو محبس لم يعد يُغلق بإحكام، أو جزء من ماسورة تالف أو متآكل.',
      text: 'نستبدل الوصلات والمحابس وأجزاء المواسير التالفة. وإذا كانت الماسورة خلف جدار أو تحت البلاط، فالوصول إليها يضيف أعمالًا تؤثر في السعر، ونوضّح لك ذلك قبل الاتفاق عليه.',
    },
    {
      icon: 'damp',
      title: 'تسليك انسداد المغاسل والمراحيض',
      notice: 'مياه تنصرف ببطء أو لا تنصرف من مغسلة أو مرحاض واحد.',
      text: 'نسلّك الانسداد في الأدوات الصحية المنفردة. وإذا كانت عدة أدوات بطيئة التصريف في الوقت نفسه، فقد يكون السبب في خط صرف أكبر، فاذكر ذلك عند تواصلك معنا وسنخبرك إن كان من الأعمال التي نقوم بها.',
    },
  ],
  hidden: {
    title: 'تسربات لا تراها',
    text: 'الجدران الرطبة أو ارتفاع فاتورة المياه أو صوت جريان مياه لا تعرف مصدره تشير غالبًا إلى تسرب مخفي، لا إلى مشكلة في الأدوات الصحية.',
    detectionLink: 'كشف تسربات المياه',
    repairLink: 'إصلاح تسربات المياه، لتسرب تم تحديده',
  },
  beforeWork: {
    title: 'ما الذي تتأكد منه قبل بدء العمل',
    body: ['قبل الموافقة على العمل، تأكّد من معرفة:'],
    list: [
      'أي رسوم للفحص أو الزيارة.',
      'أجرة العمل المتفق عليه.',
      'القطع اللازمة، وهل ستوفّر شيئًا منها بنفسك.',
      'أي دخول لازم، مثل فتح جدار أو رفع بلاط.',
      'هل يشمل العمل تشطيب الأسطح التي فُتحت.',
    ],
  },
  faqs: [
    {
      q: 'هل يمكن إنهاء العمل في زيارة واحدة؟',
      a: 'يعتمد ذلك على المشكلة وتوفر القطع اللازمة. وإذا احتجنا إلى طلب قطعة، نخبرك ونتفق معك على موعد العودة قبل المغادرة.',
    },
    {
      q: 'هل أغلق المياه قبل وصولكم؟',
      a: 'إذا كانت المياه تتسرب وتعرف مكان المحبس الفرعي أو الرئيسي فأغلقه. وإذا لم تكن متأكدًا فاتركه، وصِف لنا ما يحدث عند اتصالك أو مراسلتك.',
    },
    {
      q: 'هل تعملون في الشقق كما في الفلل؟',
      a: 'نعم. وفي العمائر، أخبرنا إذا كانت إدارة المبنى يجب أن توافق على الدخول، أو إذا كان العمل يشمل ماسورة مشتركة مع شقق أخرى.',
    },
  ],
  cta: {
    title: 'كلّم LeakFix بخصوص أعمال السباكة',
    text: 'اتصل بنا أو راسلنا عبر واتساب واذكر القطعة أو الماسورة المتأثرة وما لاحظته.',
  },
};

export const plumbing = { en, ar } satisfies Record<Lang, PlumbingPage>;
