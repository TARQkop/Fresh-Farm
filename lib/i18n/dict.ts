// All visible text lives here. English is the source of truth.
// Kurdish (ku) is Badini (Kurmanji), written in the Arabic script.
export type Lang = "en" | "ar" | "ku";

export const LANGS: {
  code: Lang;
  label: string;
  name: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "ar", label: "عربي", name: "العربية", dir: "rtl" },
  { code: "ku", label: "کوردی", name: "کوردی بادینی", dir: "rtl" },
];

export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "ff-lang";

type Dict = Record<string, string>;

const en: Dict = {
  "brand.name": "Bahik",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.contact": "Contact",

  "ui.skip": "Skip to content",
  "ui.language": "Language",
  "ui.contactUs": "Contact Us",
  "ui.callUs": "Call us",
  "ui.openMenu": "Open menu",
  "ui.closeMenu": "Close menu",
  "ui.callNumber": "Call {phone}",
  "ui.whatsapp": "WhatsApp",
  "ui.call": "Call",
  "ui.callNow": "Call now",
  "ui.order": "Order",

  "hero.badge": "Fresh · Local · Baked Daily",
  "hero.title1": "Freshly baked bread,",
  "hero.title2": "made for your table.",
  "hero.text":
    "Discover a delicious selection of fresh bread, from traditional local favourites to everyday loaves, baked with care for your family.",
  "hero.cta": "Explore Our Bread",
  "hero.alt": "Freshly baked bread and bakery products",
  "hero.made": "Freshly baked",
  "hero.packed": "Ready every day",

  "strip.label": "What makes us special",
  "strip.1": "Freshly baked",
  "strip.2": "Quality ingredients",
  "strip.3": "Traditional recipes",
  "strip.4": "Carefully prepared",
  "strip.5": "Friendly service",

  "feat.eyebrow": "Fresh from the oven",
  "feat.title": "Our favourite breads",
  "feat.label": "Featured breads",

  "cats.eyebrow": "Discover",
  "cats.title": "Explore our bread selection",
  "cats.text":
    "From everyday essentials to traditional favourites, find the bread you love.",
  "cats.label": "Browse bread categories",

  "why.eyebrow": "Why choose us",
  "why.title": "Good bread starts with care",

  "why.1.t": "Fresh every day",
  "why.1.d": "Freshly baked bread for your daily table.",

  "why.2.t": "Quality ingredients",
  "why.2.d": "Carefully chosen ingredients for great taste.",

  "why.3.t": "Traditional flavours",
  "why.3.d": "Familiar recipes inspired by local baking traditions.",

  "why.4.t": "High hygiene standards",
  "why.4.d": "Cleanliness and care at every step.",

  "why.5.t": "Friendly service",
  "why.5.d": "Here to help you find your favourite bread.",

  "why.6.t": "Something for everyone",
  "why.6.d": "A selection of breads for different tastes and meals.",

  "story.eyebrow": "Freshness & tradition",
  "story.title": "A love of bread, baked into every loaf.",
  "story.text":
    "We believe good bread brings people together. Our selection celebrates freshness, flavour and the simple pleasure of sharing bread with family and friends.",
  "story.note":
    "(Update this story with the bakery’s real details.)",
  "story.cta": "Our story",
  "story.alt": "Fresh bread from our bakery",

  "aboutPrev.eyebrow": "About us",
  "aboutPrev.title": "Your local bakery, made with care",
  "aboutPrev.text":
    "We bring together fresh bread, familiar flavours and friendly service. Whether you need bread for breakfast or a meal with family, we are here to help.",
  "aboutPrev.cta": "About {name}",
  "aboutPrev.alt": "Our bakery",

  "cta.title": "Looking for fresh bread?",
  "cta.text":
    "Call or message us to ask about today's bread selection and place your order.",
  "cta.contactPage": "Contact us",

  "about.eyebrow": "About us",
  "about.title": "Fresh bread, close to home.",
  "about.alt": "Our bakery and team",

  "about.b1.t": "Our story",
  "about.b1.d":
    "Our bakery is built around a simple idea: good bread should be fresh, delicious and easy to enjoy every day.",

  "about.b2.t": "Quality",
  "about.b2.d":
    "We focus on good ingredients, satisfying flavour and care in every loaf.",

  "about.b3.t": "Freshness",
  "about.b3.d":
    "We value fresh bread and the comfort it brings to everyday meals.",

  "about.b4.t": "Tradition",
  "about.b4.d":
    "We celebrate the bread varieties and baking traditions people know and love.",

  "about.valuesEyebrow": "Our values",
  "about.valuesTitle": "What matters to us",
  "about.v1": "Quality",
  "about.v2": "Freshness",
  "about.v3": "Tradition",
  "about.v4": "Cleanliness",
  "about.v5": "Customer satisfaction",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's talk bread.",
  "contact.text":
    "Call, message or visit us to ask about our bread selection and place an order.",
  "contact.location": "Location",
  "contact.hours": "Opening hours",
  "contact.send": "Send us a message",

  "Saturday – Thursday": "Saturday – Thursday",
  "Friday": "Friday",

  "form.name": "Name",
  "form.phone": "Phone number",
  "form.email": "Email address",
  "form.tabPhone": "Phone",
  "form.tabEmail": "Email",
  "form.group": "How should we reach you?",
  "form.subject": "Subject",
  "form.message": "Message",
  "form.submit": "Send message",
  "form.sending": "Sending…",

  "err.name": "Please enter your name.",
  "err.contact": "Enter a valid phone number or email.",
  "err.subject": "Please add a subject.",
  "err.message": "Please write at least 10 characters.",

  "form.thanks": "Thanks, {name}.",
  "form.notConnected":
    "Online sending isn’t connected yet. To reach us right away, send this same message on WhatsApp.",
  "form.viaWhatsapp": "Send via WhatsApp",

  "footer.explore": "Explore",
  "footer.products": "Our Bread",
  "footer.visit": "Visit & contact",
  "footer.rights": "All rights reserved.",
  "footer.desc":
    "Discover fresh bread, traditional favourites and everyday bakery essentials. Contact us by phone or WhatsApp to order.",

  "social.instagram": "Instagram",
  "social.facebook": "Facebook",
  "social.snapchat": "Snapchat",

  // Categories
  "cat.milk.name": "White Bread",
  "cat.milk.desc": "Soft, fresh white bread for every day.",

  "cat.cheese.name": "Whole Wheat Bread",
  "cat.cheese.desc": "Wholesome bread made with whole wheat flour.",

  "cat.yogurt.name": "Traditional Flatbread",
  "cat.yogurt.desc": "Traditional flatbread for everyday meals.",

  "cat.butter.name": "Sesame Bread",
  "cat.butter.desc": "Delicious bread topped with sesame seeds.",

  "cat.eggs.name": "Baguettes",
  "cat.eggs.desc": "Golden, crusty bread with a soft centre.",

  "cat.chicken.name": "Buns & Rolls",
  "cat.chicken.desc": "Soft buns and rolls for breakfast and sandwiches.",

  "cat.farm.name": "Traditional & Specialty Bread",
  "cat.farm.desc": "Discover more traditional and specialty bread varieties.",

  // Products
  "prod.p1.name": "Fresh White Bread",
  "prod.p1.desc": "Soft and freshly baked white bread for everyday meals.",

  "prod.p2.name": "Whole Wheat Bread",
  "prod.p2.desc": "A wholesome loaf made with whole wheat flour.",

  "prod.p3.name": "Traditional Flatbread",
  "prod.p3.desc": "Traditional flatbread that pairs well with everyday meals.",

  "prod.p4.name": "Sesame Bread",
  "prod.p4.desc": "Fresh bread topped with fragrant sesame seeds.",

  "prod.p5.name": "French Baguette",
  "prod.p5.desc": "A golden crust with a soft, delicious centre.",

  "prod.p6.name": "Soft Bread Rolls",
  "prod.p6.desc": "Soft and fluffy rolls, perfect for breakfast.",

  "prod.p7.name": "Burger Buns",
  "prod.p7.desc": "Soft buns ideal for burgers and homemade sandwiches.",

  "prod.p8.name": "Pita Bread",
  "prod.p8.desc": "Versatile pita bread for sandwiches and sharing.",

  "prod.p9.name": "Traditional Village Bread",
  "prod.p9.desc": "Rustic bread inspired by traditional local baking.",

  "prod.p10.name": "Toast Bread",
  "prod.p10.desc": "Soft sliced bread for toast and quick breakfasts.",

  "prod.p11.name": "Naan Bread",
  "prod.p11.desc": "Soft, delicious flatbread to enjoy with your favourite meals.",

  "prod.p12.name": "Fresh Croissants",
  "prod.p12.desc": "Delicate, buttery pastries perfect for breakfast and coffee.",
};

const ar: Dict = {
  "brand.name": "باهيك",
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.contact": "تواصل معنا",

  "ui.skip": "انتقل إلى المحتوى",
  "ui.language": "اللغة",
  "ui.contactUs": "تواصل معنا",
  "ui.callUs": "اتصل بنا",
  "ui.openMenu": "فتح القائمة",
  "ui.closeMenu": "إغلاق القائمة",
  "ui.callNumber": "اتصل على {phone}",
  "ui.whatsapp": "واتساب",
  "ui.call": "اتصال",
  "ui.callNow": "اتصل الآن",
  "ui.order": "اطلب الآن",

  "hero.badge": "طازج · محلي · يُخبز يوميًا",
  "hero.title1": "خبز طازج من الفرن،",
  "hero.title2": "إلى مائدتكم.",
  "hero.text":
    "اكتشفوا تشكيلة لذيذة من الخبز الطازج، من الأنواع التقليدية المحبوبة إلى خبز كل يوم، محضّر بعناية ليناسب مائدتكم.",
  "hero.cta": "اكتشفوا أنواع الخبز",
  "hero.alt": "خبز طازج ومخبوزات متنوعة",
  "hero.made": "مخبوز طازجًا",
  "hero.packed": "متوفر كل يوم",

  "strip.label": "ما يميزنا",
  "strip.1": "خبز طازج يوميًا",
  "strip.2": "مكونات عالية الجودة",
  "strip.3": "وصفات تقليدية",
  "strip.4": "تحضير بعناية",
  "strip.5": "خدمة ودودة",

  "feat.eyebrow": "طازج من الفرن",
  "feat.title": "أنواع الخبز المفضلة لدينا",
  "feat.label": "خبز مميز",

  "cats.eyebrow": "اكتشفوا",
  "cats.title": "تعرّفوا على أنواع الخبز",
  "cats.text":
    "من الخبز اليومي إلى الأنواع التقليدية المحبوبة، اختاروا ما يناسب ذوقكم.",
  "cats.label": "تصفح أنواع الخبز",

  "why.eyebrow": "لماذا تختاروننا",
  "why.title": "الخبز الجيد يبدأ بالاهتمام",

  "why.1.t": "طازج كل يوم",
  "why.1.d": "خبز طازج يناسب مائدتكم اليومية.",

  "why.2.t": "مكونات عالية الجودة",
  "why.2.d": "مكونات مختارة بعناية لمذاق لذيذ.",

  "why.3.t": "نكهات تقليدية",
  "why.3.d": "وصفات مألوفة مستوحاة من تقاليد الخَبز المحلية.",

  "why.4.t": "معايير نظافة عالية",
  "why.4.d": "النظافة والاهتمام في كل خطوة.",

  "why.5.t": "خدمة ودودة",
  "why.5.d": "نساعدكم في اختيار الخبز المفضل لديكم.",

  "why.6.t": "خيارات تناسب الجميع",
  "why.6.d": "تشكيلة من الخبز تناسب مختلف الأذواق والوجبات.",

  "story.eyebrow": "الطزاجة والتقاليد",
  "story.title": "محبة الخبز تظهر في كل رغيف.",
  "story.text":
    "نؤمن أن الخبز الجيد يجمع الناس. تحتفي تشكيلتنا بالطزاجة والنكهة ومتعة مشاركة الخبز مع العائلة والأصدقاء.",
  "story.note": "(عدّلوا هذه القصة لتناسب التفاصيل الحقيقية للمخبز.)",
  "story.cta": "قصتنا",
  "story.alt": "خبز طازج من مخبزنا",

  "aboutPrev.eyebrow": "من نحن",
  "aboutPrev.title": "مخبزكم المحلي، بعناية واهتمام",
  "aboutPrev.text":
    "نقدم لكم الخبز الطازج والنكهات المألوفة والخدمة الودودة. سواء كنتم تبحثون عن خبز للفطور أو لمائدة العائلة، نحن هنا لمساعدتكم.",
  "aboutPrev.cta": "عن {name}",
  "aboutPrev.alt": "مخبزنا",

  "cta.title": "تبحثون عن خبز طازج؟",
  "cta.text":
    "اتصلوا بنا أو راسلونا لمعرفة أنواع الخبز المتوفرة اليوم وتقديم طلبكم.",
  "cta.contactPage": "صفحة التواصل",

  "about.eyebrow": "من نحن",
  "about.title": "خبز طازج بالقرب منكم.",
  "about.alt": "مخبزنا وفريق العمل",

  "about.b1.t": "قصتنا",
  "about.b1.d":
    "يقوم مخبزنا على فكرة بسيطة: أن يكون الخبز طازجًا ولذيذًا وسهل الاستمتاع به كل يوم.",

  "about.b2.t": "الجودة",
  "about.b2.d":
    "نهتم بجودة المكونات والمذاق الطيب والعناية في إعداد كل رغيف.",

  "about.b3.t": "الطزاجة",
  "about.b3.d":
    "نقدّر الخبز الطازج وما يضيفه من دفء إلى وجباتنا اليومية.",

  "about.b4.t": "التقاليد",
  "about.b4.d":
    "نحتفي بأنواع الخبز وتقاليد الخَبز التي يعرفها الناس ويحبونها.",

  "about.valuesEyebrow": "قيمنا",
  "about.valuesTitle": "ما يهمنا",
  "about.v1": "الجودة",
  "about.v2": "الطزاجة",
  "about.v3": "التقاليد",
  "about.v4": "النظافة",
  "about.v5": "رضا العملاء",

  "contact.eyebrow": "تواصل معنا",
  "contact.title": "لنتحدث عن الخبز.",
  "contact.text":
    "اتصلوا بنا أو راسلونا أو زورونا لمعرفة أنواع الخبز وتقديم طلبكم.",
  "contact.location": "الموقع",
  "contact.hours": "ساعات العمل",
  "contact.send": "أرسلوا لنا رسالة",

  "Saturday – Thursday": "السبت – الخميس",
  "Friday": "الجمعة",

  "form.name": "الاسم",
  "form.phone": "رقم الهاتف",
  "form.email": "البريد الإلكتروني",
  "form.tabPhone": "الهاتف",
  "form.tabEmail": "البريد الإلكتروني",
  "form.group": "كيف نتواصل معكم؟",
  "form.subject": "الموضوع",
  "form.message": "الرسالة",
  "form.submit": "إرسال الرسالة",
  "form.sending": "جارٍ الإرسال…",

  "err.name": "يرجى إدخال الاسم.",
  "err.contact": "أدخلوا رقم هاتف أو بريدًا إلكترونيًا صالحًا.",
  "err.subject": "يرجى إضافة موضوع.",
  "err.message": "يرجى كتابة 10 أحرف على الأقل.",

  "form.thanks": "شكرًا، {name}.",
  "form.notConnected":
    "الإرسال عبر الموقع غير مفعّل بعد. للتواصل معنا فورًا، أرسلوا الرسالة نفسها عبر واتساب.",
  "form.viaWhatsapp": "إرسال عبر واتساب",

  "footer.explore": "استكشفوا",
  "footer.products": "أنواع الخبز",
  "footer.visit": "زيارتنا والتواصل معنا",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.desc":
    "اكتشفوا الخبز الطازج والأنواع التقليدية والمخبوزات اليومية. يمكنكم الطلب عبر الهاتف أو واتساب.",

  "social.instagram": "إنستغرام",
  "social.facebook": "فيسبوك",
  "social.snapchat": "سناب شات",

  // Categories
  "cat.milk.name": "الخبز الأبيض",
  "cat.milk.desc": "خبز أبيض طري وطازج لكل يوم.",

  "cat.cheese.name": "خبز القمح الكامل",
  "cat.cheese.desc": "خبز مغذٍ محضّر من دقيق القمح الكامل.",

  "cat.yogurt.name": "الخبز المسطح التقليدي",
  "cat.yogurt.desc": "خبز تقليدي يناسب الوجبات اليومية.",

  "cat.butter.name": "خبز السمسم",
  "cat.butter.desc": "خبز لذيذ مغطى بحبوب السمسم.",

  "cat.eggs.name": "خبز الباغيت",
  "cat.eggs.desc": "خبز بقشرة ذهبية مقرمشة وداخل طري.",

  "cat.chicken.name": "الصمون واللفائف",
  "cat.chicken.desc": "صمون ولفائف طرية للفطور والسندويشات.",

  "cat.farm.name": "الخبز التقليدي والمميز",
  "cat.farm.desc": "اكتشفوا المزيد من أنواع الخبز التقليدية والمميزة.",

  // Products
  "prod.p1.name": "خبز أبيض طازج",
  "prod.p1.desc": "خبز أبيض طري وطازج يناسب الوجبات اليومية.",

  "prod.p2.name": "خبز القمح الكامل",
  "prod.p2.desc": "رغيف مغذٍ محضّر من دقيق القمح الكامل.",

  "prod.p3.name": "خبز مسطح تقليدي",
  "prod.p3.desc": "خبز مسطح تقليدي يناسب مختلف الوجبات.",

  "prod.p4.name": "خبز السمسم",
  "prod.p4.desc": "خبز طازج مغطى بحبوب السمسم العطرية.",

  "prod.p5.name": "خبز باغيت فرنسي",
  "prod.p5.desc": "قشرة ذهبية وداخل طري ولذيذ.",

  "prod.p6.name": "لفائف خبز طرية",
  "prod.p6.desc": "لفائف خفيفة وطرية، مثالية للفطور.",

  "prod.p7.name": "خبز البرغر",
  "prod.p7.desc": "خبز طري مناسب للبرغر والسندويشات المنزلية.",

  "prod.p8.name": "خبز البيتا",
  "prod.p8.desc": "خبز متعدد الاستخدامات للسندويشات والمشاركة.",

  "prod.p9.name": "خبز قروي تقليدي",
  "prod.p9.desc": "خبز ريفي مستوحى من تقاليد الخَبز المحلية.",

  "prod.p10.name": "خبز التوست",
  "prod.p10.desc": "خبز طري مقطع، مثالي للتحميص والفطور السريع.",

  "prod.p11.name": "خبز النان",
  "prod.p11.desc": "خبز مسطح طري ولذيذ يناسب وجباتكم المفضلة.",

  "prod.p12.name": "كرواسون طازج",
  "prod.p12.desc": "معجنات هشة وغنية بالزبدة، مثالية للفطور والقهوة.",
};

const ku: Dict = {
  "brand.name": "باهيك",
  "nav.home": "سەرەکی",
  "nav.about": "دەربارەی مە",
  "nav.contact": "پەیوەندی",

  "ui.skip": "بازدە سەر ناڤەڕۆکێ",
  "ui.language": "زمان",
  "ui.contactUs": "پەیوەندیێ ب مە بکە",
  "ui.callUs": "تەلەفونێ بو مە بکە",
  "ui.openMenu": "لیستێ ڤەکە",
  "ui.closeMenu": "لیستێ دابخە",
  "ui.callNumber": "تەلەفون بکە {phone}",
  "ui.whatsapp": "واتسئاپ",
  "ui.call": "تەلەفون",
  "ui.callNow": "نوکە تەلەفون بکە",
  "ui.order": "داخواز بکە",

  "hero.badge": "تازە · ناڤخۆیی · ڕۆژانە دهێتە پێژاندن",
  "hero.title1": "نانێ تازە ژ تەنوورێ،",
  "hero.title2": "بۆ سفرا تە.",
  "hero.text":
    "جۆرەکێ ب تام ژ نانێ تازە ببینە، ژ نانێن نەریتی هەتا نانێ ڕۆژانە، ب ئاگەهداری بۆ خێزانا تە ئامادەکری.",
  "hero.cta": "جۆرێن نانێ ببینە",
  "hero.alt": "نانێ تازە و بەرهەمێن نانەواییێ",
  "hero.made": "تازە پێژایی",
  "hero.packed": "هەر ڕۆژ بەردەستە",

  "strip.label": "ئەوێن مە جیاواز دکەن",
  "strip.1": "هەر ڕۆژ نانێ تازە",
  "strip.2": "پێکهاتەیێن باش",
  "strip.3": "ڕێچکێن نەریتی",
  "strip.4": "ب ئاگەهداری ئامادەکری",
  "strip.5": "خزمەتا دۆستانە",

  "feat.eyebrow": "تازە ژ تەنوورێ",
  "feat.title": "نانێن دلخواز یێن مە",
  "feat.label": "نانێن تایبەت",

  "cats.eyebrow": "بزانە",
  "cats.title": "جۆرێن نانێ ببینە",
  "cats.text":
    "ژ نانێ ڕۆژانە هەتا نانێن نەریتی یێن دلخواز، ئەو نانە هەلبژێرە یێ ب تامێ تە دێ.",
  "cats.label": "جۆرێن نانێ ببینە",

  "why.eyebrow": "بۆچی مە هەلبژێری",
  "why.title": "نانێ باش ب ئاگەهداریێ دەست پێ دکەت",

  "why.1.t": "هەر ڕۆژ تازە",
  "why.1.d": "نانێ تازە بۆ سفرا ڕۆژانەیا تە.",

  "why.2.t": "پێکهاتەیێن باش",
  "why.2.d": "پێکهاتە ب ئاگەهداری هاتینە هەلبژارتن بۆ تامەکێ باش.",

  "why.3.t": "تامێن نەریتی",
  "why.3.d": "ڕێچکێن ناسکری ژ نەریتێن نانپێژاندنا ناڤخۆیی.",

  "why.4.t": "ستانداردێن بلند یێن پاقژیێ",
  "why.4.d": "پاقژی و ئاگەهداری د هەر هەنگاڤەکێ دا.",

  "why.5.t": "خزمەتا دۆستانە",
  "why.5.d": "ئەم یارمەتیێ ددەین دا نانێ دلخواز یێ خۆ ببژێری.",

  "why.6.t": "هەلبژارتن بۆ هەمی کەسان",
  "why.6.d": "جۆرێن نانێ بۆ تام و ژەمیێن جوداواز.",

  "story.eyebrow": "تازەیی و نەریت",
  "story.title": "حەزا نانێ د هەر پارچەیەکێ دا دیارە.",
  "story.text":
    "ئەم باوەر دکەین نانێ باش خەلکێن نێزیک دکەتەڤە. هەلبژارتنا مە تازەیی، تام و خۆشییا پارڤەکرنا نانێ دگەل خێزان و هەڤالان پێشکێش دکەت.",
  "story.note":
    "(ڤی چیرۆکی ل دویڤ زانیاریێن ڕاستەقینە یێن نانەواییێ بگۆڕە.)",
  "story.cta": "چیرۆکا مە",
  "story.alt": "نانێ تازە ژ نانەوایییا مە",

  "aboutPrev.eyebrow": "دەربارەی مە",
  "aboutPrev.title": "نانەوایییا ناڤخۆیی، ب ئاگەهداری",
  "aboutPrev.text":
    "ئەم نانێ تازە، تامێن ناسکری و خزمەتەکا دۆستانە پێشکێش دکەین. بۆ بەیانی یان ژەما خێزانێ، ئەم ل خزمەتا تە نە.",
  "aboutPrev.cta": "دەربارەی {name}",
  "aboutPrev.alt": "نانەوایییا مە",

  "cta.title": "ل نانێ تازە دگەڕی؟",
  "cta.text":
    "تەلەفونێ بۆ مە بکە یان نامە بنێرە دا جۆرێن نانێ یێن ئەڤرو بزانیت و داخوازیا خۆ بکەیت.",
  "cta.contactPage": "پەیوەندیێ ب مە بکە",

  "about.eyebrow": "دەربارەی مە",
  "about.title": "نانێ تازە، نێزیکی مالا تە.",
  "about.alt": "نانەوایییا مە و تیمێ مە",

  "about.b1.t": "چیرۆکا مە",
  "about.b1.d":
    "نانەوایییا مە ل سەر ئایدیایەکا سادە دهێتە ڤەکرن: نان دڤێت تازە، ب تام و ب ساناهی هەر ڕۆژ بهێتە خوارن.",

  "about.b2.t": "کوالیتی",
  "about.b2.d":
    "ئەم گرنگیێ ددەین پێکهاتەیێن باش، تامەکێ خۆش و ئامادەکرنا ب ئاگەهداری یا هەر نانەکێ.",

  "about.b3.t": "تازەیی",
  "about.b3.d":
    "ئەم نانێ تازە و خۆشییا وێ د ژەمیێن ڕۆژانە دا ب نرخ دزانین.",

  "about.b4.t": "نەریت",
  "about.b4.d":
    "ئەم جۆرێن نانێ و نەریتێن نانپێژاندنێ یێن خەلک ناسی و حەز ژێ دکەن پێشکێش دکەین.",

  "about.valuesEyebrow": "نرخێن مە",
  "about.valuesTitle": "ئەوێن بۆ مە گرنگن",
  "about.v1": "کوالیتی",
  "about.v2": "تازەیی",
  "about.v3": "نەریت",
  "about.v4": "پاقژی",
  "about.v5": "ڕازیبوونا کڕیاران",

  "contact.eyebrow": "پەیوەندی",
  "contact.title": "با ل سەر نانێ بئاخڤین.",
  "contact.text":
    "تەلەفون بکە، نامە بنێرە یان سەرەدانا مە بکە دا جۆرێن نانێ ببینی و داخوازیا خۆ بکەی.",
  "contact.location": "ناڤنیشان",
  "contact.hours": "دەمژمێرێن کارکرنێ",
  "contact.send": "نامەیەکێ بۆ مە بنڤێسە",

  "Saturday – Thursday": "شەمبی – پێنجشەمبی",
  "Friday": "ئینی",

  "form.name": "ناڤ",
  "form.phone": "ژمارا تەلەفونێ",
  "form.email": "ئیمێل",
  "form.tabPhone": "تەلەفون",
  "form.tabEmail": "ئیمێل",
  "form.group": "چاوا ئەم پەیوەندیێ ب تە ڤە بکەین؟",
  "form.subject": "بابەت",
  "form.message": "نامە",
  "form.submit": "نامەیێ بنێرە",
  "form.sending": "دهێتە ناردن…",

  "err.name": "تکایە ناڤێ خۆ بنڤێسە.",
  "err.contact": "ژمارەیەکا تەلەفونێ یان ئیمێلەکا دروست بنڤێسە.",
  "err.subject": "تکایە بابەتەکی زێدە بکە.",
  "err.message": "تکایە لانیکەم 10 پیتان بنڤێسە.",

  "form.thanks": "سوپاس، {name}.",
  "form.notConnected":
    "ناردن ب ڕێکا ماڵپەڕێ هێشتا نەهاتیە گرێدان. دا ڕاستەوخۆ پەیوەندیێ ب مە ڤە بکەی، هەمان نامە ب واتسئاپ بنێرە.",
  "form.viaWhatsapp": "ب واتسئاپ بنێرە",

  "footer.explore": "بگەڕێ",
  "footer.products": "جۆرێن نانێ",
  "footer.visit": "سەرەدان و پەیوەندی",
  "footer.rights": "هەمی مافان پارێزراینە.",
  "footer.desc":
    "نانێ تازە، جۆرێن نەریتی و بەرهەمێن ڕۆژانە یێن نانەواییێ ببینە. ب تەلەفون یان واتسئاپ داخواز بکە.",

  "social.instagram": "ئینستاگرام",
  "social.facebook": "فەیسبووک",
  "social.snapchat": "سناب چات",

  // Categories
  "cat.milk.name": "نانێ سپی",
  "cat.milk.desc": "نانێ سپی یێ نەرم و تازە بۆ هەر ڕۆژەکێ.",

  "cat.cheese.name": "نانێ گەنمێ تەمام",
  "cat.cheese.desc": "نانێ بەسوود یێ ژ ئاردێ گەنمێ تەمام.",

  "cat.yogurt.name": "نانێ تەخت یێ نەریتی",
  "cat.yogurt.desc": "نانێ تەخت یێ نەریتی بۆ ژەمیێن ڕۆژانە.",

  "cat.butter.name": "نانێ کەنجید",
  "cat.butter.desc": "نانەکێ ب تام یێ ب تۆڤێ کەنجید ڤە.",

  "cat.eggs.name": "نانێ باگێت",
  "cat.eggs.desc": "نان ب پوستەکا زێڕین و ناڤەکێ نەرم.",

  "cat.chicken.name": "نانێ بچووک و رول",
  "cat.chicken.desc": "نانێن بچووک یێن نەرم بۆ بەیانی و ساندویچان.",

  "cat.farm.name": "نانێن نەریتی و تایبەت",
  "cat.farm.desc": "جۆرێن دی یێن نانێ نەریتی و تایبەت ببینە.",

  // Products
  "prod.p1.name": "نانێ سپی یێ تازە",
  "prod.p1.desc": "نانێ سپی یێ نەرم و تازە بۆ ژەمیێن ڕۆژانە.",

  "prod.p2.name": "نانێ گەنمێ تەمام",
  "prod.p2.desc": "نانەکێ بەسوود یێ ژ ئاردێ گەنمێ تەمام.",

  "prod.p3.name": "نانێ تەخت یێ نەریتی",
  "prod.p3.desc": "نانێ تەخت یێ نەریتی بۆ جۆرەها ژەمیان.",

  "prod.p4.name": "نانێ کەنجید",
  "prod.p4.desc": "نانێ تازە یێ ب تۆڤێ کەنجید ڤە.",

  "prod.p5.name": "نانێ باگێت یێ فەرەنسی",
  "prod.p5.desc": "پوستەکا زێڕین و ناڤەکێ نەرم و ب تام.",

  "prod.p6.name": "نانێن بچووک یێن نەرم",
  "prod.p6.desc": "نانێن بچووک یێن سوک و نەرم، گونجای بۆ بەیانیێ.",

  "prod.p7.name": "نانێ بەرگەر",
  "prod.p7.desc": "نانێ نەرم یێ گونجای بۆ بەرگەر و ساندویچان.",

  "prod.p8.name": "نانێ پیتا",
  "prod.p8.desc": "نانێ پیتا یێ گونجای بۆ ساندویچ و پارڤەکرنێ.",

  "prod.p9.name": "نانێ گوندی یێ نەریتی",
  "prod.p9.desc": "نانێ گوندی یێ ژ نەریتێن نانپێژاندنا ناڤخۆیی.",

  "prod.p10.name": "نانێ توست",
  "prod.p10.desc": "نانێ پارچەکری یێ نەرم بۆ برژاندن و بەیانییا خێرا.",

  "prod.p11.name": "نانێ نان",
  "prod.p11.desc": "نانێ تەخت یێ نەرم و ب تام بۆ ژەمیێن دلخواز.",

  "prod.p12.name": "کرواسۆنێن تازە",
  "prod.p12.desc": "شیرینیێن نەرم و پڕ ژ کەرە، گونجای بۆ بەیانی و قەھوەیێ.",
};

export const dict: Record<Lang, Dict> = { en, ar, ku };