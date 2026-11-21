import type { Lang, PageKey } from '../i18n/routes';
import type { Meta } from './pages';

/**
 * FAQs page: practical questions that help a customer decide what to do next.
 * Each answer links to the page with more detail. No FAQPage structured data.
 * No prices, response times or unconfirmed services.
 */
export interface FaqLink {
  page: PageKey;
  label: string;
}
export interface FaqItem {
  q: string;
  a: string;
  links: FaqLink[];
}
export interface FaqsPage {
  meta: Meta;
  h1: string;
  intro: string;
  groups: { title: string; items: FaqItem[] }[];
  moreTitle: string;
  moreText: string;
}

const en: FaqsPage = {
  meta: {
    title: 'FAQs: Water Leaks and Plumbing in Riyadh | LeakFix',
    description:
      'Should you book leak detection or a repair? What photos should you send, how do you check coverage in Riyadh and what affects a quote? Answers from LeakFix.',
  },
  h1: 'Frequently Asked Questions',
  intro: 'Practical answers to help you decide what to do next, with a link to the page that explains each topic in more detail.',
  groups: [
    {
      title: 'Detection or repair?',
      items: [
        {
          q: 'Do I need leak detection or a repair?',
          a: 'If you can see damp, a stain or a rising water bill but not where the water comes from, start with leak detection so the source is found first. If the leaking pipe, connection or fixture is already visible or has been identified, a repair can often be planned directly.',
          links: [
            { page: 'detection', label: 'Water Leak Detection' },
            { page: 'repair', label: 'Water Leak Repair' },
          ],
        },
        {
          q: 'Another contractor already found the leak. Can you repair it?',
          a: 'Send us what they found, with photos or notes if you have them. That helps us judge whether the repair can be planned from that information or whether the source should be confirmed first.',
          links: [{ page: 'repair', label: 'Water Leak Repair' }],
        },
        {
          q: 'Will tiles or walls need to be opened?',
          a: 'The inspection itself often narrows the leak down without opening anything. Reaching the pipe to repair it is a separate step: if a wall, tiles or ground must be opened, that is explained and agreed with you first.',
          links: [{ page: 'detection', label: 'How detection works before anything is opened' }],
        },
        {
          q: 'Is it a plumbing job or a hidden leak?',
          a: 'A dripping tap, a leaking hose under the sink, a running toilet cistern or a single blocked sink is usually plumbing work. Damp walls, a rising bill or running water you cannot trace usually point to a hidden leak.',
          links: [
            { page: 'plumbing', label: 'Plumbing Services' },
            { page: 'hidden', label: 'Leaks in Walls & Floors' },
          ],
        },
      ],
    },
    {
      title: 'Getting in touch',
      items: [
        {
          q: 'What photos should I send?',
          a: 'One wide photo of the room, one close-up of the damp patch, drip or stain, the pipework under the sink if it is relevant, and the water meter if you have checked it. A short video helps if you can hear running water.',
          links: [{ page: 'howItWorks', label: 'What to send on WhatsApp' }],
        },
        {
          q: 'What should my first message say?',
          a: 'Your district, what you noticed and where. For example: “I’m in [district]. I noticed [problem] in [location].” Add when it started and whether the source is already known.',
          links: [{ page: 'contact', label: 'Contact LeakFix' }],
        },
        {
          q: 'How do I check whether you cover my district?',
          a: 'Send your district in Riyadh and a short description of the problem. We confirm availability for each visit by district and timing.',
          links: [{ page: 'areas', label: 'Riyadh Service Areas' }],
        },
      ],
    },
    {
      title: 'Prices and visits',
      items: [
        {
          q: 'What affects the price of a quote?',
          a: 'Any inspection or call-out charge, the labour for the agreed work, the parts needed, any access such as opening a wall or lifting tiles, and whether finishing of opened surfaces is included. The scope and price are confirmed with you before work starts.',
          links: [
            { page: 'repair', label: 'What to confirm before a repair' },
            { page: 'plumbing', label: 'Plumbing Services' },
          ],
        },
        {
          q: 'What happens during an inspection visit?',
          a: 'The engineer goes over what you reported, checks the water meter and the pipework that can be reached, and uses the detection methods that suit the property. You are told what the findings point to before any repair is discussed.',
          links: [{ page: 'howItWorks', label: 'How It Works' }],
        },
        {
          q: 'Can I share feedback after the visit?',
          a: 'Yes. Private feedback is seen only by LeakFix. A review is published only if you give permission.',
          links: [{ page: 'reviews', label: 'Customer Reviews & Feedback' }],
        },
      ],
    },
  ],
  moreTitle: 'Still have a question?',
  moreText: 'Send us a short message with your district and what you have noticed.',
};

const ar: FaqsPage = {
  meta: {
    title: 'الأسئلة الشائعة: تسربات المياه والسباكة في الرياض | LeakFix',
    description:
      'هل تحتاج إلى كشف التسربات أم إلى الإصلاح؟ ما الصور التي ترسلها، وكيف تتحقق من التغطية في الرياض، وما الذي يؤثر في السعر؟ إجابات من LeakFix.',
  },
  h1: 'الأسئلة الشائعة',
  intro: 'إجابات عملية تساعدك على تحديد خطوتك التالية، مع رابط للصفحة التي تشرح كل موضوع بتفصيل أكبر.',
  groups: [
    {
      title: 'كشف أم إصلاح؟',
      items: [
        {
          q: 'هل أحتاج إلى كشف التسربات أم إلى الإصلاح؟',
          a: 'إذا كنت ترى رطوبة أو بقعة أو ارتفاعًا في فاتورة المياه ولا تعرف من أين تأتي المياه، فابدأ بكشف التسربات لتحديد المصدر أولًا. أما إذا كانت الماسورة أو الوصلة أو القطعة المسرّبة ظاهرة أو محددة مسبقًا، فيمكن غالبًا التخطيط للإصلاح مباشرة.',
          links: [
            { page: 'detection', label: 'كشف تسربات المياه' },
            { page: 'repair', label: 'إصلاح تسربات المياه' },
          ],
        },
        {
          q: 'حدّد مقاول آخر مكان التسرب، فهل يمكنكم إصلاحه؟',
          a: 'أرسل لنا ما توصّل إليه، مع الصور أو الملاحظات إن توفرت. يساعدنا ذلك على معرفة ما إذا كان يمكن التخطيط للإصلاح بناءً على هذه المعلومات أو يلزم تأكيد المصدر أولًا.',
          links: [{ page: 'repair', label: 'إصلاح تسربات المياه' }],
        },
        {
          q: 'هل سيلزم فتح البلاط أو الجدران؟',
          a: 'كثيرًا ما يضيّق الفحص نفسه مكان التسرب دون فتح أي شيء. أما الوصول إلى الماسورة لإصلاحها فخطوة منفصلة: إذا لزم فتح جدار أو بلاط أو أرض، نوضّح ذلك ونتفق معك عليه أولًا.',
          links: [{ page: 'detection', label: 'كيف يتم الكشف قبل فتح أي شيء' }],
        },
        {
          q: 'هل هي مشكلة سباكة أم تسرب مخفي؟',
          a: 'الحنفية التي تقطّر، أو اللّيّ المسرّب تحت المغسلة، أو سيفون المرحاض الذي يستمر في الجريان، أو انسداد مغسلة واحدة، غالبًا من أعمال السباكة. أما الجدران الرطبة أو ارتفاع الفاتورة أو صوت مياه لا تعرف مصدره فتشير غالبًا إلى تسرب مخفي.',
          links: [
            { page: 'plumbing', label: 'خدمات السباكة' },
            { page: 'hidden', label: 'تسربات الجدران والأرضيات' },
          ],
        },
      ],
    },
    {
      title: 'التواصل معنا',
      items: [
        {
          q: 'ما الصور التي أرسلها؟',
          a: 'صورة عامة للغرفة، وصورة قريبة للرطوبة أو التنقيط أو البقعة، وصورة للتمديدات أسفل المغسلة إن كان ذلك مناسبًا، وصورة لعدّاد المياه إن كنت قد راجعته. ويفيد مقطع فيديو قصير إذا كنت تسمع صوت جريان مياه.',
          links: [{ page: 'howItWorks', label: 'ماذا ترسل عبر واتساب' }],
        },
        {
          q: 'ماذا أكتب في رسالتي الأولى؟',
          a: 'اسم الحي، وما لاحظته، وأين. مثلًا: «أنا في حي [الحي]. لاحظت [المشكلة] في [المكان].» وأضف متى بدأت المشكلة، وهل مصدرها معروف.',
          links: [{ page: 'contact', label: 'تواصل مع LeakFix' }],
        },
        {
          q: 'كيف أتأكد أنكم تخدمون حيّي؟',
          a: 'أرسل لنا اسم الحي في الرياض ووصفًا مختصرًا للمشكلة، ونؤكد لك إمكانية الزيارة حسب الحي والموعد.',
          links: [{ page: 'areas', label: 'مناطق الخدمة في الرياض' }],
        },
      ],
    },
    {
      title: 'الأسعار والزيارات',
      items: [
        {
          q: 'ما الذي يؤثر في السعر؟',
          a: 'أي رسوم للفحص أو الزيارة، وأجرة العمل المتفق عليه، والقطع اللازمة، وأي أعمال للوصول مثل فتح جدار أو رفع بلاط، وهل يشمل العمل تشطيب الأسطح التي فُتحت. ونؤكد معك النطاق والسعر قبل بدء العمل.',
          links: [
            { page: 'repair', label: 'ما الذي تتأكد منه قبل الإصلاح' },
            { page: 'plumbing', label: 'خدمات السباكة' },
          ],
        },
        {
          q: 'ماذا يحدث أثناء زيارة الفحص؟',
          a: 'يراجع المهندس ما أبلغت عنه، ويفحص عدّاد المياه والتمديدات التي يمكن الوصول إليها، ويستخدم طرق الكشف المناسبة للعقار. ونوضّح لك إلامَ تشير النتائج قبل مناقشة أي إصلاح.',
          links: [{ page: 'howItWorks', label: 'كيف نعمل' }],
        },
        {
          q: 'هل يمكنني مشاركة ملاحظاتي بعد الزيارة؟',
          a: 'نعم. الملاحظات الخاصة لا يطّلع عليها إلا فريق LeakFix، ولا يُنشر أي تقييم إلا بموافقتك.',
          links: [{ page: 'reviews', label: 'آراء العملاء والملاحظات' }],
        },
      ],
    },
  ],
  moreTitle: 'لديك سؤال آخر؟',
  moreText: 'أرسل لنا رسالة قصيرة باسم الحي وما لاحظته.',
};

export const faqsPage = { en, ar } satisfies Record<Lang, FaqsPage>;
