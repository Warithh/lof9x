const LANG_KEY = "lof9x_lang";
const THEME_KEY = "lof9x_theme";

const ui = {
  ar: {"back":"العودة للموقع","allCases":"كل دراسات الأثر","problem":"المشكلة","solution":"الحل","methods":"الطرق الحديثة المستخدمة","impact":"الأثر","outcomes":"ماذا تغيّر؟","live":"فتح النظام المباشر","github":"GitHub","readCase":"اقرأ دراسة الأثر","indexTitle":"دراسات الأثر","indexSub":"مشاريع حقيقية: مشكلة، حل، طرق حديثة، ونتيجة واضحة.","notFound":"دراسة الأثر غير موجودة.","themeDark":"داكن","themeLight":"فاتح"},
  en: {"back":"Back to site","allCases":"All impact cases","problem":"Problem","solution":"Solution","methods":"Modern methods used","impact":"Impact","outcomes":"What changed","live":"Open live system","github":"GitHub","readCase":"Read impact case","indexTitle":"Impact Cases","indexSub":"Real projects: problem, solution, modern methods, and clear outcome.","notFound":"Impact case not found.","themeDark":"Dark","themeLight":"Light"}
};

const state = {
  lang: localStorage.getItem(LANG_KEY) || "ar",
  theme: localStorage.getItem(THEME_KEY) || "dark",
  cases: []
};

function t(key) { return ui[state.lang]?.[key] || ui.en[key] || key; }
function pick(value) { if (value == null) return ""; if (typeof value === "string") return value; return value[state.lang] || value.en || value.ar || ""; }
function resolveAsset(path) {
  if (!path) return "";
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  const cleaned = String(path).replace(/^\.\.\//, "").replace(/^\.\//, "");
  return "../" + cleaned;
}

function applyChrome() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.theme = state.theme === "light" ? "light" : "dark";
  const langBtn = document.getElementById("langBtn");
  const themeBtn = document.getElementById("themeBtn");
  if (langBtn) langBtn.textContent = state.lang === "ar" ? "EN" : "AR";
  if (themeBtn) themeBtn.textContent = state.theme === "dark" ? t("themeDark") : t("themeLight");
  document.querySelectorAll("[data-ui]").forEach((el) => { el.textContent = t(el.dataset.ui); });
}

async function loadCases() {
  const response = await fetch("../data/cases.json", { cache: "no-store" });
  if (!response.ok) throw new Error("cases fetch failed");
  state.cases = await response.json();
}

function renderIndex() {
  const grid = document.getElementById("casesGrid");
  if (!grid) return;
  document.title = t("indexTitle") + " | lof9x";
  grid.innerHTML = state.cases.map((item) => {
    const cover = resolveAsset(item.cover);
    const fallback = resolveAsset(item.coverFallback || item.cover);
    return [
      '<a class="case-card" href="./view.html?id=' + encodeURIComponent(item.id) + '">',
      '<img src="' + cover + '" alt="' + pick(item.title) + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + fallback + '\'">',
      '<div class="body">',
      '<p class="eyebrow">' + pick(item.eyebrow) + '</p>',
      '<h3>' + pick(item.title) + '</h3>',
      '<p>' + pick(item.subtitle) + '</p>',
      '<span class="btn btn-primary" style="width:fit-content;margin-top:.35rem">' + t("readCase") + '</span>',
      '</div></a>'
    ].join("");
  }).join("");
}

function renderView() {
  const root = document.getElementById("caseRoot");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id") || state.cases[0]?.id;
  const item = state.cases.find((c) => c.id === id) || state.cases[0];
  if (!item) {
    root.innerHTML = '<div class="block"><p>' + t("notFound") + '</p></div>';
    return;
  }
  document.title = pick(item.title) + " | lof9x";
  const outcomes = pick(item.outcomes);
  const outcomeList = Array.isArray(outcomes) ? outcomes : [];
  const ctas = [];
  if (item.demo) ctas.push('<a class="btn btn-primary" href="' + item.demo + '" target="_blank" rel="noopener">' + t("live") + '</a>');
  if (item.github) ctas.push('<a class="btn" href="' + item.github + '" target="_blank" rel="noopener">' + t("github") + '</a>');
  ctas.push('<a class="btn" href="./index.html">' + t("allCases") + '</a>');
  const cover = resolveAsset(item.cover);
  const fallback = resolveAsset(item.coverFallback || item.cover);
  root.innerHTML = [
    '<article class="hero-card">',
    '<img class="cover" src="' + cover + '" alt="' + pick(item.title) + '" onerror="this.onerror=null;this.src=\'' + fallback + '\'">',
    '<p class="eyebrow">' + pick(item.eyebrow) + '</p>',
    '<h1>' + pick(item.title) + '</h1>',
    '<p class="lead">' + pick(item.subtitle) + '</p>',
    '<div class="cta-row">' + ctas.join("") + '</div></article>',
    '<section class="block"><h2>' + t("problem") + '</h2><p>' + pick(item.problem) + '</p></section>',
    '<section class="block"><h2>' + t("solution") + '</h2><p>' + pick(item.solution) + '</p></section>',
    '<section class="block"><h2>' + t("methods") + '</h2><div class="methods">' + (item.methods || []).map((m) => '<span class="tag">' + m + '</span>').join("") + '</div></section>',
    '<section class="block"><h2>' + t("impact") + '</h2><div class="impact-grid">' + (item.impact || []).map((row) => '<div class="impact-item"><strong>' + pick(row.value) + '</strong><span>' + pick(row.label) + '</span></div>').join("") + '</div></section>',
    '<section class="block"><h2>' + t("outcomes") + '</h2><ul class="outcomes">' + outcomeList.map((line) => '<li>' + line + '</li>').join("") + '</ul></section>'
  ].join("");
}

function wireControls() {
  document.getElementById("langBtn")?.addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    localStorage.setItem(LANG_KEY, state.lang);
    applyChrome();
    if (document.getElementById("casesGrid")) renderIndex();
    if (document.getElementById("caseRoot")) renderView();
  });
  document.getElementById("themeBtn")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, state.theme);
    applyChrome();
  });
}

async function boot() {
  applyChrome();
  wireControls();
  try { await loadCases(); } catch (error) { console.error(error); }
  if (document.getElementById("casesGrid")) renderIndex();
  if (document.getElementById("caseRoot")) renderView();
}

boot();