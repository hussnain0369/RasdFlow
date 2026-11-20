import type { Lang } from '../i18n/routes';
import type { Faq, Meta, Section } from './pages';
import type { MethodKey } from '../config/business';
import { business } from '../config/business';

/* ------------------------------------------------------------------
 * Detection methods. Each is published only when business.methods[key]
 * is true (confirmed by the business owner).
 * ------------------------------------------------------------------ */

export interface Method {
  key: MethodKey;
  title: string;
  short: string;
  detail: string[];
}

const methodsEn: Method[] = [
  {
    key: 'acoustic',
    title: 'Acoustic leak detection',
    short: 'Listening equipment picks up the sound of water escaping from pressurised pipes.',
    detail: [
      'Sensitive listening equipment helps identify the sound of water escaping from a pressurised pipe. The technician listens at points along the suspected pipe route and compares how the sound changes.',
      'Pipe material, depth and background noise, such as traffic, pumps or air conditioning, can affect how clearly a leak can be heard. Results are checked against other evidence.',
    ],
  },
  {
    key: 'thermal',
    title: 'Thermal imaging',
    short: 'An infrared camera shows surface temperature differences that can guide the inspection.',
    detail: [
      'An infrared camera shows temperature differences across walls, floors and ceilings. Water escaping from a pipe can change the surface temperature around it.',
      'A temperature pattern is not proof of a leak on its own. The technician checks what the camera shows against damp signs, the likely pipe routes and other tests before identifying a likely source.',
    ],
  },
  {
    key: 'pressure',
    title: 'Pressure testing',
    short: 'Monitoring an isolated pipe section shows whether that section is losing pressure.',
    detail: [
      'The technician isolates a suitable section of pipework and monitors its pressure under controlled conditions.',
      'A pressure drop indicates a loss of pressure in that section, which points to a leak somewhere along it. Further checks may be needed to locate the exact point.',
    ],
  },
  {
    key: 'underground',
    title: 'Underground pipe investigation',
    short: 'Buried pipework is assessed and the search area narrowed before any digging is discussed.',
    detail: [
      'For buried supply pipes, the technician assesses the accessible pipework, the water meter and the suspected route of the pipe across the courtyard, garden or driveway.',
      'Suitable tests, such as pressure testing sections and listening along the route, narrow down the search area. Only then is it discussed whether excavation or targeted access is needed, and where.',
    ],
  },
];

const methodsAr: Method[] = [
  {
    key: 'acoustic',
    title: 'الكشف الصوتي عن التسربات',
    short: 'أجهزة استماع تلتقط صوت تسرب المياه من المواسير المضغوطة.',
    detail: [
      'تساعد أجهزة الاستماع الحساسة على تمييز صوت المياه المتسربة من ماسورة تحت الضغط. يستمع الفنّي عند نقاط على امتداد المسار المتوقع للماسورة ويقارن تغيّر الصوت بينها.',
      'تؤثر مادة الماسورة وعمقها والضوضاء المحيطة، مثل حركة السيارات أو المضخات أو المكيفات، في وضوح صوت التسرب، لذلك تُقارَن النتائج بأدلة أخرى.',
    ],
  },
  {
    key: 'thermal',
    title: 'التصوير الحراري',
    short: 'كاميرا تعمل بالأشعة تحت الحمراء تُظهر فروق حرارة الأسطح التي قد توجّه الفحص.',
    detail: [
      'تُظهر الكاميرا الحرارية فروق درجات الحرارة على الجدران والأرضيات والأسقف، فالمياه المتسربة من ماسورة قد تغيّر حرارة السطح المحيط بها.',
      'النمط الحراري وحده لا يثبت وجود تسرب. يقارن الفنّي ما تُظهره الكاميرا بعلامات الرطوبة والمسارات المتوقعة للمواسير والاختبارات الأخرى قبل تحديد المصدر المحتمل.',
    ],
  },
  {
    key: 'pressure',
    title: 'اختبار الضغط',
    short: 'مراقبة ضغط جزء معزول من التمديدات توضّح ما إذا كان يفقد الضغط.',
    detail: [
      'يعزل الفنّي جزءًا مناسبًا من التمديدات ويراقب ضغطه في ظروف مضبوطة.',
      'انخفاض الضغط يدل على فقدانه في ذلك الجزء، وهذا يشير إلى تسرب في مكان ما على امتداده. وقد تلزم فحوصات إضافية لتحديد النقطة بدقة.',
    ],
  },
  {
    key: 'underground',
    title: 'فحص المواسير تحت الأرض',
    short: 'تقييم التمديدات المدفونة وتضييق نطاق البحث قبل مناقشة أي حفر.',
    detail: [
      'في مواسير التغذية المدفونة، يقيّم الفنّي التمديدات التي يمكن الوصول إليها وعداد المياه والمسار المتوقع للماسورة عبر الحوش أو الحديقة أو المدخل.',
      'تُستخدم اختبارات مناسبة، مثل اختبار ضغط أجزاء من الخط والاستماع على امتداد المسار، لتضييق نطاق البحث. وبعدها فقط يُناقَش ما إذا كان الحفر أو فتح موضع محدد ضروريًا، وأين.',
    ],
  },
];

export function methodsFor(lang: Lang, keys?: MethodKey[]): Method[] {
  const all = lang === 'ar' ? methodsAr : methodsEn;
  return all.filter((m) => business.methods[m.key] && (!keys || keys.includes(m.key)));
}

export const methodsSection = {
  en: {
    title: 'How We Find Water Leaks',
    intro: 'The methods used depend on the property, the symptoms and the pipework. Findings from one method are checked against others before a likely source is identified.',
    link: 'More about leak detection',
    illustration: 'Illustration',
  },
  ar: {
    title: 'كيف نحدد تسربات المياه',
    intro: 'تعتمد الطريقة المستخدمة على العقار والأعراض والتمديدات، وتُقارَن نتائج كل طريقة بغيرها قبل تحديد المصدر المحتمل.',
    link: 'المزيد عن كشف التسربات',
    illustration: 'صورة توضيحية',
  },
} satisfies Record<Lang, unknown>;

/* ------------------------------------------------------------------
 * Shared sections: what findings can establish, and opening surfaces.
 * ------------------------------------------------------------------ */

export function findingsSection(lang: Lang): Section {
  return lang === 'ar'
    ? {
        title: 'ما الذي يمكن أن تثبته نتائج الفحص',
        body: ['حسب العقار والطرق المستخدمة، قد يوضّح الفحص ما يلي:'],
        list: [
          'هل يفقد جزء من التمديدات الضغط.',
          'المنطقة المحتملة للتسرب، بعد تضييق نطاق البحث.',
          'المصدر المحتمل لبقعة رطوبة أو مياه ظاهرة.',
          'أن السبب ليس في تمديدات المياه، مثل التكثّف أو مياه الأمطار.',
        ],
        after: ['في بعض الحالات لا يمكن تحديد النقطة الدقيقة دون الوصول إلى الماسورة نفسها، وسنوضّح لك ذلك إن حدث.'],
      }
    : {
        title: 'What the Findings Can Establish',
        body: ['Depending on the property and the methods used, an inspection may show:'],
        list: [
          'Whether a section of pipework is losing pressure.',
          'The likely area of the leak, after the search has been narrowed.',
          'The likely source of a damp patch or visible water.',
          'That the cause is not the water supply, such as condensation or rainwater.',
        ],
        after: ['Sometimes the exact point cannot be confirmed without reaching the pipe itself. If that happens, we explain it.'],
      };
}

export function openingSection(lang: Lang): Section {
  const reinstate = {
    en: {
      included: 'Reinstatement of the opened area is included in the agreed repair.',
      separate: 'Reinstatement of the opened area is quoted and agreed separately from the leak repair.',
      unknown: 'Whether putting the surface back (reinstatement) is part of the work is set out in the agreed scope and price for each job.',
    },
    ar: {
      included: 'إعادة المكان المفتوح إلى حالته مشمولة في الإصلاح المتفق عليه.',
      separate: 'إعادة المكان المفتوح إلى حالته تُسعَّر ويُتفق عليها بشكل منفصل عن إصلاح التسرب.',
      unknown: 'يُحدَّد في نطاق العمل والسعر المتفق عليهما لكل عمل ما إذا كانت إعادة السطح إلى حالته جزءًا من العمل.',
    },
  }[lang];
  const r = business.reinstatement ?? 'unknown';
  return lang === 'ar'
    ? {
        title: 'متى قد يلزم فتح جدار أو رفع بلاط أو حفر',
        body: [
          'بعض التسربات لا يمكن تأكيدها أو إصلاحها إلا بالوصول إلى الماسورة، وقد يعني ذلك فتح جزء من جدار، أو رفع بلاط أرضية، أو الحفر في جزء من الحوش.',
          'نشرح لك قبل أي فتح سبب الحاجة إليه ومكانه وحجمه التقريبي، ولا يُفتح شيء قبل موافقتك.',
          reinstate[r],
        ],
      }
    : {
        title: 'When Opening a Wall, Lifting Tiles or Excavating May Be Needed',
        body: [
          'Some leaks can only be confirmed or repaired by reaching the pipe. That can mean opening part of a wall, lifting floor tiles or excavating part of a courtyard.',
          'Before any opening, we explain why it is needed, where, and roughly how large it will be. Nothing is opened until you agree.',
          reinstate[r],
        ],
      };
}

/* ------------------------------------------------------------------
 * Dedicated service pages.
 * ------------------------------------------------------------------ */

export type ServiceKey = 'hidden' | 'underground' | 'pipeRepair';

export interface ServiceDetail {
  meta: Meta;
  h1: string;
  intro: string;
  image: 'thermal' | 'acoustic' | 'repair';
  imageAlt: string;
  /** Sections before the methods block. */
  lead: Section[];
  methods: MethodKey[];
  methodsTitle: string;
  /** Sections after the methods block (findings/opening are appended automatically for detection pages). */
  tail: Section[];
  detection: boolean;
  faqs: Faq[];
  cta: { title: string; text: string };
}

const en: Record<ServiceKey, ServiceDetail> = {
  hidden: {
    meta: {
      title: 'Hidden Water Leak Detection in Riyadh | LeakFix',
      description:
        'Damp walls, stained ceilings or a rising water bill with no visible leak? LeakFix investigates hidden leaks inside walls, floors and ceilings in Riyadh.',
    },
    h1: 'Hidden Water Leak Detection in Riyadh',
    intro:
      'When water escapes inside a wall, under a floor or above a ceiling, the first sign is often a damp patch, a stain or a higher bill rather than the leak itself. LeakFix investigates hidden leaks so any opening can be planned around the findings.',
    image: 'thermal',
    imageAlt: 'Illustration of thermal imaging: a technician points an infrared camera at a bathroom wall with a damp stain near the floor',
    lead: [
      {
        title: 'Leaks We Investigate',
        list: [
          'Supply pipes running inside bathroom and kitchen walls.',
          'Pipework under floor tiles, including bathroom floors.',
          'Connections behind toilets, basins and showers.',
          'Leaks showing on a ceiling below a bathroom or roof area.',
        ],
      },
      {
        title: 'When This Service Helps',
        body: [
          'Hidden leak detection is useful when you can see the effect of water but not where it comes from: a damp patch that returns, paint that bubbles, tiles that feel damp, or a water meter that moves when nothing is running.',
        ],
      },
      {
        title: 'What the Visit Involves',
        list: [
          'Looking at the affected area and how it has changed.',
          'Checking the water meter and accessible pipework and fixtures.',
          'Using the methods that suit the property, explained below.',
          'Explaining the findings and the proposed next step before anything is opened.',
        ],
      },
    ],
    methodsTitle: 'Methods Used for Hidden Leaks',
    methods: ['thermal', 'acoustic', 'pressure'],
    tail: [
      {
        title: 'What Can Affect the Result',
        list: [
          'Thick tiles, marble or several layers of finish over the pipe.',
          'More than one leak, or a leak that only appears when an outlet is used.',
          'Background noise in the building during the visit.',
          'Recent repairs that have changed how the area looks or behaves.',
        ],
      },
    ],
    detection: true,
    faqs: [
      {
        q: 'Can a hidden leak be found without opening the wall?',
        a: 'Often the search area can be narrowed a long way before anything is opened. Whether the exact point can be confirmed without opening depends on the property and the findings. Any opening is explained and agreed with you first.',
      },
      {
        q: 'The damp patch is in my ceiling. Where is the leak?',
        a: 'Water can travel before it shows, so the source may be above and to one side of the stain, such as in a bathroom on the floor above. The inspection starts from the stain and works back along the likely routes.',
      },
      {
        q: 'What should I do before the visit?',
        a: 'Note when the patch appears and whether it changes when particular taps, showers or toilets are used. Photos taken over a few days help show how it is spreading.',
      },
    ],
    cta: {
      title: 'Describe the damp or stain you have noticed',
      text: 'Send your district in Riyadh, the room and a photo if you can. We will discuss the next step.',
    },
  },
  underground: {
    meta: {
      title: 'Underground Water Leak Detection in Riyadh | LeakFix',
      description:
        'Wet ground, a moving water meter or low pressure? LeakFix investigates leaks in buried supply pipes in courtyards, gardens and driveways in Riyadh.',
    },
    h1: 'Underground Water Leak Detection in Riyadh',
    intro:
      'A leak in a buried supply pipe can run for a long time before it shows. LeakFix investigates underground pipework and narrows down the search area before any excavation is discussed.',
    image: 'acoustic',
    imageAlt: 'Illustration of acoustic leak detection: a technician wearing headphones listens through a ground sensor placed on courtyard paving',
    lead: [
      {
        title: 'Signs of an Underground Leak',
        list: [
          'Wet or sinking ground, or plants growing unusually well along one line.',
          'The water meter moving when every outlet in the property is closed.',
          'Lower water pressure than usual throughout the property.',
          'Cracked or lifting paving near where the supply pipe runs.',
        ],
      },
      {
        title: 'Pipes We Investigate',
        body: [
          'Buried supply pipes between the water meter and the building, and pipework running under courtyards, gardens and driveways within the property.',
        ],
      },
      {
        title: 'What the Visit Involves',
        list: [
          'Checking the meter and confirming whether water is being lost.',
          'Working out the likely route of the buried pipe from the accessible points.',
          'Testing sections and listening along the route to narrow the search area.',
          'Explaining the findings and whether targeted access or excavation is needed.',
        ],
      },
    ],
    methodsTitle: 'Methods Used for Underground Pipes',
    methods: ['underground', 'acoustic', 'pressure'],
    tail: [
      {
        title: 'What Can Affect the Result',
        list: [
          'How deep the pipe is and what it is made of.',
          'Hard surfaces such as concrete or thick paving over the pipe.',
          'Traffic, pumps and other background noise.',
          'Unknown or changed pipe routes from earlier building work.',
        ],
      },
    ],
    detection: true,
    faqs: [
      {
        q: 'Will you need to dig up my courtyard?',
        a: 'The aim is to narrow the search area first, so any excavation is as targeted as possible. Whether digging is needed, where and how much is explained and agreed with you before it happens.',
      },
      {
        q: 'Is the leak on my side of the water meter?',
        a: 'The inspection looks at pipework within the property. Checking the meter with all outlets closed helps show whether water is being lost after the meter.',
      },
      {
        q: 'Does a water tank affect the inspection?',
        a: 'Yes. A tank refilling can make the meter move, so mention any ground or roof tank when you contact us. The inspection takes it into account.',
      },
    ],
    cta: {
      title: 'Tell us about the wet ground or meter readings',
      text: 'Send your district in Riyadh, where the pipe is likely to run and any photos. We will discuss the next step.',
    },
  },
  pipeRepair: {
    meta: {
      title: 'Pipe Leak Repair in Riyadh | LeakFix',
      description:
        'Repair of leaking pipes, joints and connections in Riyadh. LeakFix explains the repair, access and price before work starts.',
    },
    h1: 'Pipe Leak Repair in Riyadh',
    intro:
      'Once a leaking pipe or connection has been found, LeakFix explains how it can be repaired, what access is needed and the price, so you can decide before any work begins.',
    image: 'repair',
    imageAlt: 'Illustration of a pipe repair: a technician tightens a brass valve connection under a washbasin using two spanners',
    lead: [
      {
        title: 'Pipe Leaks We Repair',
        list: [
          'Leaking joints and fittings on supply pipes.',
          'Damaged or corroded sections of pipe.',
          'Connections under sinks and basins and behind toilets.',
          'Isolation valves that leak around the body or spindle.',
          'Buried supply pipes, once the leak has been located.',
        ],
      },
      {
        title: 'How the Repair Is Chosen',
        body: [
          'The repair depends on the pipe material, its condition either side of the leak, where it is and how it can be reached. A single failed fitting may only need that fitting replaced; a corroded section may need a longer length replaced.',
        ],
      },
      {
        title: 'What Is Agreed Before Work Starts',
        list: [
          'The leak being repaired and the proposed repair.',
          'Any opening of walls, floors or ground needed for access.',
          'Parts or pipe sections to be replaced.',
          'The scope and the price.',
        ],
      },
      {
        title: 'Checking the Repair',
        body: [
          'After the repair, the section is checked for continuing leakage in a way that suits the work, which can include pressure testing the repaired pipe. Anything still unresolved is explained.',
        ],
      },
    ],
    methodsTitle: 'Testing Used Around a Repair',
    methods: ['pressure'],
    tail: [],
    detection: false,
    faqs: [
      {
        q: 'Do I need leak detection before a pipe repair?',
        a: 'Not if the leaking pipe or connection is clearly visible and reachable. If the source is not certain, detection first helps make sure the repair addresses the actual leak.',
      },
      {
        q: 'Will the whole pipe be replaced?',
        a: 'Usually only the failed part is repaired. If the pipe either side is also in poor condition, a longer replacement may be recommended and explained before you decide.',
      },
      {
        q: 'How is the price agreed?',
        a: 'The price is based on the repair, the access needed and any parts. It is confirmed before work starts, and any change found during the work is discussed with you first.',
      },
    ],
    cta: {
      title: 'Arrange a pipe leak repair',
      text: 'Tell us where the leak is, what the pipe looks like and your district in Riyadh. Photos help.',
    },
  },
};

const ar: Record<ServiceKey, ServiceDetail> = {
  hidden: {
    meta: {
      title: 'كشف التسربات المخفية بالرياض | LeakFix',
      description:
        'رطوبة في الجدران أو بقع في الأسقف أو ارتفاع في فاتورة المياه دون تسرب ظاهر؟ تفحص LeakFix التسربات المخفية داخل الجدران والأرضيات والأسقف في الرياض.',
    },
    h1: 'كشف التسربات المخفية بالرياض',
    intro:
      'عندما تتسرب المياه داخل جدار أو تحت أرضية أو فوق سقف، تكون أول علامة غالبًا بقعة رطوبة أو أثرًا أو ارتفاعًا في الفاتورة، لا التسرب نفسه. تفحص LeakFix التسربات المخفية حتى يُخطَّط لأي فتح بناءً على النتائج.',
    image: 'thermal',
    imageAlt: 'صورة توضيحية للتصوير الحراري: فنّي يوجّه كاميرا حرارية نحو جدار حمّام عليه أثر رطوبة قرب الأرضية',
    lead: [
      {
        title: 'التسربات التي نفحصها',
        list: [
          'مواسير التغذية داخل جدران دورات المياه والمطابخ.',
          'التمديدات تحت بلاط الأرضيات، ومنها أرضيات دورات المياه.',
          'التوصيلات خلف المراحيض والمغاسل والدُّش.',
          'تسربات تظهر في سقف أسفل دورة مياه أو سطح.',
        ],
      },
      {
        title: 'متى تفيد هذه الخدمة',
        body: [
          'يفيد كشف التسربات المخفية عندما ترى أثر المياه ولا تعرف مصدرها: بقعة رطوبة تعود، أو دهان ينتفخ، أو بلاط رطب، أو عداد مياه يتحرك مع أن لا شيء يعمل.',
        ],
      },
      {
        title: 'ماذا تشمل الزيارة',
        list: [
          'معاينة المكان المتضرر وكيف تغيّر.',
          'فحص عداد المياه والتمديدات والأدوات الصحية التي يمكن الوصول إليها.',
          'استخدام الطرق المناسبة للعقار، الموضّحة أدناه.',
          'شرح النتائج والخطوة التالية المقترحة قبل فتح أي شيء.',
        ],
      },
    ],
    methodsTitle: 'الطرق المستخدمة للتسربات المخفية',
    methods: ['thermal', 'acoustic', 'pressure'],
    tail: [
      {
        title: 'ما الذي قد يؤثر في النتيجة',
        list: [
          'البلاط السميك أو الرخام أو تعدد طبقات التشطيب فوق الماسورة.',
          'وجود أكثر من تسرب، أو تسرب لا يظهر إلا عند استخدام مخرج معيّن.',
          'الضوضاء في المبنى أثناء الزيارة.',
          'إصلاحات حديثة غيّرت شكل المكان أو سلوكه.',
        ],
      },
    ],
    detection: true,
    faqs: [
      {
        q: 'هل يمكن تحديد التسرب المخفي دون فتح الجدار؟',
        a: 'كثيرًا ما يمكن تضييق نطاق البحث بدرجة كبيرة قبل فتح أي شيء. أما تأكيد النقطة الدقيقة دون فتح فيعتمد على العقار والنتائج، وأي فتح يُشرح ويُتفق عليه معك أولًا.',
      },
      {
        q: 'بقعة الرطوبة في السقف، فأين التسرب؟',
        a: 'قد تنتقل المياه قبل أن تظهر، فيكون المصدر أعلى البقعة أو بجانبها، مثل دورة مياه في الدور العلوي. يبدأ الفحص من البقعة ويتتبع المسارات المحتملة.',
      },
      {
        q: 'ماذا أفعل قبل الزيارة؟',
        a: 'لاحظ متى تظهر البقعة وهل تتغير عند استخدام حنفيات أو دُش أو مراحيض معيّنة. الصور الملتقطة على مدى أيام توضّح كيف تنتشر.',
      },
    ],
    cta: {
      title: 'صِف لنا الرطوبة أو البقعة التي لاحظتها',
      text: 'أرسل اسم الحي في الرياض والغرفة وصورة إن أمكن، وسنناقش معك الخطوة التالية.',
    },
  },
  underground: {
    meta: {
      title: 'كشف تسربات المياه تحت الأرض بالرياض | LeakFix',
      description:
        'أرض مبللة أو عداد يتحرك أو ضغط ضعيف؟ تفحص LeakFix تسربات مواسير التغذية المدفونة في الأحواش والحدائق والمداخل بالرياض.',
    },
    h1: 'كشف تسربات المياه تحت الأرض بالرياض',
    intro:
      'قد يستمر التسرب في ماسورة مدفونة مدة طويلة قبل أن يظهر. تفحص LeakFix التمديدات تحت الأرض وتضيّق نطاق البحث قبل مناقشة أي حفر.',
    image: 'acoustic',
    imageAlt: 'صورة توضيحية للكشف الصوتي: فنّي يرتدي سماعات ويستمع عبر حسّاس موضوع على بلاط الحوش',
    lead: [
      {
        title: 'علامات التسرب تحت الأرض',
        list: [
          'أرض مبللة أو هابطة، أو نباتات تنمو بشكل لافت على خط واحد.',
          'عداد المياه يتحرك مع إغلاق جميع المخارج في العقار.',
          'ضغط مياه أضعف من المعتاد في كامل العقار.',
          'بلاط متشقق أو مرتفع قرب مسار ماسورة التغذية.',
        ],
      },
      {
        title: 'المواسير التي نفحصها',
        body: [
          'مواسير التغذية المدفونة بين عداد المياه والمبنى، والتمديدات تحت الأحواش والحدائق والمداخل داخل العقار.',
        ],
      },
      {
        title: 'ماذا تشمل الزيارة',
        list: [
          'فحص العداد والتأكد من فقدان المياه.',
          'تحديد المسار المحتمل للماسورة المدفونة من النقاط التي يمكن الوصول إليها.',
          'اختبار أجزاء من الخط والاستماع على امتداده لتضييق نطاق البحث.',
          'شرح النتائج وهل يلزم فتح موضع محدد أو الحفر.',
        ],
      },
    ],
    methodsTitle: 'الطرق المستخدمة للمواسير تحت الأرض',
    methods: ['underground', 'acoustic', 'pressure'],
    tail: [
      {
        title: 'ما الذي قد يؤثر في النتيجة',
        list: [
          'عمق الماسورة ومادتها.',
          'الأسطح الصلبة فوق الماسورة مثل الخرسانة أو البلاط السميك.',
          'حركة السيارات والمضخات والضوضاء الأخرى.',
          'مسارات مواسير غير معروفة أو تغيّرت بسبب أعمال بناء سابقة.',
        ],
      },
    ],
    detection: true,
    faqs: [
      {
        q: 'هل ستحتاجون إلى الحفر في الحوش؟',
        a: 'الهدف تضييق نطاق البحث أولًا حتى يكون أي حفر محدودًا قدر الإمكان. ونشرح لك قبل أي حفر هل هو ضروري وأين ومقداره، ونتفق عليه معك.',
      },
      {
        q: 'هل التسرب في الجزء الخاص بي بعد العداد؟',
        a: 'يشمل الفحص التمديدات داخل العقار. وفحص العداد مع إغلاق جميع المخارج يساعد على معرفة هل تُفقد المياه بعد العداد.',
      },
      {
        q: 'هل يؤثر خزان المياه في الفحص؟',
        a: 'نعم، فامتلاء الخزان قد يحرّك العداد، لذلك اذكر وجود خزان أرضي أو علوي عند التواصل معنا، ويُؤخذ ذلك في الاعتبار أثناء الفحص.',
      },
    ],
    cta: {
      title: 'أخبرنا عن الأرض المبللة أو قراءات العداد',
      text: 'أرسل اسم الحي في الرياض والمسار المتوقع للماسورة وأي صور، وسنناقش معك الخطوة التالية.',
    },
  },
  pipeRepair: {
    meta: {
      title: 'إصلاح تسرب المواسير بالرياض | LeakFix',
      description:
        'إصلاح تسرب المواسير والوصلات والتوصيلات في الرياض. توضّح LeakFix الإصلاح والدخول المطلوب والسعر قبل بدء العمل.',
    },
    h1: 'إصلاح تسرب المواسير بالرياض',
    intro:
      'بعد تحديد الماسورة أو الوصلة المسرّبة، توضّح لك LeakFix طريقة إصلاحها والدخول المطلوب والسعر، لتقرر قبل بدء أي عمل.',
    image: 'repair',
    imageAlt: 'صورة توضيحية لإصلاح ماسورة: فنّي يشدّ وصلة محبس نحاسية أسفل مغسلة باستخدام مفتاحين',
    lead: [
      {
        title: 'تسربات المواسير التي نصلحها',
        list: [
          'الوصلات والقطع المسرّبة في مواسير التغذية.',
          'أجزاء المواسير التالفة أو المتآكلة.',
          'التوصيلات أسفل المغاسل وخلف المراحيض.',
          'المحابس التي تسرّب من جسمها أو من عمودها.',
          'مواسير التغذية المدفونة بعد تحديد موقع التسرب.',
        ],
      },
      {
        title: 'كيف يُختار الإصلاح',
        body: [
          'يعتمد الإصلاح على مادة الماسورة وحالتها على جانبي التسرب وموقعها وطريقة الوصول إليها. فالقطعة التالفة الواحدة قد يكفي استبدالها، أما الجزء المتآكل فقد يحتاج إلى استبدال طول أكبر.',
        ],
      },
      {
        title: 'ما يُتفق عليه قبل بدء العمل',
        list: [
          'التسرب المراد إصلاحه والإصلاح المقترح.',
          'أي فتح للجدران أو الأرضيات أو الأرض لازم للوصول.',
          'القطع أو أجزاء المواسير التي ستُستبدل.',
          'نطاق العمل والسعر.',
        ],
      },
      {
        title: 'التأكد من الإصلاح',
        body: [
          'بعد الإصلاح، يُفحص الجزء للتأكد من عدم استمرار التسرب بالطريقة المناسبة للعمل، وقد يشمل ذلك اختبار ضغط الماسورة التي أُصلحت. وأي أمر لم يُحَل نوضّحه لك.',
        ],
      },
    ],
    methodsTitle: 'الاختبار المستخدم حول الإصلاح',
    methods: ['pressure'],
    tail: [],
    detection: false,
    faqs: [
      {
        q: 'هل أحتاج إلى كشف التسرب قبل إصلاح الماسورة؟',
        a: 'لا، إذا كانت الماسورة أو الوصلة المسرّبة ظاهرة ويمكن الوصول إليها. أما إذا لم يكن المصدر مؤكدًا، فالكشف أولًا يضمن أن يعالج الإصلاح التسرب الفعلي.',
      },
      {
        q: 'هل ستُستبدل الماسورة كاملة؟',
        a: 'عادةً يُصلح الجزء التالف فقط. وإذا كانت الماسورة على جانبيه في حالة سيئة أيضًا، فقد يُوصى باستبدال أطول، ونوضّح لك ذلك قبل أن تقرر.',
      },
      {
        q: 'كيف يُتفق على السعر؟',
        a: 'يُحدَّد السعر بناءً على الإصلاح والدخول المطلوب وأي قطع لازمة، ويُؤكَّد قبل بدء العمل. وأي تغيير يظهر أثناء العمل نناقشه معك أولًا.',
      },
    ],
    cta: {
      title: 'رتّب إصلاح تسرب الماسورة',
      text: 'أخبرنا بمكان التسرب وشكل الماسورة واسم الحي في الرياض، والصور تساعدنا.',
    },
  },
};

export const services = { en, ar } satisfies Record<Lang, Record<ServiceKey, ServiceDetail>>;

/** Short cards for linking to the dedicated service pages. */
export const serviceCards = {
  en: {
    title: 'Our Services',
    items: [
      { key: 'hidden', icon: 'damp', text: 'Leaks inside walls, under floors and above ceilings.' },
      { key: 'underground', icon: 'pin', text: 'Leaks in buried pipes under courtyards, gardens and driveways.' },
      { key: 'pipeRepair', icon: 'repair', text: 'Repair of leaking pipes, joints, connections and valves.' },
      { key: 'repair', icon: 'fixture', text: 'How a repair is planned, agreed and checked.' },
    ],
  },
  ar: {
    title: 'خدماتنا',
    items: [
      { key: 'hidden', icon: 'damp', text: 'التسربات داخل الجدران وتحت الأرضيات وفوق الأسقف.' },
      { key: 'underground', icon: 'pin', text: 'تسربات المواسير المدفونة تحت الأحواش والحدائق والمداخل.' },
      { key: 'pipeRepair', icon: 'repair', text: 'إصلاح المواسير والوصلات والتوصيلات والمحابس المسرّبة.' },
      { key: 'repair', icon: 'fixture', text: 'كيف يُخطَّط للإصلاح ويُتفق عليه ويُتأكد منه.' },
    ],
  },
} as const;
