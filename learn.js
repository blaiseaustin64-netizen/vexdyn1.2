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
          <div class="course-progress-bar"><div class="course-progress-fill" data-progress-fill style="width:${course.progress}%"></div></div>
          <span class="course-progress-num" data-progress-num>${course.progress}%</span>
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
          <div class="path-pct">${c.progress}%</div>
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

    updateJourney(COURSES);
    if (pathTrack) pathTrack.innerHTML = renderPath(COURSES);
    renderCourses(COURSES);

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
      // Build 1: lessons not yet available
      const notice = document.getElementById("courseNotice");
      if (notice) {
        notice.hidden = false;
        notice.textContent = "Lessons coming in Build 2 — progress tracking will connect here.";
        setTimeout(() => { notice.hidden = true; }, 3200);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initLearn);

  // Expose for Build 2
  window.VEXDYN_LEARN = { COURSES, statusFromProgress, updateJourney, renderCourses };
})();
