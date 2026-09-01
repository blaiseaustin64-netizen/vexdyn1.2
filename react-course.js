/* ============================================
   VEXDYN Learn — React Course (36 Lessons)
   Progress: localStorage key vexdyn-learn-react
   Accent: React cyan #61DAFB / #149ECA
   All lessons unlocked (no VEXDYN+ yet)
   Educational content only — site stays HTML/CSS/JS
   ============================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "vexdyn-learn-react";
  const TOTAL = 36;
  const ACCENT = "#61DAFB";

  const LESSONS = [
  {
    "id": 1,
    "title": "ENTER THE COMPONENT WORLD",
    "description": "Understand React, components, declarative UI, and the React mental model.",
    "mission": "Understand React, components, declarative UI, and the React mental model.",
    "definitions": [
      "ENTER THE COMPONENT WORLD is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "ENTER THE COMPONENT WORLD advances the React track inside VEXDYN Learn. Understand React, components, declarative UI, and the React mental model. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 01",
    "example": "function Welcome() {\n  return <h1>Welcome to VEXDYN Learn</h1>;\n}\n\nfunction App() {\n  return (\n    <main>\n      <Welcome />\n      <p>Build systems, not just screens.</p>\n    </main>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Understand React, components, declarative UI, and the React mental model. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 2,
    "title": "JSX: JAVASCRIPT MEETS UI",
    "description": "Build a dynamic course header using JSX expressions and rules.",
    "mission": "Build a dynamic course header using JSX expressions and rules.",
    "definitions": [
      "JSX: JAVASCRIPT MEETS UI is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "JSX: JAVASCRIPT MEETS UI advances the React track inside VEXDYN Learn. Build a dynamic course header using JSX expressions and rules. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 02",
    "example": "const course = \"React\";\nconst lessons = 36;\n\nfunction CourseHeader() {\n  return (\n    <header className=\"course-header\">\n      <h1>{course}</h1>\n      <p>{lessons} lessons \u00b7 Advanced track</p>\n    </header>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build a dynamic course header using JSX expressions and rules. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 3,
    "title": "YOUR FIRST COMPONENT SYSTEM",
    "description": "Compose App, Header, Hero, CourseCard, and Footer.",
    "mission": "Compose App, Header, Hero, CourseCard, and Footer.",
    "definitions": [
      "YOUR FIRST COMPONENT SYSTEM is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "YOUR FIRST COMPONENT SYSTEM advances the React track inside VEXDYN Learn. Compose App, Header, Hero, CourseCard, and Footer. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 03",
    "example": "function Header() { return <header>VEXDYN</header>; }\nfunction Hero() { return <section><h1>Learn React</h1></section>; }\nfunction CourseCard() { return <article>React \u00b7 36 lessons</article>; }\nfunction Footer() { return <footer>\u00a9 VEXDYN</footer>; }\n\nfunction App() {\n  return (\n    <>\n      <Header />\n      <Hero />\n      <CourseCard />\n      <Footer />\n    </>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Compose App, Header, Hero, CourseCard, and Footer. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 4,
    "title": "PROPS: COMPONENT COMMUNICATION",
    "description": "Create a reusable CourseCard driven by props.",
    "mission": "Create a reusable CourseCard driven by props.",
    "definitions": [
      "PROPS: COMPONENT COMMUNICATION is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "PROPS: COMPONENT COMMUNICATION advances the React track inside VEXDYN Learn. Create a reusable CourseCard driven by props. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 04",
    "example": "function CourseCard({ title, lessons, level }) {\n  return (\n    <article className=\"card\">\n      <h2>{title}</h2>\n      <p>{lessons} lessons</p>\n      <span>{level}</span>\n    </article>\n  );\n}\n\n<CourseCard title=\"React\" lessons={36} level=\"Advanced\" />",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Create a reusable CourseCard driven by props. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 5,
    "title": "RENDERING DATA",
    "description": "Render course information from objects and calculated values.",
    "mission": "Render course information from objects and calculated values.",
    "definitions": [
      "RENDERING DATA is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "RENDERING DATA advances the React track inside VEXDYN Learn. Render course information from objects and calculated values. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 05",
    "example": "const course = {\n  id: \"react\",\n  title: \"React\",\n  lessons: 36,\n  progress: 0\n};\n\nfunction CourseInfo() {\n  const remaining = course.lessons; // derived later from progress\n  return (\n    <div>\n      <h2>{course.title}</h2>\n      <p>{course.lessons} lessons \u00b7 {course.progress}%</p>\n    </div>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Render course information from objects and calculated values. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 6,
    "title": "CONDITIONAL RENDERING",
    "description": "Build dynamic course status: NOT STARTED, IN PROGRESS, COMPLETE.",
    "mission": "Build dynamic course status: NOT STARTED, IN PROGRESS, COMPLETE.",
    "definitions": [
      "CONDITIONAL RENDERING is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "CONDITIONAL RENDERING advances the React track inside VEXDYN Learn. Build dynamic course status: NOT STARTED, IN PROGRESS, COMPLETE. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 06",
    "example": "function Status({ progress }) {\n  if (progress >= 100) return <span>COMPLETE</span>;\n  if (progress > 0) return <span>IN PROGRESS</span>;\n  return <span>NOT STARTED</span>;\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build dynamic course status: NOT STARTED, IN PROGRESS, COMPLETE. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 7,
    "title": "EVENTS IN REACT",
    "description": "Build interactive completion buttons and search fields.",
    "mission": "Build interactive completion buttons and search fields.",
    "definitions": [
      "EVENTS IN REACT is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "EVENTS IN REACT advances the React track inside VEXDYN Learn. Build interactive completion buttons and search fields. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 07",
    "example": "function CompleteButton() {\n  function handleClick() {\n    console.log(\"Lesson marked complete\");\n  }\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      MARK COMPLETE\n    </button>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build interactive completion buttons and search fields. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 8,
    "title": "COMPONENT ARCHITECTURE",
    "description": "Design clear component boundaries for a learning dashboard.",
    "mission": "Design clear component boundaries for a learning dashboard.",
    "definitions": [
      "COMPONENT ARCHITECTURE is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "COMPONENT ARCHITECTURE advances the React track inside VEXDYN Learn. Design clear component boundaries for a learning dashboard. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 08",
    "example": "// Architecture sketch\n// App\n// \u251c\u2500\u2500 Header\n// \u251c\u2500\u2500 Dashboard\n// \u2502   \u251c\u2500\u2500 SearchBar\n// \u2502   \u2514\u2500\u2500 CourseGrid \u2192 CourseCard\n// \u2514\u2500\u2500 Footer\n// Each unit owns one responsibility.",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Design clear component boundaries for a learning dashboard. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 9,
    "title": "REUSABLE UI COMPONENTS",
    "description": "Build buttons, cards, badges, inputs, and progress bars.",
    "mission": "Build buttons, cards, badges, inputs, and progress bars.",
    "definitions": [
      "REUSABLE UI COMPONENTS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "REUSABLE UI COMPONENTS advances the React track inside VEXDYN Learn. Build buttons, cards, badges, inputs, and progress bars. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 09",
    "example": "function Button({ children, variant = \"primary\", onClick }) {\n  return (\n    <button className={`btn btn-${variant}`} onClick={onClick}>\n      {children}\n    </button>\n  );\n}\n\nfunction Badge({ children }) {\n  return <span className=\"badge\">{children}</span>;\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build buttons, cards, badges, inputs, and progress bars. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 10,
    "title": "PROPS PATTERNS",
    "description": "Pass data and actions into configurable components.",
    "mission": "Pass data and actions into configurable components.",
    "definitions": [
      "PROPS PATTERNS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "PROPS PATTERNS advances the React track inside VEXDYN Learn. Pass data and actions into configurable components. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 10",
    "example": "function CourseCard({ course, onContinue }) {\n  return (\n    <article>\n      <h2>{course.title}</h2>\n      <p>{course.lessons} lessons</p>\n      <button type=\"button\" onClick={() => onContinue(course.id)}>\n        CONTINUE\n      </button>\n    </article>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Pass data and actions into configurable components. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 11,
    "title": "CHILDREN & COMPOSITION",
    "description": "Build flexible Panel and Card composition patterns.",
    "mission": "Build flexible Panel and Card composition patterns.",
    "definitions": [
      "CHILDREN & COMPOSITION is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "CHILDREN & COMPOSITION advances the React track inside VEXDYN Learn. Build flexible Panel and Card composition patterns. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 11",
    "example": "function Card({ children }) {\n  return <section className=\"card\">{children}</section>;\n}\n\nfunction App() {\n  return (\n    <Card>\n      <h2>React</h2>\n      <p>36 lessons</p>\n    </Card>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build flexible Panel and Card composition patterns. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 12,
    "title": "LISTS, KEYS & DATA ARCHITECTURE",
    "description": "Render VEXDYN courses from structured arrays with stable keys.",
    "mission": "Render VEXDYN courses from structured arrays with stable keys.",
    "definitions": [
      "LISTS, KEYS & DATA ARCHITECTURE is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "LISTS, KEYS & DATA ARCHITECTURE advances the React track inside VEXDYN Learn. Render VEXDYN courses from structured arrays with stable keys. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 12",
    "example": "const courses = [\n  { id: \"html\", title: \"HTML\" },\n  { id: \"css\", title: \"CSS\" },\n  { id: \"javascript\", title: \"JavaScript\" },\n  { id: \"react\", title: \"React\" }\n];\n\nfunction CourseList() {\n  return (\n    <ul>\n      {courses.map((c) => (\n        <li key={c.id}>{c.title}</li>\n      ))}\n    </ul>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Render VEXDYN courses from structured arrays with stable keys. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 13,
    "title": "FORMS & CONTROLLED INPUTS",
    "description": "Build a VEXDYN settings form with validation.",
    "mission": "Build a VEXDYN settings form with validation.",
    "definitions": [
      "FORMS & CONTROLLED INPUTS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "FORMS & CONTROLLED INPUTS advances the React track inside VEXDYN Learn. Build a VEXDYN settings form with validation. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 13",
    "example": "function ProfileForm() {\n  const [email, setEmail] = useState(\"\");\n  function handleSubmit(e) {\n    e.preventDefault();\n    if (!email.includes(\"@\")) return;\n    console.log(\"Saved\", email);\n  }\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"you@example.com\"\n      />\n      <button type=\"submit\">Save</button>\n    </form>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build a VEXDYN settings form with validation. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 14,
    "title": "COMPONENT DESIGN LAB",
    "description": "Build a VEXDYN Course Explorer with search and filters.",
    "mission": "Build a VEXDYN Course Explorer with search and filters.",
    "definitions": [
      "COMPONENT DESIGN LAB is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "COMPONENT DESIGN LAB advances the React track inside VEXDYN Learn. Build a VEXDYN Course Explorer with search and filters. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 14",
    "example": "// Course Explorer composition\n// App \u2192 Header, SearchBar, FilterBar, CourseGrid/CourseCard, EmptyState, Footer\n// Search and filter derive a visible list from source course data.",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build a VEXDYN Course Explorer with search and filters. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 15,
    "title": "STATE: MAKING COMPONENTS REMEMBER",
    "description": "Build interactive lesson completion with useState.",
    "mission": "Build interactive lesson completion with useState.",
    "definitions": [
      "STATE: MAKING COMPONENTS REMEMBER is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "STATE: MAKING COMPONENTS REMEMBER advances the React track inside VEXDYN Learn. Build interactive lesson completion with useState. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 15",
    "example": "function LessonComplete() {\n  const [done, setDone] = useState(false);\n  return (\n    <button type=\"button\" onClick={() => setDone((v) => !v)}>\n      {done ? \"COMPLETE\" : \"MARK COMPLETE\"}\n    </button>\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build interactive lesson completion with useState. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 16,
    "title": "STATE PATTERNS",
    "description": "Model boolean, string, number, array, and object state.",
    "mission": "Model boolean, string, number, array, and object state.",
    "definitions": [
      "STATE PATTERNS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "STATE PATTERNS advances the React track inside VEXDYN Learn. Model boolean, string, number, array, and object state. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 16",
    "example": "const [open, setOpen] = useState(false);\nconst [query, setQuery] = useState(\"\");\nconst [progress, setProgress] = useState(0);\nconst [lessons, setLessons] = useState([]);\nconst [user, setUser] = useState({ name: \"\", level: \"\" });",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Model boolean, string, number, array, and object state. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 17,
    "title": "STATE & FORMS",
    "description": "Create a complete onboarding form with IDLE/SUBMITTING/SUCCESS/ERROR.",
    "mission": "Create a complete onboarding form with IDLE/SUBMITTING/SUCCESS/ERROR.",
    "definitions": [
      "STATE & FORMS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "STATE & FORMS advances the React track inside VEXDYN Learn. Create a complete onboarding form with IDLE/SUBMITTING/SUCCESS/ERROR. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 17",
    "example": "function Onboarding() {\n  const [status, setStatus] = useState(\"IDLE\");\n  const [name, setName] = useState(\"\");\n  async function submit(e) {\n    e.preventDefault();\n    if (!name.trim()) return setStatus(\"ERROR\");\n    setStatus(\"SUBMITTING\");\n    await new Promise((r) => setTimeout(r, 400));\n    setStatus(\"SUCCESS\");\n  }\n  return <form onSubmit={submit}>{/* fields */}</form>;\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Create a complete onboarding form with IDLE/SUBMITTING/SUCCESS/ERROR. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 18,
    "title": "STATE & LISTS",
    "description": "Build an interactive lesson tracker with immutable list updates.",
    "mission": "Build an interactive lesson tracker with immutable list updates.",
    "definitions": [
      "STATE & LISTS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "STATE & LISTS advances the React track inside VEXDYN Learn. Build an interactive lesson tracker with immutable list updates. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 18",
    "example": "const [lessons, setLessons] = useState([\n  { id: 1, title: \"JSX\", complete: false },\n  { id: 2, title: \"Props\", complete: false }\n]);\n\nfunction toggle(id) {\n  setLessons((prev) =>\n    prev.map((l) =>\n      l.id === id ? { ...l, complete: !l.complete } : l\n    )\n  );\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build an interactive lesson tracker with immutable list updates. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 19,
    "title": "IMMUTABILITY",
    "description": "Rewrite mutable trackers using map, filter, and spread.",
    "mission": "Rewrite mutable trackers using map, filter, and spread.",
    "definitions": [
      "IMMUTABILITY is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "IMMUTABILITY advances the React track inside VEXDYN Learn. Rewrite mutable trackers using map, filter, and spread. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 19",
    "example": "// Bad: lessons[0].complete = true;\n// Good:\nsetLessons(\n  lessons.map((lesson) =>\n    lesson.id === 1 ? { ...lesson, complete: true } : lesson\n  )\n);",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Rewrite mutable trackers using map, filter, and spread. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 20,
    "title": "DERIVED STATE",
    "description": "Compute counts, percentages, and status from source data.",
    "mission": "Compute counts, percentages, and status from source data.",
    "definitions": [
      "DERIVED STATE is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "DERIVED STATE advances the React track inside VEXDYN Learn. Compute counts, percentages, and status from source data. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 20",
    "example": "const completedCount = lessons.filter((l) => l.complete).length;\nconst progress =\n  lessons.length === 0\n    ? 0\n    : Math.round((completedCount / lessons.length) * 100);\nconst status =\n  progress >= 100 ? \"COMPLETE\" : progress > 0 ? \"IN PROGRESS\" : \"NOT STARTED\";",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Compute counts, percentages, and status from source data. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 21,
    "title": "STATE ARCHITECTURE LAB",
    "description": "Lift and place state correctly across a course dashboard.",
    "mission": "Lift and place state correctly across a course dashboard.",
    "definitions": [
      "STATE ARCHITECTURE LAB is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "STATE ARCHITECTURE LAB advances the React track inside VEXDYN Learn. Lift and place state correctly across a course dashboard. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 21",
    "example": "// Lift search state to App so SearchBar and CourseGrid share one source.\n// Local UI-only state (e.g. open menus) can stay in child components.",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Lift and place state correctly across a course dashboard. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 22,
    "title": "useEffect",
    "description": "Sync document title and timers with the right dependencies.",
    "mission": "Sync document title and timers with the right dependencies.",
    "definitions": [
      "useEffect is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "useEffect advances the React track inside VEXDYN Learn. Sync document title and timers with the right dependencies. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 22",
    "example": "useEffect(() => {\n  document.title = \"VEXDYN Learn\";\n}, []);\n\nuseEffect(() => {\n  document.title = `${course.title} \u2014 VEXDYN Learn`;\n}, [course.title]);",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Sync document title and timers with the right dependencies. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 23,
    "title": "EFFECTS & LOCAL STORAGE",
    "description": "Persist multi-course progress across refresh.",
    "mission": "Persist multi-course progress across refresh.",
    "definitions": [
      "EFFECTS & LOCAL STORAGE is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "EFFECTS & LOCAL STORAGE advances the React track inside VEXDYN Learn. Persist multi-course progress across refresh. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 23",
    "example": "useEffect(() => {\n  localStorage.setItem(\"vexdynProgress\", JSON.stringify(progress));\n}, [progress]);\n\nconst [progress, setProgress] = useState(() => {\n  try {\n    return JSON.parse(localStorage.getItem(\"vexdynProgress\")) || {};\n  } catch {\n    return {};\n  }\n});",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Persist multi-course progress across refresh. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 24,
    "title": "LOADING & ERROR STATES",
    "description": "Handle IDLE, LOADING, SUCCESS, EMPTY, and ERROR UI.",
    "mission": "Handle IDLE, LOADING, SUCCESS, EMPTY, and ERROR UI.",
    "definitions": [
      "LOADING & ERROR STATES is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "LOADING & ERROR STATES advances the React track inside VEXDYN Learn. Handle IDLE, LOADING, SUCCESS, EMPTY, and ERROR UI. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 24",
    "example": "if (loading) return <Loading />;\nif (error) return <ErrorState onRetry={retry} />;\nif (courses.length === 0) return <EmptyState />;\nreturn <CourseGrid courses={courses} />;",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Handle IDLE, LOADING, SUCCESS, EMPTY, and ERROR UI. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 25,
    "title": "FETCHING DATA",
    "description": "Load courses with fetch, async/await, and error handling.",
    "mission": "Load courses with fetch, async/await, and error handling.",
    "definitions": [
      "FETCHING DATA is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "FETCHING DATA advances the React track inside VEXDYN Learn. Load courses with fetch, async/await, and error handling. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 25",
    "example": "async function loadCourses() {\n  const response = await fetch(\"/api/courses\");\n  if (!response.ok) throw new Error(\"Unable to load courses\");\n  return response.json();\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Load courses with fetch, async/await, and error handling. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 26,
    "title": "API-POWERED COMPONENTS",
    "description": "Separate services from presentation components.",
    "mission": "Separate services from presentation components.",
    "definitions": [
      "API-POWERED COMPONENTS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "API-POWERED COMPONENTS advances the React track inside VEXDYN Learn. Separate services from presentation components. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 26",
    "example": "// services/courseService.js \u2192 fetch + transform\n// components/CourseCard.jsx \u2192 present data\n// pages/Courses.jsx \u2192 orchestrate loading and UI states",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Separate services from presentation components. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 27,
    "title": "SEARCH, FILTER & SORT",
    "description": "Build full course discovery with multi-filter and empty states.",
    "mission": "Build full course discovery with multi-filter and empty states.",
    "definitions": [
      "SEARCH, FILTER & SORT is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "SEARCH, FILTER & SORT advances the React track inside VEXDYN Learn. Build full course discovery with multi-filter and empty states. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 27",
    "example": "const filtered = courses\n  .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))\n  .filter((c) => selectedLevel === \"ALL\" || c.level === selectedLevel);\nconst sorted = [...filtered].sort((a, b) => a.title.localeCompare(b.title));",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build full course discovery with multi-filter and empty states. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 28,
    "title": "REACT APPLICATION LAB",
    "description": "Ship a serious VEXDYN Course Explorer mini-app.",
    "mission": "Ship a serious VEXDYN Course Explorer mini-app.",
    "definitions": [
      "REACT APPLICATION LAB is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "REACT APPLICATION LAB advances the React track inside VEXDYN Learn. Ship a serious VEXDYN Course Explorer mini-app. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 28",
    "example": "// Build: Header, SearchBar, FilterBar, CourseGrid/CourseCard, EmptyState, Footer\n// Demonstrate components, state, effects, storage, search, filter, sort.",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Ship a serious VEXDYN Course Explorer mini-app. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 29,
    "title": "useContext \u2014 SHARED APPLICATION STATE",
    "description": "Build theme and preferences context without prop drilling.",
    "mission": "Build theme and preferences context without prop drilling.",
    "definitions": [
      "useContext is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "useContext \u2014 SHARED APPLICATION STATE advances the React track inside VEXDYN Learn. Build theme and preferences context without prop drilling. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 29",
    "example": "const ThemeContext = createContext(\"obsidian\");\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState(\"obsidian\");\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nfunction useTheme() {\n  return useContext(ThemeContext);\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build theme and preferences context without prop drilling. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 30,
    "title": "CUSTOM HOOKS \u2014 BUILD REUSABLE LOGIC",
    "description": "Create useLocalStorage and useCourseProgress hooks.",
    "mission": "Create useLocalStorage and useCourseProgress hooks.",
    "definitions": [
      "CUSTOM HOOKS is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "CUSTOM HOOKS \u2014 BUILD REUSABLE LOGIC advances the React track inside VEXDYN Learn. Create useLocalStorage and useCourseProgress hooks. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 30",
    "example": "function useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const saved = localStorage.getItem(key);\n    return saved ? JSON.parse(saved) : initialValue;\n  });\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  return [value, setValue];\n}",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Create useLocalStorage and useCourseProgress hooks. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 31,
    "title": "PERFORMANCE & RENDERING",
    "description": "Apply React.memo, useMemo, and useCallback with judgment.",
    "mission": "Apply React.memo, useMemo, and useCallback with judgment.",
    "definitions": [
      "PERFORMANCE & RENDERING is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "PERFORMANCE & RENDERING advances the React track inside VEXDYN Learn. Apply React.memo, useMemo, and useCallback with judgment. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 31",
    "example": "const CourseCard = React.memo(function CourseCard({ title }) {\n  return <article>{title}</article>;\n});\n\nconst filtered = useMemo(\n  () => courses.filter((c) => c.title.toLowerCase().includes(query.toLowerCase())),\n  [courses, query]\n);\n\nconst handleSelect = useCallback((id) => setSelectedId(id), []);",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Apply React.memo, useMemo, and useCallback with judgment. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 32,
    "title": "REACT ROUTING & APPLICATION NAVIGATION",
    "description": "Design learn routes, lesson params, and not-found views.",
    "mission": "Design learn routes, lesson params, and not-found views.",
    "definitions": [
      "REACT ROUTING & APPLICATION NAVIGATION is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "REACT ROUTING & APPLICATION NAVIGATION advances the React track inside VEXDYN Learn. Design learn routes, lesson params, and not-found views. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 32",
    "example": "// Conceptual routes:\n// /learn\n// /learn/react\n// /learn/react/lesson/15\n// <Route path=\"/learn/:course/lesson/:lessonId\" element={<LessonPage />} />",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Design learn routes, lesson params, and not-found views. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 33,
    "title": "PRODUCTION-READY REACT THINKING",
    "description": "Architect folders, a11y, security, and maintainability.",
    "mission": "Architect folders, a11y, security, and maintainability.",
    "definitions": [
      "PRODUCTION-READY REACT THINKING is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "PRODUCTION-READY REACT THINKING advances the React track inside VEXDYN Learn. Architect folders, a11y, security, and maintainability. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 33",
    "example": "// src/components  pages  hooks  services  data  utils  context  app\n// Ask: where should state live? Is an effect justified? What fails on mobile?",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Architect folders, a11y, security, and maintainability. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 34,
    "title": "VEXDYN APPLICATION LAB \u2014 BUILD THE LEARN DASHBOARD",
    "description": "Build a full VEXDYN Learn dashboard in React.",
    "mission": "Build a full VEXDYN Learn dashboard in React.",
    "definitions": [
      "VEXDYN APPLICATION LAB is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "VEXDYN APPLICATION LAB \u2014 BUILD THE LEARN DASHBOARD advances the React track inside VEXDYN Learn. Build a full VEXDYN Learn dashboard in React. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 34",
    "example": "// Dashboard: Welcome, ProgressOverview, ContinueLearning, CourseGrid/CourseCard\n// CoursePage: CourseHeader, ProgressSummary, LessonList/LessonCard\n// Persist progress; support LOADING / EMPTY / ERROR.",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Build a full VEXDYN Learn dashboard in React. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 35,
    "title": "ADVANCED REACT PROJECT \u2014 BUILD YOUR OWN SYSTEM",
    "description": "Ship a portfolio-grade React application of your choice.",
    "mission": "Ship a portfolio-grade React application of your choice.",
    "definitions": [
      "ADVANCED REACT PROJECT is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "ADVANCED REACT PROJECT \u2014 BUILD YOUR OWN SYSTEM advances the React track inside VEXDYN Learn. Ship a portfolio-grade React application of your choice. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 35",
    "example": "// Choose a real product idea. Define requirements, architecture, UI system,\n// logic, data, quality checks. Ship something portfolio-worthy.",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Ship a portfolio-grade React application of your choice. Implement it in a separate React sandbox, then explain your component boundaries out loud."
  },
  {
    "id": 36,
    "title": "REACT FINAL MISSION \u2014 BUILD THE FUTURE",
    "description": "Graduate by building a complete system with engineering reflection.",
    "mission": "Graduate by building a complete system with engineering reflection.",
    "definitions": [
      "REACT FINAL MISSION is a core React skill for building component-driven interfaces.",
      "React teaches you to describe UI as a function of state and props, then let the library update the DOM efficiently."
    ],
    "explanation": "REACT FINAL MISSION \u2014 BUILD THE FUTURE advances the React track inside VEXDYN Learn. Graduate by building a complete system with engineering reflection. React is a JavaScript library for building user interfaces from components \u2014 reusable pieces of UI that describe what the screen should look like for a given state. Study the example, rebuild it in your own React environment (for example Vite + React in a separate project), then connect the idea to VEXDYN-style product UI. Prefer clear data flow, small components, and derived values over unnecessary state.",
    "exampleTitle": "REACT / Lesson 36",
    "example": "// Final mission: idea \u2192 architecture \u2192 components \u2192 state \u2192 data \u2192 UX \u2192 a11y\n// Demonstrate judgment, not every React API at once.\n// Reflect: what did you build, why, and what ships in v2?",
    "breakdown": "\u2022 Identify components, props, and state\\n\u2022 Trace data from parent to child\\n\u2022 Note what is stored vs derived\\n\u2022 Rebuild the example with your own names\\n\u2022 Connect the pattern to a VEXDYN-style screen",
    "application": "VEXDYN Learn itself is built with HTML, CSS, and vanilla JavaScript, but this course teaches React so you can build component systems, dashboards, and product UIs in the wider ecosystem \u2014 including future React-powered tools.",
    "challenge": "Graduate by building a complete system with engineering reflection. Implement it in a separate React sandbox, then explain your component boundaries out loud."
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = Math.round(to) + "%";
      return;
    }
    const delta = Math.abs(to - from);
    const duration = delta <= 10 ? 900 : delta <= 50 ? 1200 : 1500;
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
    ["htmlCourseView","htmlLessonView","cssCourseView","cssLessonView","jsCourseView","jsLessonView"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.hidden = true;
    });
    const reactCourse = document.getElementById("reactCourseView");
    const reactLesson = document.getElementById("reactLessonView");
    if (catalog) catalog.hidden = name !== "catalog";
    if (reactCourse) reactCourse.hidden = name !== "course";
    if (reactLesson) reactLesson.hidden = name !== "lesson";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCourseList() {
    const list = document.getElementById("reactLessonList");
    const pctEl = document.getElementById("reactCoursePct");
    const barEl = document.getElementById("reactCourseBar");
    const statusEl = document.getElementById("reactCourseStatus");
    const completeBanner = document.getElementById("reactCompleteBanner");
    if (!list) return;

    const { completed } = loadProgress();
    const pct = getPercent(completed);

    if (pctEl) {
      const prev = parseInt(pctEl.textContent, 10) || 0;
      animatePercent(pctEl, prev, pct);
    }
    if (barEl) {
      barEl.style.width = pct + "%";
      barEl.style.background = ACCENT;
    }
    if (statusEl) {
      statusEl.textContent =
        pct === 0 ? "NOT STARTED" : pct >= 100 ? "REACT SYSTEM INITIALIZED" : "IN PROGRESS";
    }
    if (completeBanner) completeBanner.hidden = pct < 100;

    list.innerHTML = LESSONS.map((lesson) => {
      const done = isComplete(lesson.id, completed);
      const badge = done
        ? '<span class="lesson-badge lesson-badge-done"><span class="lesson-badge-icon" aria-hidden="true">✓</span> COMPLETE</span>'
        : '<span class="lesson-badge lesson-badge-open">OPEN</span>';
      return (
        '<button type="button" class="lesson-item ' + (done ? "is-complete" : "") +
        '" data-react-open-lesson="' + lesson.id +
        '" aria-label="Lesson ' + lesson.id + ": " + escapeHtml(lesson.title) + '">' +
        '<span class="lesson-item-top">' +
        '<span class="lesson-item-num" style="color:' + ACCENT + '">' + String(lesson.id).padStart(2, "0") + "</span>" +
        badge +
        "</span>" +
        '<span class="lesson-item-title">' + escapeHtml(lesson.title) + "</span>" +
        '<span class="lesson-item-mission">' + escapeHtml(lesson.description) + "</span>" +
        "</button>"
      );
    }).join("");
  }

  function openReactCourse() {
    try {
      renderCourseList();
      showView("course");
    } catch (err) {
      console.error("VEXDYN React course open failed:", err);
    }
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

    set("reactLessonNum", "LESSON " + String(lesson.id).padStart(2, "0"));
    set("reactLessonTitle", lesson.title);
    set("reactLessonMission", lesson.mission);

    const defsEl = document.getElementById("reactLessonDefs");
    if (defsEl) {
      defsEl.innerHTML = lesson.definitions
        .map((d, i) => '<div class="lesson-def"><span class="lesson-def-label" style="color:' + ACCENT + '">Definition ' + (i + 1) + "</span><p>" + escapeHtml(d) + "</p></div>")
        .join("");
    }

    set("reactLessonExplanation", lesson.explanation);
    set("reactLessonExample", lesson.example);
    set("reactLessonBreakdown", lesson.breakdown);
    set("reactLessonApplication", lesson.application);
    set("reactLessonChallenge", lesson.challenge);

    const completeBtn = document.getElementById("reactLessonCompleteBtn");
    const nextBtn = document.getElementById("reactLessonNextBtn");
    const prevBtn = document.getElementById("reactLessonPrevBtn");

    if (completeBtn) {
      completeBtn.disabled = done;
      completeBtn.textContent = done ? "✓ LESSON COMPLETE" : "MARK LESSON COMPLETE";
      completeBtn.dataset.lessonId = String(lesson.id);
    }
    if (prevBtn) {
      prevBtn.disabled = lesson.id <= 1;
      prevBtn.dataset.reactGoto = String(lesson.id - 1);
    }
    if (nextBtn) {
      nextBtn.disabled = lesson.id >= TOTAL;
      nextBtn.dataset.reactGoto = String(lesson.id + 1);
    }

    const lessonView = document.getElementById("reactLessonView");
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
      const course = window.VEXDYN_LEARN.COURSES.find((c) => c.id === "react");
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

    const card = document.querySelector('[data-course-id="react"]');
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
    const exampleEl = document.getElementById("reactLessonExample");
    const btn = document.getElementById("reactCopyBtn");
    if (!exampleEl || !btn) return;
    const text = exampleEl.textContent || "";
    const done = () => {
      btn.textContent = "✓ COPIED";
      setTimeout(() => { btn.textContent = "COPY"; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
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

  function initReactCourse() {
    if (!document.getElementById("reactCourseView")) {
      console.warn("VEXDYN: reactCourseView not found");
      return;
    }

    syncCatalogProgress();

    document.addEventListener("click", (e) => {
      const cta = e.target.closest("[data-course-cta]");
      const id = cta ? cta.getAttribute("data-id") : null;
      if (cta && id === "react") {
        e.preventDefault();
        e.stopPropagation();
        openReactCourse();
        return;
      }

      if (e.target.closest("[data-react-back-catalog]")) {
        e.preventDefault();
        syncCatalogProgress();
        showView("catalog");
        return;
      }

      if (e.target.closest("[data-react-back-course]")) {
        e.preventDefault();
        renderCourseList();
        showView("course");
        return;
      }

      const openLessonBtn = e.target.closest("[data-react-open-lesson]");
      if (openLessonBtn) {
        e.preventDefault();
        openLesson(parseInt(openLessonBtn.getAttribute("data-react-open-lesson"), 10));
        return;
      }

      const completeBtn = e.target.closest("#reactLessonCompleteBtn");
      if (completeBtn && !completeBtn.disabled) {
        e.preventDefault();
        markComplete(parseInt(completeBtn.dataset.lessonId, 10));
        return;
      }

      const navBtn = e.target.closest("[data-react-goto]");
      if (navBtn && !navBtn.disabled) {
        e.preventDefault();
        openLesson(parseInt(navBtn.getAttribute("data-react-goto"), 10));
        return;
      }

      if (e.target.closest("#reactCopyBtn")) {
        e.preventDefault();
        copyCode();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initReactCourse);
  document.addEventListener("vexdyn-open-react-course", function () {
    openReactCourse();
  });

  window.VEXDYN_REACT_COURSE = { LESSONS, loadProgress, getPercent, renderCourseList, openReactCourse };
})();
