const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

// close menuBar
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Product slider
const productSlider = document.querySelector(".product-row-1");

if (productSlider) {
  new Swiper(productSlider, {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".product-pagination-1",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true, // ✅ مهم فالموبايل
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    },
  });
}

// Review / Product slider 2
if (document.querySelector(".product-row-2")) {
  new Swiper(".product-row-2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 28,

    /* Interaction */
    grabCursor: true,
    allowTouchMove: true,
    simulateTouch: true,

    /* Smooth feeling */
    speed: 800,
    centeredSlides: true,

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: ".product-pagination-2",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

//Qs section
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");

    // close others
    document.querySelectorAll(".faq-item").forEach((x) => {
      if (x !== item) x.classList.remove("active");
    });

    // toggle current
    item.classList.toggle("active");
  });
});

// Blogs slider
if (document.querySelector(".blogs-row")) {
  new Swiper(".blogs-row", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    /* Interaction */
    grabCursor: true,
    allowTouchMove: true,
    simulateTouch: true,

    /* Smooth feeling */
    speed: 900,
    centeredSlides: true,

    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // ⏸️ يوقف ملي تدوز الماوس
    },

    pagination: {
      el: ".blogs-row .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false, // أحسن فالموبايل
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
}

// stop swiper autoplay when modal opens
document.querySelector(".blogs-row")?.swiper?.autoplay.stop();
document.querySelector(".blogs-row")?.swiper?.autoplay.start();

const translations = {
  ar: {
    brand_name: "ChocoMood",
    nav_home: "الرئيسية",
    nav_product: "المنتجات",
    nav_blogs: "المدونة",
    nav_review: "الآراء",
    nav_contact: "تواصل معنا",

    hero_title: "حلويات لذيذة للجميع",
    hero_desc: "حلويات منزلية عصرية تُحضَّر بعناية مع التوصيل حتى باب منزلك.",
    hero_btn: "شاهد المزيد",

    about_title: "حلويات منزلية عصرية تُحضَّر بعناية",
    about_intro:
      "ChocoMood هو مشروع حلويات منزلية عصرية نُحضّرها بحبّ وعناية، باستخدام مكوّنات مختارة، مع خدمة التوصيل حتى باب منزلك.",
    about_card1_title: "ماذا نقدّم؟",
    about_card1_text:
      "نوفّر تشكيلة متنوعة من الحلويات المنزلية تشمل حلويات أعياد الميلاد، الكوكيز، البراونيز، وحلويات بالشوكولاتة والأوريو، بوصفات عصرية تناسب جميع الأذواق.",
    about_card2_title: "حلوى على ذوقك",
    about_card2_text:
      "يمكنك اختيار النكهات والمكوّنات حسب رغبتك، أو طلب حلوى مخصّصة لمناسبة معيّنة. نحرص على تنفيذ كل طلب بدقّة واهتمام.",
    about_card3_title: "حلويات صحية",
    about_card3_text:
      "نقدّم أيضاً حلويات صحية بوصفات أخف، تجمع بين الطعم اللذيذ ونمط حياة متوازن.",

    faq_title: "أسئلة شائعة",
    faq_q1: "من هي ChocoMood؟",
    faq_a1:
      "ChocoMood هو مشروع حلويات منزلية عصرية، نُحضّر الحلويات بعناية باستخدام مكوّنات مختارة، مع توفير خدمة التوصيل حتى باب المنزل.",
    faq_q2: "ما نوع الحلويات التي تقدّمونها؟",
    faq_a2:
      "نقدّم تشكيلة متنوعة تشمل حلويات أعياد الميلاد، الكوكيز، البراونيز، وحلويات بالشوكولاتة والأوريو، بالإضافة إلى وصفات عصرية ومبتكرة.",
    faq_q3: "هل يمكن تخصيص الحلوى حسب الطلب؟",
    faq_a3:
      "نعم، يمكن اختيار النكهات والمكوّنات حسب رغبتك، كما يمكن طلب حلوى مخصّصة لمناسبة معيّنة.",
    faq_q4: "هل توفّرون حلويات صحية؟",
    faq_a4:
      "نعم، نقدّم أيضاً حلويات صحية بوصفات أخف، مع الحفاظ على الطعم اللذيذ.",
    faq_q5: "كيف يمكن الطلب؟",
    faq_a5:
      "يمكنك الطلب عبر وسائل التواصل أو عبر الموقع: حدّد نوع الحلوى، الكمية، والمكوّنات المطلوبة، وسنؤكد لك وقت التحضير والتوصيل.",
    faq_q6: "هل يوجد توصيل؟",
    faq_a6:
      "نعم، نوفر خدمة توصيل سريعة وآمنة حتى باب منزلك حسب المنطقة المتفق عليها.",

    products_title: "منتجاتنا المميزة",
    order_now: "اطلبي الآن",

    blogs_title: "المدونة",
    learn_more: "اقرأ المزيد",

    newsletter_title: "اشترك للحصول على آخر التحديثات",
    newsletter_placeholder: "أدخل بريدك الإلكتروني",
    newsletter_btn: "اشتراك",

    reviews_title: "آراء الزبناء",

    footer_contact: "تواصل معنا",
    footer_account: "روابط",
    footer_opening: "أوقات العمل",
    footer_newsletter: "النشرة البريدية",
    footer_home: "الرئيسية",
    footer_products: "عرض المنتجات",
    footer_blogs: "المدونة",
    footer_review: "الآراء",
    footer_newsletter_text: "اشترك لتصلك أحدث الحلويات والعروض.",
    footer_email_placeholder: "البريد الإلكتروني",
    subscribe: "اشتراك",
    year: "2024",
    copyright_by: "ChocoMood",
    rights: "جميع الحقوق محفوظة",
    thanks_title: "شكراً لزيارتكم 🤎",
    thanks_text: "سعداء بوجودكم معنا، تابعونا لمعرفة جديدنا 🍫",
  },

  fr: {
    brand_name: "ChocoMood",
    nav_home: "Accueil",
    nav_product: "Produits",
    nav_blogs: "Blog",
    nav_review: "Avis",
    nav_contact: "Contact",

    hero_title: "Des desserts délicieux pour tous",
    hero_desc:
      "Pâtisseries maison modernes, préparées avec soin et livrées à domicile.",
    hero_btn: "Voir plus",

    about_title: "Pâtisseries maison modernes, préparées avec soin",
    about_intro:
      "ChocoMood est un projet de pâtisseries maison modernes, préparées avec attention, avec des ingrédients soigneusement sélectionnés et une livraison à domicile.",
    about_card1_title: "Que proposons-nous ?",
    about_card1_text:
      "Gâteaux d’anniversaire, cookies, brownies et desserts au chocolat ou Oreo, avec des recettes modernes pour tous les goûts.",
    about_card2_title: "Sur mesure",
    about_card2_text:
      "Choisissez vos saveurs et ingrédients, ou commandez un dessert personnalisé pour une occasion spéciale. Chaque commande est réalisée avec précision.",
    about_card3_title: "Options healthy",
    about_card3_text:
      "Nous proposons aussi des desserts plus légers, sans sacrifier le goût.",

    faq_title: "Questions fréquentes",
    faq_q1: "Qui est ChocoMood ?",
    faq_a1:
      "ChocoMood est un projet de pâtisseries maison modernes, préparées avec des ingrédients sélectionnés, avec livraison à domicile.",
    faq_q2: "Quels types de desserts proposez-vous ?",
    faq_a2:
      "Gâteaux d’anniversaire, cookies, brownies, desserts chocolat/Oreo et créations modernes.",
    faq_q3: "Puis-je personnaliser ma commande ?",
    faq_a3:
      "Oui, vous pouvez choisir les saveurs et ingrédients, ou demander un dessert personnalisé.",
    faq_q4: "Avez-vous des options healthy ?",
    faq_a4:
      "Oui, nous proposons des recettes plus légères tout en gardant un goût délicieux.",
    faq_q5: "Comment commander ?",
    faq_a5:
      "Commande via les réseaux sociaux ou le site : type, quantité, ingrédients. Nous confirmons le temps de préparation et livraison.",
    faq_q6: "Faites-vous la livraison ?",
    faq_a6: "Oui, livraison rapide et sûre selon la zone convenue.",

    products_title: "Nos produits exclusifs",
    order_now: "Commander",

    learn_more: "En savoir plus",

    newsletter_title: "Abonnez-vous pour les dernières nouveautés",
    newsletter_placeholder: "Votre email",
    newsletter_btn: "S'abonner",

    reviews_title: "Avis clients",

    footer_contact: "Nous contacter",
    footer_account: "Liens",
    footer_opening: "Horaires",
    footer_newsletter: "Newsletter",
    footer_home: "Accueil",
    footer_products: "Voir les produits",
    footer_blogs: "Blog",
    footer_review: "Avis",
    footer_newsletter_text:
      "Abonnez-vous pour recevoir nos nouveautés et offres.",
    footer_email_placeholder: "Adresse e-mail",
    subscribe: "S'abonner",
    year: "2024",
    copyright_by: "ChocoMood",
    rights: "Tous droits réservés",
    thanks_title: "Merci pour votre visite 🤎",
    thanks_text:
      "Ravis de vous avoir parmi nous. Suivez-nous pour nos nouveautés 🍫",
  },

  en: {
    brand_name: "ChocoMood",
    nav_home: "Home",
    nav_product: "Products",
    nav_blogs: "Blogs",
    nav_review: "Reviews",
    nav_contact: "Contact",

    hero_title: "Delicious desserts for everyone",
    hero_desc:
      "Modern homemade desserts, carefully made and delivered to your door.",
    hero_btn: "See more",

    about_title: "Modern homemade desserts, made with care",
    about_intro:
      "ChocoMood is a modern homemade dessert brand, prepared with selected ingredients and home delivery.",
    about_card1_title: "What we offer",
    about_card1_text:
      "Birthday desserts, cookies, brownies, and chocolate/Oreo treats—modern recipes for every taste.",
    about_card2_title: "Made for you",
    about_card2_text:
      "Choose your flavors and ingredients, or request a custom dessert for your occasion. Every order is made with attention to detail.",
    about_card3_title: "Healthy options",
    about_card3_text:
      "We also offer lighter, healthier desserts without losing the delicious taste.",

    faq_title: "FAQ",
    faq_q1: "What is ChocoMood?",
    faq_a1:
      "ChocoMood is a modern homemade dessert brand made with selected ingredients and home delivery.",
    faq_q2: "What desserts do you offer?",
    faq_a2:
      "Birthday desserts, cookies, brownies, and chocolate/Oreo creations.",
    faq_q3: "Can I customize my dessert?",
    faq_a3:
      "Yes, choose flavors and ingredients, or request a custom dessert for a special occasion.",
    faq_q4: "Do you offer healthy options?",
    faq_a4: "Yes, lighter recipes are available while keeping great taste.",
    faq_q5: "How can I order?",
    faq_a5:
      "Order via social media or the website: type, quantity, ingredients. We confirm preparation and delivery time.",
    faq_q6: "Do you deliver?",
    faq_a6: "Yes, fast and safe delivery depending on the agreed area.",

    products_title: "Our Exclusive Products",
    order_now: "Order Now",

    learn_more: "Learn more",

    newsletter_title: "Subscribe for latest updates",
    newsletter_placeholder: "Enter your email",
    newsletter_btn: "Subscribe",

    reviews_title: "Client Reviews",

    footer_contact: "Contact Us",
    footer_account: "Links",
    footer_opening: "Opening Time",
    footer_newsletter: "Newsletter",
    footer_home: "Home",
    footer_products: "View Products",
    footer_blogs: "Blogs",
    footer_review: "Reviews",
    footer_newsletter_text: "Subscribe to get updates and special offers.",
    footer_email_placeholder: "Email Address",
    subscribe: "Subscribe",
    year: "2024",
    copyright_by: "ChocoMood",
    rights: "All Rights Reserved",

    thanks_title: "Thank you for visiting 🤎",
    thanks_text:
      "We’re happy to have you here. Follow us for our latest creations 🍫",
  },
};

function setLanguage(lang) {
  // text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang]?.[key])
      el.setAttribute("placeholder", translations[lang][key]);
  });

  // input values (like subscribe button)
  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (translations[lang]?.[key]) el.value = translations[lang][key];
  });

  // RTL/LTR
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // active button
  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.lang-btn[data-lang="${lang}"]`)
    ?.classList.add("active");

  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("lang") || "ar");
const langDropdown = document.getElementById("langDropdown");
const trigger = langDropdown?.querySelector(".lang-trigger");
const label = langDropdown?.querySelector(".lang-label");
const triggerImg = langDropdown?.querySelector(".lang-trigger .flag-img");
const options = langDropdown?.querySelectorAll(".lang-option");

const flagSrc = {
  ar: "images/download1MA.svg",
  fr: "images/download2Fr.svg",
  en: "images/download3En.svg",
};

function updateLangUI(lang) {
  if (label) label.textContent = lang.toUpperCase();
  if (triggerImg) triggerImg.src = flagSrc[lang] || flagSrc.en;
  options?.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.lang === lang)
  );
}

function closeDropdown() {
  langDropdown?.classList.remove("open");
  trigger?.setAttribute("aria-expanded", "false");
}

trigger?.addEventListener("click", () => {
  const open = langDropdown.classList.toggle("open");
  trigger.setAttribute("aria-expanded", open ? "true" : "false");
});

options?.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
    updateLangUI(lang);
    closeDropdown();
  });
});

document.addEventListener("click", (e) => {
  if (!langDropdown) return;
  if (!langDropdown.contains(e.target)) closeDropdown();
});

updateLangUI(localStorage.getItem("lang") || "ar");
