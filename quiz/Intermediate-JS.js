// ── Intermediate-JS.js — Udemy Intermediate JavaScript questions ──
// Load via quiz.html?src=Intermediate-JS.js
// Started 2026-10-13 from UdemyQ-I1. Add new intermediate questions here.

const QUIZ = [

  {
    cat: "this & Arrow Functions",
    q: "Which statement about arrow functions is TRUE?\n a. They have a prototype property\n b. They have their own this binding\n c. They can be used as constructors\n d. They don't have an arguments object",
    a: "d. They don't have an arguments object. Arrow functions are stripped-down functions: no own this (they inherit it from the enclosing scope), no arguments object (use ...args), no .prototype property, and no new. They DO have a prototype chain ([[Prototype]] = Function.prototype, which is where .call and .bind come from). Family model: an arrow function has a parent but can't have children.",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nPromise.resolve(1)\n  .then((x) => x + 1)\n  .then((x) => {\n    throw new Error(\"Error\");\n  })\n  .catch(() => 3)\n  .then((x) => x + 1)\n  .then(console.log);",
    a: "4. The chain starts at 1, becomes 2, then the throw rejects the chain. .catch(() => 3) handles the error and returns 3, which puts the chain back on the fulfilled track. The next .then adds 1, so 4 is logged. Promise.resolve(1) is not the error; the throw two steps later is.",
    img: null
  },
  {
    cat: "Event Loop",
    q: "What is the output order?\n\nconsole.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");",
    a: "1, 4, 3, 2. Synchronous code runs first (1, 4), then microtasks (the Promise .then: 3), then macrotasks (setTimeout: 2). A 0 ms setTimeout still waits behind every queued microtask.",
    img: null
  },
  {
    cat: "Event Loop",
    q: "What is the output order?\n\nconsole.log(\"Start\");\nPromise.resolve().then(() => console.log(\"Promise\"));\nsetTimeout(() => console.log(\"Timeout\"), 0);\nconsole.log(\"End\");",
    a: "Start, End, Promise, Timeout. Synchronous first, then microtasks (Promise), then macrotasks (setTimeout). The order the lines are written in doesn't matter; the queue they land in does.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nconst obj = {\n  count: 0,\n  increment() {\n    setTimeout(function () {\n      this.count++;\n      console.log(this.count);\n    }, 100);\n  },\n};\nobj.increment();",
    a: "NaN. setTimeout calls the regular callback as a bare function, so this is window (sloppy mode), not obj. window.count is undefined, and undefined++ gives NaN. obj.count stays 0. Fixes: use an arrow function (inherits this from increment), const self = this, or .bind(this). The arrow function is the modern answer.",
    img: null
  },
  {
    cat: "Closures & Classes",
    q: "What is logged?\n\nfunction createCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter() + counter());",
    a: "3. The inner function closes over count, so the same variable persists between calls. The first call returns 1, the second returns 2, and 1 + 2 = 3.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nconst person = {\n  name: \"John\",\n  greet: function () {\n    console.log(`Hello, ${this.name}`);\n  }\n};\nconst greet = person.greet;\ngreet();",
    a: "Quiz answer: \"Hello, undefined\". const greet = person.greet copies the reference, not the object, so greet() is a bare call with nothing left of the dot: this is the global object. Real-world gotcha: in a BROWSER the output is \"Hello, \" because window.name is a built-in property that defaults to an empty string. In strict mode this is undefined and it throws a TypeError. Fix: person.greet() or person.greet.bind(person).",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nasync function test() {\n  return await Promise.resolve(42);\n}\ntest().then(console.log);",
    a: "42. await unwraps the resolved promise to 42, return re-wraps it (an async function always returns a Promise), and .then reaches in and passes 42 to console.log. The await is redundant here but not wrong.",
    img: null
  },
  {
    cat: "Closures & Classes",
    q: "What is logged?\n\nclass Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a sound`; }\n}\nclass Dog extends Animal {\n  speak() { return `${this.name} barks`; }\n}\nconst dog = new Dog(\"Rex\");\nconsole.log(dog.speak());",
    a: "\"Rex barks\". Dog inherits Animal's constructor (so this.name = \"Rex\"), but its own speak() overrides the parent's. The lookup finds Dog's speak first and never reaches Animal's. Call the parent version with super.speak().",
    img: null
  },
  {
    cat: "Arrays",
    q: "What is logged?\n\nconst arr = [1, 2, 3];\nconst doubled = arr.forEach((num) => num * 2);\nconsole.log(doubled);",
    a: "undefined. forEach always returns undefined; it runs the callback for side effects and throws the results away. Use map to build a new array: arr.map((num) => num * 2) gives [2, 4, 6]. Quick test: if you assign the result to a variable, you want map. Also: you can't break out of a forEach.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\n\"use strict\";\nfunction test() { console.log(this); }\ntest();",
    a: "undefined. In strict mode, a regular function called bare (nothing left of the dot) gets this = undefined. In sloppy mode it would be window. A regular function doesn't HAVE a this property; it gets a this slot that the CALL fills in. obj.test() would give obj, test.call(\"hi\") would give \"hi\".",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nasync function getData() {\n  return await Promise.reject(\"Error\");\n}\ngetData().catch(console.log);",
    a: "Error. The await throws inside getData, and there's no try/catch, so getData()'s own promise rejects with \"Error\". The outside .catch receives it and logs it. (The console shows Error without quotes.) Compare with the try/catch version: catching inside would make the outer promise FULFILL instead.",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nasync function asyncFunc() {\n  try {\n    const result = await Promise.reject(\"Failed\");\n    return \"Success\";\n  } catch (error) {\n    return \"Caught: \" + error;\n  }\n}\nasyncFunc().then(console.log);",
    a: "\"Caught: Failed\". await is the switch: on rejection the await line throws and control jumps to catch, skipping return \"Success\". Twist: asyncFunc() itself comes back FULFILLED, because returning from catch marks the error as handled; an outer .catch() would never fire. Re-throw in catch if the caller needs to know. Promise.reject() is a quiz shortcut; real code awaits something still in progress, like fetch.",
    img: null
  },
  {
    cat: "Maps",
    q: "What is logged?\n\nconst map = new Map();\nmap.set(\"a\", 1);\nmap.set(\"b\", 2);\nconsole.log(map.get(\"a\") + Array.from(map.values())[1]);",
    a: "3. map.get(\"a\") is 1. map.values() is an iterator (it can't be indexed), so Array.from turns it into [1, 2], and index [1] is the 2nd value set: 2. Both are numbers, so + adds: 1 + 2 = 3. Maps keep insertion order, which is what makes index [1] reliable. Shorter: [...map.values()][1].",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nconst obj = {\n  value: 42,\n  getValue: () => this.value,\n};\nconsole.log(obj.getValue());",
    a: "undefined. Arrow functions have no own this; they inherit it from where they were WRITTEN. The object literal is not a scope, so this comes from the outer (global) scope, where value doesn't exist. Use a regular method instead: getValue() { return this.value; } gives 42.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "Which is TRUE about call and apply?",
    a: "call takes arguments comma-separated, apply takes them as an array. fn.call(thisArg, a, b) and fn.apply(thisArg, [a, b]) both run the function immediately with this set to thisArg. Memory hook: Apply = Array. bind is different: it returns a new function with this locked in, and doesn't run it.",
    img: null
  },
  {
    cat: "Maps",
    q: "Which feature distinguishes a JavaScript Map from a regular object in terms of key types?\n a. Keys can be of any data type\n b. Keys must be predefined before usage\n c. Keys are limited to numeric values only\n d. Keys must always be strings only",
    a: "a. Map keys can be any type: numbers, objects, functions, even NaN. Object keys are always strings or Symbols (obj[1] is stored as \"1\").",
    img: null
  },
  {
    cat: "Maps",
    q: "What happens when the same key is inserted again into a JavaScript Map?\n a. It ignores the new value silently\n b. It overwrites the existing value\n c. It throws an error during insertion\n d. It creates a duplicate key entry",
    a: "b. It overwrites the existing value. Keys are unique; map.set(\"a\", 1) then map.set(\"a\", 99) leaves one entry, a =&gt; 99, and the key keeps its original insertion position.",
    img: null
  },
  {
    cat: "Maps",
    q: "Which method is used to check if a key exists in a JavaScript Map?\n a. contains(key)\n b. exists(key)\n c. check(key)\n d. has(key)",
    a: "d. map.has(key) returns true or false. Cleaner than obj.hasOwnProperty(key) for objects. Related: map.get(key), map.set(key, value), map.delete(key) (returns true/false), map.clear(), map.size (a property, no parentheses).",
    img: null
  },
  {
    cat: "Maps",
    q: "How can a JavaScript Map be created with initial key-value pairs?\n a. Using Map.create with key-value pairs\n b. Using new Map with object literals\n c. Using new Map with an array of pairs\n d. Using the set method inside the constructor",
    a: "c. new Map([[\"a\", 1], [\"b\", 2]]) takes an array of [key, value] pairs. From an object: new Map(Object.entries(obj)). Back to an object: Object.fromEntries(map).",
    img: null
  },
  {
    cat: "Maps",
    q: "What is the average time complexity of search, insert and delete in a Map?\n a. O(n log n)\n b. O(n)\n c. O(log n)\n d. O(1)",
    a: "d. O(1) on average: Maps are hash tables, so lookup time doesn't grow with the number of entries. That's why map.size is instant too, while Object.keys(obj).length has to build an array first.",
    img: null
  },
  {
    cat: "Maps",
    q: "How does the console display a Map, a plain object and an array of pairs?",
    a: "Map: Map(2) { 'a' =&gt; 1, 'b' =&gt; 2 } (curly braces, arrows, size up front). Object: { a: 1, b: 2 } (colons). Array of pairs, from [...map] or Object.entries(obj): [ [ 'a', 1 ], [ 'b', 2 ] ]. You BUILD a Map from square-bracket pairs but it DISPLAYS in curly braces. Something like [ a: 1, b: 2 ] is not valid anywhere. Gotcha: JSON.stringify(map) gives \"{}\"; convert with Object.fromEntries first.",
    img: null
  },

];


// ═══════════════════════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════════════════════
let filtered  = [...QUIZ];
let idx       = 0;
let correct   = 0;
let partial   = 0;
let wrong     = 0;
let revealed  = false;
let activeCat = "All";

// ═══════════════════════════════════════════════════════
//  CATEGORY BAR
// ═══════════════════════════════════════════════════════
function buildCategories() {
  const cats = ["All", ...new Set(QUIZ.map(q => q.cat))];
  const bar = document.getElementById('catBar');
  bar.innerHTML = cats.map(c =>
    `<button class="cat-btn ${c === activeCat ? 'active' : ''}" onclick="setCategory('${c}')">${c}</button>`
  ).join('');
}

function setCategory(c) {
  activeCat = c;
  filtered  = c === "All" ? [...QUIZ] : QUIZ.filter(q => q.cat === c);
  idx = 0; correct = 0; partial = 0; wrong = 0;
  updateScore();
  buildCategories();
  showQuestion();
}

// ═══════════════════════════════════════════════════════
//  DISPLAY QUESTION
// ═══════════════════════════════════════════════════════
function showQuestion() {
  if (!filtered.length) return;
  const q = filtered[idx];
  document.getElementById('qNum').textContent    = idx + 1;
  document.getElementById('qTotal').textContent  = filtered.length;
  document.getElementById('qCat').textContent    = q.cat;
  document.getElementById('qText').textContent   = q.q;
  const aBox = document.getElementById('aBox');
  aBox.classList.remove('show');
  aBox.innerHTML = '';
  revealed = false;
  document.getElementById('btnReveal').classList.remove('hide');
  document.getElementById('btnCorrect').classList.add('hide');
  document.getElementById('btnPartial').classList.add('hide');
  document.getElementById('btnWrong').classList.add('hide');
  document.getElementById('btnNext').classList.add('hide');
}

// ═══════════════════════════════════════════════════════
//  REVEAL ANSWER
// ═══════════════════════════════════════════════════════
function reveal() {
  if (revealed) return;
  revealed = true;
  const q = filtered[idx];
  const aBox = document.getElementById('aBox');
  aBox.innerHTML = q.a;
  if (q.img) aBox.innerHTML += `<br><img src="${q.img}" alt="diagram">`;
  aBox.classList.add('show');
  document.getElementById('btnReveal').classList.add('hide');
  document.getElementById('btnCorrect').classList.remove('hide');
  document.getElementById('btnPartial').classList.remove('hide');
  document.getElementById('btnWrong').classList.remove('hide');
}

// ═══════════════════════════════════════════════════════
//  MARK ANSWER
// ═══════════════════════════════════════════════════════
function mark(pts) {
  if (pts === 2) correct++;
  else if (pts === 1) partial++;
  else wrong++;
  updateScore();
  document.getElementById('btnCorrect').classList.add('hide');
  document.getElementById('btnPartial').classList.add('hide');
  document.getElementById('btnWrong').classList.add('hide');
  if (idx < filtered.length - 1) {
    document.getElementById('btnNext').classList.remove('hide');
  } else {
    document.getElementById('qText').textContent =
      `Quiz complete! Score: ${(correct * 2) + partial} out of ${filtered.length * 2} possible. Got it: ${correct}  Partial: ${partial}  Missed: ${wrong}.`;
  }
}

function next() { idx++; if (idx < filtered.length) showQuestion(); }

function shuffle() {
  filtered.sort(() => Math.random() - 0.5);
  idx = 0; correct = 0; partial = 0; wrong = 0;
  updateScore(); showQuestion();
}

function updateScore() {
  document.getElementById('scCorrect').textContent = correct;
  document.getElementById('scPartial').textContent = partial;
  document.getElementById('scWrong').textContent   = wrong;
  document.getElementById('scTotal').textContent   = (correct * 2) + partial;
}

buildCategories();
showQuestion();