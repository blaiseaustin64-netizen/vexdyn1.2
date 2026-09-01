/* ============================================
   VEXDYN Learn — CSS Course (24 Lessons)
   Progress: localStorage key vexdyn-learn-css
   All lessons unlocked (no VEXDYN+ yet)
   ============================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "vexdyn-learn-css";
  const TOTAL = 24;
  const ACCENT = "#1572b6";

  const LESSONS = [
    {
      id: 1,
      title: "ENTER THE STYLE SYSTEM",
      description: "Learn how CSS transforms HTML structure into a visual interface.",
      mission: "Turn basic HTML into a styled interface.",
      definitions: [
        "CSS (Cascading Style Sheets) is the language used to control the visual presentation of HTML documents — colors, typography, spacing, layout and effects.",
        "A CSS rule consists of a selector (what to style) and a declaration block of properties and values (how to style it)."
      ],
      explanation: "HTML defines structure and meaning — headings, paragraphs, links, and forms. CSS defines appearance — color, type, space, layout, and motion. Without CSS, browsers render plain default text with almost no visual hierarchy. With CSS, the same markup becomes a product interface.\n\nA CSS rule has three parts: a selector (what to style), properties (what to change), and values (how to change them). Example: h1 { color: #fff; font-size: 2rem; } targets every h1 and sets color and size.\n\nThink of HTML as the skeleton and CSS as the skin, clothing, and lighting. VEXDYN interfaces always separate structure from style so the design system can evolve without rewriting content.",
      exampleTitle: "VEXDYN-style hero block",
      example: `/* style.css */\n.hero {\n  padding: 64px 24px;\n  text-align: center;\n  background: #0b0b12;\n  color: #f4f4f8;\n}\n\n.hero h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  margin-bottom: 12px;\n}\n\n.hero p {\n  color: #a0a0b0;\n  max-width: 420px;\n  margin: 0 auto 24px;\n}\n\n.btn {\n  display: inline-block;\n  padding: 12px 22px;\n  background: #7c5cff;\n  color: #fff;\n  border-radius: 999px;\n  text-decoration: none;\n  font-weight: 600;\n}`,
      breakdown: "• body — sets page background and default text color\n• .hero — centers content and adds vertical padding for breathing room\n• h1 — large, heavy type for the brand statement\n• p — secondary text with muted color and readable line-height\n• .btn — padding, radius, and accent background create a tappable control\n\nEach selector targets a specific layer of the interface. Changing one rule updates every matching element.",
      application: "VEXDYN hero sections, buttons, and cards are pure HTML structure first. CSS then applies the glass surfaces, violet accents, and typography scale. Never mix presentation into HTML attributes when a stylesheet can own it.",
      challenge: "Create a simple hero with a heading, paragraph and button. Style background, text colors, spacing and button appearance using external CSS."
    },
    {
      id: 2,
      title: "CONNECT CSS TO HTML",
      description: "Link stylesheets the professional way and organize project files.",
      mission: "Create index.html and style.css and connect them correctly.",
      definitions: [
        "External CSS lives in a separate .css file and is linked from HTML with a <link> element — preferred for real projects.",
        "Inline styles use the style attribute on one element; internal CSS uses a <style> block in the document head."
      ],
      explanation: "There are three ways to apply CSS.\n\n1) Inline — style=\"color:red\" on an element. Quick for experiments, terrible for maintenance.\n2) Internal — a <style> block inside <head>. Fine for tiny demos and single-file prototypes.\n3) External — a separate .css file linked with <link rel=\"stylesheet\" href=\"style.css\">. This is the professional standard.\n\nExternal CSS keeps design tokens, layout, and components in one place. Multiple pages share one stylesheet. Caching improves performance. Teams can work on structure and style in parallel.\n\nFile organization tip: keep index.html for structure and style.css for all visual rules. Avoid scattering styles across many internal blocks.",
      exampleTitle: "Correct external link",
      example: `<!-- index.html -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>VEXDYN Interface</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header class="site-header">\n    <a href="/" class="logo">VEXDYN</a>\n  </header>\n</body>\n</html>\n\n/* style.css */\n.site-header {\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(255,255,255,0.08);\n}\n\n.logo {\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}`,
      breakdown: "• <link> in <head> loads style.css before body paints\n• body rule sets global background and text\n• .nav styles the top bar as a flex row\n• .logo and links inherit the design language\n\nThe HTML file contains zero visual rules — only structure and the link to CSS.",
      application: "Every VEXDYN page links the same style.css. Theme variables, components, and responsive rules live in one system. That is why Obsidian, Aurora, and Ice can switch without rewriting HTML.",
      challenge: "Create index.html and style.css. Link them correctly. Style a header with a logo and confirm the styles load in the browser."
    },
    {
      id: 3,
      title: "SPEAKING TO ELEMENTS",
      description: "Master selectors so you can target any part of an interface precisely.",
      mission: "Create a multi-component interface and target each component correctly.",
      definitions: [
        "A selector tells the browser which elements a rule applies to — by tag, class, id, relationship or attribute.",
        "Classes are reusable labels (e.g. .card). IDs are unique labels (e.g. #hero). Prefer classes for styling systems."
      ],
      explanation: "Selectors decide which elements receive styles.\n\n• Element selectors (h1, p, a) style all matching tags — useful for base typography.\n• Class selectors (.btn, .card) are the backbone of design systems — reusable and semantic.\n• ID selectors (#hero) target one unique element — use sparingly.\n• Universal selector (*) styles everything — often used for box-sizing resets.\n• Group selectors (h1, h2, h3) share the same rules.\n• Descendant selectors (.card p) style elements inside a parent.\n\nPrefer classes for components. IDs raise specificity and make overrides harder. Build a vocabulary of class names that describe role, not appearance alone.",
      exampleTitle: "Targeting a card system",
      example: `/* Element */\nh2 { font-size: 1.4rem; }\n\n/* Class */\n.card {\n  padding: 24px;\n  border-radius: 16px;\n  background: rgba(255,255,255,0.04);\n}\n\n/* ID — use sparingly */\n#featured {\n  border-color: #7c5cff;\n}\n\n/* Group */\nh1, h2, h3 {\n  letter-spacing: -0.02em;\n}\n\n/* Descendant */\n.card p {\n  color: #a0a0b0;\n  font-size: 0.95rem;\n}\n\n/* Multiple classes */\n.btn.btn-primary {\n  background: #7c5cff;\n}`,
      breakdown: "• .card — component root\n• .card-title — typed hierarchy inside the card\n• .card-body — content area with muted color\n• .card .btn — descendant targets the button only inside cards\n\nClasses compose. You can add .card--featured later without rewriting HTML structure.",
      application: "VEXDYN components (.v-card, .btn, .section-title) are class-driven. The same HTML pattern appears across pages; CSS classes define the visual system.",
      challenge: "Build a page with a header, two cards and a button. Style each using element, class and descendant selectors — no inline styles."
    },
    {
      id: 4,
      title: "THE CSS COMMAND SYSTEM",
      description: "Understand cascade, specificity and why styles override each other.",
      mission: "Understand and solve conflicting CSS rules.",
      definitions: [
        "The cascade is the algorithm that decides which CSS rule wins when multiple rules target the same element.",
        "Specificity measures how precise a selector is — IDs beat classes, classes beat elements. Equal specificity: last source wins."
      ],
      explanation: "When two rules target the same element, the cascade decides the winner. Browsers compare:\n\n1) Importance (!important — avoid)\n2) Specificity (ID > class > element)\n3) Source order (later wins when specificity ties)\n\nSpecificity is scored roughly as (inline, IDs, classes, elements). #nav .link scores higher than .link. An element selector never beats a class without !important.\n\nGood architecture keeps specificity low and consistent. Prefer a single class on the element over deep descendant chains. Avoid !important except for rare utility overrides.\n\nUnderstanding the cascade prevents the classic trap: piling on stronger selectors until the stylesheet becomes unmanageable.",
      exampleTitle: "Conflict resolution",
      example: `/* Specificity examples */\np { color: #888; }           /* element: 0,0,1 */\n.text { color: #ccc; }       /* class:   0,1,0 */\n#intro { color: #fff; }      /* id:      1,0,0 */\n\n/* Source order — same specificity */\n.btn { background: #333; }\n.btn { background: #7c5cff; } /* wins */\n\n/* Prefer clear structure over !important */\n.card .title {\n  font-size: 1.2rem;\n}\n\n/* Avoid */\n.title {\n  font-size: 2rem !important;\n}`,
      breakdown: "• Base .btn sets default look\n• .btn-primary increases specificity with an extra class for the filled variant\n• Order matters when two classes share the same weight\n\nResist fixing conflicts with !important. Adjust selector strength or source order instead.",
      application: "VEXDYN buttons use .btn + .btn-primary / .btn-secondary. Variants extend the base without fighting it. Theme overrides flow through CSS variables, not heavier selectors.",
      challenge: "Write three conflicting rules for the same element. Predict the winner, then verify in the browser. Refactor to remove any !important."
    },
    {
      id: 5,
      title: "COLOR THE DIGITAL WORLD",
      description: "Build futuristic palettes with HEX, RGB, HSL and transparency.",
      mission: "Create a five-color digital interface palette.",
      definitions: [
        "Color values in CSS include named colors, HEX (#7c5cff), RGB/RGBA, and HSL/HSLA.",
        "Alpha (transparency) lets surfaces stack — essential for glass UI and layered atmospheres."
      ],
      explanation: "Color brings hierarchy and emotion. CSS supports named colors, HEX (#7c5cff), RGB/RGBA, and HSL/HSLA. RGBA and HSLA add alpha for transparency — essential for glass overlays and soft accents.\n\nA product palette usually includes: background, elevated surface, primary text, muted text, border, and accent. Accent colors should be used with restraint so they stay meaningful.\n\nContrast matters. Light text on dark surfaces (and the reverse) must remain readable. Test accent-on-background pairs. Futuristic UIs often pair deep neutrals with one electric accent rather than many competing hues.",
      exampleTitle: "Futuristic interface palette",
      example: `:root {\n  --bg: #07070c;\n  --surface: rgba(255, 255, 255, 0.04);\n  --text: #f2f2f7;\n  --muted: #9898a8;\n  --accent: #7c5cff;\n  --accent-soft: rgba(124, 92, 255, 0.16);\n  --border: rgba(255, 255, 255, 0.08);\n}\n\n.panel {\n  background: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--border);\n}\n\n.panel .label {\n  color: var(--muted);\n}\n\n.panel .highlight {\n  color: var(--accent);\n  background: var(--accent-soft);\n}`,
      breakdown: "• --bg and --surface separate page and card layers\n• --text and --muted create type hierarchy\n• --accent drives CTAs and highlights\n• rgba() accents keep glows soft instead of solid blocks\n\nStore colors as variables early so themes can swap values later.",
      application: "VEXDYN themes swap palette tokens: Obsidian (deep violet/silver), Aurora (pearl light), Ice (cyan/blue). Components reference variables, not hard-coded hex scattered everywhere.",
      challenge: "Define a five-color palette as CSS variables. Apply it to a small panel with title, body text and accent badge."
    },
    {
      id: 6,
      title: "TYPOGRAPHY ENGINE",
      description: "Control type scale, weight and fluid sizing with clamp().",
      mission: "Build a futuristic hero typography system.",
      definitions: [
        "Typography properties include font-family, font-size, font-weight, line-height and letter-spacing.",
        "clamp(min, preferred, max) creates fluid type that scales between mobile and desktop without many breakpoints."
      ],
      explanation: "Type is hierarchy. Large tight headings signal importance; relaxed body text aids reading. System font stacks load instantly; custom fonts need care for performance. line-height around 1.5 suits body copy; headings often use tighter values. clamp() keeps a hero title bold on desktop and readable on phones.\n\nTypography is the voice of the interface. Choose a primary family for UI text, set a modular scale with rem or clamp(), and control line-height for long reading. Letter-spacing tightens display headings and loosens uppercase labels. Weight creates hierarchy: 400 body, 600 labels, 700–800 display. Always test type at mobile sizes first.",
      exampleTitle: "Hero type system",
      example: `:root {\n  --font: "Inter", system-ui, sans-serif;\n}\n\nbody {\n  font-family: var(--font);\n  font-size: 16px;\n  line-height: 1.6;\n  color: #e8e8f0;\n}\n\n.hero-title {\n  font-size: clamp(1.8rem, 5vw, 3.2rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n\n.hero-sub {\n  font-size: clamp(0.95rem, 2vw, 1.15rem);\n  font-weight: 400;\n  color: #9a9aab;\n  max-width: 36ch;\n}`,
      breakdown: "• clamp() — scales title between 1.8rem and 3.2rem\n• letter-spacing negative — modern display feel\n• max-width in ch — comfortable reading measure\n• Shared --font token — consistent family",
      application: "VEXDYN section titles and hero wordmarks use fluid type so mobile and desktop both feel intentional.",
      challenge: "Build a hero with clamp()-based title and subtitle. Verify it at 375px and 1440px widths."
    },
    {
      id: 7,
      title: "TEXT EXPERIENCE",
      description: "Shape hierarchy with alignment, transforms and spacing.",
      mission: "Create a premium pricing card using typography hierarchy.",
      definitions: [
        "text-align, text-transform, text-decoration and spacing properties control how text presents inside components.",
        "Typography hierarchy guides the eye: label → title → price → detail → action."
      ],
      explanation: "Small uppercase labels with wide tracking feel product-like. Prices need weight and size contrast. Body details stay quieter. text-transform: uppercase is useful for labels, not long paragraphs. Consistent vertical rhythm between text blocks makes cards feel premium.\n\nText properties refine voice: alignment for composition, transform for labels (uppercase with tracking), decoration for links, and spacing for rhythm. Hierarchy is not only size — color, weight, and spacing work together. A pricing card should be scannable in under two seconds.",
      exampleTitle: "Pricing card type hierarchy",
      example: `.price-card {\n  padding: 28px 24px;\n  text-align: left;\n}\n\n.price-card .plan {\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #8b8b9a;\n}\n\n.price-card .amount {\n  font-size: 2.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  margin: 8px 0;\n}\n\n.price-card .detail {\n  font-size: 0.92rem;\n  color: #a0a0b0;\n  line-height: 1.55;\n}\n\n.price-card .cta {\n  margin-top: 20px;\n  text-decoration: none;\n  font-weight: 600;\n}`,
      breakdown: "• .plan — micro label, uppercase, wide tracking\n• .amount — dominant number\n• .detail — supporting copy, softer color\n• spacing between layers creates hierarchy without extra chrome",
      application: "VEXDYN+ pricing cards use the same hierarchy pattern: plan name, amount, features, CTA.",
      challenge: "Design a pricing card with label, price, description and link. Hierarchy must be clear without relying only on color."
    },
    {
      id: 8,
      title: "THE BOX MODEL",
      description: "Master content, padding, border, margin and box-sizing.",
      mission: "Build a card and experiment with its dimensions.",
      definitions: [
        "Every element is a box: content + padding + border + margin.",
        "box-sizing: border-box includes padding and border inside the declared width — the modern default for layouts."
      ],
      explanation: "Width and height apply to content by default (content-box), so padding expands the element. border-box makes width mean the visible box edge — far easier for grids and cards. Margin creates space outside the border; padding creates space inside. Collapsing vertical margins between siblings is expected behavior.\n\nEverything in CSS is a box. Content sits inside padding, then border, then margin. Content-box adds padding on top of width; border-box includes padding and border in the declared width — use border-box globally. Mastering the box model is the difference between layouts that fight you and layouts you control.",
      exampleTitle: "Predictable card box",
      example: `*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 100%;\n  max-width: 320px;\n  padding: 24px;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 16px;\n  margin-bottom: 16px;\n  background: rgba(255,255,255,0.03);\n}\n\n.card-title {\n  margin: 0 0 8px;\n}\n\n.card-body {\n  margin: 0;\n}`,
      breakdown: "• Global border-box — widths stay predictable\n• padding 24px — internal breathing room\n• margin-bottom — external separation\n• max-width — card does not stretch endlessly",
      application: "All VEXDYN cards assume border-box so grid columns and padding never fight each other.",
      challenge: "Build two cards: one content-box, one border-box, same width and padding. Observe the size difference, then standardize on border-box."
    },
    {
      id: 9,
      title: "SHAPE & SURFACE",
      description: "Create premium surfaces with radius, shadow, gradients and glass.",
      mission: "Build a premium glass card.",
      definitions: [
        "Surface styling includes border-radius, box-shadow, background, gradients and backdrop-filter.",
        "Glassmorphism combines translucent backgrounds, blur and soft borders for layered depth."
      ],
      explanation: "Flat solid fills feel dated in cinematic UIs. Soft radius, subtle borders and layered shadows create depth. Gradients add atmosphere. backdrop-filter: blur() frosts content behind a panel — the signature of glass cards. Keep contrast high enough for text readability.\n\nSurfaces define quality. Border-radius softens geometry. Box-shadows create elevation. Gradients and translucent backgrounds suggest depth. backdrop-filter enables glassmorphism when used sparingly. Combine a thin border, soft shadow, and slight blur for premium cards without heavy imagery.",
      exampleTitle: "Glass card",
      example: `.glass-card {\n  padding: 28px 24px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow:\n    0 8px 32px rgba(0, 0, 0, 0.35),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n}\n\n.glass-card:hover {\n  border-color: rgba(124, 92, 255, 0.4);\n  box-shadow:\n    0 12px 40px rgba(0, 0, 0, 0.4),\n    0 0 24px rgba(124, 92, 255, 0.15);\n}`,
      breakdown: "• rgba background — translucency\n• backdrop-filter — frost\n• inset highlight — top edge light catch\n• hover — accent border + soft glow",
      application: "VEXDYN .v-card and lesson cards use this glass language across Obsidian, Aurora and Ice.",
      challenge: "Build a glass card with blur, soft border, shadow and a hover glow. Test readability on a busy background."
    },
    {
      id: 10,
      title: "THE DIMENSION SYSTEM",
      description: "Choose the right units: px, rem, %, vw, clamp and more.",
      mission: "Build a responsive hero that scales correctly.",
      definitions: [
        "Absolute units (px) are fixed; relative units (%, rem, em, vw, vh) scale with context.",
        "min(), max() and clamp() compose fluid values without writing every breakpoint by hand."
      ],
      explanation: "rem scales with root font size — ideal for type and spacing systems. % relates to parent size. vw/vh relate to the viewport. px still matters for hairline borders. Fluid heroes often combine clamp() for type and % or max-width for containers so nothing feels broken on small or large screens.\n\nUnits express intent. px is absolute; rem scales with root type; % relates to parent; vw/vh relate to viewport; min/max/clamp create fluid bounds. Prefer rem for type and spacing, % or fr for layout fractions, and clamp() for responsive type that never needs a breakpoint.",
      exampleTitle: "Fluid hero dimensions",
      example: `.hero {\n  min-height: min(80vh, 720px);\n  padding: clamp(32px, 6vw, 80px) 20px;\n}\n\n.hero-inner {\n  width: min(100%, 1100px);\n  margin: 0 auto;\n}\n\n.hero-title {\n  font-size: clamp(1.75rem, 4.5vw, 3rem);\n}\n\n.hero-media {\n  width: min(100%, 480px);\n  height: auto;\n}`,
      breakdown: "• min(80vh, 720px) — tall but capped\n• clamp padding — grows with viewport\n• width: min(100%, 1100px) — never overflows\n• images stay fluid with height: auto",
      application: "VEXDYN sections use max-width containers and fluid type so desktop feels composed, not stretched.",
      challenge: "Build a hero using only relative/fluid units for padding, title size and container width. Test at 375px and 1440px."
    },
    {
      id: 11,
      title: "CONTROL THE FLOW",
      description: "Use display values to control how elements participate in layout.",
      mission: "Build a navigation system.",
      definitions: [
        "display controls an element’s outer box type: block, inline, inline-block, flex, grid, none.",
        "Normal document flow stacks block elements vertically and places inline elements along the line."
      ],
      explanation: "Block elements (div, section, p) take full width and stack. Inline elements (span, a) sit within text. inline-block allows width/height while staying in line — useful for nav links. display: none removes an element from layout entirely. Modern nav often upgrades to flex once basics are clear.\n\ndisplay controls participation in flow. block stacks vertically, inline runs within text, inline-block mixes both, none removes from layout. Flex and grid (later lessons) override default flow for alignment. Navigation bars, chips, and media objects all start with the right display value.",
      exampleTitle: "Simple navigation flow",
      example: `.nav {\n  padding: 12px 20px;\n  border-bottom: 1px solid rgba(255,255,255,0.08);\n}\n\n.nav a {\n  display: inline-block;\n  padding: 8px 14px;\n  margin-right: 4px;\n  color: #c8c8d4;\n  text-decoration: none;\n  border-radius: 8px;\n}\n\n.nav a:hover {\n  background: rgba(255,255,255,0.06);\n  color: #fff;\n}\n\n.nav a.active {\n  color: #fff;\n  background: rgba(124, 92, 255, 0.18);\n}`,
      breakdown: "• inline-block links — padding works, items share a row\n• margin-right — gap between items\n• hover/active — clear interactive states\n• block-level .nav — full-width bar",
      application: "Understanding flow is the foundation before Flexbox-powered VEXDYN navigation.",
      challenge: "Build a horizontal nav with four links using inline-block. Add hover and active states without Flexbox yet."
    },
    {
      id: 12,
      title: "POSITION SYSTEM",
      description: "Layer and place elements with relative, absolute, fixed and sticky.",
      mission: "Build a card with floating elements/badges.",
      definitions: [
        "position changes how an element is placed: static (default), relative, absolute, fixed, sticky.",
        "Absolutely positioned elements offset from their nearest positioned ancestor; z-index controls stacking order."
      ],
      explanation: "relative keeps an element in flow but allows offset and becomes a positioning anchor. absolute removes from flow and places against that anchor — perfect for badges. fixed pins to the viewport (e.g. WhatsApp button). sticky toggles between relative and fixed within a container — useful for section labels.\n\nposition removes or offsets elements from normal flow. relative is an anchor; absolute places inside the nearest positioned ancestor; fixed pins to the viewport; sticky toggles between relative and fixed at a scroll threshold. z-index only applies to positioned elements — use a small, documented scale.",
      exampleTitle: "Card with floating badge",
      example: `.feature-card {\n  position: relative;\n  padding: 28px 24px;\n  border-radius: 16px;\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n}\n\n.feature-card .badge {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 4px 10px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border-radius: 999px;\n  background: rgba(124, 92, 255, 0.2);\n  color: #b9a8ff;\n}\n\n.floating-help {\n  position: fixed;\n  bottom: 22px;\n  right: 22px;\n  z-index: 100;\n}`,
      breakdown: "• relative card — positioning context\n• absolute badge — pinned to top-right\n• fixed help — stays on screen while scrolling\n• z-index — keeps floating UI above content",
      application: "VEXDYN course badges and the WhatsApp float use the same positioning patterns.",
      challenge: "Create a card with an absolute status badge and a fixed corner button. Ensure stacking order is correct."
    },
    {
      id: 13,
      title: "FLEXBOX — THE ALIGNMENT ENGINE",
      description: "Align and distribute items on one axis with Flexbox.",
      mission: "Build a responsive navigation using Flexbox.",
      definitions: [
        "Flexbox is a one-dimensional layout model: display:flex creates a flex container; children become flex items.",
        "justify-content distributes along the main axis; align-items aligns on the cross axis; gap sets consistent spacing."
      ],
      explanation: "Flexbox solved years of float hacks. Set display:flex on a container, then choose direction (row/column), alignment and gap. Nav bars, toolbars and centered heroes become straightforward. Main axis follows flex-direction; cross axis is perpendicular. Start simple: space-between for nav, center for hero stacks.\n\nFlexbox is one-dimensional alignment. Set display:flex, choose direction, then distribute space with justify-content (main axis) and align-items (cross axis). gap replaces margin hacks. Flex turns nav bars, toolbars, and card footers into predictable systems.",
      exampleTitle: "Flex navigation",
      example: `.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 14px 24px;\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.nav-links a {\n  padding: 8px 12px;\n  border-radius: 8px;\n  color: #c8c8d4;\n  text-decoration: none;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}`,
      breakdown: "• Outer flex — logo left, clusters right\n• Nested flex — link group and action group\n• gap — even spacing without margin tricks\n• align-items: center — vertical centering",
      application: "The VEXDYN site header is a Flexbox system: brand, links and actions on one row.",
      challenge: "Rebuild your nav with Flexbox. Logo left, links center or right, action button at the end. Works without floats."
    },
    {
      id: 14,
      title: "FLEXBOX ADVANCED",
      description: "Grow, shrink, wrap and build responsive card rows.",
      mission: "Build responsive VEXDYN service cards.",
      definitions: [
        "flex-grow, flex-shrink and flex-basis control how items consume free space; the flex shorthand combines them.",
        "flex-wrap allows items to flow onto multiple lines when space runs out."
      ],
      explanation: "Equal-width cards: flex: 1 1 240px with wrap. Items grow to fill, shrink under pressure and wrap on small screens. Avoid fixed widths when you want fluid rows. Use min-width carefully to prevent ugly crush. Card grids can use Flexbox; complex two-dimensional layouts may prefer Grid next.\n\nflex-grow, flex-shrink, and flex-basis control how items share free space. The flex shorthand packs all three. flex-wrap allows rows to break. Together they power responsive card rows without media queries for every width.",
      exampleTitle: "Wrapping service cards",
      example: `.services {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n}\n\n.service-card {\n  flex: 1 1 240px;\n  max-width: 100%;\n  padding: 24px;\n  border-radius: 16px;\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n}\n\n.service-card h3 {\n  margin: 0 0 8px;\n  font-size: 1.1rem;\n}\n\n.service-card p {\n  margin: 0;\n  color: #9a9aab;\n  font-size: 0.92rem;\n}`,
      breakdown: "• flex: 1 1 240px — grow, shrink, basis 240px\n• flex-wrap — rows form automatically\n• gap — consistent gutters\n• max-width 100% — no horizontal overflow",
      application: "Ecosystem and capability rows in VEXDYN follow this flexible card pattern before upgrading to Grid where needed.",
      challenge: "Create three service cards in a wrapping flex row. At mobile width they stack; on desktop they share a row."
    },
    {
      id: 15,
      title: "GRID — THE STRUCTURE ENGINE",
      description: "Build two-dimensional layouts with CSS Grid.",
      mission: "Build a six-card technology dashboard.",
      definitions: [
        "CSS Grid is a two-dimensional layout system with rows and columns defined on a grid container.",
        "fr units distribute free space; repeat() reduces repetition; gap sets row and column gutters."
      ],
      explanation: "Grid shines when layout is both rows and columns — dashboards, galleries, page shells. Define columns with grid-template-columns, place items automatically or explicitly. Unlike Flexbox, Grid controls both axes at once. Start with equal columns: repeat(3, 1fr).\n\nGrid is two-dimensional. grid-template-columns with fr units divides space proportionally. repeat() and gap keep rules short. Grid shines for dashboards, galleries, and page shells where rows and columns both matter.",
      exampleTitle: "Six-card dashboard",
      example: `.dashboard {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.dash-card {\n  padding: 20px;\n  border-radius: 14px;\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.08);\n}\n\n.dash-card .metric {\n  font-size: 1.6rem;\n  font-weight: 750;\n}\n\n.dash-card .label {\n  font-size: 0.78rem;\n  color: #8b8b9a;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n@media (max-width: 700px) {\n  .dashboard {\n    grid-template-columns: 1fr;\n  }\n}`,
      breakdown: "• repeat(3, 1fr) — three equal columns\n• gap — row and column spacing\n• mobile media query — single column stack\n• cards auto-place in source order",
      application: "VEXDYN ecosystem and course grids use Grid for intentional multi-column compositions on desktop.",
      challenge: "Build a six-card dashboard in a 3-column grid. Collapse to one column under 700px."
    },
    {
      id: 16,
      title: "GRID ADVANCED",
      description: "Create fluid responsive grids with auto-fit and minmax.",
      mission: "Build an automatically responsive service grid.",
      definitions: [
        "auto-fit and auto-fill expand grid tracks to fit the container; minmax() sets flexible track sizes.",
        "A common pattern: repeat(auto-fit, minmax(240px, 1fr)) for cards that reflow without many breakpoints."
      ],
      explanation: "Instead of hard breakpoints for 1/2/3 columns, auto-fit + minmax lets the browser pack as many tracks as fit. When space is tight, tracks shrink to the min and wrap. This is ideal for course cards, product grids and galleries. Combine with gap for consistent rhythm.\n\nauto-fit, auto-fill, and minmax() create grids that add/remove columns as space allows. A single rule can replace a stack of breakpoints for card layouts. Fluid grids are the modern default for product marketing sections.",
      exampleTitle: "Auto-fit card grid",
      example: `.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 18px;\n}\n\n.card-grid .card {\n  padding: 24px;\n  border-radius: 16px;\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.09);\n  min-height: 160px;\n}`,
      breakdown: "• minmax(240px, 1fr) — no card narrower than 240px\n• auto-fit — collapses empty tracks\n• gap — uniform spacing\n• often no extra breakpoints required",
      application: "Learn course grids can use this pattern so 2 or 4 columns appear based on viewport, not only fixed media queries.",
      challenge: "Replace a fixed 3-column grid with auto-fit + minmax. Resize the browser and watch columns adapt."
    },
    {
      id: 17,
      title: "BUILD FOR EVERY SCREEN",
      description: "Design responsive layouts with mobile-first media queries.",
      mission: "Create a website that works properly across mobile and desktop.",
      definitions: [
        "Responsive design ensures interfaces adapt across viewport sizes — not only by scaling, but by reflowing layout.",
        "Mobile-first media queries add complexity as the screen grows: @media (min-width: …)."
      ],
      explanation: "Start with a solid single-column mobile layout. Add columns, spacing and type scale at 768px, 1024px and 1440px as needed. Prevent overflow with max-width: 100% on media and min-width: 0 on flex children. Test real widths: 375, 768, 1024, 1440. Responsive is a system, not one breakpoint.\n\nResponsive design is constraint design. Mobile-first means base styles fit small screens; min-width media queries enhance larger ones. Prevent overflow with min-width:0 on flex children, max-width:100% on media, and realistic breakpoints (375, 768, 1024, 1440).",
      exampleTitle: "Mobile-first section",
      example: `.features {\n  display: grid;\n  gap: 16px;\n  padding: 48px 20px;\n}\n\n@media (min-width: 768px) {\n  .features {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 20px;\n    padding: 64px 32px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .features {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 24px;\n    max-width: 1100px;\n    margin: 0 auto;\n  }\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}`,
      breakdown: "• Base — one column, comfortable padding\n• 768px — two columns\n• 1024px — three columns + max width\n• images — never overflow",
      application: "VEXDYN desktop optimization uses additive min-width queries so mobile remains the stable baseline.",
      challenge: "Build a features section that is 1 column on mobile, 2 on tablet, 3 on desktop. Verify at 375, 768, 1024 and 1440."
    },
    {
      id: 18,
      title: "TRANSITION SYSTEM",
      description: "Add smooth hover and state changes with transitions.",
      mission: "Create premium buttons and cards with smooth interactions.",
      definitions: [
        "A transition interpolates property changes over time when an element’s state changes (e.g. :hover).",
        "Duration, timing-function and property list control how polished the motion feels."
      ],
      explanation: "Instant state changes feel harsh. Short transitions (150–300ms) on transform, opacity and color feel premium. Prefer transform and opacity for performance. Avoid transitioning layout properties like width/height when possible. Consistent easing across a product builds trust.\n\nTransitions interpolate property changes over time. Specify which properties, duration, and easing. Hover and focus states should move 150–300ms with ease or a custom cubic-bezier. Transition opacity and transform for performance; avoid animating width/height when possible.",
      exampleTitle: "Interactive button and card",
      example: `.btn-primary {\n  background: #7c5cff;\n  color: #fff;\n  padding: 12px 22px;\n  border-radius: 999px;\n  border: none;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.25s ease,\n    background 0.2s ease;\n}\n\n.btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px rgba(124, 92, 255, 0.35);\n  background: #8b6fff;\n}\n\n.card {\n  transition:\n    transform 0.28s ease,\n    border-color 0.28s ease,\n    box-shadow 0.28s ease;\n}\n\n.card:hover {\n  transform: translateY(-3px);\n  border-color: rgba(124, 92, 255, 0.4);\n}`,
      breakdown: "• Only GPU-friendly props where possible\n• 0.2–0.28s — quick but visible\n• hover lift — subtle, not bouncy\n• matching shadow reinforces elevation",
      application: "VEXDYN buttons, lesson cards and glass cards all use restrained transitions for a cinematic feel.",
      challenge: "Add transitions to a button and card. Hover should feel smooth — not instant and not sluggish."
    },
    {
      id: 19,
      title: "TRANSFORM ENGINE",
      description: "Move, scale and rotate elements without breaking layout flow.",
      mission: "Create cards that subtly move and scale on interaction.",
      definitions: [
        "transform applies translate, scale, rotate and skew without reflowing surrounding document layout.",
        "Transforms are composited efficiently by the browser — ideal for interaction feedback."
      ],
      explanation: "translateY on hover lifts a card. scale(1.02) adds presence. rotate is powerful but easy to overuse. Combine transforms in one property. transform-origin controls the pivot point. Pair with transitions for polish. Keep motion subtle in product UI.\n\nTransforms move, scale, and rotate without reflow when composited. translateY on hover lifts cards; scale emphasizes focus. Combine transforms in one property. Prefer transform + opacity for smooth 60fps interaction on mobile.",
      exampleTitle: "Card transform interactions",
      example: `.tilt-card {\n  transform: translateY(0) scale(1);\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.tilt-card:hover {\n  transform: translateY(-4px) scale(1.015);\n}\n\n.icon-spin:hover {\n  transform: rotate(8deg) scale(1.08);\n  transition: transform 0.25s ease;\n}\n\n.badge-pop {\n  transform-origin: center;\n}\n\n.badge-pop:active {\n  transform: scale(0.96);\n}`,
      breakdown: "• translateY + scale — premium hover lift\n• cubic-bezier — refined easing curve\n• active scale-down — tactile press\n• transform-origin — controls rotation/scale pivot",
      application: "Lesson cards and ecosystem cards in VEXDYN use small translate/scale transforms on interaction.",
      challenge: "Create three cards with hover translate and scale. Add a pressed state on the CTA using scale."
    },
    {
      id: 20,
      title: "ANIMATION ENGINE",
      description: "Orchestrate motion with @keyframes and animation properties.",
      mission: "Create a cinematic hero reveal sequence.",
      definitions: [
        "@keyframes defines named animation sequences; the animation property applies them to elements.",
        "Duration, delay, timing-function and iteration-count choreograph multi-step reveals."
      ],
      explanation: "Transitions react to state changes. Animations can run on load or loop. For hero reveals, animate opacity and transform with staggered delays. Respect prefers-reduced-motion by simplifying or disabling non-essential motion. Looping ambient motion should stay subtle.\n\nAnimations use @keyframes to describe multi-step motion. Name the animation, set duration, delay, easing, and iteration. Stagger delays across children for cinematic reveals. Keep motion purposeful — entrance, feedback, or attention — never decoration alone.",
      exampleTitle: "Staggered hero reveal",
      example: `@keyframes riseIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.hero-title {\n  animation: riseIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n\n.hero-sub {\n  animation: riseIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;\n}\n\n.hero-cta {\n  animation: riseIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero-title,\n  .hero-sub,\n  .hero-cta {\n    animation: none;\n  }\n}`,
      breakdown: "• riseIn — fade + upward motion\n• staggered delays — sequence, not simultaneous dump\n• both fill-mode — holds start/end states\n• reduced-motion — accessibility escape hatch",
      application: "VEXDYN reveal classes and loader sequences follow the same opacity/transform animation principles.",
      challenge: "Build a hero with title, subtitle and CTA that reveal in sequence on load. Honor prefers-reduced-motion."
    },
    {
      id: 21,
      title: "VARIABLES & DESIGN SYSTEMS",
      description: "Build reusable tokens with CSS custom properties.",
      mission: "Create a reusable mini design system.",
      definitions: [
        "CSS custom properties (variables) store values in :root or components and are read with var().",
        "Design tokens — color, radius, shadow, spacing — keep a product visually consistent."
      ],
      explanation: "Hard-coded hex values scatter and drift. Tokens centralize decisions. Themes swap token values on [data-theme] without rewriting components. Variables can be overridden locally for variants. A minimal system includes background, surface, text, accent, border, radius and shadow.\n\nCustom properties (:root { --accent: ... }) are design tokens. var(--accent) consumes them. Tokens for color, radius, shadow, and space let themes and components share one source of truth. Change the token; the system updates.",
      exampleTitle: "Mini design system",
      example: `:root {\n  --bg: #07070c;\n  --surface: rgba(255,255,255,0.04);\n  --text: #f2f2f7;\n  --muted: #9898a8;\n  --accent: #7c5cff;\n  --border: rgba(255,255,255,0.09);\n  --radius: 16px;\n  --shadow: 0 8px 30px rgba(0,0,0,0.35);\n  --space: 16px;\n}\n\n[data-theme="light"] {\n  --bg: #f4f2ec;\n  --surface: rgba(255,255,255,0.8);\n  --text: #12121a;\n  --muted: #5c5c6a;\n  --border: rgba(0,0,0,0.08);\n  --shadow: 0 8px 30px rgba(0,0,0,0.08);\n}\n\n.card {\n  background: var(--surface);\n  color: var(--text);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  padding: var(--space);\n}`,
      breakdown: "• :root tokens — global defaults\n• [data-theme] — theme overrides\n• components only consume tokens\n• one card class works in every theme",
      application: "VEXDYN’s Obsidian, Aurora and Ice themes are token swaps on the same component CSS.",
      challenge: "Define at least eight tokens and build a themed card. Add a second theme by overriding tokens only."
    },
    {
      id: 22,
      title: "MODERN VISUAL EFFECTS",
      description: "Layer gradients, blur, glow and glass for cinematic UI.",
      mission: "Create a futuristic glass dashboard.",
      definitions: [
        "Modern effects include linear/radial gradients, backdrop-filter, filter, layered backgrounds and glow shadows.",
        "Restraint matters — effects should support hierarchy, not compete with content."
      ],
      explanation: "Gradients create atmosphere. Soft radial glows suggest energy without noise. Glass panels sit above atmospheric backgrounds. Filters can desaturate or glow icons. Performance note: limit heavy blur regions. Always check text contrast remains accessible.\n\nModern effects layer gradients, blur, and glow. linear-gradient and radial-gradient paint depth; backdrop-filter frosts glass; soft box-shadows simulate light. Restraint is the skill — one strong effect per surface beats five competing ones.",
      exampleTitle: "Glass dashboard panel",
      example: `.dash-shell {\n  min-height: 100vh;\n  padding: 40px 20px;\n  background:\n    radial-gradient(ellipse 50% 40% at 20% 0%, rgba(124,92,255,0.2), transparent),\n    radial-gradient(ellipse 40% 35% at 90% 20%, rgba(56,189,248,0.12), transparent),\n    #07070c;\n}\n\n.dash-panel {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 28px;\n  border-radius: 20px;\n  background: rgba(255,255,255,0.04);\n  border: 1px solid rgba(255,255,255,0.1);\n  backdrop-filter: blur(18px);\n  box-shadow:\n    0 20px 50px rgba(0,0,0,0.45),\n    0 0 40px rgba(124,92,255,0.08);\n}\n\n.dash-panel h1 {\n  background: linear-gradient(135deg, #fff, #b9a8ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}`,
      breakdown: "• layered body gradients — atmosphere\n• glass panel — blur + translucent fill\n• soft accent glow — depth\n• gradient text — restrained highlight",
      application: "VEXDYN atmospheres and glass cards use the same layered gradient + blur language.",
      challenge: "Build a small glass dashboard with atmospheric background, one glass panel and gradient heading. Keep text readable."
    },
    {
      id: 23,
      title: "VEXDYN INTERFACE LAB",
      description: "Combine CSS skills into a full multi-section interface project.",
      mission: "Build navigation, hero, capability cards, process, pricing, CTA and footer as one cohesive interface.",
      definitions: [
        "A practical interface project combines typography, color, layout, components and motion into one coherent page.",
        "Consistency of tokens, spacing and interaction patterns matters more than isolated tricks."
      ],
      explanation: "This lab is synthesis. Plan structure in HTML first. Apply a token system. Layout with Flexbox/Grid. Style glass cards and type hierarchy. Add transitions. Test mobile and desktop. Do not copy VEXDYN pixel-for-pixel — invent your own product interface using the same professional techniques.\n\nThis lab merges everything: tokens, type, space, flex/grid, glass cards, motion, and responsive rules into one multi-section interface. Build navigation, hero, capability cards, process, pricing, CTA, and footer as a coherent system — not isolated demos.",
      exampleTitle: "Project skeleton",
      example: `/* Suggested section order */\n/* 1. :root tokens */\n/* 2. base / typography */\n/* 3. header nav (flex) */\n/* 4. hero (fluid type) */\n/* 5. cards grid */\n/* 6. process row */\n/* 7. pricing */\n/* 8. cta band */\n/* 9. footer */\n/* 10. media queries */\n/* 11. transitions */\n\n.section {\n  padding: clamp(48px, 8vw, 96px) 20px;\n  max-width: 1100px;\n  margin: 0 auto;\n}`,
      breakdown: "• tokens first — everything reuses them\n• section rhythm — consistent vertical padding\n• components before page-level polish\n• responsive last-mile adjustments",
      application: "This mirrors how a real product marketing page is assembled — including VEXDYN itself.",
      challenge: "Build a full multi-section interface page. Include nav, hero, cards, process, pricing, CTA, footer. Must be responsive and token-driven."
    },
    {
      id: 24,
      title: "CSS FINAL MISSION: BUILD BEYOND THE STYLES",
      description: "Ship a complete original website that proves mastery of the CSS system.",
      mission: "Design and build your own fictional product site demonstrating the full CSS skill set.",
      definitions: [
        "A final project demonstrates independent application of skills — structure, visual system, layout, motion and responsiveness.",
        "Course completion means you can turn a blank folder into a coherent, modern interface without step-by-step prompts."
      ],
      explanation: "Choose a concept: SaaS, studio, portfolio, learning platform, gaming brand. Invent the content. Implement: semantic HTML, token system, typography hierarchy, box model discipline, Flexbox and/or Grid, responsive behavior, hover states, transitions, at least one animation, modern surfaces (glass/gradient/glow) and clean mobile + desktop layouts. This is your CSS portfolio piece.\n\nThe final mission is independent proof. Choose a product concept and ship a real multi-section site that demonstrates structure, hierarchy, color, layout, responsiveness, interaction, animation, variables, and effects. When it holds up on phone and desktop, the CSS system is initialized.",
      exampleTitle: "Final project checklist",
      example: `/* FINAL PROJECT MUST INCLUDE */\n/* ✓ Proper HTML structure */\n/* ✓ Typography hierarchy */\n/* ✓ Color system (tokens) */\n/* ✓ Box model control */\n/* ✓ Flexbox and/or Grid */\n/* ✓ Responsive design */\n/* ✓ Reusable components */\n/* ✓ Hover states */\n/* ✓ Transitions */\n/* ✓ Transforms */\n/* ✓ CSS animation */\n/* ✓ CSS variables */\n/* ✓ Modern visual effects */\n/* ✓ Mobile layout */\n/* ✓ Desktop layout */\n\n/* When done: CSS SYSTEM INITIALIZED */`,
      breakdown: "• Treat it like a real brief\n• Design tokens before decoration\n• Mobile-first, then elevate desktop\n• Motion supports hierarchy",
      application: "Completing this mission means you can contribute visual systems at a VEXDYN level of craft.",
      challenge: "Ship your original fictional technology website covering every checklist item. Then mark this lesson complete: CSS SYSTEM INITIALIZED. Next system: JAVASCRIPT."
    }
  ];

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { completed: [] };
      const data = JSON.parse(raw);
      return { completed: Array.isArray(data.completed) ? data.completed.map(Number) : [] };
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
    return Math.round((completed.length / TOTAL) * 100);
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
    const htmlCourse = document.getElementById("htmlCourseView");
    const htmlLesson = document.getElementById("htmlLessonView");
    const cssCourse = document.getElementById("cssCourseView");
    const cssLesson = document.getElementById("cssLessonView");
    if (catalog) catalog.hidden = name !== "catalog";
    if (htmlCourse) htmlCourse.hidden = true;
    if (htmlLesson) htmlLesson.hidden = true;
    if (cssCourse) cssCourse.hidden = name !== "course";
    if (cssLesson) cssLesson.hidden = name !== "lesson";
    const jsCourse = document.getElementById("jsCourseView");
    const jsLesson = document.getElementById("jsLessonView");
    if (jsCourse) jsCourse.hidden = true;
    if (jsLesson) jsLesson.hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCourseList() {
    const list = document.getElementById("cssLessonList");
    const pctEl = document.getElementById("cssCoursePct");
    const barEl = document.getElementById("cssCourseBar");
    const statusEl = document.getElementById("cssCourseStatus");
    const completeBanner = document.getElementById("cssCompleteBanner");
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
        pct === 0 ? "NOT STARTED" : pct >= 100 ? "CSS SYSTEM INITIALIZED" : "IN PROGRESS";
    }
    if (completeBanner) completeBanner.hidden = pct < 100;

    list.innerHTML = LESSONS.map((lesson) => {
      const done = isComplete(lesson.id, completed);
      const badge = done
        ? '<span class="lesson-badge lesson-badge-done"><span class="lesson-badge-icon" aria-hidden="true">✓</span> COMPLETE</span>'
        : '<span class="lesson-badge lesson-badge-open">OPEN</span>';
      return `
        <button type="button" class="lesson-item ${done ? "is-complete" : ""}" data-css-open-lesson="${lesson.id}" aria-label="Lesson ${lesson.id}: ${escapeHtml(lesson.title)}">
          <span class="lesson-item-top">
            <span class="lesson-item-num" style="color:${ACCENT}">${String(lesson.id).padStart(2, "0")}</span>
            ${badge}
          </span>
          <span class="lesson-item-title">${escapeHtml(lesson.title)}</span>
          <span class="lesson-item-mission">${escapeHtml(lesson.description)}</span>
        </button>`;
    }).join("");
  }

  function openLesson(id) {
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) return;
    const { completed } = loadProgress();
    const done = isComplete(id, completed);

    const set = (sid, text) => {
      const el = document.getElementById(sid);
      if (el) el.textContent = text;
    };

    set("cssLessonNum", "LESSON " + String(lesson.id).padStart(2, "0"));
    set("cssLessonTitle", lesson.title);
    set("cssLessonMission", lesson.mission);

    const defsEl = document.getElementById("cssLessonDefs");
    if (defsEl) {
      defsEl.innerHTML = lesson.definitions
        .map((d, i) => `<div class="lesson-def"><span class="lesson-def-label">Definition ${i + 1}</span><p>${escapeHtml(d)}</p></div>`)
        .join("");
    }

    set("cssLessonExplanation", lesson.explanation);
    set("cssExampleTitle", lesson.exampleTitle || "Example");

    const exampleEl = document.getElementById("cssLessonExample");
    if (exampleEl) exampleEl.textContent = lesson.example;

    set("cssLessonBreakdown", lesson.breakdown);
    set("cssLessonApplication", lesson.application);
    set("cssLessonChallenge", lesson.challenge);

    const completeBtn = document.getElementById("cssLessonCompleteBtn");
    const nextBtn = document.getElementById("cssLessonNextBtn");
    const prevBtn = document.getElementById("cssLessonPrevBtn");

    if (completeBtn) {
      completeBtn.disabled = done;
      completeBtn.textContent = done ? "✓ LESSON COMPLETE" : "MARK LESSON COMPLETE";
      completeBtn.dataset.lessonId = String(lesson.id);
    }
    if (prevBtn) {
      prevBtn.disabled = lesson.id <= 1;
      prevBtn.dataset.cssGoto = String(lesson.id - 1);
    }
    if (nextBtn) {
      nextBtn.disabled = lesson.id >= TOTAL;
      nextBtn.dataset.cssGoto = String(lesson.id + 1);
    }

    const lessonView = document.getElementById("cssLessonView");
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
    openLesson(id);
    syncCatalogProgress();
  }

  function syncCatalogProgress() {
    const { completed } = loadProgress();
    const pct = getPercent(completed);
    const status = pct === 0 ? "not-started" : pct >= 100 ? "completed" : "in-progress";

    if (window.VEXDYN_LEARN && window.VEXDYN_LEARN.COURSES) {
      const course = window.VEXDYN_LEARN.COURSES.find((c) => c.id === "css");
      if (course) {
        course.progress = pct;
        course.status = status;
      }
      if (typeof window.VEXDYN_LEARN.updateJourney === "function") {
        window.VEXDYN_LEARN.updateJourney(window.VEXDYN_LEARN.COURSES);
      }
      const catalog = document.getElementById("learnCatalog");
      if (catalog && !catalog.hidden && typeof window.VEXDYN_LEARN.renderCourses === "function") {
        window.VEXDYN_LEARN.renderCourses(window.VEXDYN_LEARN.COURSES);
      }
    }

    const card = document.querySelector('[data-course-id="css"]');
    if (card) {
      const fill = card.querySelector("[data-progress-fill]");
      const num = card.querySelector("[data-progress-num]");
      const st = card.querySelector("[data-status]");
      const cta = card.querySelector("[data-course-cta]");
      if (fill) {
        fill.style.width = pct + "%";
        fill.style.background = ACCENT;
      }
      if (num) num.textContent = pct + "%";
      if (st) st.textContent = status === "not-started" ? "NOT STARTED" : status === "completed" ? "COMPLETED" : "IN PROGRESS";
      if (cta) cta.textContent = (status === "not-started" ? "START LEARNING" : status === "completed" ? "REVIEW" : "CONTINUE") + " →";
    }
  }

  function copyCode() {
    const exampleEl = document.getElementById("cssLessonExample");
    const btn = document.getElementById("cssCopyBtn");
    if (!exampleEl || !btn) return;
    const text = exampleEl.textContent || "";
    const done = () => {
      btn.textContent = "✓ COPIED";
      setTimeout(() => { btn.textContent = "COPY"; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch {}
        document.body.removeChild(ta);
        done();
      });
    }
  }

  function openCssCourse() {
    try {
      renderCourseList();
      showView("course");
    } catch (err) {
      console.error("VEXDYN CSS course open failed:", err);
    }
  }

  function initCssCourse() {
    if (!document.getElementById("cssCourseView")) {
      console.warn("VEXDYN: cssCourseView not found");
      return;
    }

    syncCatalogProgress();

    document.addEventListener("click", (e) => {
      // Open CSS course from CTA button OR course card
      const cta = e.target.closest("[data-course-cta]");
      const card = e.target.closest('[data-course-id="css"]');
      const id = cta ? cta.getAttribute("data-id") : null;
      if ((cta && id === "css") || (card && !e.target.closest("[data-course-cta]") && false)) {
        // only CTA opens course (card body clicks ignored unless on CTA)
      }
      if (cta && id === "css") {
        e.preventDefault();
        e.stopPropagation();
        openCssCourse();
        return;
      }
      // Also support explicit data attribute on any element
      const openBtn = e.target.closest("[data-open-css-course]");
      if (openBtn) {
        e.preventDefault();
        e.stopPropagation();
        openCssCourse();
        return;
      }

      const backCatalog = e.target.closest("[data-css-back-catalog]");
      if (backCatalog) {
        e.preventDefault();
        syncCatalogProgress();
        const catalog = document.getElementById("learnCatalog");
        const cssCourse = document.getElementById("cssCourseView");
        const cssLesson = document.getElementById("cssLessonView");
        if (catalog) catalog.hidden = false;
        if (cssCourse) cssCourse.hidden = true;
        if (cssLesson) cssLesson.hidden = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const backCourse = e.target.closest("[data-css-back-course]");
      if (backCourse) {
        e.preventDefault();
        renderCourseList();
        showView("course");
        return;
      }

      const openLessonBtn = e.target.closest("[data-css-open-lesson]");
      if (openLessonBtn) {
        e.preventDefault();
        openLesson(parseInt(openLessonBtn.dataset.cssOpenLesson, 10));
        return;
      }

      const completeBtn = e.target.closest("#cssLessonCompleteBtn");
      if (completeBtn && !completeBtn.disabled) {
        e.preventDefault();
        markComplete(parseInt(completeBtn.dataset.lessonId, 10));
        return;
      }

      const navBtn = e.target.closest("[data-css-goto]");
      if (navBtn && !navBtn.disabled) {
        e.preventDefault();
        openLesson(parseInt(navBtn.dataset.cssGoto, 10));
        return;
      }

      if (e.target.closest("#cssCopyBtn")) {
        e.preventDefault();
        copyCode();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initCssCourse);
  document.addEventListener("vexdyn-open-css-course", function () {
    if (typeof openCssCourse === "function") openCssCourse();
  });

  window.VEXDYN_CSS_COURSE = { LESSONS, loadProgress, getPercent, renderCourseList, openCssCourse };
})();
