const CV_LANG_KEY = "lof9x_lang";
const THEME_KEY = "lof9x_theme";
const state = {
  lang: localStorage.getItem(CV_LANG_KEY) || "ar",
  theme: localStorage.getItem(THEME_KEY) || "dark"
};

const data = {
  ar: {
    role: "مهندس ذكاء اصطناعي | أستاذ أكاديمي | مختص أتمتة وتحول رقمي",
    downloadPdf: "تحميل PDF",
    backHome: "العودة للموقع",
    contactTitle: "معلومات التواصل",
    summaryTitle: "الملخص المهني",
    summaryBody:
      "مهندس تقني وأستاذ أكاديمي يجمع بين الخبرة التعليمية والتطبيق العملي للذكاء الاصطناعي والأتمتة. أركز على بناء حلول ذكية قابلة للتنفيذ تساعد الطلبة والمؤسسات وأصحاب الأعمال على رفع الكفاءة وتحسين جودة القرارات وتسريع الإنجاز. أمتلك خبرة في تصميم تدفقات عمل AI، تطوير أدوات تعليمية رقمية، وبناء حلول برمجية حديثة متعددة الاستخدامات.",
    educationTitle: "التعليم",
    educationItem1: "بكالوريوس هندسة تقنيات شبكات الحاسوب.",
    experienceTitle: "الخبرات",
    exp1Title: "أستاذ جامعي - الكلية التقنية الهندسية النجف",
    exp1Meta: "التعليم العالي والتدريب الهندسي",
    exp1B1: "تدريس مواد تقنية وهندسية وربط الجانب الأكاديمي بالتطبيق العملي.",
    exp1B2: "تطوير محتوى تدريسي حديث مدعوم بأدوات الذكاء الاصطناعي.",
    exp1B3: "بناء بيئات تعلم تفاعلية تساعد الطلبة على التطبيق الحقيقي للمفاهيم.",
    exp1B4: "المساهمة في رفع جاهزية الطلبة لسوق العمل الرقمي والتقني.",
    exp2Title: "مطور حلول AI وأتمتة - مشاريع تطبيقية",
    exp2Meta: "حلول تعليمية وتجارية ومؤسسية",
    exp2B1: "تصميم حلول ذكاء اصطناعي عملية للتعليم وإدارة المعرفة والإنتاجية.",
    exp2B2: "بناء أنظمة أتمتة للمهام المتكررة وتدفقات العمل التجارية.",
    exp2B3: "تطوير منصات وبرمجيات مساعدة للطلبة والأساتذة وأصحاب الأعمال.",
    exp2B4: "دمج أدوات AI الحديثة مع واجهات سهلة الاستخدام ذات أثر مباشر.",
    skillsTitle: "المهارات الأساسية",
    projectsTitle: "مشاريع مختارة عالية الأثر",
    proj1: "منصة مخطط دراسة ذكي للطلبة (جدولة، مراجعة، اختبارات).",
    proj2: "مساعد تدريسي للأساتذة لتوليد خطط ومحاور تقييم ومحتوى تعلم.",
    proj3: "حلول نقطة بيع ومخزون للمحلات مع تحليلات ومؤشرات أداء.",
    proj4: "أنظمة أتمتة مؤسسية لإدارة الموافقات والتقارير وسير العمليات.",
    proj5: "مساعد معرفة للشركات باستخدام RAG للبحث الذكي في الوثائق الداخلية.",
    teachingTitle: "التعليم والمحتوى",
    teach1: "إعداد شروحات عملية لتبسيط مفاهيم الذكاء الاصطناعي والأتمتة.",
    teach2: "تصميم أنشطة ومشاريع تدريبية تساعد على التعلم التطبيقي.",
    teach3: "توجيه الطلبة والمهتمين نحو استخدام AI بمهنية وفعالية.",
    languagesTitle: "اللغات",
    lang1: "العربية: لغة أم",
    lang2: "الإنجليزية: جيدة جدا (Technical/Professional)",
    skills: [
      "AI Workflows",
      "Prompt Engineering",
      "AI Automation",
      "RAG Systems",
      "Curriculum Design",
      "Software Development",
      "Digital Transformation",
      "Technical Communication"
    ]
  },
  en: {
    role: "AI Engineer | Academic Lecturer | Automation & Digital Transformation Specialist",
    downloadPdf: "Download PDF",
    backHome: "Back to Website",
    contactTitle: "Contact Information",
    summaryTitle: "Professional Summary",
    summaryBody:
      "Technology engineer and academic lecturer combining educational expertise with practical AI implementation. I focus on building deployable AI and automation solutions that help students, institutions, and business owners improve efficiency, decision quality, and execution speed. My work includes AI workflow design, digital learning tools, and modern software solutions with measurable impact.",
    educationTitle: "Education",
    educationItem1: "Bachelor's Degree in Computer Network Technologies Engineering.",
    experienceTitle: "Professional Experience",
    exp1Title: "Lecturer - Al-Najaf Engineering Technical College",
    exp1Meta: "Higher Education and Engineering Training",
    exp1B1: "Teach technical and engineering subjects with a practical, implementation-first approach.",
    exp1B2: "Develop modern learning content enhanced by AI tools.",
    exp1B3: "Build interactive learning environments to strengthen real-world skill application.",
    exp1B4: "Support student readiness for digital and technology-driven job markets.",
    exp2Title: "AI Solutions & Automation Developer - Applied Projects",
    exp2Meta: "Educational, Commercial, and Enterprise Solutions",
    exp2B1: "Design practical AI solutions for education, knowledge management, and productivity.",
    exp2B2: "Build automation systems for repetitive tasks and business workflows.",
    exp2B3: "Develop useful software platforms for students, educators, and business owners.",
    exp2B4: "Integrate modern AI tools with user-friendly interfaces and direct business value.",
    skillsTitle: "Core Competencies",
    projectsTitle: "Selected High-Impact Projects",
    proj1: "Student AI study planner (schedules, revision, and smart quizzes).",
    proj2: "Teaching assistant toolkit for educators (lesson plans and assessment rubrics).",
    proj3: "Smart POS and inventory solutions for local stores with analytics dashboards.",
    proj4: "Enterprise workflow automation systems for approvals, reports, and operations.",
    proj5: "RAG-based company knowledge assistant for internal document intelligence.",
    teachingTitle: "Teaching & Content Contributions",
    teach1: "Create practical educational resources for AI and automation concepts.",
    teach2: "Design hands-on projects and activities for applied learning outcomes.",
    teach3: "Guide students and professionals in effective and responsible AI usage.",
    languagesTitle: "Languages",
    lang1: "Arabic: Native",
    lang2: "English: Very Good (Technical/Professional)",
    skills: [
      "AI Workflows",
      "Prompt Engineering",
      "AI Automation",
      "RAG Systems",
      "Curriculum Design",
      "Software Development",
      "Digital Transformation",
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
      ? (state.lang === "ar" ? "داكن فاخر" : "Dark Beige")
      : (state.lang === "ar" ? "فاتح راقٍ" : "Light Luxury");
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
