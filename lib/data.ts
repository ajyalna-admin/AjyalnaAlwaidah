// محتوى الموقع بالكامل — هذا مصدر واحد لكل النصوص.

export const brand = {
  name: "أجيالنا الواعدة",
  tagline: "جيلٌ يُمكّن جيلاً",
  parentEntity: "كلية علوم الحاسب والمعلومات في جامعة الأميرة نورة بنت عبدالرحمن",
  email: "Ajyalnaalwaidah@gmail.com",
  telegram: "https://t.me/Ajyalna_Alwaidah",
  twitter: "https://x.com/AjyalnaAlwaidah",
  tiktok: "https://www.tiktok.com/@Ajyalna.Alwaidah",
  linkedin: "https://www.linkedin.com/search/results/all/?keywords=Ajyalna%20Alwaidah",
  footerDescription:
    "مبادرة طلابية في كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة بنت عبدالرحمن، تُعنى بإرشاد الطلبة المستجدين، ودعمهم أكاديميًا وجامعيًا، وبناء تجربة جامعية أكثر وعيًا وتمكينًا، مع رؤية مستقبلية للتوسع إلى جامعات المملكة العربية السعودية.",
};

// ==================== الصفحة الرئيسية ====================

export const hero = {
  eyebrow: brand.parentEntity,
  title: brand.name,
  subtitle: brand.tagline,
  description:
    "أجيالنا الواعدة منصة للإرشاد الجامعي، أطلقها طلبة كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة بنت عبدالرحمن، لتكون دليلًا موثوقًا يساعد الطلبة المستجدين على فهم الحياة الجامعية، والتعرف على أنظمتها وخدماتها، والاستفادة من الفرص المتاحة، من خلال محتوى منظم وتجارب طلابية وإرشاد عملي يرافقهم منذ بداية رحلتهم الجامعية.",
  ctaPrimary: "اختر جامعتك",
  ctaSecondary: "تعرف على المبادرة",
};

// ==================== رحلة اختيار الجامعة/الكلية/التخصص ====================

export type ComingSoonNotice = {
  title: string;
  description: string;
};

export type UniversityEntry = {
  name: string;
  available: boolean;
};

export type Region = {
  name: string;
  universities: UniversityEntry[];
};

export const regions: Region[] = [
  {
    name: "منطقة الرياض",
    universities: [
      { name: "جامعة الأميرة نورة بنت عبدالرحمن", available: true },
      { name: "جامعة الملك سعود", available: false },
      { name: "جامعة الإمام محمد بن سعود الإسلامية", available: false },
      { name: "الجامعة السعودية الإلكترونية", available: false },
    ],
  },
  {
    name: "المنطقة الشرقية",
    universities: [
      { name: "جامعة الإمام عبدالرحمن بن فيصل", available: false },
      { name: "جامعة الملك فيصل", available: false },
    ],
  },
  {
    name: "منطقة مكة المكرمة",
    universities: [
      { name: "جامعة الملك عبدالعزيز", available: false },
      { name: "جامعة جدة", available: false },
      { name: "جامعة أم القرى", available: false },
    ],
  },
];

export const journeySelector = {
  universityStep: {
    title: "اختر جامعتك",
    description: "ابدأ رحلتك باختيار الجامعة، ليتم عرض المحتوى الإرشادي المناسب لك.",
    availableNote: "الجامعات المتاحة حاليًا",
  },
  collegeStep: {
    title: "اختر كليتك",
    availableNote: "الكليات المتاحة حاليًا",
    available: "كلية علوم الحاسب والمعلومات",
  },
  comingSoonUniversity: {
    title: "قريبًا بإذن الله",
    description:
      "نعمل حاليًا على إعداد المحتوى الإرشادي الخاص بهذه الجامعة، ليقدم بنفس الجودة والتنظيم، وسيتم إطلاقه قريبًا بإذن الله.",
  } as ComingSoonNotice,
  comingSoonCollege: {
    title: "قريبًا بإذن الله",
    description: "نعمل على إضافة المحتوى الإرشادي لبقية الكليات مستقبلًا.",
  } as ComingSoonNotice,
};

// ==================== ملخص المحتوى ====================

export const summarySection = {
  eyebrow: "ملخص المحتوى",
  title: "كل ما تحتاج إليه في مكان واحد",
  description:
    "صُمم المحتوى ليكون مرجعًا متكاملًا يساعدك على تجاوز مرحلة البداية الجامعية بثقة، ويغطي أهم الموضوعات التي يحتاج إليها الطالب المستجد، بدءًا من التعرف على الجامعة والكلية، وحتى التسجيل، والخطط الدراسية، والخدمات الجامعية، والأنشطة، والفرص الأكاديمية.",
};

export const summaryCards: string[] = [
  "التعريف بجامعة الأميرة نورة وكلية علوم الحاسب والمعلومات",
  "التعريف بالتخصصات والأجهزة المناسبة لتخصصات الكلية",
  "خدمة طلب / تغيير القبول وخدمة التسريع الجزئي",
  "تحديد المستوى والدورات والروابط التعليمية",
  "البطاقة الجامعية والبريد الجامعي",
  "الحقيبة الذكية وبطاقة الصراف",
  "النظام الأكاديمي (Banner) والجدول الدراسي ونظام التعلم (Blackboard)",
  "مباني الحرم الجامعي ومخطط الجامعة ومركز خدمات الطالبات ونظام النقل والمترو",
  "المواد المشتركة في الترم الأول ومراجع الدراسة",
  "الخطة الدراسية والتخصصات الفرعية (Minors)",
  "مكتبة الكلية والمكتبة المركزية والسجل المهاري",
  "التحويل داخل الكلية وخارجها والسكن الجامعي والحافلات الجامعية",
  "خدمات تقدمها الجامعة وضوابط الزي الجامعي"
];

// ==================== رحلتك معنا ====================

export type JourneyStage = {
  icon: string;
  title: string;
};

export const journeySection = {
  eyebrow: "رحلتك معنا",
  title: "رحلتك الجامعية تبدأ بخطوة... ونحن نرافقك في كل خطوة بعدها",
  description:
    "رتبنا المحتوى وفق التسلسل الطبيعي الذي يمر به الطالب منذ لحظة قبوله وحتى اندماجه الكامل في الحياة الجامعية، لتصل إلى المعلومة المناسبة في الوقت المناسب.",
};

export const journeyStages: JourneyStage[] = [
  { icon: "PartyPopper", title: "القبول والاستعداد" },
  { icon: "Landmark", title: "التعرف على الجامعة" },
  { icon: "Laptop", title: "التعرف على الكلية" },
  { icon: "IdCard", title: "تفعيل الحسابات والخدمات" },
  { icon: "CalendarCheck", title: "التسجيل والخطة الدراسية" },
  { icon: "BookOpen", title: "الدراسة والمقررات" },
  { icon: "Target", title: "الأنشطة والفرص" },
  { icon: "GraduationCap", title: "الاستعداد للمستقبل" },
];

// ==================== موضوعات الإرشاد ====================

export type Topic = {
  slug: string;
  title: string;
  content?: string;
};

export const resourcesSection = {
  eyebrow: "موضوعات الإرشاد",
  title: "موضوعات الإرشاد",
  description:
    "مجموعة من المواضيع المُعدّة بعناية لمرافقة الطالب المستجد خطوة بخطوة، تُضاف إليها موضوعات جديدة أولًا بأول.",
  note: "اضغط على أي موضوع لقراءته، أو لمعرفة موعد توفره.",
};

export const topics: Topic[] = [
  {
    slug: "intro-university",
    title: "التعريف بجامعة الأميرة نورة بنت عبدالرحمن",
    content: `صدر الأمر السامي بإنشاء الجامعة عام ١٤٢٧هـ، ثم وضع خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز -رحمه الله- حجر أساس مدينتها الجامعية عام ١٤٢٩هـ (٢٠٠٨م)؛ لتكون صرحًا يُعنى بتعليم المرأة السعودية وتمكينها. وتحمل الجامعة اسم الأميرة نورة بنت عبدالرحمن، شقيقة مؤسس المملكة العربية السعودية الملك عبدالعزيز -رحمه الله-

الأرقام والشمول:
تضم الجامعة ١٨ كلية ومعهدًا: ست عشرة كلية متخصصة في العلوم الطبيعية والصحية والإنسانية، ومعهدين لتعليم اللغتين العربية والإنجليزية، تقدم من خلالها أكثر من مئة برنامج أكاديمي متنوع. ويدرس فيها -بحسب أحدث الإحصاءات المتاحة- نحو ٣٤,٥٢٠ طالبة في مرحلتي البكالوريوس والدراسات العليا، ويعمل فيها أكثر من ٣,٧٥٣ عضو هيئة تدريس من ٢٥ جنسية.
وتقع الجامعة في مدينة جامعية ضخمة تُعد من أكبر المدن الجامعية النسائية في العالم، إذ تبلغ مساحتها نحو ٨ ملايين م² (أي ٨٠٠ هكتار)، وتضم ٣٢ مجمعًا جامعيًا، ومكتبة مركزية تتسع لأكثر من ٤.٥ مليون مجلد.

الرؤية والقيم:
ترتكز رؤية الجامعة على أن تكون "منارة المرأة للمعرفة والقيم"، مستندة إلى أربع قيم أساسية تشكل حروف اسمها (نورة):
(ن) النماء: التعلم المستمر والابتكار.
(و) الوعي: المواطنة والتعاطف.
(ر) الريادة: المبادرة والتميز.
(ة) التجدد: المرونة والاستجابة.

وذلك لتخريج طالبات مؤهلات لريادة المجتمع والمساهمة في تنمية الوطن وبناء اقتصاد المعرفة.

التطلعات المستقبلية:
تسعى الجامعة -من خلال خطتها الاستراتيجية- إلى:
إعداد كفاءات وطنية منافسة تلبي متطلبات اقتصاد المعرفة.
تقديم برامج أكاديمية تواكب المستقبل.
تمكين المرأة في التنمية الوطنية وريادة الأعمال.
تأسيس منظومة بحث وابتكار تواكب رؤية المملكة ٢٠٣٠.

إنجازات جامعة الأميرة نورة بنت عبدالرحمن:
الجامعة واحدة من أفضل الجامعات في الشرق الأوسط، إذ حصلت على العديد من الجوائز والمراتب المتقدمة، منها:

١. جائزة الجامعة الأفضل تطورًا في المنطقة العربية ضمن التصنيف العالمي QS للجامعات.
٢. المركز الخامس محليًا في تخصص علوم الحاسب وأنظمة المعلومات في تصنيف QS العالمي للتخصصات لعام ٢٠٢٣م.
٣. حصول تخصصات علوم الحاسب وتقنية المعلومات ونظم المعلومات في كلية علوم الحاسب والمعلومات على اعتماد منظمة ABET العالمية، وهي من أهم الهيئات الأمريكية المختصة باعتماد برامج الهندسة والتكنولوجيا.
٤. المركز الثالث محليًا بين الجامعات السعودية، وضمن الفئة (٣٠١–٤٠٠) عالميًا في تصنيف شنغهاي ٢٠٢٥م، بعد أن كانت في المركز الرابع محليًا عام ٢٠٢٤م؛ ما يعكس تقدمًا مستمرًا.
٥. المرتبة الأولى محليًا وإقليميًا، والمرتبة السابعة والعشرون عالميًا في تصنيف التأثير العالمي (THE University Impact Rankings) لعام ٢٠٢١م، مع تحقيق المرتبة الأولى عالميًا في هدف "المساواة بين الجنسين".

وتعكس هذه الإنجازات جهود قيادات الجامعة وطاقمها الأكاديمي في تحقيق التميز على المستويين الإقليمي والعالمي.

خدمات جامعة الأميرة نورة بنت عبدالرحمن:
تتميز الجامعة بتوفير مرافق متكاملة لتحقيق كافة سُبل الراحة لمنسوباتها وطالباتها، ومنها:
١. الجانب الصحي: مستشفى الملك عبدالله بن عبدالعزيز الجامعي، وعيادة مبنى خدمات الطالبات، وعيادة الصحة النفسية.
٢. المكتبة المركزية: من أكبر وأحدث المكتبات الجامعية في المملكة، إضافة إلى مكتبة خاصة بكل كلية.
٣. مركزا خدمات الطالبات: يضمان عددًا من المطاعم والمقاهي، ويحتوي أحدهما على قرطاسية ومتجر تموينات (سبار).
٤. القطار الجامعي: لتسهيل التنقل داخل المدينة الجامعية.
٥. النادي الرياضي: نادٍ ومرافق رياضية مجهزة لخدمة الطالبات ودعم الأنشطة البدنية واللياقة.
كما تُعد الجامعة مركزًا لعدة أكاديميات ومدارس مرموقة، مثل: أكاديمية مطوري آبل الأولى في الشرق الأوسط وشمال أفريقيا، وأكاديمية طويق، والمدرسة السعودية لتعليم القيادة للنساء، إضافة إلى الدورات والمعسكرات التي يقدمها معمل كود لاب.

وتقدم الجامعة لطالباتها خدمات مجانية عبر البريد الجامعي، مثل برامج مايكروسوفت أوفيس، والوصول إلى قواعد البيانات في المكتبة الرقمية السعودية.

ختامًا، توفر جامعة الأميرة نورة بنت عبدالرحمن دعمًا شاملًا للطالبات من بداية التحاقهن إلى ما بعد التخرج، يشمل الإرشاد الأكاديمي والنفسي، وبرامج التدريب المهني، وتأهيل الخريجات عبر لقاءات سنوية، كما تسعى لتخريج طالبات رائدات ومُلهِمات من خلال شراكات دولية.

إن جامعة الأميرة نورة أكثر من مؤسسة تعليمية؛ إنها مدينة جامعية متكاملة، تأسست بدعم ملكي لتعزيز مكانة المرأة السعودية ومهاراتها، وتقود بحيوية نحو اقتصاد المعرفة وريادة المستقبل، في بيئة مستدامة محفزة على الصحة والابتكار.`,
  },
  { slug: "intro-college", title: "التعريف بكلية علوم الحاسب والمعلومات" },
  { slug: "majors-overview", title: "التعرف على التخصصات داخل الكلية" },
  { slug: "level-placement", title: "تحديد المستوى وروابط الأنظمة" },
  { slug: "student-card-email", title: "البطاقة الجامعية والبريد الجامعي" },
  { slug: "smart-bag-bus-card", title: "الحقيبة الذكية وبطاقة الحافلات" },
  { slug: "banner-blackboard", title: "النظام الأكاديمي (Banner) والجدول الدراسي ونظام إدارة التعلم (Blackboard)" },
  { slug: "campus-facilities-metro", title: "مباني الحرم الجامعي ومرافق الكلية ونظام المترو" },
  { slug: "shared-courses-first-term", title: "المواد المشتركة في الفصل الأول" },
  { slug: "study-plan-minors", title: "الخطة الدراسية والتخصصات الفرعية (Minors)" },
  { slug: "library-resources", title: "مكتبة الكلية والمكتبة المركزية والمصادر التعليمية" },
  { slug: "navigation-housing", title: "التنقل داخل الكلية والسكن الجامعي" },
  { slug: "services-facilities-uniform", title: "خدمات الجامعة، والمرافق، والزي الجامعي" },
  { slug: "registration-add-drop", title: "التسجيل والحذف والإضافة" },
  { slug: "withdrawal-deferral", title: "الاعتذار عن الفصل الدراسي وتأجيل الدراسة" },
  { slug: "gpa-academic-warning", title: "المعدل الأكاديمي والإنذار الأكاديمي" },
  { slug: "transfer-majors-colleges", title: "التحويل بين التخصصات والكليات" },
  { slug: "clubs-activities", title: "الأندية الطلابية والأنشطة" },
  { slug: "coop-training-opportunities", title: "التدريب التعاوني والفرص المهنية" },
  { slug: "graduation-requirements", title: "التخرج ومتطلباته" },
];

// ==================== من نحن ====================

export const about = {
  eyebrow: "من نحن",
  title: "مبادرة أجيالنا الواعدة",
  paragraphs: [
    "أجيالنا الواعدة مبادرة طلابية انطلقت في كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة بنت عبدالرحمن، انطلاقًا من إيماننا بأن البداية الواعية تصنع تجربة جامعية أكثر نجاحًا.",
    "نسعى إلى تيسير انتقال الطلبة المستجدين إلى الحياة الجامعية، من خلال توفير محتوى موثوق، وإرشاد عملي، ونقل الخبرات، وبناء مجتمع طلابي متعاون يساند أفراده بعضهم بعضًا.",
  ],
};

export const visionMission = {
  visionTitle: "رؤيتنا",
  visionText:
    "أن نكون النموذج الوطني الرائد في الإرشاد الجامعي، والمرجع الأول الذي يمكّن الطلبة المستجدين من بدء رحلتهم الجامعية بثقة ووعي، وصولًا إلى تطبيق هذا النموذج في جامعات المملكة العربية السعودية.",
  missionTitle: "رسالتنا",
  missionText:
    "تقديم تجربة إرشادية متكاملة تساعد الطلبة المستجدين على فهم البيئة الجامعية، والاستفادة من مواردها وفرصها، من خلال محتوى موثوق، وتجارب طلابية، ومجتمع متعاون يسهم في بناء تجربة جامعية أكثر نجاحًا.",
};

export const goalsSection = {
  title: "أهدافنا",
  goals: [
    "تيسير انتقال الطلبة المستجدين إلى البيئة الجامعية.",
    "توفير مرجع موثوق للمعلومات الأكاديمية والجامعية.",
    "تقديم الإرشاد والإجابة عن الاستفسارات.",
    "نقل الخبرات والتجارب بين الطلبة.",
    "تعزيز روح التعاون والانتماء داخل المجتمع الجامعي.",
    "تمكين الطلبة من الاستفادة من الفرص والبرامج الجامعية.",
    "بناء نموذج وطني للإرشاد الجامعي والتوسع في تطبيقه ليشمل جامعات المملكة العربية السعودية.",
  ],
};

export type Value = { title: string; description: string };

export const valuesSection = {
  title: "قيمنا",
  values: [
    { title: "الإرشاد", description: "نؤمن بأن مشاركة المعرفة والخبرة تصنع بداية أكثر وضوحًا وثقة." },
    { title: "التعاون", description: "نعمل بروح الفريق لبناء مجتمع طلابي متكامل يدعم أفراده بعضهم بعضًا." },
    { title: "المسؤولية", description: "نلتزم بتقديم الدعم والمعلومة بدقة وموثوقية." },
    { title: "التمكين", description: "نسهم في تهيئة الطلبة لاكتشاف إمكاناتهم والاستفادة من الفرص الجامعية." },
    { title: "المبادرة", description: "نشجع على التعلم المستمر، والمشاركة الفاعلة، وصناعة الأثر الإيجابي." },
  ] as Value[],
};

// ==================== الأثر ====================

export const impact = {
  eyebrow: "أثر المبادرة",
  title: "أرقامٌ تروي حجم الأثر",
  description:
    "منذ انطلاقها، ساهمت أجيالنا الواعدة في دعم مئات الطلبة المستجدين، والإجابة عن استفساراتهم، وتقديم برامج ولقاءات إرشادية أسهمت في بناء تجربة جامعية أكثر وضوحًا وثقة.",
  stats: [
    { value: "+5000", label: "طالب جديد استفاد" },
    { value: "+1000", label: "متطوع في فريق المبادرة" },
    { value: "6", label: "نسخ من المبادرة" },
    { value: "+20", label: "شراكة معرفية وأكاديمية" },
  ],
};

// ==================== الفريق ====================

export type LeadershipMember = {
  name: string;
  role: string;
  linkedin?: string;
};

export type CommitteeEntry = {
  name: string;
  leader: string;
  deputy?: string;
  leaderLinkedin?: string;
  deputyLinkedin?: string;
};

export const teamSection = {
  eyebrow: "فريق المبادرة",
  title: "فريق المبادرة",
  description:
    "يقف خلف أجيالنا الواعدة فريق من الطلبة المتطوعين في كلية علوم الحاسب والمعلومات، يعملون بروح المسؤولية والتعاون لتقديم تجربة إرشادية متكاملة، ويحرصون على تطوير المبادرة بصورة مستمرة لضمان تحقيق رسالتها وأهدافها.",
  leadershipNote: "قيادة المبادرة",
  guidanceNote: "لجان الإرشاد",
  subNote: "اللجان الفرعية",
};

export const leadership: LeadershipMember[] = [
  {
    name: "رِناد المحيسني",
    role: "قائدة المبادرة",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Renad%20Almuhaysini",
  },
  {
    name: "لينا الشريف",
    role: "نائبة المبادرة",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Lina%20Alsharif",
  },
];

const li = (name: string) =>
  `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name)}`;

export const guidanceCommittees: CommitteeEntry[] = [
  {
    name: "لجنة علوم الحاسب",
    leader: "ألين البدر",
    deputy: "لجين الممتن",
    leaderLinkedin: li("Aleen Albader"),
    deputyLinkedin: li("Lujain Almmtan"),
  },
  {
    name: "لجنة نظم المعلومات",
    leader: "بدور الربيعان",
    deputy: "نوره القديري",
    leaderLinkedin: li("Bdour Alrubayan"),
    deputyLinkedin: li("Norah Alqudayri"),
  },
  {
    name: "لجنة تقنية المعلومات",
    leader: "رهف العتيبي",
    deputy: "جوري الرشيدي",
    leaderLinkedin: li("Rahaf Alotaibi"),
    deputyLinkedin: li("Jory Alrasheedi"),
  },
  {
    name: "لجنة الذكاء الاصطناعي",
    leader: "لينه الدوسري",
    deputy: "ريان المنقوري",
    leaderLinkedin: li("Leenah Aldossari"),
    deputyLinkedin: li("Rayan Almanquri"),
  },
  {
    name: "لجنة هندسة البرمجيات",
    leader: "أجوان العمر",
    deputy: "رودي القفاري",
    leaderLinkedin: li("Ajwan Alomar"),
    deputyLinkedin: li("Rudi Alqifari"),
  },
  {
    name: "لجنة علم البيانات وتحليلها",
    leader: "لين القويفل",
    deputy: "هيفاء المطيري",
    leaderLinkedin: li("Leen AlQuwaifil"),
  },
  {
    name: "لجنة الأمن السيبراني",
    leader: "يارا النصيان",
    deputy: "ريما الغامدي",
    leaderLinkedin: li("Yara Alnasyan"),
    deputyLinkedin: li("Reema Alghamdi"),
  },
  {
    name: "لجنة إنترنت الأشياء",
    leader: "روز الضيف",
    deputy: "جود الشبانه",
    leaderLinkedin: li("Rose aldhaif"),
    deputyLinkedin: li("Joud Alshabanh"),
  },
];

export const subCommittees: CommitteeEntry[] = [
  {
    name: "لجنة التصميم",
    leader: "شيخة الشريف",
    leaderLinkedin: li("shaikhah alshareef"),
  },
  {
    name: "لجنة الكتابة",
    leader: "ميس خرمي",
    deputy: "نورة الدوسري",
    leaderLinkedin: li("Mays Khormi"),
    deputyLinkedin: li("Norah Aldossari"),
  },
  {
    name: "لجنة العلاقات العامة",
    leader: "الجوهرة الناصر",
    leaderLinkedin: li("Aljawharah Alnasser"),
  },
  {
    name: "لجنة التوسّع الاستراتيجي",
    leader: "عهد الشيحه",
    leaderLinkedin: li("Ahad Alshehah"),
  },
  {
    name: "لجنة الجودة",
    leader: "شيخة الهميلي",
    deputy: "راما الشريف",
    leaderLinkedin: li("Shiekah mazen"),
    deputyLinkedin: li("Rama Alshareef"),
  },
];

// ==================== الأسئلة الشائعة ====================

export type FaqItem = { question: string; answer: string };

export const faqSection = {
  eyebrow: "الأسئلة الشائعة",
  title: "الأسئلة الشائعة",
};

export const faqItems: FaqItem[] = [
  {
    question: "ما هي مبادرة أجيالنا الواعدة؟",
    answer:
      "أجيالنا الواعدة مبادرة طلابية في كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة بنت عبدالرحمن، تهدف إلى إرشاد الطلبة المستجدين، ومساندتهم أكاديميًا وجامعيًا، وتيسير انتقالهم إلى الحياة الجامعية من خلال التوجيه، والدعم، ونقل الخبرات.",
  },
  {
    question: "من الفئة المستهدفة؟",
    answer:
      "تستهدف المبادرة حاليًا الطلبة المستجدين في كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة، مع خطة مستقبلية للتوسع إلى جامعات المملكة العربية السعودية.",
  },
  {
    question: "كيف تساعدني المبادرة بعد قبولي؟",
    answer:
      "توفر المبادرة الإرشاد في الجوانب الأكاديمية والجامعية، مثل التعريف بالأنظمة واللوائح، والخطط الدراسية، والتسجيل، والمنصات الجامعية، والخدمات الإلكترونية، إضافة إلى مشاركة الخبرات والتجارب التي تساعد الطالب على بدء رحلته الجامعية بثقة.",
  },
  {
    question: "هل يشترط امتلاك خبرة أو معرفة مسبقة؟",
    answer: "لا، فقد صُممت المنصة لتكون نقطة البداية لأي طالب مستجد، بغض النظر عن مستوى معرفته بالحياة الجامعية.",
  },
  {
    question: "هل تقدم المبادرة ورشًا وفعاليات؟",
    answer:
      "نعم، تقدم المبادرة ورش عمل، ولقاءات تعريفية، وبرامج إرشادية تهدف إلى تنمية المهارات، والتعريف بالفرص الجامعية، ودعم الطلبة خلال مسيرتهم الأكاديمية.",
  },
  {
    question: "هل استخدام المنصة مجاني؟",
    answer: "نعم، جميع محتويات المنصة وخدماتها متاحة مجانًا، انطلاقًا من رسالة المبادرة في تمكين الطلبة ودعمهم.",
  },
  {
    question: "كيف يمكنني الانضمام إلى فريق المبادرة؟",
    answer:
      "يُعلن عن فتح باب الانضمام مع بداية كل نسخة من المبادرة عبر القنوات الرسمية، ويمكن للراغبين تقديم طلباتهم خلال فترة التسجيل.",
  },
  {
    question: "كيف يمكنني التواصل مع المبادرة؟",
    answer:
      "يمكن التواصل معنا عبر حسابات المبادرة الرسمية أو من خلال نموذج التواصل في الموقع، وسيكون فريق المبادرة سعيدًا بالإجابة عن جميع الاستفسارات.",
  },
];

// ==================== كيف تستخدم الموقع ====================

export const guideSection = {
  eyebrow: "دليل الاستخدام",
  title: "كيف تستخدم الموقع؟",
  steps: [
    { icon: "Compass", text: "ابدأ رحلتك من الأعلى، واختر جامعتك وكليتك." },
    { icon: "FolderOpen", text: "استعرض «ملخص المحتوى» لتأخذ فكرة سريعة عن كل الأقسام." },
    { icon: "BookMarked", text: "تصفّح «موضوعات الإرشاد» و«دليل المقررات» حسب ما تحتاجه." },
    { icon: "MessageCircle", text: "أي سؤال؟ اضغط زر «اسأل أجيالنا» العائم في أي وقت." },
  ],
};

// ==================== دليل المقررات ====================

export type Course = {
  slug: string;
  code: string;
  name: string;
  nameAr: string;
  hours: number;
  level: string;
  prerequisite: string;
  tips?: string[];
  faqs?: { question: string; answer: string }[];
};

export type LevelBlock = {
  level: string;
  courses: Course[];
};

export type MajorCourses = {
  slug: string;
  name: string;
  levels: LevelBlock[];
};

export const coursesSection = {
  eyebrow: "دليل المقررات",
  title: "دليل المقررات",
  description: "اختر تخصصك لتصفّح مقرراته موزّعة حسب المستوى الدراسي.",
  note: "المحتوى قيد الإضافة تباعًا لكل تخصص ومستوى.",
};

export const majorsCourses: MajorCourses[] = [
  {
    slug: "shared",
    name: "متطلبات الكلية المشتركة",
    levels: [
      {
        level: "متطلبات الكلية المشتركة",
        courses: [
          { slug: "math-101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "مشترك", prerequisite: "لا يوجد" },
          { slug: "math-161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "مشترك", prerequisite: "لا يوجد" },
          { slug: "cs-100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "مشترك", prerequisite: "لا يوجد" },
          { slug: "cs-110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "مشترك", prerequisite: "لا يوجد" },
          { slug: "cs-111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "مشترك", prerequisite: "CS 110" },
          { slug: "cs-380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "مشترك", prerequisite: "لا يوجد" },
          { slug: "cs-212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "مشترك", prerequisite: "CS 111" },
          { slug: "it-221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "مشترك", prerequisite: "CS 110" },
          { slug: "is-220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "مشترك", prerequisite: "CS 111" },
          { slug: "is-350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "مشترك", prerequisite: "CS 212" },
          { slug: "cs-340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "مشترك", prerequisite: "CS 212" },
          { slug: "cs-351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "مشترك", prerequisite: "CS 212" },
        ],
      },
    ],
  },
  {
    slug: "cs",
    name: "علوم الحاسب",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "csp-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "csp-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "csp-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "csp-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "csp-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
          { slug: "csp-cs105", code: "CS 105", nameAr: "تصميم منطق رقمي", name: "Digital Logic Design", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "csp-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "csp-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "csp-math242", code: "MATH 242", nameAr: "مبادئ الجبر الخطي", name: "Principles of Linear Algebra", hours: 3, level: "المستوى الثاني", prerequisite: "MATH 101" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "csp-cs206", code: "CS 206", nameAr: "تنظيم الحاسبات", name: "Computer Organization", hours: 3, level: "المستوى الثالث", prerequisite: "CS 105" },
          { slug: "csp-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "csp-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "csp-phys101", code: "PHYS 101", nameAr: "فيزياء عامة (1)", name: "General Physics (1)", hours: 3, level: "المستوى الثالث", prerequisite: "لا يوجد" },
          { slug: "csp-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 101" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "csp-cs207", code: "CS 207", nameAr: "عمارة الحاسب", name: "Computer Architecture", hours: 3, level: "المستوى الرابع", prerequisite: "CS 206" },
          { slug: "csp-cs220", code: "CS 220", nameAr: "تحليل وتصميم الخوارزميات", name: "Algorithms Design and Analysis", hours: 3, level: "المستوى الرابع", prerequisite: "CS 100، CS 212" },
          { slug: "csp-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
          { slug: "csp-math221", code: "MATH 221", nameAr: "المعادلات التفاضلية", name: "Differential Equations", hours: 3, level: "المستوى الرابع", prerequisite: "MATH 103" },
          { slug: "csp-math367", code: "MATH 367", nameAr: "نظرية الاحتمالات", name: "Theory of Probability", hours: 3, level: "المستوى الرابع", prerequisite: "MATH 103، MATH 161" },
          { slug: "csp-phys202", code: "PHYS 202", nameAr: "أساسيات الكهرومغناطيسية", name: "Fundamentals of Electromagnetism", hours: 3, level: "المستوى الرابع", prerequisite: "PHYS 101" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "csp-cs313", code: "CS 313", nameAr: "لغة برمجة متقدمة", name: "Advanced Programming Language", hours: 3, level: "المستوى الخامس", prerequisite: "CS 111" },
          { slug: "csp-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "csp-cs370", code: "CS 370", nameAr: "الذكاء الاصطناعي", name: "Artificial Intelligence", hours: 3, level: "المستوى الخامس", prerequisite: "CS 111، CS 220" },
          { slug: "csp-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى الخامس", prerequisite: "لا يوجد" },
          { slug: "csp-cs385", code: "CS 385", nameAr: "هندسة البرمجيات", name: "Software Engineering", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
          { slug: "csp-it311", code: "IT 311", nameAr: "أمن المعلومات", name: "Information Security", hours: 3, level: "المستوى الخامس", prerequisite: "IT 221" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "csp-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "csp-cs360", code: "CS 360", nameAr: "رسومات الحاسب", name: "Computer Graphics", hours: 3, level: "المستوى السادس", prerequisite: "CS 220، MATH 242" },
          { slug: "csp-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "csp-math353", code: "MATH 353", nameAr: "مدخل إلى التحليل العددي", name: "Introduction to Numerical Analysis", hours: 4, level: "المستوى السادس", prerequisite: "CS 110، MATH 103، MATH 242" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "csp-cs430", code: "CS 430", nameAr: "مبادئ لغات البرمجة", name: "Programming Languages Concepts", hours: 3, level: "المستوى السابع", prerequisite: "CS 212" },
          { slug: "csp-cs487", code: "CS 487", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 102 وحدة + CS 385 + IS 350" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "csp-cs488", code: "CS 488", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "CS 487" },
          { slug: "csp-cs489", code: "CS 489", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 120 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "csp-cs321", code: "CS 321", nameAr: "الخوارزميات المتقدمة", name: "Advanced Algorithms", hours: 3, level: "اختياري", prerequisite: "CS 220" },
          { slug: "csp-cs322", code: "CS 322", nameAr: "اللغات المنضبطة والنظرية الآلية", name: "Formal Languages and Automata Theory", hours: 3, level: "اختياري", prerequisite: "CS 100" },
          { slug: "csp-cs350", code: "CS 350", nameAr: "أنظمة الوسائط المتعددة", name: "Multimedia Systems", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "csp-cs486", code: "CS 486", nameAr: "تطوير تطبيقات للشبكة العنكبوتية", name: "Web Applications Development", hours: 3, level: "اختياري", prerequisite: "IS 220" },
          { slug: "csp-cs372", code: "CS 372", nameAr: "موضوعات مختارة (1)", name: "Selected Topics (1)", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "csp-cs391", code: "CS 391", nameAr: "موضوعات مختارة (2)", name: "Selected Topics (2)", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "csp-cs392", code: "CS 392", nameAr: "موضوعات مختارة (3)", name: "Selected Topics (3)", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "csp-cs390", code: "CS 390", nameAr: "النمذجة والمحاكاة", name: "Modeling and Simulation", hours: 3, level: "اختياري", prerequisite: "MATH 161" },
          { slug: "csp-cs408", code: "CS 408", nameAr: "عمارة وبرمجة الحاسبات المتوازية", name: "Parallel Computers Architecture and Programming", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "csp-cs409", code: "CS 409", nameAr: "النظم الموزعة", name: "Distributed Systems", hours: 3, level: "اختياري", prerequisite: "CS 340" },
          { slug: "csp-cs431", code: "CS 431", nameAr: "تصميم المترجمات", name: "Compilers Design", hours: 3, level: "اختياري", prerequisite: "CS 430" },
          { slug: "csp-cs471", code: "CS 471", nameAr: "مبادئ الإنسان الآلي", name: "Robotics Fundamentals", hours: 3, level: "اختياري", prerequisite: "CS 370" },
          { slug: "csp-cs386", code: "CS 386", nameAr: "اختبار البرمجيات", name: "Software Testing", hours: 3, level: "اختياري", prerequisite: "CS 385" },
          { slug: "csp-cs387", code: "CS 387", nameAr: "منهجية تصميم البرامج", name: "Software Design Methodology", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "csp-cs388", code: "CS 388", nameAr: "تطوير البرمجيات السريع", name: "Agile Software Development", hours: 3, level: "اختياري", prerequisite: "IS 350" },
          { slug: "csp-cs410", code: "CS 410", nameAr: "برمجة تطبيقات الجوال", name: "Mobile Application Programming", hours: 3, level: "اختياري", prerequisite: "CS 313" },
          { slug: "csp-cs411", code: "CS 411", nameAr: "برمجة تطبيقات الجوال المتقدمة", name: "Advanced Mobile Programming", hours: 3, level: "اختياري", prerequisite: "CS 410" },
          { slug: "csp-cs412", code: "CS 412", nameAr: "تصميم واجهة النظام", name: "System Interface Design", hours: 3, level: "اختياري", prerequisite: "CS 351" },
          { slug: "csp-cs361", code: "CS 361", nameAr: "الرؤية بالحاسب ومعالجة الصور", name: "Computer Vision and Image Processing", hours: 3, level: "اختياري", prerequisite: "CS 370" },
          { slug: "csp-cs460", code: "CS 460", nameAr: "مبادئ الصور المتحركة", name: "Principles of Computer Animation", hours: 3, level: "اختياري", prerequisite: "CS 360" },
          { slug: "csp-cs461", code: "CS 461", nameAr: "حسابات الأشكال الفراغية", name: "Computational Geometry", hours: 3, level: "اختياري", prerequisite: "CS 212" },
        ],
      },
    ],
  },
  {
    slug: "ai",
    name: "علوم الذكاء الاصطناعي",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "aip-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "aip-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "aip-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "aip-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "aip-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
          { slug: "aip-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "aip-math242", code: "MATH 242", nameAr: "مبادئ الجبر الخطي", name: "Principles of Linear Algebra", hours: 3, level: "المستوى الثاني", prerequisite: "MATH 101" },
          { slug: "aip-cs105", code: "CS 105", nameAr: "تصميم منطق رقمي", name: "Digital Logic Design", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "aip-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "aip-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 101" },
          { slug: "aip-phys101", code: "PHYS 101", nameAr: "فيزياء عامة (1)", name: "General Physics (1)", hours: 3, level: "المستوى الثالث", prerequisite: "لا يوجد" },
          { slug: "aip-cai210", code: "CAI 210", nameAr: "أساسيات الذكاء الاصطناعي", name: "Artificial Intelligence Fundamentals", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "aip-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "aip-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "aip-cs205", code: "CS 205", nameAr: "عمارة وتنظيم الحاسبات", name: "Computer Architecture and Organization", hours: 3, level: "المستوى الرابع", prerequisite: "CS 105" },
          { slug: "aip-cai211", code: "CAI 211", nameAr: "التنقيب عن البيانات واسترجاع المعلومات", name: "Data Mining and Information Retrieval", hours: 3, level: "المستوى الرابع", prerequisite: "IS 220" },
          { slug: "aip-cai230", code: "CAI 230", nameAr: "خوارزميات الذكاء الاصطناعي", name: "Artificial Intelligence Algorithms", hours: 3, level: "المستوى الرابع", prerequisite: "CAI 210" },
          { slug: "aip-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
          { slug: "aip-math367", code: "MATH 367", nameAr: "نظرية الاحتمالات", name: "Theory of Probability", hours: 3, level: "المستوى الرابع", prerequisite: "MATH 103, MATH 161" },
          { slug: "aip-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى الرابع", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "aip-cai320", code: "CAI 320", nameAr: "تعلم الآلة والتعرف على الأنماط", name: "Machine Learning and Pattern Recognition", hours: 3, level: "المستوى الخامس", prerequisite: "CAI 211" },
          { slug: "aip-cai421", code: "CAI 421", nameAr: "مقدمة في التعلم العميق", name: "Introduction to Deep Learning", hours: 3, level: "المستوى الخامس", prerequisite: "CAI 211" },
          { slug: "aip-cai340", code: "CAI 340", nameAr: "مقدمة في الرؤية الآلية والروبوتات", name: "Introduction to Vision and Robotics", hours: 3, level: "المستوى الخامس", prerequisite: "CAI 230" },
          { slug: "aip-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "aip-cs385", code: "CS 385", nameAr: "هندسة البرمجيات", name: "Software Engineering", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
          { slug: "aip-it311", code: "IT 311", nameAr: "أمن المعلومات", name: "Information Security", hours: 3, level: "المستوى الخامس", prerequisite: "IT 221" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "aip-cai350", code: "CAI 350", nameAr: "معالجة اللغات الطبيعية", name: "Natural Language Processing", hours: 3, level: "المستوى السادس", prerequisite: "CAI 421" },
          { slug: "aip-cai360", code: "CAI 360", nameAr: "برمجة التطبيقات الذكية", name: "Artificial Intelligence Applications Programming", hours: 3, level: "المستوى السادس", prerequisite: "CAI 421" },
          { slug: "aip-cai441", code: "CAI 441", nameAr: "حركة وديناميكية الروبوت", name: "Robot Kinematics and Dynamics", hours: 3, level: "المستوى السادس", prerequisite: "CAI 340" },
          { slug: "aip-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "aip-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "aip-cai461", code: "CAI 461", nameAr: "أنظمة قائمة على العملاء", name: "Agent Based Systems", hours: 3, level: "المستوى السابع", prerequisite: "CAI 441" },
          { slug: "aip-cai480", code: "CAI 480", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 102 وحدة + CS 385" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "aip-cai481", code: "CAI 481", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "CAI 480" },
          { slug: "aip-cai490", code: "CAI 490", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 122 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "aip-cai312", code: "CAI 312", nameAr: "الذكاء الاصطناعي المتقدم", name: "Advanced Artificial Intelligence", hours: 3, level: "اختياري", prerequisite: "CAI 230" },
          { slug: "aip-cai322", code: "CAI 322", nameAr: "الأنظمة الخبيرة", name: "Expert Systems", hours: 3, level: "اختياري", prerequisite: "CAI 230" },
          { slug: "aip-cai323", code: "CAI 323", nameAr: "حوسبة الشبكات العصبية", name: "Neural Networks Computation", hours: 3, level: "اختياري", prerequisite: "CAI 320" },
          { slug: "aip-cai300", code: "CAI 300", nameAr: "موضوعات مختارة (1)", name: "Selected Topics (1)", hours: 3, level: "اختياري", prerequisite: "CAI 340" },
          { slug: "aip-cai401", code: "CAI 401", nameAr: "موضوعات مختارة (2)", name: "Selected Topics (2)", hours: 3, level: "اختياري", prerequisite: "CAI 360" },
          { slug: "aip-cai413", code: "CAI 413", nameAr: "الذكاء الاصطناعي للأشياء", name: "Artificial Intelligence of Things", hours: 3, level: "اختياري", prerequisite: "CAI 360" },
          { slug: "aip-cai324", code: "CAI 324", nameAr: "تعلم الآلة التطبيقي", name: "Applied Machine Learning", hours: 3, level: "اختياري", prerequisite: "CAI 320" },
          { slug: "aip-cai451", code: "CAI 451", nameAr: "معالجة اللغات الطبيعية التطبيقي", name: "Applied Natural Language Processing", hours: 3, level: "اختياري", prerequisite: "CAI 350" },
          { slug: "aip-cai470", code: "CAI 470", nameAr: "الذكاء الاصطناعي للأمن السيبراني", name: "Artificial Intelligence for Cyber Security", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "aip-cs390", code: "CS 390", nameAr: "النمذجة والمحاكاة", name: "Modeling and Simulation", hours: 3, level: "اختياري", prerequisite: "MATH 161" },
        ],
      },
    ],
  },
  {
    slug: "se",
    name: "هندسة البرمجيات",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "sep-sw100", code: "SW 100", nameAr: "مبادئ البرمجة ومهارات حل المشكلات", name: "Principles of Programming and Problem-Solving Skills", hours: 2, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "sep-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "sep-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "sep-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "sep-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "sep-sw101", code: "SW 101", nameAr: "مدخل إلى هندسة البرمجيات", name: "Introduction to Software Engineering", hours: 2, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "sep-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "sep-math242", code: "MATH 242", nameAr: "مبادئ الجبر الخطي", name: "Principles of Linear Algebra", hours: 3, level: "المستوى الثاني", prerequisite: "MATH 101" },
          { slug: "sep-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "sep-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "sep-sw210", code: "SW 210", nameAr: "هندسة متطلبات البرمجيات", name: "Software Requirements Engineering", hours: 3, level: "المستوى الثالث", prerequisite: "SW 101، CS 111" },
          { slug: "sep-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "sep-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "sep-phys101", code: "PHYS 101", nameAr: "فيزياء عامة (1)", name: "General Physics (1)", hours: 3, level: "المستوى الثالث", prerequisite: "لا يوجد" },
          { slug: "sep-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 101" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "sep-sw220", code: "SW 220", nameAr: "عمليات ونمذجة البرمجيات", name: "Software Process and Modeling", hours: 3, level: "المستوى الرابع", prerequisite: "SW 210" },
          { slug: "sep-sw222", code: "SW 222", nameAr: "تنظيم وعمارة الحاسبات", name: "Computer Organization and Architecture", hours: 3, level: "المستوى الرابع", prerequisite: "لا يوجد" },
          { slug: "sep-sw230", code: "SW 230", nameAr: "برمجة تطبيقات الشبكة العنكبوتية", name: "Web Application Programming", hours: 3, level: "المستوى الرابع", prerequisite: "IS 220" },
          { slug: "sep-cs220", code: "CS 220", nameAr: "تحليل وتصميم الخوارزميات", name: "Algorithms Design and Analysis", hours: 3, level: "المستوى الرابع", prerequisite: "CS 100، CS 212" },
          { slug: "sep-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
          { slug: "sep-chem101", code: "CHEM 101", nameAr: "كيمياء عامة (1)", name: "General Chemistry (1)", hours: 3, level: "المستوى الرابع", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "sep-sw331", code: "SW 331", nameAr: "البرمجة المتقدمة", name: "Advanced Programming", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
          { slug: "sep-sw332", code: "SW 332", nameAr: "بناء البرمجيات باستخدام منهجية التطوير السريع", name: "Agile Based Software Construction", hours: 3, level: "المستوى الخامس", prerequisite: "SW 220" },
          { slug: "sep-sw340", code: "SW 340", nameAr: "ضمان جودة البرمجيات", name: "Software Quality Assurance", hours: 2, level: "المستوى الخامس", prerequisite: "SW 210" },
          { slug: "sep-sw341", code: "SW 341", nameAr: "هندسة أمن البرمجيات", name: "Software Security Engineering", hours: 2, level: "المستوى الخامس", prerequisite: "IT 221" },
          { slug: "sep-sw350", code: "SW 350", nameAr: "البحث العلمي الجامعي", name: "Undergraduate Scientific Research", hours: 2, level: "المستوى الخامس", prerequisite: "ENG 102-2" },
          { slug: "sep-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "sep-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى الخامس", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "sep-sw303", code: "SW 303", nameAr: "بحوث العمليات", name: "Operational Research", hours: 2, level: "المستوى السادس", prerequisite: "MATH 242" },
          { slug: "sep-sw321", code: "SW 321", nameAr: "تصميم وعمارة البرمجيات", name: "Software Architecture and Design", hours: 3, level: "المستوى السادس", prerequisite: "SW 210، SW 341" },
          { slug: "sep-sw342", code: "SW 342", nameAr: "الاختبار والتحقق من البرمجيات", name: "Software Verification and Validation", hours: 2, level: "المستوى السادس", prerequisite: "SW 340، SW 332" },
          { slug: "sep-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "sep-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "sep-math367", code: "MATH 367", nameAr: "نظرية الاحتمالات", name: "Theory of Probability", hours: 3, level: "المستوى السادس", prerequisite: "MATH 103، MATH 161" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "sep-sw411", code: "SW 411", nameAr: "صيانة وتطوير البرمجيات", name: "Software Maintenance and Evolution", hours: 2, level: "المستوى السابع", prerequisite: "SW 342" },
          { slug: "sep-sw451", code: "SW 451", nameAr: "مشروع تخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 110 وحدة + SW 332 + SW 350" },
          { slug: "sep-math353", code: "MATH 353", nameAr: "مدخل إلى التحليل العددي", name: "Introduction to Numerical Analysis", hours: 4, level: "المستوى السابع", prerequisite: "CS 110، MATH 103، MATH 242" },
          { slug: "sep-math368", code: "MATH 368", nameAr: "التحليل الإحصائي للبيانات", name: "Statistical Analysis for Data", hours: 3, level: "المستوى السابع", prerequisite: "MATH 367" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "sep-sw452", code: "SW 452", nameAr: "مشروع تخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "SW 451" },
          { slug: "sep-sw491", code: "SW 491", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 130 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "sep-sw302", code: "SW 302", nameAr: "الحوسبة السحابية", name: "Cloud Computing", hours: 3, level: "اختياري", prerequisite: "CS 340، IS 220، IT 221" },
          { slug: "sep-sw412", code: "SW 412", nameAr: "هندسة قابلية استخدام البرامج", name: "Software Usability Engineering", hours: 3, level: "اختياري", prerequisite: "SW 321" },
          { slug: "sep-sw413", code: "SW 413", nameAr: "استكشاف وعرض البيانات", name: "Data Exploration and Visualization", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "sep-sw423", code: "SW 423", nameAr: "أنماط تصميم البرامج", name: "Design Patterns", hours: 3, level: "اختياري", prerequisite: "SW 321" },
          { slug: "sep-sw430", code: "SW 430", nameAr: "إنترنت الأشياء", name: "Internet of Things", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "sep-sw433", code: "SW 433", nameAr: "برمجة تطبيقات الجوال", name: "Mobile Application Programming", hours: 3, level: "اختياري", prerequisite: "SW 331" },
          { slug: "sep-sw434", code: "SW 434", nameAr: "مقدمة في علم الآلة", name: "Introduction to Machine Learning", hours: 3, level: "اختياري", prerequisite: "MATH 367، CS 111" },
          { slug: "sep-sw436", code: "SW 436", nameAr: "تطوير الألعاب", name: "Game Development", hours: 3, level: "اختياري", prerequisite: "SW 331" },
          { slug: "sep-sw435", code: "SW 435", nameAr: "البرمجة بلغة سويفت", name: "Swift Programming", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "sep-cs350", code: "CS 350", nameAr: "أنظمة الوسائط المتعددة", name: "Multimedia Systems", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "sep-cai211", code: "CAI 211", nameAr: "التنقيب عن البيانات واسترجاع المعلومات", name: "Data Mining & Information Retrieval", hours: 3, level: "اختياري", prerequisite: "IS 220" },
          { slug: "sep-sw360", code: "SW 360", nameAr: "موضوعات مختارة (1)", name: "Selected Topics (1)", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
          { slug: "sep-sw361", code: "SW 361", nameAr: "موضوعات مختارة (2)", name: "Selected Topics (2)", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
          { slug: "sep-sw362", code: "SW 362", nameAr: "موضوعات مختارة (3)", name: "Selected Topics (3)", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
        ],
      },
    ],
  },
  {
    slug: "is",
    name: "نظم المعلومات",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "isp-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "isp-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "isp-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "isp-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "isp-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
          { slug: "isp-is130", code: "IS 130", nameAr: "نظم المعلومات (1)", name: "Information Systems (1)", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "isp-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "isp-bus101", code: "BUS 101", nameAr: "مبادئ إدارة الأعمال", name: "Principles of Business Administration", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "isp-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "isp-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "isp-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "isp-is231", code: "IS 231", nameAr: "نظم المعلومات (2)", name: "Information Systems (2)", hours: 3, level: "المستوى الثالث", prerequisite: "IS 130" },
          { slug: "isp-acct201", code: "ACCT 201", nameAr: "مبادئ المحاسبة المالية", name: "Principles of Financial Accounting", hours: 3, level: "المستوى الثالث", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "isp-is221", code: "IS 221", nameAr: "إدارة قواعد البيانات", name: "Database Management", hours: 3, level: "المستوى الرابع", prerequisite: "IS 220" },
          { slug: "isp-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
          { slug: "isp-mkt203", code: "MKT 203", nameAr: "مبادئ التسويق", name: "Principles of Marketing", hours: 3, level: "المستوى الرابع", prerequisite: "BUS 101" },
          { slug: "isp-is234", code: "IS 234", nameAr: "تطوير التطبيقات متعددة الطبقات", name: "Multi-tier Applications Development", hours: 3, level: "المستوى الرابع", prerequisite: "CS 111, IS 220" },
          { slug: "isp-is233", code: "IS 233", nameAr: "تحليل وتصميم نظم المعلومات", name: "Information Systems Analysis and Design", hours: 3, level: "المستوى الرابع", prerequisite: "IS 231, IS 220" },
          { slug: "isp-hrm214", code: "HRM 214", nameAr: "السلوك التنظيمي", name: "Organizational Behavior", hours: 3, level: "المستوى الرابع", prerequisite: "BUS 101" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "isp-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "isp-bus353", code: "BUS 353", nameAr: "ريادة الأعمال", name: "Entrepreneurship", hours: 3, level: "المستوى الخامس", prerequisite: "لا يوجد" },
          { slug: "isp-is332", code: "IS 332", nameAr: "تصميم نظم الأعمال الإلكترونية", name: "e-Business Systems Design", hours: 3, level: "المستوى الخامس", prerequisite: "IS 231" },
          { slug: "isp-is322", code: "IS 322", nameAr: "مستودعات البيانات والتنقيب عنها", name: "Data Warehousing and Data Mining", hours: 3, level: "المستوى الخامس", prerequisite: "IS 221, MATH 161" },
          { slug: "isp-is323", code: "IS 323", nameAr: "التصميم الكينوني الموجه", name: "Object Oriented Design", hours: 3, level: "المستوى الخامس", prerequisite: "CS 111, IS 233" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "isp-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "isp-is340", code: "IS 340", nameAr: "معمارية المؤسسات", name: "Enterprise Architecture", hours: 3, level: "المستوى السادس", prerequisite: "IS 323, IS 234" },
          { slug: "isp-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "isp-is324", code: "IS 324", nameAr: "أمن نظم المعلومات", name: "Information Systems Security", hours: 3, level: "المستوى السادس", prerequisite: "IS 231" },
          { slug: "isp-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى السادس", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "isp-is410", code: "IS 410", nameAr: "إدارة واستراتيجية نظم المعلومات", name: "IS Management and Strategy", hours: 3, level: "المستوى السابع", prerequisite: "IS 231" },
          { slug: "isp-is435", code: "IS 435", nameAr: "نظم دعم اتخاذ القرار", name: "Decision Support Systems", hours: 3, level: "المستوى السابع", prerequisite: "IS 322" },
          { slug: "isp-is451", code: "IS 451", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 90 وحدة + IS 350, IS 233" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "isp-is452", code: "IS 452", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "IS 451" },
          { slug: "isp-is453", code: "IS 453", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 118 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "isp-is414", code: "IS 414", nameAr: "إدارة التعافي من الكوارث", name: "Disaster Recovery Management", hours: 3, level: "اختياري", prerequisite: "IS 324" },
          { slug: "isp-is362", code: "IS 362", nameAr: "إدارة عمليات الأعمال", name: "Business Process Management", hours: 3, level: "اختياري", prerequisite: "IS 233" },
          { slug: "isp-is411", code: "IS 411", nameAr: "تدقيق ورقابة تكنولوجيا المعلومات", name: "IT Auditing and Control", hours: 3, level: "اختياري", prerequisite: "IS 410" },
          { slug: "isp-is412", code: "IS 412", nameAr: "ابتكارات أنظمة المعلومات والتكنولوجيات الجديدة", name: "IS Innovations and New Technologies", hours: 3, level: "اختياري", prerequisite: "IS 410" },
          { slug: "isp-is342", code: "IS 342", nameAr: "نظم المؤسسات", name: "Enterprise Systems", hours: 3, level: "اختياري", prerequisite: "IS 340" },
          { slug: "isp-is341", code: "IS 341", nameAr: "إدارة وأمن الحوسبة السحابية", name: "Cloud Computing Management and Security", hours: 3, level: "اختياري", prerequisite: "IS 340" },
          { slug: "isp-is413", code: "IS 413", nameAr: "إدارة تحليل المخاطر", name: "Risk Analysis Management", hours: 3, level: "اختياري", prerequisite: "IS 350" },
          { slug: "isp-is343", code: "IS 343", nameAr: "تخطيط الموارد في المؤسسة", name: "Enterprise Resources Planning", hours: 3, level: "اختياري", prerequisite: "IS 233" },
          { slug: "isp-is363", code: "IS 363", nameAr: "موضوعات مختارة (1)", name: "Selected Topics (1)", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
          { slug: "isp-is364", code: "IS 364", nameAr: "موضوعات مختارة (2)", name: "Selected Topics (2)", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
          { slug: "isp-cs313", code: "CS 313", nameAr: "لغة برمجة متقدمة", name: "Advanced Programming Language", hours: 3, level: "اختياري", prerequisite: "CS 111" },
          { slug: "isp-cs350", code: "CS 350", nameAr: "أنظمة الوسائط المتعددة", name: "Multimedia Systems", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "isp-is437", code: "IS 437", nameAr: "تطوير الأنظمة الالكترونية وتصميم الواجهات", name: "Development of E-Systems & Interface Design", hours: 3, level: "اختياري", prerequisite: "IS 234" },
          { slug: "isp-is438", code: "IS 438", nameAr: "تطبيقات النظم الإلكترونية", name: "E-Systems Applications", hours: 3, level: "اختياري", prerequisite: "IS 332" },
          { slug: "isp-is465", code: "IS 465", nameAr: "استراتيجيات الأعمال الالكترونية", name: "E-Business Strategies", hours: 3, level: "اختياري", prerequisite: "IS 332, BUS 101" },
          { slug: "isp-is436", code: "IS 436", nameAr: "أساليب دعم اتخاذ القرار", name: "Techniques of Decision Support Systems", hours: 3, level: "اختياري", prerequisite: "IS 435" },
          { slug: "isp-is464", code: "IS 464", nameAr: "أساسيات النمذجة والمحاكاة", name: "Modeling & Simulations Fundamentals", hours: 3, level: "اختياري", prerequisite: "IS 233" },
          { slug: "isp-is425", code: "IS 425", nameAr: "الأنظمة الذكية", name: "Intelligent Systems", hours: 3, level: "اختياري", prerequisite: "IS 233" },
        ],
      },
    ],
  },
  {
    slug: "data-science",
    name: "علم البيانات وتحليلها",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "dsp-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "dsp-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "dsp-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "dsp-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "dsp-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "dsp-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "dsp-bus101", code: "BUS 101", nameAr: "مبادئ إدارة الأعمال", name: "Principles of Business Administration", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "dsp-ds111", code: "DS 111", nameAr: "مقدمة في علم البيانات", name: "Introduction to Data Science", hours: 3, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "dsp-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "dsp-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "dsp-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "dsp-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 101" },
          { slug: "dsp-math242", code: "MATH 242", nameAr: "مبادئ الجبر الخطي", name: "Principles of Linear Algebra", hours: 3, level: "المستوى الثالث", prerequisite: "MATH 101" },
          { slug: "dsp-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى الثالث", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "dsp-ds242", code: "DS 242", nameAr: "حوكمة البيانات", name: "Data Governance", hours: 3, level: "المستوى الرابع", prerequisite: "DS 111" },
          { slug: "dsp-cs220", code: "CS 220", nameAr: "تحليل وتصميم الخوارزميات", name: "Algorithms Design and Analysis", hours: 3, level: "المستوى الرابع", prerequisite: "CS 100, CS 212" },
          { slug: "dsp-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
          { slug: "dsp-math367", code: "MATH 367", nameAr: "نظرية الاحتمالات", name: "Theory of Probability", hours: 3, level: "المستوى الرابع", prerequisite: "MATH 103, MATH 161" },
          { slug: "dsp-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى الرابع", prerequisite: "CS 212" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "dsp-ds312", code: "DS 312", nameAr: "تنقيب البيانات", name: "Data Mining", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220, DS 111" },
          { slug: "dsp-ds321", code: "DS 321", nameAr: "استرجاع المعلومات", name: "Information Retrieval", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212, MATH 242" },
          { slug: "dsp-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "dsp-math368", code: "MATH 368", nameAr: "التحليل الإحصائي للبيانات", name: "Statistical Analysis for Data", hours: 3, level: "المستوى الخامس", prerequisite: "MATH 367" },
          { slug: "dsp-cs385", code: "CS 385", nameAr: "هندسة البرمجيات", name: "Software Engineering", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "dsp-ds331", code: "DS 331", nameAr: "البيانات الضخمة", name: "Big Data", hours: 4, level: "المستوى السادس", prerequisite: "IS 220, DS 312" },
          { slug: "dsp-ds322", code: "DS 322", nameAr: "ذكاء الأعمال", name: "Business Intelligence", hours: 3, level: "المستوى السادس", prerequisite: "BUS 101, MATH 368, DS 312" },
          { slug: "dsp-ds323", code: "DS 323", nameAr: "تعلم الآلة", name: "Machine Learning", hours: 3, level: "المستوى السادس", prerequisite: "DS 312" },
          { slug: "dsp-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "dsp-ds424", code: "DS 424", nameAr: "السلاسل الزمنية والتنبؤ في علم البيانات", name: "Time Series and Forecasting in Data Science", hours: 3, level: "المستوى السابع", prerequisite: "DS 322, MATH 368" },
          { slug: "dsp-ds413", code: "DS 413", nameAr: "استكشاف وتصوير البيانات", name: "Data Exploration and Visualization", hours: 3, level: "المستوى السابع", prerequisite: "CS 220" },
          { slug: "dsp-ds451", code: "DS 451", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 90 وحدة + IS 350" },
          { slug: "dsp-ds443", code: "DS 443", nameAr: "أمن وخصوصية البيانات", name: "Data Privacy and Security", hours: 3, level: "المستوى السابع", prerequisite: "DS 242" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "dsp-ds452", code: "DS 452", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "DS 451" },
          { slug: "dsp-ds453", code: "DS 453", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 120 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "dsp-ds341", code: "DS 341", nameAr: "مستودعات البيانات", name: "Data Warehousing", hours: 3, level: "اختياري", prerequisite: "DS 312" },
          { slug: "dsp-ds432", code: "DS 432", nameAr: "إدارة وأمن الحوسبة السحابية", name: "Cloud Management and Security", hours: 3, level: "اختياري", prerequisite: "DS 111" },
          { slug: "dsp-ds433", code: "DS 433", nameAr: "تحليلات الويب", name: "Web Analytics", hours: 3, level: "اختياري", prerequisite: "DS 331" },
          { slug: "dsp-ds434", code: "DS 434", nameAr: "موضوعات مختاره (1)", name: "Selected Topics (1)", hours: 3, level: "اختياري", prerequisite: "DS 111" },
          { slug: "dsp-ds437", code: "DS 437", nameAr: "موضوعات مختاره (2)", name: "Selected Topics (2)", hours: 3, level: "اختياري", prerequisite: "DS 111" },
          { slug: "dsp-ds414", code: "DS 414", nameAr: "أدوات علوم البيانات", name: "Tools for Data Science", hours: 3, level: "اختياري", prerequisite: "DS 312" },
          { slug: "dsp-ds361", code: "DS 361", nameAr: "علم البيانات للأعمال", name: "Data Science for Business", hours: 3, level: "اختياري", prerequisite: "DS 322" },
          { slug: "dsp-ds435", code: "DS 435", nameAr: "علم البيانات للرعاية الصحية", name: "Data Science for Healthcare", hours: 3, level: "اختياري", prerequisite: "DS 312" },
          { slug: "dsp-ds436", code: "DS 436", nameAr: "تحليل بيانات الوسائط المتعددة", name: "Multimedia Data Analysis", hours: 3, level: "اختياري", prerequisite: "DS 321" },
        ],
      },
    ],
  },
  {
    slug: "it",
    name: "تقنية المعلومات",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "it-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "it-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "it-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "it-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "it-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
          { slug: "it-phys101", code: "PHYS 101", nameAr: "فيزياء عامة (1)", name: "General Physics (1)", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "it-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "it-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "it-cs105", code: "CS 105", nameAr: "تصميم منطق رقمي", name: "Digital Logic Design", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "it-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 101" },
          { slug: "it-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "it-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "it-cs206", code: "CS 206", nameAr: "تنظيم الحاسبات", name: "Computer Organization", hours: 3, level: "المستوى الثالث", prerequisite: "CS 105" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "it-it222", code: "IT 222", nameAr: "مبادئ الاتصالات والشبكات", name: "Communications and Networks Fundamentals", hours: 4, level: "المستوى الرابع", prerequisite: "PHYS 101" },
          { slug: "it-is221", code: "IS 221", nameAr: "إدارة قواعد البيانات", name: "Database Management", hours: 3, level: "المستوى الرابع", prerequisite: "IS 220" },
          { slug: "it-cs220", code: "CS 220", nameAr: "تحليل وتصميم الخوارزميات", name: "Algorithms Design and Analysis", hours: 3, level: "المستوى الرابع", prerequisite: "CS 100, CS 212" },
          { slug: "it-it201", code: "IT 201", nameAr: "مبادئ نظم وتقنية المعلومات", name: "Principles of Information and Technology Systems", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
          { slug: "it-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الرابع", prerequisite: "CS 110" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "it-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى الخامس", prerequisite: "لا يوجد" },
          { slug: "it-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "it-cs385", code: "CS 385", nameAr: "هندسة البرمجيات", name: "Software Engineering", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
          { slug: "it-311", code: "IT 311", nameAr: "أمن المعلومات", name: "Information Security", hours: 3, level: "المستوى الخامس", prerequisite: "IT 221" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "it-math367", code: "MATH 367", nameAr: "نظرية الاحتمالات", name: "Theory of Probability", hours: 3, level: "المستوى السادس", prerequisite: "MATH 103, MATH 161" },
          { slug: "it-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
          { slug: "it-361", code: "IT 361", nameAr: "معمارية ودمج أنظمة تقنية معلومات المؤسسات", name: "IT Enterprise Systems Architecture and Integration", hours: 3, level: "المستوى السادس", prerequisite: "IT 201, CS 385" },
          { slug: "it-371", code: "IT 371", nameAr: "إدارة النظام", name: "System Administration", hours: 3, level: "المستوى السادس", prerequisite: "CS 340" },
          { slug: "it-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "it-435", code: "IT 435", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 100 وحدة + IS 350" },
          { slug: "it-481", code: "IT 481", nameAr: "أنظمة وتكنولوجيا الشبكة العنكبوتية", name: "Web Systems and Technologies", hours: 3, level: "المستوى السابع", prerequisite: "IT 221" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "it-436", code: "IT 436", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "IT 435" },
          { slug: "it-437", code: "IT 437", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 117 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "it-426", code: "IT 426", nameAr: "موضوعات مختارة", name: "Selected Topics", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-elec-cs350", code: "CS 350", nameAr: "أنظمة الوسائط المتعددة", name: "Multimedia Systems", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "it-is322", code: "IS 322", nameAr: "مستودعات البيانات والتنقيب عن البيانات", name: "Data Warehousing and Data Mining", hours: 3, level: "اختياري", prerequisite: "IS 221, MATH 161" },
          { slug: "it-323", code: "IT 323", nameAr: "بروتوكولات الشبكات", name: "Networks Protocols", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-331", code: "IT 331", nameAr: "الشبكات اللاسلكية ونظم الاتصالات المتنقلة", name: "Wireless Networks and Mobile Communication Systems", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-324", code: "IT 324", nameAr: "إدارة وتحليل الشبكات", name: "Networks Management and Analysis", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-341", code: "IT 341", nameAr: "برمجة وتطبيقات الشبكات", name: "Networks Programming and Applications", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-432", code: "IT 432", nameAr: "تصميم وإنشاء الشبكات", name: "Networks Design and Implementation", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-433", code: "IT 433", nameAr: "شبكات الاستشعار اللاسلكي", name: "Wireless Sensor Networks", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-425", code: "IT 425", nameAr: "الاتصال بالأقمار الصناعية", name: "Satellite Communication", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-434", code: "IT 434", nameAr: "الشبكات الضوئية", name: "Optical Networks", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-351", code: "IT 351", nameAr: "نظم تشغيل الشبكات", name: "Networks Operating Systems", hours: 3, level: "اختياري", prerequisite: "IT 221" },
          { slug: "it-352", code: "IT 352", nameAr: "أنظمة الوقت الحقيقي والأنظمة المضمنة", name: "Real Time and Embedded Systems", hours: 3, level: "اختياري", prerequisite: "CS 340" },
          { slug: "it-353", code: "IT 353", nameAr: "الحاسبات المتوازية", name: "Parallel Computers", hours: 3, level: "اختياري", prerequisite: "CS 340, CS 206" },
          { slug: "it-414", code: "IT 414", nameAr: "الحاسب الجنائي", name: "Computer Forensics", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "it-412", code: "IT 412", nameAr: "أمن الشبكات", name: "Networks Security", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "it-415", code: "IT 415", nameAr: "إدارة أمن المعلومات", name: "Information Security Management", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "it-413", code: "IT 413", nameAr: "القرصنة الأخلاقية", name: "Ethical Hacking", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "it-416", code: "IT 416", nameAr: "القياسات الحيوية والأمن", name: "Biometrics and Security", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "it-417", code: "IT 417", nameAr: "أمن الأنظمة المتنقلة واللاسلكية", name: "Mobile and Wireless Systems Security", hours: 3, level: "اختياري", prerequisite: "IT 311" },
          { slug: "it-430", code: "IT 430", nameAr: "إنترنت الأشياء", name: "Internet of Things", hours: 3, level: "اختياري", prerequisite: "IT 221" },
        ],
      },
    ],
  },
  {
    slug: "cyber",
    name: "الأمن السيبراني",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "cy-eng101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "cy-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "cy-cs100", code: "CS 100", nameAr: "التراكيب المحددة", name: "Discrete Structures", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "cy-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "cy-eng102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
          { slug: "cy-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "cy-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "cy-it201", code: "IT 201", nameAr: "مبادئ نظم وتقنية المعلومات", name: "Principles of Information and Technology Systems", hours: 3, level: "المستوى الثاني", prerequisite: "CS 110" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "cy-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 101" },
          { slug: "cy-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "cy-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "cy-phys101", code: "PHYS 101", nameAr: "فيزياء عامة (1)", name: "General Physics (1)", hours: 3, level: "المستوى الثالث", prerequisite: "لا يوجد" },
          { slug: "cy-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الثالث", prerequisite: "CS 110" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "cy-200", code: "CY 200", nameAr: "مبادئ الأمن السيبراني", name: "Cybersecurity Principles", hours: 3, level: "المستوى الرابع", prerequisite: "لا يوجد" },
          { slug: "cy-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الرابع", prerequisite: "CS 212" },
          { slug: "cy-it222", code: "IT 222", nameAr: "مبادئ الاتصالات والشبكات", name: "Communications and Networks Fundamentals", hours: 4, level: "المستوى الرابع", prerequisite: "PHYS 101" },
          { slug: "cy-220", code: "CY 220", nameAr: "التشفير", name: "Cryptography", hours: 3, level: "المستوى الرابع", prerequisite: "CS 100" },
          { slug: "cy-cs220", code: "CS 220", nameAr: "تحليل وتصميم الخوارزميات", name: "Algorithms Design and Analysis", hours: 3, level: "المستوى الرابع", prerequisite: "CS 100, CS 212" },
          { slug: "cy-201", code: "CY 201", nameAr: "قوانين وسياسات الأمن السيبراني", name: "Cybersecurity Laws and Policies", hours: 2, level: "المستوى الرابع", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "cy-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى الخامس", prerequisite: "لا يوجد" },
          { slug: "cy-321", code: "CY 321", nameAr: "أمن النظام", name: "System Security", hours: 3, level: "المستوى الخامس", prerequisite: "CS 340" },
          { slug: "cy-is350", code: "IS 350", nameAr: "إدارة المشاريع", name: "Projects Management", hours: 3, level: "المستوى الخامس", prerequisite: "CS 212" },
          { slug: "cy-math367", code: "MATH 367", nameAr: "نظرية الاحتمالات", name: "Theory of Probability", hours: 3, level: "المستوى الخامس", prerequisite: "MATH 103, MATH 161" },
          { slug: "cy-302", code: "CY 302", nameAr: "إدارة أمن المعلومات", name: "Information Security Management", hours: 3, level: "المستوى الخامس", prerequisite: "لا يوجد" },
          { slug: "cy-cs385", code: "CS 385", nameAr: "هندسة البرمجيات", name: "Software Engineering", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "cy-311", code: "CY 311", nameAr: "القرصنة الأخلاقية", name: "Ethical Hacking", hours: 3, level: "المستوى السادس", prerequisite: "CY 201" },
          { slug: "cy-it323", code: "IT 323", nameAr: "بروتوكولات الشبكات", name: "Network Protocols", hours: 3, level: "المستوى السادس", prerequisite: "IT 221" },
          { slug: "cy-310", code: "CY 310", nameAr: "تحليل البرمجيات الخبيثة", name: "Malware Analysis", hours: 3, level: "المستوى السادس", prerequisite: "CY 321" },
          { slug: "cy-cs351", code: "CS 351", nameAr: "التفاعل بين الإنسان والحاسب", name: "Human-Computer Interaction", hours: 3, level: "المستوى السادس", prerequisite: "CS 212" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "cy-480", code: "CY 480", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 130 وحدة + IS 350" },
          { slug: "cy-440", code: "CY 440", nameAr: "أمن الأنظمة المادية السيبرانية", name: "Cyber Physical Systems Security", hours: 3, level: "المستوى السابع", prerequisite: "لا يوجد" },
          { slug: "cy-441", code: "CY 441", nameAr: "أمن الشبكات", name: "Networks Security", hours: 3, level: "المستوى السابع", prerequisite: "IT 221" },
          { slug: "cy-430", code: "CY 430", nameAr: "أمن أنظمة الشبكة العنكبوتية", name: "Web Systems Security", hours: 3, level: "المستوى السابع", prerequisite: "IT 221" },
          { slug: "cy-442", code: "CY 442", nameAr: "أمن الشبكات اللاسلكية", name: "Wireless Networks Security", hours: 3, level: "المستوى السابع", prerequisite: "CY 200" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "cy-481", code: "CY 481", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "CY 480" },
          { slug: "cy-490", code: "CY 490", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 125 وحدة" },
        ],
      },
      {
        level: "مقررات اختيارية",
        courses: [
          { slug: "cy-322", code: "CY 322", nameAr: "القياسات الحيوية والأمن", name: "Biometrics and Security", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
          { slug: "cy-412", code: "CY 412", nameAr: "الحاسب الجنائي", name: "Computer Forensics", hours: 3, level: "اختياري", prerequisite: "CY 200" },
          { slug: "cy-431", code: "CY 431", nameAr: "أمن الأنظمة المتنقلة واللاسلكية", name: "Mobile and Wireless Systems Security", hours: 3, level: "اختياري", prerequisite: "لا يوجد" },
          { slug: "cy-443", code: "CY 443", nameAr: "الذكاء الاصطناعي في الأمن السيبراني", name: "AI in Cybersecurity", hours: 3, level: "اختياري", prerequisite: "CY 200" },
          { slug: "cy-cs370", code: "CS 370", nameAr: "الذكاء الاصطناعي", name: "Artificial Intelligence", hours: 3, level: "اختياري", prerequisite: "CS 111, CS 220" },
          { slug: "cy-cs486", code: "CS 486", nameAr: "تطوير تطبيقات للشبكة العنكبوتية", name: "Web Applications Development", hours: 3, level: "اختياري", prerequisite: "CS 220" },
          { slug: "cy-cs350", code: "CS 350", nameAr: "أنظمة الوسائط المتعددة", name: "Multimedia Systems", hours: 3, level: "اختياري", prerequisite: "CS 212" },
          { slug: "cy-it433", code: "IT 433", nameAr: "شبكات الاستشعار اللاسلكي", name: "Wireless Sensor Networks", hours: 3, level: "اختياري", prerequisite: "IT 221" },
        ],
      },
    ],
  },
  {
    slug: "iot",
    name: "إنترنت الأشياء",
    levels: [
      {
        level: "المستوى الأول",
        courses: [
          { slug: "eng-101", code: "ENG 101-1", nameAr: "اللغة الإنجليزية (1)", name: "English Language (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "phys-102", code: "PHYS 102", nameAr: "فيزياء عامة للهندسة (1)", name: "General Physics for Engineering (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "iot-cs110", code: "CS 110", nameAr: "لغة برمجة (1)", name: "Programming Language (1)", hours: 4, level: "المستوى الأول", prerequisite: "لا يوجد" },
          { slug: "iot-math101", code: "MATH 101", nameAr: "حساب التفاضل والتكامل (1)", name: "Calculus (1)", hours: 3, level: "المستوى الأول", prerequisite: "لا يوجد" },
        ],
      },
      {
        level: "المستوى الثاني",
        courses: [
          { slug: "eng-102", code: "ENG 102-2", nameAr: "اللغة الإنجليزية (2)", name: "English Language (2)", hours: 3, level: "المستوى الثاني", prerequisite: "ENG 101-1" },
          { slug: "iot-cs111", code: "CS 111", nameAr: "لغة برمجة (2)", name: "Programming Language (2)", hours: 4, level: "المستوى الثاني", prerequisite: "CS 110" },
          { slug: "iote-110", code: "IOTE 110", nameAr: "مقدمة لإنترنت الأشياء", name: "Introduction to IoT", hours: 3, level: "المستوى الثاني", prerequisite: "لا يوجد" },
          { slug: "phys-103", code: "PHYS 103", nameAr: "فيزياء عامة للهندسة (2)", name: "General Physics for Engineering (2)", hours: 4, level: "المستوى الثاني", prerequisite: "PHYS 102" },
          { slug: "iot-math103", code: "MATH 103", nameAr: "التفاضل والتكامل (II)", name: "Calculus (II)", hours: 4, level: "المستوى الثاني", prerequisite: "MATH 101" },
        ],
      },
      {
        level: "المستوى الثالث",
        courses: [
          { slug: "iot-cs212", code: "CS 212", nameAr: "هياكل البيانات", name: "Data Structures", hours: 3, level: "المستوى الثالث", prerequisite: "CS 111" },
          { slug: "iote-240", code: "IOTE 240", nameAr: "الدوائر الكهربائية", name: "Electric Circuits", hours: 4, level: "المستوى الثالث", prerequisite: "MATH 103, PHYS 103" },
          { slug: "iot-math161", code: "MATH 161", nameAr: "إحصاء عام", name: "General Statistics", hours: 3, level: "المستوى الثالث", prerequisite: "لا يوجد" },
          { slug: "iot-it221", code: "IT 221", nameAr: "أساسيات شبكات الحاسب", name: "Computer Networks Fundamentals", hours: 3, level: "المستوى الثالث", prerequisite: "CS 110" },
        ],
      },
      {
        level: "المستوى الرابع",
        courses: [
          { slug: "iot-cs340", code: "CS 340", nameAr: "نظم التشغيل", name: "Operating Systems", hours: 3, level: "المستوى الرابع", prerequisite: "CS 212" },
          { slug: "iote-241", code: "IOTE 241", nameAr: "الإلكترونيات", name: "Electronics", hours: 4, level: "المستوى الرابع", prerequisite: "IOTE 240" },
          { slug: "iote-211", code: "IOTE 211", nameAr: "التفاعل بين الإنسان والآلة لإنترنت الأشياء", name: "Human Machine Interaction for IoT", hours: 3, level: "المستوى الرابع", prerequisite: "IOTE 110" },
          { slug: "iote-200", code: "IOTE 200", nameAr: "تحليل البيانات الضخمة لإنترنت الأشياء", name: "Big Data Analytics for IoT", hours: 3, level: "المستوى الرابع", prerequisite: "MATH 161" },
          { slug: "iot-is220", code: "IS 220", nameAr: "أساسيات قواعد البيانات", name: "Database Fundamentals", hours: 4, level: "المستوى الرابع", prerequisite: "CS 111" },
        ],
      },
      {
        level: "المستوى الخامس",
        courses: [
          { slug: "iote-312", code: "IOTE 312", nameAr: "الحوسبة السحابية لإنترنت الأشياء", name: "Cloud Computing for IoT", hours: 3, level: "المستوى الخامس", prerequisite: "IS 220" },
          { slug: "ece-260", code: "ECE 260", nameAr: "تصميم دوائر المنطق الرقمي", name: "Digital Logic Circuit Design", hours: 4, level: "المستوى الخامس", prerequisite: "MATH 103" },
          { slug: "iote-313", code: "IOTE 313", nameAr: "بروتوكولات شبكات إنترنت الأشياء", name: "IoT Networks Protocols", hours: 3, level: "المستوى الخامس", prerequisite: "IT 221" },
          { slug: "iote-330", code: "IOTE 330", nameAr: "هندسة البرمجيات للأنظمة المضمنة", name: "Software Engineering for Embedded Systems", hours: 3, level: "المستوى الخامس", prerequisite: "CS 340" },
          { slug: "iote-350", code: "IOTE 350", nameAr: "الإشارات والنظم", name: "Signals and Systems", hours: 3, level: "المستوى الخامس", prerequisite: "IOTE 240" },
          { slug: "iote-301", code: "IOTE 301", nameAr: "الذكاء الاصطناعي وتعلم الآلة لإنترنت الأشياء", name: "Artificial Intelligence and Machine Learning for IoT", hours: 3, level: "المستوى الخامس", prerequisite: "IOTE 200" },
        ],
      },
      {
        level: "المستوى السادس",
        courses: [
          { slug: "iote-314", code: "IOTE 314", nameAr: "إدارة وتحليل شبكات إنترنت الأشياء", name: "IoT Networks Management and Analysis", hours: 3, level: "المستوى السادس", prerequisite: "IOTE 200" },
          { slug: "iote-360", code: "IOTE 360", nameAr: "المتحكمات والمعالجات", name: "Microcontroller and Microprocessor", hours: 3, level: "المستوى السادس", prerequisite: "ECE 260" },
          { slug: "iot-cs380", code: "CS 380", nameAr: "أخلاقيات المهنة", name: "Professional Ethics", hours: 1, level: "المستوى السادس", prerequisite: "لا يوجد" },
          { slug: "iote-331", code: "IOTE 331", nameAr: "نظم تشغيل إنترنت الأشياء", name: "IoT Operating Systems", hours: 3, level: "المستوى السادس", prerequisite: "IOTE 330" },
          { slug: "iote-351", code: "IOTE 351", nameAr: "أنظمة الاتصالات", name: "Communication Systems", hours: 4, level: "المستوى السادس", prerequisite: "IOTE 350" },
          { slug: "iote-302", code: "IOTE 302", nameAr: "الأمن السيبراني لإنترنت الأشياء", name: "Cybersecurity for IoT", hours: 3, level: "المستوى السادس", prerequisite: "IOTE 313" },
        ],
      },
      {
        level: "المستوى السابع",
        courses: [
          { slug: "iote-454", code: "IOTE 454", nameAr: "شبكات الاستشعار اللاسلكية لإنترنت الأشياء", name: "Wireless Sensor Networks for IoT", hours: 3, level: "المستوى السابع", prerequisite: "IOTE 351" },
          { slug: "iote-452", code: "IOTE 452", nameAr: "الاتصالات اللاسلكية لإنترنت الأشياء", name: "Wireless Communications for IoT", hours: 3, level: "المستوى السابع", prerequisite: "IOTE 351" },
          { slug: "iote-420", code: "IOTE 420", nameAr: "تطوير تطبيقات إنترنت الأشياء", name: "IoT Applications Development", hours: 3, level: "المستوى السابع", prerequisite: "IOTE 331" },
          { slug: "iote-480", code: "IOTE 480", nameAr: "مشروع التخرج (1)", name: "Graduation Project (1)", hours: 3, level: "المستوى السابع", prerequisite: "اجتياز 128 وحدة" },
        ],
      },
      {
        level: "المستوى الثامن",
        courses: [
          { slug: "iote-490", code: "IOTE 490", nameAr: "التدريب الميداني", name: "Internship", hours: 6, level: "المستوى الثامن", prerequisite: "اجتياز 110 وحدة" },
          { slug: "iote-481", code: "IOTE 481", nameAr: "مشروع التخرج (2)", name: "Graduation Project (2)", hours: 3, level: "المستوى الثامن", prerequisite: "IOTE 480" },
        ],
      },
    ],
  },
];

export const courseHub = {
  infoTitle: "معلومات المقرر",
  ratingTitle: "تقييمات الطلبة",
  experiencesTitle: "تجارب الطلبة",
  tipsTitle: "نصائح ممن سبقوكم",
  filesTitle: "بنك الملفات",
  imtidadTitle: "شروحات امتداد",
  platformsTitle: "منصات موصى بها لهذا المقرر",
  tutorsTitle: "مدرسون وخصوصيون للمقرر",
  ambassadorsTitle: "سفراء المقرر",
  faqTitle: "الأسئلة الشائعة",
  contributeTitle: "ساهم في هذا المقرر",
  contributeDescription:
    "شارك تقييمك، تجربتك، نصيحتك، ملفاتك، أو تقدّم لتكون سفيرًا لهذا المقرر. جميع المشاركات تُراجع وتُعتمد من الإدارة قبل النشر.",
  contributeOptions: [
    "تقييم",
    "تجربة",
    "نصيحة",
    "ملخص",
    "سلايدات",
    "خرائط ذهنية",
    "ملفات",
    "رابط مفيد",
    "اقتراح منصة تعليمية",
    "اقتراح مدرس خصوصي",
    "التقديم كسفير للمقرر",
  ],
  contributeComingSoon:
    "استقبال المساهمات مباشرة من الموقع قيد التجهيز حاليًا. للمساهمة الآن، تواصل معنا عبر القنوات الموضّحة أسفل الصفحة.",
  noDataYet: "لا توجد بيانات كافية بعد لعرضها لهذا المقرر.",
  effortOptions: ["أقل من ٣ ساعات أسبوعيًا", "من ٣ إلى ٦ ساعات أسبوعيًا", "أكثر من ٦ ساعات أسبوعيًا"],
  fileTabs: ["الملخصات", "السلايدات", "الخرائط الذهنية", "نماذج وتقارير", "ملفات أخرى"],
};

export type LearningPlatform = { name: string; description: string; url: string };

export const learningPlatforms: LearningPlatform[] = [
  { name: "أكاديمية سطر", description: "دورات عربية في البرمجة وعلوم الحاسب.", url: "https://satr.academy" },
  { name: "Coursera", description: "دورات جامعية معتمدة بمختلف المجالات التقنية.", url: "https://www.coursera.org" },
  { name: "Udemy", description: "دورات عملية مباشرة بأسعار مناسبة.", url: "https://www.udemy.com" },
  { name: "freeCodeCamp", description: "تعلّم البرمجة مجانًا بمشاريع تطبيقية.", url: "https://www.freecodecamp.org" },
  { name: "W3Schools", description: "مرجع سريع لتعلّم لغات البرمجة والويب.", url: "https://www.w3schools.com" },
  { name: "GeeksforGeeks", description: "مقالات وتمارين في الخوارزميات وهياكل البيانات.", url: "https://www.geeksforgeeks.org" },
];

// ==================== امتداد ====================

export const imtidad = {
  eyebrow: "امتداد",
  title: "امتداد",
  quote: "ويبقى أجمل الأثر ما امتد من إنسان إلى إنسان.",
  description:
    "امتداد هو أحد برامج أجيالنا الواعدة، يهدف إلى نقل المعرفة والخبرات بين الطلبة، من خلال تقديم شروحات تطوعية في المقررات الجامعية، بما يسهم في دعم الطلبة، وتعزيز ثقافة العطاء، وصناعة أثر مستدام يمتد من طالب إلى آخر.",
  howTitle: "كيف تعمل امتداد؟",
  steps: [
    "ينضم الطالب.",
    "يتم التواصل معه.",
    "يحدد المقررات التي يرغب بشرحها.",
    "يرفع المحتوى.",
    "يراجع المحتوى.",
    "ينشر ليستفيد منه الجميع.",
  ],
  button: "انضم إلى امتداد",
  formUrl: "https://forms.gle/kZ6ThAf6KLHTMhTh7",
};

// ==================== مسارات أجيالنا الواعدة ====================

export type Track = {
  title: string;
  description: string;
  available: boolean;
};

export const tracksSection = {
  eyebrow: "مساراتنا",
  title: "مسارات أجيالنا الواعدة",
};

export const tracks: Track[] = [
  {
    title: "أجيالنا الواعدة للمستجدين",
    description:
      "يركز على دعم الطلبة منذ لحظة قبولهم وحتى اندماجهم في الحياة الجامعية، من خلال الإرشاد الأكاديمي، والإجابة عن الاستفسارات، ونقل الخبرات.",
    available: true,
  },
  {
    title: "أجيالنا الواعدة للخريجين",
    description:
      "يرافق الطلبة ابتداءً من التدريب التعاوني (Co-op)، وحتى دخول سوق العمل، من خلال الإرشاد المهني، وبناء السيرة الذاتية، وتحسين LinkedIn، والاستعداد للمقابلات، ومتابعة الفرص الوظيفية.",
    available: false,
  },
];

// ==================== الشات بوت ====================

export const chatbot = {
  label: "اسأل أجيالنا",
  url: "https://ajyalna-chatbot.framer.website",
};

// ==================== التواصل ====================

export const contact = {
  eyebrow: "تواصل معنا",
  title: "هل لديك سؤال أو ترغب في الانضمام إلينا؟",
  description: "راسلنا عبر أي من القنوات التالية، وسنكون سعداء بالرد عليك في أقرب وقت.",
};
