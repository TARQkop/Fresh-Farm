// All visible text lives here. English is the source of truth.
export type Lang = "en" | "ar";

export const LANGS: {
  code: Lang;
  label: string;
  name: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "ar", label: "عربي", name: "العربية", dir: "rtl" },
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

  "feat.eyebrow": "Fresh from our bakery",
  "feat.title": "Our bakery's product selection",
  "feat.label": "Featured breads",

  "cats.eyebrow": "Discover",
  "cats.title": "Explore our bakery products",
  "cats.text":
    "From fresh bakery favourites to everyday essentials, find something for your table.",
  "cats.label": "Browse product categories",

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
  "Every day": "Every day",
  "Open 24 hours": "Open 24 hours",
  "site.address": "Duhok – Zerka, opposite Sabah Al-Atroushi Mosque (VW9J+9V6)",

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
  "social.tiktok": "TikTok",
  "social.snapchat": "Snapchat",

  // Categories
  "cat.milk.name": "Cheese Bread",
  "cat.milk.desc": "Freshly baked bread topped with cheese.",

  "cat.cheese.name": "Pizza Bread",
  "cat.cheese.desc": "Oven-baked bread topped with savoury pizza toppings.",

  "cat.yogurt.name": "Sesame Bread Rolls",
  "cat.yogurt.desc": "Soft bread rolls topped with sesame seeds.",

  "cat.butter.name": "Fresh Dairy",
  "cat.butter.desc": "Fresh dairy products, prepared for your table.",

  "cat.eggs.name": "Grocery Products",
  "cat.eggs.desc": "A selection of everyday grocery products.",

  "cat.chicken.name": "Buns & Rolls",
  "cat.chicken.desc": "Soft buns and rolls for breakfast and sandwiches.",

  "cat.farm.name": "Pickles & Sauces",
  "cat.farm.desc": "A selection of pickles, sauces and pantry favourites.",

  // Products
  "prod.p1.name": "Cheese Bread",
  "prod.p1.desc": "Freshly baked bread filled and topped with melted cheese.",

  "prod.p2.name": "Whole Wheat Bread",
  "prod.p2.desc": "A wholesome loaf made with whole wheat flour.",

  "prod.p3.name": "Pizza Bread",
  "prod.p3.desc": "Oven-baked bread topped with cheese, olives and savoury toppings.",

  "prod.p4.name": "Sesame Bread",
  "prod.p4.desc": "Fresh bread topped with fragrant sesame seeds.",

  "prod.p5.name": "Sesame Bread Rolls",
  "prod.p5.desc": "Soft, golden bread rolls topped with sesame seeds.",

  "prod.p6.name": "Soft Bread Rolls",
  "prod.p6.desc": "Soft and fluffy rolls, perfect for breakfast.",

  "prod.p7.name": "Fresh Laban",
  "prod.p7.desc": "Fresh, creamy laban served in a traditional bowl.",

  "prod.p8.name": "Pita Bread",
  "prod.p8.desc": "Versatile pita bread for sandwiches and sharing.",

  "prod.p9.name": "Assorted Grocery Products",
  "prod.p9.desc": "A variety of packaged foods and everyday pantry staples.",

  "prod.p10.name": "Toast Bread",
  "prod.p10.desc": "Soft sliced bread for toast and quick breakfasts.",

  "prod.p11.name": "Naan Bread",
  "prod.p11.desc": "Soft, delicious flatbread to enjoy with your favourite meals.",

  "prod.p12.name": "Pickles & Sauces",
  "prod.p12.desc": "A variety of pickles and sauces to complement your meals.",
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

  "feat.eyebrow": "منتجات طازجة من مخبزنا",
  "feat.title": "تشكيلة منتجات مخبزنا",
  "feat.label": "خبز مميز",

  "cats.eyebrow": "اكتشفوا",
  "cats.title": "تعرّفوا على منتجات مخبزنا",
  "cats.text":
    "من المخبوزات الطازجة إلى المنتجات اليومية، اختاروا ما يناسب مائدتكم.",
  "cats.label": "تصفحوا فئات المنتجات",

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
  "Every day": "كل يوم",
  "Open 24 hours": "مفتوح على مدار الساعة",
  "site.address": "دهوك – زركا – مقابل جامع صباح الأطروشي (VW9J+9V6)",

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
  "social.tiktok": "تيك توك",
  "social.snapchat": "سناب شات",

  // Categories
  "cat.milk.name": "خبز بالجبن",
  "cat.milk.desc": "خبز طازج مخبوز ومغطى بالجبن.",

  "cat.cheese.name": "خبز البيتزا",
  "cat.cheese.desc": "خبز مخبوز في الفرن ومغطى بإضافات البيتزا الشهية.",

  "cat.yogurt.name": "لفائف خبز بالسمسم",
  "cat.yogurt.desc": "لفائف خبز طرية ومغطاة بحبوب السمسم.",

  "cat.butter.name": "منتجات الألبان الطازجة",
  "cat.butter.desc": "منتجات ألبان طازجة ومعدة لتناسب مائدتكم.",

  "cat.eggs.name": "منتجات غذائية متنوعة",
  "cat.eggs.desc": "تشكيلة من المنتجات الغذائية للاستخدام اليومي.",

  "cat.chicken.name": "الصمون واللفائف",
  "cat.chicken.desc": "صمون ولفائف طرية للفطور والسندويشات.",

  "cat.farm.name": "المخللات والصلصات",
  "cat.farm.desc": "تشكيلة من المخللات والصلصات والمواد الغذائية.",

  // Products
  "prod.p1.name": "خبز بالجبن",
  "prod.p1.desc": "خبز طازج مخبوز ومحشو ومغطى بالجبن الذائب.",

  "prod.p2.name": "خبز القمح الكامل",
  "prod.p2.desc": "رغيف مغذٍ محضّر من دقيق القمح الكامل.",

  "prod.p3.name": "خبز البيتزا",
  "prod.p3.desc": "خبز مخبوز في الفرن ومغطى بالجبن والزيتون وإضافات شهية.",

  "prod.p4.name": "خبز السمسم",
  "prod.p4.desc": "خبز طازج مغطى بحبوب السمسم العطرية.",

  "prod.p5.name": "لفائف خبز بالسمسم",
  "prod.p5.desc": "لفائف خبز طرية وذهبية مغطاة بحبوب السمسم.",

  "prod.p6.name": "لفائف خبز طرية",
  "prod.p6.desc": "لفائف خفيفة وطرية، مثالية للفطور.",

  "prod.p7.name": "لبن طازج",
  "prod.p7.desc": "لبن طازج وكريمي يُقدّم في وعاء تقليدي.",

  "prod.p8.name": "خبز البيتا",
  "prod.p8.desc": "خبز متعدد الاستخدامات للسندويشات والمشاركة.",

  "prod.p9.name": "منتجات غذائية متنوعة",
  "prod.p9.desc": "تشكيلة من الأطعمة المعلبة والمواد الغذائية اليومية.",

  "prod.p10.name": "خبز التوست",
  "prod.p10.desc": "خبز طري مقطع، مثالي للتحميص والفطور السريع.",

  "prod.p11.name": "خبز النان",
  "prod.p11.desc": "خبز مسطح طري ولذيذ يناسب وجباتكم المفضلة.",

  "prod.p12.name": "مخللات وصلصات متنوعة",
  "prod.p12.desc": "تشكيلة من المخللات والصلصات لترافق وجباتكم.",
};

export const dict: Record<Lang, Dict> = { en, ar };
