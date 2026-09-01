/* ============================================
   VEXDYN Learn — JavaScript Course (32 Lessons)
   Progress: localStorage key vexdyn-learn-js
   Accent: JavaScript yellow/gold #f7df1e
   All lessons unlocked (no VEXDYN+ yet)
   ============================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "vexdyn-learn-js";
  const TOTAL = 32;
  const ACCENT = "#f7df1e";

  const LESSONS = [
  {
    "id": 1,
    "title": "ENTER THE LOGIC ENGINE",
    "description": "What JavaScript is, where it runs, and how it connects to HTML.",
    "mission": "Make a webpage respond to its first JavaScript command.",
    "definitions": [
      "ENTER THE LOGIC ENGINE is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ENTER THE LOGIC ENGINE builds the next layer of interactive skill after HTML structure and CSS design. What JavaScript is, where it runs, and how it connects to HTML. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 01",
    "example": "// Connect in HTML: <script src=\"app.js\"></script>\nconsole.log(\"VEXDYN system online\");\n\nconst msg = document.getElementById(\"systemMsg\");\nif (msg) {\n  msg.textContent = \"Logic engine ready.\";\n}",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Make a webpage respond to its first JavaScript command. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 2,
    "title": "VARIABLES \u2014 STORE THE DATA",
    "description": "let, const, var, naming, and when to reassign.",
    "mission": "Create a digital learner profile system.",
    "definitions": [
      "VARIABLES is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "VARIABLES \u2014 STORE THE DATA builds the next layer of interactive skill after HTML structure and CSS design. let, const, var, naming, and when to reassign. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 02",
    "example": "const username = \"Nova\";\nconst course = \"JavaScript\";\nlet progress = 0;\nlet completedLessons = 0;\n\nprogress = 12.5;\ncompletedLessons = 4;\nconsole.log(username, course, progress + \"%\");",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a digital learner profile system. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 3,
    "title": "DATA TYPES \u2014 UNDERSTANDING INFORMATION",
    "description": "String, Number, Boolean, Undefined, Null, Array, Object, typeof.",
    "mission": "Create a structured learner data model.",
    "definitions": [
      "DATA TYPES is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "DATA TYPES \u2014 UNDERSTANDING INFORMATION builds the next layer of interactive skill after HTML structure and CSS design. String, Number, Boolean, Undefined, Null, Array, Object, typeof. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 03",
    "example": "const learner = {\n  name: \"Nova\",\n  course: \"JavaScript\",\n  progress: 0,\n  premium: false,\n  completed: []\n};\nconsole.log(typeof learner.name); // \"string\"\nconsole.log(typeof learner.progress); // \"number\"\nconsole.log(typeof learner.premium); // \"boolean\"",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a structured learner data model. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 4,
    "title": "OPERATORS \u2014 THE CALCULATION ENGINE",
    "description": "Arithmetic, assignment, comparison, logical operators.",
    "mission": "Build a course progress calculator.",
    "definitions": [
      "OPERATORS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "OPERATORS \u2014 THE CALCULATION ENGINE builds the next layer of interactive skill after HTML structure and CSS design. Arithmetic, assignment, comparison, logical operators. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 04",
    "example": "const completed = 8;\nconst total = 32;\nconst percent = Math.round((completed / total) * 100);\nconsole.log(percent + \"%\"); // 25%\n\nlet score = 10;\nscore += 5;\nscore++;\nconsole.log(score); // 16",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build a course progress calculator. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 5,
    "title": "DECISION ENGINE \u2014 IF / ELSE",
    "description": "if, else, else if, nested conditions.",
    "mission": "Create a course access decision system.",
    "definitions": [
      "DECISION ENGINE is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "DECISION ENGINE \u2014 IF / ELSE builds the next layer of interactive skill after HTML structure and CSS design. if, else, else if, nested conditions. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 05",
    "example": "function accessStatus(progress) {\n  if (progress >= 100) return \"complete\";\n  if (progress > 0) return \"continue\";\n  return \"start\";\n}\nconsole.log(accessStatus(0));   // start\nconsole.log(accessStatus(40));  // continue\nconsole.log(accessStatus(100)); // complete",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a course access decision system. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 6,
    "title": "SMART CONDITIONS \u2014 LOGICAL OPERATORS",
    "description": "&&, ||, !, truthy and falsy values.",
    "mission": "Build a multi-condition course access system.",
    "definitions": [
      "SMART CONDITIONS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "SMART CONDITIONS \u2014 LOGICAL OPERATORS builds the next layer of interactive skill after HTML structure and CSS design. &&, ||, !, truthy and falsy values. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 06",
    "example": "const active = true;\nconst prevDone = true;\nconst hasAccess = true;\n\nif (active && prevDone && hasAccess) {\n  console.log(\"Unlock next lesson\");\n} else if (!active || !hasAccess) {\n  console.log(\"Access restricted\");\n} else {\n  console.log(\"Finish previous lesson first\");\n}",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build a multi-condition course access system. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 7,
    "title": "SWITCH SYSTEM",
    "description": "switch, case, break, default.",
    "mission": "Create a course-selection engine.",
    "definitions": [
      "SWITCH SYSTEM is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "SWITCH SYSTEM builds the next layer of interactive skill after HTML structure and CSS design. switch, case, break, default. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 07",
    "example": "function courseMeaning(id) {\n  switch (id) {\n    case \"html\": return \"Structure\";\n    case \"css\": return \"Design\";\n    case \"javascript\": return \"Interaction\";\n    case \"react\": return \"Application\";\n    default: return \"Unknown track\";\n  }\n}\nconsole.log(courseMeaning(\"javascript\"));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a course-selection engine. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 8,
    "title": "FUNCTIONS \u2014 BUILD REUSABLE LOGIC",
    "description": "Declarations, parameters, return values, calling functions.",
    "mission": "Create reusable VEXDYN utility functions.",
    "definitions": [
      "FUNCTIONS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "FUNCTIONS \u2014 BUILD REUSABLE LOGIC builds the next layer of interactive skill after HTML structure and CSS design. Declarations, parameters, return values, calling functions. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 08",
    "example": "function calculateProgress(done, total) {\n  return Math.round((done / total) * 100);\n}\nfunction remainingLessons(done, total) {\n  return total - done;\n}\nfunction courseStatus(pct) {\n  if (pct >= 100) return \"COMPLETED\";\n  if (pct > 0) return \"IN PROGRESS\";\n  return \"NOT STARTED\";\n}\nconsole.log(calculateProgress(8, 32), remainingLessons(8, 32), courseStatus(25));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create reusable VEXDYN utility functions. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 9,
    "title": "ARROW FUNCTIONS",
    "description": "Arrow syntax, implicit return, when to use arrows.",
    "mission": "Convert traditional functions into modern JavaScript.",
    "definitions": [
      "ARROW FUNCTIONS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ARROW FUNCTIONS builds the next layer of interactive skill after HTML structure and CSS design. Arrow syntax, implicit return, when to use arrows. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 09",
    "example": "const calculateProgress = (done, total) =>\n  Math.round((done / total) * 100);\n\nconst double = n => n * 2;\nconst greet = name => `Welcome, ${name}`;\n\nconsole.log(calculateProgress(16, 32));\nconsole.log(greet(\"Nova\"));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Convert traditional functions into modern JavaScript. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 10,
    "title": "SCOPE & EXECUTION",
    "description": "Global, function, and block scope with let/const/var.",
    "mission": "Understand and control where application data exists.",
    "definitions": [
      "SCOPE & EXECUTION is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "SCOPE & EXECUTION builds the next layer of interactive skill after HTML structure and CSS design. Global, function, and block scope with let/const/var. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 10",
    "example": "const appName = \"VEXDYN\"; // global-ish module scope\n\nfunction track() {\n  const local = \"lesson\";\n  if (true) {\n    let block = \"scoped\";\n    console.log(block);\n  }\n  // console.log(block); // ReferenceError\n  console.log(local, appName);\n}\ntrack();",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Understand and control where application data exists. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 11,
    "title": "ARRAYS \u2014 DATA COLLECTIONS",
    "description": "Creating arrays, indexes, length, reading and updating.",
    "mission": "Create a course lesson database.",
    "definitions": [
      "ARRAYS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ARRAYS \u2014 DATA COLLECTIONS builds the next layer of interactive skill after HTML structure and CSS design. Creating arrays, indexes, length, reading and updating. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 11",
    "example": "const lessons = [\n  \"ENTER THE LOGIC ENGINE\",\n  \"VARIABLES \u2014 STORE THE DATA\",\n  \"DATA TYPES\"\n];\nconsole.log(lessons[0]);\nconsole.log(lessons.length);\nlessons[2] = \"DATA TYPES \u2014 UNDERSTANDING INFORMATION\";",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a course lesson database. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 12,
    "title": "ARRAY CONTROL",
    "description": "push, pop, shift, unshift, slice, splice.",
    "mission": "Build a dynamic lesson management system.",
    "definitions": [
      "ARRAY CONTROL is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ARRAY CONTROL builds the next layer of interactive skill after HTML structure and CSS design. push, pop, shift, unshift, slice, splice. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 12",
    "example": "const queue = [\"Lesson 1\", \"Lesson 2\"];\nqueue.push(\"Lesson 3\");\nconst last = queue.pop();\nqueue.unshift(\"Intro\");\nconst intro = queue.shift();\nconst mid = queue.slice(0, 1);\nconsole.log(queue, last, intro, mid);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build a dynamic lesson management system. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 13,
    "title": "ARRAY POWER",
    "description": "forEach, map, filter, find, includes.",
    "mission": "List, filter, find, and transform lesson data.",
    "definitions": [
      "ARRAY POWER is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ARRAY POWER builds the next layer of interactive skill after HTML structure and CSS design. forEach, map, filter, find, includes. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 13",
    "example": "const lessons = [\n  { id: 1, title: \"Variables\", done: true },\n  { id: 2, title: \"Functions\", done: false },\n  { id: 3, title: \"Arrays\", done: false }\n];\nconst open = lessons.filter(l => !l.done);\nconst titles = lessons.map(l => l.title);\nconst found = lessons.find(l => l.id === 2);\nconsole.log(open, titles, found);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "List, filter, find, and transform lesson data. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 14,
    "title": "OBJECTS \u2014 MODEL REAL SYSTEMS",
    "description": "Properties, methods, access, update, this.",
    "mission": "Create a realistic learner object.",
    "definitions": [
      "OBJECTS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "OBJECTS \u2014 MODEL REAL SYSTEMS builds the next layer of interactive skill after HTML structure and CSS design. Properties, methods, access, update, this. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 14",
    "example": "const learner = {\n  name: \"Nova\",\n  course: \"JavaScript\",\n  progress: 25,\n  markComplete(id) {\n    this.progress = Math.min(100, this.progress + 3);\n    console.log(\"Completed\", id, this.progress + \"%\");\n  }\n};\nlearner.markComplete(8);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a realistic learner object. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 15,
    "title": "ARRAYS + OBJECTS",
    "description": "Arrays of objects, nested data, find and filter.",
    "mission": "Create a complete course database.",
    "definitions": [
      "ARRAYS + OBJECTS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ARRAYS + OBJECTS builds the next layer of interactive skill after HTML structure and CSS design. Arrays of objects, nested data, find and filter. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 15",
    "example": "const courses = [\n  { id: \"html\", lessons: 20, progress: 100 },\n  { id: \"css\", lessons: 24, progress: 50 },\n  { id: \"javascript\", lessons: 32, progress: 0 }\n];\nconst js = courses.find(c => c.id === \"javascript\");\nconst active = courses.filter(c => c.progress > 0);\nconsole.log(js, active);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a complete course database. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 16,
    "title": "LOOPS \u2014 AUTOMATION ENGINE",
    "description": "for, while, do...while, for...of.",
    "mission": "Generate course information without repeating code.",
    "definitions": [
      "LOOPS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "LOOPS \u2014 AUTOMATION ENGINE builds the next layer of interactive skill after HTML structure and CSS design. for, while, do...while, for...of. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 16",
    "example": "const lessons = [\"Vars\", \"Types\", \"Functions\"];\nfor (let i = 0; i < lessons.length; i++) {\n  console.log(i + 1, lessons[i]);\n}\nfor (const title of lessons) {\n  console.log(\"\u2022\", title);\n}",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Generate course information without repeating code. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 17,
    "title": "ENTER THE DOM",
    "description": "document, getElementById, querySelector, querySelectorAll.",
    "mission": "Control an existing webpage using JavaScript.",
    "definitions": [
      "ENTER THE DOM is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ENTER THE DOM builds the next layer of interactive skill after HTML structure and CSS design. document, getElementById, querySelector, querySelectorAll. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 17",
    "example": "const title = document.getElementById(\"heroTitle\");\nconst cards = document.querySelectorAll(\".course-card\");\nconst cta = document.querySelector(\"[data-course-cta]\");\nconsole.log(title, cards.length, cta);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Control an existing webpage using JavaScript. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 18,
    "title": "CHANGE THE INTERFACE",
    "description": "textContent, innerHTML, classList, setAttribute.",
    "mission": "Create a dynamic VEXDYN dashboard.",
    "definitions": [
      "CHANGE THE INTERFACE is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "CHANGE THE INTERFACE builds the next layer of interactive skill after HTML structure and CSS design. textContent, innerHTML, classList, setAttribute. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 18",
    "example": "const status = document.getElementById(\"status\");\nconst panel = document.querySelector(\".dashboard\");\nif (status) status.textContent = \"System online\";\nif (panel) {\n  panel.classList.add(\"is-active\");\n  panel.setAttribute(\"data-state\", \"ready\");\n}",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a dynamic VEXDYN dashboard. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 19,
    "title": "EVENTS",
    "description": "click, input, submit, change, keydown, addEventListener.",
    "mission": "Create interactive controls.",
    "definitions": [
      "EVENTS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "EVENTS builds the next layer of interactive skill after HTML structure and CSS design. click, input, submit, change, keydown, addEventListener. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 19",
    "example": "const btn = document.getElementById(\"startBtn\");\nbtn?.addEventListener(\"click\", () => {\n  console.log(\"Course started\");\n});\ndocument.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") console.log(\"Enter pressed\");\n});",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create interactive controls. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 20,
    "title": "FORMS & USER INPUT",
    "description": "Form values, preventDefault, validation, error messages.",
    "mission": "Build a VEXDYN learner registration interface.",
    "definitions": [
      "FORMS & USER INPUT is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "FORMS & USER INPUT builds the next layer of interactive skill after HTML structure and CSS design. Form values, preventDefault, validation, error messages. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 20",
    "example": "const form = document.getElementById(\"registerForm\");\nform?.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const email = form.email.value.trim();\n  if (!email.includes(\"@\")) {\n    alert(\"Enter a valid email\");\n    return;\n  }\n  console.log(\"Registered\", email);\n});",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build a VEXDYN learner registration interface. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 21,
    "title": "DYNAMIC UI SYSTEMS",
    "description": "createElement, append, remove, data-driven UI.",
    "mission": "Generate course cards dynamically from lesson data.",
    "definitions": [
      "DYNAMIC UI SYSTEMS is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "DYNAMIC UI SYSTEMS builds the next layer of interactive skill after HTML structure and CSS design. createElement, append, remove, data-driven UI. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 21",
    "example": "const lessons = [\n  { id: 1, title: \"Variables\" },\n  { id: 2, title: \"Functions\" }\n];\nconst list = document.getElementById(\"lessonList\");\nlessons.forEach((l) => {\n  const btn = document.createElement(\"button\");\n  btn.textContent = l.title;\n  btn.dataset.id = l.id;\n  list.appendChild(btn);\n});",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Generate course cards dynamically from lesson data. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 22,
    "title": "BUILD AN INTERACTIVE COURSE TRACKER",
    "description": "Combine arrays, objects, DOM, events, and progress.",
    "mission": "Build a functional mini learning tracker.",
    "definitions": [
      "BUILD AN INTERACTIVE COURSE TRACKER is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "BUILD AN INTERACTIVE COURSE TRACKER builds the next layer of interactive skill after HTML structure and CSS design. Combine arrays, objects, DOM, events, and progress. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 22",
    "example": "const state = { completed: [] };\nfunction toggleLesson(id) {\n  if (state.completed.includes(id)) return;\n  state.completed.push(id);\n  const pct = Math.round((state.completed.length / 32) * 100);\n  document.getElementById(\"pct\").textContent = pct + \"%\";\n}",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build a functional mini learning tracker. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 23,
    "title": "LOCAL STORAGE",
    "description": "setItem, getItem, removeItem, persistent browser data.",
    "mission": "Save learning progress so it survives page refreshes.",
    "definitions": [
      "LOCAL STORAGE is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "LOCAL STORAGE builds the next layer of interactive skill after HTML structure and CSS design. setItem, getItem, removeItem, persistent browser data. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 23",
    "example": "const KEY = \"vexdyn-learn-js\";\nfunction save(completed) {\n  localStorage.setItem(KEY, JSON.stringify({ completed }));\n}\nfunction load() {\n  try {\n    const raw = localStorage.getItem(KEY);\n    return raw ? JSON.parse(raw).completed || [] : [];\n  } catch {\n    return [];\n  }\n}\nsave([1, 2, 3]);\nconsole.log(load());",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Save learning progress so it survives page refreshes. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 24,
    "title": "JSON & DATA STORAGE",
    "description": "JSON.stringify, JSON.parse, object \u2194 string.",
    "mission": "Create a persistent learner profile.",
    "definitions": [
      "JSON & DATA STORAGE is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "JSON & DATA STORAGE builds the next layer of interactive skill after HTML structure and CSS design. JSON.stringify, JSON.parse, object \u2194 string. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 24",
    "example": "const profile = { name: \"Nova\", course: \"JS\", progress: 40 };\nconst raw = JSON.stringify(profile);\nlocalStorage.setItem(\"profile\", raw);\nconst restored = JSON.parse(localStorage.getItem(\"profile\"));\nconsole.log(restored.name, restored.progress);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create a persistent learner profile. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 25,
    "title": "ERROR HANDLING",
    "description": "try, catch, finally, defensive programming.",
    "mission": "Handle invalid data without breaking the interface.",
    "definitions": [
      "ERROR HANDLING is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ERROR HANDLING builds the next layer of interactive skill after HTML structure and CSS design. try, catch, finally, defensive programming. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 25",
    "example": "function safeParse(raw) {\n  try {\n    return JSON.parse(raw);\n  } catch (err) {\n    console.error(\"Invalid JSON\", err.message);\n    return null;\n  }\n}\nconsole.log(safeParse(\"{ bad\"));\nconsole.log(safeParse('{\"ok\":true}'));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Handle invalid data without breaking the interface. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 26,
    "title": "ASYNCHRONOUS JAVASCRIPT",
    "description": "setTimeout, setInterval, callbacks, sync vs async.",
    "mission": "Build a futuristic loading sequence.",
    "definitions": [
      "ASYNCHRONOUS JAVASCRIPT is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ASYNCHRONOUS JAVASCRIPT builds the next layer of interactive skill after HTML structure and CSS design. setTimeout, setInterval, callbacks, sync vs async. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 26",
    "example": "console.log(\"Loading\u2026\");\nsetTimeout(() => {\n  console.log(\"Modules ready\");\n}, 800);\n\nlet n = 0;\nconst id = setInterval(() => {\n  n += 1;\n  console.log(\"tick\", n);\n  if (n >= 3) clearInterval(id);\n}, 300);",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build a futuristic loading sequence. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 27,
    "title": "PROMISES",
    "description": "Promise states, then, catch, resolve, reject.",
    "mission": "Simulate asynchronous course-data loading.",
    "definitions": [
      "PROMISES is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "PROMISES builds the next layer of interactive skill after HTML structure and CSS design. Promise states, then, catch, resolve, reject. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 27",
    "example": "function loadCourse() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      Math.random() > 0.2\n        ? resolve({ id: \"javascript\", lessons: 32 })\n        : reject(new Error(\"Network error\"));\n    }, 500);\n  });\n}\nloadCourse()\n  .then((data) => console.log(\"Loaded\", data))\n  .catch((err) => console.error(err.message));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Simulate asynchronous course-data loading. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 28,
    "title": "ASYNC / AWAIT",
    "description": "async functions, await, try/catch with promises.",
    "mission": "Build an asynchronous course-loading system.",
    "definitions": [
      "ASYNC / AWAIT is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "ASYNC / AWAIT builds the next layer of interactive skill after HTML structure and CSS design. async functions, await, try/catch with promises. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 28",
    "example": "async function loadCourse() {\n  try {\n    const data = await new Promise((resolve) =>\n      setTimeout(() => resolve({ lessons: 32 }), 400)\n    );\n    console.log(\"Ready\", data.lessons);\n  } catch (err) {\n    console.error(err);\n  }\n}\nloadCourse();",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build an asynchronous course-loading system. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 29,
    "title": "FETCH & APIs",
    "description": "fetch, response.json, HTTP basics, API errors.",
    "mission": "Retrieve external data and display it in an interface.",
    "definitions": [
      "FETCH & APIs is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "FETCH & APIs builds the next layer of interactive skill after HTML structure and CSS design. fetch, response.json, HTTP basics, API errors. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 29",
    "example": "async function loadPosts() {\n  try {\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/posts?_limit=3\");\n    if (!res.ok) throw new Error(\"HTTP \" + res.status);\n    const data = await res.json();\n    console.log(data.map((p) => p.title));\n  } catch (err) {\n    console.error(\"Fetch failed\", err.message);\n  }\n}\nloadPosts();",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Retrieve external data and display it in an interface. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 30,
    "title": "MODULES & CODE ARCHITECTURE",
    "description": "export, import, app/course/progress/storage/ui.",
    "mission": "Split a JavaScript application into logical modules.",
    "definitions": [
      "MODULES & CODE ARCHITECTURE is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "MODULES & CODE ARCHITECTURE builds the next layer of interactive skill after HTML structure and CSS design. export, import, app/course/progress/storage/ui. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 30",
    "example": "// progress.js\nexport function calcPercent(done, total) {\n  return Math.round((done / total) * 100);\n}\n\n// app.js\n// import { calcPercent } from \"./progress.js\";\n// console.log(calcPercent(16, 32));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Split a JavaScript application into logical modules. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 31,
    "title": "VEXDYN JAVASCRIPT LAB",
    "description": "Full project combining lessons 1\u201330.",
    "mission": "Build an interactive learning dashboard.",
    "definitions": [
      "VEXDYN JAVASCRIPT LAB is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "VEXDYN JAVASCRIPT LAB builds the next layer of interactive skill after HTML structure and CSS design. Full project combining lessons 1\u201330. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 31",
    "example": "// Dashboard sketch\nconst lessons = Array.from({ length: 32 }, (_, i) => ({\n  id: i + 1,\n  title: \"Lesson \" + (i + 1),\n  done: false\n}));\nfunction render(list) {\n  return list.map((l) =>\n    `<button data-id=\"${l.id}\">${l.title}</button>`\n  ).join(\"\");\n}\nconsole.log(render(lessons).slice(0, 80) + \"\u2026\");",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Build an interactive learning dashboard. Write the code yourself, then verify the result in the console or on a small HTML page."
  },
  {
    "id": 32,
    "title": "JAVASCRIPT FINAL MISSION \u2014 BUILD THE LOGIC",
    "description": "Independent final project proving the full skill set.",
    "mission": "Create your own complete JavaScript-powered application.",
    "definitions": [
      "JAVASCRIPT FINAL MISSION is a core JavaScript skill used when building interactive interfaces.",
      "Practice by writing small, testable snippets before connecting them to the full page."
    ],
    "explanation": "JAVASCRIPT FINAL MISSION \u2014 BUILD THE LOGIC builds the next layer of interactive skill after HTML structure and CSS design. Independent final project proving the full skill set. Read the example, run it in the browser console or a script file, then change values to see how behaviour shifts. JavaScript runs in the browser engine, responds to user actions, and updates the page without a full reload when you use the DOM APIs. Keep examples small, verify with console.log, then connect the same logic to real UI elements.",
    "exampleTitle": "JS / Lesson 32",
    "example": "// Final mission checklist (implement in your own project)\nconst requirements = [\n  \"variables & types\", \"operators & conditions\", \"functions\",\n  \"arrays & objects\", \"DOM & events\", \"forms\",\n  \"localStorage + JSON\", \"async/await or promises\", \"clear architecture\"\n];\nconsole.log(\"Ship a real app that covers:\\n- \" + requirements.join(\"\\n- \"));",
    "breakdown": "\u2022 Read top to bottom \u2014 declarations first, then logic\\n\u2022 Note which values are stored vs computed\\n\u2022 Identify the function or block that produces the result\\n\u2022 Rewrite the example with your own names and data\\n\u2022 Connect the same idea to a button or text node on a page",
    "application": "VEXDYN Learn uses these patterns for course data, progress percentages, lesson lists, and completion state. The same ideas power theme switching, search, and interactive dashboards across the platform.",
    "challenge": "Create your own complete JavaScript-powered application. Write the code yourself, then verify the result in the console or on a small HTML page."
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
    const jsCourse = document.getElementById("jsCourseView");
    const jsLesson = document.getElementById("jsLessonView");
    if (catalog) catalog.hidden = name !== "catalog";
    if (htmlCourse) htmlCourse.hidden = true;
    if (htmlLesson) htmlLesson.hidden = true;
    if (cssCourse) cssCourse.hidden = true;
    if (cssLesson) cssLesson.hidden = true;
    if (jsCourse) jsCourse.hidden = name !== "course";
    if (jsLesson) jsLesson.hidden = name !== "lesson";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCourseList() {
    const list = document.getElementById("jsLessonList");
    const pctEl = document.getElementById("jsCoursePct");
    const barEl = document.getElementById("jsCourseBar");
    const statusEl = document.getElementById("jsCourseStatus");
    const completeBanner = document.getElementById("jsCompleteBanner");
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
        pct === 0 ? "NOT STARTED" : pct >= 100 ? "JAVASCRIPT SYSTEM INITIALIZED" : "IN PROGRESS";
    }
    if (completeBanner) completeBanner.hidden = pct < 100;

    list.innerHTML = LESSONS.map((lesson) => {
      const done = isComplete(lesson.id, completed);
      const badge = done
        ? '<span class="lesson-badge lesson-badge-done"><span class="lesson-badge-icon" aria-hidden="true">✓</span> COMPLETE</span>'
        : '<span class="lesson-badge lesson-badge-open">OPEN</span>';
      return (
        '<button type="button" class="lesson-item ' + (done ? "is-complete" : "") +
        '" data-js-open-lesson="' + lesson.id +
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

  function openJsCourse() {
    try {
      renderCourseList();
      showView("course");
    } catch (err) {
      console.error("VEXDYN JS course open failed:", err);
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

    set("jsLessonNum", "LESSON " + String(lesson.id).padStart(2, "0"));
    set("jsLessonTitle", lesson.title);
    set("jsLessonMission", lesson.mission);

    const defsEl = document.getElementById("jsLessonDefs");
    if (defsEl) {
      defsEl.innerHTML = lesson.definitions
        .map((d, i) => '<div class="lesson-def"><span class="lesson-def-label" style="color:' + ACCENT + '">Definition ' + (i + 1) + "</span><p>" + escapeHtml(d) + "</p></div>")
        .join("");
    }

    set("jsLessonExplanation", lesson.explanation);
    set("jsLessonExample", lesson.example);
    set("jsLessonBreakdown", lesson.breakdown);
    set("jsLessonApplication", lesson.application);
    set("jsLessonChallenge", lesson.challenge);

    const completeBtn = document.getElementById("jsLessonCompleteBtn");
    const nextBtn = document.getElementById("jsLessonNextBtn");
    const prevBtn = document.getElementById("jsLessonPrevBtn");

    if (completeBtn) {
      completeBtn.disabled = done;
      completeBtn.textContent = done ? "✓ LESSON COMPLETE" : "MARK LESSON COMPLETE";
      completeBtn.dataset.lessonId = String(lesson.id);
    }
    if (prevBtn) {
      prevBtn.disabled = lesson.id <= 1;
      prevBtn.dataset.jsGoto = String(lesson.id - 1);
    }
    if (nextBtn) {
      nextBtn.disabled = lesson.id >= TOTAL;
      nextBtn.dataset.jsGoto = String(lesson.id + 1);
    }

    const lessonView = document.getElementById("jsLessonView");
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
      const course = window.VEXDYN_LEARN.COURSES.find((c) => c.id === "javascript");
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

    const card = document.querySelector('[data-course-id="javascript"]');
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
    const exampleEl = document.getElementById("jsLessonExample");
    const btn = document.getElementById("jsCopyBtn");
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

  function initJsCourse() {
    if (!document.getElementById("jsCourseView")) {
      console.warn("VEXDYN: jsCourseView not found");
      return;
    }

    syncCatalogProgress();

    document.addEventListener("click", (e) => {
      const cta = e.target.closest("[data-course-cta]");
      const id = cta ? cta.getAttribute("data-id") : null;
      if (cta && id === "javascript") {
        e.preventDefault();
        e.stopPropagation();
        openJsCourse();
        return;
      }

      if (e.target.closest("[data-js-back-catalog]")) {
        e.preventDefault();
        syncCatalogProgress();
        showView("catalog");
        return;
      }

      if (e.target.closest("[data-js-back-course]")) {
        e.preventDefault();
        renderCourseList();
        showView("course");
        return;
      }

      const openLessonBtn = e.target.closest("[data-js-open-lesson]");
      if (openLessonBtn) {
        e.preventDefault();
        openLesson(parseInt(openLessonBtn.getAttribute("data-js-open-lesson"), 10));
        return;
      }

      const completeBtn = e.target.closest("#jsLessonCompleteBtn");
      if (completeBtn && !completeBtn.disabled) {
        e.preventDefault();
        markComplete(parseInt(completeBtn.dataset.lessonId, 10));
        return;
      }

      const navBtn = e.target.closest("[data-js-goto]");
      if (navBtn && !navBtn.disabled) {
        e.preventDefault();
        openLesson(parseInt(navBtn.getAttribute("data-js-goto"), 10));
        return;
      }

      if (e.target.closest("#jsCopyBtn")) {
        e.preventDefault();
        copyCode();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initJsCourse);
  document.addEventListener("vexdyn-open-js-course", function () {
    openJsCourse();
  });

  window.VEXDYN_JS_COURSE = { LESSONS, loadProgress, getPercent, renderCourseList, openJsCourse };
})();
