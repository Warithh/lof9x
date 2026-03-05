(() => {
  const GUIDE_BY_NAME = {
    ChatGPT: {
      en: {
        what: "General-purpose AI workspace for writing, coding, data analysis, brainstorming, and agent-style task execution.",
        bestFor: "Teams and individuals who need one assistant across many workflows.",
        steps: [
          "Start with a clear role + outcome (for example: 'Act as a product analyst and create a launch brief').",
          "Attach source files or paste real context to reduce hallucination.",
          "Ask for iterative outputs (v1 -> critique -> refined v2) instead of one-shot answers.",
          "Save reusable prompts and automate repetitive tasks through API or no-code tools."
        ],
        model: "Free tier available, with advanced paid plans and API usage."
      },
      ar: {
        what: "منصة ذكاء اصطناعي متعددة الاستخدامات للكتابة والبرمجة والتحليل والعصف الذهني وتنفيذ المهام المركبة.",
        bestFor: "الأفراد والفرق التي تحتاج مساعدًا واحدًا لعدة سيناريوهات عمل.",
        steps: [
          "ابدأ بدور واضح + نتيجة مطلوبة (مثال: تصرف كمحلل منتج وأنشئ ملخص إطلاق).",
          "أضف ملفاتك أو سياقًا حقيقيًا لتقليل الأخطاء.",
          "اعمل بأسلوب تكراري (نسخة أولى ثم تحسين) بدل طلب نتيجة واحدة نهائية.",
          "حوّل البرومبتات الناجحة إلى قوالب ثابتة أو أتمتة عبر API."
        ],
        model: "يتوفر بنسخة مجانية وخطط مدفوعة متقدمة مع API."
      }
    },
    Claude: {
      en: {
        what: "Strong long-context assistant for large documents, policy writing, deep reviews, and structured reasoning.",
        bestFor: "Legal, research, documentation, and long-form professional writing.",
        steps: [
          "Upload large files (reports/contracts/specs) and ask for section-by-section analysis.",
          "Request a risk table and assumptions list before final recommendations.",
          "Ask Claude to produce alternatives with pros/cons and decision criteria.",
          "Finalize with an executive summary and action checklist."
        ],
        model: "Mostly paid usage plans; API and enterprise options are available."
      },
      ar: {
        what: "مساعد قوي جدًا في التعامل مع المستندات الطويلة والتحليل المنطقي والكتابة الاحترافية.",
        bestFor: "البحث، التوثيق، السياسات، والكتابة الرسمية طويلة الصياغة.",
        steps: [
          "ارفع ملفات كبيرة واطلب تحليلًا على شكل أقسام واضحة.",
          "اطلب جدول مخاطر وافتراضات قبل التوصيات النهائية.",
          "اطلب بدائل متعددة مع مزايا/عيوب ومعايير اختيار.",
          "اختم بملخص تنفيذي وخطة تنفيذ عملية."
        ],
        model: "غالبًا عبر خطط مدفوعة مع API وخيارات مؤسسية."
      }
    },
    Gemini: {
      en: {
        what: "Multimodal assistant integrated with Google ecosystem for documents, search-backed tasks, and productivity.",
        bestFor: "Users who work heavily with Google Workspace and multimodal inputs.",
        steps: [
          "Use prompts tied to Google Docs/Sheets context when possible.",
          "Combine text + image inputs for richer outputs.",
          "Ask for structured outputs (tables/checklists) to reuse in Workspace.",
          "Use verification prompts to cross-check sources before publishing."
        ],
        model: "Has free access tiers plus premium plans and developer APIs."
      },
      ar: {
        what: "مساعد متعدد الوسائط متكامل مع منظومة Google للإنتاجية والبحث.",
        bestFor: "من يعملون بكثافة على Google Workspace ويحتاجون إدخالات متعددة الوسائط.",
        steps: [
          "استخدم سياق مستندات Google عند كتابة الطلبات.",
          "ادمج النص والصورة للحصول على نتائج أدق.",
          "اطلب ناتجًا منظمًا (جداول/قوائم) لسهولة إعادة الاستخدام.",
          "نفّذ خطوة تحقق من المصادر قبل اعتماد المحتوى."
        ],
        model: "يتضمن مستويات مجانية مع خطط مدفوعة وواجهات API."
      }
    },
    Perplexity: {
      en: {
        what: "AI answer engine focused on web-grounded responses with citations.",
        bestFor: "Fast fact-finding, market scanning, and source-backed research notes.",
        steps: [
          "Ask narrow questions first, then expand with follow-up prompts.",
          "Open cited links and verify at least 2 sources for critical decisions.",
          "Ask for a comparison table between competitors or methods.",
          "Export summarized findings into your project brief."
        ],
        model: "Free and paid plans; premium models available in paid tiers."
      },
      ar: {
        what: "محرك إجابات ذكي يعتمد على الويب ويعرض مصادر موثقة.",
        bestFor: "البحث السريع، تحليل السوق، وتجميع معلومات موثوقة.",
        steps: [
          "ابدأ بأسئلة ضيقة ثم وسّعها بأسئلة متابعة.",
          "راجع الروابط المصدرية وتحقق من مصدرين على الأقل للقرارات الحساسة.",
          "اطلب جدول مقارنة بين البدائل أو المنافسين.",
          "حوّل النتائج إلى ملخص تنفيذي داخل مشروعك."
        ],
        model: "يتوفر بخطط مجانية ومدفوعة مع نماذج أقوى في الخطط المدفوعة."
      }
    },
    Cursor: {
      en: {
        what: "AI-native IDE for repository-aware coding, refactoring, and debugging.",
        bestFor: "Developers shipping production code across medium/large codebases.",
        steps: [
          "Open relevant files and ask for targeted edits, not broad rewrites.",
          "Request diff-style changes and run checks after each major update.",
          "Use context-aware prompts referencing symbols/functions in your repo.",
          "Finalize with lint/test pass before commit."
        ],
        model: "Paid plans commonly used for full capabilities."
      },
      ar: {
        what: "بيئة تطوير ذكية واعية بسياق المشروع لإعادة الهيكلة والتصحيح والتطوير السريع.",
        bestFor: "المطورين الذين يبنون منتجات حقيقية داخل مشاريع متوسطة وكبيرة.",
        steps: [
          "افتح الملفات المعنية واطلب تعديلات دقيقة بدل إعادة كتابة شاملة.",
          "اطلب التعديلات بصيغة فرق (diff) ثم نفّذ فحوصات بعد كل تغيير كبير.",
          "استخدم أسماء الدوال/الملفات فعليًا داخل الطلبات.",
          "اختم باختبارات وLint قبل النشر."
        ],
        model: "يُستخدم غالبًا عبر خطط مدفوعة للاستفادة الكاملة."
      }
    },
    "GitHub Copilot": {
      en: {
        what: "Inline coding assistant for completion, test scaffolding, and quick refactors inside IDEs.",
        bestFor: "Developers who want faster implementation with minimal context switching.",
        steps: [
          "Write clear function signatures and let Copilot draft the first implementation.",
          "Ask it to generate tests immediately after code generation.",
          "Review generated code for edge cases and security assumptions.",
          "Use repository conventions to keep style and architecture consistent."
        ],
        model: "Paid subscription product with organizational plans."
      },
      ar: {
        what: "مساعد برمجي داخل محرر الكود للإكمال الذكي وتوليد الاختبارات والتحسين السريع.",
        bestFor: "المطورين الذين يريدون سرعة تنفيذ أعلى مع أقل تبديل بين الأدوات.",
        steps: [
          "اكتب توقيع دالة واضحًا ودع الأداة تولد النسخة الأولى.",
          "اطلب توليد الاختبارات مباشرة بعد توليد الكود.",
          "راجع الحالات الحدية والافتراضات الأمنية يدويًا.",
          "التزم بنمط المشروع للحفاظ على الاتساق المعماري."
        ],
        model: "خدمة اشتراك مدفوعة مع خطط للفرق."
      }
    },
    Midjourney: {
      en: {
        what: "High-fidelity image generation platform optimized for artistic direction and visual style control.",
        bestFor: "Branding concepts, art direction boards, and premium visual ideation.",
        steps: [
          "Start with style keywords + composition + lighting in one prompt.",
          "Generate multiple variations, then upscale the strongest direction.",
          "Refine with targeted prompt edits (materials, lens, mood, color).",
          "Export final outputs for social, branding, or pitch decks."
        ],
        model: "Paid subscription-based creative platform."
      },
      ar: {
        what: "منصة توليد صور عالية الجودة تركّز على التوجيه الفني والتحكم بالنمط البصري.",
        bestFor: "الهوية البصرية، أفكار الحملات، ولوحات التوجه الفني.",
        steps: [
          "ابدأ ببرومبت يحدد النمط والتكوين والإضاءة.",
          "ولّد عدة نسخ ثم اختر الأقوى واعمَل لها تحسين.",
          "عدّل البرومبت تدريجيًا (الألوان، الخامات، الجو العام).",
          "استخدم المخرجات النهائية في التسويق والعروض."
        ],
        model: "منصة إبداعية باشتراك مدفوع."
      }
    },
    "DALL-E": {
      en: {
        what: "Image generation/editing model useful for concept visuals and controlled image transformations.",
        bestFor: "Mockups, visual storytelling, and quick image editing iterations.",
        steps: [
          "Provide a detailed prompt with scene, subject, and style constraints.",
          "Use edit/inpaint flow to improve specific image regions.",
          "Iterate in small prompt changes for better control.",
          "Keep brand consistency by reusing style descriptors."
        ],
        model: "Paid usage in most production contexts."
      },
      ar: {
        what: "نموذج لتوليد وتحرير الصور مناسب للنماذج المفاهيمية وتعديلات الصور الدقيقة.",
        bestFor: "النماذج الأولية البصرية، السرد المرئي، والتحرير السريع.",
        steps: [
          "اكتب برومبت مفصل يتضمن المشهد والعناصر والنمط.",
          "استخدم التعديل الموضعي لتحسين أجزاء محددة من الصورة.",
          "كرر بتحسينات صغيرة في البرومبت للحصول على تحكم أعلى.",
          "ثبّت هوية بصرية موحدة عبر نفس وصف الأسلوب."
        ],
        model: "غالبًا استخدام مدفوع في الأعمال الفعلية."
      }
    },
    Runway: {
      en: {
        what: "AI video generation and editing suite for cinematic and marketing-ready visuals.",
        bestFor: "Short ads, explainers, concept videos, and creative experimentation.",
        steps: [
          "Create a short storyboard before generating clips.",
          "Generate scene-by-scene then assemble in timeline editor.",
          "Use style-consistent prompts to avoid visual drift.",
          "Finalize with subtitles, music, and export per platform format."
        ],
        model: "Mostly paid plans for high-quality generation."
      },
      ar: {
        what: "منصة توليد وتحرير فيديو بالذكاء الاصطناعي لإنتاج مشاهد سينمائية وتسويقية.",
        bestFor: "الإعلانات القصيرة، الفيديوهات التوضيحية، وتجارب المحتوى المرئي.",
        steps: [
          "جهّز ستوري بورد مختصر قبل التوليد.",
          "ولّد المشاهد على مراحل ثم اجمعها في خط زمني واحد.",
          "استخدم أوصافًا متسقة للحفاظ على الهوية البصرية.",
          "اختم بإضافة نصوص وموسيقى ثم صدّر حسب المنصة."
        ],
        model: "غالبًا خطط مدفوعة للجودة العالية."
      }
    },
    "n8n": {
      en: {
        what: "Open-source automation orchestrator for connecting apps, APIs, and AI agents.",
        bestFor: "Operations teams building repeatable workflows without vendor lock-in.",
        steps: [
          "Map the process first (trigger -> logic -> action).",
          "Build a minimal workflow and test with sample payloads.",
          "Add retries/error paths and notifications for failures.",
          "Version and monitor production workflows continuously."
        ],
        model: "Open-source with self-hosted and paid cloud options."
      },
      ar: {
        what: "منصة أتمتة مفتوحة المصدر لربط التطبيقات والـ APIs ووكلاء الذكاء الاصطناعي.",
        bestFor: "فرق العمليات التي تحتاج تدفقات قابلة للتكرار بدون ارتهان مزود واحد.",
        steps: [
          "ارسم المسار أولًا (Trigger -> Logic -> Action).",
          "ابنِ نسخة مصغرة واختبرها ببيانات تجريبية.",
          "أضف معالجة أخطاء وإعادة محاولة وتنبيهات.",
          "راقب التدفقات الإنتاجية وحدثها باستمرار."
        ],
        model: "مفتوح المصدر مع خيارات استضافة ذاتية أو سحابية مدفوعة."
      }
    }
  };

  const FALLBACK_BY_CATEGORY = {
    en: {
      "AI Chat": {
        bestFor: "Interactive reasoning, drafting, and daily assistant tasks.",
        steps: ["Define your task and constraints.", "Provide context examples.", "Iterate with critique.", "Store best prompts as templates."]
      },
      "Coding AI": {
        bestFor: "Implementation speed, debugging, and code quality improvements.",
        steps: ["Describe the bug/feature clearly.", "Generate draft code.", "Run tests/lint.", "Refactor and document final changes."]
      },
      "Image Generation": {
        bestFor: "Visual ideation, branding, and social media assets.",
        steps: ["Set style and composition.", "Generate multiple variants.", "Refine winning output.", "Export in target formats."]
      },
      "Video Generation": {
        bestFor: "Explainers, ads, and short video production.",
        steps: ["Write a mini storyboard.", "Generate scene clips.", "Edit pacing and text.", "Export by platform specs."]
      },
      "Research AI": {
        bestFor: "Evidence-backed answers and structured research synthesis.",
        steps: ["Ask scoped questions.", "Validate citations.", "Build comparison notes.", "Summarize decisions with sources."]
      },
      "Productivity AI": {
        bestFor: "Workflow acceleration for writing, planning, and communication.",
        steps: ["Define output format.", "Feed project context.", "Review and correct draft.", "Automate recurring tasks."]
      },
      "Audio AI": {
        bestFor: "Voiceovers, dubbing, and audio content workflows.",
        steps: ["Pick voice style/language.", "Generate sample clips.", "Adjust pacing and tone.", "Render final production audio."]
      },
      "Agents & Automation": {
        bestFor: "Autonomous workflows across tools and business systems.",
        steps: ["Identify trigger and outcome.", "Build first workflow.", "Add guardrails/error handling.", "Monitor execution metrics."]
      },
      "Presentation AI": {
        bestFor: "Executive decks and structured visual storytelling.",
        steps: ["Prepare core narrative.", "Generate initial deck.", "Refine data visuals.", "Finalize brand styling."]
      },
      "Data AI": {
        bestFor: "Forecasting, analytics, and KPI decision support.",
        steps: ["Clean source data.", "Build first model/dashboard.", "Validate with historical data.", "Deploy and track drift."]
      }
    },
    ar: {
      "AI Chat": {
        bestFor: "الاستدلال التفاعلي وصياغة المحتوى ومهام المساعد اليومي.",
        steps: ["حدد المطلوب بدقة.", "أضف سياقًا وأمثلة.", "كرر التحسين على المخرجات.", "احفظ البرومبتات الناجحة كقوالب."]
      },
      "Coding AI": {
        bestFor: "تسريع التطوير والتصحيح وتحسين جودة الكود.",
        steps: ["وضح الميزة أو المشكلة.", "ولّد مسودة كود.", "نفّذ اختبارات وLint.", "حسّن الكود وحدث التوثيق."]
      },
      "Image Generation": {
        bestFor: "التصميم البصري والهوية ومحتوى السوشال.",
        steps: ["حدد النمط والتكوين.", "ولّد عدة خيارات.", "حسّن أفضل نتيجة.", "صدّر بالمقاسات المناسبة."]
      },
      "Video Generation": {
        bestFor: "الفيديوهات التسويقية والشرح والإنتاج القصير.",
        steps: ["اكتب ستوري بورد مختصر.", "ولّد المشاهد.", "حرر الإيقاع والنص.", "صدّر حسب المنصة."]
      },
      "Research AI": {
        bestFor: "إجابات موثقة وتجميع بحثي منظم.",
        steps: ["ابدأ بأسئلة محددة.", "تحقق من الاستشهادات.", "ابنِ مقارنة بين الخيارات.", "اختم بملخص قرار موثق."]
      },
      "Productivity AI": {
        bestFor: "رفع إنتاجية الكتابة والتخطيط والتواصل.",
        steps: ["حدد تنسيق المخرج.", "أدخل سياق المشروع.", "راجع وصحح النتيجة.", "أتمت المهام المتكررة."]
      },
      "Audio AI": {
        bestFor: "التعليق الصوتي والدبلجة وإنتاج المحتوى الصوتي.",
        steps: ["اختر الصوت واللغة.", "أنشئ عينات أولية.", "عدّل الإيقاع والنبرة.", "أخرج النسخة النهائية."]
      },
      "Agents & Automation": {
        bestFor: "بناء تدفقات مستقلة تربط أدوات وأنظمة العمل.",
        steps: ["حدد الحدث والنتيجة.", "ابنِ التدفق الأولي.", "أضف حماية ومعالجة أخطاء.", "راقب الأداء بشكل مستمر."]
      },
      "Presentation AI": {
        bestFor: "إعداد عروض تنفيذية وسرد بصري احترافي.",
        steps: ["حدد القصة الأساسية.", "ولّد عرضًا أوليًا.", "حسن الرسوم والبيانات.", "اضبط هوية العرض النهائية."]
      },
      "Data AI": {
        bestFor: "التحليلات التنبؤية ودعم القرار بالمؤشرات.",
        steps: ["نظف البيانات أولًا.", "أنشئ نموذجًا/لوحة أولية.", "تحقق تاريخيًا من الدقة.", "انشر وراقب جودة النتائج."]
      }
    }
  };

  function hash(input) {
    let h = 0;
    const s = String(input || "");
    for (let i = 0; i < s.length; i += 1) h = (h << 5) - h + s.charCodeAt(i);
    return Math.abs(h);
  }

  function buildFallback(tool, lang) {
    const pack = FALLBACK_BY_CATEGORY[lang]?.[tool.category] || FALLBACK_BY_CATEGORY.en["AI Chat"];
    const name = tool.nameEn || tool.name || "";
    const what = lang === "ar"
      ? `${name}: أداة ضمن فئة ${tool.category} تُستخدم عمليًا لتحسين سرعة الإنجاز وجودة النتائج.`
      : `${name}: practical ${tool.category} tool used to improve execution speed and output quality.`;
    const shift = hash(name) % pack.steps.length;
    const rotated = pack.steps.map((_, i) => pack.steps[(i + shift) % pack.steps.length]);
    const model = lang === "ar"
      ? ((tool.badges || []).includes("Free") ? "يتوفر مستوى مجاني مع خيارات مدفوعة بحسب الاستخدام." : "الاستخدام غالبًا عبر خطط مدفوعة أو مؤسسية.")
      : ((tool.badges || []).includes("Free") ? "Usually offers free access plus paid expansion paths." : "Usually consumed via paid or enterprise plans.");
    return { what, bestFor: pack.bestFor, steps: rotated, model };
  }

  function getToolGuide(tool, lang = "en") {
    const key = tool.nameEn || tool.nameObj?.en || tool.name || "";
    const specific = GUIDE_BY_NAME[key]?.[lang];
    if (specific) return specific;
    return buildFallback(tool, lang);
  }

  window.getToolGuide = getToolGuide;
})();
