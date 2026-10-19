const LANG_KEY = "lof9x_lang";
const DEFAULT_LANG = "en";
const THEME_KEY = "lof9x_theme";
document.documentElement.classList.add("js");
const state = {
  lang: localStorage.getItem(LANG_KEY) || DEFAULT_LANG,
  theme: localStorage.getItem(THEME_KEY) || "dark",
  tools: [],
  search: "",
  category: "all"
};

const fallbackTools = [
  { name: { en: "ChatGPT", ar: "شات جي بي تي" }, description: { en: "All-in-one AI assistant.", ar: "مساعد AI شامل." }, link: "https://chatgpt.com", category: "AI Chat" },
  { name: { en: "Claude", ar: "كلود" }, description: { en: "Long-context AI assistant.", ar: "مساعد قوي للسياق الطويل." }, link: "https://claude.ai", category: "AI Chat" },
  { name: { en: "Gemini", ar: "جيمناي" }, description: { en: "Google multimodal AI assistant.", ar: "مساعد جوجل متعدد الوسائط." }, link: "https://gemini.google.com", category: "AI Chat" },
  { name: { en: "Cursor", ar: "كيرسر" }, description: { en: "AI coding environment.", ar: "بيئة برمجة ذكية." }, link: "https://cursor.com", category: "Coding AI" },
  { name: { en: "GitHub Copilot", ar: "جيت هب كوبايلوت" }, description: { en: "IDE coding assistant.", ar: "مساعد برمجة داخل IDE." }, link: "https://github.com/features/copilot", category: "Coding AI" },
  { name: { en: "Midjourney", ar: "ميدجورني" }, description: { en: "Premium image generation.", ar: "توليد صور احترافي." }, link: "https://www.midjourney.com", category: "Image Generation" },
  { name: { en: "DALL-E", ar: "دال إي" }, description: { en: "AI image generation and editing.", ar: "توليد وتحرير الصور." }, link: "https://openai.com/dall-e", category: "Image Generation" },
  { name: { en: "Runway", ar: "رانواي" }, description: { en: "AI video generation.", ar: "توليد فيديو ذكي." }, link: "https://runwayml.com", category: "Video Generation" },
  { name: { en: "Perplexity", ar: "بيربلكسيتي" }, description: { en: "Research with citations.", ar: "بحث مع مراجع موثقة." }, link: "https://www.perplexity.ai", category: "Research AI" },
  { name: { en: "Notion AI", ar: "نوشن AI" }, description: { en: "AI for productivity and docs.", ar: "إنتاجية وكتابة ذكية." }, link: "https://www.notion.so/product/ai", category: "Productivity AI" }
];

const ui = {
  en: {
    pageTitle: "AI Tools Explorer",
    pageSubtitle: "Browse the latest practical tools.",
    search: "Search tools...",
    all: "All Categories",
    details: "Details",
    back: "Back to tools",
    visit: "Visit Tool",
    what: "What this tool does",
    bestFor: "Best for",
    workflow: "Suggested workflow",
    model: "Usage model",
    themeDark: "Dark Beige",
    themeLight: "Light Luxury",
    notFound: "Tool not found."
  },
  ar: {
    pageTitle: "مستكشف أدوات الذكاء الاصطناعي",
    pageSubtitle: "تصفح أحدث الأدوات العملية.",
    search: "ابحث عن أداة...",
    all: "كل الفئات",
    details: "التفاصيل",
    back: "العودة إلى الأدوات",
    visit: "زيارة الأداة",
    what: "ماذا تفعل الأداة؟",
    bestFor: "أفضل استخدام",
    workflow: "طريقة الاستخدام المقترحة",
    model: "نموذج الاستخدام",
    themeDark: "داكن فاخر",
    themeLight: "فاتح راقٍ",
    notFound: "الأداة غير موجودة."
  }
};

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function text(key) {
  return ui[state.lang]?.[key] || ui.en[key];
}

function pick(item) {
  return item?.[state.lang] || item?.en || "";
}

function toolDisplayName(tool) {
  const ar = tool?.name?.ar || "";
  const en = tool?.name?.en || "";
  const localized = pick(tool.name);
  if (state.lang === "ar" && ar && en && ar !== en) {
    return `${ar} (${en})`;
  }
  return localized;
}

function categoryGuidance(category) {
  const guidance = {
    en: {
      "AI Chat": "Research, ideation, drafting, reasoning, and daily AI assistant workflows.",
      "Coding AI": "Code generation, refactoring, debugging, tests, documentation, and architecture support.",
      "Image Generation": "Visual design, branding, social assets, and creative concept generation.",
      "Video Generation": "Video creation, explainers, localization, and short-form production.",
      "Research AI": "Literature review, citation-backed answers, trend discovery, and technical scanning.",
      "Productivity AI": "Automation, meeting notes, summaries, planning, and team execution speed.",
      "Audio AI": "Voice synthesis, dubbing, narration, and multilingual audio content pipelines.",
      "Agents & Automation": "Autonomous workflows, tool orchestration, and business process automation.",
      "Presentation AI": "Deck creation, visual storytelling, and executive communication assets.",
      "Data AI": "Forecasting, dashboard intelligence, analytics, and data-driven decision support."
    },
    ar: {
      "AI Chat": "للبحث الذكي، توليد الأفكار، صياغة المحتوى، والاستدلال في المهام اليومية.",
      "Coding AI": "لتوليد الكود، التحسين، اكتشاف الأخطاء، الاختبارات، والتوثيق البرمجي.",
      "Image Generation": "للتصميم البصري، الهوية، محتوى السوشال، وتوليد الأفكار الإبداعية.",
      "Video Generation": "لإنتاج الفيديو، الشروحات، التوطين، والمحتوى المرئي القصير.",
      "Research AI": "لمراجعة الأدبيات، الإجابات الموثقة، اكتشاف الاتجاهات، والبحث التقني.",
      "Productivity AI": "للأتمتة، ملاحظات الاجتماعات، التلخيص، التخطيط، وتسريع إنجاز الفرق.",
      "Audio AI": "لتوليد الصوت، الدبلجة، التعليق الصوتي، ومحتوى صوتي متعدد اللغات.",
      "Agents & Automation": "لبناء تدفقات مستقلة وتنسيق الأدوات وأتمتة العمليات المؤسسية.",
      "Presentation AI": "لإنشاء عروض احترافية وسرد بصري وتقارير موجهة للإدارة والعملاء.",
      "Data AI": "للتنبؤ والتحليلات الذكية والرؤى العملية ودعم اتخاذ القرار."
    }
  };
  return guidance[state.lang]?.[category] || guidance.en[category] || "";
}

function usageModel(badges = []) {
  if (state.lang === "ar") {
    if (badges.includes("Free") && badges.includes("Paid")) return "نسخة مجانية مع خطط مدفوعة متقدمة.";
    if (badges.includes("Free")) return "مجانًا مع خيارات توسعة.";
    if (badges.includes("Paid")) return "اشتراك مدفوع للاستخدام الاحترافي.";
    return "يعتمد النموذج على مزود الخدمة.";
  }
  if (badges.includes("Free") && badges.includes("Paid")) return "Free tier with advanced paid plans.";
  if (badges.includes("Free")) return "Free access with optional paid expansion.";
  if (badges.includes("Paid")) return "Paid subscription for professional usage.";
  return "Usage model depends on the service provider.";
}

function usageSteps() {
  if (state.lang === "ar") {
    return [
      "حدد النتيجة المطلوبة بدقة (محتوى، كود، تحليل، أو إنتاجية).",
      "جهز المدخلات بوضوح (برومبت، ملفات، أمثلة، أو بيانات).",
      "اختبر المخرجات وكرر التحسين حتى تصل للجودة المطلوبة.",
      "ادمج الأداة في سير العمل لضمان قيمة مستمرة."
    ];
  }
  return [
    "Define the desired outcome clearly (content, code, analysis, or productivity).",
    "Prepare strong inputs (prompt, files, examples, or data).",
    "Evaluate output quality and iterate until requirements are met.",
    "Integrate the tool into your workflow for repeatable value."
  ];
}

function applyDirection() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  const langBtn = document.getElementById("toolsLangToggle");
  if (langBtn) langBtn.textContent = state.lang === "en" ? "AR" : "EN";
  const themeBtn = document.getElementById("toolsThemeToggle");
  if (themeBtn) themeBtn.textContent = state.theme === "dark" ? text("themeDark") : text("themeLight");
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme === "light" ? "light" : "dark";
  const themeBtn = document.getElementById("toolsThemeToggle");
  if (themeBtn) themeBtn.textContent = state.theme === "dark" ? text("themeDark") : text("themeLight");
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, state.theme);
  applyTheme();
}

function revealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.in)").forEach((node) => observer.observe(node));
}

function decorateTools(raw) {
  return raw.map((tool, i) => ({
    ...tool,
    id: tool.id || `tool-${i + 1}`,
    slug: tool.slug || slugify(tool.name?.en || tool.name?.ar)
  }));
}

async function loadTools() {
  try {
    const res = await fetch("../data/tools.json", { cache: "no-store" });
    if (!res.ok) throw new Error("tools fetch failed");
    const data = await res.json();
    state.tools = decorateTools(data);
  } catch (error) {
    state.tools = decorateTools(fallbackTools);
  }
}

function renderListPage() {
  const title = document.getElementById("toolsPageTitle");
  const subtitle = document.getElementById("toolsPageSubtitle");
  const search = document.getElementById("toolsPageSearch");
  const categories = document.getElementById("toolsPageCategories");
  const grid = document.getElementById("toolsPageGrid");
  if (!title || !subtitle || !search || !categories || !grid) return;

  title.textContent = text("pageTitle");
  subtitle.textContent = text("pageSubtitle");
  search.placeholder = text("search");

  const categoryList = Array.from(new Set(state.tools.map((t) => t.category)));
  categories.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = `chip ${state.category === "all" ? "active" : ""}`;
  allBtn.textContent = text("all");
  allBtn.onclick = () => {
    state.category = "all";
    renderListPage();
  };
  categories.appendChild(allBtn);

  categoryList.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `chip ${state.category === cat ? "active" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      state.category = cat;
      renderListPage();
    };
    categories.appendChild(btn);
  });

  const query = state.search.toLowerCase().trim();
  const filtered = state.tools
    .filter((tool) => state.category === "all" || tool.category === state.category)
    .filter((tool) => {
      const hay = `${pick(tool.name)} ${pick(tool.description)}`.toLowerCase();
      return !query || hay.includes(query);
    });

  grid.innerHTML = "";
  filtered.forEach((tool, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.setProperty("--stagger", `${index * 36}ms`);
    card.innerHTML = `
      <div class="card-top">
        <h3>${toolDisplayName(tool)}</h3>
        <a class="card-link" href="${tool.link}" target="_blank" rel="noopener">${text("visit")}</a>
      </div>
      <p>${pick(tool.description)}</p>
      <div class="meta"><span class="tag">${tool.category}</span></div>
      <div class="meta"><a class="card-link" href="./tool.html?slug=${encodeURIComponent(tool.slug)}">${text("details")}</a></div>
    `;
    grid.appendChild(card);
  });

  search.oninput = (e) => {
    state.search = e.target.value;
    renderListPage();
  };
  revealObserver();
}

function setToolSeo(tool) {
  const name = pick(tool.name);
  const desc = pick(tool.description);
  document.title = `${name} | AI Tool | Warith`;
  const metaDesc = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const canonical = document.querySelector('link[rel="canonical"]');
  if (metaDesc) metaDesc.setAttribute("content", desc);
  if (ogTitle) ogTitle.setAttribute("content", `${name} | AI Tool`);
  if (ogDesc) ogDesc.setAttribute("content", desc);
  if (canonical) canonical.setAttribute("href", `https://warithh.github.io/lof9x/tools/tool.html?slug=${encodeURIComponent(tool.slug)}`);
}

function renderDetailPage() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const tool = state.tools.find((item) => item.slug === slug);
  const nameEl = document.getElementById("toolDetailName");
  const descEl = document.getElementById("toolDetailDescription");
  const deepEl = document.getElementById("toolDetailDeep");
  const catEl = document.getElementById("toolDetailCategory");
  const badgesEl = document.getElementById("toolDetailBadges");
  const visitEl = document.getElementById("toolDetailVisit");
  const backEl = document.getElementById("toolDetailBack");
  const navBack = document.getElementById("backToTools");
  if (!nameEl || !descEl || !deepEl || !catEl || !badgesEl || !visitEl || !backEl || !navBack) return;

  backEl.textContent = text("back");
  navBack.textContent = "Tools";

  if (!tool) {
    nameEl.textContent = text("notFound");
    descEl.textContent = "";
    deepEl.innerHTML = "";
    catEl.textContent = "AI Tool";
    visitEl.style.display = "none";
    return;
  }

  nameEl.textContent = pick(tool.name);
  nameEl.textContent = toolDisplayName(tool);
  descEl.textContent = pick(tool.description);
  const guideInput = {
    name: pick(tool.name),
    nameEn: tool.name?.en || "",
    nameObj: tool.name,
    category: tool.category,
    badges: tool.badges || []
  };
  const guide = typeof window.getToolGuide === "function"
    ? window.getToolGuide(guideInput, state.lang)
    : {
      what: pick(tool.description),
      bestFor: categoryGuidance(tool.category),
      steps: usageSteps(),
      model: usageModel(tool.badges || [])
    };
  const steps = Array.isArray(guide.steps) && guide.steps.length ? guide.steps : usageSteps();
  deepEl.innerHTML = `
    <p class="deep-title">${text("what")}</p>
    <p>${guide.what || pick(tool.description)}</p>
    <p class="deep-title">${text("bestFor")}</p>
    <p>${guide.bestFor || categoryGuidance(tool.category)}</p>
    <p class="deep-title">${text("workflow")}</p>
    <ul>
      <li>${steps[0]}</li>
      <li>${steps[1]}</li>
      <li>${steps[2]}</li>
      <li>${steps[3]}</li>
    </ul>
    <p class="deep-title">${text("model")}</p>
    <p>${guide.model || usageModel(tool.badges || [])}</p>
  `;
  catEl.textContent = tool.category;
  visitEl.textContent = text("visit");
  visitEl.href = tool.link;
  badgesEl.innerHTML = (tool.badges || []).map((badge) => `<span class="tag tag-badge">${badge}</span>`).join("");
  setToolSeo(tool);
}

async function init() {
  await loadTools();
  applyTheme();
  applyDirection();
  const page = document.body.dataset.page;
  if (page === "tools-list") renderListPage();
  if (page === "tool-detail") renderDetailPage();

  const langBtn = document.getElementById("toolsLangToggle");
  const themeBtn = document.getElementById("toolsThemeToggle");
  if (langBtn) {
    langBtn.onclick = () => {
      state.lang = state.lang === "en" ? "ar" : "en";
      localStorage.setItem(LANG_KEY, state.lang);
      applyDirection();
      if (page === "tools-list") renderListPage();
      if (page === "tool-detail") renderDetailPage();
    };
  }
  if (themeBtn) {
    themeBtn.onclick = () => toggleTheme();
  }
}

init();
