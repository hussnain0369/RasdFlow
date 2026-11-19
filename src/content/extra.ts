import type { Lang } from '../i18n/routes';
import type { Faq, Meta, Section } from './pages';

/* ------------------------------------------------------------------
 * Our Engineer — only facts supplied by the business:
 * name, the title "Engineer", and training received in Pakistan.
 * ------------------------------------------------------------------ */

export interface EngineerPage {
  meta: Meta;
  h1: string;
  intro: string;
  role: string;
  facts: { label: string; value: string }[];
  sections: Section[];
  cta: { title: string; text: string; link: string };
}

const engineerEn: EngineerPage = {
  meta: {
    title: 'Engineer Muhammad Faisal | LeakFix Riyadh',
    description:
      'Meet Engineer Muhammad Faisal of LeakFix, who received training in Pakistan and works on water leak detection and repair in Riyadh.',
  },
  h1: 'Engineer Muhammad Faisal',
  intro:
    'Engineer Muhammad Faisal is part of the LeakFix team, working on water leak detection and repair for properties in Riyadh. Engineer Faisal received training in Pakistan.',
  role: 'Water leak detection and repair, LeakFix',
  facts: [
    { label: 'Based in', value: 'Riyadh, Saudi Arabia' },
    { label: 'Training', value: 'Pakistan' },
    { label: 'Works on', value: 'Leak detection and leak repair' },
  ],
  sections: [
    {
      title: 'Training in Pakistan',
      body: [
        'Engineer Faisal received training in Pakistan before bringing that experience to water leak work for LeakFix in Riyadh.',
      ],
    },
    {
      title: 'How each job is approached',
      body: [
        'Every LeakFix job starts with understanding what the property owner or tenant has noticed. The aim is to explain the findings in plain language and agree any further work and its price before it starts.',
      ],
      list: [
        'Listen to the description of the problem and look at any photos you have.',
        'Explain what the inspection will look at and what it may not be able to confirm.',
        'Share the findings and the proposed next step.',
        'Agree the scope and price before any repair or opening of surfaces.',
      ],
    },
  ],
  cta: {
    title: 'Discuss your leak with LeakFix',
    text: 'Tell us what you have noticed and where the property is in Riyadh.',
    link: 'Contact LeakFix',
  },
};

const engineerAr: EngineerPage = {
  meta: {
    title: 'المهندس محمد فيصل | LeakFix الرياض',
    description:
      'تعرّف على المهندس محمد فيصل من فريق LeakFix، الذي تلقّى تدريبه في باكستان ويعمل في كشف تسربات المياه وإصلاحها في الرياض.',
  },
  h1: 'المهندس محمد فيصل',
  intro:
    'المهندس محمد فيصل من فريق LeakFix، ويعمل في كشف تسربات المياه وإصلاحها للعقارات في الرياض. وقد تلقّى المهندس فيصل تدريبه في باكستان.',
  role: 'كشف تسربات المياه وإصلاحها، LeakFix',
  facts: [
    { label: 'مقر العمل', value: 'الرياض، المملكة العربية السعودية' },
    { label: 'التدريب', value: 'باكستان' },
    { label: 'مجال العمل', value: 'كشف التسربات وإصلاحها' },
  ],
  sections: [
    {
      title: 'التدريب في باكستان',
      body: ['تلقّى المهندس فيصل تدريبه في باكستان، ويوظّف هذه الخبرة في أعمال تسربات المياه مع LeakFix في الرياض.'],
    },
    {
      title: 'طريقة التعامل مع كل عمل',
      body: [
        'يبدأ كل عمل لدى LeakFix بفهم ما لاحظه مالك العقار أو المستأجر. والهدف أن نشرح النتائج بلغة واضحة، ونتفق على أي أعمال إضافية وسعرها قبل البدء.',
      ],
      list: [
        'الاستماع إلى وصف المشكلة والاطلاع على أي صور متوفرة.',
        'توضيح ما سيشمله الفحص وما قد لا يستطيع تأكيده.',
        'مشاركة النتائج والخطوة التالية المقترحة.',
        'الاتفاق على نطاق العمل والسعر قبل أي إصلاح أو فتح للأسطح.',
      ],
    },
  ],
  cta: {
    title: 'ناقش مشكلة التسرب مع LeakFix',
    text: 'أخبرنا بما لاحظته وأين يقع العقار في الرياض.',
    link: 'تواصل مع LeakFix',
  },
};

/* ------------------------------------------------------------------
 * How It Works — a real sequence, so numbered steps are appropriate.
 * ------------------------------------------------------------------ */

export interface HowPage {
  meta: Meta;
  h1: string;
  intro: string;
  imageAlt: string;
  steps: { title: string; text: string; points?: string[] }[];
  faqs: Faq[];
  cta: { title: string; text: string };
}

const howEn: HowPage = {
  meta: {
    title: 'How It Works | Water Leak Visits in Riyadh | LeakFix',
    description:
      'See how a LeakFix water leak visit in Riyadh works, from your first message to the inspection, findings, agreed price and repair.',
  },
  h1: 'How a LeakFix Visit Works',
  intro:
    'From your first message to the finished repair, each stage is explained before it happens. Nothing beyond what you have agreed goes ahead without your approval.',
  imageAlt: 'A technician tightens a brass valve connection under a washbasin using two spanners',
  steps: [
    {
      title: 'Tell us what you have noticed',
      text: 'Send your district in Riyadh, the property type and a short description of the problem.',
      points: ['Where the water or damp appears.', 'When it started and whether it comes and goes.', 'Photos or a short video, if you have them.'],
    },
    {
      title: 'Discuss the inspection',
      text: 'We talk through the problem, what the inspection is likely to involve, access to the property and a suitable time. Confirm any inspection charge at this stage, before the visit is booked.',
    },
    {
      title: 'The inspection visit',
      text: 'The inspection focuses on the areas you described and the pipework that can be reached. How it is carried out depends on the property and the symptoms.',
    },
    {
      title: 'Findings and proposed work',
      text: 'You hear what was found and what is proposed next. If a repair is needed, the scope, any opening of surfaces, parts and the price are explained so you can decide.',
    },
    {
      title: 'Repair, once you agree',
      text: 'Work starts only after you approve the scope and price. If something unexpected changes the work, it is discussed with you before going further.',
    },
    {
      title: 'Checking the result',
      text: 'The repaired area is checked for continuing leakage in a way that suits the repair. Anything still unresolved is explained, along with the options.',
    },
  ],
  faqs: [
    {
      q: 'Does someone need to be at the property during the visit?',
      a: 'Someone needs to provide access to the affected areas. If you cannot be there, tell us who will let us in, such as a family member, tenant or building manager.',
    },
    {
      q: 'I rent the property. Who should arrange the visit?',
      a: 'Either the tenant or the owner can contact us. Let us know who is responsible for approving and paying for any work, so the right person agrees the scope and price.',
    },
    {
      q: 'What if the inspection does not find the source?',
      a: 'Some leaks need more than one step to confirm. If the source cannot be confirmed, we explain what was checked, what remains possible and what further investigation would involve, before you decide.',
    },
  ],
  cta: {
    title: 'Start with a short message',
    text: 'Tell us your district and what you have noticed. We will talk through the next step with you.',
  },
};

const howAr: HowPage = {
  meta: {
    title: 'كيف نعمل | زيارات تسربات المياه في الرياض | LeakFix',
    description:
      'تعرّف على خطوات زيارة LeakFix لتسربات المياه في الرياض، من رسالتك الأولى إلى الفحص والنتائج والسعر المتفق عليه والإصلاح.',
  },
  h1: 'كيف تتم زيارة LeakFix',
  intro:
    'من رسالتك الأولى حتى انتهاء الإصلاح، نوضّح لك كل مرحلة قبل حدوثها، ولا يُنفَّذ أي عمل خارج ما اتفقنا عليه دون موافقتك.',
  imageAlt: 'فنّي يشدّ وصلة محبس نحاسية أسفل مغسلة باستخدام مفتاحين',
  steps: [
    {
      title: 'أخبرنا بما لاحظته',
      text: 'أرسل لنا اسم الحي في الرياض ونوع العقار ووصفًا مختصرًا للمشكلة.',
      points: ['أين تظهر المياه أو الرطوبة.', 'متى بدأت المشكلة، وهل تظهر وتختفي.', 'صور أو مقطع فيديو قصير إن توفر.'],
    },
    {
      title: 'ناقش الفحص معنا',
      text: 'نتحدث معك عن المشكلة وما قد يشمله الفحص والدخول إلى العقار والموعد المناسب. تأكّد من أي رسوم للفحص في هذه المرحلة، قبل حجز الزيارة.',
    },
    {
      title: 'زيارة الفحص',
      text: 'يركّز الفحص على الأماكن التي وصفتها والتمديدات التي يمكن الوصول إليها، وتعتمد طريقته على العقار والأعراض.',
    },
    {
      title: 'النتائج والأعمال المقترحة',
      text: 'نشرح لك ما تم التوصل إليه والخطوة التالية المقترحة. وإذا احتاج الأمر إلى إصلاح، نوضّح النطاق وأي فتح للأسطح والقطع اللازمة والسعر لتتخذ قرارك.',
    },
    {
      title: 'الإصلاح بعد موافقتك',
      text: 'لا يبدأ العمل إلا بعد موافقتك على النطاق والسعر. وإذا ظهر ما يغيّر العمل، نناقشه معك قبل المتابعة.',
    },
    {
      title: 'التأكد من النتيجة',
      text: 'يُفحَص المكان الذي أُصلِح للتأكد من عدم استمرار التسرب بالطريقة المناسبة لنوع الإصلاح، ونوضّح لك أي أمر لم يُحَل والخيارات المتاحة.',
    },
  ],
  faqs: [
    {
      q: 'هل يجب أن يكون أحد موجودًا في العقار أثناء الزيارة؟',
      a: 'يجب أن يتوفر من يتيح الدخول إلى الأماكن المتضررة. وإذا لم تتمكن من الحضور، أخبرنا بمن سيستقبلنا، مثل أحد أفراد الأسرة أو المستأجر أو إدارة المبنى.',
    },
    {
      q: 'أنا مستأجر، فمن يرتّب الزيارة؟',
      a: 'يمكن للمستأجر أو المالك التواصل معنا. أخبرنا بمن يتولى الموافقة على الأعمال ودفع تكلفتها، حتى يتفق الشخص المناسب على النطاق والسعر.',
    },
    {
      q: 'ماذا لو لم يحدد الفحص مصدر التسرب؟',
      a: 'بعض التسربات تحتاج إلى أكثر من خطوة لتأكيدها. وإذا لم يُؤكَّد المصدر، نوضّح لك ما تم فحصه وما يزال محتملًا وما يتطلبه الفحص الإضافي، قبل أن تقرر.',
    },
  ],
  cta: {
    title: 'ابدأ برسالة قصيرة',
    text: 'أخبرنا باسم الحي وما لاحظته، وسنتحدث معك عن الخطوة التالية.',
  },
};

/* ------------------------------------------------------------------
 * Water Leak Guide — general, practical information. No service claims.
 * ------------------------------------------------------------------ */

export interface GuidePage {
  meta: Meta;
  h1: string;
  intro: string;
  roomsTitle: string;
  rooms: { title: string; icon: 'fixture' | 'damp' | 'paint' | 'usage'; points: string[] }[];
  meter: { title: string; intro: string; steps: string[]; note: string };
  now: Section;
  safety: string;
  whenTitle: string;
  when: string[];
  cta: { title: string; text: string };
}

const guideEn: GuidePage = {
  meta: {
    title: 'How to Spot a Water Leak at Home | LeakFix Riyadh Guide',
    description:
      'Signs of a water leak room by room, a simple water meter check and safe first steps to take before contacting LeakFix in Riyadh.',
  },
  h1: 'How to Spot a Water Leak at Home',
  intro:
    'Many leaks show small signs before they cause visible damage. This guide covers what to look for, a simple check you can do with your water meter, and sensible first steps.',
  roomsTitle: 'Where to look',
  rooms: [
    {
      title: 'Bathrooms',
      icon: 'fixture',
      points: [
        'Water around the base of the toilet or under the washbasin.',
        'Loose or stained tiles near the shower or bath.',
        'A toilet that keeps running or refilling on its own.',
      ],
    },
    {
      title: 'Kitchens',
      icon: 'usage',
      points: [
        'Damp or swollen cabinet panels under the sink.',
        'Water near connections to the dishwasher or washing machine.',
        'A musty smell inside cupboards.',
      ],
    },
    {
      title: 'Walls and ceilings',
      icon: 'damp',
      points: [
        'Damp patches or tide marks that grow or return.',
        'Bubbling or peeling paint.',
        'Stains on a ceiling below a bathroom or roof area.',
      ],
    },
    {
      title: 'Floors and outside areas',
      icon: 'paint',
      points: [
        'Warm, damp or lifting floor tiles.',
        'Wet patches in a courtyard or garden with no obvious source.',
        'Cracks in paving near a water line.',
      ],
    },
  ],
  meter: {
    title: 'A simple water meter check',
    intro: 'If you can reach your water meter, this check can show whether water is being used when nothing is running.',
    steps: [
      'Turn off every tap, shower and appliance that uses water.',
      'Write down the meter reading, or take a photo of it.',
      'Avoid using any water for one to two hours.',
      'Read the meter again. If the reading has moved, water may be escaping somewhere.',
    ],
    note: 'If the property has a water tank, the meter can move while the tank refills, so the result is less clear. Mention the tank when you contact us.',
  },
  now: {
    title: 'What you can do now',
    list: [
      'If water is actively escaping and you know where the isolation valve or main stop valve is, close it.',
      'Move furniture, rugs and belongings away from the wet area.',
      'Take photos of the affected area and note when you first saw it.',
      'Keep a note of whether the problem is constant or only appears at certain times.',
    ],
  },
  safety:
    'Keep away from water near electrical sockets, appliances or lights. If water has reached anything electrical, do not touch it, and switch off the power only if you can do so safely.',
  whenTitle: 'When to contact LeakFix',
  when: [
    'The meter check suggests water is being lost.',
    'A damp patch keeps returning or is spreading.',
    'You can see water but not where it comes from.',
    'A previous repair has not solved the problem.',
  ],
  cta: {
    title: 'Noticed one of these signs?',
    text: 'Send us your district in Riyadh, what you have seen and any photos. We will discuss the next step.',
  },
};

const guideAr: GuidePage = {
  meta: {
    title: 'كيف تكتشف تسرب المياه في منزلك | دليل LeakFix في الرياض',
    description:
      'علامات تسرب المياه في كل جزء من المنزل، وفحص بسيط بعداد المياه، وخطوات أولى آمنة قبل التواصل مع LeakFix في الرياض.',
  },
  h1: 'كيف تكتشف تسرب المياه في منزلك',
  intro:
    'كثير من التسربات تظهر لها علامات صغيرة قبل أن تُحدث ضررًا واضحًا. يشرح هذا الدليل ما تبحث عنه، وفحصًا بسيطًا يمكنك إجراؤه بعداد المياه، وخطوات أولى مناسبة.',
  roomsTitle: 'أين تبحث',
  rooms: [
    {
      title: 'دورات المياه',
      icon: 'fixture',
      points: ['مياه حول قاعدة المرحاض أو أسفل المغسلة.', 'بلاط مفكوك أو متغيّر اللون قرب الدُّش أو حوض الاستحمام.', 'سيفون يستمر في الجريان أو يمتلئ من تلقاء نفسه.'],
    },
    {
      title: 'المطابخ',
      icon: 'usage',
      points: ['ألواح خزائن رطبة أو منتفخة أسفل المغسلة.', 'مياه قرب توصيلات غسالة الصحون أو غسالة الملابس.', 'رائحة رطوبة داخل الخزائن.'],
    },
    {
      title: 'الجدران والأسقف',
      icon: 'damp',
      points: ['بقع رطوبة أو آثار مياه تتسع أو تعود.', 'انتفاخ الدهان أو تقشّره.', 'بقع في سقف يقع أسفل دورة مياه أو سطح.'],
    },
    {
      title: 'الأرضيات والمساحات الخارجية',
      icon: 'paint',
      points: ['بلاط أرضيات دافئ أو رطب أو مرتفع عن مكانه.', 'بقع مبللة في الحوش أو الحديقة دون مصدر واضح.', 'تشققات في البلاط قرب خط مياه.'],
    },
  ],
  meter: {
    title: 'فحص بسيط بعداد المياه',
    intro: 'إذا كان بإمكانك الوصول إلى عداد المياه، فهذا الفحص قد يوضّح ما إذا كانت المياه تُستهلك مع أن لا شيء يعمل.',
    steps: [
      'أغلق جميع الحنفيات والدُّش وأي جهاز يستخدم المياه.',
      'دوّن قراءة العداد أو التقط صورة لها.',
      'لا تستخدم المياه لمدة ساعة إلى ساعتين.',
      'اقرأ العداد مرة أخرى. إذا تغيّرت القراءة، فقد تكون المياه تتسرب في مكان ما.',
    ],
    note: 'إذا كان في العقار خزان مياه، فقد يتحرك العداد أثناء امتلاء الخزان، فتكون النتيجة أقل وضوحًا. اذكر وجود الخزان عند تواصلك معنا.',
  },
  now: {
    title: 'ما الذي يمكنك فعله الآن',
    list: [
      'إذا كانت المياه تتسرب بوضوح وتعرف مكان المحبس الفرعي أو المحبس الرئيسي، فأغلقه.',
      'أبعِد الأثاث والسجاد والأغراض عن المكان المبلل.',
      'التقط صورًا للمكان المتضرر ودوّن متى لاحظته أول مرة.',
      'لاحظ ما إذا كانت المشكلة مستمرة أم تظهر في أوقات معينة فقط.',
    ],
  },
  safety:
    'ابتعد عن المياه القريبة من الأفياش أو الأجهزة الكهربائية أو الإنارة. وإذا وصلت المياه إلى أي شيء كهربائي فلا تلمسه، ولا تفصل الكهرباء إلا إذا كان ذلك آمنًا.',
  whenTitle: 'متى تتواصل مع LeakFix',
  when: [
    'يشير فحص العداد إلى فقدان المياه.',
    'بقعة رطوبة تعود أو تنتشر.',
    'ترى المياه ولا تعرف مصدرها.',
    'لم يحل إصلاح سابق المشكلة.',
  ],
  cta: {
    title: 'لاحظت إحدى هذه العلامات؟',
    text: 'أرسل لنا اسم الحي في الرياض وما لاحظته وأي صور متوفرة، وسنناقش معك الخطوة التالية.',
  },
};

export const extra = {
  en: { engineer: engineerEn, howItWorks: howEn, guide: guideEn },
  ar: { engineer: engineerAr, howItWorks: howAr, guide: guideAr },
} satisfies Record<Lang, unknown>;

/** Short engineer introduction reused on the homepage and About page. */
export const engineerTeaser = {
  en: {
    title: 'Meet our engineer',
    text: 'Engineer Muhammad Faisal works on LeakFix water leak detection and repair in Riyadh, and received training in Pakistan.',
    link: 'About Engineer Muhammad Faisal',
  },
  ar: {
    title: 'تعرّف على مهندسنا',
    text: 'يعمل المهندس محمد فيصل في كشف تسربات المياه وإصلاحها لدى LeakFix في الرياض، وقد تلقّى تدريبه في باكستان.',
    link: 'تعرّف على المهندس محمد فيصل',
  },
} satisfies Record<Lang, unknown>;

export const guideTeaser = {
  en: 'Read the water leak guide',
  ar: 'اقرأ دليل تسربات المياه',
} satisfies Record<Lang, string>;
