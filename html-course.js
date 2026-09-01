/* ============================================
   VEXDYN Learn — HTML Course (20 Lessons)
   Progress via localStorage. All unlocked (no VEXDYN+ yet).
   ============================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "vexdyn-learn-html";

  const LESSONS = [
    {
      id: 1,
      title: "ENTER THE WEB",
      mission: "Understand what HTML is and why websites need it.",
      definitions: [
        "HTML (HyperText Markup Language) is the standard markup language used to structure content on webpages.",
        "A markup language uses special tags to describe and organize content rather than performing programming logic."
      ],
      example: `<h1>Welcome to VEXDYN</h1>\n<p>Create beyond limits. Power your digital future.</p>`,
      challenge: "Create a heading containing your name and a paragraph explaining what you want to learn."
    },
    {
      id: 2,
      title: "THE DNA OF A WEBPAGE",
      mission: "Understand the basic HTML document structure.",
      definitions: [
        "An HTML document is a file containing HTML code that a browser interprets and displays as a webpage.",
        "Document structure is the organized arrangement of the different parts of an HTML document."
      ],
      example: `<!DOCTYPE html>\n<html>\n<head>\n    <title>VEXDYN</title>\n</head>\n<body>\n    <h1>Welcome to VEXDYN</h1>\n    <p>Your digital journey begins here.</p>\n</body>\n</html>`,
      challenge: "Create a document containing a page title, one heading, and one paragraph."
    },
    {
      id: 3,
      title: "SPEAKING HTML",
      mission: "Understand elements and tags.",
      definitions: [
        "An HTML tag is markup enclosed in angle brackets that tells the browser what an element represents.",
        "An HTML element is the complete structure consisting of an opening tag, content, and usually a closing tag."
      ],
      example: `<h1>VEXDYN</h1>\n<h2>Learn Technology</h2>\n<p>Build something incredible.</p>`,
      challenge: "Create one h1, two h2 headings, and two paragraphs."
    },
    {
      id: 4,
      title: "BUILDING THE TEXT LAYER",
      mission: "Structure written content.",
      definitions: [
        "A heading identifies a title or section of content.",
        "A paragraph represents a block of related written text."
      ],
      example: `<h1>VEXDYN Learn</h1>\n<h2>Learn Technology</h2>\n<p>Master the tools needed to build digital experiences.</p>\n\n<strong>Start building.</strong>\n<em>Think beyond limits.</em>`,
      challenge: "Create an About Me section with a heading, subheading, paragraph, emphasized word, and important statement."
    },
    {
      id: 5,
      title: "CREATE YOUR FIRST CONNECTION",
      mission: "Learn how webpages connect to each other.",
      definitions: [
        "A hyperlink is an interactive connection that takes a user to another resource or location.",
        "The anchor element creates hyperlinks, while href specifies the destination."
      ],
      example: `<a href="https://example.com">Explore</a>\n\n<nav>\n    <a href="index.html">Home</a>\n    <a href="learn.html">Learn</a>\n    <a href="contact.html">Contact</a>\n</nav>`,
      challenge: "Create a navigation menu containing Home, About, Learn, and Contact."
    },
    {
      id: 6,
      title: "BRING IMAGES TO LIFE",
      mission: "Add visual content to a webpage.",
      definitions: [
        "The img element embeds an image into a webpage.",
        "The src attribute specifies the image location, while alt provides an alternative description."
      ],
      example: `<img src="robot.jpg" alt="Futuristic robot">`,
      challenge: "Create a profile section containing an image, heading, and description."
    },
    {
      id: 7,
      title: "ORGANIZE INFORMATION",
      mission: "Learn unordered and ordered lists.",
      definitions: [
        "An unordered list represents items where order is not important.",
        "An ordered list represents items where sequence matters."
      ],
      example: `<ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n</ul>\n\n<ol>\n    <li>Imagine</li>\n    <li>Create</li>\n    <li>Build</li>\n    <li>Launch</li>\n</ol>`,
      challenge: "Create a \"My Technology Roadmap\" with five technologies."
    },
    {
      id: 8,
      title: "BUILD A DATA GRID",
      mission: "Learn HTML tables.",
      definitions: [
        "An HTML table organizes information into rows and columns.",
        "A table uses headings and data cells to represent structured information."
      ],
      example: `<table>\n    <tr>\n        <th>Technology</th>\n        <th>Level</th>\n    </tr>\n    <tr>\n        <td>HTML</td>\n        <td>Beginner</td>\n    </tr>\n    <tr>\n        <td>JavaScript</td>\n        <td>Intermediate</td>\n    </tr>\n</table>`,
      challenge: "Create a table showing Technology, Difficulty, and Lessons for HTML, CSS, and JavaScript."
    },
    {
      id: 9,
      title: "ADD SOUND & MOTION",
      mission: "Introduce multimedia.",
      definitions: [
        "The audio element allows audio content to be embedded in a webpage.",
        "The video element allows video content to be embedded with browser controls."
      ],
      example: `<audio controls>\n    <source src="sound.mp3" type="audio/mpeg">\n</audio>\n\n<video controls>\n    <source src="future.mp4" type="video/mp4">\n</video>`,
      challenge: "Create a multimedia section containing video, audio, a heading, and a description."
    },
    {
      id: 10,
      title: "CODE THAT EXPLAINS ITSELF",
      mission: "Learn comments and HTML entities.",
      definitions: [
        "An HTML comment is text inside HTML code that the browser does not display as webpage content.",
        "An HTML entity is a special representation for characters that have special meaning or are difficult to type directly."
      ],
      example: `<!-- VEXDYN Navigation -->\n\n<nav>\n    ...\n</nav>\n\n<p>VEXDYN &copy; 2026</p>\n<p>&trade; &reg;</p>`,
      challenge: "Take one previous page and organize it using useful comments."
    },
    {
      id: 11,
      title: "BUILD THE INPUT SYSTEM",
      mission: "Create forms.",
      definitions: [
        "An HTML form provides a structure for collecting information from users.",
        "An input is an interactive field that allows a user to provide data."
      ],
      example: `<form>\n    <label>Name</label>\n    <input type="text">\n\n    <label>Email</label>\n    <input type="email">\n\n    <button>Join VEXDYN</button>\n</form>`,
      challenge: "Create a VEXDYN registration form with name, email, password, and button."
    },
    {
      id: 12,
      title: "EVERY INPUT HAS A PURPOSE",
      mission: "Explore different input types.",
      definitions: [
        "The type attribute determines what kind of information an input expects.",
        "A form control is an interactive element that allows users to enter or select information."
      ],
      example: `<input type="text">\n<input type="email">\n<input type="password">\n<input type="number">\n<input type="date">\n<input type="checkbox">\n<input type="radio">`,
      challenge: "Create a user profile form using at least five different input types."
    },
    {
      id: 13,
      title: "MAKE FORMS UNDERSTAND THE USER",
      mission: "Learn labels, placeholders, and validation.",
      definitions: [
        "A label identifies what information a form control expects.",
        "Validation uses HTML rules to help ensure submitted information meets certain requirements."
      ],
      example: `<label for="email">Email Address</label>\n\n<input\n    id="email"\n    type="email"\n    placeholder="you@example.com"\n    required\n>`,
      challenge: "Build a properly labeled sign-up form."
    },
    {
      id: 14,
      title: "BUILD THE CONTROL PANEL",
      mission: "Learn selects, textareas, and buttons.",
      definitions: [
        "A select element creates a dropdown menu.",
        "A textarea provides a larger area for entering multi-line text."
      ],
      example: `<label for="technology">\n    Choose a technology\n</label>\n\n<select id="technology">\n    <option>HTML</option>\n    <option>CSS</option>\n    <option>JavaScript</option>\n    <option>React</option>\n</select>\n\n<textarea\n    placeholder="Describe your idea..."\n></textarea>\n\n<button>\n    Submit Idea\n</button>`,
      challenge: "Build a VEXDYN Project Submission Form with name, email, technology dropdown, project description, and submit button."
    },
    {
      id: 15,
      title: "GIVE YOUR WEBSITE MEANING",
      mission: "Learn semantic HTML.",
      definitions: [
        "Semantic HTML uses elements whose names describe the meaning and purpose of their content.",
        "Semantic elements clearly communicate their role to browsers, developers, and assistive technologies."
      ],
      example: `<header>\n    <nav>\n        Navigation\n    </nav>\n</header>\n\n<main>\n    <section>\n        <article>\n            Content\n        </article>\n    </section>\n</main>\n\n<footer>\n    Footer\n</footer>`,
      challenge: "Take a page built with generic div elements and convert its major areas into semantic HTML."
    },
    {
      id: 16,
      title: "CONTAIN THE SYSTEM",
      mission: "Understand div and span.",
      definitions: [
        "A div is a generic block-level container used to group content.",
        "A span is a generic inline container used to group or target a small piece of content within surrounding text."
      ],
      example: `<div>\n    <h2>VEXDYN Learn</h2>\n    <p>\n        Master\n        <span>modern technology</span>.\n    </p>\n</div>`,
      challenge: "Create three content sections using div and highlight specific words using span."
    },
    {
      id: 17,
      title: "BUILD FOR EVERYONE",
      mission: "Understand HTML accessibility.",
      definitions: [
        "Web accessibility means designing websites so people with different abilities can use and understand them.",
        "Accessible HTML uses meaningful structure, labels, descriptions, and controls so content can be understood by a wider range of users and technologies."
      ],
      example: `<a href="learn.html">\n    Explore VEXDYN Learn\n</a>\n\n<img\n    src="course.jpg"\n    alt="VEXDYN HTML course"\n>\n\n<label for="email">\n    Email Address\n</label>\n\n<input\n    id="email"\n    type="email"\n>`,
      challenge: "Take an existing page and improve image descriptions, labels, headings, links, and semantic structure."
    },
    {
      id: 18,
      title: "MAKE YOUR WEBPAGE DISCOVERABLE",
      mission: "Understand metadata and basic SEO.",
      definitions: [
        "Metadata is information about a webpage that is not normally displayed as the main page content.",
        "SEO involves improving webpages so search engines can better understand and potentially surface their content."
      ],
      example: `<head>\n    <title>\n        VEXDYN Learn — HTML\n    </title>\n\n    <meta\n        name="description"\n        content="Learn HTML with VEXDYN."\n    >\n\n    <meta\n        name="viewport"\n        content="width=device-width, initial-scale=1.0"\n    >\n</head>`,
      challenge: "Create metadata for your own fictional technology website."
    },
    {
      id: 19,
      title: "BUILD THE SYSTEM",
      mission: "Combine everything learned so far in a complete HTML landing-page structure.",
      definitions: [
        "A project is a practical build that combines multiple concepts into one working result.",
        "A complete HTML structure focuses on content and meaning first; visual styling can be added later with CSS."
      ],
      example: `<header>\n    <nav>\n        Logo + Navigation\n    </nav>\n</header>\n\n<main>\n    <section>\n        <h1>Future Technology</h1>\n        <p>Build what comes next.</p>\n    </section>\n\n    <section>\n        <h2>Technologies</h2>\n        <ul>\n            <li>HTML</li>\n            <li>CSS</li>\n            <li>JavaScript</li>\n        </ul>\n    </section>\n\n    <section>\n        <h2>Contact</h2>\n        <form>\n            <input type="email" placeholder="Email">\n            <button>Connect</button>\n        </form>\n    </section>\n</main>\n\n<footer>\n    © 2026\n</footer>`,
      challenge: "Build a VEXDYN-style technology landing page with header, navigation, hero, about, technology list, media, contact form, semantic structure, accessibility, and metadata. Complete this project before Lesson 20."
    },
    {
      id: 20,
      title: "HTML FINAL MISSION: BUILD THE FUTURE",
      mission: "Complete the HTML Foundation by building your own fictional technology website.",
      definitions: [
        "A final project is a larger practical build used to demonstrate that the learner can apply the course skills independently.",
        "Course completion means demonstrating the ability to create a structured, semantic, accessible HTML website from a blank file."
      ],
      example: `<!-- Your fictional technology company website -->\n<!-- Include: document structure, nav, hero, about,\n     technology content, images, lists, table,\n     multimedia, contact form, semantic HTML,\n     accessibility, metadata, internal links -->`,
      challenge: "Create your own fictional technology company website including proper HTML structure, navigation, hero, about, technology content, images, lists, table/data, multimedia, contact form, semantic HTML, accessibility, metadata, and internal page links. After successful completion: HTML FOUNDATION COMPLETE."
    }
  ];

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { completed: [] };
      const data = JSON.parse(raw);
      return {
        completed: Array.isArray(data.completed) ? data.completed.map(Number) : []
      };
    } catch {
      return { completed: [] };
    }
  }

  function saveProgress(completed) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed: completed }));
    } catch {}
  }

  function getPercent(completed) {
    return Math.round((completed.length / LESSONS.length) * 100);
  }

  function isComplete(id, completed) {
    return completed.indexOf(id) !== -1;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function animatePercent(el, from, to) {
    if (!el) return;
    const duration = 700;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(from + (to - from) * eased) + "%";
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function showView(name) {
    const catalog = document.getElementById("learnCatalog");
    const courseView = document.getElementById("htmlCourseView");
    const lessonView = document.getElementById("htmlLessonView");
    const cssCourse = document.getElementById("cssCourseView");
    const cssLesson = document.getElementById("cssLessonView");
    if (catalog) catalog.hidden = name !== "catalog";
    if (courseView) courseView.hidden = name !== "course";
    if (lessonView) lessonView.hidden = name !== "lesson";
    if (cssCourse) cssCourse.hidden = true;
    if (cssLesson) cssLesson.hidden = true;
    const jsCourse = document.getElementById("jsCourseView");
    const jsLesson = document.getElementById("jsLessonView");
    if (jsCourse) jsCourse.hidden = true;
    if (jsLesson) jsLesson.hidden = true;
    const reactCourse = document.getElementById("reactCourseView");
    const reactLesson = document.getElementById("reactLessonView");
    if (reactCourse) reactCourse.hidden = true;
    if (reactLesson) reactLesson.hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCourseList() {
    const list = document.getElementById("htmlLessonList");
    const pctEl = document.getElementById("htmlCoursePct");
    const barEl = document.getElementById("htmlCourseBar");
    const statusEl = document.getElementById("htmlCourseStatus");
    const completeBanner = document.getElementById("htmlCompleteBanner");
    if (!list) return;

    const { completed } = loadProgress();
    const pct = getPercent(completed);

    if (pctEl) {
      const prev = parseInt(pctEl.textContent, 10) || 0;
      animatePercent(pctEl, prev, pct);
    }
    if (barEl) barEl.style.width = pct + "%";
    if (statusEl) {
      statusEl.textContent =
        pct === 0 ? "NOT STARTED" : pct >= 100 ? "HTML FOUNDATION COMPLETE" : "IN PROGRESS";
    }
    if (completeBanner) completeBanner.hidden = pct < 100;

    list.innerHTML = LESSONS.map((lesson) => {
      const done = isComplete(lesson.id, completed);
      const badge = done
        ? '<span class="lesson-badge lesson-badge-done"><span class="lesson-badge-icon" aria-hidden="true">✓</span> COMPLETE</span>'
        : '<span class="lesson-badge lesson-badge-open">OPEN</span>';
      return `
        <button type="button" class="lesson-item ${done ? "is-complete" : ""}" data-open-lesson="${lesson.id}" aria-label="Lesson ${lesson.id}: ${escapeHtml(lesson.title)}">
          <span class="lesson-item-top">
            <span class="lesson-item-num">${String(lesson.id).padStart(2, "0")}</span>
            ${badge}
          </span>
          <span class="lesson-item-title">${escapeHtml(lesson.title)}</span>
          <span class="lesson-item-mission">${escapeHtml(lesson.mission)}</span>
        </button>`;
    }).join("");
  }

  function openLesson(id) {
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) return;
    const { completed } = loadProgress();
    const done = isComplete(id, completed);

    const titleEl = document.getElementById("lessonTitle");
    const numEl = document.getElementById("lessonNum");
    const missionEl = document.getElementById("lessonMission");
    const defsEl = document.getElementById("lessonDefs");
    const exampleEl = document.getElementById("lessonExample");
    const challengeEl = document.getElementById("lessonChallenge");
    const completeBtn = document.getElementById("lessonCompleteBtn");
    const nextBtn = document.getElementById("lessonNextBtn");
    const prevBtn = document.getElementById("lessonPrevBtn");

    if (numEl) numEl.textContent = "LESSON " + String(lesson.id).padStart(2, "0");
    if (titleEl) titleEl.textContent = lesson.title;
    if (missionEl) missionEl.textContent = lesson.mission;
    if (defsEl) {
      defsEl.innerHTML = lesson.definitions
        .map((d, i) => `<div class="lesson-def"><span class="lesson-def-label">Definition ${i + 1}</span><p>${escapeHtml(d)}</p></div>`)
        .join("");
    }
    if (exampleEl) exampleEl.textContent = lesson.example;
    if (challengeEl) challengeEl.textContent = lesson.challenge;

    if (completeBtn) {
      completeBtn.disabled = done;
      completeBtn.textContent = done ? "COMPLETED ✓" : "MARK COMPLETE →";
      completeBtn.dataset.lessonId = String(lesson.id);
    }
    if (prevBtn) {
      prevBtn.disabled = lesson.id <= 1;
      prevBtn.dataset.goto = String(lesson.id - 1);
    }
    if (nextBtn) {
      nextBtn.disabled = lesson.id >= LESSONS.length;
      nextBtn.dataset.goto = String(lesson.id + 1);
    }

    // Subtle unique ambient identity per lesson (same structure, different glow)
    const lessonView = document.getElementById("htmlLessonView");
    if (lessonView) {
      lessonView.setAttribute("data-lesson-ambient", String(((lesson.id - 1) % 8) + 1));
    }

    showView("lesson");
  }

  function markComplete(id) {
    const data = loadProgress();
    if (!isComplete(id, data.completed)) {
      data.completed.push(id);
      data.completed.sort((a, b) => a - b);
      saveProgress(data.completed);
    }
    // Refresh lesson UI
    openLesson(id);
    // Sync catalog card progress if available
    syncCatalogProgress();
  }

  function syncCatalogProgress() {
    const { completed } = loadProgress();
    const pct = getPercent(completed);
    const status = pct === 0 ? "not-started" : pct >= 100 ? "completed" : "in-progress";

    // Update COURSES data if exposed
    if (window.VEXDYN_LEARN && window.VEXDYN_LEARN.COURSES) {
      const htmlCourse = window.VEXDYN_LEARN.COURSES.find((c) => c.id === "html");
      if (htmlCourse) {
        htmlCourse.progress = pct;
        htmlCourse.status = status;
      }
      if (typeof window.VEXDYN_LEARN.updateJourney === "function") {
        window.VEXDYN_LEARN.updateJourney(window.VEXDYN_LEARN.COURSES);
      }
      if (typeof window.VEXDYN_LEARN.renderCourses === "function") {
        // Re-render only if catalog visible
        const catalog = document.getElementById("learnCatalog");
        if (catalog && !catalog.hidden) {
          window.VEXDYN_LEARN.renderCourses(window.VEXDYN_LEARN.COURSES);
        }
      }
    }

    // Direct DOM update on catalog card if present
    const card = document.querySelector('[data-course-id="html"]');
    if (card) {
      const fill = card.querySelector("[data-progress-fill]");
      const num = card.querySelector("[data-progress-num]");
      const st = card.querySelector("[data-status]");
      const cta = card.querySelector("[data-course-cta]");
      if (fill) fill.style.width = pct + "%";
      if (num) num.textContent = pct + "%";
      if (st) st.textContent = status === "not-started" ? "NOT STARTED" : status === "completed" ? "COMPLETED" : "IN PROGRESS";
      if (cta) cta.textContent = (status === "not-started" ? "START LEARNING" : status === "completed" ? "REVIEW" : "CONTINUE") + " →";
    }
  }

  function initHtmlCourse() {
    const courseView = document.getElementById("htmlCourseView");
    if (!courseView) return;

    // Load saved progress into catalog on start
    syncCatalogProgress();

    document.addEventListener("click", (e) => {
      const openCourse = e.target.closest('[data-course-cta][data-id="html"]');
      if (openCourse) {
        e.preventDefault();
        renderCourseList();
        showView("course");
        return;
      }

      const backCatalog = e.target.closest("[data-back-catalog]");
      if (backCatalog) {
        e.preventDefault();
        syncCatalogProgress();
        showView("catalog");
        return;
      }

      const backCourse = e.target.closest("[data-back-course]");
      if (backCourse) {
        e.preventDefault();
        renderCourseList();
        showView("course");
        return;
      }

      const openLessonBtn = e.target.closest("[data-open-lesson]");
      if (openLessonBtn) {
        e.preventDefault();
        openLesson(parseInt(openLessonBtn.dataset.openLesson, 10));
        return;
      }

      const completeBtn = e.target.closest("#lessonCompleteBtn");
      if (completeBtn && !completeBtn.disabled) {
        e.preventDefault();
        markComplete(parseInt(completeBtn.dataset.lessonId, 10));
        return;
      }

      const navBtn = e.target.closest("[data-goto]");
      if (navBtn && !navBtn.disabled) {
        e.preventDefault();
        openLesson(parseInt(navBtn.dataset.goto, 10));
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initHtmlCourse);

  window.VEXDYN_HTML_COURSE = { LESSONS, loadProgress, getPercent, renderCourseList };
})();
