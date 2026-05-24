export interface CatalogueItem {
  filename: string;
  size: string;
  category: "ccc" | "pavecrete" | "topcrete" | "specialized";
  en: {
    title: string;
    subtitle: string;
  };
  ar: {
    title: string;
    subtitle: string;
  };
}

export const cataloguesData: CatalogueItem[] = [
  {
    filename: "CCC Construction Chemicals.pdf",
    size: "3.1 MB",
    category: "ccc",
    en: {
      title: "CCC Construction Chemicals",
      subtitle: "Creative Concrete Concepts main catalog detailing specialized chemistry & solutions.",
    },
    ar: {
      title: "CCC لمواد كيمياء البناء",
      subtitle: "الكتالوج الرئيسي لشركة Creative Concrete Concepts يوضح الحلول والمواد الكيميائية المتخصصة.",
    },
  },
  {
    filename: "CCC Product List 2018.pdf",
    size: "2.2 MB",
    category: "ccc",
    en: {
      title: "CCC Product Range Overview",
      subtitle: "Comprehensive review of Creative Concrete Concepts product line & system index.",
    },
    ar: {
      title: "نظرة عامة على منتجات CCC",
      subtitle: "مراجعة شاملة لخط إنتاج Creative Concrete Concepts وفهرس الأنظمة المتوفرة.",
    },
  },
  {
    filename: "CCC Texturing Mats Guide 2013.pdf",
    size: "7.8 MB",
    category: "ccc",
    en: {
      title: "CCC Texturing Mats Guide",
      subtitle: "Visual pattern guide for stamped concrete textures, molds, and layouts.",
    },
    ar: {
      title: "دليل قوالب تشكيل الخرسانة CCC",
      subtitle: "دليل مرئي للأشكال والقوالب المستخدمة لتشكيل خرسانة الأرصفة والساحات المطبوعة.",
    },
  },
  {
    filename: "CCC Deco Aggregates v202204s.pdf",
    size: "1.5 MB",
    category: "ccc",
    en: {
      title: "CCC Deco Aggregates Guide",
      subtitle: "Design guide for decorative aggregates, exposed chips, and stone options.",
    },
    ar: {
      title: "دليل الحصى الزخرفية CCC",
      subtitle: "دليل التصميم للحصى الملون، الكسرات المكشوفة، وخيارات الحجر الزخرفي للأرضيات.",
    },
  },
  {
    filename: "CrystalTop Terrazzo (S.F) 2018-01.pdf",
    size: "4.6 MB",
    category: "ccc",
    en: {
      title: "CrystalTop Terrazzo System",
      subtitle: "Premium polished terrazzo floor systems with marble and glass chips.",
    },
    ar: {
      title: "نظام تيرازو كريستال توب",
      subtitle: "أنظمة أرضيات التيرازو المصقولة الفاخرة المطعمة بكسرات الرخام والزجاج.",
    },
  },
  {
    filename: "PaveCrete Stamped Concrete Catalogue.pdf",
    size: "2.3 MB",
    category: "pavecrete",
    en: {
      title: "PaveCrete Stamped Concrete",
      subtitle: "Textured, architectural concrete overlays for plazas, driveways, and pathways.",
    },
    ar: {
      title: "بيف كريت الخرسانة المطبوعة",
      subtitle: "غطاء خرساني زخرفي منقوش ومطبع للساحات ومداخل السيارات والممرات.",
    },
  },
  {
    filename: "PaveCrete Exposed Aggregate Concrete 2022.pdf",
    size: "2.2 MB",
    category: "pavecrete",
    en: {
      title: "PaveCrete Exposed Aggregate",
      subtitle: "Exposed aggregate architectural paving systems with durable slip-resistant textures.",
    },
    ar: {
      title: "بيف كريت الحصى المكشوف",
      subtitle: "أنظمة رصف زخرفية بالحصى المكشوف والمقاوم للانزلاق للبيئات الخارجية المعرضة للشمس.",
    },
  },
  {
    filename: "PaveCrete 700 Micro Expose Concrete 20240329v1s.pdf",
    size: "3.5 MB",
    category: "pavecrete",
    en: {
      title: "PaveCrete 700 Micro Exposed",
      subtitle: "Micro-exposed concrete finish offering fine textures and enhanced slip resistance.",
    },
    ar: {
      title: "بيف كريت 700 ميكرو إكسبوزد",
      subtitle: "طبقة تشطيب خرسانية ناعمة بالحصى الصغير الممتاز للحدائق والممرات الفخمة.",
    },
  },
  {
    filename: "PaveCrete Colored Concrete 2012.pdf",
    size: "483 KB",
    category: "pavecrete",
    en: {
      title: "PaveCrete Colored Concrete",
      subtitle: "Integrally colored concrete mixtures for uniform and permanent color results.",
    },
    ar: {
      title: "بيف كريت الخرسانة الملونة",
      subtitle: "مزيج خرساني ملون بالكامل للحصول على درجات ألوان متناسقة ودائمة لا تبهت.",
    },
  },
  {
    filename: "TopCrete 220.pdf",
    size: "1.7 MB",
    category: "topcrete",
    en: {
      title: "TopCrete 220 Floor Hardener",
      subtitle: "Non-metallic dry shake floor hardener for heavy industrial and warehouse environments.",
    },
    ar: {
      title: "مصلب الأرضيات توب كريت 220",
      subtitle: "مصلب أرضيات جاف غير معدني للمستودعات الكبيرة والمنشآت الصناعية عالية التحمل.",
    },
  },
  {
    filename: "TopCrete 601  2018-01 SP.pdf",
    size: "1.1 MB",
    category: "topcrete",
    en: {
      title: "TopCrete 601 Structural Overlay",
      subtitle: "Specialized polymer-modified topping for concrete restoration and repair.",
    },
    ar: {
      title: "توب كريت 601 غطاء هيكلي",
      subtitle: "طبقة تغطية خرسانية معدلة بالبوليمر لترميم الخرسانة التالفة وتجديد مظهرها.",
    },
  },
  {
    filename: "TopCrete 700 20240111v1s.pdf",
    size: "1.6 MB",
    category: "topcrete",
    en: {
      title: "TopCrete 700 Industrial Screed",
      subtitle: "Highly wear-resistant floor screed for intense traffic and chemical loading.",
    },
    ar: {
      title: "توب كريت 700 ملاط صناعي",
      subtitle: "ملاط خرساني للأرضيات مقاوم للتآكل مصمم للحركة الكثيفة ومقاومة الكيماويات.",
    },
  },
  {
    filename: "TopCrete 711 v202208s.pdf",
    size: "2.9 MB",
    category: "topcrete",
    en: {
      title: "TopCrete 711 Self-Leveling",
      subtitle: "Self-leveling underlayment for preparing perfectly level substrates before finishes.",
    },
    ar: {
      title: "توب كريت 711 التسوية الذاتية",
      subtitle: "ملاط تسوية ذاتي للحصول على سطح مستوٍ تماماً قبل تركيب الباركيه أو الفينيل أو الرخام.",
    },
  },
  {
    filename: "TopCrete 720.pdf",
    size: "2.6 MB",
    category: "topcrete",
    en: {
      title: "TopCrete 720 High Performance Screed",
      subtitle: "High-strength cementitious floor screed optimized for precision installation.",
    },
    ar: {
      title: "توب كريت 720 ملاط عالي الأداء",
      subtitle: "ملاط أرضيات أسمنتي عالي القوة مصمم للتركيبات عالية الدقة في المشاريع الهندسية.",
    },
  },
  {
    filename: "ArtCrete 801 (1).pdf",
    size: "2.7 MB",
    category: "specialized",
    en: {
      title: "ArtCrete 801 Acrylic Sealer",
      subtitle: "High-gloss acrylic sealer for concrete curing, dustproofing, and surface protection.",
    },
    ar: {
      title: "عازل أكريليك آرت كريت 801",
      subtitle: "عازل أكريليك لامع لمعالجة الخرسانة ومنع الغبار وحماية الأسطح من السوائل والأملاح.",
    },
  },
  {
    filename: "InsuCrete ST Brochure.pdf",
    size: "825 KB",
    category: "specialized",
    en: {
      title: "InsuCrete ST Insulating Screed",
      subtitle: "Lightweight thermal and acoustic insulation screed for roofs and floors.",
    },
    ar: {
      title: "ملاط عازل إنسو كريت ST",
      subtitle: "ملاط خرساني خفيف الوزن للعزل الحراري والصوتي للأسطح والأرضيات بالمباني الحديثة.",
    },
  },
  {
    filename: "ChemStain Color Chart 2011.1.pdf",
    size: "834 KB",
    category: "specialized",
    en: {
      title: "ChemStain Color Palette",
      subtitle: "Chemical stain color guide for mottled, variegated, and stone-like finishes.",
    },
    ar: {
      title: "دليل ألوان كيم ستين",
      subtitle: "دليل ألوان الصبغة الكيميائية لأسطح خرسانية ذات مظهر رخامي طبيعي معتق.",
    },
  },
  {
    filename: "Standard Color Chart inside.pdf",
    size: "1.6 MB",
    category: "specialized",
    en: {
      title: "TFS Standard Color Chart",
      subtitle: "Standard color selection guide for stamped concrete, overlays, and color hardeners.",
    },
    ar: {
      title: "دليل الألوان القياسي TFS",
      subtitle: "دليل اختيار الألوان القياسية للخرسانة المطبوعة والأغطية ومصلبات الأرضيات.",
    },
  },
];
