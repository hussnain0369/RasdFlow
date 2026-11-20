import type { Lang } from '../i18n/routes';

export interface Meta {
  title: string;
  description: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface Section {
  title: string;
  body?: string[];
  list?: string[];
  after?: string[];
}
export type SignIcon = 'usage' | 'damp' | 'fixture' | 'paint' | 'pressure' | 'sound';

const homeEn = {
  meta: {
    title: 'Water Leak Detection & Repair in Riyadh | LeakFix',
    description:
      'LeakFix provides water leak detection and repair in Riyadh. Enquire about hidden leaks, leaking pipes and water-related property damage.',
  },
  eyebrow: 'Water leak services in Riyadh',
  h1: 'Water Leak Detection & Repair in Riyadh',
  h1Lead: 'Water Leak Detection & Repair',
  h1Accent: 'in Riyadh',
  intro:
    'A rising water bill, damp patches or a leaking pipe? LeakFix helps property owners and tenants in Riyadh investigate leaks and arrange repairs.',
  ctaPrimary: 'Discuss a Water Leak',
  ctaWhatsapp: 'WhatsApp LeakFix',
  heroAlt: 'A LeakFix technician wearing headphones listens through a ground sensor placed on the paving outside a villa',
  signs: {
    title: 'Signs You May Have a Water Leak',
    intro:
      'Some leaks are visible. Others first appear as changes in your bill, water pressure or the condition of your property.',
    items: [
      { icon: 'usage', text: 'An unexplained increase in water usage.' },
      { icon: 'damp', text: 'Damp patches on walls, ceilings or floors.' },
      { icon: 'fixture', text: 'Water appearing around pipework or fixtures.' },
      { icon: 'paint', text: 'Peeling paint or recurring moisture marks.' },
      { icon: 'pressure', text: 'Reduced water pressure.' },
      { icon: 'sound', text: 'The sound of running water when outlets are closed.' },
    ] as { icon: SignIcon; text: string }[],
    closing:
      'These signs can have several causes. An inspection can help establish whether a water leak is involved.',
  },
  services: {
    title: 'Find the Leak. Plan the Repair.',
    detection: {
      title: 'Water Leak Detection',
      text: 'Investigate suspected leaks affecting your property. Tell us where you have noticed moisture, unusual water usage or other changes so we can discuss the next step.',
      link: 'Explore Leak Detection',
    },
    repair: {
      title: 'Water Leak Repair',
      text: 'Address an identified leak with a repair suited to the affected pipework or connection. The proposed work depends on the leak location, access and condition of the installation.',
      link: 'Explore Leak Repair',
      alt: 'A technician tightens a brass valve connection under a washbasin using two spanners',
    },
  },
  steps: {
    title: 'How to Arrange a Visit',
    items: [
      {
        title: 'Tell Us What You Have Noticed',
        text: 'Share your Riyadh location and describe the problem. Photos of visible leaks or damp areas may help explain the situation.',
      },
      {
        title: 'Discuss the Inspection',
        text: 'We will discuss the issue, access requirements and availability. Confirm any inspection charges before arranging the visit.',
      },
      {
        title: 'Review the Proposed Work',
        text: 'Once the issue has been assessed, discuss the findings, proposed repair and price before agreeing to additional work.',
      },
    ],
  },
  coverage: {
    title: 'Water Leak Services Across Riyadh',
    text: 'Contact LeakFix with your district and property location to check visit availability. Let us know whether the issue affects a villa, apartment or commercial property, and whether access needs to be arranged with a tenant or building manager.',
    link: 'Check Riyadh Coverage',
  },
  faqs: [
    {
      q: 'How do I know if my property has a hidden water leak?',
      a: 'Possible signs include an unexplained increase in water usage, recurring damp patches and the sound of running water when outlets are closed. These signs do not confirm a leak on their own; an inspection can help identify the cause.',
    },
    {
      q: 'Can you detect a leak without opening walls or floors?',
      a: 'The approach depends on the suspected leak location, the pipework and access. Contact us to discuss the issue. We will explain whether opening a surface may be necessary before you agree to that work.',
    },
    {
      q: 'How much does leak detection or repair cost?',
      a: 'The cost depends on the issue, inspection requirements, access and repair scope. Ask about inspection charges when enquiring and confirm the proposed repair price before authorising the work.',
    },
    {
      q: 'Do you serve my area in Riyadh?',
      a: 'Send your district and location to check current visit availability.',
    },
    {
      q: 'What information should I send?',
      a: 'Include your location, property type, when the problem started and any visible signs. Photos or a short video can help explain what you have noticed.',
    },
  ] as Faq[],
  finalCta: {
    title: 'Tell Us About Your Water Leak',
    text: 'Share your location in Riyadh and describe the problem. We will discuss the next step and visit availability.',
  },
};

type Home = typeof homeEn;

const homeAr: Home = {
  meta: {
    title: 'كشف تسربات المياه وإصلاحها في الرياض | LeakFix',
    description:
      'تقدّم LeakFix خدمة كشف تسربات المياه وإصلاحها في الرياض. استفسر عن التسربات المخفية وتسرب المواسير والأضرار التي تسببها المياه في عقارك.',
  },
  eyebrow: 'خدمات تسربات المياه في الرياض',
  h1: 'كشف تسربات المياه وإصلاحها في الرياض',
  h1Lead: 'كشف تسربات المياه وإصلاحها',
  h1Accent: 'في الرياض',
  intro:
    'فاتورة مياه مرتفعة، أو بقع رطوبة، أو ماسورة تسرّب؟ تساعد LeakFix ملّاك العقارات والمستأجرين في الرياض على فحص التسربات وترتيب إصلاحها.',
  ctaPrimary: 'حدّثنا عن مشكلة التسرب',
  ctaWhatsapp: 'راسل LeakFix عبر واتساب',
  heroAlt: 'فنّي من LeakFix يرتدي سماعات ويستمع عبر حسّاس موضوع على أرضية خارج فيلا',
  signs: {
    title: 'علامات قد تدل على وجود تسرب',
    intro:
      'بعض التسربات واضحة للعين، وبعضها يظهر أولًا على شكل تغيّر في الفاتورة أو في ضغط المياه أو في حالة العقار.',
    items: [
      { icon: 'usage', text: 'زيادة غير مبررة في استهلاك المياه.' },
      { icon: 'damp', text: 'بقع رطوبة على الجدران أو الأسقف أو الأرضيات.' },
      { icon: 'fixture', text: 'مياه تظهر حول المواسير أو الأدوات الصحية.' },
      { icon: 'paint', text: 'تقشّر الدهان أو تكرار آثار الرطوبة.' },
      { icon: 'pressure', text: 'ضعف في ضغط المياه.' },
      { icon: 'sound', text: 'صوت جريان مياه مع أن الحنفيات مغلقة.' },
    ],
    closing: 'لهذه العلامات أسباب متعددة، والفحص يساعد على معرفة ما إذا كان تسرب المياه هو السبب.',
  },
  services: {
    title: 'نحدّد التسرب، ثم نخطّط للإصلاح',
    detection: {
      title: 'كشف تسربات المياه',
      text: 'فحص التسربات المشتبه بها في عقارك. أخبرنا أين لاحظت الرطوبة أو الاستهلاك غير المعتاد أو أي تغيّر آخر، لنناقش معك الخطوة التالية.',
      link: 'تعرّف على خدمة كشف التسربات',
    },
    repair: {
      title: 'إصلاح تسربات المياه',
      text: 'معالجة التسرب بعد تحديده بإصلاح يناسب الماسورة أو الوصلة المتضررة. تعتمد الأعمال المقترحة على موقع التسرب وسهولة الوصول إليه وحالة التمديدات.',
      link: 'تعرّف على خدمة إصلاح التسربات',
      alt: 'فنّي يشدّ وصلة محبس نحاسية أسفل مغسلة باستخدام مفتاحين',
    },
  },
  steps: {
    title: 'كيف ترتّب الزيارة',
    items: [
      {
        title: 'أخبرنا بما لاحظته',
        text: 'أرسل لنا موقعك في الرياض وصِف المشكلة. صور التسرب الظاهر أو أماكن الرطوبة تساعد على توضيح الوضع.',
      },
      {
        title: 'ناقش الفحص معنا',
        text: 'نتحدث معك عن المشكلة ومتطلبات الدخول إلى العقار والمواعيد المتاحة. تأكّد من رسوم الفحص، إن وُجدت، قبل تحديد موعد الزيارة.',
      },
      {
        title: 'راجع الأعمال المقترحة',
        text: 'بعد تقييم المشكلة، ناقش النتائج والإصلاح المقترح والسعر قبل الموافقة على أي أعمال إضافية.',
      },
    ],
  },
  coverage: {
    title: 'خدمات تسربات المياه في أنحاء الرياض',
    text: 'تواصل مع LeakFix وأخبرنا باسم الحي وموقع العقار لمعرفة إمكانية الزيارة. وضّح لنا إن كانت المشكلة في فيلا أو شقة أو عقار تجاري، وإن كان الدخول يحتاج إلى تنسيق مع مستأجر أو إدارة المبنى.',
    link: 'تحقّق من التغطية في الرياض',
  },
  faqs: [
    {
      q: 'كيف أعرف أن في عقاري تسرب مياه مخفيًا؟',
      a: 'من العلامات المحتملة: زيادة غير مبررة في استهلاك المياه، وبقع رطوبة متكررة، وصوت جريان مياه مع إغلاق الحنفيات. هذه العلامات وحدها لا تؤكد وجود تسرب، والفحص يساعد على تحديد السبب.',
    },
    {
      q: 'هل يمكن كشف التسرب دون فتح الجدران أو الأرضيات؟',
      a: 'يعتمد ذلك على الموقع المتوقع للتسرب ونوع التمديدات وسهولة الوصول إليها. تواصل معنا لمناقشة المشكلة، وسنوضّح لك إن كان فتح أي جزء قد يكون ضروريًا قبل أن توافق على ذلك.',
    },
    {
      q: 'كم تكلفة كشف التسرب أو إصلاحه؟',
      a: 'تعتمد التكلفة على طبيعة المشكلة ومتطلبات الفحص وسهولة الوصول ونطاق الإصلاح. اسأل عن رسوم الفحص عند تواصلك معنا، وتأكّد من سعر الإصلاح المقترح قبل الموافقة على العمل.',
    },
    {
      q: 'هل تخدمون الحي الذي أسكن فيه في الرياض؟',
      a: 'أرسل لنا اسم الحي والموقع لنؤكد لك إمكانية الزيارة حاليًا.',
    },
    {
      q: 'ما المعلومات التي أرسلها لكم؟',
      a: 'اذكر موقعك ونوع العقار ومتى بدأت المشكلة وأي علامات ظاهرة. الصور أو مقطع فيديو قصير تساعد على توضيح ما لاحظته.',
    },
  ],
  finalCta: {
    title: 'أخبرنا عن مشكلة التسرب',
    text: 'أرسل لنا موقعك في الرياض وصِف المشكلة، وسنناقش معك الخطوة التالية والمواعيد المتاحة.',
  },
};

/* ------------------------------------------------------------------ */

export interface ServicePage {
  meta: Meta;
  h1: string;
  intro: string;
  imageAlt: string;
  sections: Section[];
  faqs: Faq[];
  cta: { title: string; text: string };
}

const detectionEn: ServicePage = {
  meta: {
    title: 'Water Leak Detection in Riyadh | LeakFix',
    description:
      'Suspect a hidden water leak in Riyadh? Contact LeakFix to discuss damp patches, unusual water usage and a suitable inspection.',
  },
  h1: 'Water Leak Detection in Riyadh',
  intro:
    'A leak is not always visible at the point where water appears. Moisture can travel through surrounding materials, making the source difficult to identify. LeakFix helps investigate suspected water leaks so the next step can be based on the findings.',
  imageAlt: 'A technician points a handheld thermal camera at a bathroom wall with a damp stain near the floor',
  sections: [
    {
      title: 'When an Inspection May Help',
      body: ['An inspection is worth discussing when a problem keeps coming back or cannot be explained. For example:'],
      list: [
        'Your water bill or meter reading has risen, but nothing has changed in how the property is used.',
        'A damp area returns after it has dried out, been treated or been repainted.',
        'Water collects near pipework, a fixture or the base of a wall, and you cannot see where it comes from.',
        'Signs of a leak have returned after an earlier repair, which may mean the original source was not fully identified.',
      ],
    },
    {
      title: 'What to Tell Us Before the Visit',
      body: ['A clear description helps us plan the inspection and decide what access is needed. Please tell us:'],
      list: [
        'The property location in Riyadh.',
        'Where the symptoms appear, such as a room, wall, ceiling or floor.',
        'When you first noticed the issue.',
        'Whether it is constant or comes and goes.',
        'Any recent plumbing work at the property.',
        'Any access restrictions, such as building rules or a tenant who needs notice.',
        'Photos of the affected area, if you have them.',
      ],
    },
    {
      title: 'What the Inspection Involves',
      body: [
        'There is no single approach that suits every property. How the inspection is carried out depends on the symptoms you describe, which pipework can be reached and the condition of the building.',
        'Before the visit, we discuss what the inspection is expected to look at. If the inspection cannot confirm the source without further work, we explain why and what the options are.',
      ],
    },
    {
      title: 'From Findings to Repair',
      body: [
        'The findings guide the proposed next step. That might be a repair, further investigation, or an explanation that the cause lies outside the water supply.',
        'Any additional investigation, opening of a wall or floor, or repair is discussed with you, including the price, before it goes ahead.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How should I prepare for the visit?',
      a: 'Make sure the affected areas, the water meter and any access panels can be reached. If you are a tenant, or the building has a manager, arrange access in advance. Have any photos ready and note when you last saw the symptoms.',
    },
    {
      q: 'What if the leak only appears some of the time?',
      a: 'Some leaks only show when a particular tap, shower or appliance is in use, or at certain times of day. Tell us when the problem appears and what was running at the time. This helps us plan the inspection.',
    },
    {
      q: 'Will you need to get behind walls or under floors?',
      a: 'Not necessarily. It depends on where the pipework runs and what the inspection shows. If opening a surface is needed to confirm or reach a leak, we explain why and agree it with you first.',
    },
    {
      q: 'Can I discuss a repair after the inspection?',
      a: 'Yes. Once the findings are known, you can discuss the proposed repair, the access it needs and the price. You decide whether to go ahead.',
    },
  ],
  cta: {
    title: 'Discuss a Suspected Leak',
    text: 'Tell us where you have noticed the problem and where the property is in Riyadh. We will talk through the next step with you.',
  },
};

const detectionAr: ServicePage = {
  meta: {
    title: 'كشف تسربات المياه في الرياض | LeakFix',
    description:
      'تشك في وجود تسرب مياه مخفي في الرياض؟ تواصل مع LeakFix لمناقشة بقع الرطوبة والاستهلاك غير المعتاد والفحص المناسب لعقارك.',
  },
  h1: 'كشف تسربات المياه في الرياض',
  intro:
    'لا يكون مصدر التسرب دائمًا في المكان الذي تظهر فيه المياه؛ فالرطوبة قد تنتقل عبر المواد المحيطة، فيصعب تحديد مصدرها. تساعدك LeakFix في فحص التسربات المشتبه بها حتى تُبنى الخطوة التالية على نتائج واضحة.',
  imageAlt: 'فنّي يوجّه كاميرا حرارية محمولة نحو جدار حمّام عليه أثر رطوبة قرب الأرضية',
  sections: [
    {
      title: 'متى يفيد الفحص؟',
      body: ['يستحق الأمر أن تناقش الفحص معنا عندما تتكرر المشكلة أو لا تجد لها تفسيرًا. على سبيل المثال:'],
      list: [
        'ارتفعت فاتورة المياه أو قراءة العداد دون أي تغيير في طريقة استخدام العقار.',
        'تعود الرطوبة إلى المكان نفسه بعد جفافه أو معالجته أو إعادة دهانه.',
        'تتجمع المياه قرب المواسير أو الأدوات الصحية أو أسفل الجدار، ولا يظهر مصدرها.',
        'عادت علامات التسرب بعد إصلاح سابق، وقد يعني ذلك أن المصدر الأصلي لم يُحدَّد بالكامل.',
      ],
    },
    {
      title: 'ما الذي تخبرنا به قبل الزيارة',
      body: ['الوصف الواضح يساعدنا على التخطيط للفحص ومعرفة ما يلزم للدخول إلى العقار. أخبرنا من فضلك بما يلي:'],
      list: [
        'موقع العقار في الرياض.',
        'أين تظهر الأعراض، مثل الغرفة أو الجدار أو السقف أو الأرضية.',
        'متى لاحظت المشكلة أول مرة.',
        'هل المشكلة مستمرة أم تظهر وتختفي.',
        'أي أعمال سباكة أُجريت مؤخرًا في العقار.',
        'أي قيود على الدخول، مثل أنظمة المبنى أو مستأجر يحتاج إلى إشعار مسبق.',
        'صور المكان المتضرر إن توفرت.',
      ],
    },
    {
      title: 'ماذا يشمل الفحص؟',
      body: [
        'لا توجد طريقة واحدة تناسب كل العقارات. يعتمد أسلوب الفحص على الأعراض التي تصفها، والتمديدات التي يمكن الوصول إليها، وحالة المبنى.',
        'قبل الزيارة نناقش معك ما سيركّز عليه الفحص. وإذا لم يتمكن الفحص من تأكيد المصدر دون أعمال إضافية، نوضّح لك السبب والخيارات المتاحة.',
      ],
    },
    {
      title: 'من نتائج الفحص إلى الإصلاح',
      body: [
        'النتائج هي التي تحدد الخطوة التالية المقترحة؛ فقد تكون إصلاحًا، أو فحصًا إضافيًا، أو توضيحًا بأن السبب ليس في تمديدات المياه.',
        'أي فحص إضافي أو فتح لجدار أو أرضية أو أي إصلاح يُناقَش معك، بما في ذلك السعر، قبل البدء فيه.',
      ],
    },
  ],
  faqs: [
    {
      q: 'كيف أستعد للزيارة؟',
      a: 'تأكّد من إمكانية الوصول إلى الأماكن المتضررة وعداد المياه وأي فتحات صيانة. إذا كنت مستأجرًا أو للمبنى إدارة، فرتّب الدخول مسبقًا. جهّز الصور المتوفرة لديك، ودوّن آخر مرة لاحظت فيها الأعراض.',
    },
    {
      q: 'ماذا لو كان التسرب يظهر أحيانًا فقط؟',
      a: 'بعض التسربات لا تظهر إلا عند استخدام حنفية أو دُش أو جهاز معيّن، أو في أوقات محددة من اليوم. أخبرنا متى تظهر المشكلة وما الذي كان يعمل وقتها، فهذا يساعدنا على التخطيط للفحص.',
    },
    {
      q: 'هل ستحتاجون إلى الوصول خلف الجدران أو تحت الأرضيات؟',
      a: 'ليس بالضرورة. يعتمد ذلك على مسار التمديدات وما يكشفه الفحص. إذا لزم فتح جزء من سطح ما لتأكيد التسرب أو الوصول إليه، نوضّح لك السبب ونتفق معك قبل ذلك.',
    },
    {
      q: 'هل يمكنني مناقشة الإصلاح بعد الفحص؟',
      a: 'نعم. بعد معرفة النتائج يمكنك مناقشة الإصلاح المقترح وما يحتاجه من دخول والسعر، والقرار لك في المضي قدمًا.',
    },
  ],
  cta: {
    title: 'ناقش معنا التسرب المشتبه به',
    text: 'أخبرنا أين لاحظت المشكلة وأين يقع العقار في الرياض، وسنتحدث معك عن الخطوة التالية.',
  },
};

const repairEn: ServicePage = {
  meta: {
    title: 'Water Leak Repair in Riyadh | LeakFix',
    description:
      'Arrange water leak repair in Riyadh with LeakFix. Discuss leaking pipes, damaged connections and repair requirements for your property.',
  },
  h1: 'Water Leak Repair in Riyadh',
  intro:
    'Once a leak has been located, the repair needs to address the affected pipework or connection. LeakFix discusses the proposed work, access requirements and price before you authorise the repair.',
  imageAlt: 'A technician tightens a brass valve connection under a washbasin using two spanners',
  sections: [
    {
      title: 'Explain the Problem Before Booking',
      body: ['A short description helps us understand what the repair is likely to involve. When you get in touch, let us know:'],
      list: [
        'Whether the leak is visible, and where.',
        'Whether its source has already been identified.',
        'Whether another contractor has inspected it, and what they found.',
      ],
      after: ['Photos of the affected pipework or area are useful if you have them.'],
    },
    {
      title: 'How the Repair Is Planned',
      body: ['Each repair is planned around the leak itself. The proposed work depends on:'],
      list: [
        'Where the leak is and how it can be reached.',
        'The type and condition of the pipe or connection.',
        'How far any damage has spread into surrounding materials.',
        'Whether walls, floors or fittings need to be opened or removed for access.',
      ],
      after: ['These factors shape the scope and price, so they are discussed before the work is agreed.'],
    },
    {
      title: 'What to Confirm Before Work Starts',
      body: ['Before you authorise a repair, make sure you have agreed:'],
      list: [
        'The affected area and the proposed repair.',
        'Any access needed, including opening a wall, floor or ceiling.',
        'The agreed scope of work and the price.',
        'Whether any replacement parts are needed.',
        'Whether finishing or reinstatement of surfaces is included.',
      ],
    },
    {
      title: 'After the Repair',
      body: [
        'Once the work is complete, the repaired area should be checked for continuing leakage in a way that suits the repair.',
        'If anything remains unresolved, or further work is recommended, we explain it so you can decide what to do next.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can you repair a leak that has already been found?',
      a: 'Contact us with details of the leak and anything found during an earlier inspection. Photos and inspection notes help us judge whether the repair can be planned from that information.',
    },
    {
      q: 'Do I need an inspection before a repair?',
      a: 'Not always. If the source is clearly identified and can be reached, the repair may be planned directly. If the source is uncertain, an inspection may be recommended first so the repair addresses the actual cause.',
    },
    {
      q: 'Will the wall or floor be put back afterwards?',
      a: 'Ask about this before agreeing the work. Whether finishing or reinstatement is included depends on the job, and it should be stated in the agreed scope.',
    },
    {
      q: 'How is the repair price agreed?',
      a: 'The price is based on the proposed work, the access needed and any parts required. It is confirmed with you before the repair starts. If the scope needs to change once work begins, that change is discussed with you first.',
    },
  ],
  cta: {
    title: 'Discuss a Leak Repair',
    text: 'Tell us what you know about the leak and where the property is in Riyadh. We will talk through the proposed work with you.',
  },
};

const repairAr: ServicePage = {
  meta: {
    title: 'إصلاح تسربات المياه في الرياض | LeakFix',
    description:
      'رتّب إصلاح تسرب المياه في الرياض مع LeakFix. ناقش تسرب المواسير والوصلات المتضررة ومتطلبات الإصلاح في عقارك.',
  },
  h1: 'إصلاح تسربات المياه في الرياض',
  intro:
    'بعد تحديد موقع التسرب، يجب أن يعالج الإصلاح الماسورة أو الوصلة المتضررة. تناقش LeakFix معك الأعمال المقترحة ومتطلبات الدخول والسعر قبل أن توافق على الإصلاح.',
  imageAlt: 'فنّي يشدّ وصلة محبس نحاسية أسفل مغسلة باستخدام مفتاحين',
  sections: [
    {
      title: 'اشرح لنا المشكلة قبل الحجز',
      body: ['الوصف المختصر يساعدنا على فهم ما قد يتطلبه الإصلاح. عند تواصلك معنا، أخبرنا:'],
      list: [
        'هل التسرب ظاهر؟ وأين؟',
        'هل حُدِّد مصدره من قبل؟',
        'هل فحصه مقاول آخر؟ وما الذي توصّل إليه؟',
      ],
      after: ['صور التمديدات أو المكان المتضرر مفيدة إن توفرت لديك.'],
    },
    {
      title: 'كيف نخطط للإصلاح',
      body: ['يُخطَّط لكل إصلاح بحسب التسرب نفسه. وتعتمد الأعمال المقترحة على:'],
      list: [
        'موقع التسرب وطريقة الوصول إليه.',
        'نوع الماسورة أو الوصلة وحالتها.',
        'مدى انتشار الضرر في المواد المحيطة.',
        'الحاجة إلى فتح أو فك جدار أو أرضية أو تجهيزات للوصول.',
      ],
      after: ['هذه العوامل تحدد نطاق العمل والسعر، لذلك نناقشها معك قبل الاتفاق على العمل.'],
    },
    {
      title: 'ما الذي تتأكد منه قبل بدء العمل',
      body: ['قبل أن توافق على الإصلاح، تأكّد من الاتفاق على:'],
      list: [
        'المكان المتضرر والإصلاح المقترح.',
        'أي دخول مطلوب، بما في ذلك فتح جدار أو أرضية أو سقف.',
        'نطاق العمل المتفق عليه والسعر.',
        'الحاجة إلى قطع غيار من عدمها.',
        'هل تشمل الأعمال التشطيب وإعادة الأسطح إلى حالتها.',
      ],
    },
    {
      title: 'بعد الإصلاح',
      body: [
        'بعد انتهاء العمل، يُفحَص المكان الذي أُصلِح للتأكد من عدم استمرار التسرب بالطريقة المناسبة لنوع الإصلاح.',
        'إذا بقي شيء لم يُحَل، أو كانت هناك أعمال إضافية موصى بها، نوضّحها لك لتقرر الخطوة التالية.',
      ],
    },
  ],
  faqs: [
    {
      q: 'هل يمكنكم إصلاح تسرب تم تحديده مسبقًا؟',
      a: 'تواصل معنا بتفاصيل التسرب وأي نتائج من فحص سابق. الصور وملاحظات الفحص تساعدنا على تقدير ما إذا كان يمكن التخطيط للإصلاح بناءً على هذه المعلومات.',
    },
    {
      q: 'هل أحتاج إلى فحص قبل الإصلاح؟',
      a: 'ليس دائمًا. إذا كان المصدر محددًا بوضوح ويمكن الوصول إليه، فقد يُخطَّط للإصلاح مباشرة. وإذا لم يكن المصدر مؤكدًا، فقد يُنصح بالفحص أولًا حتى يعالج الإصلاح السبب الفعلي.',
    },
    {
      q: 'هل يُعاد الجدار أو الأرضية إلى حالتهما بعد الإصلاح؟',
      a: 'اسأل عن ذلك قبل الموافقة على العمل. شمول التشطيب أو إعادة الأسطح يعتمد على طبيعة العمل، ويجب أن يُذكر في النطاق المتفق عليه.',
    },
    {
      q: 'كيف يُتفق على سعر الإصلاح؟',
      a: 'يُحدَّد السعر بناءً على الأعمال المقترحة والدخول المطلوب وأي قطع لازمة، ويُؤكَّد معك قبل بدء الإصلاح. وإذا احتاج نطاق العمل إلى تغيير بعد البدء، نناقش التغيير معك أولًا.',
    },
  ],
  cta: {
    title: 'ناقش معنا إصلاح التسرب',
    text: 'أخبرنا بما تعرفه عن التسرب وأين يقع العقار في الرياض، وسنتحدث معك عن الأعمال المقترحة.',
  },
};

/* ------------------------------------------------------------------ */

const areasEn = {
  meta: {
    title: 'Water Leak Services in Riyadh | LeakFix Coverage',
    description:
      'Check whether LeakFix can visit your property in Riyadh for water leak detection or repair. Send your district and a short description of the problem.',
  },
  h1: 'Water Leak Services Across Riyadh',
  intro: 'Contact LeakFix to check water leak detection and repair availability at your property in Riyadh.',
  body: 'Send your district, property location and a brief description of the problem. Mention any building access requirements so these can be discussed before a visit is arranged.',
  checklistTitle: 'What to include in your message',
  checklist: [
    'Your district and the property location.',
    'The type of property: villa, apartment or commercial.',
    'A brief description of the problem.',
    'Any access arrangements, such as a building manager, security desk or tenant.',
  ],
  enquiryTitle: 'Check availability for your property',
  enquiryText: 'Get in touch with the details above and we will confirm whether a visit can be arranged.',
  enquiryLink: 'Go to the contact page',
};

const areasAr: typeof areasEn = {
  meta: {
    title: 'خدمات تسربات المياه في الرياض | مناطق خدمة LeakFix',
    description:
      'تحقّق من إمكانية زيارة LeakFix لعقارك في الرياض لكشف تسربات المياه أو إصلاحها. أرسل اسم الحي ووصفًا مختصرًا للمشكلة.',
  },
  h1: 'خدمات تسربات المياه في أنحاء الرياض',
  intro: 'تواصل مع LeakFix للتحقق من توفر خدمة كشف تسربات المياه وإصلاحها في عقارك بالرياض.',
  body: 'أرسل لنا اسم الحي وموقع العقار ووصفًا مختصرًا للمشكلة. واذكر أي متطلبات للدخول إلى المبنى حتى نناقشها قبل ترتيب الزيارة.',
  checklistTitle: 'ما الذي تذكره في رسالتك',
  checklist: [
    'اسم الحي وموقع العقار.',
    'نوع العقار: فيلا أو شقة أو عقار تجاري.',
    'وصف مختصر للمشكلة.',
    'أي ترتيبات للدخول، مثل إدارة المبنى أو الحراسة أو المستأجر.',
  ],
  enquiryTitle: 'تحقّق من إمكانية الزيارة لعقارك',
  enquiryText: 'تواصل معنا بالتفاصيل أعلاه، وسنؤكد لك إن كان بالإمكان ترتيب زيارة.',
  enquiryLink: 'انتقل إلى صفحة التواصل',
};

const aboutEn = {
  meta: {
    title: 'About LeakFix | Water Leak Services in Riyadh',
    description:
      'LeakFix provides water leak detection and repair in Riyadh. Learn how we explain the next step and agree the work and price before proceeding.',
  },
  h1: 'About LeakFix',
  intro:
    'LeakFix provides water leak detection and repair services in Riyadh. Our focus is straightforward: understand the reported problem, explain the proposed next step and agree the work before proceeding.',
  sections: [
    {
      title: 'Clear Information Before a Visit',
      body: [
        'Tell us what you have noticed and where the property is located. We will discuss visit availability and what information is needed.',
      ],
    },
    {
      title: 'A Defined Scope of Work',
      body: [
        'Inspection findings and access requirements help determine the next step. Confirm the proposed work and price before authorising a repair.',
      ],
    },
  ] as Section[],
  contactTitle: 'Contact LeakFix',
  contactText: 'Use the contact page to enquire about a suspected or identified water leak.',
  contactLink: 'Contact LeakFix about a leak',
};

const aboutAr: typeof aboutEn = {
  meta: {
    title: 'من نحن | LeakFix لخدمات تسربات المياه في الرياض',
    description:
      'تقدّم LeakFix خدمة كشف تسربات المياه وإصلاحها في الرياض. تعرّف على طريقتنا في توضيح الخطوة التالية والاتفاق على العمل والسعر قبل البدء.',
  },
  h1: 'من نحن',
  intro:
    'تقدّم LeakFix خدمات كشف تسربات المياه وإصلاحها في الرياض. وطريقتنا واضحة: نفهم المشكلة التي تصفها، ونوضّح الخطوة التالية المقترحة، ونتفق معك على العمل قبل البدء.',
  sections: [
    {
      title: 'معلومات واضحة قبل الزيارة',
      body: ['أخبرنا بما لاحظته وأين يقع العقار، وسنناقش معك المواعيد المتاحة والمعلومات التي نحتاجها.'],
    },
    {
      title: 'نطاق عمل محدد',
      body: ['نتائج الفحص ومتطلبات الدخول تساعد على تحديد الخطوة التالية. تأكّد من الأعمال المقترحة والسعر قبل الموافقة على الإصلاح.'],
    },
  ],
  contactTitle: 'تواصل مع LeakFix',
  contactText: 'استخدم صفحة التواصل للاستفسار عن تسرب مياه مشتبه به أو تم تحديده.',
  contactLink: 'تواصل مع LeakFix بخصوص تسرب',
};

const contactEn = {
  meta: {
    title: 'Contact LeakFix | Water Leak Enquiries in Riyadh',
    description:
      'Contact LeakFix about a suspected or identified water leak at your property in Riyadh. Share your district and a description of the problem.',
  },
  h1: 'Contact LeakFix',
  intro: 'Tell us about your water leak and where the property is located in Riyadh.',
  tipsTitle: 'Helpful details to include',
  tips: [
    'Your district and the property type.',
    'Where you see water or damp, and when it started.',
    'Whether the source of the leak is already known.',
  ],
};

const contactAr: typeof contactEn = {
  meta: {
    title: 'تواصل مع LeakFix | استفسارات تسربات المياه في الرياض',
    description:
      'تواصل مع LeakFix بخصوص تسرب مياه مشتبه به أو تم تحديده في عقارك بالرياض. أرسل اسم الحي ووصفًا للمشكلة.',
  },
  h1: 'تواصل مع LeakFix',
  intro: 'أخبرنا عن تسرب المياه وموقع العقار في الرياض.',
  tipsTitle: 'تفاصيل تساعدنا',
  tips: [
    'اسم الحي ونوع العقار.',
    'أين تظهر المياه أو الرطوبة، ومتى بدأت المشكلة.',
    'هل مصدر التسرب معروف مسبقًا.',
  ],
};

export const content = {
  en: { home: homeEn, detection: detectionEn, repair: repairEn, areas: areasEn, about: aboutEn, contact: contactEn },
  ar: { home: homeAr, detection: detectionAr, repair: repairAr, areas: areasAr, about: aboutAr, contact: contactAr },
} satisfies Record<Lang, unknown>;
