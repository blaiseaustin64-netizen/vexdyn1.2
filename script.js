/* ============================================
   VEXDYN — Core Script (Final UI/UX + Intro)
   ============================================ */
(function () {
  "use strict";

  const THEMES = ["obsidian", "aurora", "ice"];
  const THEME_ICONS = { obsidian: "🌙", aurora: "☀️", ice: "❄️" };
  const SEARCH_ITEMS = [
    { title: "Home", desc: "VEXDYN homepage", href: "index.html", keywords: "home start main" },
    { title: "Websites", desc: "Request a professional website", href: "websites.html", keywords: "website websites build service business commerce" },
    { title: "Learn", desc: "Technology learning paths", href: "learn.html", keywords: "learn learning html css javascript python react course" },
    { title: "VEXDYN+", desc: "Premium access & plans", href: "plus.html", keywords: "plus premium subscription plan pricing" },
    { title: "About", desc: "About VEXDYN & founder", href: "about.html", keywords: "about founder david" },
    { title: "Contact", desc: "Get in touch", href: "contact.html", keywords: "contact email phone message" },
    { title: "Builder", desc: "Future VEXDYN Builder", href: "index.html#builder", keywords: "builder create yourself future coming" },
    { title: "Services", desc: "Website creation services", href: "websites.html", keywords: "services business commerce creative custom" }
  ];

  function getStoredTheme() {
    try {
      const t = localStorage.getItem("vexdyn-theme");
      return THEMES.includes(t) ? t : "obsidian";
    } catch { return "obsidian"; }
  }

  const LOGO_SRC = {
    obsidian: "vexdyn-logo-wordmark-alpha.png",
    aurora: "vexdyn-aurora-alpha.png",
    ice: "vexdyn-ice-alpha.png"
  };

  function setTheme(theme) {
    if (!THEMES.includes(theme)) theme = "obsidian";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("vexdyn-theme", theme); } catch {}
    const btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = THEME_ICONS[theme];
    document.querySelectorAll(".theme-option").forEach((el) => {
      el.classList.toggle("active", el.dataset.theme === theme);
    });
    // Single logo swap — only one image visible
    document.querySelectorAll(".logo-swap").forEach((img) => {
      img.src = LOGO_SRC[theme] || LOGO_SRC.obsidian;
    });
  }

  function initTheme() {
    setTheme(getStoredTheme());
    const btn = document.getElementById("themeBtn");
    const panel = document.getElementById("themePanel");
    if (!btn || !panel) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      panel.classList.toggle("open");
      closeSearch();
    });
    panel.querySelectorAll(".theme-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        setTheme(opt.dataset.theme);
        panel.classList.remove("open");
      });
    });
    document.addEventListener("click", () => panel.classList.remove("open"));
  }

  function initNav() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMobile");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      nav.classList.toggle("open");
      document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        nav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- SEARCH ---- */
  function closeSearch() {
    const overlay = document.getElementById("searchOverlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  function openSearch() {
    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInput");
    if (!overlay) return;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => { if (input) input.focus(); }, 120);
    renderSearchResults("");
  }

  function renderSearchResults(query) {
    const list = document.getElementById("searchResults");
    if (!list) return;
    const q = (query || "").trim().toLowerCase();
    const matches = q
      ? SEARCH_ITEMS.filter((item) =>
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.keywords.includes(q)
        )
      : SEARCH_ITEMS;

    if (!matches.length) {
      list.innerHTML = '<div class="search-empty">No results found</div>';
      return;
    }
    list.innerHTML = matches.map((item) =>
      `<a href="${item.href}" class="search-result">
        <div class="search-result-title">${item.title}</div>
        <div class="search-result-desc">${item.desc}</div>
      </a>`
    ).join("");
  }

  function initSearch() {
    const btn = document.getElementById("cmdBtn");
    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInput");
    const closeBtn = document.getElementById("searchClose");
    if (!btn || !overlay) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openSearch();
      const theme = document.getElementById("themePanel");
      if (theme) theme.classList.remove("open");
    });

    if (closeBtn) closeBtn.addEventListener("click", closeSearch);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSearch();
    });

    if (input) {
      input.addEventListener("input", () => renderSearchResults(input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeSearch();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
    });
  }

  /* ---- CINEMATIC INTRO ---- */
  function initLoader() {
    const overlay = document.getElementById("loader");
    if (!overlay) {
      document.body.classList.add("loaded");
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let isFirstVisit = true;
    try {
      isFirstVisit = localStorage.getItem("vexdyn-visited") !== "1";
    } catch {}

    if (prefersReduced) {
      try { localStorage.setItem("vexdyn-visited", "1"); } catch {}
      overlay.classList.add("done");
      document.body.classList.add("loaded");
      return;
    }

    const symbol = document.getElementById("loaderSymbol");
    const lockup = document.getElementById("loaderLockup");
    const sweep = document.getElementById("loaderSweep");
    const system = document.getElementById("loaderSystem");
    const sysMsg = document.getElementById("loaderSysMsg");
    const progressFill = document.getElementById("loaderProgressFill");
    const finalMsg = document.getElementById("loaderFinal");
    const line1 = document.getElementById("loaderLine1");
    const line2 = document.getElementById("loaderLine2");

    const messages = [
      "INITIALIZING CORE",
      "SYNCING INTERFACE",
      "CALIBRATING ENVIRONMENT",
      "LOADING DIGITAL SYSTEM",
      "ESTABLISHING CONNECTION",
      "SYSTEM READY"
    ];

    function finish() {
      try { localStorage.setItem("vexdyn-visited", "1"); } catch {}
      overlay.classList.add("done");
      document.body.classList.add("loaded");
    }

    // RETURNING VISITOR — short path (~1.5–2s)
    if (!isFirstVisit) {
      if (symbol) symbol.classList.add("visible");
      setTimeout(() => {
        if (symbol) { symbol.classList.add("hide"); symbol.classList.remove("visible"); }
        if (lockup) lockup.classList.add("visible");
      }, 500);
      setTimeout(finish, 1800);
      return;
    }

    // FIRST VISIT — full cinematic sequence (max ~9s)
    let msgIndex = 0;
    let progress = 0;

    // 1. Symbol appears
    setTimeout(() => {
      if (symbol) symbol.classList.add("visible");
    }, 300);

    // 2. Silver metallic sweep
    setTimeout(() => {
      if (sweep) sweep.classList.add("active");
    }, 1400);

    // 3. Hide symbol, show lockup
    setTimeout(() => {
      if (symbol) {
        symbol.classList.add("hide");
        symbol.classList.remove("visible");
      }
    }, 2400);

    setTimeout(() => {
      if (lockup) lockup.classList.add("visible");
    }, 2700);

    // 4. System initialization
    setTimeout(() => {
      if (lockup) lockup.classList.add("dim");
      if (system) system.classList.add("visible");
    }, 3800);

    // Progress + rotating messages
    const progressInterval = setInterval(() => {
      progress += 1.8;
      if (progress > 100) progress = 100;
      if (progressFill) progressFill.style.width = progress + "%";
    }, 80);

    const msgInterval = setInterval(() => {
      if (sysMsg && msgIndex < messages.length) {
        sysMsg.style.opacity = "0";
        setTimeout(() => {
          sysMsg.textContent = messages[msgIndex];
          sysMsg.style.opacity = "1";
          msgIndex++;
        }, 180);
      }
    }, 700);

    // 5. Final message
    setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      if (progressFill) progressFill.style.width = "100%";
      if (system) system.classList.add("hide");
      if (lockup) lockup.classList.add("hide");
      if (finalMsg) finalMsg.classList.add("visible");
      setTimeout(() => { if (line1) line1.classList.add("visible"); }, 100);
      setTimeout(() => { if (line2) line2.classList.add("visible"); }, 500);
    }, 7200);

    // 6. Exit to homepage
    setTimeout(finish, 9200);
  }

  /* ---- REVEAL + PROCESS STAGGER ---- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  function initProcessStagger() {
    const track = document.getElementById("processTrack");
    if (!track) return;
    const cards = track.querySelectorAll(".process-card");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("stagger-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add("stagger-in"), i * 120);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    io.observe(track);
  }

  function animateProgress(el, target) {
    const fill = el.querySelector(".progress-fill");
    const num = el.querySelector(".progress-num");
    if (!fill || !num) return;
    const duration = 1500;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * target);
      fill.style.width = current + "%";
      num.textContent = current + "%";
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initProgress() {
    const cards = document.querySelectorAll(".learn-card[data-progress]");
    if (!cards.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.dataset.progress, 10) || 0;
          animateProgress(e.target, target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.28 });
    cards.forEach((c) => io.observe(c));
  }

  function initPricing() {
    const toggle = document.getElementById("pricingToggle");
    const monthlyBtn = document.getElementById("toggleMonthly");
    const yearlyBtn = document.getElementById("toggleYearly");
    const amountEl = document.getElementById("plusAmount");
    const periodEl = document.getElementById("plusPeriod");
    const saveEl = document.getElementById("plusSave");
    if (!monthlyBtn || !yearlyBtn || !amountEl) return;

    const prices = {
      monthly: { amount: "₦4,999", period: "/ month", save: "" },
      yearly: { amount: "₦49,990", period: "/ year", save: "Save ~17%" }
    };

    function setPlan(plan) {
      monthlyBtn.classList.toggle("active", plan === "monthly");
      yearlyBtn.classList.toggle("active", plan === "yearly");
      if (toggle) toggle.classList.toggle("yearly", plan === "yearly");
      amountEl.style.opacity = "0";
      amountEl.style.transform = "translateY(5px)";
      setTimeout(() => {
        amountEl.textContent = prices[plan].amount;
        if (periodEl) periodEl.textContent = prices[plan].period;
        if (saveEl) {
          saveEl.textContent = prices[plan].save;
          saveEl.style.visibility = prices[plan].save ? "visible" : "hidden";
        }
        amountEl.style.opacity = "1";
        amountEl.style.transform = "translateY(0)";
      }, 160);
    }

    monthlyBtn.addEventListener("click", () => setPlan("monthly"));
    yearlyBtn.addEventListener("click", () => setPlan("yearly"));
  }

  
  /* ---- CODE → LANGUAGE TRANSFORM ---- */
  const CODE_CHARS = "01ABCDEFXVYZ#@$%&*+=";
  const MESSAGES = [
    "BUILD YOUR CUSTOM WEB",
    "LEARN THE TOOLS OF TOMORROW",
    "TURN IDEAS INTO DIGITAL REALITY",
    "CREATE. DESIGN. DEVELOP. LAUNCH.",
    "EXPLORE THE NEXT GENERATION OF TECH",
    "YOUR DIGITAL FUTURE STARTS HERE."
  ];

  function initCodeTransform() {
    const el = document.getElementById("codeTransform");
    if (!el) return;

    let msgIndex = 0;
    let phase = "scramble";
    let frame = 0;
    let target = MESSAGES[0];
    /* Desktop: snappier transition; hold ~5s for readability.
       Mobile: keep smooth moderate timing. */
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const SCRAMBLE = isDesktop ? 18 : 26;
    const MORPH = isDesktop ? 20 : 30;
    const HOLD = isDesktop ? 300 : 240; /* ~5s desktop, ~4s mobile at 60fps */
    const DISSOLVE = isDesktop ? 16 : 22;

    function randChar() {
      return CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    }

    function scrambleStr(len) {
      let s = "";
      for (let i = 0; i < len; i++) s += randChar();
      return s;
    }

    function loop() {
      frame++;
      if (phase === "scramble") {
        el.textContent = scrambleStr(Math.max(target.length, 22));
        el.classList.remove("resolved");
        if (frame >= SCRAMBLE) { phase = "morph"; frame = 0; }
      } else if (phase === "morph") {
        const p = frame / MORPH;
        let out = "";
        for (let i = 0; i < target.length; i++) {
          out += (Math.random() < p * p * 1.1) ? target[i] : randChar();
        }
        el.textContent = out;
        if (frame >= MORPH) {
          el.textContent = target;
          el.classList.add("resolved");
          phase = "hold";
          frame = 0;
        }
      } else if (phase === "hold") {
        if (frame >= HOLD) {
          el.classList.remove("resolved");
          phase = "dissolve";
          frame = 0;
        }
      } else if (phase === "dissolve") {
        const p = frame / DISSOLVE;
        let out = "";
        for (let i = 0; i < target.length; i++) {
          out += (Math.random() < p) ? randChar() : target[i];
        }
        el.textContent = out;
        if (frame >= DISSOLVE) {
          msgIndex = (msgIndex + 1) % MESSAGES.length;
          target = MESSAGES[msgIndex];
          phase = "scramble";
          frame = 0;
        }
      }
      requestAnimationFrame(loop);
    }

    // Start immediately and also ensure start after short delay (covers loader)
    requestAnimationFrame(loop);
    el.textContent = scrambleStr(24);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initSearch();
    initLoader();
    initReveal();
    initProcessStagger();
    initProgress();
    initPricing();
    initCodeTransform();
  });
})();
