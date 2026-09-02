/* ============================================
   VEXDYN Learn — Build 1 Foundation
   Course data + UI (progress engine = Build 2)
   ============================================ */
(function () {
  "use strict";

  /** Course catalog — all progress 0 for Build 1 */
  const COURSES = [
    {
      id: "html",
      name: "HTML",
      fullName: "HyperText Markup Language",
      description: "Structure the web with semantic markup and accessible document foundations.",
      color: "#e34f26",
      colorSoft: "rgba(227, 79, 38, 0.14)",
      difficulty: "Beginner",
      category: "web",
      lessons: 20,
      progress: 0,
      status: "not-started",
      pathOrder: 1
    },
    {
      id: "css",
      name: "CSS",
      fullName: "Cascading Style Sheets",
      description: "Design responsive layouts, motion and visual systems for modern interfaces.",
      color: "#1572b6",
      colorSoft: "rgba(21, 114, 182, 0.14)",
      difficulty: "Beginner",
      category: "web",
      lessons: 24,
      progress: 0,
      status: "not-started",
      pathOrder: 2
    },
    {
      id: "javascript",
      name: "JavaScript",
      fullName: "JavaScript",
      description: "Add interactivity, logic and dynamic behaviour to digital experiences.",
      color: "#f7df1e",
      colorSoft: "rgba(247, 223, 30, 0.16)",
      difficulty: "Intermediate",
      category: "web",
      lessons: 32,
      progress: 0,
      status: "not-started",
      pathOrder: 3
    },
    {
      id: "react",
      name: "React",
      fullName: "React",
      description: "Build component-driven interfaces with the modern frontend library.",
      color: "#61dafb",
      colorSoft: "rgba(97, 218, 251, 0.14)",
      difficulty: "Advanced",
      category: "web",
      lessons: 36,
      progress: 0,
      status: "not-started",
      pathOrder: 4
    }
  ];

  const STATUS_LABEL = {
    "not-started": "NOT STARTED",
    "in-progress": "IN PROGRESS",
    "completed": "COMPLETED"
  };

  const STATUS_CTA = {
    "not-started": "START LEARNING",
    "in-progress": "CONTINUE",
    "completed": "REVIEW"
  };

  /** Recognizable tech logos (inline SVG) */
  const LOGOS = {
    html: `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#E34F26" d="M4 2l2.2 24.8L16 30l9.8-3.2L28 2H4zm18.1 8.2H11.2l.3 3.2h10.3l-.9 10.1L16 25.1l-4.6-1.2-.3-3.3h3.2l.2 1.7 1.5.4 1.5-.4.2-2.1H11.1L10.4 8h11.4l.3 2.2z"/></svg>`,
    css: `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#1572B6" d="M4 2l2.2 24.8L16 30l9.8-3.2L28 2H4zm17.5 8.3l-.4 4.1-.2 2.2H11.2l.2 2.4h9.5l-.1 1.2-.7 7.7L16 25.3l-4.1-1.1-.3-3h-3.2l.5 5.6L16 29l7.1-2 1-10.6.2-2.2.4-4.9H9.8l-.3-3.2h12z"/></svg>`,
    javascript: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><path fill="#323330" d="M18.2 23.6c.4.7.8 1.3 1.8 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.6-1.6l-.6-.2c-1.6-.7-2.7-1.6-2.7-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.5.5 3.2 1.8l-1.8 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.6.3c1.9.8 3 1.8 3 3.8 0 2.1-1.7 3.3-3.9 3.3-2.2 0-3.6-1-4.3-2.4l1.9-1.1zm-7.4.2c.3.5.6.9 1.2.9.6 0 1-.2 1-.8V15h2.3v8.9c0 2.4-1.4 3.5-3.4 3.5-1.8 0-2.9-.9-3.4-2.1l1.9-1.1z"/></svg>`,
    react: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="2.4" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" stroke-width="1.6"><ellipse cx="16" cy="16" rx="11" ry="4.2"/><ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)"/></g></svg>`
  };

  function statusFromProgress(p) {
    if (p >= 100) return "completed";
    if (p > 0) return "in-progress";
    return "not-started";
  }

  function renderCourseCard(course) {
    const status = course.status || statusFromProgress(course.progress);
    const logo = LOGOS[course.id] || "";
    return `
      <article class="course-card reveal" data-course-id="${course.id}" data-category="${course.category}" data-name="${course.name.toLowerCase()}" style="--tech-color:${course.color};--tech-soft:${course.colorSoft}">
        <div class="course-card-accent"></div>
        <div class="course-logo" aria-hidden="true">${logo}</div>
        <h3 class="course-name">${course.name}</h3>
        <p class="course-fullname">${course.fullName}</p>
        <p class="course-desc">${course.description}</p>
        <div class="course-meta">
          <span class="course-diff">${course.difficulty}</span>
          <span class="course-lessons">${course.lessons} Lessons</span>
        </div>
        <div class="course-progress">
          <div class="course-progress-bar"><div class="course-progress-fill" data-progress-fill data-target-progress="${course.progress}" style="width:0%;background:${course.color}"></div></div>
          <span class="course-progress-num" data-progress-num data-target-progress="${course.progress}">0%</span>
        </div>
        <div class="course-status" data-status>${STATUS_LABEL[status]}</div>
        <button type="button" class="btn btn-primary course-cta" data-course-cta data-id="${course.id}">${STATUS_CTA[status]} →</button>
      </article>`;
  }

  function renderPath(courses) {
    const ordered = courses.slice().sort((a, b) => a.pathOrder - b.pathOrder);
    return ordered.map((c, i) => {
      const logo = LOGOS[c.id] || "";
      return `
        <div class="path-node" style="--tech-color:${c.color}">
          <div class="path-logo">${logo}</div>
          <div class="path-name">${c.name}</div>
          <div class="path-pct" data-journey-pct data-target-progress="${c.progress}">0%</div>
        </div>
        ${i < ordered.length - 1 ? '<span class="path-arrow" aria-hidden="true">→</span>' : ""}
      `;
    }).join("");
  }

  function updateJourney(courses) {
    const total = courses.length;
    const sum = courses.reduce((s, c) => s + (c.progress || 0), 0);
    const avg = total ? Math.round(sum / total) : 0;
    const progressEl = document.getElementById("journeyProgress");
    const barEl = document.getElementById("journeyBarFill");
    const coursesEl = document.getElementById("journeyCourses");
    const statusEl = document.getElementById("journeyStatus");
    if (progressEl) progressEl.textContent = avg + "%";
    if (barEl) barEl.style.width = avg + "%";
    if (coursesEl) coursesEl.textContent = String(total);
    if (statusEl) {
      statusEl.textContent = avg === 0 ? "NOT STARTED" : avg >= 100 ? "COMPLETED" : "IN PROGRESS";
    }
  }

  function filterCourses(query, category) {
    const q = (query || "").trim().toLowerCase();
    return COURSES.filter((c) => {
      const matchCat = !category || category === "all" || c.category === category;
      const matchQ = !q ||
        c.name.toLowerCase().includes(q) ||
        c.fullName.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.difficulty.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }

  function renderCourses(list) {
    const grid = document.getElementById("courseGrid");
    const empty = document.getElementById("courseEmpty");
    if (!grid) return;
    if (!list.length) {
      grid.innerHTML = "";
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;
    grid.innerHTML = list.map(renderCourseCard).join("");
    // re-observe reveals
    if (typeof window !== "undefined") {
      const els = grid.querySelectorAll(".reveal");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach((el) => io.observe(el));
    }
  }

  function initLearn() {
    const grid = document.getElementById("courseGrid");
    const pathTrack = document.getElementById("pathTrack");
    const searchInput = document.getElementById("courseSearch");
    const filterBtns = document.querySelectorAll("[data-course-filter]");
    if (!grid) return;

    // Sync course progress from localStorage if available
    try {
      const raw = localStorage.getItem("vexdyn-learn-html");
      if (raw) {
        const data = JSON.parse(raw);
        const done = Array.isArray(data.completed) ? data.completed.length : 0;
        const pct = Math.round((done / 20) * 100);
        const htmlC = COURSES.find((c) => c.id === "html");
        if (htmlC) {
          htmlC.progress = pct;
          htmlC.status = pct === 0 ? "not-started" : pct >= 100 ? "completed" : "in-progress";
        }
      }
    } catch {}
    try {
      const rawCss = localStorage.getItem("vexdyn-learn-css");
      if (rawCss) {
        const data = JSON.parse(rawCss);
        const done = Array.isArray(data.completed) ? data.completed.length : 0;
        const pct = Math.round((done / 24) * 100);
        const cssC = COURSES.find((c) => c.id === "css");
        if (cssC) {
          cssC.progress = pct;
          cssC.status = pct === 0 ? "not-started" : pct >= 100 ? "completed" : "in-progress";
        }
      }
    } catch {}

    try {
      const rawJs = localStorage.getItem("vexdyn-learn-js");
      if (rawJs) {
        const data = JSON.parse(rawJs);
        const done = Array.isArray(data.completed) ? data.completed.length : 0;
        const pct = Math.round((done / 32) * 100);
        const jsC = COURSES.find((c) => c.id === "javascript");
        if (jsC) {
          jsC.progress = pct;
          jsC.status = pct === 0 ? "not-started" : pct >= 100 ? "completed" : "in-progress";
        }
      }
    } catch {}

    try {
      const rawReact = localStorage.getItem("vexdyn-learn-react");
      if (rawReact) {
        const data = JSON.parse(rawReact);
        const done = Array.isArray(data.completed) ? data.completed.length : 0;
        const pct = Math.round((done / 36) * 100);
        const rC = COURSES.find((c) => c.id === "react");
        if (rC) {
          rC.progress = pct;
          rC.status = pct === 0 ? "not-started" : pct >= 100 ? "completed" : "in-progress";
        }
      }
    } catch {}

    updateJourney(COURSES);
    if (pathTrack) pathTrack.innerHTML = renderPath(COURSES);
    renderCourses(COURSES);
    // Always schedule progress animation:
    // - if entry loader exists, finish() will also call this (re-entry safe via double-call is OK)
    // - if loader already gone, run shortly after paint
    setTimeout(function () {
      animateCatalogProgress();
    }, document.getElementById("learnEntryLoader") ? 2600 : 200);

    let activeFilter = "all";

    function applyFilter() {
      const q = searchInput ? searchInput.value : "";
      renderCourses(filterCourses(q, activeFilter));
    }

    if (searchInput) {
      searchInput.addEventListener("input", applyFilter);
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.courseFilter || "all";
        applyFilter();
      });
    });

    document.addEventListener("click", (e) => {
      const cta = e.target.closest("[data-course-cta]");
      if (!cta) return;
      const id = cta.getAttribute("data-id");
      // Fallback openers if dedicated scripts missed the event
      if (id === "css") {
        e.preventDefault();
        const catalog = document.getElementById("learnCatalog");
        const cssCourse = document.getElementById("cssCourseView");
        const cssLesson = document.getElementById("cssLessonView");
        const htmlCourse = document.getElementById("htmlCourseView");
        const htmlLesson = document.getElementById("htmlLessonView");
        if (catalog) catalog.hidden = true;
        if (htmlCourse) htmlCourse.hidden = true;
        if (htmlLesson) htmlLesson.hidden = true;
        if (cssLesson) cssLesson.hidden = true;
        const jsCourse = document.getElementById("jsCourseView");
        const jsLesson = document.getElementById("jsLessonView");
        if (jsCourse) jsCourse.hidden = true;
        if (jsLesson) jsLesson.hidden = true;
        if (cssCourse) {
          cssCourse.hidden = false;
          // Ask css-course.js to render list if available
          if (window.VEXDYN_CSS_COURSE && typeof window.VEXDYN_CSS_COURSE.renderCourseList === "function") {
            window.VEXDYN_CSS_COURSE.renderCourseList();
          } else {
            // dispatch a custom event the course script listens for
            document.dispatchEvent(new CustomEvent("vexdyn-open-css-course"));
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      if (id === "html") {
        e.preventDefault();
        const catalog = document.getElementById("learnCatalog");
        const htmlCourse = document.getElementById("htmlCourseView");
        const htmlLesson = document.getElementById("htmlLessonView");
        const cssCourse = document.getElementById("cssCourseView");
        const cssLesson = document.getElementById("cssLessonView");
        const jsCourse = document.getElementById("jsCourseView");
        const jsLesson = document.getElementById("jsLessonView");
        if (catalog) catalog.hidden = true;
        if (cssCourse) cssCourse.hidden = true;
        if (cssLesson) cssLesson.hidden = true;
        if (jsCourse) jsCourse.hidden = true;
        if (jsLesson) jsLesson.hidden = true;
        if (htmlLesson) htmlLesson.hidden = true;
        if (htmlCourse) {
          htmlCourse.hidden = false;
          if (window.VEXDYN_HTML_COURSE && typeof window.VEXDYN_HTML_COURSE.renderCourseList === "function") {
            window.VEXDYN_HTML_COURSE.renderCourseList();
          } else {
            document.dispatchEvent(new CustomEvent("vexdyn-open-html-course"));
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      if (id === "javascript") {
        e.preventDefault();
        const catalog = document.getElementById("learnCatalog");
        const htmlCourse = document.getElementById("htmlCourseView");
        const htmlLesson = document.getElementById("htmlLessonView");
        const cssCourse = document.getElementById("cssCourseView");
        const cssLesson = document.getElementById("cssLessonView");
        const jsCourse = document.getElementById("jsCourseView");
        const jsLesson = document.getElementById("jsLessonView");
        if (catalog) catalog.hidden = true;
        if (htmlCourse) htmlCourse.hidden = true;
        if (htmlLesson) htmlLesson.hidden = true;
        if (cssCourse) cssCourse.hidden = true;
        if (cssLesson) cssLesson.hidden = true;
        if (jsLesson) jsLesson.hidden = true;
        const reactCourse = document.getElementById("reactCourseView");
        const reactLesson = document.getElementById("reactLessonView");
        if (reactCourse) reactCourse.hidden = true;
        if (reactLesson) reactLesson.hidden = true;
        if (jsCourse) {
          jsCourse.hidden = false;
          if (window.VEXDYN_JS_COURSE && typeof window.VEXDYN_JS_COURSE.renderCourseList === "function") {
            window.VEXDYN_JS_COURSE.renderCourseList();
          } else if (window.VEXDYN_JS_COURSE && typeof window.VEXDYN_JS_COURSE.openJsCourse === "function") {
            window.VEXDYN_JS_COURSE.openJsCourse();
          } else {
            document.dispatchEvent(new CustomEvent("vexdyn-open-js-course"));
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      if (id === "react") {
        e.preventDefault();
        const catalog = document.getElementById("learnCatalog");
        ["htmlCourseView","htmlLessonView","cssCourseView","cssLessonView","jsCourseView","jsLessonView","reactLessonView"].forEach((vid) => {
          const el = document.getElementById(vid);
          if (el) el.hidden = true;
        });
        if (catalog) catalog.hidden = true;
        const reactCourse = document.getElementById("reactCourseView");
        if (reactCourse) {
          reactCourse.hidden = false;
          if (window.VEXDYN_REACT_COURSE && typeof window.VEXDYN_REACT_COURSE.renderCourseList === "function") {
            window.VEXDYN_REACT_COURSE.renderCourseList();
          } else if (window.VEXDYN_REACT_COURSE && typeof window.VEXDYN_REACT_COURSE.openReactCourse === "function") {
            window.VEXDYN_REACT_COURSE.openReactCourse();
          } else {
            document.dispatchEvent(new CustomEvent("vexdyn-open-react-course"));
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      const notice = document.getElementById("courseNotice");
      if (notice) {
        notice.hidden = false;
        notice.textContent = "HTML, CSS, JavaScript, and React are available in VEXDYN Learn.";
        setTimeout(() => { notice.hidden = true; }, 3200);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initLearn);

  // Expose for Build 2
  
  function animateCatalogProgress() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(document.querySelectorAll("#courseGrid .course-card[data-course-id]"));
    if (!cards.length) return;

    cards.forEach(function (card, index) {
      const fill = card.querySelector("[data-progress-fill]");
      const num = card.querySelector("[data-progress-num]");
      if (!fill) return;

      var target = parseFloat(fill.getAttribute("data-target-progress") || "0");
      if (isNaN(target)) target = 0;
      target = Math.max(0, Math.min(100, target));

      // Reset visual display to 0 without touching stored progress
      fill.style.transition = "none";
      fill.style.width = "0%";
      if (num) num.textContent = "0%";
      // Force reflow so the browser registers the 0% state
      void fill.offsetWidth;

      var delay = reduce ? 0 : index * 180;
      var duration = reduce ? 0 : (target <= 15 ? 1100 : target <= 55 ? 1400 : 1650);

      setTimeout(function () {
        if (reduce || duration === 0) {
          fill.style.width = target + "%";
          if (num) num.textContent = Math.round(target) + "%";
          return;
        }

        var t0 = performance.now();
        function frame(now) {
          var t = Math.min(1, (now - t0) / duration);
          // easeOutCubic
          var eased = 1 - Math.pow(1 - t, 3);
          var val = target * eased;
          fill.style.width = val + "%";
          if (num) num.textContent = Math.round(val) + "%";
          if (t < 1) {
            requestAnimationFrame(frame);
          } else {
            fill.style.width = target + "%";
            if (num) num.textContent = Math.round(target) + "%";
          }
        }
        requestAnimationFrame(frame);
      }, delay);
    });

    // Journey / overall tracker numbers if present
    var journeyPct = document.querySelectorAll("[data-journey-pct]");
    journeyPct.forEach(function (el, i) {
      var target = parseFloat(el.getAttribute("data-target-progress") || el.textContent) || 0;
      if (reduce) {
        el.textContent = Math.round(target) + "%";
        return;
      }
      el.textContent = "0%";
      var delay = 80 + i * 120;
      var duration = 1300;
      setTimeout(function () {
        var t0 = performance.now();
        function frame(now) {
          var t = Math.min(1, (now - t0) / duration);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + "%";
          if (t < 1) requestAnimationFrame(frame);
          else el.textContent = Math.round(target) + "%";
        }
        requestAnimationFrame(frame);
      }, delay);
    });
  }

  window.VEXDYN_LEARN = { COURSES, statusFromProgress, updateJourney, renderCourses, animateCatalogProgress };
  // Step-back support for Learn views
  window.addEventListener("popstate", function (e) {
    if (!e.state || !e.state.vexdynLearn) return;
    var catalog = document.getElementById("learnCatalog");
    var views = ["htmlCourseView","htmlLessonView","cssCourseView","cssLessonView","jsCourseView","jsLessonView","reactCourseView","reactLessonView"];
    if (e.state.vexdynLearn === "catalog") {
      views.forEach(function (id) { var el = document.getElementById(id); if (el) el.hidden = true; });
      if (catalog) catalog.hidden = false;
      if (typeof animateCatalogProgress === "function") setTimeout(animateCatalogProgress, 100);
    }
  });

})();
