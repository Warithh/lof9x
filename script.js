const EMAIL = "warthmohamed99@gmail.com";
const DEFAULT_LANG = "ar";
const LANGUAGE_KEY = "lof9x_lang";
const THEME_KEY = "lof9x_theme";
document.documentElement.classList.add("js");

const fallbackI18nByLang = {
  en: {
  nav: { updates: "AI Updates", tools: "AI Tools", projects: "Projects", services: "Services", blog: "Insights", contact: "Contact", commandPalette: "Command", theme: "Theme" },
  hero: {
    eyebrow: "Lecturer Â· AI Engineer Â· EdTech Builder",
    title: "Practical AI for classrooms, exams, and real workflows",
    subtitle: "Independent hub by Warith Al-Awadi: curated AI tools, education platforms, and automation you can actually use.",
    ctaUpdates: "Contact me",
    ctaProjects: "View projects",
    sideTitle: "Focus",
    features: { one: "Bilingual AR / EN", two: "Live AI updates", three: "Exam & learning platforms", four: "Applied automation" }
  },
  about: {
    title: "About Warith Al-Awadi",
    subtitle: "University lecturer Â· AI solutions Â· Educational software",
    bio: "Graduate of Computer Network Technologies Engineering and a lecturer at Al-Najaf Engineering Technical College. I build exam platforms, AI-assisted learning tools, and automation that help students and educators move faster with clearer results.",
    cvButton: "Professional CV",
    tags: {
      aiEngineering: "Applied AI",
      automation: "Automation",
      software: "EdTech Platforms",
      energy: "Exam Systems"
    },
    stats: {
      focusValue: "Applied AI",
      focusLabel: "Classroom and production use",
      audienceValue: "Students + Staff",
      audienceLabel: "Colleges, teachers, and learners",
      missionValue: "Ship useful tools",
      missionLabel: "Clear, fast, and maintainable"
    }
  },
  updates: { title: "Latest AI Updates", subtitle: "Curated releases and reports worth watching." },
  tools: {
    title: "AI Tools Directory",
    subtitle: "Hand-picked tools for teaching, coding, and automation.",
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
  projects: { title: "Selected Projects", subtitle: "Independent public work â€” exam prep, AI hubs, and learning tools." },
  services: {
    title: "How I can help",
    subtitle: "Consulting and build work with measurable classroom or ops outcomes.",
    items: {
      aiAutomation: { title: "AI Automation", description: "Turn repetitive teaching and ops tasks into reliable workflows." },
      aiConsulting: { title: "AI Consulting", description: "Practical roadmaps for adopting AI in education and small teams." },
      smartEnergy: { title: "Exam Platforms", description: "Secure practice and assessment experiences for students." },
      softwareDevelopment: { title: "Web Platforms", description: "Modern bilingual sites and tools ready for real users." },
      educationContent: { title: "EdTech Content", description: "Training material and toolkits for students and instructors." }
    }
  },
  blog: { title: "Insights", subtitle: "Short notes on applied AI and teaching with technology.", read: "Read", close: "Close", loadError: "Unable to load post." },
  contact: {
    title: "Contact",
    subtitle: "For teaching tech, AI tools, or collaboration.",
    emailTitle: "Email",
    copyEmail: "Copy email",
    copySuccess: "Email copied.",
    copyError: "Copy failed â€” please copy manually.",
    connectTitle: "Social"
  },
  footer: { lastUpdated: "Last update:" },
  common: { source: "Source", visit: "Visit", demo: "Live", learn: "Learn" },
  commandPalette: {
    placeholder: "Type a command...",
    commands: { updates: "Go to AI Updates", tools: "Go to AI Tools", projects: "Go to Projects", switchLanguage: "Switch language", copyEmail: "Copy email", switchTheme: "Switch theme" }
  },
  theme: { dark: "Dark", light: "Light" }
  },
  ar: {
    nav: { updates: "ØªØ­Ø¯ÙŠØ«Ø§Øª AI", tools: "Ø£Ø¯ÙˆØ§Øª AI", projects: "Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹", services: "Ø§Ù„Ø®Ø¯Ù…Ø§Øª", blog: "Ø±Ø¤Ù‰", contact: "ØªÙˆØ§ØµÙ„", commandPalette: "Ø£ÙˆØ§Ù…Ø±", theme: "Ù…Ø¸Ù‡Ø±" },
    hero: {
      eyebrow: "Ø£Ø³ØªØ§Ø° Ø¬Ø§Ù…Ø¹ÙŠ Â· Ù…Ù‡Ù†Ø¯Ø³ Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Â· Ø¨Ù†Ø§Ø¡ Ù…Ù†ØµØ§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ©",
      title: "Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¹Ù…Ù„ÙŠ Ù„Ù„Ù‚Ø§Ø¹Ø§Øª ÙˆØ§Ù„Ø§Ù…ØªØ­Ø§Ù†Ø§Øª ÙˆØ³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„",
      subtitle: "Ù…Ø±ÙƒØ² Ù…Ø³ØªÙ‚Ù„ Ù„ÙˆØ§Ø±Ø« Ø§Ù„Ø¹ÙˆØ§Ø¯ÙŠ: Ø£Ø¯ÙˆØ§Øª AI Ù…Ø®ØªØ§Ø±Ø©ØŒ Ù…Ù†ØµØ§Øª Ø§Ù…ØªØ­Ø§Ù†Ø§ØªØŒ ÙˆØ£ØªÙ…ØªØ© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙÙˆØ±Ù‹Ø§.",
      ctaUpdates: "ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ",
      ctaProjects: "Ø¹Ø±Ø¶ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹",
      sideTitle: "Ø§Ù„ØªØ±ÙƒÙŠØ²",
      features: { one: "Ø¹Ø±Ø¨ÙŠ / Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ", two: "ØªØ­Ø¯ÙŠØ«Ø§Øª AI Ø­ÙŠØ©", three: "Ù…Ù†ØµØ§Øª Ø§Ù…ØªØ­Ø§Ù†Ø§Øª ÙˆØªØ¹Ù„Ù‘Ù…", four: "Ø£ØªÙ…ØªØ© ØªØ·Ø¨ÙŠÙ‚ÙŠØ©" }
    },
    about: {
      title: "Ø¹Ù† ÙˆØ§Ø±Ø« Ø§Ù„Ø¹ÙˆØ§Ø¯ÙŠ",
      subtitle: "Ø£Ø³ØªØ§Ø° Ø¬Ø§Ù…Ø¹ÙŠ Â· Ø­Ù„ÙˆÙ„ AI Â· Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ©",
      bio: "Ø®Ø±ÙŠØ¬ Ù‡Ù†Ø¯Ø³Ø© ØªÙ‚Ù†ÙŠØ§Øª Ø´Ø¨ÙƒØ§Øª Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ØŒ ÙˆØ£Ø³ØªØ§Ø° ÙÙŠ Ø§Ù„ÙƒÙ„ÙŠØ© Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© Ø§Ù„Ù†Ø¬Ù. Ø£Ø¨Ù†ÙŠ Ù…Ù†ØµØ§Øª Ø§Ù…ØªØ­Ø§Ù†Ø§Øª ÙˆØ£Ø¯ÙˆØ§Øª ØªØ¹Ù„Ù‘Ù… Ù…Ø¯Ø¹ÙˆÙ…Ø© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ£ØªÙ…ØªØ© ØªØ³Ø§Ø¹Ø¯ Ø§Ù„Ø·Ù„Ø¨Ø© ÙˆØ§Ù„Ø£Ø³Ø§ØªØ°Ø© Ø¹Ù„Ù‰ Ø¥Ù†Ø¬Ø§Ø² Ø£ÙˆØ¶Ø­ ÙˆØ£Ø³Ø±Ø¹.",
      cvButton: "Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ù…Ù‡Ù†ÙŠØ©",
      tags: {
        aiEngineering: "Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ØªØ·Ø¨ÙŠÙ‚ÙŠ",
        automation: "Ø£ØªÙ…ØªØ©",
        software: "Ù…Ù†ØµØ§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ©",
        energy: "Ø£Ù†Ø¸Ù…Ø© Ø§Ù…ØªØ­Ø§Ù†Ø§Øª"
      },
      stats: {
        focusValue: "AI ØªØ·Ø¨ÙŠÙ‚ÙŠ",
        focusLabel: "Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¯Ø§Ø®Ù„ Ø§Ù„Ù‚Ø§Ø¹Ø© ÙˆØ§Ù„Ø¥Ù†ØªØ§Ø¬",
        audienceValue: "Ø·Ù„Ø¨Ø© + ÙƒØ§Ø¯Ø±",
        audienceLabel: "ÙƒÙ„ÙŠØ§Øª ÙˆØ£Ø³Ø§ØªØ°Ø© ÙˆÙ…ØªØ¹Ù„Ù…ÙˆÙ†",
        missionValue: "Ø£Ø¯ÙˆØ§Øª Ù…ÙÙŠØ¯Ø©",
        missionLabel: "ÙˆØ§Ø¶Ø­Ø© ÙˆØ³Ø±ÙŠØ¹Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØµÙŠØ§Ù†Ø©"
      }
    },
    updates: { title: "Ø¢Ø®Ø± ØªØ­Ø¯ÙŠØ«Ø§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ", subtitle: "Ø¥ØµØ¯Ø§Ø±Ø§Øª ÙˆØªÙ‚Ø§Ø±ÙŠØ± Ù…Ø®ØªØ§Ø±Ø© ØªØ³ØªØ­Ù‚ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø©." },
    tools: {
      title: "Ø¯Ù„ÙŠÙ„ Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
      subtitle: "Ø£Ø¯ÙˆØ§Øª Ù…Ø®ØªØ§Ø±Ø© Ù„Ù„ØªØ¯Ø±ÙŠØ³ ÙˆØ§Ù„Ø¨Ø±Ù…Ø¬Ø© ÙˆØ§Ù„Ø£ØªÙ…ØªØ©.",
      searchPlaceholder: "Ø§Ø¨Ø­Ø« Ø¹Ù† Ø£Ø¯Ø§Ø©...",
      allCategories: "ÙƒÙ„ Ø§Ù„ÙØ¦Ø§Øª",
      allBadges: "ÙƒÙ„ Ø§Ù„Ø´Ø§Ø±Ø§Øª",
      sortLabel: "Ø§Ù„ØªØ±ØªÙŠØ¨:",
      sortRelevance: "Ø§Ù„Ø£ÙƒØ«Ø± ØµÙ„Ø©",
      sortPopular: "Ø§Ù„Ø£ÙƒØ«Ø± Ø´Ù‡Ø±Ø©",
      sortNewest: "Ø§Ù„Ø£Ø­Ø¯Ø«",
      sortName: "Ø§Ù„Ø§Ø³Ù…",
      viewDetails: "Ø§Ù„ØªÙØ§ØµÙŠÙ„",
      openPage: "ØµÙØ­Ø© Ø§Ù„Ø£Ø¯Ø§Ø©",
      closeDetails: "Ø¥ØºÙ„Ø§Ù‚",
      detailWhat: "Ù…Ø§Ø°Ø§ ØªÙØ¹Ù„ Ø§Ù„Ø£Ø¯Ø§Ø©ØŸ",
      detailBestFor: "Ø£ÙØ¶Ù„ Ø§Ø³ØªØ®Ø¯Ø§Ù…",
      detailHowToUse: "Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ù‚ØªØ±Ø­Ø©",
      detailModel: "Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…",
      noResults: "Ù„Ø§ ØªÙˆØ¬Ø¯ Ù†ØªØ§Ø¦Ø¬ Ù…Ø·Ø§Ø¨Ù‚Ø©."
    },
    projects: { title: "Ù…Ø´Ø§Ø±ÙŠØ¹ Ù…Ø®ØªØ§Ø±Ø©", subtitle: "Ø£Ø¹Ù…Ø§Ù„ Ø¹Ø§Ù…Ø© Ù…Ø³ØªÙ‚Ù„Ø© â€” ØªØ­Ø¶ÙŠØ± Ø§Ù…ØªØ­Ø§Ù†Ø§ØªØŒ Ù…Ø±Ø§ÙƒØ² AIØŒ ÙˆØ£Ø¯ÙˆØ§Øª ØªØ¹Ù„Ù‘Ù…." },
    services: {
      title: "ÙƒÙŠÙ Ø£Ø³Ø§Ø¹Ø¯Ùƒ",
      subtitle: "Ø§Ø³ØªØ´Ø§Ø±Ø© ÙˆØªÙ†ÙÙŠØ° Ø¨Ù†ØªØ§Ø¦Ø¬ Ù…Ù„Ù…ÙˆØ³Ø© ÙÙŠ Ø§Ù„ØªØ¹Ù„ÙŠÙ… Ø£Ùˆ Ø§Ù„ØªØ´ØºÙŠÙ„.",
      items: {
        aiAutomation: { title: "Ø£ØªÙ…ØªØ© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ", description: "ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ù‡Ø§Ù… Ø§Ù„ØªØ¯Ø±ÙŠØ³ÙŠØ© ÙˆØ§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ù…ØªÙƒØ±Ø±Ø© Ø¥Ù„Ù‰ ØªØ¯ÙÙ‚Ø§Øª Ù…ÙˆØ«ÙˆÙ‚Ø©." },
        aiConsulting: { title: "Ø§Ø³ØªØ´Ø§Ø±Ø§Øª AI", description: "Ø®Ø§Ø±Ø·Ø© Ø·Ø±ÙŠÙ‚ Ø¹Ù…Ù„ÙŠØ© Ù„ØªØ¨Ù†Ù‘ÙŠ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙÙŠ Ø§Ù„ØªØ¹Ù„ÙŠÙ… ÙˆØ§Ù„ÙØ±Ù‚ Ø§Ù„ØµØºÙŠØ±Ø©." },
        smartEnergy: { title: "Ù…Ù†ØµØ§Øª Ø§Ù…ØªØ­Ø§Ù†Ø§Øª", description: "ØªØ¬Ø§Ø±Ø¨ ØªØ¯Ø±ÙŠØ¨ ÙˆØªÙ‚ÙŠÙŠÙ… Ø¢Ù…Ù†Ø© ÙˆÙˆØ§Ø¶Ø­Ø© Ù„Ù„Ø·Ù„Ø¨Ø©." },
        softwareDevelopment: { title: "Ù…Ù†ØµØ§Øª ÙˆÙŠØ¨", description: "Ù…ÙˆØ§Ù‚Ø¹ ÙˆØ£Ø¯ÙˆØ§Øª Ø­Ø¯ÙŠØ«Ø© Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ù„ØºØ© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ." },
        educationContent: { title: "Ù…Ø­ØªÙˆÙ‰ ØªØ¹Ù„ÙŠÙ…ÙŠ ØªÙ‚Ù†ÙŠ", description: "Ù…ÙˆØ§Ø¯ ØªØ¯Ø±ÙŠØ¨ ÙˆØ£Ø¯ÙˆØ§Øª Ù…Ø³Ø§Ø¹Ø¯Ø© Ù„Ù„Ø·Ù„Ø¨Ø© ÙˆØ§Ù„Ø£Ø³Ø§ØªØ°Ø©." }
      }
    },
    blog: { title: "Ø±Ø¤Ù‰", subtitle: "Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ù‚ØµÙŠØ±Ø© Ø¹Ù† AI Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ÙŠ ÙˆØ§Ù„ØªØ¹Ù„ÙŠÙ… Ø¨Ø§Ù„ØªÙ‚Ù†ÙŠØ©.", read: "Ù‚Ø±Ø§Ø¡Ø©", close: "Ø¥ØºÙ„Ø§Ù‚", loadError: "ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ù‚Ø§Ù„." },
    contact: {
      title: "ØªÙˆØ§ØµÙ„",
      subtitle: "Ù„Ù„ØªØ¹Ù„ÙŠÙ… Ø§Ù„ØªÙ‚Ù†ÙŠ Ø£Ùˆ Ø£Ø¯ÙˆØ§Øª AI Ø£Ùˆ Ø§Ù„ØªØ¹Ø§ÙˆÙ†.",
      emailTitle: "Ø§Ù„Ø¨Ø±ÙŠØ¯",
      copyEmail: "Ù†Ø³Ø® Ø§Ù„Ø¨Ø±ÙŠØ¯",
      copySuccess: "ØªÙ… Ù†Ø³Ø® Ø§Ù„Ø¨Ø±ÙŠØ¯.",
      copyError: "ØªØ¹Ø°Ø± Ø§Ù„Ù†Ø³Ø® â€” Ø§Ù†Ø³Ø®Ù‡ ÙŠØ¯ÙˆÙŠÙ‹Ø§.",
      connectTitle: "Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠ"
    },
    footer: { lastUpdated: "Ø¢Ø®Ø± ØªØ­Ø¯ÙŠØ«:" },
    common: { source: "Ø§Ù„Ù…ØµØ¯Ø±", visit: "Ø²ÙŠØ§Ø±Ø©", demo: "Ù…Ø¨Ø§Ø´Ø±", learn: "ØªØ¹Ù„Ù‘Ù…" },
    commandPalette: {
      placeholder: "Ø§ÙƒØªØ¨ Ø£Ù…Ø±Ù‹Ø§...",
      commands: { updates: "Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¥Ù„Ù‰ Ø§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª", tools: "Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¯ÙˆØ§Øª", projects: "Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹", switchLanguage: "ØªØ¨Ø¯ÙŠÙ„ Ø§Ù„Ù„ØºØ©", copyEmail: "Ù†Ø³Ø® Ø§Ù„Ø¨Ø±ÙŠØ¯", switchTheme: "ØªØ¨Ø¯ÙŠÙ„ Ø§Ù„Ù…Ø¸Ù‡Ø±" }
    },
    theme: { dark: "Ø¯Ø§ÙƒÙ†", light: "ÙØ§ØªØ­" }
  }
};

const fallbackUpdates = [
  {
    title: { en: "OpenAI platform update", ar: "ØªØ­Ø¯ÙŠØ« Ù…Ù†ØµØ© OpenAI" },
    summary: { en: "Major improvements in model workflows and tooling.", ar: "ØªØ­Ø³ÙŠÙ†Ø§Øª ÙƒØ¨ÙŠØ±Ø© ÙÙŠ ØªØ¯ÙÙ‚Ø§Øª Ø¹Ù…Ù„ Ø§Ù„Ù†Ù…Ø§Ø°Ø¬ ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª." },
    organization: "OpenAI",
    date: "2026",
    category: "Platform",
    link: "https://openai.com"
  }
];

const fallbackTools = [
  {
    name: { en: "ChatGPT", ar: "Ø´Ø§Øª Ø¬ÙŠ Ø¨ÙŠ ØªÙŠ" },
    description: { en: "All-in-one AI assistant for writing, coding, analysis, voice interaction, and agentic workflows.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø´Ø§Ù…Ù„ Ù„Ù„ÙƒØªØ§Ø¨Ø© ÙˆØ§Ù„Ø¨Ø±Ù…Ø¬Ø© ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„ ÙˆØ§Ù„ØªÙØ§Ø¹Ù„ Ø§Ù„ØµÙˆØªÙŠ ÙˆØ¨Ù†Ø§Ø¡ ØªØ¯ÙÙ‚Ø§Øª Ø¹Ù…Ù„ Ø°ÙƒÙŠØ©." },
    link: "https://chatgpt.com",
    category: "AI Chat"
  },
  {
    name: { en: "Claude", ar: "ÙƒÙ„ÙˆØ¯" },
    description: { en: "Strong long-context assistant for deep reasoning, document analysis, and professional writing.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ù‚ÙˆÙŠ ÙÙŠ ÙÙ‡Ù… Ø§Ù„Ø³ÙŠØ§Ù‚ Ø§Ù„Ø·ÙˆÙŠÙ„ ÙˆØ§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ ÙˆØªØ­Ù„ÙŠÙ„ Ø§Ù„ÙˆØ«Ø§Ø¦Ù‚ ÙˆØ§Ù„ÙƒØªØ§Ø¨Ø© Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠØ©." },
    link: "https://claude.ai",
    category: "AI Chat"
  },
  {
    name: { en: "Gemini", ar: "Ø¬ÙŠÙ…Ù†Ø§ÙŠ" },
    description: { en: "Google's multimodal AI platform for chat, reasoning, coding, and workspace productivity.", ar: "Ù…Ù†ØµØ© Ø¬ÙˆØ¬Ù„ Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„ÙˆØ³Ø§Ø¦Ø· Ù„Ù„Ù…Ø­Ø§Ø¯Ø«Ø© ÙˆØ§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ ÙˆØ§Ù„Ø¨Ø±Ù…Ø¬Ø© ÙˆØ§Ù„Ø¥Ù†ØªØ§Ø¬ÙŠØ©." },
    link: "https://gemini.google.com",
    category: "AI Chat"
  },
  {
    name: { en: "Perplexity Assistant", ar: "Ø¨ÙŠØ±Ø¨Ù„ÙƒØ³ÙŠØªÙŠ Ø£Ø³ÙŠØ³ØªÙ†Øª" },
    description: { en: "AI assistant with web-backed answers and references for accurate knowledge retrieval.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø°ÙƒÙŠ ÙŠÙ‚Ø¯Ù… Ø¥Ø¬Ø§Ø¨Ø§Øª Ù…Ø¯Ø¹ÙˆÙ…Ø© Ø¨Ø§Ù„ÙˆÙŠØ¨ Ù…Ø¹ Ù…Ø±Ø§Ø¬Ø¹ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…Ø¹Ø±ÙØ© Ø£Ø¯Ù‚." },
    link: "https://www.perplexity.ai",
    category: "AI Chat"
  },
  {
    name: { en: "Cursor", ar: "ÙƒÙŠØ±Ø³Ø±" },
    description: { en: "AI-native code editor for pair programming, refactoring, debugging, and large codebase navigation.", ar: "Ù…Ø­Ø±Ø± Ø¨Ø±Ù…Ø¬ÙŠ Ù…Ø¯Ø¹ÙˆÙ… Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ù„Ø¨Ø±Ù…Ø¬Ø© Ø§Ù„Ø«Ù†Ø§Ø¦ÙŠØ© ÙˆØ¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„Ø© ÙˆØªØªØ¨Ø¹ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„ÙƒØ¨ÙŠØ±Ø©." },
    link: "https://cursor.com",
    category: "Coding AI"
  },
  {
    name: { en: "GitHub Copilot", ar: "Ø¬ÙŠØª Ù‡Ø¨ ÙƒÙˆØ¨Ø§ÙŠÙ„ÙˆØª" },
    description: { en: "AI coding companion inside IDEs for suggestions, test generation, and pull request assistance.", ar: "Ù…Ø±Ø§ÙÙ‚ Ø¨Ø±Ù…Ø¬ÙŠ Ø¯Ø§Ø®Ù„ Ø¨ÙŠØ¦Ø§Øª Ø§Ù„ØªØ·ÙˆÙŠØ± Ù„ØªÙˆÙ„ÙŠØ¯ Ø§Ù„Ø§Ù‚ØªØ±Ø§Ø­Ø§Øª ÙˆØ§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø© ÙÙŠ Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ø¯Ù…Ø¬." },
    link: "https://github.com/features/copilot",
    category: "Coding AI"
  },
  {
    name: { en: "v0 by Vercel", ar: "ÙÙŠ ØµÙØ± Ù…Ù† ÙÙŠØ±Ø³Ù„" },
    description: { en: "Generates modern UI components and front-end code from prompts with developer-ready output.", ar: "ÙŠÙ†Ø´Ø¦ Ù…ÙƒÙˆÙ†Ø§Øª ÙˆØ§Ø¬Ù‡Ø§Øª Ø­Ø¯ÙŠØ«Ø© ÙˆÙƒÙˆØ¯ ÙˆØ§Ø¬Ù‡Ø§Øª Ø£Ù…Ø§Ù…ÙŠØ© Ù…Ù† Ø§Ù„Ù†ØµÙˆØµ Ù…Ø¹ Ù…Ø®Ø±Ø¬Ø§Øª Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù…Ø·ÙˆØ±." },
    link: "https://v0.dev",
    category: "Coding AI"
  },
  {
    name: { en: "Midjourney", ar: "Ù…ÙŠØ¯Ø¬ÙˆØ±Ù†ÙŠ" },
    description: { en: "Premium image generator for concept art, branding visuals, and high-fidelity creative assets.", ar: "Ù…ÙˆÙ„Ø¯ ØµÙˆØ± Ø§Ø­ØªØ±Ø§ÙÙŠ Ù„Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…ÙØ§Ù‡ÙŠÙ…ÙŠ ÙˆØ§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ© ÙˆØ¥Ù†ØªØ§Ø¬ Ø£ØµÙˆÙ„ Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø©." },
    link: "https://www.midjourney.com",
    category: "Image Generation"
  },
  {
    name: { en: "DALL-E", ar: "Ø¯Ø§Ù„ Ø¥ÙŠ" },
    description: { en: "Image generation and editing for product mockups, illustrations, and visual storytelling.", ar: "ØªÙˆÙ„ÙŠØ¯ ÙˆØªØ­Ø±ÙŠØ± Ø§Ù„ØµÙˆØ± Ù„Ù„Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ø£ÙˆÙ„ÙŠØ© Ù„Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØ§Ù„Ø±Ø³ÙˆÙ… Ø§Ù„ØªÙˆØ¶ÙŠØ­ÙŠØ© ÙˆØ§Ù„Ø³Ø±Ø¯ Ø§Ù„Ø¨ØµØ±ÙŠ." },
    link: "https://openai.com/dall-e",
    category: "Image Generation"
  },
  {
    name: { en: "Runway", ar: "Ø±Ø§Ù†ÙˆØ§ÙŠ" },
    description: { en: "AI video suite for text-to-video, image-to-video, and cinematic creative production.", ar: "Ù…Ù†ØµØ© ÙÙŠØ¯ÙŠÙˆ Ø°ÙƒÙŠØ© Ù„ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù†Øµ Ø£Ùˆ Ø§Ù„ØµÙˆØ±Ø© Ø¥Ù„Ù‰ ÙÙŠØ¯ÙŠÙˆ ÙˆØ¥Ù†ØªØ§Ø¬ Ù…Ø´Ø§Ù‡Ø¯ Ø§Ø­ØªØ±Ø§ÙÙŠØ©." },
    link: "https://runwayml.com",
    category: "Video Generation"
  },
  {
    name: { en: "Perplexity", ar: "Ø¨ÙŠØ±Ø¨Ù„ÙƒØ³ÙŠØªÙŠ" },
    description: { en: "Research answer engine with citations, ideal for technical discovery and trend monitoring.", ar: "Ù…Ø­Ø±Ùƒ Ø¨Ø­Ø« ÙˆØ¥Ø¬Ø§Ø¨Ø§Øª Ù…Ø¹ Ù…ØµØ§Ø¯Ø± Ù…ÙˆØ«Ù‚Ø© Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ø¨Ø­Ø« Ø§Ù„ØªÙ‚Ù†ÙŠ ÙˆÙ…ØªØ§Ø¨Ø¹Ø© Ø§Ù„Ù…Ø³ØªØ¬Ø¯Ø§Øª." },
    link: "https://www.perplexity.ai",
    category: "Research AI"
  },
  {
    name: { en: "Notion AI", ar: "Ù†ÙˆØ´Ù† AI" },
    description: { en: "Productivity assistant for notes, documentation, summaries, and collaborative knowledge management.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø¥Ù†ØªØ§Ø¬ÙŠØ© Ù„Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª ÙˆØ§Ù„ÙˆØ«Ø§Ø¦Ù‚ ÙˆØ§Ù„ØªÙ„Ø®ÙŠØµ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„ØªØ¹Ø§ÙˆÙ†ÙŠØ©." },
    link: "https://www.notion.so/product/ai",
    category: "Productivity AI"
  },
  {
    name: { en: "Zapier AI", ar: "Ø²Ø§Ø¨ÙŠØ± AI" },
    description: { en: "Automates business workflows with AI actions, app integrations, and trigger-based execution.", ar: "Ø£ØªÙ…ØªØ© Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø¹Ø¨Ø± ØªÙƒØ§Ù…Ù„ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆØªÙ†ÙÙŠØ° Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª Ø°ÙƒÙŠØ© Ø¨Ø­Ø³Ø¨ Ø§Ù„Ù…Ø­ÙØ²Ø§Øª." },
    link: "https://zapier.com/ai",
    category: "Productivity AI"
  },
  {
    name: { en: "NotebookLM", ar: "Ù†ÙˆØªØ¨ÙˆÙƒ Ø¥Ù„ Ø¥Ù…" },
    description: { en: "Research and study assistant that turns your sources into grounded summaries, Q&A, and audio overviews.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø¨Ø­Ø« ÙˆØ¯Ø±Ø§Ø³Ø© ÙŠØ­ÙˆÙ„ Ù…ØµØ§Ø¯Ø±Ùƒ Ø¥Ù„Ù‰ ØªÙ„Ø®ÙŠØµØ§Øª Ù…ÙˆØ«Ù‚Ø© ÙˆØ£Ø³Ø¦Ù„Ø© ÙˆØ£Ø¬ÙˆØ¨Ø© ÙˆÙ…Ù„Ø®ØµØ§Øª ØµÙˆØªÙŠØ©." },
    link: "https://notebooklm.google.com",
    category: "Research AI"
  },
  {
    name: { en: "Grok", ar: "ØºØ±ÙˆÙƒ" },
    description: { en: "Real-time conversational assistant connected to live information and multimodal reasoning workflows.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ù…Ø­Ø§Ø¯Ø«Ø© Ø¨Ø²Ù…Ù† Ø­Ù‚ÙŠÙ‚ÙŠ Ù…ØªØµÙ„ Ø¨Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø­ÙŠØ© ÙˆÙŠØ¯Ø¹Ù… Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ù…ØªØ¹Ø¯Ø¯ Ø§Ù„ÙˆØ³Ø§Ø¦Ø·." },
    link: "https://grok.com",
    category: "AI Chat"
  },
  {
    name: { en: "n8n", ar: "Ø¥Ù†8Ø¥Ù†" },
    description: { en: "Open-source workflow automation platform to build AI agents and integrate tools across your stack.", ar: "Ù…Ù†ØµØ© Ø£ØªÙ…ØªØ© ØªØ¯ÙÙ‚Ø§Øª Ø¹Ù…Ù„ Ù…ÙØªÙˆØ­Ø© Ø§Ù„Ù…ØµØ¯Ø± Ù„Ø¨Ù†Ø§Ø¡ ÙˆÙƒÙ„Ø§Ø¡ AI ÙˆØ±Ø¨Ø· Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø¹Ø¨Ø± Ù…Ù†Ø¸ÙˆÙ…ØªÙƒ Ø§Ù„ØªÙ‚Ù†ÙŠØ©." },
    link: "https://n8n.io",
    category: "Agents & Automation"
  },
  {
    name: { en: "Gamma", ar: "ØºØ§Ù…Ø§" },
    description: { en: "AI presentation creator for pitch decks, reports, and visual storytelling in minutes.", ar: "Ø£Ø¯Ø§Ø© Ø¹Ø±ÙˆØ¶ ØªÙ‚Ø¯ÙŠÙ…ÙŠØ© Ø°ÙƒÙŠØ© Ù„Ø¨Ù†Ø§Ø¡ Ø¹Ø±ÙˆØ¶ Ø§Ù„Ù…Ø³ØªØ«Ù…Ø±ÙŠÙ† ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ± ÙˆØ§Ù„Ø³Ø±Ø¯ Ø§Ù„Ø¨ØµØ±ÙŠ Ø®Ù„Ø§Ù„ Ø¯Ù‚Ø§Ø¦Ù‚." },
    link: "https://gamma.app",
    category: "Presentation AI"
  },
  {
    name: { en: "Power BI Copilot", ar: "Ø¨Ø§ÙˆØ± Ø¨ÙŠ Ø¢ÙŠ ÙƒÙˆØ¨Ø§ÙŠÙ„ÙˆØª" },
    description: { en: "Natural-language analytics assistant to build dashboards, insights, and executive reports faster.", ar: "Ù…Ø³Ø§Ø¹Ø¯ ØªØ­Ù„ÙŠÙ„Ø§Øª Ø¨Ø§Ù„Ù„ØºØ© Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ© Ù„Ø¨Ù†Ø§Ø¡ Ù„ÙˆØ­Ø§Øª Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØ§Ø³ØªØ®Ø±Ø§Ø¬ Ø±Ø¤Ù‰ ÙˆØªÙ‚Ø§Ø±ÙŠØ± ØªÙ†ÙÙŠØ°ÙŠØ© Ø¨Ø³Ø±Ø¹Ø©." },
    link: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
    category: "Data AI"
  },
  {
    name: { en: "Character.AI", ar: "ÙƒØ§Ø±ÙƒØªØ± AI" },
    description: { en: "Role-based conversational platform for interactive dialogue and persona-driven AI chats.", ar: "Ù…Ù†ØµØ© Ù…Ø­Ø§Ø¯Ø«Ø§Øª ØªØ¹ØªÙ…Ø¯ Ø§Ù„Ø´Ø®ØµÙŠØ§Øª Ù„Ù„Ø£Ø¯ÙˆØ§Ø± Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ© ÙˆØ­ÙˆØ§Ø±Ø§Øª AI Ø§Ù„Ù…ÙˆØ¬Ù‡Ø© Ø¨Ø§Ù„Ø´Ø®ØµÙŠØ©." },
    link: "https://character.ai",
    category: "AI Chat",
    badges: ["Popular", "Free", "Students"]
  },
  {
    name: { en: "Pi by Inflection", ar: "Ø¨Ø§ÙŠ Ù…Ù† Ø¥Ù†ÙÙ„ÙƒØ´Ù†" },
    description: { en: "Personal conversational AI assistant focused on supportive dialogue and daily productivity.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ù…Ø­Ø§Ø¯Ø«Ø© Ø´Ø®ØµÙŠ ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ø­ÙˆØ§Ø± Ø§Ù„Ø¯Ø§Ø¹Ù… ÙˆØ§Ù„Ø¥Ù†ØªØ§Ø¬ÙŠØ© Ø§Ù„ÙŠÙˆÙ…ÙŠØ©." },
    link: "https://pi.ai",
    category: "AI Chat",
    badges: ["Free", "Students"]
  },
  {
    name: { en: "Tabnine", ar: "ØªØ§Ø¨ Ù†Ø§ÙŠÙ†" },
    description: { en: "AI coding assistant for secure code completion and enterprise development teams.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø¨Ø±Ù…Ø¬ÙŠ Ø°ÙƒÙŠ Ù„Ù„Ø¥ÙƒÙ…Ø§Ù„ Ø§Ù„Ø¢Ù…Ù† Ù„Ù„ÙƒÙˆØ¯ Ø¯Ø§Ø®Ù„ ÙØ±Ù‚ Ø§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠØ©." },
    link: "https://www.tabnine.com",
    category: "Coding AI",
    badges: ["Paid", "Developers", "Enterprise"]
  },
  {
    name: { en: "Sourcegraph Cody", ar: "ÙƒÙˆØ¯ÙŠ Ù…Ù† Ø³ÙˆØ±Ø³ ØºØ±Ø§Ù" },
    description: { en: "Codebase-aware assistant for large repositories and cross-file engineering tasks.", ar: "Ù…Ø³Ø§Ø¹Ø¯ ÙˆØ§Ø¹Ù Ø¨Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ù„Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ø§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø© ÙˆÙ…Ù‡Ø§Ù… Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø¹Ø¨Ø± Ù…Ù„ÙØ§Øª Ù…ØªØ¹Ø¯Ø¯Ø©." },
    link: "https://sourcegraph.com/cody",
    category: "Coding AI",
    badges: ["Paid", "Developers"]
  },
  {
    name: { en: "Aider", ar: "Ø£ÙŠØ¯Ø±" },
    description: { en: "Terminal-first AI pair programmer that edits real project files conversationally.", ar: "Ù…Ø±Ø§ÙÙ‚ Ø¨Ø±Ù…Ø¬ÙŠ Ø¹Ø¨Ø± Ø§Ù„Ø·Ø±ÙÙŠØ© ÙŠØ¹Ø¯Ù„ Ù…Ù„ÙØ§Øª Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙØ¹Ù„ÙŠÙ‹Ø§ Ø¹Ø¨Ø± Ø§Ù„Ù…Ø­Ø§Ø¯Ø«Ø©." },
    link: "https://aider.chat",
    category: "Coding AI",
    badges: ["OpenSource", "Developers", "Popular"]
  },
  {
    name: { en: "Continue", ar: "ÙƒÙˆÙ†ØªÙŠÙ†ÙŠÙˆ" },
    description: { en: "Open-source IDE extension for AI-assisted coding with flexible model backends.", ar: "Ø¥Ø¶Ø§ÙØ© Ù…ÙØªÙˆØ­Ø© Ø§Ù„Ù…ØµØ¯Ø± Ù„Ø¨ÙŠØ¦Ø§Øª Ø§Ù„ØªØ·ÙˆÙŠØ± ØªØ¯Ø¹Ù… Ø§Ù„Ø¨Ø±Ù…Ø¬Ø© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¨Ù…Ø±ÙˆÙ†Ø© Ø¹Ø§Ù„ÙŠØ©." },
    link: "https://www.continue.dev",
    category: "Coding AI",
    badges: ["OpenSource", "Free", "Developers"]
  },
  {
    name: { en: "Playground AI", ar: "Ø¨Ù„Ø§ÙŠØºØ±Ø§ÙˆÙ†Ø¯ AI" },
    description: { en: "Image generation and editing for creators, ads, and social content workflows.", ar: "ØªÙˆÙ„ÙŠØ¯ ÙˆØªØ­Ø±ÙŠØ± Ø§Ù„ØµÙˆØ± Ù„ØµÙ†Ø§Ø¹ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª ÙˆØªØ¯ÙÙ‚Ø§Øª Ø§Ù„Ø³ÙˆØ´Ø§Ù„." },
    link: "https://playground.com",
    category: "Image Generation",
    badges: ["Free", "Designers", "Marketers"]
  },
  {
    name: { en: "Recraft", ar: "Ø±ÙŠÙƒØ±Ø§ÙØª" },
    description: { en: "Design-focused AI tool for vectors, icons, and brand-consistent visual assets.", ar: "Ø£Ø¯Ø§Ø© ØªØµÙ…ÙŠÙ… Ø°ÙƒÙŠØ© Ù„Ø¥Ù†Ø´Ø§Ø¡ ÙÙŠÙƒØªÙˆØ±Ø§Øª ÙˆØ£ÙŠÙ‚ÙˆÙ†Ø§Øª ÙˆØ£ØµÙˆÙ„ Ø¨ØµØ±ÙŠØ© Ù…ØªØ³Ù‚Ø© Ù…Ø¹ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©." },
    link: "https://www.recraft.ai",
    category: "Image Generation",
    badges: ["Paid", "Designers"]
  },
  {
    name: { en: "Veed AI", ar: "ÙÙŠØ¯ AI" },
    description: { en: "Browser-based AI video editor for subtitles, social exports, and collaboration.", ar: "Ù…Ø­Ø±Ø± ÙÙŠØ¯ÙŠÙˆ Ø¹Ø¨Ø± Ø§Ù„Ù…ØªØµÙØ­ Ù„Ù„ØªØ±Ø¬Ù…Ø© Ø§Ù„ØªÙ„Ù‚Ø§Ø¦ÙŠØ© ÙˆØªØµØ¯ÙŠØ± Ø§Ù„Ø³ÙˆØ´Ø§Ù„ ÙˆØ§Ù„Ø¹Ù…Ù„ Ø§Ù„ØªØ¹Ø§ÙˆÙ†ÙŠ." },
    link: "https://www.veed.io",
    category: "Video Generation",
    badges: ["Paid", "Marketers", "Creators"]
  },
  {
    name: { en: "InVideo AI", ar: "Ø¥Ù† ÙÙŠØ¯ÙŠÙˆ AI" },
    description: { en: "Text-to-video suite for rapid marketing videos and campaign content production.", ar: "Ù…Ù†ØµØ© ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù†Øµ Ø¥Ù„Ù‰ ÙÙŠØ¯ÙŠÙˆ Ù„Ø¥Ù†ØªØ§Ø¬ ÙÙŠØ¯ÙŠÙˆÙ‡Ø§Øª ØªØ³ÙˆÙŠÙ‚ÙŠØ© ÙˆÙ…Ø­ØªÙˆÙ‰ Ø§Ù„Ø­Ù…Ù„Ø§Øª Ø¨Ø³Ø±Ø¹Ø©." },
    link: "https://invideo.io/ai",
    category: "Video Generation",
    badges: ["Paid", "Marketers", "Creators"]
  },
  {
    name: { en: "Wolfram|Alpha", ar: "ÙˆÙˆÙ„ÙØ±Ø§Ù… Ø£Ù„ÙØ§" },
    description: { en: "Computational knowledge engine for mathematics, engineering, and science-heavy tasks.", ar: "Ù…Ø­Ø±Ùƒ Ù…Ø¹Ø±ÙØ© Ø­Ø³Ø§Ø¨ÙŠ Ù„Ù„Ø±ÙŠØ§Ø¶ÙŠØ§Øª ÙˆØ§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„Ø¹Ù„ÙˆÙ… ÙˆØ§Ù„Ù…Ù‡Ø§Ù… Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ù…ÙƒØ«ÙØ©." },
    link: "https://www.wolframalpha.com",
    category: "Research AI",
    badges: ["Popular", "Students", "Researchers"]
  },
  {
    name: { en: "ResearchRabbit", ar: "Ø±ÙŠØ³ÙŠØ±Ø´ Ø±Ø§Ø¨ÙŠØª" },
    description: { en: "Visual discovery tool to map connected papers and build research collections.", ar: "Ø£Ø¯Ø§Ø© Ø¨ØµØ±ÙŠØ© Ù„Ø§ÙƒØªØ´Ø§Ù ÙˆØ±Ø¨Ø· Ø§Ù„Ø£ÙˆØ±Ø§Ù‚ Ø§Ù„Ø¹Ù„Ù…ÙŠØ© ÙˆØ¨Ù†Ø§Ø¡ Ù…Ø¬Ù…ÙˆØ¹Ø§Øª Ø¨Ø­Ø«ÙŠØ©." },
    link: "https://www.researchrabbit.ai",
    category: "Research AI",
    badges: ["Free", "Researchers", "Students"]
  },
  {
    name: { en: "ChatPDF", ar: "Ø´Ø§Øª Ø¨ÙŠ Ø¯ÙŠ Ø¥Ù" },
    description: { en: "Document Q&A assistant for PDFs, reports, and lecture materials.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø£Ø³Ø¦Ù„Ø© ÙˆØ£Ø¬ÙˆØ¨Ø© Ù„Ù…Ù„ÙØ§Øª PDF ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ± ÙˆÙ…ÙˆØ§Ø¯ Ø§Ù„Ù…Ø­Ø§Ø¶Ø±Ø§Øª." },
    link: "https://www.chatpdf.com",
    category: "Productivity AI",
    badges: ["Popular", "Free", "Students", "Educators"]
  },
  {
    name: { en: "Taskade AI", ar: "ØªØ§Ø³ÙƒÙŠØ¯ AI" },
    description: { en: "Collaborative productivity workspace with AI agents and project execution tools.", ar: "Ù…Ø³Ø§Ø­Ø© Ø¥Ù†ØªØ§Ø¬ÙŠØ© ØªØ¹Ø§ÙˆÙ†ÙŠØ© Ù…Ø¹ ÙˆÙƒÙ„Ø§Ø¡ AI ÙˆØ£Ø¯ÙˆØ§Øª ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹." },
    link: "https://www.taskade.com",
    category: "Productivity AI",
    badges: ["Paid", "Businesses", "Teams"]
  },
  {
    name: { en: "Mem", ar: "Ù…ÙŠÙ…" },
    description: { en: "AI-powered personal knowledge manager for organizing notes and context-aware writing.", ar: "Ù…Ù†ØµØ© Ø¥Ø¯Ø§Ø±Ø© Ù…Ø¹Ø±ÙØ© Ø´Ø®ØµÙŠØ© Ù„ØªÙ†Ø¸ÙŠÙ… Ø§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª ÙˆØ§Ù„ÙƒØªØ§Ø¨Ø© Ø§Ù„Ø³ÙŠØ§Ù‚ÙŠØ© Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ." },
    link: "https://mem.ai",
    category: "Productivity AI",
    badges: ["Paid", "Professionals", "Researchers"]
  },
  {
    name: { en: "Pipedream", ar: "Ø¨Ø§ÙŠØ¨ Ø¯Ø±ÙŠÙ…" },
    description: { en: "Developer-friendly automation platform for APIs, events, and backend AI workflows.", ar: "Ù…Ù†ØµØ© Ø£ØªÙ…ØªØ© Ù„Ù„Ù…Ø·ÙˆØ±ÙŠÙ† Ù„Ø±Ø¨Ø· APIs ÙˆØ§Ù„Ø£Ø­Ø¯Ø§Ø« ÙˆØªØ¯ÙÙ‚Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© Ø§Ù„Ø°ÙƒÙŠØ©." },
    link: "https://pipedream.com",
    category: "Agents & Automation",
    badges: ["API", "Developers", "Paid"]
  },
  {
    name: { en: "Lindy", ar: "Ù„ÙŠÙ†Ø¯ÙŠ" },
    description: { en: "AI automation platform for task-specific agents across email and operations.", ar: "Ù…Ù†ØµØ© Ø£ØªÙ…ØªØ© Ù„Ø¨Ù†Ø§Ø¡ ÙˆÙƒÙ„Ø§Ø¡ Ù…Ù‡Ø§Ù… Ù„Ù„Ø¨Ø±ÙŠØ¯ ÙˆØ§Ù„Ø¹Ù…Ù„ÙŠØ§Øª." },
    link: "https://www.lindy.ai",
    category: "Agents & Automation",
    badges: ["New", "Paid", "Businesses"]
  },
  {
    name: { en: "Gumloop", ar: "ØºÙˆÙ…Ù„ÙˆØ¨" },
    description: { en: "No-code AI workflow builder for operations teams and repetitive processes.", ar: "Ù…Ù†ØµØ© Ø¨Ø¯ÙˆÙ† ÙƒÙˆØ¯ Ù„Ø¨Ù†Ø§Ø¡ ØªØ¯ÙÙ‚Ø§Øª AI Ù„ÙØ±Ù‚ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª ÙˆØ§Ù„Ù…Ù‡Ø§Ù… Ø§Ù„Ù…ØªÙƒØ±Ø±Ø©." },
    link: "https://www.gumloop.com",
    category: "Agents & Automation",
    badges: ["New", "Paid", "Teams"]
  },
  {
    name: { en: "SlidesAI", ar: "Ø³Ù„Ø§ÙŠØ¯Ø² AI" },
    description: { en: "AI slide generation assistant for turning long text into structured presentations.", ar: "Ù…Ø³Ø§Ø¹Ø¯ Ù„Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø´Ø±Ø§Ø¦Ø­ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…Ù† Ø§Ù„Ù†ØµÙˆØµ Ø§Ù„Ø·ÙˆÙŠÙ„Ø© Ø¥Ù„Ù‰ Ø¹Ø±ÙˆØ¶ Ù…Ù†Ø¸Ù…Ø©." },
    link: "https://www.slidesai.io",
    category: "Presentation AI",
    badges: ["Paid", "Students", "Educators"]
  },
  {
    name: { en: "Pitch", ar: "Ø¨ÙŠØªØ´" },
    description: { en: "Team presentation platform with AI features for startup decks and reporting.", ar: "Ù…Ù†ØµØ© Ø¹Ø±ÙˆØ¶ Ù„Ù„ÙØ±Ù‚ Ø¨Ù…ÙŠØ²Ø§Øª AI Ù„Ø¹Ø±ÙˆØ¶ Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ù†Ø§Ø´Ø¦Ø© ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ±." },
    link: "https://pitch.com",
    category: "Presentation AI",
    badges: ["Paid", "Teams", "Businesses"]
  },
  {
    name: { en: "ThoughtSpot Sage", ar: "Ø«ÙˆØª Ø³Ø¨ÙˆØª Ø³ÙŠØ¬" },
    description: { en: "Natural language analytics assistant for enterprise BI and dashboard intelligence.", ar: "Ù…Ø³Ø§Ø¹Ø¯ ØªØ­Ù„ÙŠÙ„Ø§Øª Ø¨Ù„ØºØ© Ø·Ø¨ÙŠØ¹ÙŠØ© Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ ÙˆÙ„ÙˆØ­Ø§Øª Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª." },
    link: "https://www.thoughtspot.com",
    category: "Data AI",
    badges: ["Paid", "Enterprise", "Businesses"]
  },
  {
    name: { en: "Hex", ar: "Ù‡ÙŠÙƒØ³" },
    description: { en: "Collaborative data workspace combining SQL, notebooks, dashboards, and AI analytics.", ar: "Ù…Ø³Ø§Ø­Ø© Ø¨ÙŠØ§Ù†Ø§Øª ØªØ¹Ø§ÙˆÙ†ÙŠØ© ØªØ¬Ù…Ø¹ SQL ÙˆØ¯ÙØ§ØªØ± Ø§Ù„ØªØ­Ù„ÙŠÙ„ ÙˆÙ„ÙˆØ­Ø§Øª Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª AI." },
    link: "https://hex.tech",
    category: "Data AI",
    badges: ["Paid", "DataTeams", "Developers"]
  },
  {
    name: { en: "Dataiku", ar: "Ø¯Ø§ØªØ§ÙŠÙƒÙˆ" },
    description: { en: "Enterprise AI and analytics platform for model lifecycle, governance, and operations.", ar: "Ù…Ù†ØµØ© AI ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª Ù…Ø¤Ø³Ø³ÙŠØ© Ù„Ø¥Ø¯Ø§Ø±Ø© Ø¯ÙˆØ±Ø© Ø­ÙŠØ§Ø© Ø§Ù„Ù†Ù…Ø§Ø°Ø¬ ÙˆØ§Ù„Ø­ÙˆÙƒÙ…Ø© ÙˆØ§Ù„Ø¹Ù…Ù„ÙŠØ§Øª." },
    link: "https://www.dataiku.com",
    category: "Data AI",
    badges: ["Paid", "Enterprise", "DataTeams"]
  },
  {
    name: { en: "Deepgram", ar: "Ø¯ÙŠØ¨ ØºØ±Ø§Ù…" },
    description: { en: "Speech-to-text and voice AI API platform for real-time transcription and voice agents.", ar: "Ù…Ù†ØµØ© API Ù„Ù„ØµÙˆØª ÙˆØ§Ù„Ù†Ø³Ø® Ø§Ù„Ù„Ø­Ø¸ÙŠ Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ØªÙØ±ÙŠØº ÙˆÙˆÙƒÙ„Ø§Ø¡ Ø§Ù„ØµÙˆØª." },
    link: "https://deepgram.com",
    category: "Audio AI",
    badges: ["API", "Developers", "Paid"]
  },
  {
    name: { en: "AssemblyAI", ar: "Ø£Ø³ÙŠÙ…Ø¨Ù„ÙŠ AI" },
    description: { en: "Advanced speech AI APIs for transcription, summarization, and audio intelligence.", ar: "ÙˆØ§Ø¬Ù‡Ø§Øª ØµÙˆØª Ù…ØªÙ‚Ø¯Ù…Ø© Ù„Ù„ØªÙØ±ÙŠØº ÙˆØ§Ù„ØªÙ„Ø®ÙŠØµ ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª Ø§Ù„ØµÙˆØª Ø§Ù„Ø°ÙƒÙŠØ©." },
    link: "https://www.assemblyai.com",
    category: "Audio AI",
    badges: ["API", "Developers", "Paid"]
  },
  {
    name: { en: "PlayHT", ar: "Ø¨Ù„Ø§ÙŠ Ø¥ØªØ´ ØªÙŠ" },
    description: { en: "Text-to-speech and voice generation platform for narrations and multilingual products.", ar: "Ù…Ù†ØµØ© ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù†Øµ Ø¥Ù„Ù‰ ØµÙˆØª ÙˆØªÙˆÙ„ÙŠØ¯ Ø£ØµÙˆØ§Øª Ù„Ù„ØªØ¹Ù„ÙŠÙ‚ Ø§Ù„ØµÙˆØªÙŠ ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§Øª Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù„ØºØ§Øª." },
    link: "https://play.ht",
    category: "Audio AI",
    badges: ["API", "Creators", "Paid"]
  }
];

const fallbackPosts = [
  {
    title: { en: "AI Systems for Production", ar: "Ø£Ù†Ø¸Ù…Ø© AI Ù„Ù„Ø¥Ù†ØªØ§Ø¬" },
    excerpt: { en: "From prototype demos to reliable products.", ar: "Ù…Ù† Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø£ÙˆÙ„ÙŠ Ø¥Ù„Ù‰ Ù…Ù†ØªØ¬ Ù…ÙˆØ«ÙˆÙ‚." },
    date: "2026-03-01",
    file: "ai-production-systems.md",
    fileAr: "ai-production-systems-ar.md"
  },
  {
    title: { en: "Agentic Automation in 2026", ar: "Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ÙˆÙƒÙŠÙ„Ø© ÙÙŠ 2026" },
    excerpt: { en: "How autonomous workflows improve execution speed.", ar: "ÙƒÙŠÙ ØªØ±ÙØ¹ Ø§Ù„ØªØ¯ÙÙ‚Ø§Øª Ø§Ù„Ø°Ø§ØªÙŠØ© Ø³Ø±Ø¹Ø© Ø§Ù„ØªÙ†ÙÙŠØ°." },
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
# Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ù„Ø¥Ù†ØªØ§Ø¬

Ø¨Ù†Ø§Ø¡ Ù…Ù†ØªØ¬Ø§Øª AI ÙŠØ­ØªØ§Ø¬ Ù‡Ù†Ø¯Ø³Ø© Ø¥Ù†ØªØ§Ø¬ÙŠØ©ØŒ ÙˆÙ„ÙŠØ³ Ù…Ø¬Ø±Ø¯ ØªØ¬Ø§Ø±Ø¨ Ø³Ø±ÙŠØ¹Ø©.

## Ù…Ø¨Ø§Ø¯Ø¦ Ø£Ø³Ø§Ø³ÙŠØ©
- Ø§Ø¨Ø¯Ø£ Ø¨Ù‡Ø¯Ù Ø¹Ù…Ù„ Ù‚Ø§Ø¨Ù„ Ù„Ù„Ù‚ÙŠØ§Ø³.
- Ø§Ø¹ØªÙ…Ø¯ ØªÙ‚ÙŠÙŠÙ…Ù‹Ø§ Ø¯ÙˆØ±ÙŠÙ‹Ø§ Ù„Ù„Ø¬ÙˆØ¯Ø©.
- Ø£Ø¶Ù Ù…Ø±Ø§Ù‚Ø¨Ø© Ù„Ù„Ø£Ø®Ø·Ø§Ø¡ ÙˆØ§Ù„Ø§Ù†Ø­Ø±Ø§Ù.
- Ø§Ø¬Ø¹Ù„ Ø§Ù„Ø¥Ù†Ø³Ø§Ù† Ø¶Ù…Ù† Ø§Ù„Ø­Ù„Ù‚Ø© ÙÙŠ Ø§Ù„Ø­Ø§Ù„Ø§Øª Ø§Ù„Ø­Ø³Ø§Ø³Ø©.

## Ø¨Ù†ÙŠØ© Ø¹Ù…Ù„ÙŠØ©
- Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ù…Ø¹Ø±ÙÙŠ (RAG) Ù„Ù„Ø¥Ø¬Ø§Ø¨Ø§Øª Ø§Ù„Ù…ÙˆØ«Ù‚Ø©.
- Ø£ÙˆØ±ÙƒØ³ØªØ±Ø§ÙŠØ´ÙŠÙ† Ù„Ù„Ù…Ù‡Ø§Ù… Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø®Ø·ÙˆØ§Øª.
- Ù„ÙˆØ­Ø§Øª Ù‚ÙŠØ§Ø³ Ù„Ù„ØªÙƒÙ„ÙØ© ÙˆØ§Ù„Ø²Ù…Ù† ÙˆØ§Ù„Ø¯Ù‚Ø©.

## Ø§Ù„Ø®Ù„Ø§ØµØ©
Ø§Ù„Ù†Ø¬Ø§Ø­ ÙŠØ£ØªÙŠ Ù…Ù† Ù†Ø¸Ø§Ù… Ù‚Ø§Ø¨Ù„ Ù„Ù„ØªÙƒØ±Ø§Ø± ÙˆØ§Ù„ØªØ­Ø³ÙŠÙ† Ø§Ù„Ù…Ø³ØªÙ…Ø±.
`,
    "agentic-automation-2026-ar.md": `
# Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ÙˆÙƒÙŠÙ„Ø© ÙÙŠ 2026

ÙˆÙƒÙ„Ø§Ø¡ AI ÙŠÙ†ØªÙ‚Ù„ÙˆÙ† Ù…Ù† Ø§Ù„Ø¶Ø¬ÙŠØ¬ Ø¥Ù„Ù‰ Ù‚ÙŠÙ…Ø© ØªØ´ØºÙŠÙ„ÙŠØ© Ø­Ù‚ÙŠÙ‚ÙŠØ©.

## Ø£ÙŠÙ† ÙŠØ¸Ù‡Ø± Ø§Ù„Ø£Ø«Ø±ØŸ
- Ø£ØªÙ…ØªØ© Ø§Ù„Ø¨Ø­Ø« ÙˆØ¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±.
- ÙØ±Ø² Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ø¯Ø¹Ù… ÙˆØ§Ù„ØªØ´ØºÙŠÙ„ ØªÙ„Ù‚Ø§Ø¦ÙŠÙ‹Ø§.
- ØªØ³Ø±ÙŠØ¹ Ø¯ÙˆØ±Ø§Øª ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ§Ù„Ø¬ÙˆØ¯Ø©.

## Ø·Ø±ÙŠÙ‚Ø© ØªÙ†ÙÙŠØ° ØµØ­ÙŠØ­Ø©
- Ø§Ø¨Ø¯Ø£ Ø¨ØªØ¯ÙÙ‚ ÙˆØ§Ø­Ø¯ ÙˆØ§Ø¶Ø­ ÙˆØ¹Ø§Ù„ÙŠ Ø§Ù„Ø£Ø«Ø±.
- ØµÙ…Ù… Ø§Ù„ÙˆÙƒÙŠÙ„ Ø¨Ù…Ø±Ø§Ø­Ù„ Ù…Ø­Ø¯Ø¯Ø©:
  - Ø¬Ù…Ø¹ Ø§Ù„Ø³ÙŠØ§Ù‚
  - ØªØ®Ø·ÙŠØ· Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª
  - Ø§Ù„ØªÙ†ÙÙŠØ° Ø¨ØµÙ„Ø§Ø­ÙŠØ§Øª Ù…Ø¶Ø¨ÙˆØ·Ø©
  - ØªÙ‚Ø±ÙŠØ± Ø§Ù„Ù†ØªØ§Ø¦Ø¬ Ø¨Ø³Ø¬Ù„ ØªØªØ¨Ø¹

## Ø§Ù„Ù†ØªÙŠØ¬Ø©
Ø£ÙØ¶Ù„ Ø§Ù„ÙØ±Ù‚ ØªÙ…Ø²Ø¬ Ø­ÙƒÙ… Ø§Ù„Ø¥Ù†Ø³Ø§Ù† Ù…Ø¹ Ø§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ø°Ø§ØªÙŠ Ø§Ù„Ø°ÙƒÙŠ.
`,
    "ai-production-systems.md": `
# Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ù„Ø¥Ù†ØªØ§Ø¬

Ø¨Ù†Ø§Ø¡ Ù…Ù†ØªØ¬Ø§Øª AI ÙŠØ­ØªØ§Ø¬ Ù‡Ù†Ø¯Ø³Ø© Ø¥Ù†ØªØ§Ø¬ÙŠØ©ØŒ ÙˆÙ„ÙŠØ³ Ù…Ø¬Ø±Ø¯ ØªØ¬Ø§Ø±Ø¨ Ø³Ø±ÙŠØ¹Ø©.
`,
    "agentic-automation-2026.md": `
# Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ÙˆÙƒÙŠÙ„Ø© ÙÙŠ 2026

ÙˆÙƒÙ„Ø§Ø¡ AI ÙŠÙ†ØªÙ‚Ù„ÙˆÙ† Ù…Ù† Ø§Ù„Ø¶Ø¬ÙŠØ¬ Ø¥Ù„Ù‰ Ù‚ÙŠÙ…Ø© ØªØ´ØºÙŠÙ„ÙŠØ© Ø­Ù‚ÙŠÙ‚ÙŠØ©.
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
    name: { en: "Iraqi National English Exam Prep", ar: "Ù…Ù†ØµØ© Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ù…ØªØ­Ø§Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ" },
    description: {
      en: "Static prep platform for the Iraqi national English exam with passages, keyed questions, and practice flow.",
      ar: "Ù…Ù†ØµØ© ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ù…ØªØ­Ø§Ù† Ø§Ù„ÙˆØ·Ù†ÙŠ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ Ù…Ø¹ Ù†ØµÙˆØµ ÙˆØ£Ø³Ø¦Ù„Ø© Ù…ÙØªØ§Ø­ÙŠØ© ÙˆÙ…Ø³Ø§Ø± ØªØ¯Ø±ÙŠØ¨ Ø¹Ù…Ù„ÙŠ."
    },
    tech: ["HTML", "JavaScript", "EdTech"],
    image: "./assets/project-exam.svg",
    demo: "https://warithh.github.io/warith-exam-iq/",
    github: "https://github.com/Warithh/warith-exam-iq"
  },
  {
    name: { en: "Arabic Exam Practice", ar: "Ù…Ù†ØµØ© ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ø§Ù…ØªØ­Ø§Ù† Ø§Ù„Ø¹Ø±Ø¨ÙŠ" },
    description: {
      en: "Focused Arabic exam practice site for students preparing with structured drills.",
      ar: "Ù…ÙˆÙ‚Ø¹ ØªØ¯Ø±ÙŠØ¨ Ù…Ø±ÙƒÙ‘Ø² Ù„Ù„Ø§Ù…ØªØ­Ø§Ù† Ø§Ù„Ø¹Ø±Ø¨ÙŠ Ø¨ØªÙ…Ø§Ø±ÙŠÙ† Ù…Ù†Ø¸Ù…Ø© Ù„Ù„Ø·Ù„Ø¨Ø©."
    },
    tech: ["Web", "Education", "Assessment"],
    image: "./assets/project-exam.svg",
    github: "https://github.com/Warithh/WARITHARABICEXAM"
  },
  {
    name: { en: "Engineering Exam Hub", ar: "Ù…Ø±ÙƒØ² Ø§Ù…ØªØ­Ø§Ù†Ø§Øª Ù‡Ù†Ø¯Ø³ÙŠØ©" },
    description: {
      en: "Exam-oriented learning hub for engineering students with practical assessment paths.",
      ar: "Ù…Ø±ÙƒØ² ØªØ¹Ù„Ù‘Ù… Ù…ÙˆØ¬Ù‘Ù‡ Ù„Ù„Ø§Ù…ØªØ­Ø§Ù†Ø§Øª Ù„Ø·Ù„Ø¨Ø© Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø¨Ù…Ø³Ø§Ø±Ø§Øª ØªÙ‚ÙŠÙŠÙ… Ø¹Ù…Ù„ÙŠØ©."
    },
    tech: ["Web", "Engineering", "Assessment"],
    image: "./assets/project-edtech.svg",
    github: "https://github.com/Warithh/engeaxam"
  },
  {
    name: { en: "AI Tools & Automation Hub", ar: "Ù…Ø±ÙƒØ² Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ù„Ø£ØªÙ…ØªØ©" },
    description: {
      en: "Curated bilingual hub for AI updates, tools, and practical automation workflows.",
      ar: "Ù…Ø±ÙƒØ² Ø«Ù†Ø§Ø¦ÙŠ Ø§Ù„Ù„ØºØ© Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØªØ¯ÙÙ‚Ø§Øª Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ø¹Ù…Ù„ÙŠØ©."
    },
    tech: ["Curated Content", "AI", "Automation"],
    image: "./assets/project-ai.svg",
    demo: "https://warithh.github.io/lof9x/",
    github: "https://github.com/Warithh/lof9x"
  },
  {
    name: { en: "AI Telegram Bot", ar: "Ø¨ÙˆØª Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¹Ù„Ù‰ ØªÙŠÙ„ÙŠØ¬Ø±Ø§Ù…" },
    description: {
      en: "Telegram-facing AI assistant for quick answers, content help, and automation entry points.",
      ar: "Ù…Ø³Ø§Ø¹Ø¯ Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¹Ø¨Ø± ØªÙŠÙ„ÙŠØ¬Ø±Ø§Ù… Ù„Ù„Ø¥Ø¬Ø§Ø¨Ø§Øª Ø§Ù„Ø³Ø±ÙŠØ¹Ø© ÙˆØ§Ù„Ù…Ø­ØªÙˆÙ‰ ÙˆÙ…Ø¯Ø§Ø®Ù„ Ø§Ù„Ø£ØªÙ…ØªØ©."
    },
    tech: ["Telegram", "AI", "Bot"],
    image: "./assets/project-ai.svg",
    github: "https://github.com/Warithh/warith_ai_bot"
  },
  {
    name: { en: "Eid Greeting Experience", ar: "ØªØ¬Ø±Ø¨Ø© ØªÙ‡Ù†Ø¦Ø© Ø§Ù„Ø¹ÙŠØ¯" },
    description: {
      en: "Interactive Eid greeting page with QR sharing and photo layout for family events.",
      ar: "ØµÙØ­Ø© ØªÙ‡Ù†Ø¦Ø© Ø¹ÙŠØ¯ ØªÙØ§Ø¹Ù„ÙŠØ© Ù…Ø¹ Ù…Ø´Ø§Ø±ÙƒØ© QR ÙˆØªØ®Ø·ÙŠØ· ØµÙˆØ± Ù„Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª Ø§Ù„Ø¹Ø§Ø¦Ù„ÙŠØ©."
    },
    tech: ["HTML", "CSS", "UX"],
    image: "./assets/project-edtech.svg",
    demo: "https://warithh.github.io/eid-greeting-alawiti/",
    github: "https://github.com/Warithh/eid-greeting-alawiti"
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
  if (item == null) return "";
  if (typeof item === "string") return item;
  if (typeof item !== "object") return "";
  return item[state.lang] || item.en || item.ar || item[DEFAULT_LANG] || "";
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
    elements.themeToggle.textContent = state.theme === "dark" ? t("theme.dark", "Dark") : t("theme.light", "Light");
  }
}

function applyTheme() {
  elements.html.dataset.theme = state.theme === "light" ? "light" : "dark";
  if (elements.themeToggle) {
    elements.themeToggle.textContent = state.theme === "dark" ? t("theme.dark", "Dark") : t("theme.light", "Light");
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
    const category = escapeHtml(item.category || item.type || "");
    const org = escapeHtml(item.organization || item.org || "");
    const date = escapeHtml(item.date || "");
    const link = item.link || item.url || "#";
    card.innerHTML = `
      <div class="card-top">
        <h3>${title}</h3>
        <a class="card-link" href="${escapeHtml(link)}" target="_blank" rel="noopener">${t("common.source")}</a>
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
      "AI Chat": "Ù„Ù„Ø¨Ø­Ø« Ø§Ù„Ø°ÙƒÙŠØŒ ØªÙˆÙ„ÙŠØ¯ Ø§Ù„Ø£ÙÙƒØ§Ø±ØŒ ØµÙŠØ§ØºØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ØŒ Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ØŒ ÙˆÙ…Ù‡Ø§Ù… Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯ Ø§Ù„ÙŠÙˆÙ…ÙŠ.",
      "Coding AI": "Ù„ØªÙˆÙ„ÙŠØ¯ Ø§Ù„ÙƒÙˆØ¯ØŒ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù‡ÙŠÙƒÙ„Ø©ØŒ Ø§ÙƒØªØ´Ø§Ù Ø§Ù„Ø£Ø®Ø·Ø§Ø¡ØŒ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§ØªØŒ Ø§Ù„ØªÙˆØ«ÙŠÙ‚ØŒ ÙˆØ¯Ø¹Ù… Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©.",
      "Image Generation": "Ù„Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø¨ØµØ±ÙŠØŒ Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø³ÙˆØ´Ø§Ù„ØŒ Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ©ØŒ Ø§Ù„ÙÙ† Ø§Ù„Ù…ÙØ§Ù‡ÙŠÙ…ÙŠØŒ ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª.",
      "Video Generation": "Ù„Ø¥Ù†ØªØ§Ø¬ Ø§Ù„ÙÙŠØ¯ÙŠÙˆØŒ Ø§Ù„ØªÙˆØ·ÙŠÙ†ØŒ Ø§Ù„Ø´Ø±ÙˆØ­Ø§ØªØŒ ÙˆØ§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ù…Ø±Ø¦ÙŠ Ø§Ù„Ù‚ØµÙŠØ±.",
      "Research AI": "Ù„Ù„Ø¨Ø­Ø« Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØŒ Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø§Øª Ø§Ù„Ù…ÙˆØ«Ù‚Ø©ØŒ ØªØªØ¨Ø¹ Ø§Ù„Ø§ØªØ¬Ø§Ù‡Ø§ØªØŒ ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ø£Ø¯Ø¨ÙŠØ§Øª.",
      "Productivity AI": "Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ù…Ù‡Ø§Ù…ØŒ Ø§Ù„ØªÙ„Ø®ÙŠØµØŒ Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹Ø§ØªØŒ Ø§Ù„ØªØ®Ø·ÙŠØ·ØŒ ÙˆØ±ÙØ¹ Ø¥Ù†ØªØ§Ø¬ÙŠØ© Ø§Ù„ÙØ±Ù‚.",
      "Audio AI": "Ù„ØªÙˆÙ„ÙŠØ¯ Ø§Ù„ØµÙˆØªØŒ Ø§Ù„ØªØ¹Ù„ÙŠÙ‚ Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠØŒ Ø§Ù„Ø¯Ø¨Ù„Ø¬Ø©ØŒ Ø§Ù„Ø¨ÙˆØ¯ÙƒØ§Ø³ØªØŒ ÙˆØªØ¯ÙÙ‚Ø§Øª Ø§Ù„ØµÙˆØª Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù„ØºØ§Øª.",
      "Agents & Automation": "Ù„Ø¨Ù†Ø§Ø¡ ÙˆÙƒÙ„Ø§Ø¡ Ø°ÙƒÙŠÙŠÙ† ÙˆØªØ¯ÙÙ‚Ø§Øª Ø¹Ù…Ù„ Ù…Ø³ØªÙ‚Ù„Ø© ÙˆØªÙƒØ§Ù…Ù„Ø§Øª ÙˆØ£ØªÙ…ØªØ© Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø£Ø¹Ù…Ø§Ù„.",
      "Presentation AI": "Ù„Ø¥Ù†Ø´Ø§Ø¡ Ø¹Ø±ÙˆØ¶ ØªÙ‚Ø¯ÙŠÙ…ÙŠØ© ÙˆØªÙ‚Ø§Ø±ÙŠØ± ÙˆØ³Ø±Ø¯ Ø¨ØµØ±ÙŠ Ø§Ø­ØªØ±Ø§ÙÙŠ Ø¬Ø§Ù‡Ø² Ù„Ù„Ø¥Ø¯Ø§Ø±Ø© ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Ø¡.",
      "Data AI": "Ù„Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª Ø§Ù„ØªÙ†Ø¨Ø¤ÙŠØ©ØŒ Ø°ÙƒØ§Ø¡ Ù„ÙˆØ­Ø§Øª Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§ØªØŒ Ø§Ø³ØªØ®Ù„Ø§Øµ Ø§Ù„Ø±Ø¤Ù‰ØŒ ÙˆØ¯Ø¹Ù… Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª."
    }
  };
  return data[state.lang]?.[category] || data.en[category] || "";
}

function usageModel(tool) {
  const badges = tool.badges || [];
  if (state.lang === "ar") {
    if (badges.includes("Free") && badges.includes("Paid")) return "Ù†Ø³Ø®Ø© Ù…Ø¬Ø§Ù†ÙŠØ© + Ø®Ø·Ø· Ù…Ø¯ÙÙˆØ¹Ø© Ù…ØªÙ‚Ø¯Ù…Ø©.";
    if (badges.includes("Free")) return "Ù…Ø¬Ø§Ù†Ù‹Ø§ Ù…Ø¹ Ø®ÙŠØ§Ø±Ø§Øª ØªÙˆØ³Ø¹ Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠØ©.";
    if (badges.includes("Paid")) return "Ø®Ø¯Ù…Ø© Ù…Ø¯ÙÙˆØ¹Ø© Ø¨Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ø­ØªØ±Ø§ÙÙŠ.";
    return "Ù†Ù…ÙˆØ°Ø¬ Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙŠØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø®Ø¯Ù…Ø© ÙˆØ§Ù„Ù…Ø²ÙˆØ¯.";
  }
  if (badges.includes("Free") && badges.includes("Paid")) return "Free tier plus advanced paid plans.";
  if (badges.includes("Free")) return "Free access with optional expansion paths.";
  if (badges.includes("Paid")) return "Paid subscription-based professional service.";
  return "Usage model depends on provider and deployment type.";
}

function usageSteps() {
  if (state.lang === "ar") {
    return [
      "Ø­Ø¯Ø¯ Ø§Ù„Ù‡Ø¯Ù Ø¨ÙˆØ¶ÙˆØ­ (Ù…Ø­ØªÙˆÙ‰ØŒ ÙƒÙˆØ¯ØŒ Ø¨Ø­Ø«ØŒ Ø£Ùˆ Ø¥Ù†ØªØ§Ø¬ÙŠØ©).",
      "Ø¬Ù‡Ø² Ù…Ø¯Ø®Ù„Ø§Øª Ø¯Ù‚ÙŠÙ‚Ø© (ÙˆØµÙØŒ Ø¨ÙŠØ§Ù†Ø§ØªØŒ Ù…Ù„ÙØ§ØªØŒ Ø£Ùˆ Ø£Ù…Ø«Ù„Ø©).",
      "Ù†ÙÙ‘Ø° ØªØ¬Ø±Ø¨Ø© Ø£ÙˆÙ„ÙŠØ©ØŒ Ø«Ù… Ù‚ÙŠÙ‘Ù… Ø§Ù„Ù†ØªØ§Ø¦Ø¬ ÙˆØ­Ø³Ù‘Ù† Ø§Ù„Ø¨Ø±ÙˆÙ…Ø¨Øª/Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª.",
      "ÙØ¹Ù‘Ù„ Ø§Ù„ØªÙƒØ§Ù…Ù„ Ø£Ùˆ Ø§Ù„Ø£ØªÙ…ØªØ© Ù„ØªØ­Ù‚ÙŠÙ‚ Ù‚ÙŠÙ…Ø© Ø¹Ù…Ù„ÙŠØ© Ù…Ø³ØªÙ…Ø±Ø©."
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
      : `<div class="meta"><span class="tag">${isAr ? "ÙÙƒØ±Ø© Ù…Ø´Ø±ÙˆØ¹" : "Project Idea"}</span></div>`;
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
# ${state.lang === "ar" ? "Ù…Ù‚Ø§Ù„ ØªÙ‚Ù†ÙŠ" : "Technical Post"}

${state.lang === "ar"
  ? "ØªØ¹Ø°Ø± ØªØ­Ù…ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ù„Ù Ù…Ù† Ø§Ù„Ù…ØµØ¯Ø±ØŒ Ù„Ø°Ù„Ùƒ ØªÙ… Ø¹Ø±Ø¶ Ù†Ø³Ø®Ø© Ø§Ø­ØªÙŠØ§Ø·ÙŠØ© Ù…Ù† Ø§Ù„Ù…Ø­ØªÙˆÙ‰."
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
