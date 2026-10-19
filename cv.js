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
      "أستاذ في الكلية التقنية الهندسية النجف ومهندس يبني حلولًا تعليمية عملية بالذكاء الاصطناعي. أركز على منصات الامتحانات، أدوات التعلّم، والأتمتة التي تساعد الطلبة والكادر على إنجاز أوضح وأسرع — بدون ربط هذا الموقع بأي منصة تشغيل خاصة.",
    educationTitle: "التعليم",
    educationItem1: "بكالوريوس هندسة تقنيات شبكات الحاسوب.",
    experienceTitle: "الخبرات",
    exp1Title: "أستاذ جامعي - الكلية التقنية الهندسية النجف",
    exp1Meta: "التعليم العالي والتدريب الهندسي",
    exp1B1: "تدريس مواد تقنية وهندسية وربط الجانب الأكاديمي بالتطبيق العملي.",
    exp1B2: "تطوير محتوى تدريسي حديث مدعوم بأدوات الذكاء الاصطناعي.",
    exp1B3: "بناء تجارب تعلّم وامتحانات رقمية تساعد الطلبة على التطبيق الحقيقي.",
    exp1B4: "المساهمة في رفع جاهزية الطلبة لسوق العمل الرقمي والتقني.",
    exp2Title: "مطور حلول AI ومنصات تعليمية - مشاريع عامة",
    exp2Meta: "EdTech · AI · أتمتة",
    exp2B1: "بناء منصات تحضير وامتحانات (إنجليزي، عربي، هندسي) كمشاريع مستقلة.",
    exp2B2: "تنسيق مركز lof9x لأدوات وتحديثات الذكاء الاصطناعي.",
    exp2B3: "تصميم أتمتة ومساعدات ذكية للتعليم والمحتوى.",
    exp2B4: "واجهات عربية/إنجليزية واضحة جاهزة للاستخدام الفعلي.",
    skillsTitle: "المهارات الأساسية",
    projectsTitle: "مشاريع مختارة",
    proj1: "منصة التحضير للامتحان الوطني الإنجليزي (warith-exam-iq).",
    proj2: "منصة تدريب الامتحان العربي (WARITHARABICEXAM).",
    proj3: "مركز امتحانات هندسية (engeaxam).",
    proj4: "مركز lof9x لأدوات وتحديثات الذكاء الاصطناعي.",
    proj5: "بوت ذكاء اصطناعي على تيليجرام (warith_ai_bot).",
    teachingTitle: "التعليم والمحتوى",
    teach1: "شروحات عملية لتبسيط مفاهيم الذكاء الاصطناعي والأتمتة.",
    teach2: "تصميم أنشطة ومشاريع تدريبية تطبيقية.",
    teach3: "توجيه الطلبة نحو استخدام AI بمهنية وفعالية.",
    languagesTitle: "اللغات",
    lang1: "العربية: لغة أم",
    lang2: "الإنجليزية: جيدة جدا (Technical/Professional)",
    skills: [
      "Applied AI",
      "EdTech Platforms",
      "Exam Systems",
      "Prompt Engineering",
      "Automation",
      "Web Development",
      "Curriculum Design",
      "Technical Communication"
    ]
  },
  en: {
    role: "University Lecturer | AI Solutions Engineer | EdTech Builder",
    downloadPdf: "Download PDF",
    backHome: "Back to Website",
    contactTitle: "Contact Information",
    summaryTitle: "Professional Summary",
    summaryBody:
      "Lecturer at Al-Najaf Engineering Technical College and engineer building practical AI-assisted education tools. Focused on exam platforms, learning software, and automation that help students and staff move faster — this site stays independent from any private production platform.",
    educationTitle: "Education",
    educationItem1: "Bachelor's Degree in Computer Network Technologies Engineering.",
    experienceTitle: "Professional Experience",
    exp1Title: "Lecturer - Al-Najaf Engineering Technical College",
    exp1Meta: "Higher Education and Engineering Training",
    exp1B1: "Teach technical and engineering subjects with an implementation-first approach.",
    exp1B2: "Develop modern learning content enhanced by AI tools.",
    exp1B3: "Build digital learning and exam experiences for real student practice.",
    exp1B4: "Support student readiness for digital and technology-driven careers.",
    exp2Title: "AI & EdTech Developer - Public Projects",
    exp2Meta: "EdTech · AI · Automation",
    exp2B1: "Ship independent exam-prep platforms (English, Arabic, engineering).",
    exp2B2: "Maintain the lof9x hub for AI tools and updates.",
    exp2B3: "Design automation and AI assistants for teaching and content.",
    exp2B4: "Deliver clear bilingual (AR/EN) interfaces for real users.",
    skillsTitle: "Core Competencies",
    projectsTitle: "Selected Projects",
    proj1: "Iraqi national English exam prep (warith-exam-iq).",
    proj2: "Arabic exam practice platform (WARITHARABICEXAM).",
    proj3: "Engineering exam hub (engeaxam).",
    proj4: "lof9x AI tools and updates hub.",
    proj5: "Telegram AI bot (warith_ai_bot).",
    teachingTitle: "Teaching & Content",
    teach1: "Practical explainers for AI and automation concepts.",
    teach2: "Hands-on training activities and applied projects.",
    teach3: "Guide students toward effective, professional AI use.",
    languagesTitle: "Languages",
    lang1: "Arabic: Native",
    lang2: "English: Very Good (Technical/Professional)",
    skills: [
      "Applied AI",
      "EdTech Platforms",
      "Exam Systems",
      "Prompt Engineering",
      "Automation",
      "Web Development",
      "Curriculum Design",
      "Technical Communication"
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
