const CV_LANG_KEY = "lof9x_lang";
const THEME_KEY = "lof9x_theme";
const state = {
  lang: localStorage.getItem(CV_LANG_KEY) || "ar",
  theme: localStorage.getItem(THEME_KEY) || "dark"
};

const data = {
  ar: {
    role: "أستاذ جامعي | مهندس حلول ذكاء اصطناعي | مطوّر منصات تعليمية",
    downloadPdf: "تحميل PDF",
    backHome: "العودة للموقع",
    contactTitle: "معلومات التواصل",
    summaryTitle: "الملخص المهني",
    summaryBody:
      "أستاذ في الكلية التقنية الهندسية النجف. أبني أنظمة تشغيل حقيقية للكلية (منصة شعبة تكنولوجيا المعلومات ونظام الدراسات العليا) بالإضافة إلى منصات امتحانات وأدوات AI وأتمتة تساعد الطلبة والكادر.",
    educationTitle: "التعليم",
    educationItem1: "بكالوريوس هندسة تقنيات شبكات الحاسوب.",
    experienceTitle: "الخبرات",
    exp1Title: "أستاذ جامعي - الكلية التقنية الهندسية النجف",
    exp1Meta: "التعليم العالي والتدريب الهندسي",
    exp1B1: "تدريس مواد تقنية وهندسية وربط الجانب الأكاديمي بالتطبيق العملي.",
    exp1B2: "تطوير محتوى تدريسي حديث مدعوم بأدوات الذكاء الاصطناعي.",
    exp1B3: "بناء تجارب تعلّم وامتحانات رقمية تساعد الطلبة على التطبيق الحقيقي.",
    exp1B4: "المساهمة في رفع جاهزية الطلبة لسوق العمل الرقمي والتقني.",
    exp2Title: "مطور أنظمة كليّة وحلول AI",
    exp2Meta: "Flutter · Firebase · EdTech · أتمتة",
    exp2B1: "منصة شعبة تكنولوجيا المعلومات: مختبرات، حضور، امتحانات، حجوزات، تذاكر.",
    exp2B2: "نظام الدراسات العليا: سجلات الطلبة، المراحل البحثية، أدوار الكادر.",
    exp2B3: "منصات تحضير امتحانات ومركز lof9x لأدوات AI.",
    exp2B4: "طرق حديثة: Flutter/Firebase، صلاحيات أدوار، جلسات لحظية، Cursor AI.",
    skillsTitle: "المهارات الأساسية",
    projectsTitle: "مشاريع مختارة",
    proj1: "منصة شعبة تكنولوجيا المعلومات (Flutter + Firebase — إنتاج).",
    proj2: "نظام إدارة الدراسات العليا.",
    proj3: "منصات امتحانات (إنجليزي / عربي / هندسي).",
    proj4: "مركز lof9x لأدوات وتحديثات الذكاء الاصطناعي.",
    proj5: "بوت ذكاء اصطناعي على تيليجرام + أتمتة تعليمية.",
    teachingTitle: "التعليم والمحتوى",
    teach1: "شروحات عملية لتبسيط مفاهيم الذكاء الاصطناعي والأتمتة.",
    teach2: "تصميم أنشطة ومشاريع تدريبية تطبيقية.",
    teach3: "توجيه الطلبة نحو استخدام AI بمهنية وفعالية.",
    languagesTitle: "اللغات",
    lang1: "العربية: لغة أم",
    lang2: "الإنجليزية: جيدة جدا (Technical/Professional)",
    skills: [
      "Flutter",
      "Firebase",
      "Applied AI",
      "EdTech Platforms",
      "Exam Systems",
      "Graduate Studies Workflows",
      "RBAC / Realtime",
      "Automation",
      "Cursor AI",
      "Curriculum Design"
    ]
  },
  en: {
    role: "University Lecturer | AI Solutions Engineer | EdTech Builder",
    downloadPdf: "Download PDF",
    backHome: "Back to Website",
    contactTitle: "Contact Information",
    summaryTitle: "Professional Summary",
    summaryBody:
      "Lecturer at Al-Najaf Engineering Technical College. I build real college systems (IT Division platform and Graduate Studies) plus exam platforms, AI tools, and automation for students and staff.",
    educationTitle: "Education",
    educationItem1: "Bachelor's Degree in Computer Network Technologies Engineering.",
    experienceTitle: "Professional Experience",
    exp1Title: "Lecturer - Al-Najaf Engineering Technical College",
    exp1Meta: "Higher Education and Engineering Training",
    exp1B1: "Teach technical and engineering subjects with an implementation-first approach.",
    exp1B2: "Develop modern learning content enhanced by AI tools.",
    exp1B3: "Build digital learning and exam experiences for real student practice.",
    exp1B4: "Support student readiness for digital and technology-driven careers.",
    exp2Title: "College Systems & AI Solutions Developer",
    exp2Meta: "Flutter · Firebase · EdTech · Automation",
    exp2B1: "IT Division platform: labs, attendance, exams, bookings, tickets.",
    exp2B2: "Graduate studies system: student records, research stages, staff roles.",
    exp2B3: "Exam-prep platforms and the lof9x AI tools hub.",
    exp2B4: "Modern methods: Flutter/Firebase, RBAC, realtime sessions, Cursor AI.",
    skillsTitle: "Core Competencies",
    projectsTitle: "Selected Projects",
    proj1: "IT Division platform (Flutter + Firebase — production).",
    proj2: "Graduate Studies management system.",
    proj3: "Exam platforms (English / Arabic / Engineering).",
    proj4: "lof9x AI tools and updates hub.",
    proj5: "Telegram AI bot + teaching automation.",
    teachingTitle: "Teaching & Content",
    teach1: "Practical explainers for AI and automation concepts.",
    teach2: "Hands-on training activities and applied projects.",
    teach3: "Guide students toward effective, professional AI use.",
    languagesTitle: "Languages",
    lang1: "Arabic: Native",
    lang2: "English: Very Good (Technical/Professional)",
    skills: [
      "Flutter",
      "Firebase",
      "Applied AI",
      "EdTech Platforms",
      "Exam Systems",
      "Graduate Studies Workflows",
      "RBAC / Realtime",
      "Automation",
      "Cursor AI",
      "Curriculum Design"
    ]
  }
};

function applyLanguage() {
  const d = data[state.lang] || data.ar;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").textContent = state.lang === "ar" ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (d[key]) el.textContent = d[key];
  });
  const skills = document.getElementById("skillsTags");
  skills.innerHTML = d.skills.map((skill) => `<span class="tag">${skill}</span>`).join("");
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.textContent = state.theme === "dark"
      ? (state.lang === "ar" ? "داكن" : "Dark")
      : (state.lang === "ar" ? "فاتح" : "Light");
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme === "light" ? "light" : "dark";
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, state.theme);
  applyTheme();
  applyLanguage();
}

document.getElementById("langBtn").addEventListener("click", () => {
  state.lang = state.lang === "ar" ? "en" : "ar";
  localStorage.setItem(CV_LANG_KEY, state.lang);
  applyLanguage();
});

document.getElementById("printBtn").addEventListener("click", () => window.print());
document.getElementById("themeBtn").addEventListener("click", toggleTheme);

applyTheme();
applyLanguage();
