const EMAIL = "warthmohamed99@gmail.com";
const DEFAULT_LANG = "en";
const LANGUAGE_KEY = "lof9x_lang";
const THEME_KEY = "lof9x_theme";
document.documentElement.classList.add("js");

const fallbackI18nByLang = {
  en: {
  nav: { updates: "AI Updates", tools: "AI Tools", projects: "Projects", services: "Services", blog: "Insights", contact: "Contact", commandPalette: "Command", theme: "Theme" },
  hero: {
    eyebrow: "World-Class AI Engineering",
    title: "Building the Future of AI and Automation",
    subtitle: "A premium technology hub for AI updates, tools, projects, and engineering insights.",
    ctaUpdates: "Explore AI Updates",
    ctaProjects: "View Projects",
    sideTitle: "Platform Highlights",
    features: { one: "Bilingual experience", two: "Dynamic AI data feeds", three: "Modern interactions", four: "Startup-grade quality" }
  },
  about: {
    title: "About Warith Al-Awadi",
    subtitle: "AI Engineer • Automation Architect • Technology Innovator",
    bio: "Graduate of Computer Network Technologies Engineering and a lecturer at Al-Najaf Engineering Technical College. I use AI in practical ways across education, content creation, automation, and software solutions to help students, educators, and business owners improve performance and accelerate execution.",
    cvButton: "Professional Profile",
    tags: {
      aiEngineering: "AI Engineering",
      automation: "Automation",
      software: "Software Development",
      energy: "Smart Energy"
    },
    stats: {
      focusValue: "Applied AI",
      focusLabel: "Production systems over demos",
      audienceValue: "Education + Business",
      audienceLabel: "Students, teachers, shops, and companies",
      missionValue: "Build with Impact",
      missionLabel: "Fast, practical, and scalable execution"
    }
  },
  updates: { title: "Latest AI Updates", subtitle: "Real updates from leading AI organizations." },
  tools: {
    title: "AI Tools Directory",
    subtitle: "Curated AI tools by category.",
    searchPlaceholder: "Search tools...",
    allCategories: "All Categories",
    allBadges: "All Badges",
    sortLabel: "Sort:",
    sortRelevance: "Relevance",
    sortPopular: "Most Popular",
    sortNewest: "Newest",
    sortName: "Name (A-Z)",
    viewDetails: "Details",
    openPage: "Open Page",
    closeDetails: "Close",
    detailWhat: "What this tool does",
    detailBestFor: "Best for",
    detailHowToUse: "Suggested workflow",
    detailModel: "Usage model",
    noResults: "No matching tools found."
  },
  projects: { title: "Projects", subtitle: "Real AI projects you can explore, run, and learn from." },
  services: {
    title: "Professional Services",
    subtitle: "Consulting and implementation for real outcomes.",
    items: {
      aiAutomation: { title: "AI Automation", description: "Workflow automation using modern AI systems." },
      aiConsulting: { title: "AI Consulting", description: "Strategy and technical roadmaps for AI initiatives." },
      smartEnergy: { title: "Smart Energy Technology", description: "Data-driven systems for smart energy innovation." },
      softwareDevelopment: { title: "Software Development", description: "Scalable web platforms and production software." },
      educationContent: { title: "Educational AI Content", description: "Practical content for students and teams." }
    }
  },
  blog: { title: "Blog / Insights", subtitle: "Technical writing and implementation lessons.", read: "Read", close: "Close Post", loadError: "Unable to load post." },
  contact: {
    title: "Contact",
    subtitle: "Let's collaborate on AI products.",
    emailTitle: "Direct Email",
    copyEmail: "Copy Email",
    copySuccess: "Email copied successfully.",
    copyError: "Copy failed. Please copy manually.",
    connectTitle: "Connect"
  },
  footer: { lastUpdated: "Last update:" },
  common: { source: "Source", visit: "Visit", demo: "Demo", learn: "Learn" },
  commandPalette: {
    placeholder: "Type a command...",
    commands: { updates: "Go to AI Updates", tools: "Go to AI Tools", projects: "Go to Projects", switchLanguage: "Switch language", copyEmail: "Copy email", switchTheme: "Switch theme" }
  },
  theme: { dark: "Dark Beige", light: "Light Luxury" }
  },
  ar: {
    nav: { updates: "تحديثات AI", tools: "أدوات AI", projects: "المشاريع", services: "الخدمات", blog: "الرؤى", contact: "تواصل", commandPalette: "الأوامر", theme: "المظهر" },
    hero: {
      eyebrow: "منصة هندسة ذكاء اصطناعي",
      title: "بناء مستقبل الذكاء الاصطناعي والأتمتة",
      subtitle: "منصة تقنية احترافية لتحديثات AI والأدوات والمشاريع والرؤى الهندسية.",
      ctaUpdates: "استكشف التحديثات",
      ctaProjects: "عرض المشاريع",
      sideTitle: "مزايا المنصة",
      features: { one: "تجربة ثنائية اللغة", two: "بيانات AI ديناميكية", three: "تفاعلات حديثة", four: "جودة بمستوى الشركات" }
    },
    about: {
      title: "عن وارث العوادي",
      subtitle: "مهندس ذكاء اصطناعي • معماري أتمتة • مبتكر تقني",
      bio: "خريج هندسة تقنيات شبكات الحاسوب، وأستاذ في الكلية التقنية الهندسية النجف. أستخدم الذكاء الاصطناعي بشكل عملي في التعليم، وإنتاج المحتوى، والأتمتة، وتطوير الحلول البرمجية التي تساعد الطلبة والأساتذة وأصحاب الأعمال على تحسين الأداء وتسريع الإنجاز.",
      cvButton: "الملف المهني",
      tags: {
        aiEngineering: "هندسة الذكاء الاصطناعي",
        automation: "الأتمتة",
        software: "تطوير البرمجيات",
        energy: "الطاقة الذكية"
      },
      stats: {
        focusValue: "AI تطبيقي",
        focusLabel: "أنظمة إنتاجية وليست عروضًا فقط",
        audienceValue: "تعليم + أعمال",
        audienceLabel: "الطلبة والأساتذة والمحلات والشركات",
        missionValue: "بناء أثر حقيقي",
        missionLabel: "تنفيذ سريع وعملي وقابل للتوسع"
      }
    },
    updates: { title: "آخر تحديثات الذكاء الاصطناعي", subtitle: "تحديثات حقيقية من أبرز الجهات التقنية." },
    tools: {
      title: "دليل أدوات الذكاء الاصطناعي",
      subtitle: "أدوات AI مختارة حسب الفئة.",
      searchPlaceholder: "ابحث عن أداة...",
      allCategories: "كل الفئات",
      allBadges: "كل الشارات",
      sortLabel: "الترتيب:",
      sortRelevance: "الأكثر صلة",
      sortPopular: "الأكثر شهرة",
      sortNewest: "الأحدث",
      sortName: "الاسم",
      viewDetails: "التفاصيل",
      openPage: "صفحة الأداة",
      closeDetails: "إغلاق",
      detailWhat: "ماذا تفعل الأداة؟",
      detailBestFor: "أفضل استخدام",
      detailHowToUse: "طريقة الاستخدام المقترحة",
      detailModel: "نموذج الاستخدام",
      noResults: "لا توجد نتائج مطابقة."
    },
    projects: { title: "المشاريع", subtitle: "مشاريع AI حقيقية يمكنك استكشافها وتشغيلها والتعلّم منها." },
    services: {
      title: "الخدمات الاحترافية",
      subtitle: "استشارات وتنفيذ لتحقيق نتائج حقيقية.",
      items: {
        aiAutomation: { title: "أتمتة الذكاء الاصطناعي", description: "تحويل العمليات المتكررة إلى تدفقات ذكية فعالة." },
        aiConsulting: { title: "استشارات الذكاء الاصطناعي", description: "خارطة طريق واضحة لبناء حلول AI عملية." },
        smartEnergy: { title: "تقنيات الطاقة الذكية", description: "حلول تعتمد على البيانات لتحسين كفاءة الطاقة." },
        softwareDevelopment: { title: "تطوير البرمجيات", description: "بناء منصات ويب حديثة قابلة للتوسع." },
        educationContent: { title: "محتوى AI تعليمي", description: "محتوى تدريبي عملي للطلاب والفرق." }
      }
    },
    blog: { title: "المدونة / الرؤى", subtitle: "كتابة تقنية ودروس تطبيقية.", read: "قراءة", close: "إغلاق المقال", loadError: "تعذر تحميل المقال." },
    contact: {
      title: "تواصل",
      subtitle: "جاهز للتعاون على مشاريع AI.",
      emailTitle: "البريد المباشر",
      copyEmail: "نسخ البريد",
      copySuccess: "تم نسخ البريد بنجاح.",
      copyError: "تعذر النسخ، انسخه يدويًا.",
      connectTitle: "روابط التواصل"
    },
    footer: { lastUpdated: "آخر تحديث:" },
    common: { source: "المصدر", visit: "زيارة", demo: "عرض", learn: "تعلّم" },
    commandPalette: {
      placeholder: "اكتب أمرًا...",
      commands: { updates: "الانتقال إلى التحديثات", tools: "الانتقال إلى الأدوات", projects: "الانتقال إلى المشاريع", switchLanguage: "تبديل اللغة", copyEmail: "نسخ البريد", switchTheme: "تبديل المظهر" }
    },
    theme: { dark: "داكن فاخر", light: "فاتح راقٍ" }
  }
};

const fallbackUpdates = [
  {
    title: { en: "OpenAI platform update", ar: "تحديث منصة OpenAI" },
    summary: { en: "Major improvements in model workflows and tooling.", ar: "تحسينات كبيرة في تدفقات عمل النماذج والأدوات." },
    organization: "OpenAI",
    date: "2026",
    category: "Platform",
    link: "https://openai.com"
  }
];

const fallbackTools = [
  {
    name: { en: "ChatGPT", ar: "شات جي بي تي" },
    description: { en: "All-in-one AI assistant for writing, coding, analysis, voice interaction, and agentic workflows.", ar: "مساعد شامل للكتابة والبرمجة والتحليل والتفاعل الصوتي وبناء تدفقات عمل ذكية." },
    link: "https://chatgpt.com",
    category: "AI Chat"
  },
  {
    name: { en: "Claude", ar: "كلود" },
    description: { en: "Strong long-context assistant for deep reasoning, document analysis, and professional writing.", ar: "مساعد قوي في فهم السياق الطويل والاستدلال وتحليل الوثائق والكتابة الاحترافية." },
    link: "https://claude.ai",
    category: "AI Chat"
  },
  {
    name: { en: "Gemini", ar: "جيمناي" },
    description: { en: "Google's multimodal AI platform for chat, reasoning, coding, and workspace productivity.", ar: "منصة جوجل متعددة الوسائط للمحادثة والاستدلال والبرمجة والإنتاجية." },
    link: "https://gemini.google.com",
    category: "AI Chat"
  },
  {
    name: { en: "Perplexity Assistant", ar: "بيربلكسيتي أسيستنت" },
    description: { en: "AI assistant with web-backed answers and references for accurate knowledge retrieval.", ar: "مساعد ذكي يقدم إجابات مدعومة بالويب مع مراجع للحصول على معرفة أدق." },
    link: "https://www.perplexity.ai",
    category: "AI Chat"
  },
  {
    name: { en: "Cursor", ar: "كيرسر" },
    description: { en: "AI-native code editor for pair programming, refactoring, debugging, and large codebase navigation.", ar: "محرر برمجي مدعوم بالذكاء الاصطناعي للبرمجة الثنائية وإعادة الهيكلة وتتبع المشاريع الكبيرة." },
    link: "https://cursor.com",
    category: "Coding AI"
  },
  {
    name: { en: "GitHub Copilot", ar: "جيت هب كوبايلوت" },
    description: { en: "AI coding companion inside IDEs for suggestions, test generation, and pull request assistance.", ar: "مرافق برمجي داخل بيئات التطوير لتوليد الاقتراحات والاختبارات والمساعدة في طلبات الدمج." },
    link: "https://github.com/features/copilot",
    category: "Coding AI"
  },
  {
    name: { en: "v0 by Vercel", ar: "في صفر من فيرسل" },
    description: { en: "Generates modern UI components and front-end code from prompts with developer-ready output.", ar: "ينشئ مكونات واجهات حديثة وكود واجهات أمامية من النصوص مع مخرجات جاهزة للمطور." },
    link: "https://v0.dev",
    category: "Coding AI"
  },
  {
    name: { en: "Midjourney", ar: "ميدجورني" },
    description: { en: "Premium image generator for concept art, branding visuals, and high-fidelity creative assets.", ar: "مولد صور احترافي للتصميم المفاهيمي والهوية البصرية وإنتاج أصول إبداعية عالية الجودة." },
    link: "https://www.midjourney.com",
    category: "Image Generation"
  },
  {
    name: { en: "DALL-E", ar: "دال إي" },
    description: { en: "Image generation and editing for product mockups, illustrations, and visual storytelling.", ar: "توليد وتحرير الصور للنماذج الأولية للمنتجات والرسوم التوضيحية والسرد البصري." },
    link: "https://openai.com/dall-e",
    category: "Image Generation"
  },
  {
    name: { en: "Runway", ar: "رانواي" },
    description: { en: "AI video suite for text-to-video, image-to-video, and cinematic creative production.", ar: "منصة فيديو ذكية لتحويل النص أو الصورة إلى فيديو وإنتاج مشاهد احترافية." },
    link: "https://runwayml.com",
    category: "Video Generation"
  },
  {
    name: { en: "Perplexity", ar: "بيربلكسيتي" },
    description: { en: "Research answer engine with citations, ideal for technical discovery and trend monitoring.", ar: "محرك بحث وإجابات مع مصادر موثقة مناسب للبحث التقني ومتابعة المستجدات." },
    link: "https://www.perplexity.ai",
    category: "Research AI"
  },
  {
    name: { en: "Notion AI", ar: "نوشن AI" },
    description: { en: "Productivity assistant for notes, documentation, summaries, and collaborative knowledge management.", ar: "مساعد إنتاجية للملاحظات والوثائق والتلخيص وإدارة المعرفة التعاونية." },
    link: "https://www.notion.so/product/ai",
    category: "Productivity AI"
  },
  {
    name: { en: "Zapier AI", ar: "زابير AI" },
    description: { en: "Automates business workflows with AI actions, app integrations, and trigger-based execution.", ar: "أتمتة عمليات الأعمال عبر تكامل التطبيقات وتنفيذ إجراءات ذكية بحسب المحفزات." },
    link: "https://zapier.com/ai",
    category: "Productivity AI"
  },
  {
    name: { en: "NotebookLM", ar: "نوتبوك إل إم" },
    description: { en: "Research and study assistant that turns your sources into grounded summaries, Q&A, and audio overviews.", ar: "مساعد بحث ودراسة يحول مصادرك إلى تلخيصات موثقة وأسئلة وأجوبة وملخصات صوتية." },
    link: "https://notebooklm.google.com",
    category: "Research AI"
  },
  {
    name: { en: "Grok", ar: "غروك" },
    description: { en: "Real-time conversational assistant connected to live information and multimodal reasoning workflows.", ar: "مساعد محادثة بزمن حقيقي متصل بالمعلومات الحية ويدعم الاستدلال متعدد الوسائط." },
    link: "https://grok.com",
    category: "AI Chat"
  },
  {
    name: { en: "n8n", ar: "إن8إن" },
    description: { en: "Open-source workflow automation platform to build AI agents and integrate tools across your stack.", ar: "منصة أتمتة تدفقات عمل مفتوحة المصدر لبناء وكلاء AI وربط الأدوات عبر منظومتك التقنية." },
    link: "https://n8n.io",
    category: "Agents & Automation"
  },
  {
    name: { en: "Gamma", ar: "غاما" },
    description: { en: "AI presentation creator for pitch decks, reports, and visual storytelling in minutes.", ar: "أداة عروض تقديمية ذكية لبناء عروض المستثمرين والتقارير والسرد البصري خلال دقائق." },
    link: "https://gamma.app",
    category: "Presentation AI"
  },
  {
    name: { en: "Power BI Copilot", ar: "باور بي آي كوبايلوت" },
    description: { en: "Natural-language analytics assistant to build dashboards, insights, and executive reports faster.", ar: "مساعد تحليلات باللغة الطبيعية لبناء لوحات معلومات واستخراج رؤى وتقارير تنفيذية بسرعة." },
    link: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
    category: "Data AI"
  },
  {
    name: { en: "Character.AI", ar: "كاركتر AI" },
    description: { en: "Role-based conversational platform for interactive dialogue and persona-driven AI chats.", ar: "منصة محادثات تعتمد الشخصيات للأدوار التفاعلية وحوارات AI الموجهة بالشخصية." },
    link: "https://character.ai",
    category: "AI Chat",
    badges: ["Popular", "Free", "Students"]
  },
  {
    name: { en: "Pi by Inflection", ar: "باي من إنفلكشن" },
    description: { en: "Personal conversational AI assistant focused on supportive dialogue and daily productivity.", ar: "مساعد محادثة شخصي يركز على الحوار الداعم والإنتاجية اليومية." },
    link: "https://pi.ai",
    category: "AI Chat",
    badges: ["Free", "Students"]
  },
  {
    name: { en: "Tabnine", ar: "تاب ناين" },
    description: { en: "AI coding assistant for secure code completion and enterprise development teams.", ar: "مساعد برمجي ذكي للإكمال الآمن للكود داخل فرق التطوير المؤسسية." },
    link: "https://www.tabnine.com",
    category: "Coding AI",
    badges: ["Paid", "Developers", "Enterprise"]
  },
  {
    name: { en: "Sourcegraph Cody", ar: "كودي من سورس غراف" },
    description: { en: "Codebase-aware assistant for large repositories and cross-file engineering tasks.", ar: "مساعد واعٍ بالمشروع للمستودعات الكبيرة ومهام الهندسة عبر ملفات متعددة." },
    link: "https://sourcegraph.com/cody",
    category: "Coding AI",
    badges: ["Paid", "Developers"]
  },
  {
    name: { en: "Aider", ar: "أيدر" },
    description: { en: "Terminal-first AI pair programmer that edits real project files conversationally.", ar: "مرافق برمجي عبر الطرفية يعدل ملفات المشروع فعليًا عبر المحادثة." },
    link: "https://aider.chat",
    category: "Coding AI",
    badges: ["OpenSource", "Developers", "Popular"]
  },
  {
    name: { en: "Continue", ar: "كونتينيو" },
    description: { en: "Open-source IDE extension for AI-assisted coding with flexible model backends.", ar: "إضافة مفتوحة المصدر لبيئات التطوير تدعم البرمجة بالذكاء الاصطناعي بمرونة عالية." },
    link: "https://www.continue.dev",
    category: "Coding AI",
    badges: ["OpenSource", "Free", "Developers"]
  },
  {
    name: { en: "Playground AI", ar: "بلايغراوند AI" },
    description: { en: "Image generation and editing for creators, ads, and social content workflows.", ar: "توليد وتحرير الصور لصناع المحتوى والإعلانات وتدفقات السوشال." },
    link: "https://playground.com",
    category: "Image Generation",
    badges: ["Free", "Designers", "Marketers"]
  },
  {
    name: { en: "Recraft", ar: "ريكرافت" },
    description: { en: "Design-focused AI tool for vectors, icons, and brand-consistent visual assets.", ar: "أداة تصميم ذكية لإنشاء فيكتورات وأيقونات وأصول بصرية متسقة مع العلامة." },
    link: "https://www.recraft.ai",
    category: "Image Generation",
    badges: ["Paid", "Designers"]
  },
  {
    name: { en: "Veed AI", ar: "فيد AI" },
    description: { en: "Browser-based AI video editor for subtitles, social exports, and collaboration.", ar: "محرر فيديو عبر المتصفح للترجمة التلقائية وتصدير السوشال والعمل التعاوني." },
    link: "https://www.veed.io",
    category: "Video Generation",
    badges: ["Paid", "Marketers", "Creators"]
  },
  {
    name: { en: "InVideo AI", ar: "إن فيديو AI" },
    description: { en: "Text-to-video suite for rapid marketing videos and campaign content production.", ar: "منصة تحويل النص إلى فيديو لإنتاج فيديوهات تسويقية ومحتوى الحملات بسرعة." },
    link: "https://invideo.io/ai",
    category: "Video Generation",
    badges: ["Paid", "Marketers", "Creators"]
  },
  {
    name: { en: "Wolfram|Alpha", ar: "وولفرام ألفا" },
    description: { en: "Computational knowledge engine for mathematics, engineering, and science-heavy tasks.", ar: "محرك معرفة حسابي للرياضيات والهندسة والعلوم والمهام التقنية المكثفة." },
    link: "https://www.wolframalpha.com",
    category: "Research AI",
    badges: ["Popular", "Students", "Researchers"]
  },
  {
    name: { en: "ResearchRabbit", ar: "ريسيرش رابيت" },
    description: { en: "Visual discovery tool to map connected papers and build research collections.", ar: "أداة بصرية لاكتشاف وربط الأوراق العلمية وبناء مجموعات بحثية." },
    link: "https://www.researchrabbit.ai",
    category: "Research AI",
    badges: ["Free", "Researchers", "Students"]
  },
  {
    name: { en: "ChatPDF", ar: "شات بي دي إف" },
    description: { en: "Document Q&A assistant for PDFs, reports, and lecture materials.", ar: "مساعد أسئلة وأجوبة لملفات PDF والتقارير ومواد المحاضرات." },
    link: "https://www.chatpdf.com",
    category: "Productivity AI",
    badges: ["Popular", "Free", "Students", "Educators"]
  },
  {
    name: { en: "Taskade AI", ar: "تاسكيد AI" },
    description: { en: "Collaborative productivity workspace with AI agents and project execution tools.", ar: "مساحة إنتاجية تعاونية مع وكلاء AI وأدوات تنفيذ المشاريع." },
    link: "https://www.taskade.com",
    category: "Productivity AI",
    badges: ["Paid", "Businesses", "Teams"]
  },
  {
    name: { en: "Mem", ar: "ميم" },
    description: { en: "AI-powered personal knowledge manager for organizing notes and context-aware writing.", ar: "منصة إدارة معرفة شخصية لتنظيم الملاحظات والكتابة السياقية بالذكاء الاصطناعي." },
    link: "https://mem.ai",
    category: "Productivity AI",
    badges: ["Paid", "Professionals", "Researchers"]
  },
  {
    name: { en: "Pipedream", ar: "بايب دريم" },
    description: { en: "Developer-friendly automation platform for APIs, events, and backend AI workflows.", ar: "منصة أتمتة للمطورين لربط APIs والأحداث وتدفقات الخلفية الذكية." },
    link: "https://pipedream.com",
    category: "Agents & Automation",
    badges: ["API", "Developers", "Paid"]
  },
  {
    name: { en: "Lindy", ar: "ليندي" },
    description: { en: "AI automation platform for task-specific agents across email and operations.", ar: "منصة أتمتة لبناء وكلاء مهام للبريد والعمليات." },
    link: "https://www.lindy.ai",
    category: "Agents & Automation",
    badges: ["New", "Paid", "Businesses"]
  },
  {
    name: { en: "Gumloop", ar: "غوملوب" },
    description: { en: "No-code AI workflow builder for operations teams and repetitive processes.", ar: "منصة بدون كود لبناء تدفقات AI لفرق العمليات والمهام المتكررة." },
    link: "https://www.gumloop.com",
    category: "Agents & Automation",
    badges: ["New", "Paid", "Teams"]
  },
  {
    name: { en: "SlidesAI", ar: "سلايدز AI" },
    description: { en: "AI slide generation assistant for turning long text into structured presentations.", ar: "مساعد لإنشاء الشرائح بالذكاء الاصطناعي من النصوص الطويلة إلى عروض منظمة." },
    link: "https://www.slidesai.io",
    category: "Presentation AI",
    badges: ["Paid", "Students", "Educators"]
  },
  {
    name: { en: "Pitch", ar: "بيتش" },
    description: { en: "Team presentation platform with AI features for startup decks and reporting.", ar: "منصة عروض للفرق بميزات AI لعروض الشركات الناشئة والتقارير." },
    link: "https://pitch.com",
    category: "Presentation AI",
    badges: ["Paid", "Teams", "Businesses"]
  },
  {
    name: { en: "ThoughtSpot Sage", ar: "ثوت سبوت سيج" },
    description: { en: "Natural language analytics assistant for enterprise BI and dashboard intelligence.", ar: "مساعد تحليلات بلغة طبيعية لذكاء الأعمال المؤسسي ولوحات البيانات." },
    link: "https://www.thoughtspot.com",
    category: "Data AI",
    badges: ["Paid", "Enterprise", "Businesses"]
  },
  {
    name: { en: "Hex", ar: "هيكس" },
    description: { en: "Collaborative data workspace combining SQL, notebooks, dashboards, and AI analytics.", ar: "مساحة بيانات تعاونية تجمع SQL ودفاتر التحليل ولوحات المعلومات وتحليلات AI." },
    link: "https://hex.tech",
    category: "Data AI",
    badges: ["Paid", "DataTeams", "Developers"]
  },
  {
    name: { en: "Dataiku", ar: "داتايكو" },
    description: { en: "Enterprise AI and analytics platform for model lifecycle, governance, and operations.", ar: "منصة AI وتحليلات مؤسسية لإدارة دورة حياة النماذج والحوكمة والعمليات." },
    link: "https://www.dataiku.com",
    category: "Data AI",
    badges: ["Paid", "Enterprise", "DataTeams"]
  },
  {
    name: { en: "Deepgram", ar: "ديب غرام" },
    description: { en: "Speech-to-text and voice AI API platform for real-time transcription and voice agents.", ar: "منصة API للصوت والنسخ اللحظي لتطبيقات التفريغ ووكلاء الصوت." },
    link: "https://deepgram.com",
    category: "Audio AI",
    badges: ["API", "Developers", "Paid"]
  },
  {
    name: { en: "AssemblyAI", ar: "أسيمبلي AI" },
    description: { en: "Advanced speech AI APIs for transcription, summarization, and audio intelligence.", ar: "واجهات صوت متقدمة للتفريغ والتلخيص وتحليلات الصوت الذكية." },
    link: "https://www.assemblyai.com",
    category: "Audio AI",
    badges: ["API", "Developers", "Paid"]
  },
  {
    name: { en: "PlayHT", ar: "بلاي إتش تي" },
    description: { en: "Text-to-speech and voice generation platform for narrations and multilingual products.", ar: "منصة تحويل النص إلى صوت وتوليد أصوات للتعليق الصوتي والمنتجات متعددة اللغات." },
    link: "https://play.ht",
    category: "Audio AI",
    badges: ["API", "Creators", "Paid"]
  }
];

const fallbackPosts = [
  {
    title: { en: "AI Systems for Production", ar: "أنظمة AI للإنتاج" },
    excerpt: { en: "From prototype demos to reliable products.", ar: "من النموذج الأولي إلى منتج موثوق." },
    date: "2026-03-01",
    file: "ai-production-systems.md",
    fileAr: "ai-production-systems-ar.md"
  },
  {
    title: { en: "Agentic Automation in 2026", ar: "الأتمتة الوكيلة في 2026" },
    excerpt: { en: "How autonomous workflows improve execution speed.", ar: "كيف ترفع التدفقات الذاتية سرعة التنفيذ." },
    date: "2026-02-20",
    file: "agentic-automation-2026.md",
    fileAr: "agentic-automation-2026-ar.md"
  }
];

const fallbackPostContent = {
  en: {
    "ai-production-systems.md": `
# AI Systems for Production

Building AI products requires more than prompt demos.

## Core principles
- Define measurable business outcomes first.
- Use evaluation datasets and quality gates.
- Add monitoring for drift and failure patterns.
- Keep humans in the loop for high-risk outputs.

## Practical stack
- Retrieval (RAG) for grounded responses.
- Workflow orchestration for repeatable execution.
- Observability for latency, cost, and quality.

## Final advice
Ship small, measure continuously, and improve with real usage data.
`,
    "agentic-automation-2026.md": `
# Agentic Automation in 2026

AI agents create leverage when connected to real workflows.

## High-impact use cases
- Operations automation and approvals.
- Customer support triage and response drafting.
- Sales follow-ups and CRM updates.
- Internal knowledge assistants for teams.

## Implementation steps
- Start with one repetitive workflow.
- Define clear triggers, tools, and guardrails.
- Track KPIs: time saved, error rate, response quality.

## Scaling model
After one successful workflow, expand agent patterns across departments.
`
  },
  ar: {
    "ai-production-systems-ar.md": `
# أنظمة الذكاء الاصطناعي للإنتاج

بناء منتجات AI يحتاج هندسة إنتاجية، وليس مجرد تجارب سريعة.

## مبادئ أساسية
- ابدأ بهدف عمل قابل للقياس.
- اعتمد تقييمًا دوريًا للجودة.
- أضف مراقبة للأخطاء والانحراف.
- اجعل الإنسان ضمن الحلقة في الحالات الحساسة.

## بنية عملية
- استرجاع معرفي (RAG) للإجابات الموثقة.
- أوركسترايشين للمهام متعددة الخطوات.
- لوحات قياس للتكلفة والزمن والدقة.

## الخلاصة
النجاح يأتي من نظام قابل للتكرار والتحسين المستمر.
`,
    "agentic-automation-2026-ar.md": `
# الأتمتة الوكيلة في 2026

وكلاء AI ينتقلون من الضجيج إلى قيمة تشغيلية حقيقية.

## أين يظهر الأثر؟
- أتمتة البحث وإعداد التقارير.
- فرز طلبات الدعم والتشغيل تلقائيًا.
- تسريع دورات تطوير البرمجيات والجودة.

## طريقة تنفيذ صحيحة
- ابدأ بتدفق واحد واضح وعالي الأثر.
- صمم الوكيل بمراحل محددة:
  - جمع السياق
  - تخطيط الإجراءات
  - التنفيذ بصلاحيات مضبوطة
  - تقرير النتائج بسجل تتبع

## النتيجة
أفضل الفرق تمزج حكم الإنسان مع التنفيذ الذاتي الذكي.
`,
    "ai-production-systems.md": `
# أنظمة الذكاء الاصطناعي للإنتاج

بناء منتجات AI يحتاج هندسة إنتاجية، وليس مجرد تجارب سريعة.
`,
    "agentic-automation-2026.md": `
# الأتمتة الوكيلة في 2026

وكلاء AI ينتقلون من الضجيج إلى قيمة تشغيلية حقيقية.
`
  }
};

const state = {
  lang: localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANG,
  theme: localStorage.getItem(THEME_KEY) || "dark",
  i18n: fallbackI18nByLang[localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANG] || fallbackI18nByLang.en,
  updates: [],
  tools: [],
  projects: [],
  blogPosts: [],
  activeCategory: "all",
  activeBadge: "all",
  toolSearch: "",
  toolSort: "relevance"
};

const fallbackProjects = [
  {
    name: { en: "Student AI Study Planner", ar: "مخطط دراسة ذكي للطلبة" },
    description: {
      en: "Build an AI planner that creates personalized schedules, revision maps, and adaptive quiz cycles based on weak topics.",
      ar: "إنشاء مخطط دراسة ذكي يضع جدولًا شخصيًا وخطة مراجعة واختبارات تكيفية حسب نقاط الضعف."
    },
    tech: ["LLM", "Calendar API", "Analytics"],
    image: "./assets/project-workflow.svg"
  },
  {
    name: { en: "AI Flashcards Generator", ar: "مولد بطاقات مذاكرة ذكية" },
    description: {
      en: "Turn lecture slides and PDFs into flashcards with spaced repetition and topic-level mastery tracking.",
      ar: "تحويل المحاضرات وملفات PDF إلى بطاقات مراجعة مع تكرار متباعد وتتبع إتقان كل موضوع."
    },
    tech: ["OCR", "NLP", "SRS Engine"],
    image: "./assets/project-toolkit.svg"
  },
  {
    name: { en: "Professor Lesson Co-Pilot", ar: "مساعد إعداد الدروس للأساتذة" },
    description: {
      en: "Generate lesson plans, rubrics, exam blueprints, and quick feedback templates for instructors.",
      ar: "توليد خطط دراسية ومعايير تقييم ومخططات امتحانات وقوالب تغذية راجعة للأساتذة."
    },
    tech: ["RAG", "Prompt Engineering", "Docs"],
    image: "./assets/project-energy.svg"
  },
  {
    name: { en: "Academic Risk Alert Dashboard", ar: "لوحة إنذار مبكر للمخاطر الأكاديمية" },
    description: {
      en: "Detect students at risk using attendance, assignment delay, and quiz trend signals.",
      ar: "اكتشاف الطلبة المعرضين للتعثر عبر مؤشرات الحضور وتأخر الواجبات واتجاه نتائج الاختبارات."
    },
    tech: ["Time-Series", "Scoring", "Dashboard"],
    image: "./assets/project-workflow.svg"
  },
  {
    name: { en: "Smart Shop Inventory Assistant", ar: "مساعد إدارة مخزون ذكي للمحلات" },
    description: {
      en: "Forecast stock demand, prevent shortages, and suggest reorder timing based on sales patterns.",
      ar: "توقع الطلب على المخزون ومنع النقص واقتراح مواعيد إعادة الطلب بناءً على أنماط البيع."
    },
    tech: ["Forecasting", "POS Data", "Alerts"],
    image: "./assets/project-energy.svg"
  },
  {
    name: { en: "WhatsApp Sales Automation Bot", ar: "بوت مبيعات واتساب" },
    description: {
      en: "Automate product Q&A, order capture, delivery status, and post-sale follow-up for small stores.",
      ar: "أتمتة الرد على استفسارات المنتجات واستقبال الطلبات وحالة التوصيل والمتابعة بعد البيع."
    },
    tech: ["WhatsApp API", "Automation", "CRM"],
    image: "./assets/project-toolkit.svg"
  },
  {
    name: { en: "Restaurant AI Ordering Flow", ar: "تدفق طلبات ذكي للمطاعم" },
    description: {
      en: "Create an AI assistant that recommends meals, handles custom requests, and optimizes kitchen queue routing.",
      ar: "بناء مساعد ذكي يقترح الوجبات ويتعامل مع الطلبات المخصصة ويحسن توجيه طابور المطبخ."
    },
    tech: ["Conversational AI", "POS Integration", "Queue Logic"],
    image: "./assets/project-energy.svg"
  },
  {
    name: { en: "Clinic Appointment AI Assistant", ar: "مساعد مواعيد ذكي للعيادات" },
    description: {
      en: "Automate appointment booking, reminders, triage questions, and doctor schedule balancing.",
      ar: "أتمتة حجز المواعيد والتذكير والأسئلة الأولية للفرز وموازنة جداول الأطباء."
    },
    tech: ["NLP", "Scheduling", "Notifications"],
    image: "./assets/project-workflow.svg"
  },
  {
    name: { en: "Company Knowledge Chatbot", ar: "شات بوت معرفة للشركات" },
    description: {
      en: "Use internal documents and SOPs to answer employee questions with role-based access control.",
      ar: "استخدام وثائق الشركة وإجراءات العمل للإجابة على أسئلة الموظفين مع صلاحيات وصول حسب الدور."
    },
    tech: ["RAG", "Vector DB", "RBAC"],
    image: "./assets/project-workflow.svg"
  },
  {
    name: { en: "Invoice & Approval Automation", ar: "أتمتة الفواتير وسير الموافقات" },
    description: {
      en: "Streamline invoice extraction, validation, approval routing, and finance notifications.",
      ar: "تبسيط استخراج بيانات الفواتير والتحقق منها وتوجيه الموافقات وتنبيهات الفريق المالي."
    },
    tech: ["OCR", "Workflow Engine", "Finance Ops"],
    image: "./assets/project-energy.svg"
  },
  {
    name: { en: "Customer Support AI Agent", ar: "وكيل دعم عملاء ذكي" },
    description: {
      en: "Build multilingual first-line support that classifies tickets and drafts contextual responses.",
      ar: "بناء دعم أولي متعدد اللغات يصنف التذاكر ويقترح ردودًا سياقية مناسبة."
    },
    tech: ["Agent Framework", "Helpdesk API", "Intent Routing"],
    image: "./assets/project-toolkit.svg"
  },
  {
    name: { en: "HR CV Screening Assistant", ar: "مساعد فرز السير الذاتية للموارد البشرية" },
    description: {
      en: "Rank candidates by job-fit score and generate interview question packs by competency.",
      ar: "ترتيب المرشحين بدرجة ملاءمة الوظيفة وتوليد حزم أسئلة مقابلات حسب الكفاءات."
    },
    tech: ["NLP", "Scoring Engine", "Recruitment Ops"],
    image: "./assets/project-toolkit.svg"
  },
  {
    name: { en: "Social Content Planner AI", ar: "مخطط محتوى سوشال ذكي" },
    description: {
      en: "Generate weekly content calendars, caption drafts, and platform-specific post formats.",
      ar: "توليد تقويم محتوى أسبوعي ومسودات كابشن وصيغ منشورات مخصصة لكل منصة."
    },
    tech: ["LLM", "Content Workflow", "Brand Voice"],
    image: "./assets/project-workflow.svg"
  },
  {
    name: { en: "Solar Performance Monitoring AI", ar: "ذكاء مراقبة أداء الطاقة الشمسية" },
    description: {
      en: "Detect anomalies in generation output and suggest maintenance actions before failures.",
      ar: "اكتشاف شذوذ الإنتاج واقتراح إجراءات صيانة استباقية قبل حدوث الأعطال."
    },
    tech: ["IoT", "Anomaly Detection", "Energy Analytics"],
    image: "./assets/project-energy.svg"
  },
  {
    name: { en: "School-Parent Communication Bot", ar: "بوت تواصل المدرسة مع أولياء الأمور" },
    description: {
      en: "Automate grade updates, attendance notices, and two-way Q&A between school and parents.",
      ar: "أتمتة تحديث الدرجات والتنبيهات بالحضور وقناة أسئلة وأجوبة بين المدرسة وأولياء الأمور."
    },
    tech: ["Messaging API", "Automation", "Education CRM"],
    image: "./assets/project-toolkit.svg"
  },
  {
    name: { en: "SME Business Insights Copilot", ar: "مساعد تحليلات أعمال للشركات الصغيرة" },
    description: {
      en: "Summarize sales, expenses, and customer trends into weekly executive insights.",
      ar: "تلخيص المبيعات والمصاريف واتجاهات العملاء في رؤى تنفيذية أسبوعية واضحة."
    },
    tech: ["BI", "Data Modeling", "Narrative Reporting"],
    image: "./assets/project-workflow.svg"
  }
];

const services = [
  "services.items.aiAutomation",
  "services.items.aiConsulting",
  "services.items.smartEnergy",
  "services.items.softwareDevelopment",
  "services.items.educationContent"
];

const elements = {
  html: document.documentElement,
  year: document.getElementById("year"),
  lastBuild: document.getElementById("lastBuild"),
  toast: document.getElementById("toast"),
  langToggle: document.getElementById("langToggle"),
  themeToggle: document.getElementById("themeToggle"),
  updatesGrid: document.getElementById("updatesGrid"),
  toolsGrid: document.getElementById("toolsGrid"),
  projectsGrid: document.getElementById("projectsGrid"),
  servicesGrid: document.getElementById("servicesGrid"),
  blogGrid: document.getElementById("blogGrid"),
  blogViewer: document.getElementById("blogViewer"),
  blogContent: document.getElementById("blogContent"),
  closePost: document.getElementById("closePost"),
  emailText: document.getElementById("emailText"),
  copyEmail: document.getElementById("copyEmail"),
  toolSearch: document.getElementById("toolSearch"),
  toolSort: document.getElementById("toolSort"),
  toolCategories: document.getElementById("toolCategories"),
  toolBadges: document.getElementById("toolBadges"),
  toolDetailsModal: document.getElementById("toolDetailsModal"),
  toolDetailsTitle: document.getElementById("toolDetailsTitle"),
  toolDetailsDescription: document.getElementById("toolDetailsDescription"),
  toolDetailsDeep: document.getElementById("toolDetailsDeep"),
  toolDetailsMeta: document.getElementById("toolDetailsMeta"),
  toolDetailsVisit: document.getElementById("toolDetailsVisit"),
  closeToolDetails: document.getElementById("closeToolDetails"),
  palette: document.getElementById("commandPalette"),
  paletteInput: document.getElementById("paletteInput"),
  paletteList: document.getElementById("paletteList"),
  cmdButton: document.getElementById("cmdButton")
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function t(path, fallback = "") {
  const chunks = path.split(".");
  let current = state.i18n;
  for (const chunk of chunks) {
    current = current?.[chunk];
    if (current === undefined) {
      return fallback || path;
    }
  }
  if (typeof current === "string") {
    return current;
  }
  return fallback || path;
}

function pickLangValue(item) {
  if (!item || typeof item !== "object") {
    return "";
  }
  return item[state.lang] || item[DEFAULT_LANG] || "";
}

function formatToolDisplayName(item) {
  const ar = item?.name?.ar || "";
  const en = item?.name?.en || "";
  const localized = pickLangValue(item.name);
  if (state.lang === "ar" && ar && en && ar !== en) {
    return `${ar} (${en})`;
  }
  return localized;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 1600);
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  elements.langToggle.textContent = state.lang === "en" ? "AR" : "EN";
  elements.html.lang = state.lang;
  elements.html.dir = state.lang === "ar" ? "rtl" : "ltr";
  elements.year.textContent = new Date().getFullYear();
  elements.emailText.textContent = EMAIL;
  elements.paletteInput.placeholder = t("commandPalette.placeholder");
  elements.toolSort.value = state.toolSort;
  if (elements.themeToggle) {
    elements.themeToggle.textContent = state.theme === "dark" ? t("theme.dark", "Dark Beige") : t("theme.light", "Light Luxury");
  }
}

function applyTheme() {
  elements.html.dataset.theme = state.theme === "light" ? "light" : "dark";
  if (elements.themeToggle) {
    elements.themeToggle.textContent = state.theme === "dark" ? t("theme.dark", "Dark Beige") : t("theme.light", "Light Luxury");
  }
}

async function loadI18n(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`, { cache: "no-store" });
    if (!response.ok) throw new Error("i18n fetch failed");
    state.i18n = await response.json();
  } catch (error) {
    state.i18n = fallbackI18nByLang[lang] || fallbackI18nByLang.en;
  }
}

async function loadUpdates() {
  try {
    const response = await fetch("./data/updates.json", { cache: "no-store" });
    if (!response.ok) throw new Error("updates fetch failed");
    state.updates = await response.json();
  } catch (error) {
    state.updates = fallbackUpdates;
  }
  renderUpdates();
}

function renderUpdates() {
  elements.updatesGrid.innerHTML = "";
  state.updates.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--stagger", `${index * 45}ms`);
    const title = escapeHtml(pickLangValue(item.title));
    const summary = escapeHtml(pickLangValue(item.summary));
    const category = escapeHtml(item.category);
    const org = escapeHtml(item.organization);
    const date = escapeHtml(item.date);
    card.innerHTML = `
      <div class="card-top">
        <h3>${title}</h3>
        <a class="card-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">${t("common.source")}</a>
      </div>
      <p>${summary}</p>
      <div class="meta">
        <span class="tag">${category}</span>
        <span class="tag">${org}</span>
        <span class="tag">${date}</span>
      </div>
    `;
    elements.updatesGrid.appendChild(card);
  });
  elements.lastBuild.textContent = `${t("footer.lastUpdated")} ${state.updates[0]?.date || "-"}`;
  revealObserver();
}

async function loadTools() {
  try {
    const response = await fetch("./data/tools.json", { cache: "no-store" });
    if (!response.ok) throw new Error("tools fetch failed");
    state.tools = decorateTools(await response.json());
  } catch (error) {
    state.tools = decorateTools(fallbackTools);
  }
  renderToolCategories();
  renderToolBadges();
  renderTools();
}

async function loadProjects() {
  try {
    const response = await fetch("./data/projects.json", { cache: "no-store" });
    if (!response.ok) throw new Error("projects fetch failed");
    state.projects = await response.json();
  } catch (error) {
    state.projects = fallbackProjects;
  }
  renderProjects();
}

function getLocalizedTool(item) {
  const scoreByBadge = { Popular: 10, New: 8, API: 5, Free: 3, Paid: 2, OpenSource: 4 };
  const popularityScore = (item.badges || []).reduce((sum, badge) => sum + (scoreByBadge[badge] || 1), 0);
  return {
    id: item.id || item.name?.en || item.name?.ar || Math.random().toString(36).slice(2),
    slug: item.slug || slugify(item.name?.en || item.name?.ar || item.id),
    nameEn: item.name?.en || "",
    name: pickLangValue(item.name),
    displayName: formatToolDisplayName(item),
    description: pickLangValue(item.description),
    category: item.category,
    link: item.link,
    badges: item.badges || [],
    popularityScore
  };
}

function decorateTools(rawTools) {
  const badgeMap = {
    "ChatGPT": ["Popular", "Paid", "API", "New"],
    "Claude": ["Popular", "Paid", "API"],
    "Gemini": ["Popular", "Paid", "API"],
    "DeepSeek Chat": ["Popular", "Free", "API"],
    "Meta AI": ["New", "Free"],
    "Mistral Le Chat": ["New", "Free", "API"],
    "Cursor": ["Popular", "Paid"],
    "GitHub Copilot": ["Popular", "Paid"],
    "Windsurf Editor": ["New", "Paid"],
    "v0 by Vercel": ["Popular", "Free"],
    "Codeium": ["Free", "Popular"],
    "Replit Agent": ["New", "Paid"],
    "Amazon Q Developer": ["New", "Paid", "API"],
    "Midjourney": ["Popular", "Paid"],
    "DALL-E": ["Popular", "Paid", "API"],
    "Adobe Firefly": ["Popular", "Paid"],
    "Ideogram": ["New", "Free"],
    "Stable Diffusion": ["Popular", "OpenSource", "Free"],
    "Leonardo AI": ["Popular", "Paid"],
    "Canva Magic Studio": ["Popular", "Paid"],
    "Runway": ["Popular", "Paid"],
    "Pika": ["New", "Paid"],
    "Luma Dream Machine": ["New", "Paid"],
    "Synthesia": ["Popular", "Paid"],
    "HeyGen": ["Popular", "Paid"],
    "Descript": ["Popular", "Paid"],
    "Perplexity": ["Popular", "Free"],
    "Elicit": ["Popular", "Free"],
    "Consensus": ["Popular", "Free"],
    "Scite": ["Paid"],
    "Semantic Scholar": ["Free"],
    "Connected Papers": ["Free"],
    "Notion AI": ["Popular", "Paid"],
    "Zapier AI": ["Popular", "Paid", "API"],
    "Microsoft Copilot": ["Popular", "Paid"],
    "ClickUp AI": ["Paid"],
    "Slack AI": ["Paid"],
    "Grammarly AI": ["Popular", "Paid"]
  };

  return rawTools.map((tool, index) => ({
    ...tool,
    id: tool.id || `tool-${index + 1}`,
    badges: tool.badges?.length ? tool.badges : (badgeMap[tool.name?.en] || ["Popular"])
  }));
}

function categoryGuidance(category) {
  const data = {
    en: {
      "AI Chat": "Research, ideation, drafting, reasoning, and daily AI assistant workflows.",
      "Coding AI": "Code generation, refactoring, debugging, tests, documentation, and architecture support.",
      "Image Generation": "Visual design, social media assets, branding, concept art, and marketing creatives.",
      "Video Generation": "Video creation, localization, explainers, and short-form content production.",
      "Research AI": "Academic research, citation-backed answers, trend scanning, and literature review.",
      "Productivity AI": "Task automation, summaries, meeting notes, planning, and team productivity.",
      "Audio AI": "Voice generation, voiceovers, dubbing, podcasts, and multilingual audio workflows.",
      "Agents & Automation": "Building autonomous workflows, AI agents, integrations, and business process automation.",
      "Presentation AI": "Generating decks, reports, visual narratives, and executive-ready storytelling assets.",
      "Data AI": "Predictive analytics, dashboard intelligence, business insights, and data-driven decision support."
    },
    ar: {
      "AI Chat": "للبحث الذكي، توليد الأفكار، صياغة المحتوى، الاستدلال، ومهام المساعد اليومي.",
      "Coding AI": "لتوليد الكود، إعادة الهيكلة، اكتشاف الأخطاء، الاختبارات، التوثيق، ودعم المعمارية.",
      "Image Generation": "للتصميم البصري، محتوى السوشال، الهوية البصرية، الفن المفاهيمي، والإعلانات.",
      "Video Generation": "لإنتاج الفيديو، التوطين، الشروحات، والمحتوى المرئي القصير.",
      "Research AI": "للبحث الأكاديمي، الإجابات الموثقة، تتبع الاتجاهات، ومراجعة الأدبيات.",
      "Productivity AI": "لأتمتة المهام، التلخيص، ملاحظات الاجتماعات، التخطيط، ورفع إنتاجية الفرق.",
      "Audio AI": "لتوليد الصوت، التعليق الاحترافي، الدبلجة، البودكاست، وتدفقات الصوت متعددة اللغات.",
      "Agents & Automation": "لبناء وكلاء ذكيين وتدفقات عمل مستقلة وتكاملات وأتمتة عمليات الأعمال.",
      "Presentation AI": "لإنشاء عروض تقديمية وتقارير وسرد بصري احترافي جاهز للإدارة والعملاء.",
      "Data AI": "للتحليلات التنبؤية، ذكاء لوحات المعلومات، استخلاص الرؤى، ودعم القرارات بالبيانات."
    }
  };
  return data[state.lang]?.[category] || data.en[category] || "";
}

function usageModel(tool) {
  const badges = tool.badges || [];
  if (state.lang === "ar") {
    if (badges.includes("Free") && badges.includes("Paid")) return "نسخة مجانية + خطط مدفوعة متقدمة.";
    if (badges.includes("Free")) return "مجانًا مع خيارات توسع مستقبلية.";
    if (badges.includes("Paid")) return "خدمة مدفوعة باشتراك احترافي.";
    return "نموذج استخدام يعتمد على الخدمة والمزود.";
  }
  if (badges.includes("Free") && badges.includes("Paid")) return "Free tier plus advanced paid plans.";
  if (badges.includes("Free")) return "Free access with optional expansion paths.";
  if (badges.includes("Paid")) return "Paid subscription-based professional service.";
  return "Usage model depends on provider and deployment type.";
}

function usageSteps() {
  if (state.lang === "ar") {
    return [
      "حدد الهدف بوضوح (محتوى، كود، بحث، أو إنتاجية).",
      "جهز مدخلات دقيقة (وصف، بيانات، ملفات، أو أمثلة).",
      "نفّذ تجربة أولية، ثم قيّم النتائج وحسّن البرومبت/الإعدادات.",
      "فعّل التكامل أو الأتمتة لتحقيق قيمة عملية مستمرة."
    ];
  }
  return [
    "Define a clear outcome (content, code, research, or productivity).",
    "Prepare precise inputs (prompt, data, files, or examples).",
    "Run a first iteration, evaluate quality, then refine settings/prompts.",
    "Integrate or automate the workflow for repeatable business value."
  ];
}

function renderToolCategories() {
  const categories = Array.from(new Set(state.tools.map((tool) => tool.category)));
  elements.toolCategories.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = `chip ${state.activeCategory === "all" ? "active" : ""}`;
  allBtn.textContent = t("tools.allCategories");
  allBtn.addEventListener("click", () => {
    state.activeCategory = "all";
    renderToolCategories();
    renderTools();
  });
  elements.toolCategories.appendChild(allBtn);

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `chip ${state.activeCategory === category ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state.activeCategory = category;
      renderToolCategories();
      renderTools();
    });
    elements.toolCategories.appendChild(button);
  });
}

function renderToolBadges() {
  const allBadges = Array.from(new Set(state.tools.flatMap((tool) => tool.badges || [])));
  elements.toolBadges.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = `chip ${state.activeBadge === "all" ? "active" : ""}`;
  allBtn.textContent = t("tools.allBadges");
  allBtn.addEventListener("click", () => {
    state.activeBadge = "all";
    renderToolBadges();
    renderTools();
  });
  elements.toolBadges.appendChild(allBtn);

  allBadges.forEach((badge) => {
    const button = document.createElement("button");
    button.className = `chip ${state.activeBadge === badge ? "active" : ""}`;
    button.textContent = badge;
    button.addEventListener("click", () => {
      state.activeBadge = badge;
      renderToolBadges();
      renderTools();
    });
    elements.toolBadges.appendChild(button);
  });
}

function openToolDetails(tool) {
  elements.toolDetailsTitle.textContent = tool.displayName || tool.name;
  elements.toolDetailsDescription.textContent = tool.description;
  elements.toolDetailsVisit.textContent = t("common.visit");
  elements.toolDetailsVisit.href = tool.link;
  const guide = typeof window.getToolGuide === "function"
    ? window.getToolGuide(tool, state.lang)
    : {
      what: tool.description,
      bestFor: categoryGuidance(tool.category),
      steps: usageSteps(),
      model: usageModel(tool)
    };
  const steps = Array.isArray(guide.steps) && guide.steps.length ? guide.steps : usageSteps();
  elements.toolDetailsDeep.innerHTML = `
    <p class="deep-title">${t("tools.detailWhat")}</p>
    <p>${escapeHtml(guide.what || tool.description)}</p>
    <p class="deep-title">${t("tools.detailBestFor")}</p>
    <p>${escapeHtml(guide.bestFor || categoryGuidance(tool.category))}</p>
    <p class="deep-title">${t("tools.detailHowToUse")}</p>
    <ul>
      <li>${escapeHtml(steps[0])}</li>
      <li>${escapeHtml(steps[1])}</li>
      <li>${escapeHtml(steps[2])}</li>
      <li>${escapeHtml(steps[3])}</li>
    </ul>
    <p class="deep-title">${t("tools.detailModel")}</p>
    <p>${escapeHtml(guide.model || usageModel(tool))}</p>
  `;
  elements.toolDetailsMeta.innerHTML = `
    <span class="tag">${escapeHtml(tool.category)}</span>
    ${(tool.badges || []).map((badge) => `<span class="tag tag-badge">${escapeHtml(badge)}</span>`).join("")}
  `;
  elements.toolDetailsModal.classList.remove("hidden");
}

function closeToolDetails() {
  elements.toolDetailsModal.classList.add("hidden");
}

function renderTools() {
  const query = state.toolSearch.trim().toLowerCase();
  const filtered = state.tools
    .map(getLocalizedTool)
    .filter((tool) => state.activeCategory === "all" || tool.category === state.activeCategory)
    .filter((tool) => state.activeBadge === "all" || (tool.badges || []).includes(state.activeBadge))
    .filter((tool) => !query || `${tool.name} ${tool.description}`.toLowerCase().includes(query));

  if (state.toolSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.toolSort === "popular") {
    filtered.sort((a, b) => b.popularityScore - a.popularityScore);
  } else if (state.toolSort === "newest") {
    filtered.sort((a, b) => (b.badges.includes("New") ? 1 : 0) - (a.badges.includes("New") ? 1 : 0));
  }

  elements.toolsGrid.innerHTML = "";
  if (!filtered.length) {
    elements.toolsGrid.innerHTML = `<article class="card">${escapeHtml(t("tools.noResults"))}</article>`;
    return;
  }

  filtered.forEach((tool, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--stagger", `${index * 35}ms`);
    card.innerHTML = `
      <div class="card-top">
        <h3>${escapeHtml(tool.displayName || tool.name)}</h3>
        <a class="card-link" href="${escapeHtml(tool.link)}" target="_blank" rel="noopener">${t("common.visit")}</a>
      </div>
      <p>${escapeHtml(tool.description)}</p>
      <div class="meta">
        <span class="tag">${escapeHtml(tool.category)}</span>
        ${(tool.badges || []).slice(0, 4).map((badge) => `<span class="tag tag-badge">${escapeHtml(badge)}</span>`).join("")}
      </div>
      <div class="meta">
        <a class="card-link" href="./tools/tool.html?slug=${encodeURIComponent(tool.slug)}">${t("tools.openPage")}</a>
        <button class="card-link tool-details-btn" data-tool-id="${escapeHtml(tool.id)}">${t("tools.viewDetails")}</button>
      </div>
    `;
    elements.toolsGrid.appendChild(card);
  });
  elements.toolsGrid.querySelectorAll(".tool-details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const target = filtered.find((item) => item.id === button.dataset.toolId);
      if (target) openToolDetails(target);
    });
  });
  revealObserver();
}

function renderProjects() {
  elements.projectsGrid.innerHTML = "";
  const projectList = state.projects?.length ? state.projects : fallbackProjects;
  projectList.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--stagger", `${index * 45}ms`);
    const isAr = state.lang === "ar";
    const actions = [];
    if (project.demo) actions.push(`<a class="card-link" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener">${t("common.demo")}</a>`);
    if (project.github) actions.push(`<a class="card-link" href="${escapeHtml(project.github)}" target="_blank" rel="noopener">GitHub</a>`);
    if (project.learn) actions.push(`<a class="card-link" href="${escapeHtml(project.learn)}" target="_blank" rel="noopener">${t("common.learn")}</a>`);
    const actionHtml = actions.length
      ? `<div class="meta">${actions.join("")}</div>`
      : `<div class="meta"><span class="tag">${isAr ? "فكرة مشروع" : "Project Idea"}</span></div>`;
    card.innerHTML = `
      <img src="${escapeHtml(project.image)}" class="project-thumb" alt="${escapeHtml(pickLangValue(project.name))}" loading="lazy">
      <div class="card-top">
        <h3>${escapeHtml(pickLangValue(project.name))}</h3>
      </div>
      <p>${escapeHtml(pickLangValue(project.description))}</p>
      <div class="meta">
        ${project.tech.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
      </div>
      ${actionHtml}
    `;
    elements.projectsGrid.appendChild(card);
  });
  revealObserver();
}

function renderServices() {
  elements.servicesGrid.innerHTML = "";
  services.forEach((key, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--stagger", `${index * 55}ms`);
    card.innerHTML = `<h3>${escapeHtml(t(key + ".title"))}</h3><p>${escapeHtml(t(key + ".description"))}</p>`;
    elements.servicesGrid.appendChild(card);
  });
  revealObserver();
}

function markdownToHtml(content) {
  const escaped = escapeHtml(content);
  const withCode = escaped.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
  return withCode
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^(?!<h|<li|<pre|<\/p|<a)(.+)$/gim, "<p>$1</p>")
    .replace(/<p><li>/g, "<ul><li>")
    .replace(/<\/li><\/p>/g, "</li></ul>")
    .replace(/<p><\/p>/g, "");
}

async function loadBlog() {
  try {
    const response = await fetch("./blog/posts.json", { cache: "no-store" });
    if (!response.ok) throw new Error("posts fetch failed");
    state.blogPosts = await response.json();
  } catch (error) {
    state.blogPosts = fallbackPosts;
  }
  renderBlogCards();
}

function renderBlogCards() {
  elements.blogGrid.innerHTML = "";
  state.blogPosts.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--stagger", `${index * 50}ms`);
    card.innerHTML = `
      <div class="card-top">
        <h3>${escapeHtml(pickLangValue(post.title))}</h3>
        <button class="card-link" data-post-index="${index}">${t("blog.read")}</button>
      </div>
      <p>${escapeHtml(pickLangValue(post.excerpt))}</p>
      <div class="meta"><span class="tag">${escapeHtml(post.date)}</span></div>
    `;
    const button = card.querySelector("button[data-post-index]");
    button.addEventListener("click", () => openPost(post));
    elements.blogGrid.appendChild(card);
  });
  revealObserver();
}

function resolvePostFile(post) {
  if (!post) return "";
  if (typeof post.file === "object") {
    return post.file[state.lang] || post.file[DEFAULT_LANG] || "";
  }
  if (state.lang === "ar" && typeof post.fileAr === "string") return post.fileAr;
  return post.file || "";
}

async function openPost(post) {
  const file = typeof post === "string" ? post : resolvePostFile(post);
  try {
    const response = await fetch(`./blog/${file}`, { cache: "no-store" });
    if (!response.ok) throw new Error("post fetch failed");
    const md = await response.text();
    elements.blogContent.innerHTML = markdownToHtml(md);
    elements.blogViewer.classList.remove("hidden");
    elements.blogViewer.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    const langFallback = fallbackPostContent[state.lang] || fallbackPostContent.en;
    const fallbackMd = langFallback[file] || fallbackPostContent.en[file] || `
# ${state.lang === "ar" ? "مقال تقني" : "Technical Post"}

${state.lang === "ar"
  ? "تعذر تحميل هذا الملف من المصدر، لذلك تم عرض نسخة احتياطية من المحتوى."
  : "This post could not be loaded from source, so a fallback article is shown."}
`;
    elements.blogContent.innerHTML = markdownToHtml(fallbackMd);
    elements.blogViewer.classList.remove("hidden");
    elements.blogViewer.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast(t("blog.loadError"));
  }
}

function closePostViewer() {
  elements.blogViewer.classList.add("hidden");
  elements.blogContent.innerHTML = "";
}

function revealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal:not(.in)").forEach((element) => observer.observe(element));
}

function setupGradientBackground() {
  const canvas = document.getElementById("bgCanvas");
  const context = canvas.getContext("2d");
  const blobs = [
    { x: 0.15, y: 0.2, r: 210, dx: 0.0008, dy: 0.0007, color: "rgba(214, 180, 131, 0.20)" },
    { x: 0.85, y: 0.28, r: 185, dx: -0.0006, dy: 0.0005, color: "rgba(246, 222, 187, 0.17)" },
    { x: 0.5, y: 0.85, r: 240, dx: 0.0005, dy: -0.0003, color: "rgba(158, 122, 82, 0.12)" }
  ];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function frame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    blobs.forEach((blob) => {
      blob.x += blob.dx;
      blob.y += blob.dy;
      if (blob.x > 1 || blob.x < 0) blob.dx *= -1;
      if (blob.y > 1 || blob.y < 0) blob.dy *= -1;
      const gradient = context.createRadialGradient(
        blob.x * canvas.width,
        blob.y * canvas.height,
        0,
        blob.x * canvas.width,
        blob.y * canvas.height,
        blob.r
      );
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(blob.x * canvas.width, blob.y * canvas.height, blob.r, 0, Math.PI * 2);
      context.fill();
    });
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  frame();
}

function setupHeroParallax() {
  const hero = document.querySelector(".hero-main");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 6;
    hero.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
  });
}

function getCommands() {
  return [
    { label: t("commandPalette.commands.updates"), run: () => document.getElementById("updates").scrollIntoView({ behavior: "smooth" }) },
    { label: t("commandPalette.commands.tools"), run: () => document.getElementById("tools").scrollIntoView({ behavior: "smooth" }) },
    { label: t("commandPalette.commands.projects"), run: () => document.getElementById("projects").scrollIntoView({ behavior: "smooth" }) },
    { label: t("commandPalette.commands.switchLanguage"), run: () => toggleLanguage() },
    { label: t("commandPalette.commands.copyEmail"), run: () => copyEmail() },
    { label: t("commandPalette.commands.switchTheme"), run: () => toggleTheme() }
  ];
}

function renderPaletteList(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const commands = getCommands().filter((cmd) => cmd.label.toLowerCase().includes(normalized));
  elements.paletteList.innerHTML = "";

  commands.forEach((command) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = command.label;
    button.addEventListener("click", () => {
      command.run();
      closePalette();
    });
    item.appendChild(button);
    elements.paletteList.appendChild(item);
  });
}

function openPalette() {
  elements.palette.classList.remove("hidden");
  renderPaletteList();
  setTimeout(() => elements.paletteInput.focus(), 20);
}

function closePalette() {
  elements.palette.classList.add("hidden");
  elements.paletteInput.value = "";
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast(t("contact.copySuccess"));
  } catch (error) {
    showToast(t("contact.copyError"));
  }
}

function toggleTheme(forceTheme) {
  state.theme = forceTheme || (state.theme === "dark" ? "light" : "dark");
  localStorage.setItem(THEME_KEY, state.theme);
  applyTheme();
}

async function toggleLanguage(forceLang) {
  state.lang = forceLang || (state.lang === "en" ? "ar" : "en");
  localStorage.setItem(LANGUAGE_KEY, state.lang);
  await loadI18n(state.lang);
  applyTranslations();
  renderUpdates();
  renderToolCategories();
  renderToolBadges();
  renderTools();
  renderProjects();
  renderServices();
  renderBlogCards();
}

function bindEvents() {
  elements.langToggle.addEventListener("click", () => toggleLanguage());
  elements.themeToggle?.addEventListener("click", () => toggleTheme());
  elements.copyEmail.addEventListener("click", copyEmail);
  elements.closePost.addEventListener("click", closePostViewer);
  elements.closeToolDetails.addEventListener("click", closeToolDetails);
  elements.toolSearch.addEventListener("input", (event) => {
    state.toolSearch = event.target.value;
    renderTools();
  });
  elements.toolSort.addEventListener("change", (event) => {
    state.toolSort = event.target.value;
    renderTools();
  });
  elements.cmdButton.addEventListener("click", openPalette);
  elements.toolDetailsModal.addEventListener("click", (event) => {
    if (event.target === elements.toolDetailsModal) closeToolDetails();
  });
  elements.palette.addEventListener("click", (event) => {
    if (event.target === elements.palette) closePalette();
  });
  elements.paletteInput.addEventListener("input", (event) => {
    renderPaletteList(event.target.value);
  });
  document.addEventListener("keydown", (event) => {
    const isCommand = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
    if (isCommand) {
      event.preventDefault();
      openPalette();
    }
    if (event.key === "Escape") {
      closePalette();
      closePostViewer();
      closeToolDetails();
    }
  });
}

async function init() {
  try {
    applyTheme();
    await loadI18n(state.lang);
    applyTranslations();
    await Promise.allSettled([loadUpdates(), loadTools(), loadProjects(), loadBlog()]);
    renderServices();
    setupGradientBackground();
    setupHeroParallax();
    bindEvents();
    revealObserver();
  } catch (error) {
    renderProjects();
    renderServices();
    bindEvents();
    revealObserver();
    showToast("Loaded in safe mode.");
  }
}

init();
