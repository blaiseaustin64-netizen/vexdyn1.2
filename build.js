/* VEXDYN BUILD — frontend only (no backend) */
(function () {
  "use strict";

  const CATEGORIES = [
    { id: "corporate", icon: "🏢", name: "Corporate", desc: "Professional experiences for modern organizations." },
    { id: "business", icon: "🏬", name: "Business", desc: "Clear presence for growing companies." },
    { id: "restaurant", icon: "🍽️", name: "Restaurant", desc: "Menus, ambience, and reservations." },
    { id: "ecommerce", icon: "🛍️", name: "E-Commerce", desc: "Sell products with a polished storefront." },
    { id: "fashion", icon: "👗", name: "Fashion & Boutique", desc: "Editorial product experiences." },
    { id: "agency", icon: "💼", name: "Agency", desc: "Showcase services and case studies." },
    { id: "portfolio", icon: "🎨", name: "Portfolio", desc: "Present your work with impact." },
    { id: "startup", icon: "⚡", name: "Startup / SaaS", desc: "Product-led digital platforms." },
    { id: "hotel", icon: "🏨", name: "Hotel & Hospitality", desc: "Bookings and guest journeys." },
    { id: "education", icon: "🎓", name: "Education", desc: "Courses, campuses, and learning." },
    { id: "healthcare", icon: "🏥", name: "Healthcare", desc: "Trust-focused care experiences." },
    { id: "custom", icon: "✦", name: "Custom", desc: "Have something different in mind?" }
  ];

  const STYLES = ["Minimal", "Luxury", "Futuristic", "Cinematic", "Bold", "Elegant", "Technical", "Creative", "Custom"];
  const REQS = [
    "Responsive Design", "Online Store", "Payments", "Booking System", "Contact / Lead Forms",
    "Blog / Content", "Animations", "CMS", "Membership", "Custom Features", "SEO Foundation",
    "Not Sure Yet", "Other / Custom"
  ];
  const STAGES = ["Just an idea", "Ready to start", "Already have a design", "Redesigning an existing website", "Upgrading an existing website"];
  const TIMELINES = ["As soon as possible", "This month", "Next month", "No fixed date"];
  const BUDGETS = ["Not sure yet", "Under ₦100K", "₦100K – ₦250K", "₦250K – ₦500K", "₦500K+", "Custom / Discuss"];

  const state = {
    buildMode: null,
    selectedWebsiteTypes: [],
    client: { name: "", brand: "", email: "", phone: "" },
    vision: "",
    styles: [],
    reference: "",
    requirements: [],
    otherReq: "",
    projectStage: "",
    timeline: "",
    budget: "",
    step: 1
  };

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $$(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function showView(id) {
    ["buildHome", "buildTypeStage", "buildFormStage", "buildYourselfStage"].forEach(function (vid) {
      var el = document.getElementById(vid);
      if (el) el.hidden = vid !== id;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cardHTML(cat, selected) {
    return (
      '<button type="button" class="build-cat-card' + (selected ? " is-selected" : "") +
      '" data-cat-id="' + cat.id + '" aria-pressed="' + (selected ? "true" : "false") + '">' +
      '<span class="build-cat-icon" aria-hidden="true">' + cat.icon + "</span>" +
      '<span class="build-cat-name">' + cat.name + "</span>" +
      '<span class="build-cat-desc">' + cat.desc + "</span>" +
      (selected ? '<span class="build-cat-check">✓ SELECTED</span>' : "") +
      "</button>"
    );
  }

  function renderLanes() {
    var left = document.getElementById("laneTrackLeft");
    var right = document.getElementById("laneTrackRight");
    if (!left || !right) return;
    var rowA = CATEGORIES.slice(0, 6);
    var rowB = CATEGORIES.slice(6);
    function strip(list) {
      return list
        .map(function (c) {
          return cardHTML(c, state.selectedWebsiteTypes.indexOf(c.id) !== -1);
        })
        .join("");
    }
    // Duplicate for seamless loop
    left.innerHTML = strip(rowA) + strip(rowA);
    right.innerHTML = strip(rowB) + strip(rowB);
    updateSelectedCount();
  }

  function updateSelectedCount() {
    var n = state.selectedWebsiteTypes.length;
    var el = document.getElementById("buildSelectedCount");
    if (el) el.textContent = n + " EXPERIENCE" + (n === 1 ? "" : "S") + " SELECTED";
    var btn = document.getElementById("buildContinueTypes");
    if (btn) btn.disabled = n === 0;
  }

  function toggleCategory(id) {
    var i = state.selectedWebsiteTypes.indexOf(id);
    if (i === -1) state.selectedWebsiteTypes.push(id);
    else state.selectedWebsiteTypes.splice(i, 1);
    // Update only matching cards without full rebuild (keeps animation)
    $$(".build-cat-card").forEach(function (card) {
      var cid = card.getAttribute("data-cat-id");
      var on = state.selectedWebsiteTypes.indexOf(cid) !== -1;
      card.classList.toggle("is-selected", on);
      card.setAttribute("aria-pressed", on ? "true" : "false");
      var check = card.querySelector(".build-cat-check");
      if (on && !check) {
        var s = document.createElement("span");
        s.className = "build-cat-check";
        s.textContent = "✓ SELECTED";
        card.appendChild(s);
      } else if (!on && check) {
        check.remove();
      }
    });
    updateSelectedCount();
  }

  function fillChips(containerId, options, multi, selected) {
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = options
      .map(function (opt) {
        var val = typeof opt === "string" ? opt : opt;
        var on = multi
          ? selected.indexOf(val) !== -1
          : selected === val;
        return (
          '<button type="button" class="build-chip' + (on ? " is-selected" : "") +
          '" data-value="' + val.replace(/"/g, "&quot;") + '">' +
          val +
          (on ? " ✓" : "") +
          "</button>"
        );
      })
      .join("");
  }

  function renderSummary() {
    var box = document.getElementById("buildSummaryTypes");
    if (!box) return;
    box.innerHTML = state.selectedWebsiteTypes
      .map(function (id) {
        var c = CATEGORIES.find(function (x) {
          return x.id === id;
        });
        return c ? '<span class="build-summary-chip">' + c.icon + " " + c.name + "</span>" : "";
      })
      .join("");
    var s1 = document.getElementById("buildStep1Types");
    if (s1) {
      s1.innerHTML = state.selectedWebsiteTypes
        .map(function (id) {
          var c = CATEGORIES.find(function (x) {
            return x.id === id;
          });
          return c
            ? '<span class="build-chip is-selected">' + c.icon + " " + c.name + "</span>"
            : "";
        })
        .join("");
    }
  }

  function goStep(n) {
    state.step = n;
    $$(".build-step-panel").forEach(function (p) {
      var id = p.getAttribute("data-panel");
      var show = String(id) === String(n) || (n === "done" && id === "done");
      p.hidden = !show;
      p.classList.toggle("is-active", show);
    });
    $$(".build-step").forEach(function (s) {
      var sn = parseInt(s.getAttribute("data-step"), 10);
      s.classList.toggle("is-active", sn === n);
      s.classList.toggle("is-done", typeof n === "number" && sn < n);
    });
    if (n === 3) fillChips("bfStyles", STYLES, true, state.styles);
    if (n === 4) {
      fillChips("bfReqs", REQS, true, state.requirements);
      fillChips("bfStage", STAGES, false, state.projectStage);
      fillChips("bfTimeline", TIMELINES, false, state.timeline);
      fillChips("bfBudget", BUDGETS, false, state.budget);
    }
    if (n === 5) renderReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateStep(n) {
    if (n === 2) {
      var name = ($("#bfName") || {}).value || "";
      var brand = ($("#bfBrand") || {}).value || "";
      var email = ($("#bfEmail") || {}).value || "";
      var ok = true;
      function err(key, msg) {
        var e = document.querySelector('[data-err="' + key + '"]');
        if (!e) return;
        if (msg) {
          e.hidden = false;
          e.textContent = msg;
          ok = false;
        } else {
          e.hidden = true;
          e.textContent = "";
        }
      }
      err("name", name.trim() ? "" : "Please enter your name.");
      err("brand", brand.trim() ? "" : "Please enter your business or brand.");
      err(
        "email",
        !email.trim()
          ? "Please enter your email."
          : email.indexOf("@") === -1
            ? "Enter a valid email."
            : ""
      );
      if (ok) {
        state.client.name = name.trim();
        state.client.brand = brand.trim();
        state.client.email = email.trim();
        state.client.phone = (($("#bfPhone") || {}).value || "").trim();
      }
      return ok;
    }
    if (n === 3) {
      var vision = ($("#bfVision") || {}).value || "";
      var e = document.querySelector('[data-err="vision"]');
      if (!vision.trim()) {
        if (e) {
          e.hidden = false;
          e.textContent = "Share a short vision for your project.";
        }
        return false;
      }
      if (e) e.hidden = true;
      state.vision = vision.trim();
      state.reference = (($("#bfRef") || {}).value || "").trim();
      return true;
    }
    if (n === 4) {
      state.otherReq = (($("#bfOther") || {}).value || "").trim();
      return true;
    }
    return true;
  }

  function renderReview() {
    var el = document.getElementById("buildReview");
    if (!el) return;
    function row(label, value, step) {
      return (
        '<div class="build-review-row">' +
        '<div><span class="build-review-label">' +
        label +
        "</span><div class=\"build-review-value\">" +
        (value || "—") +
        "</div></div>" +
        '<button type="button" class="btn btn-secondary btn-sm" data-build-next="' +
        step +
        '">EDIT</button></div>'
      );
    }
    var types = state.selectedWebsiteTypes
      .map(function (id) {
        var c = CATEGORIES.find(function (x) {
          return x.id === id;
        });
        return c ? c.icon + " " + c.name : id;
      })
      .join("<br>");
    el.innerHTML =
      row("BUILD MODE", "🔨 BUILD FOR ME", 1) +
      row("WEBSITE TYPE", types, 1) +
      row("CLIENT", state.client.name, 2) +
      row("BUSINESS", state.client.brand, 2) +
      row("EMAIL", state.client.email, 2) +
      row("PHONE", state.client.phone || "—", 2) +
      row("VISION", state.vision, 3) +
      row("STYLE", state.styles.join(", ") || "—", 3) +
      row("REFERENCE", state.reference || "—", 3) +
      row("REQUIREMENTS", state.requirements.join(", ") || "—", 4) +
      row("OTHER", state.otherReq || "—", 4) +
      row("STAGE", state.projectStage || "—", 4) +
      row("TIMELINE", state.timeline || "—", 4) +
      row("BUDGET", state.budget || "—", 4);
  }

  // BACKEND INTEGRATION WILL BE ADDED IN A FUTURE VERSION.
  // Do not send network requests here.
  function submitBuildRequest() {
    var id = "VX-BUILD-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    var btn = document.getElementById("buildTransmit");
    if (btn) {
      btn.disabled = true;
      btn.textContent = "PREPARING PROJECT…";
    }
    setTimeout(function () {
      if (btn) btn.textContent = "PROCESSING BRIEF…";
    }, 600);
    setTimeout(function () {
      if (btn) {
        btn.textContent = "TRANSMISSION COMPLETE.";
        btn.disabled = false;
      }
      var pid = document.getElementById("buildProjectId");
      if (pid) pid.textContent = id;
      goStep("done");
    }, 1800);
  }

  function resetState() {
    state.buildMode = null;
    state.selectedWebsiteTypes = [];
    state.client = { name: "", brand: "", email: "", phone: "" };
    state.vision = "";
    state.styles = [];
    state.reference = "";
    state.requirements = [];
    state.otherReq = "";
    state.projectStage = "";
    state.timeline = "";
    state.budget = "";
    state.step = 1;
    ["bfName", "bfBrand", "bfEmail", "bfPhone", "bfVision", "bfRef", "bfOther"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = "";
    });
  }

  function init() {
    if (!document.getElementById("buildHome")) return;

    renderLanes();
    fillChips("bfStyles", STYLES, true, []);
    fillChips("bfReqs", REQS, true, []);
    fillChips("bfStage", STAGES, false, "");
    fillChips("bfTimeline", TIMELINES, false, "");
    fillChips("bfBudget", BUDGETS, false, "");

    document.addEventListener("click", function (e) {
      var path = e.target.closest("[data-build-path]");
      if (path) {
        var mode = path.getAttribute("data-build-path");
        state.buildMode = mode;
        if (mode === "for-me") {
          renderLanes();
          showView("buildTypeStage");
        } else {
          showView("buildYourselfStage");
        }
        return;
      }

      var back = e.target.closest("[data-build-back]");
      if (back) {
        var to = back.getAttribute("data-build-back");
        if (to === "home") showView("buildHome");
        if (to === "types") showView("buildTypeStage");
        return;
      }

      var cat = e.target.closest("[data-cat-id]");
      if (cat) {
        e.preventDefault();
        toggleCategory(cat.getAttribute("data-cat-id"));
        return;
      }

      if (e.target.closest("#buildContinueTypes")) {
        if (!state.selectedWebsiteTypes.length) return;
        renderSummary();
        showView("buildFormStage");
        goStep(1);
        return;
      }

      var next = e.target.closest("[data-build-next]");
      if (next) {
        var target = next.getAttribute("data-build-next");
        var tnum = parseInt(target, 10);
        if (!isNaN(tnum)) {
          // validating current before forward
          if (tnum > state.step && !validateStep(state.step)) return;
          if (tnum === 3 && state.step === 2 && !validateStep(2)) return;
          if (tnum === 4 && state.step === 3 && !validateStep(3)) return;
          goStep(tnum);
        }
        return;
      }

      var chip = e.target.closest(".build-chip[data-value]");
      if (chip) {
        var parent = chip.parentElement;
        if (!parent) return;
        var val = chip.getAttribute("data-value");
        var multi = parent.getAttribute("data-multi") === "true";
        if (parent.id === "bfStyles") {
          var i = state.styles.indexOf(val);
          if (i === -1) state.styles.push(val);
          else state.styles.splice(i, 1);
          fillChips("bfStyles", STYLES, true, state.styles);
        } else if (parent.id === "bfReqs") {
          var j = state.requirements.indexOf(val);
          if (j === -1) state.requirements.push(val);
          else state.requirements.splice(j, 1);
          fillChips("bfReqs", REQS, true, state.requirements);
          var otherWrap = document.getElementById("bfOtherWrap");
          if (otherWrap)
            otherWrap.hidden = state.requirements.indexOf("Other / Custom") === -1;
        } else if (parent.id === "bfStage") {
          state.projectStage = val;
          fillChips("bfStage", STAGES, false, state.projectStage);
        } else if (parent.id === "bfTimeline") {
          state.timeline = val;
          fillChips("bfTimeline", TIMELINES, false, state.timeline);
        } else if (parent.id === "bfBudget") {
          state.budget = val;
          fillChips("bfBudget", BUDGETS, false, state.budget);
        }
        return;
      }

      if (e.target.closest("#buildTransmit")) {
        submitBuildRequest();
        return;
      }

      if (e.target.closest("#buildRestart")) {
        resetState();
        renderLanes();
        showView("buildTypeStage");
      }
    });

    // Category lanes: auto-scroll + manual browse + selection
    // Uses scrollLeft so users can swipe/drag freely; auto resumes after idle.
    (function initLanes() {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var left = document.getElementById("buildLaneLeft");
      var right = document.getElementById("buildLaneRight");
      if (!left || !right) return;

      // Disable CSS keyframe animation; drive with scroll instead
      left.classList.add("is-scroll-mode");
      right.classList.add("is-scroll-mode");

      var lanes = [
        { el: left, dir: 1, speed: 0.45 },
        { el: right, dir: -1, speed: 0.4 }
      ];
      var paused = false;
      var resumeTimer = null;

      function pauseAuto() {
        paused = true;
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(function () {
          paused = false;
        }, 2800);
      }

      lanes.forEach(function (lane) {
        var el = lane.el;
        el.addEventListener("pointerdown", pauseAuto);
        el.addEventListener("wheel", pauseAuto, { passive: true });
        el.addEventListener("touchstart", pauseAuto, { passive: true });
        el.addEventListener("scroll", function () {
          // user scroll activity
          if (!paused) pauseAuto();
        }, { passive: true });
      });

      if (reduce) return;

      function tick() {
        if (!paused) {
          lanes.forEach(function (lane) {
            var el = lane.el;
            var max = el.scrollWidth - el.clientWidth;
            if (max <= 0) return;
            el.scrollLeft += lane.dir * lane.speed;
            // loop
            if (lane.dir > 0 && el.scrollLeft >= max - 1) {
              el.scrollLeft = 0;
            } else if (lane.dir < 0 && el.scrollLeft <= 1) {
              el.scrollLeft = max;
            }
          });
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    })();

    // Reveal
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }

  document.addEventListener("DOMContentLoaded", init);
  window.VEXDYN_BUILD = { state: state };
})();
