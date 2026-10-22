// ── Intermediate-JS.js — Udemy Intermediate JavaScript questions ──
// Load via quiz.html?src=Intermediate-JS.js
// Started 2026-10-13 from UdemyQ-I1; Intermediate 2 added 2026-10-22.

const QUIZ = [

  {
    cat: "this & Arrow Functions",
    q: "Which statement about arrow functions is TRUE?\n a. They have a prototype property\n b. They have their own this binding\n c. They can be used as constructors\n d. They don't have an arguments object",
    a: "d. Arrow functions have no arguments object (use ...args), no own this, no .prototype property, and can't be used with new. They do have a prototype chain (Function.prototype), which is where .call and .bind come from.",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nPromise.resolve(1)\n  .then((x) => x + 1)\n  .then((x) => {\n    throw new Error(\"Error\");\n  })\n  .catch(() => 3)\n  .then((x) => x + 1)\n  .then(console.log);",
    a: "4. 1 → 2, then the throw rejects the chain. .catch(() => 3) handles it and returns 3, putting the chain back on the fulfilled track. 3 + 1 = 4.",
    img: null
  },
  {
    cat: "Event Loop",
    q: "What is the output order?\n\nconsole.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");",
    a: "1, 4, 3, 2. Sync code first (1, 4), then microtasks (the Promise .then: 3), then macrotasks (setTimeout: 2). A 0 ms timer still waits behind every microtask.",
    img: null
  },
  {
    cat: "Event Loop",
    q: "What is the output order?\n\nconsole.log(\"Start\");\nPromise.resolve().then(() => console.log(\"Promise\"));\nsetTimeout(() => console.log(\"Timeout\"), 0);\nconsole.log(\"End\");",
    a: "Start, End, Promise, Timeout. Sync first, then microtasks (Promise), then macrotasks (setTimeout). The queue a line lands in matters, not the order it's written.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nconst obj = {\n  count: 0,\n  increment() {\n    setTimeout(function () {\n      this.count++;\n      console.log(this.count);\n    }, 100);\n  },\n};\nobj.increment();",
    a: "NaN. setTimeout calls the regular callback bare, so this is window, not obj. window.count is undefined, and undefined++ is NaN. Fix: an arrow function (inherits this from increment), const self = this, or .bind(this).",
    img: null
  },
  {
    cat: "Closures & Classes",
    q: "What is logged?\n\nfunction createCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter() + counter());",
    a: "3. The inner function closes over count, so it persists between calls: 1 + 2 = 3.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nconst person = {\n  name: \"John\",\n  greet: function () {\n    console.log(`Hello, ${this.name}`);\n  }\n};\nconst greet = person.greet;\ngreet();",
    a: "\"Hello, undefined\" (quiz answer). const greet = person.greet copies the function, so greet() is a bare call and this is the global object. In a browser you'll actually see \"Hello, \" because window.name defaults to \"\". Strict mode: TypeError. Fix: person.greet() or person.greet.bind(person).",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nasync function test() {\n  return await Promise.resolve(42);\n}\ntest().then(console.log);",
    a: "42. await unwraps the promise, return re-wraps it (async functions always return a Promise), and .then passes 42 to console.log. The await is redundant but harmless.",
    img: null
  },
  {
    cat: "Closures & Classes",
    q: "What is logged?\n\nclass Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a sound`; }\n}\nclass Dog extends Animal {\n  speak() { return `${this.name} barks`; }\n}\nconst dog = new Dog(\"Rex\");\nconsole.log(dog.speak());",
    a: "\"Rex barks\". Dog inherits Animal's constructor, but its own speak() overrides the parent's. Call the parent version with super.speak().",
    img: null
  },
  {
    cat: "Arrays",
    q: "What is logged?\n\nconst arr = [1, 2, 3];\nconst doubled = arr.forEach((num) => num * 2);\nconsole.log(doubled);",
    a: "undefined. forEach always returns undefined. Use map to build a new array: [2, 4, 6].",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\n\"use strict\";\nfunction test() { console.log(this); }\ntest();",
    a: "undefined. In strict mode a regular function called bare gets this = undefined (sloppy mode: window). this is set by the call, not stored on the function.",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nasync function getData() {\n  return await Promise.reject(\"Error\");\n}\ngetData().catch(console.log);",
    a: "Error. The await throws and nothing inside catches it, so getData()'s promise rejects and the outer .catch logs it. A try/catch inside would make it fulfill instead.",
    img: null
  },
  {
    cat: "Promises & Async",
    q: "What is logged?\n\nasync function asyncFunc() {\n  try {\n    const result = await Promise.reject(\"Failed\");\n    return \"Success\";\n  } catch (error) {\n    return \"Caught: \" + error;\n  }\n}\nasyncFunc().then(console.log);",
    a: "\"Caught: Failed\". The rejected await throws, so control jumps to catch and skips return \"Success\". The outer promise FULFILLS, because returning from catch handles the error. Re-throw if the caller needs to know.",
    img: null
  },
  {
    cat: "Maps",
    q: "What is logged?\n\nconst map = new Map();\nmap.set(\"a\", 1);\nmap.set(\"b\", 2);\nconsole.log(map.get(\"a\") + Array.from(map.values())[1]);",
    a: "3. map.get(\"a\") is 1. map.values() is an iterator, so Array.from makes [1, 2], and [1] is 2. 1 + 2 = 3. Shorter: [...map.values()][1].",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nconst obj = {\n  value: 42,\n  getValue: () => this.value,\n};\nconsole.log(obj.getValue());",
    a: "undefined. Arrow functions take this from where they're written. An object literal isn't a scope, so this is the outer (global) this. Use a method instead: getValue() { return this.value; }.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "Which is TRUE about call and apply?",
    a: "call takes comma-separated arguments, apply takes an array (Apply = Array). Both run the function immediately; bind returns a new function instead.",
    img: null
  },
  {
    cat: "Maps",
    q: "Which feature distinguishes a JavaScript Map from a regular object in terms of key types?\n a. Keys can be of any data type\n b. Keys must be predefined before usage\n c. Keys are limited to numeric values only\n d. Keys must always be strings only",
    a: "a. Map keys can be any type: numbers, objects, functions, even NaN. Object keys are always strings or Symbols.",
    img: null
  },
  {
    cat: "Maps",
    q: "What happens when the same key is inserted again into a JavaScript Map?\n a. It ignores the new value silently\n b. It overwrites the existing value\n c. It throws an error during insertion\n d. It creates a duplicate key entry",
    a: "b. It overwrites the value, and the key keeps its original position.",
    img: null
  },
  {
    cat: "Maps",
    q: "Which method is used to check if a key exists in a JavaScript Map?\n a. contains(key)\n b. exists(key)\n c. check(key)\n d. has(key)",
    a: "d. map.has(key) returns true or false. Also: get, set, delete, clear, and size (a property, no parentheses).",
    img: null
  },
  {
    cat: "Maps",
    q: "How can a JavaScript Map be created with initial key-value pairs?\n a. Using Map.create with key-value pairs\n b. Using new Map with object literals\n c. Using new Map with an array of pairs\n d. Using the set method inside the constructor",
    a: "c. new Map([[\"a\", 1], [\"b\", 2]]), an array of [key, value] pairs. From an object: new Map(Object.entries(obj)).",
    img: null
  },
  {
    cat: "Maps",
    q: "What is the average time complexity of search, insert and delete in a Map?\n a. O(n log n)\n b. O(n)\n c. O(log n)\n d. O(1)",
    a: "d. O(1) on average: Maps are hash tables, so lookups don't slow down as they grow.",
    img: null
  },
  {
    cat: "Maps",
    q: "How does the console display a Map, a plain object and an array of pairs?",
    a: "Map: Map(2) { 'a' =&gt; 1, 'b' =&gt; 2 }. Object: { a: 1, b: 2 }. Array of pairs: [ [ 'a', 1 ], [ 'b', 2 ] ]. Gotcha: JSON.stringify(map) gives \"{}\".",
    img: null
  },

  // ── Udemy Intermediate Quiz 2 (UdemyQ-Intermediate2) ── added 2026-10-22
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nvar obj = {\n  message: \"Hello\",\n  innerMessage: !(function () {\n    console.log(this.message);\n  })()\n};\nconsole.log(obj.innerMessage);",
    a: "undefined, then true. The IIFE runs bare while the object is still being built, so this is window, not obj: window.message is undefined. The function returns undefined, and !undefined is true, so innerMessage is true.",
    img: null
  },
  {
    cat: "Objects & Prototypes",
    q: "What is logged?\n\nfunction Person(name, age) {\n  this.name = name || \"John\";\n  this.age = age || 24;\n  this.displayName = function () {\n    console.log(this.name);\n  };\n}\nPerson.name = \"John\";\nPerson.displayName = function () {\n  console.log(this.name);\n};\nvar person1 = new Person(\"John\");\nperson1.displayName();\nPerson.displayName();",
    a: "John, then Person. person1.displayName() reads person1.name. Person.displayName() runs with this = the Person function, and a function's name property is read-only, so Person.name = \"John\" silently fails and it stays \"Person\".",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nfunction funcA() {\n  console.log(\"funcA \", this);\n  (function innerFuncA1() {\n    console.log(\"innerFunc1\", this);\n    (function innerFunA11() {\n      console.log(\"innerFunA11\", this);\n    })();\n  })();\n}\nconsole.log(funcA());",
    a: "funcA Window, innerFunc1 Window, innerFunA11 Window, then undefined. All three are bare calls, so this is window (strict mode: undefined). Nested functions don't inherit this. The last undefined is funcA's return value, logged by the outer console.log.",
    img: null
  },
  {
    cat: "Hoisting & Scope",
    q: "What is logged?\n\nvar employeeId = '1234abe';\n(function () {\n  console.log(employeeId);\n  var employeeId = '122345';\n})();",
    a: "undefined. The inner var is hoisted to the top of the function, creating a local that shadows the global. It stays undefined until its assignment line. Remove the inner var and you get '1234abe'; use let and it's a ReferenceError.",
    img: null
  },
  {
    cat: "Syntax Traps",
    q: "What is logged?\n\n(function () {\n  function sayHello() {\n    var name = \"Hi John\";\n    return\n    {\n      fullName: name\n    }\n  }\n  console.log(sayHello().fullName);\n})();",
    a: "TypeError: Cannot read properties of undefined (reading 'fullName'). ASI inserts a semicolon after return, so sayHello() returns undefined. Put the { on the return line and it logs \"Hi John\".",
    img: null
  },
  {
    cat: "Objects & Prototypes",
    q: "What is logged?\n\nconst obj = Object.create(null);\nconsole.log(obj.toString);",
    a: "undefined. Object.create(null) makes an object with no prototype, so it inherits nothing: no toString, no hasOwnProperty. Handy as a clean dictionary.",
    img: null
  },
  {
    cat: "Arrays",
    q: "What is logged?\n\n(function () {\n  var array1 = [];\n  var array2 = new Array(100);\n  var array3 = new Array(['1', 2, '3', 4, 5.6]);\n  console.log(array1);\n  console.log(array2);\n  console.log(array3);\n  console.log(array3.length);\n}());",
    a: "[], [empty × 100], [ ['1', 2, '3', 4, 5.6] ], 1. new Array(100) with one number makes 100 empty slots. Any other single argument (here, an array) becomes the only element, so array3.length is 1, not 5. Prefer literals: [] and [x].",
    img: null
  },
  {
    cat: "Objects & Prototypes",
    q: "What is the difference between Object.seal() and Object.freeze()?",
    a: "Both block adding and deleting properties. seal still lets you change existing values; freeze blocks that too. Both are shallow.",
    img: null
  },
  {
    cat: "this & Arrow Functions",
    q: "What is logged?\n\nfunction passWordMngr() {\n  var password = '12345678';\n  this.userName = 'John';\n  return { pwd: password };\n}\nvar userInfo = passWordMngr();\nconsole.log(userInfo.pwd);\nconsole.log(userInfo.userName);",
    a: "12345678, then undefined. The returned object only has pwd. passWordMngr() is called without new, so this is window, and this.userName quietly creates a global window.userName = 'John'.",
    img: null
  },
  {
    cat: "Hoisting & Scope",
    q: "What is logged?\n\nconsole.log(employeeId);   // employeeId is never declared anywhere",
    a: "ReferenceError: employeeId is not defined. It was never declared at all, unlike a hoisted var, which would give undefined.",
    img: null
  },
  {
    cat: "Objects & Prototypes",
    q: "What is logged?\n\n(function () {\n  'use strict';\n  var person = { name: 'John' };\n  person.salary = '10000$';\n  person['country'] = 'USA';\n  Object.defineProperty(person, 'phoneNo', {\n    value: '8888888888',\n    enumerable: false\n  });\n  console.log(Object.keys(person));\n})();",
    a: "[\"name\", \"salary\", \"country\"]. phoneNo is non-enumerable, so Object.keys skips it (so do for...in and JSON.stringify). It's still there: person.phoneNo works, and Object.getOwnPropertyNames(person) lists it.",
    img: null
  },
  {
    cat: "Arrays",
    q: "What is logged?\n\n(function () {\n  var array = new Array('100');\n  console.log(array);\n  console.log(array.length);\n}());",
    a: "[\"100\"], 1. '100' is a string, so it becomes the single element. new Array(100), a number, would make 100 empty slots instead.",
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