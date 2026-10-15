// ── test.js — JavaScript Fundamentals questions only ──

const QUIZ = [

  {
    cat: "JavaScript Fundamentals",
    q: "This code is an example of a... (function () { \n // Your code goes here \n console.log(\"Spam!\"); }) ();",
    a: "This is an Immediately Invoked Function Expression... /n (function () { // Your code goes here console.log(\"I run right away!\"); }) (); \n //() spaced for readability, but they generally wont be, \n // The (function ... }) syntax containing the whole function in a () pair causes JS to treat this as an expression not a function, and exectute immediately.\n Thus the name IFFE,",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "How is 'greater than or equal to' expressed in JavaScript? \n a. > b. >= c. >==",
    a: "b. Java script interprets >= as greater than or equal too.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "When JavaScript tries to treat something as a number but can't evaluate it numerically it returns,\n a. Zero, b. Undefined. c. NaN",
    a: "c. NaN.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "The parseFloat() function, parses a. string and returns a floating-point number | \n b. parses a floating-point number and returns an INT | \nParses a floating-point number and returns a string.",
    a: "a. The parseFloat() function parses a string and returns a floating point number.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What expression would isFinite(-1) return? \na. Error, b. True, c. False",
    a: "isFinite(-1) returns true.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "When expecting a Boolean value, JavaScript interprets a value of -1 as ____? a. Error, b. True, c. False.",
    a: "JavaScript interprets a value of -1 as True. JavaScript will interpret  0, NaN, undefined or an empty string, \"\" as False.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is the difference between var, let, and const?",
    a: "var: function-scoped, hoisted, can be redeclared. let: block-scoped, not hoisted to usable state, cannot be redeclared in same scope. const: block-scoped, must be initialized at declaration, cannot be reassigned (though object properties can still be mutated). Best practice: use const by default, let when reassignment is needed, avoid var.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is hoisting in JavaScript?",
    a: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution. var declarations are hoisted and initialized as undefined. Function declarations are fully hoisted. let and const are hoisted but remain in a 'temporal dead zone' — accessing them before declaration throws a ReferenceError.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is the difference between null and undefined?",
    a: "undefined: a variable has been declared but not assigned a value — JavaScript sets this automatically. null: an intentional absence of value — explicitly assigned by the programmer. typeof undefined === 'undefined'. typeof null === 'object' (a known JS quirk). Use null when you want to intentionally clear a value.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is a closure and give a practical example?",
    a: "A closure is a function that retains access to its outer scope even after the outer function has returned. Example: a counter function that returns an inner function — the inner function remembers and updates the count variable from the outer scope. Used in module patterns, event handlers, and factory functions to create private state.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is the difference between == and ===?",
    a: "== (loose equality) performs type coercion before comparing — '5' == 5 is true. === (strict equality) compares value AND type with no coercion — '5' === 5 is false. Always prefer === in production code to avoid unexpected type coercion bugs.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What are arrow functions and how do they differ from regular functions?",
    a: "Arrow functions (=>) are a concise function syntax. Key differences: 1) No own 'this' — they inherit 'this' from the enclosing scope (lexical this). 2) Cannot be used as constructors. 3) No 'arguments' object. 4) Cannot be used as generator functions. Best for callbacks and methods that don't need their own 'this'.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is the event loop in JavaScript?",
    a: "The event loop is JavaScript's mechanism for handling asynchronous operations in a single-threaded environment. It continuously checks the call stack and the callback queue — when the stack is empty it pushes the next callback from the queue onto the stack. This allows async operations (setTimeout, fetch, event listeners) without blocking execution.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is a Promise and what are its three states?",
    a: "A Promise represents the eventual result of an asynchronous operation. Three states: Pending (initial state — operation in progress), Fulfilled (operation completed successfully — .then() fires), Rejected (operation failed — .catch() fires). Promises chain with .then() and .catch(), and can be used with async/await for cleaner syntax.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "How would you create a Date object with the current date and time? \n var mydate = a. new Date(); b. new Date(now); c. new Date(0); ",
    a: "\  var mydate = new Date();",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "A Variable declared inside a function is called,",
    a: "A local Variable.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "A Variable declared using the const keyword, \n a. is always numeric, \n b. is read only. \n c. Cannot be redeclared,",
    a: "A Variable declared with const cannot be redeclared. const bank, locks the memory location of the bank variable, but the value in the bank can be updated.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "declaring a variable with the let keyword creates a variable with \n a. local scope,\n b. Block Scope, \n c. Global Scope.",
    a: "b. let creates a variable with a block scope.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "When you use this with-in a function, this refers to..",
    a: "The Object that owns, the function.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "An Arrow function \"let B = (A, C) => A * C; is an ... \"",
    a: "is an Anonymous function,",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "Does JavaScript support associative arrays?",
    a: "No. JS does not directly support associative Arrays. Ie arrays with named indexes. Associative Arrays can be simulated however by using a array of objects.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "If the highest index in array Foo is Foo[8], what is the value of Foo.length?",
    a: "Foo.length === 9 — arrays are zero-indexed so Foo[0] through Foo[8] gives 9 elements. Length is always one more than the highest index.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "Can you create a multidimensional array in JavaScript?",
    a: "Not natively — which is just nuts! You can however create an array of arrays to achieve the same effect. Example: var myArray = [[1,2],[3,4],[5,6]]; console.log(myArray[1][0]); // outputs 3. Access is row then column — myArray[row][col].",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "You have an array called monthNames containing all 12 months. How would you use join() to create a single string with a space between each month?",
    a: "var names = monthNames.join(' '); — join() concatenates all array elements into one string using the separator you provide. No separator gives a comma by default.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What value does indexOf() return if the value passed to it does not appear in the array?",
    a: "indexOf() returns -1 when the value is not found. This is the standard not-found sentinel value — always check for -1 before using the result as an index.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "Which array method would you use to delete an element at a specific index? A) indexOf()  B) slice()  C) splice()",
    a: "C. splice() — it modifies the original array by removing elements at the specified index. splice(start, deleteCount). B. slice() is a distractor — it returns a new array without modifying the original. slice(start, end) works on both arrays and strings.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What is returned when the toString() method is called on an array?",
    a: "A single string of all array elements joined by commas. Example: [1,2,3].toString() returns '1,2,3'. Equivalent to calling join(',') with no argument.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "What happens when the user clicks OK in a confirm dialog.",
    a: "A value of true is returned to the calling program.",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "Which method of the Math() object always returns a number rounded up to the next integer. \"A. Math.round(), B. Math.floor(), C. Math.ceil()\"",
    a: "\"C. Match.ceil()\"",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
    q: "If my loaded pages is http://www.example.com/documents/letter.htm?page=2. What will the location.pathname property of the location object return. a. http, b. www.example.com c./documents.letter.htm, d. page=2",
    a: "c. /documents/letter.htm",
    img: null
  },

  {
    cat: "JavaScript Fundamentals",
	q: "The innerHTML property of a div element can be used to: | a. Set the HTML content | b. get the HTML content | c. Either of the above.",
    a: "c. Either of the above.",
    img: null
  },
  
  {
  cat: "JavaScript Fundamentals",
  q: "function test() { \n return // Never do this triggers ; insertion. \n {name: \"John\" }; \n console.log(test()); ",
  a: "returns Undefined /*Automatic semicolon insertion causes \n return to execute before the object.* / Look into this one.",
  img: null 
  },
  
  // ═══════════════════════════════════════════════════════
  //  CODE EVALUATION — RATING AI OUTPUT
  // ═══════════════════════════════════════════════════════
  {
    cat: "Code Evaluation",
    q: "An AI generates this function: function add(a,b){return a+b} — What would you rate it and why?",
    a: "Functional but incomplete. Rating: adequate for a trivial case. Issues: no input validation (add('hello', 5) returns 'hello5'), no JSDoc comments, no handling of non-numeric inputs. Improved version should validate inputs with typeof checks, handle edge cases, and include a comment describing the function's purpose and parameters.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "AI generates: for(var i=0;i<arr.length;i++){setTimeout(()=>console.log(i),100)} — What is wrong?",
    a: "Classic closure/var bug. By the time the setTimeout callbacks fire, the loop has finished and i equals arr.length for all of them — every callback logs the same value. Fix: replace var with let (block-scoped, creates a new binding per iteration) or wrap in an IIFE. This is a very common JS interview question and a real production bug source.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "How would you rate AI-generated code that works correctly but uses var throughout and has no error handling?",
    a: "Rate as below standard / needs significant improvement. Working code is the baseline — not a merit. Code quality includes: use of modern syntax (let/const), error handling (try/catch), input validation, readability, and maintainability. In a DataAnnotation task, correct but poorly written code should score lower than correct, clean, idiomatic code.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI produces two solutions to the same problem — one uses a for loop, one uses .map(). How do you evaluate which is better?",
    a: "Both can be correct. Evaluate on: readability (.map() is more declarative and idiomatic for transforming arrays), intent clarity (.map() signals 'transform each element', a for loop is more general), performance (negligible difference at small scale), and context (if side effects are needed, a for loop may be more appropriate than .map()). Prefer the solution that most clearly communicates intent.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What makes a good code comment vs a bad one?",
    a: "Bad comment: restates what the code already says — // increment i by 1 above i++. Good comment: explains WHY, not WHAT — // offset by 1 because array is zero-indexed but display is 1-based. Comments should add context, explain non-obvious decisions, or document edge cases. Code should be readable enough that most lines need no comment at all.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI response answers the question but includes unnecessary code the user didn't ask for. How do you rate it?",
    a: "Deduct for over-generation. A good AI response is precise — it answers what was asked, nothing more. Unnecessary code adds noise, potential bugs, and confusion. In DataAnnotation assessments, verbosity without purpose is a quality defect. The response should be rated lower than a concise, targeted answer even if the extra code is technically correct.",
    img: null
  },
  
  // =======================================================
//  Code Evaluation Questions -- Batch 2 -- 20 questions
//  Paste into QUIZ array in daiquiz.js
// =======================================================

  {
    cat: "Code Evaluation",
    q: "An AI generates correct code with a single 200-line function. No smaller functions, no comments. How do you rate it?",
    a: "Below standard. Correctness is the baseline not a merit. A 200-line function is impossible to test in isolation, hard to debug, and difficult for another developer to maintain. Flag for refactoring into smaller single-purpose functions. The rule of thumb: if a function is hard to name without using 'and', it is doing too many things.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between 'it works on my machine' and production-ready code?",
    a: "Working locally means it runs in one controlled environment. Production-ready means it handles real-world conditions: concurrent users, unexpected inputs, network failures, different browsers, varying screen sizes, and edge cases the developer never tested. Code that only works in development is incomplete by definition -- the gap between local and production is where most bugs live.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates code using deprecated methods that still work in current browsers. How do you rate it?",
    a: "Rate as needs improvement. Deprecated methods work today but signal that the code will break in a future browser update without warning. Flag the specific deprecated usage, name the modern replacement, and note the risk. Working code that will silently break in 6 months is a ticking clock not a solution.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is a side effect in a function and why are functions with side effects harder to evaluate?",
    a: "A side effect is when a function modifies something outside its own scope -- a global variable, the DOM, an external file, a database. Pure functions with no side effects always return the same output for the same input and are easy to test and evaluate in isolation. Functions with side effects depend on external state, making them harder to test, harder to reason about, and more likely to cause unexpected behavior elsewhere.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a solution that works for the example given but uses a hardcoded value that would break for any other input. How do you rate it?",
    a: "Rate as fundamentally incomplete. Hardcoded values that only work for one specific case are not solutions -- they are demonstrations. A real solution works for the general case. Flag the hardcoded value, explain why it is a defect, and describe what parameterization or generalization is needed.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between synchronous and asynchronous error handling in JavaScript?",
    a: "Synchronous errors are caught with try/catch directly around the code that throws. Asynchronous errors in Promises require .catch() on the promise chain or try/catch around an await expression inside an async function. A common mistake is wrapping async code in try/catch and thinking it is protected -- it only works if the await keyword is present. Unhandled promise rejections are a frequent source of silent failures.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates code that modifies a function's input parameter directly. What is the concern?",
    a: "Mutating input parameters is a side effect that can cause hard-to-trace bugs. The caller does not expect their data to change. Example: a function that sorts an array in place changes the original array the caller passed in -- which may break other code that expected it unchanged. Best practice: treat parameters as read-only and return new values rather than modifying inputs.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What makes a good variable name and give an example of a poor one vs a good one?",
    a: "A good variable name describes what the variable contains or represents, is readable in context, and does not require a comment to explain. Poor: let d = new Date(); -- what does d mean? Good: let currentDate = new Date(); -- self-documenting. Rule of thumb: if you need a comment to explain what a variable is, the name is wrong. Exceptions: loop counters (i, j) are universally understood conventions.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a function that works correctly but could cause an infinite loop under certain inputs. The provided test case does not trigger it. How do you rate it?",
    a: "Rate as contains a critical defect regardless of the test results. A potential infinite loop is a reliability failure waiting to happen. Identify the input condition that triggers it, explain why it causes the loop, and require a fix -- typically a guard condition or a maximum iteration limit. Passing test cases do not certify correctness for untested inputs.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the purpose of a default parameter value in a JavaScript function and when is it useful?",
    a: "Default parameters provide a fallback value when an argument is not passed or is undefined. Example: function greet(name = 'Guest') -- if no name is passed the function still works gracefully. Useful for optional configuration parameters, backwards-compatible API additions, and reducing the need for if/else checks at the start of a function. Rate code higher when defaults are used thoughtfully instead of manual undefined checks.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates two versions of the same function -- one using early return, one using nested if/else. Which is generally preferred?",
    a: "Early return is generally preferred. It eliminates nesting, reduces indentation, and makes the happy path clear. Example: check for invalid input at the top and return immediately, then write the main logic without wrapping it in else. Deeply nested if/else (sometimes called arrow code or pyramid of doom) is harder to read and a common target for refactoring.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is type coercion and give an example of where it causes an unexpected result?",
    a: "Type coercion is JavaScript automatically converting one type to another during an operation. Classic unexpected result: '5' - 3 returns 2 (string coerced to number for subtraction) but '5' + 3 returns '53' (number coerced to string for concatenation). The + operator does both addition and concatenation depending on types -- a consistent source of bugs when mixing strings and numbers.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a function with 8 parameters. What is the concern and what is the modern alternative?",
    a: "Many parameters make a function hard to call correctly -- the caller must remember the exact order of 8 arguments. If any are optional the combinations explode. Modern alternative: pass a single configuration object. function setup({width, height, color, visible}) is easier to call, self-documenting at the call site, and order-independent. Rate functions with more than 3-4 parameters as candidates for the object parameter pattern.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between a thrown error and a returned error value, and when should each be used?",
    a: "Thrown error (throw new Error()): signals an exceptional condition the caller must handle -- use for truly unexpected failures like invalid input to a critical function. Returned error value (return null, return {error: 'msg'}): signals an expected failure the caller should check for -- use for predictable conditions like 'user not found'. Throwing when you should return forces callers into try/catch for normal flow. Returning when you should throw lets errors silently propagate.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a correct solution but uses a global variable to pass data between two functions instead of a parameter. What is the concern?",
    a: "Global variables create hidden dependencies between functions that are not visible in their signatures. Any code anywhere can modify a global -- making bugs hard to trace and functions impossible to test in isolation. Rate as needs refactoring. The fix is to pass the value as a parameter explicitly, making the dependency visible and the function self-contained.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the key question to ask when evaluating whether an AI response followed instructions correctly?",
    a: "Did it answer what was actually asked -- not what it assumed was meant, not a more interesting version of the question, not a related but different question. Read the original instruction and the response side by side. Common failures: answering a simpler version of the question, adding unrequested features, solving a different problem that seemed related, or technically complying while missing the intent.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates code that works but swallows errors silently with an empty catch block. How do you rate it?",
    a: "Rate as a significant defect. An empty catch block -- catch(e) {} -- hides failures completely. When something goes wrong the application continues as if nothing happened, making debugging nearly impossible. At minimum a catch block should log the error. Better: handle it meaningfully or rethrow it. Silent failure is often worse than a crash because the damage is invisible.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between unit testing and integration testing, and why does it matter for code evaluation?",
    a: "Unit test: tests one function in isolation with controlled inputs -- fast, precise, catches logic errors. Integration test: tests how multiple parts work together -- slower, catches interface and data flow errors. Code that is hard to unit test (too many dependencies, side effects, global state) is a design smell even if it works. Evaluating testability is part of evaluating quality -- untestable code is fragile code.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a solution using eval(). The code works correctly. How do you rate it?",
    a: "Rate as unacceptable in almost all contexts. eval() executes arbitrary strings as code -- a critical security vulnerability if any user input can reach it (code injection). It also defeats JavaScript engine optimizations making it slow. There is almost always a better alternative. Flag immediately, explain the security risk, and require refactoring. The only acceptable use is extremely controlled internal tooling with zero user input.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the single best habit that separates a good code evaluator from an average one?",
    a: "Testing edge cases before rating as correct. Average evaluators check the happy path -- does it work for the example given. Good evaluators ask: what happens with null, undefined, empty string, empty array, zero, negative numbers, very large numbers, wrong types. The happy path is the easiest case -- real bugs hide in the edges. Correctness is the foundation of quality, and correctness means working for all realistic inputs not just the provided example.",
    img: null
  },


  // ═══════════════════════════════════════════════════════
  //  DEBUGGING
  // ═══════════════════════════════════════════════════════
  {
    cat: "Debugging",
    q: "What does 'Cannot read properties of undefined' mean and how do you fix it?",
    a: "It means you are trying to access a property on a variable that is undefined. Common causes: 1) Variable not initialized before use. 2) Function returning undefined instead of expected object. 3) Array index out of bounds. Fix: check the variable exists before accessing its properties using optional chaining (?.) or an if check. console.log the variable just before the error line to confirm its value.",
    img: null
  },
  {
    cat: "Debugging",
    q: "A function is being called twice when you only expect it once. What do you check first?",
    a: "Check for duplicate event listeners — the most common cause. If addEventListener is called inside a function that runs multiple times, listeners stack up. Also check: onclick attribute in HTML AND addEventListener in JS on the same element (double trigger), recursive calls, or the function being called in two separate places in the code. Add console.log('called') as the first line to confirm call count.",
    img: null
  },
  {
    cat: "Debugging",
    q: "What is the best first step when debugging a JavaScript error in the browser?",
    a: "Open DevTools (F12) and check the Console tab for red error messages. The error message tells you what went wrong, the file name and line number tells you exactly where. Never guess before reading the error. Second step: set a breakpoint at the flagged line in the Sources tab and inspect variable values at that point in execution.",
    img: null
  },
  {
    cat: "Debugging",
    q: "What does NaN mean and how do you check for it?",
    a: "NaN stands for Not a Number — the result of an invalid numeric operation (e.g. parseInt('hello'), 0/0, undefined + 1). Crucially: NaN !== NaN is true — NaN is not equal to itself. To check for NaN use Number.isNaN(value) — never use == NaN or === NaN as both always return false.",
    img: null
  },
  {
    cat: "Debugging",
    q: "A variable shows the correct value in console.log but the wrong value in the DOM. What is likely wrong?",
    a: "The DOM is likely being updated before the variable is set, or the variable is being read at a different point in the event cycle than expected. Common causes: async timing issues (the DOM update fires before a fetch/setTimeout completes), scope issues (updating a local copy instead of the variable the DOM reads from), or caching (the DOM element was captured before the variable changed). Check the sequence of execution carefully.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  ARRAYS & OBJECTS
  // ═══════════════════════════════════════════════════════
  {
    cat: "Arrays & Objects",
    q: "What is the difference between .map(), .filter(), and .reduce()?",
    a: ".map(): transforms each element, returns new array of same length. .filter(): tests each element against a condition, returns new array of elements that pass. .reduce(): accumulates all elements into a single value (sum, object, string etc.). All three are non-destructive — they return a new array/value without modifying the original.",
    img: null
  },
  {
    cat: "Arrays & Objects",
    q: "What is the spread operator and give two use cases?",
    a: "The spread operator (...) expands an iterable into individual elements. Use case 1: copy an array without mutation — const copy = [...original]. Use case 2: merge arrays — const merged = [...arr1, ...arr2]. Also works with objects: const newObj = {...obj1, ...obj2}. Essential for immutable patterns in modern JS.",
    img: null
  },
  {
    cat: "Arrays & Objects",
    q: "What is destructuring and give an example with an object and an array?",
    a: "Destructuring extracts values from arrays or properties from objects into variables. Object: const {name, age} = person — extracts name and age properties. Array: const [first, second] = arr — extracts first two elements. Can rename: const {name: personName} = person. Can set defaults: const {age = 25} = person. Cleaner than multiple assignment lines.",
    img: null
  },
  {
    cat: "Arrays & Objects",
    q: "What is the difference between a shallow copy and a deep copy of an object?",
    a: "Shallow copy: copies the top-level properties only — nested objects still reference the original. Methods: Object.assign({}, obj) or spread {...obj}. Deep copy: copies all levels recursively — fully independent. Methods: JSON.parse(JSON.stringify(obj)) (simple but loses functions/undefined), or structuredClone(obj) (modern, handles more types). Use deep copy when nested data must not be shared.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  AI OUTPUT ASSESSMENT
  // ═══════════════════════════════════════════════════════
  {
    cat: "AI Output Assessment",
    q: "What is the key principle when evaluating whether an AI response correctly answered a coding question?",
    a: "Test it — don't just read it. AI code can look correct but fail on edge cases, have off-by-one errors, or make subtle logical mistakes. Run the code mentally or actually execute it. Check: does it handle empty inputs? Negative numbers? Null values? The response should be rated on whether it works correctly across realistic inputs, not just the happy path example.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "An AI gives a correct answer but uses a deprecated method. How do you rate it?",
    a: "Rate as partially correct / needs improvement. Deprecated methods still work but signal outdated knowledge and may break in future environments. A high quality response uses current best practices. Note the deprecation in your feedback and suggest the modern equivalent. Example: using substr() instead of substring() or slice(), or XMLHttpRequest instead of fetch().",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "What is 'instruction following' and why is it critical in DataAnnotation assessments?",
    a: "Instruction following means the response does exactly what was asked — no more, no less. Critical because: DataAnnotation tasks have explicit guidelines that must be followed precisely. An answer that is technically correct but ignores a formatting requirement, length constraint, or scope restriction fails the task. Always re-read the instructions before rating — the AI may have answered a slightly different question than was asked.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "How do you assess the factual accuracy of an AI explanation of a technical concept?",
    a: "Cross-check against authoritative sources: MDN Web Docs for JavaScript, official documentation for frameworks. Look for: incorrect claims, misleading simplifications, outdated information, or missing important caveats. A technically plausible-sounding explanation that contains one wrong statement should be rated lower than a simpler but fully accurate one. Confidence in tone does not equal correctness.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "An AI produces a solution that works but is O(n²) when an O(n) solution exists. How do you rate it?",
    a: "Rate as functional but suboptimal. For small inputs it may be acceptable. For production or large datasets it is a meaningful defect. In your evaluation note: the solution is correct, the algorithm is inefficient, and describe the more efficient approach. The rating depends on whether the task guidelines require optimal solutions or just working ones — always check the rubric.",
    img: null
  },
  {
    cat: "AI Output Assessment",
    q: "What is a hallucination in the context of AI code generation?",
    a: "A hallucination is when an AI confidently generates code that references functions, methods, libraries, or APIs that do not exist. Example: calling a made-up array method like arr.flattenDeep() when the correct method is arr.flat(). Hallucinations are particularly dangerous because the code looks plausible and may only fail at runtime. Always verify method names and APIs against documentation.",
    img: null
  },
 // ═══════════════════════════════════════════════════════
//  Code Evaluation & AI Training Questions — 40 questions
//  For daiquiz.js — paste into QUIZ array
// ═══════════════════════════════════════════════════════

  {
    cat: "Code Evaluation",
    q: "An AI generates this code:\nfor (let i = 0; i <= arr.length; i++) {\n  console.log(arr[i]);\n}\nWhat is wrong?",
    a: "Off-by-one error — the condition should be i < arr.length not i <= arr.length. When i equals arr.length the index is out of bounds and arr[i] returns undefined. This is one of the most common bugs in loop code.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI returns a function that works correctly but is 80 lines long when it could be 15. How do you rate it?",
    a: "Rate as below standard. Correctness is the baseline, not a merit. Verbose code is harder to read, maintain, and debug. Flag it for refactoring — identify repeated logic, unnecessary variables, and opportunities to use built-in methods. A good response is as short as it can be while remaining readable.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "AI generates: function add(a, b) { return a + b; }\nThe user asked for a function that adds two numbers and handles non-numeric input. How do you rate it?",
    a: "Incomplete — it answers half the question. The function works for numbers but ignores the input validation requirement entirely. Rate as needs significant improvement and note specifically what is missing: typeof checks, NaN handling, or throwing a meaningful error for invalid input.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between a syntax error and a logic error, and which is harder to catch?",
    a: "Syntax error: code that violates language rules — the interpreter catches it immediately and throws an error. Logic error: code that runs without error but produces wrong results — the interpreter cannot catch it, only testing and careful review can. Logic errors are significantly harder to catch because the code appears to work.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI produces two solutions. Solution A uses a nested for loop O(n²). Solution B uses a Map for O(n). The user asked for the most efficient solution. Which do you choose?",
    a: "Solution B — O(n) linear time is significantly more efficient than O(n²) quadratic. For small arrays the difference is negligible but at scale O(n²) becomes prohibitively slow. The user explicitly asked for efficiency so Solution A fails the requirement even though it produces correct results.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI uses console.log() statements throughout production code for debugging. How do you rate this?",
    a: "Flag as a quality defect. console.log() statements left in production code expose internal logic, slow performance, and clutter the browser console for end users. Debug logging should be removed before shipping or replaced with a proper logging library that can be toggled. Rate the solution lower and note the cleanup required.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What does it mean for code to be 'idiomatic' JavaScript, and why does it matter in evaluation?",
    a: "Idiomatic code follows the conventions and patterns the language community considers standard — using const/let instead of var, arrow functions for callbacks, array methods like map/filter instead of manual loops, template literals instead of concatenation. It matters because idiomatic code is what other developers expect — it is more readable, maintainable, and signals professional competence.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a function with a parameter named 'x' and variables named 'a', 'b', 'temp2'. The function works correctly. How do you rate the naming?",
    a: "Poor — single letter and meaningless variable names are a quality defect even when the code works. Names should describe purpose: 'x' might be 'userAge', 'temp2' might be 'previousBalance'. Bad naming makes code unmaintainable. Rate below standard and note that meaningful names are a core quality requirement.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI response correctly solves the problem but includes a paragraph explaining what JavaScript is, what functions are, and the history of the language. The user asked an intermediate-level question. How do you rate it?",
    a: "Rate as poor instruction following. The response over-explains to an audience that does not need the basics. A good AI response calibrates to the user's apparent level. Unnecessary preamble wastes the user's time and buries the actual answer. The explanation content may be accurate but the response is still low quality.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is a race condition and how might it appear in JavaScript async code?",
    a: "A race condition occurs when the outcome depends on the timing of asynchronous operations completing in an unpredictable order. In JavaScript: two async calls updating the same variable where the second might resolve before the first, or a UI update firing before a fetch completes. Hard to reproduce consistently — timing-dependent bugs are among the most difficult to diagnose.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates code that works in Chrome but the user reports it fails in Safari. What category of issue is this?",
    a: "Browser compatibility issue — a feature, method, or syntax used is not supported in all target browsers. Common culprits: newer ES6+ features without transpilation, vendor-prefixed CSS, or Web APIs with incomplete support. Good code either uses widely supported features or includes appropriate polyfills. Always check MDN browser compatibility tables.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between imperative and declarative code, and which is generally preferred in modern JavaScript?",
    a: "Imperative: describes HOW to do something step by step — for loops, manual array building. Declarative: describes WHAT you want — map, filter, reduce, array methods. Modern JavaScript favors declarative style because it is more readable and expresses intent clearly. 'Give me all users over 30' as filter() reads better than a for loop doing the same thing.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates this:\nif (x == true) { doSomething(); }\nWhat is wrong?",
    a: "Two issues: 1) == instead of === allows type coercion — unexpected values could match. 2) Comparing to true explicitly is redundant — if (x) is sufficient and more idiomatic. Correct version: if (x) { doSomething(); } — or if strict boolean required: if (x === true).",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is mutation and why is avoiding it considered good practice?",
    a: "Mutation means directly modifying an existing object or array rather than creating a new one. Mutation makes code harder to reason about — functions that mutate their inputs cause side effects that can affect other parts of the program unexpectedly. Immutable patterns using spread, map, filter return new values and leave originals unchanged — safer and more predictable especially in larger codebases.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a fetch() call with no .catch() or try/catch. The code works in testing. How do you rate it?",
    a: "Rate as incomplete — missing error handling is a production defect waiting to happen. Network requests can fail for many reasons: timeout, server error, no connection. Without error handling the application will silently fail or throw an unhandled promise rejection. Always require error handling on async operations in production code.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the purpose of a code review and what should a good reviewer focus on?",
    a: "A code review catches defects, ensures consistency, and shares knowledge before code reaches production. A good reviewer focuses on: correctness (does it work for all inputs), readability (can others understand it), edge cases (what happens with null, empty, or unexpected values), security (no injection or exposure risks), and performance (no obvious inefficiencies). Not just whether it runs.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates:\nconst result = arr.filter(x => x > 0).map(x => x * 2).reduce((a,b) => a + b, 0);\nIs this good code?",
    a: "Yes — this is clean, idiomatic, declarative JavaScript. Three chained array methods each doing one thing clearly: filter positives, double them, sum the result. Readable, concise, no mutation. The only consideration is performance on very large arrays where a single loop might be more efficient — but for typical use cases this is excellent code.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is a magic number and why should it be avoided?",
    a: "A magic number is a numeric literal in code with no explanation of what it represents. Example: if (status === 3) — what does 3 mean? Instead: const STATUS_APPROVED = 3; if (status === STATUS_APPROVED). Named constants make code self-documenting, easier to maintain, and prevent the same value being hardcoded inconsistently across the codebase.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a solution using a library the user never mentioned and did not ask for. How do you rate it?",
    a: "Rate as poor instruction following. Introducing an undeclared dependency changes the user's project requirements without permission. The user may not be able to use that library due to licensing, bundle size, or project constraints. A good response solves the problem with what the user has — or explicitly asks if a library is acceptable before using one.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is defensive programming and give a JavaScript example?",
    a: "Defensive programming anticipates failure and handles it gracefully rather than assuming inputs are valid. Example: instead of const name = user.profile.name — which throws if user or profile is null — use: const name = user?.profile?.name ?? 'Guest'. Optional chaining and nullish coalescing are JavaScript's built-in defensive tools. Rate code higher when it handles the unhappy path.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates correct code then adds 'Note: this code has not been tested.' How do you evaluate that disclaimer?",
    a: "It is an honest acknowledgment but also a quality signal — untested code should not be presented as a complete solution. In evaluation, the disclaimer does not excuse potential errors but it does show self-awareness. Rate the code on its own merits and test it yourself. A response that says 'here is working code' when it has not been tested is actually worse — overconfidence without verification.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the single most important thing to check when evaluating AI-generated code?",
    a: "Does it actually do what was asked — not just for the happy path example, but for realistic edge cases. AI code can look syntactically correct and logically plausible while failing on null inputs, empty arrays, boundary values, or unexpected types. Run it mentally or actually execute it with varied inputs before rating it as correct.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a recursive function with no base case. What will happen?",
    a: "The function will call itself infinitely until the call stack is exhausted — a stack overflow error. A base case is the condition that stops recursion. Every recursive function must have one. This is a critical defect — the code will crash every time it runs. Rate as fundamentally broken regardless of whether the recursive logic is otherwise correct.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the difference between null and undefined in a code review context?",
    a: "undefined means a variable was declared but never assigned — often signals an oversight or incomplete initialization. null is an intentional empty value — a deliberate programmer choice. In code review: unexpected undefined values often signal bugs. Seeing null usually means the developer thought about absence explicitly. Both need handling but for different reasons.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates code that passes all the provided test cases but you suspect it will fail on edge cases not shown. What do you do?",
    a: "Test it yourself with edge cases: empty input, null, zero, negative numbers, very large values, strings where numbers are expected, arrays with one element or no elements. Passing provided tests is necessary but not sufficient. A good evaluation goes beyond the examples given — the question is whether the code is correct in general, not just for the cases the user happened to mention.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What does 'separation of concerns' mean and how would you spot a violation in a JavaScript function?",
    a: "Separation of concerns means each piece of code should handle one responsibility. A violation in JavaScript: a function that fetches data from an API, formats it, updates the DOM, and logs errors all in one block. Signs to look for: functions that are hard to name without using 'and', functions longer than ~20-30 lines, and logic that would be impossible to unit test in isolation.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a solution with == for all comparisons throughout. Is this always wrong?",
    a: "Not always wrong but always worth flagging. == coercion is occasionally intentional — checking null == undefined catches both in one comparison. However the default recommendation is === for all comparisons to avoid unexpected coercion bugs. In a code review note all == usages and verify each one is intentional. Rate the solution as needing review rather than automatically broken.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the fastest way to determine if AI-generated code contains a hallucinated method or API?",
    a: "Check MDN Web Docs for the exact method name. AI hallucinations often look plausible — slightly wrong method names, methods that sound like they should exist but don't, or correct method names with wrong signatures. Never trust AI-generated method calls without verification. MDN is the authoritative source for JavaScript web APIs.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "An AI generates a for loop where a while loop would be more appropriate. Is this wrong?",
    a: "Not wrong — both achieve the same result. However it may be a readability concern. for loops signal 'I know how many iterations' while while loops signal 'I loop until a condition changes'. Using a for loop where the iteration count is unknown can mislead the reader. Flag as a style issue rather than a bug — suggest the more semantically appropriate construct.",
    img: null
  },
  {
    cat: "Code Evaluation",
    q: "What is the key difference between evaluating code correctness and evaluating code quality?",
    a: "Correctness: does the code produce the right output for valid inputs — a binary pass/fail. Quality: how well the code is written — readability, maintainability, efficiency, error handling, naming, structure. Code can be correct but low quality (works but unmaintainable) or high quality but incorrect (beautifully written but wrong answer). Both dimensions must be evaluated independently.",
    img: null
  },

 
  

  // ═══════════════════════════════════════════════════════
  //  CORE JAVASCRIPT
  // ═══════════════════════════════════════════════════════
  {
    cat: "Core JavaScript",
    q: "What are the primitive data types in JavaScript?",
    a: "There are 7 primitive types: String, Number, BigInt, Boolean, undefined, null, and Symbol. Primitives are immutable and compared by value. Everything else in JavaScript is an Object (arrays, functions, dates etc.) and compared by reference.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is type coercion and give an example of an unexpected result?",
    a: "Type coercion is JavaScript automatically converting one type to another during operations. Example: 1 + '2' = '12' (number coerced to string) but 1 - '2' = -1 (string coerced to number). Another classic: [] + [] = '' and [] + {} = '[object Object]'. These surprises are why strict equality (===) and explicit type conversion are best practice.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between a function declaration and a function expression?",
    a: "Function declaration: function foo() {} — hoisted completely, can be called before it appears in code. Function expression: const foo = function() {} — not hoisted, only available after the line it's defined on. Arrow functions are always expressions. Named function expressions are useful for recursion and stack traces.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What does 'this' refer to in JavaScript?",
    a: "'this' refers to the execution context — who called the function. In a method: the object the method belongs to. In a regular function: the global object (window in browser) or undefined in strict mode. In an arrow function: the enclosing lexical scope's 'this'. In an event handler: the element that fired the event. 'this' is one of JS's most common sources of confusion.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the prototype chain in JavaScript?",
    a: "Every JavaScript object has a hidden [[Prototype]] property linking it to another object. When you access a property, JS first checks the object itself, then walks up the prototype chain until it finds the property or reaches null. This is how inheritance works in JS — methods defined on Array.prototype are available to all arrays through the chain.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between call(), apply(), and bind()?",
    a: "All three set 'this' explicitly. call(thisArg, arg1, arg2): invokes the function immediately with individual arguments. apply(thisArg, [args]): invokes immediately with arguments as an array. bind(thisArg, arg1): returns a NEW function with 'this' permanently bound — does not invoke immediately. bind is commonly used in event handlers to preserve context.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is async/await and how does it relate to Promises?",
    a: "async/await is syntactic sugar over Promises — it makes async code read like synchronous code. An async function always returns a Promise. await pauses execution inside the async function until the Promise resolves. Use try/catch for error handling instead of .catch(). Under the hood it's still Promises — async/await just makes the code cleaner and easier to read and debug.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between synchronous and asynchronous code?",
    a: "Synchronous code executes line by line — each line waits for the previous to finish. Asynchronous code starts an operation and moves on, handling the result later via callbacks, Promises, or async/await. JavaScript is single-threaded but handles async through the event loop — long operations (network requests, timers) are offloaded so the UI doesn't freeze.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is a higher order function?",
    a: "A higher order function either takes a function as an argument or returns a function (or both). Examples: .map(), .filter(), .reduce() all accept callback functions — they are higher order functions. A factory function that returns a customized function is also higher order. Core to functional programming patterns in JavaScript.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between .forEach() and .map()?",
    a: ".forEach() iterates over an array and executes a callback for each element — returns undefined, used for side effects (logging, DOM updates). .map() iterates and returns a NEW array of transformed values — never use .map() if you don't use the return value. forEach cannot be chained; map can be chained with .filter(), .reduce() etc.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is a template literal and what advantages does it offer?",
    a: "Template literals use backticks (`) instead of quotes and support: 1) String interpolation — `Hello ${name}` instead of 'Hello ' + name. 2) Multi-line strings without \\n. 3) Tagged templates for advanced string processing. Cleaner, more readable, and less error-prone than string concatenation especially with multiple variables.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is optional chaining (?.) and when should you use it?",
    a: "Optional chaining safely accesses nested object properties without throwing if an intermediate value is null or undefined. Example: user?.address?.city returns undefined instead of throwing if user or address is null. Use when accessing deeply nested data from APIs or external sources where any level might be missing. Cleaner than lengthy if/else null checks.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the nullish coalescing operator (??) and how does it differ from ||?",
    a: "?? returns the right side only if the left side is null or undefined. || returns the right side for ANY falsy value (0, '', false, null, undefined). Example: 0 ?? 'default' returns 0 (0 is valid). 0 || 'default' returns 'default' (0 is falsy). Use ?? when 0 or empty string are valid values you want to preserve.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between .slice() and .splice()?",
    a: ".slice(start, end): non-destructive — returns a new array from start to end without modifying the original. .splice(start, deleteCount, ...items): destructive — modifies the original array by removing/replacing elements and returns the removed elements. Mnemonic: splice has a 'p' for 'permanent change'.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What are JavaScript modules and what are the two main systems?",
    a: "Modules split code into reusable files with explicit imports and exports — avoiding global scope pollution. Two systems: CommonJS (Node.js): module.exports = {} and require('./file'). ES Modules (ESM, modern standard): export / import syntax, supported natively in browsers with type='module'. ESM is the current standard; CommonJS still dominates in older Node.js code.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is a generator function and what is its primary use case?",
    a: "A generator function (function*) can pause execution and resume later using the yield keyword. It returns an iterator. Primary use case: lazy evaluation of sequences — generating values one at a time instead of all at once (useful for infinite sequences, async flows). Each call to .next() resumes until the next yield. Less common than Promises but powerful for certain patterns.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is memoization and how would you implement it in JavaScript?",
    a: "Memoization caches the results of expensive function calls so repeated calls with the same arguments return the cached result instantly. Simple implementation: wrap a function, store results in an object keyed by arguments. Example: const memo = {}; if(memo[n]) return memo[n]; else memo[n] = expensiveCalc(n). Used to optimize recursive functions like Fibonacci.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between Object.freeze() and const?",
    a: "const prevents reassignment of the variable binding — you can't point the variable at a new object, but you CAN mutate the object's properties. Object.freeze() prevents mutation of the object's properties — but the variable can still be reassigned. To make a truly immutable object you need both: const obj = Object.freeze({...}). Note: freeze is shallow — nested objects are not frozen.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is the difference between setTimeout and setInterval?",
    a: "setTimeout(fn, ms): executes the callback ONCE after the specified delay. setInterval(fn, ms): executes the callback REPEATEDLY every ms milliseconds until cleared. Both return an ID — use clearTimeout(id) / clearInterval(id) to cancel. Important: the delay is a minimum, not a guarantee — the event loop may delay execution if the call stack is busy.",
    img: null
  },
  {
    cat: "Core JavaScript",
    q: "What is JSON and what are its two main methods in JavaScript?",
    a: "JSON (JavaScript Object Notation) is a lightweight data interchange format — text-based, language-independent, human readable. Two main methods: JSON.stringify(obj): converts a JavaScript object to a JSON string for storage or transmission. JSON.parse(str): converts a JSON string back to a JavaScript object. Limitations: cannot serialize functions, undefined, or circular references.",
    img: null
  },
 {
  cat: "Core JavaScript",
  q: "What is the TDZ and how does it relate to variables?",
  a: "The Temporal Dead Zone (TDZ) is the period between when a variable is hoisted into scope and when it is initialized with a value. var is hoisted AND immediately initialized as undefined — so its TDZ is zero, and accessing it early returns undefined rather than an error. let and const are hoisted but NOT initialized — they sit in the TDZ until their declaration line is reached. Accessing them during the TDZ throws a ReferenceError. This is why let and const are considered safer — undefined silently masking a bug is worse than an explicit error.",
  img: null
},
  
  // ═══════════════════════════════════════════════════════
  //  DOM & EVENTS
  // ═══════════════════════════════════════════════════════
  {
    cat: "DOM & Events",
    q: "What is event bubbling and how do you stop it?",
    a: "Event bubbling means an event fired on a child element propagates up through its parent elements — a click on a button also triggers click handlers on its containing div, body, etc. Stop it with event.stopPropagation() inside the handler. Related: event.preventDefault() stops the default browser action (form submit, link navigation) but does NOT stop bubbling — they are separate concerns.",
    img: null
  },
  {
    cat: "DOM & Events",
    q: "What is event delegation and why is it useful?",
    a: "Event delegation attaches a single event listener to a parent element instead of individual listeners on each child. Uses bubbling — events from children bubble up to the parent listener. Useful when: child elements are dynamically created (new elements automatically work), or there are many children (one listener is more efficient than hundreds). Check event.target inside the handler to identify which child triggered it.",
    img: null
  },
  {
    cat: "DOM & Events",
    q: "What is the difference between innerHTML and textContent?",
    a: "innerHTML parses and renders HTML tags — setting it to '<b>Hello</b>' renders bold text. textContent treats everything as plain text — '<b>Hello</b>' displays literally as text including the tags. Security note: never set innerHTML from user input — it can execute malicious scripts (XSS attack). Use textContent for user data, innerHTML only for trusted HTML.",
    img: null
  },
  {
    cat: "DOM & Events",
    q: "What does defer do on a script tag and why is it useful?",
    a: "defer tells the browser to download the script in the background while parsing HTML, but not execute it until the DOM is fully parsed. Prevents 'element not found' errors that occur when script runs before HTML elements exist. Equivalent to placing the script just before </body> but keeps it organized in <head>. Scripts with defer execute in order, unlike async.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  BEST PRACTICES
  // ═══════════════════════════════════════════════════════ 
  
    {
    cat: "Best Practices",
    q: "What does S stand for in the context of SOLID principles in JavaScript.",
    a: "Single Responsibility Principle (S) According to this principle, a class should have only one reason to change, that is, it should have only one task or responsibility.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What does O Stand for in the context of SOLID principles in JavaScript.",
    a: "Open-Closed Principle (O): The second SOLID principle is the open-closed principle. Its official definition holds that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What does L Stand for in the context of SOLID principles in JavaScript.",
    a: "Liskov Substitution Principle (L) The Liskov substitution principle states that \"objects of a superclass should be replaceable by objects of a subclass without affecting the correctness of the program\"",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What does I stand for in the context of SOLID principles in JavaScript.",
    a: "Interface Segregation Principle (I): The fourth SOLID principle, \"I,\" refers to the Interface Segregation Principle. No function or Class should be forced to implement interfaces or methods that it will not use. It's better to have specific interfaces, rather than a single general interface.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What does D stand for in the context of SOLID principles in JavaScript.",
    a: "Dependency Inversion Principle (D) The last principle, \"D,\" is the Dependency Inversion Principle. This principle holds that high-level modules, should not depend on low-level modules, which are the modules that contain detailed and low-level logic.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What is DRY and why does it matter in code quality assessment?",
    a: "DRY stands for Don't Repeat Yourself. Repeated code is a quality defect — it means bugs must be fixed in multiple places, and changes require multiple updates. In code evaluation, look for: identical logic copied and pasted, magic numbers used repeatedly instead of named constants, and similar functions that could be one parameterized function. DRY code is more maintainable and less error-prone.",
    img: null
  },
  {
	cat: "Best Practices",
    q: "What is S.O.L.I.D. in the context of JavaScript?",
    a: "SOLID: \n S:Single Reponsibility Principle, \n O:Open-Closed Principle, \n L:Liskov Principle, \n I:Interface Segregation Principle, \n D:Dependency Inversion Principle,",
    img: null
  },
  {
    cat: "Best Practices",
    q: "What is the single responsibility principle and how does it apply to JavaScript functions?",
    a: "A function should do one thing and do it well. A function named getUserAndSendEmail() is doing two things — it should be two functions. Signs a function violates SRP: it's hard to name without using 'and', it's longer than ~20 lines, it's hard to unit test in isolation. In code evaluation, functions with multiple responsibilities should be flagged for refactoring.",
    img: null
  },
  {
    cat: "Best Practices",
    q: "Why is error handling important and what is the basic pattern in JavaScript?",
    a: "Unhandled errors crash applications and expose internal details to users. Basic pattern: try { // code that might fail } catch(error) { // handle gracefully } finally { // always runs — cleanup }. For async code: try/catch around await, or .catch() on Promise chains. Good error handling logs the error for debugging, shows a user-friendly message, and keeps the application running.",
    img: null
  },

  // ── Deepak Top 100 additions ──────────────────────────

  // ── Type Quirks ──
  {
    cat: "JavaScript Fundamentals",
    q: "What is the output of `typeof null`?",
    a: "`object` — a historical bug in JavaScript. null is not actually an object; it was a mistake in the original implementation that was never fixed for backward-compatibility reasons.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "Why does `NaN === NaN` return false?",
    a: "NaN (Not a Number) is defined by the IEEE 754 spec as unequal to any value, including itself. Use `Number.isNaN(value)` to check for NaN — `isNaN()` is less reliable because it coerces its argument first.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does `[] + []` evaluate to?",
    a: "An empty string `''`. Arrays coerce to strings when the `+` operator is used — both empty arrays become `''`, and `'' + ''` is `''`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does `[] + {}` and `{} + []` give?",
    a: "`[] + {}` → `'[object Object]'` (array coerces to '', object coerces to '[object Object]'). `{} + []` in a statement context: the `{}` is parsed as an empty block, leaving `+[]` which is `0`. In expression context it also gives `'[object Object]'`. Context matters.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How does JavaScript handle integer overflow?",
    a: "JS numbers are IEEE 754 64-bit doubles. Safe integer range: `Number.MIN_SAFE_INTEGER` (-(2^53-1)) to `Number.MAX_SAFE_INTEGER` (2^53-1). Beyond that, precision is lost silently. For large integers use `BigInt` (e.g., `9007199254740993n`).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does `typeof NaN` return and why?",
    a: "`'number'` — NaN is a special numeric value in the IEEE 754 spec meaning 'Not a Number', but it is still of numeric type. This is why you must use `Number.isNaN()` rather than `typeof` to detect it.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does `!!` (double negation) do in JavaScript?",
    a: "Converts any value to its boolean equivalent. `!value` negates (gives a boolean), `!!value` negates again, giving the truthy/falsy result as an actual `true` or `false`. Shorthand for `Boolean(value)`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "Why is `[] == ![]` true?",
    a: "Step by step: `![]` is `false` (arrays are truthy). Now `[] == false`. Type coercion: `[]` → `''` → `0`; `false` → `0`. So `0 == 0` is `true`. A classic type-coercion trap — another reason to use `===`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the difference between `Object.freeze()` and `Object.seal()`?",
    a: "`Object.freeze()`: cannot add, remove, OR modify properties (deep values of nested objects are still mutable — it's shallow). `Object.seal()`: cannot add or remove properties, but existing properties CAN be modified. Freeze ⊃ seal.",
    img: null
  },

  // ── Variables & Scope ──
  {
    cat: "JavaScript Fundamentals",
    q: "What happens when you redeclare a `var` variable?",
    a: "Redeclaration with `var` is silently allowed — no error thrown. The second declaration is essentially ignored; the variable keeps its current value. This is one reason `var` is error-prone and `let`/`const` are preferred.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How are function declarations and function expressions hoisted differently?",
    a: "Function declarations are hoisted entirely — both the name and body — so they are callable before the line they appear on. Function expressions (e.g., `const fn = function(){...}`) only hoist the variable declaration (as `undefined` for `var`, TDZ for `let`/`const`), so calling them before the assignment throws an error.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What happens when you call a function before it's declared?",
    a: "For a function declaration — it works, because declarations are fully hoisted. For a function expression assigned to `var` — TypeError (the var is hoisted as `undefined`, calling it throws). For `let`/`const` — ReferenceError from the TDZ.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the `delete` operator and how does it differ from setting a property to `undefined`?",
    a: "`delete obj.prop` removes the property from the object entirely — `'prop' in obj` becomes false. Setting `obj.prop = undefined` leaves the property present but with value `undefined` — `'prop' in obj` is still true. Use `delete` when you need the key gone.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the result of `null + 1` and `undefined + 1`?",
    a: "`null + 1` → `1` (null coerces to 0 in numeric context). `undefined + 1` → `NaN` (undefined coerces to NaN in numeric context). Memorize: null is 'zero', undefined is 'nothing computable'.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between `in` and `hasOwnProperty`?",
    a: "`in` checks if a property exists anywhere in the prototype chain. `hasOwnProperty` checks only the object's OWN properties (not inherited). Example: `'toString' in {}` → true (inherited). `{}.hasOwnProperty('toString')` → false.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between `Object.create(null)` and `{}`?",
    a: "`{}` has `Object.prototype` as its prototype, inheriting methods like `toString`, `hasOwnProperty`, etc. `Object.create(null)` creates a completely bare object with NO prototype — useful for pure hash maps where you don't want inherited properties to interfere.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What will print? `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); }`",
    a: "Prints `3` three times. `var` is function-scoped — there's only one `i`. All three callbacks run after the loop finishes, at which point `i === 3`. Fix: use `let` (block-scoped, each iteration gets its own `i`) or wrap in an IIFE to capture the value.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What will `var a = 10; function foo() { console.log(a); var a = 20; } foo();` log?",
    a: "`undefined`. Inside `foo()`, `var a` is hoisted to the top of the function, shadowing the outer `a`. At the time of `console.log(a)`, the local `a` exists but hasn't been assigned yet — it's `undefined`. The outer `a = 10` is never seen.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What happens if you declare two functions with the same name in the same scope?",
    a: "The second declaration overwrites the first. Both are hoisted, but later declarations win. This is another footgun of function declarations — in strict mode or with `let`/`const` you'd get an error; with function declarations you just silently lose the first.",
    img: null
  },

  // ── Closures & Functions ──
  {
    cat: "JavaScript Fundamentals",
    q: "What is a pure function?",
    a: "A function that: (1) given the same inputs always returns the same output, and (2) has no side effects (doesn't modify external state, doesn't do I/O). Pure functions are predictable, testable, and safe to memoize. Example: `const add = (a, b) => a + b`. Impure: a function that modifies a global or calls `Math.random()`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "Why can't arrow functions be used as constructors?",
    a: "Arrow functions lack a `[[Construct]]` internal method and have no own `this` binding. Calling `new ArrowFn()` throws `TypeError: ArrowFn is not a constructor`. Use regular function declarations or `class` syntax for constructors.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How do closures help with data privacy?",
    a: "A closure can enclose variables that are not accessible from outside, exposing only privileged functions. Classic pattern: `function makeCounter() { let count = 0; return { inc: () => ++count, get: () => count }; }` — `count` is private; only `inc` and `get` can touch it.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What happens in: `const add = (x) => (y) => x + y; console.log(add(5)(3));`",
    a: "Logs `8`. This is currying — `add(5)` returns a function that closes over `x=5`. Calling that function with `(3)` computes `5+3`. Each call takes one argument. Useful for partial application and composing functions.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What happens if you call a function with more or fewer arguments than defined?",
    a: "More arguments: extras are silently ignored by named parameters but accessible via the `arguments` object or rest params (`...args`). Fewer arguments: missing ones are `undefined` inside the function. Default parameter values (`function f(x = 0)`) handle the 'fewer' case gracefully.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is currying in JavaScript?",
    a: "Transforming a function that takes multiple arguments into a chain of functions each taking one argument. `f(a, b, c)` becomes `f(a)(b)(c)`. Useful for partial application and point-free programming. Example: `const multiply = a => b => a * b; const double = multiply(2);`",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is debouncing vs throttling?",
    a: "Debounce: delays execution until a pause in activity — runs the function only after the caller stops calling it for N ms. Use case: search-as-you-type. Throttle: ensures the function runs AT MOST once per interval — doesn't wait for silence. Use case: scroll events. Both prevent functions from firing too rapidly.",
    img: null
  },

  // ── Prototypes & OOP ──
  {
    cat: "JavaScript Fundamentals",
    q: "What is `__proto__` vs `prototype`?",
    a: "`prototype` is a property on constructor functions — it's the object that becomes the `[[Prototype]]` of instances created with `new`. `__proto__` (or `Object.getPrototypeOf()`) is the actual prototype link on every object. `instance.__proto__ === Constructor.prototype` is true for instances.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What will this log? `function A() {} A.prototype.x = 10; const b = new A(); console.log(b.x);`",
    a: "Logs `10`. `b` is an instance of `A`. It doesn't have its own `x` property, so JS walks up the prototype chain to `A.prototype`, finds `x = 10`, and returns it. This is prototypal inheritance in action.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between `Object.assign()` and spread `{...obj}`?",
    a: "Both shallow-copy own enumerable properties. Key differences: `Object.assign(target, source)` mutates the target and invokes setters; spread `{...obj}` creates a new object literal and doesn't invoke setters. Spread is generally preferred for its clarity and immutability.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between `call()`, `apply()`, and `bind()`?",
    a: "`call(thisArg, arg1, arg2)`: invokes the function immediately with given `this` and individual args. `apply(thisArg, [args])`: same but args passed as array. `bind(thisArg, ...args)`: returns a NEW function permanently bound to `this` (and optionally preset args) — not invoked immediately.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is shadowing in JavaScript?",
    a: "When an inner scope declares a variable with the same name as an outer scope, the inner declaration 'shadows' (hides) the outer one within that inner scope. The outer variable still exists; you just can't reach it by name from inside. Common source of bugs with `var` and hoisting.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between `for...in` and `for...of`?",
    a: "`for...in` iterates over the enumerable PROPERTY NAMES (keys) of an object — includes inherited keys. `for...of` iterates over the VALUES of any iterable (arrays, strings, Maps, Sets, generators). Don't use `for...in` on arrays — use `for...of` or `.forEach()`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the output: `let obj = { a: 1 }; let copy = obj; copy.a = 2; console.log(obj.a);`",
    a: "Logs `2`. `copy = obj` copies the REFERENCE, not the object. Both `obj` and `copy` point to the same object in memory. Mutating through either variable affects both. To avoid this, create a copy: `let copy = { ...obj }` or `Object.assign({}, obj)`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How does `instanceof` work internally?",
    a: "`instanceof` walks the object's prototype chain looking for `Constructor.prototype`. If found anywhere in the chain, returns `true`. Example: `[] instanceof Array` → true because `Array.prototype` is in `[]`'s chain. Can be fooled across iframes (different global objects).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "Can you override `toString()` on an object?",
    a: "Yes — define a `toString()` method directly on the object or its prototype. JS calls it automatically during string coercion. Example: `const obj = { name: 'Tom', toString() { return this.name; } }; console.log('Hello ' + obj);` → `'Hello Tom'`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between a class and a constructor function?",
    a: "Classes are syntactic sugar over constructor functions with stricter semantics: cannot be called without `new` (throws TypeError), methods are non-enumerable by default, and the `class` body always runs in strict mode. Under the hood, `class Foo {}` still creates a function and attaches methods to `Foo.prototype`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How does `super()` work in JavaScript classes?",
    a: "`super()` calls the parent class constructor from within the child class's constructor. MUST be called before accessing `this` in a derived class — otherwise ReferenceError. `super.method()` calls a parent method from anywhere in the child class.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What are static methods in JS classes?",
    a: "Methods defined with the `static` keyword belong to the class itself, not instances. Called as `ClassName.method()`, not `instance.method()`. Useful for factory methods and utility functions. Static methods are not in the prototype chain of instances.",
    img: null
  },

  // ── Async & Event Loop ──
  {
    cat: "JavaScript Fundamentals",
    q: "What are microtasks and macrotasks (task queue)?",
    a: "Macrotasks (task queue): setTimeout, setInterval, I/O callbacks — scheduled for a future event loop iteration. Microtasks (microtask queue): Promise `.then()`, `queueMicrotask()`, MutationObserver — run AFTER the current task completes but BEFORE the next macrotask. Order: sync code → microtasks → macrotask → microtasks → ...",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the output? `console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');`",
    a: "A, D, C, B. Synchronous first: A, D. Then microtasks (Promise): C. Then macrotask (setTimeout): B. The promise microtask always runs before the setTimeout macrotask, even with 0ms delay.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What are `Promise.all`, `Promise.allSettled`, and `Promise.race`?",
    a: "`Promise.all([...])`: resolves when ALL resolve; rejects immediately if ANY rejects (fast-fail). `Promise.allSettled([...])`: waits for ALL to settle (resolve or reject) — returns array of `{status, value/reason}`. `Promise.race([...])`: resolves or rejects with the FIRST settled promise.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does `async function test() { return 1; } console.log(test());` log?",
    a: "Logs a Promise object (e.g., `Promise { <fulfilled>: 1 }`). `async` functions always return a Promise — if you return a plain value, it's wrapped in `Promise.resolve(value)`. To get `1` you need `await test()` inside another async function.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What happens if you `await` a non-Promise value?",
    a: "It's wrapped in `Promise.resolve(value)` and the async function resumes in the next microtask checkpoint. Effectively a no-op wait, but it still yields to the event loop once. `await 42` is valid JS.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What will happen if you don't handle a rejected Promise?",
    a: "An unhandled rejection triggers an `unhandledrejection` event in browsers (and a warning/exit in Node.js). In modern Node, it may terminate the process. Always add `.catch()` or `try/catch` around `await`. Use `window.onunhandledrejection` to catch any that slip through.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What happens when `await` is used in a non-async function?",
    a: "SyntaxError — `await` is only valid inside an `async` function. Exception: top-level `await` is supported in ES modules (`.mjs` files or `type='module'` scripts). In regular scripts or CommonJS modules, `await` outside async throws at parse time.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How can you cancel a Promise?",
    a: "Native Promises have no cancellation API. Common patterns: (1) `AbortController` — pass its signal to `fetch()` or custom logic; (2) External flag — check a `cancelled` boolean inside the promise chain; (3) Wrapper libraries (p-cancelable). Design for cancellation from the start; retrofitting is painful.",
    img: null
  },

  // ── Modules & Advanced Patterns ──
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between CommonJS and ES Modules?",
    a: "CommonJS (`require`/`module.exports`): synchronous, loads at runtime, used in Node.js. ES Modules (`import`/`export`): static (imports resolved at parse time), async-capable, support tree-shaking. In Node.js, ESM files use `.mjs` or `\"type\": \"module\"` in package.json. ESM is the future standard; CJS is legacy Node.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What are generators in JavaScript?",
    a: "Functions defined with `function*` that can pause (`yield`) and resume. They return an iterator. Each call to `.next()` runs until the next `yield`, returning `{ value, done }`. Use cases: lazy sequences, infinite data streams, cooperative async flows (older style before async/await).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the output: `function* gen() { yield 1; yield 2; } const g = gen(); console.log(g.next());`",
    a: "Logs `{ value: 1, done: false }`. The generator runs until the first `yield 1`, pauses, and returns that value. Call `g.next()` again for `{ value: 2, done: false }`, then again for `{ value: undefined, done: true }`.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What's the difference between `WeakMap` and `Map`?",
    a: "WeakMap: keys must be objects, holds WEAK references (GC can collect keys with no other references — prevents memory leaks). Not iterable, no `.size`. Map: strong references to keys of any type, iterable, has `.size`. Use WeakMap for associating data with DOM nodes or objects you don't own.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How does garbage collection work in JavaScript?",
    a: "Most engines use mark-and-sweep: starting from 'roots' (global variables, stack), mark all reachable objects. Unmarked objects are collected. Modern engines add optimizations: generational GC (young objects collected more often), incremental marking, and hidden classes. WeakMap/WeakRef allow GC even when you hold a reference.",
    img: null
  },

  // ── Udemy Q22 batch (Sep 30, 2026) ──
  {
    cat: "JavaScript Fundamentals",
    q: "How do you check the length of a string?",
    a: "str.length — NOT str.length(). length is a property, not a method. Adding () throws TypeError: str.length is not a function.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the correct way to create a Symbol?",
    a: "Symbol(\"desc\") — never new Symbol() (TypeError: Symbol is not a constructor). Every call is unique: Symbol(\"x\") === Symbol(\"x\") is false.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is localStorage?",
    a: "Browser key-value storage that persists after the browser is closed. Origin-scoped, synchronous, strings only (use JSON.stringify/parse for objects). sessionStorage = same API but cleared when the tab closes.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "Which function converts a string to an integer?",
    a: "parseInt() — parses left to right and stops at the first non-digit. parseInt(\"5ee\") = 5, parseInt(\"ee5\") = NaN, parseInt(\"3.9\") = 3 (truncates). Pass a radix: parseInt(str, 10).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does this code demonstrate, and what is the output?\n\nfunction createMultiplier(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\nconst double = createMultiplier(2);\nconsole.log(double(5));",
    a: "Output: 10. A closure — the inner function remembers factor (2) even after createMultiplier has returned.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What does Object.freeze() do?",
    a: "Makes the object immutable — properties cannot be added, removed or changed (silently fails in sloppy mode, TypeError in strict mode). It is SHALLOW: nested objects can still be mutated.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the output?\n\nconst obj = {\n    count: 10,\n    doSomething: function() {\n        console.log(this.count);\n    },\n    doAnother: () => {\n        console.log(this.count);\n    }\n};\nobj.doSomething();\nobj.doAnother();",
    a: "10, then undefined. A regular function gets this from the caller (obj). An arrow function has no own this — it inherits from the outer scope. In a classic script that's window, and window.count is undefined. (In an ES module top-level this is undefined, so this.count would throw a TypeError.)",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How do you copy an object?",
    a: "const copy = { ...original } — spread into a new object literal (or Object.assign({}, original)). Both are SHALLOW copies: nested objects are still shared. For a deep copy use structuredClone(original).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the output?\n\nlet x = 10;\nfunction change() {\n    x = 20;\n}\nchange();\nconsole.log(x);",
    a: "20. No let inside the function, so x = 20 looks outward and reassigns the outer x (let looks out but not in). If the function said let x = 20, it would create a new local x that shadows the outer one, and the output would be 10.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the output?\n\nfunction test(x = 1, y = 2) {\n    console.log(x + y);\n}\ntest(undefined, 3);",
    a: "4. Passing undefined triggers the default (x = 1), so 1 + 3 = 4. Only undefined triggers defaults — null does not (null + 3 = 3).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "How do you merge arrays?",
    a: "[...array1, ...array2] — spread into a new array. array1.concat(array2) also works. Both return a new array without mutating the originals (shallow: nested objects are shared).",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the purpose of the this keyword?",
    a: "It refers to the current execution context — the object that called the function. Regular functions get this at call time; arrow functions inherit this from where they were defined.",
    img: null
  },
  {
    cat: "JavaScript Fundamentals",
    q: "What is the output?\n\nfunction test() {\n    return\n    { name: \"John\" };\n}\nconsole.log(test());",
    a: "undefined. Automatic Semicolon Insertion (ASI) puts a ; right after return, so the function returns undefined and the object below is dead code. Always put the opening { on the same line as return. Same trap for break, continue and throw.",
    img: null
  },

  // ── Udemy Intermediate Quiz 1 (UdemyQ-I1) ── added 2026-10-13
  {
    cat: "Udemy Intermediate",
    q: "Which statement about arrow functions is TRUE?\n a. They have a prototype property\n b. They have their own this binding\n c. They can be used as constructors\n d. They don't have an arguments object",
    a: "d. They don't have an arguments object. Arrow functions are stripped-down functions: no own this (they inherit it from the enclosing scope), no arguments object (use ...args), no .prototype property, and no new. They DO have a prototype chain ([[Prototype]] = Function.prototype, which is where .call and .bind come from). Family model: an arrow function has a parent but can't have children.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nPromise.resolve(1)\n  .then((x) => x + 1)\n  .then((x) => {\n    throw new Error(\"Error\");\n  })\n  .catch(() => 3)\n  .then((x) => x + 1)\n  .then(console.log);",
    a: "4. The chain starts at 1, becomes 2, then the throw rejects the chain. .catch(() => 3) handles the error and returns 3, which puts the chain back on the fulfilled track. The next .then adds 1, so 4 is logged. Promise.resolve(1) is not the error; the throw two steps later is.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is the output order?\n\nconsole.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");",
    a: "1, 4, 3, 2. Synchronous code runs first (1, 4), then microtasks (the Promise .then: 3), then macrotasks (setTimeout: 2). A 0 ms setTimeout still waits behind every queued microtask.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is the output order?\n\nconsole.log(\"Start\");\nPromise.resolve().then(() => console.log(\"Promise\"));\nsetTimeout(() => console.log(\"Timeout\"), 0);\nconsole.log(\"End\");",
    a: "Start, End, Promise, Timeout. Synchronous first, then microtasks (Promise), then macrotasks (setTimeout). The order the lines are written in doesn't matter; the queue they land in does.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nconst obj = {\n  count: 0,\n  increment() {\n    setTimeout(function () {\n      this.count++;\n      console.log(this.count);\n    }, 100);\n  },\n};\nobj.increment();",
    a: "NaN. setTimeout calls the regular callback as a bare function, so this is window (sloppy mode), not obj. window.count is undefined, and undefined++ gives NaN. obj.count stays 0. Fixes: use an arrow function (inherits this from increment), const self = this, or .bind(this). The arrow function is the modern answer.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nfunction createCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter() + counter());",
    a: "3. The inner function closes over count, so the same variable persists between calls. The first call returns 1, the second returns 2, and 1 + 2 = 3.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nconst person = {\n  name: \"John\",\n  greet: function () {\n    console.log(`Hello, ${this.name}`);\n  }\n};\nconst greet = person.greet;\ngreet();",
    a: "Quiz answer: \"Hello, undefined\". const greet = person.greet copies the reference, not the object, so greet() is a bare call with nothing left of the dot: this is the global object. Real-world gotcha: in a BROWSER the output is \"Hello, \" because window.name is a built-in property that defaults to an empty string. In strict mode this is undefined and it throws a TypeError. Fix: person.greet() or person.greet.bind(person).",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nasync function test() {\n  return await Promise.resolve(42);\n}\ntest().then(console.log);",
    a: "42. await unwraps the resolved promise to 42, return re-wraps it (an async function always returns a Promise), and .then reaches in and passes 42 to console.log. The await is redundant here but not wrong.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nclass Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a sound`; }\n}\nclass Dog extends Animal {\n  speak() { return `${this.name} barks`; }\n}\nconst dog = new Dog(\"Rex\");\nconsole.log(dog.speak());",
    a: "\"Rex barks\". Dog inherits Animal's constructor (so this.name = \"Rex\"), but its own speak() overrides the parent's. The lookup finds Dog's speak first and never reaches Animal's. Call the parent version with super.speak().",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nconst arr = [1, 2, 3];\nconst doubled = arr.forEach((num) => num * 2);\nconsole.log(doubled);",
    a: "undefined. forEach always returns undefined; it runs the callback for side effects and throws the results away. Use map to build a new array: arr.map((num) => num * 2) gives [2, 4, 6]. Quick test: if you assign the result to a variable, you want map. Also: you can't break out of a forEach.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\n\"use strict\";\nfunction test() { console.log(this); }\ntest();",
    a: "undefined. In strict mode, a regular function called bare (nothing left of the dot) gets this = undefined. In sloppy mode it would be window. A regular function doesn't HAVE a this property; it gets a this slot that the CALL fills in. obj.test() would give obj, test.call(\"hi\") would give \"hi\".",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nasync function getData() {\n  return await Promise.reject(\"Error\");\n}\ngetData().catch(console.log);",
    a: "Error. The await throws inside getData, and there's no try/catch, so getData()'s own promise rejects with \"Error\". The outside .catch receives it and logs it. (The console shows Error without quotes.) Compare with the try/catch version: catching inside would make the outer promise FULFILL instead.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nasync function asyncFunc() {\n  try {\n    const result = await Promise.reject(\"Failed\");\n    return \"Success\";\n  } catch (error) {\n    return \"Caught: \" + error;\n  }\n}\nasyncFunc().then(console.log);",
    a: "\"Caught: Failed\". await is the switch: on rejection the await line throws and control jumps to catch, skipping return \"Success\". Twist: asyncFunc() itself comes back FULFILLED, because returning from catch marks the error as handled; an outer .catch() would never fire. Re-throw in catch if the caller needs to know. Promise.reject() is a quiz shortcut; real code awaits something still in progress, like fetch.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nconst map = new Map();\nmap.set(\"a\", 1);\nmap.set(\"b\", 2);\nconsole.log(map.get(\"a\") + Array.from(map.values())[1]);",
    a: "3. map.get(\"a\") is 1. map.values() is an iterator (it can't be indexed), so Array.from turns it into [1, 2], and index [1] is the 2nd value set: 2. Both are numbers, so + adds: 1 + 2 = 3. Maps keep insertion order, which is what makes index [1] reliable. Shorter: [...map.values()][1].",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is logged?\n\nconst obj = {\n  value: 42,\n  getValue: () => this.value,\n};\nconsole.log(obj.getValue());",
    a: "undefined. Arrow functions have no own this; they inherit it from where they were WRITTEN. The object literal is not a scope, so this comes from the outer (global) scope, where value doesn't exist. Use a regular method instead: getValue() { return this.value; } gives 42.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "Which is TRUE about call and apply?",
    a: "call takes arguments comma-separated, apply takes them as an array. fn.call(thisArg, a, b) and fn.apply(thisArg, [a, b]) both run the function immediately with this set to thisArg. Memory hook: Apply = Array. bind is different: it returns a new function with this locked in, and doesn't run it.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "Which feature distinguishes a JavaScript Map from a regular object in terms of key types?\n a. Keys can be of any data type\n b. Keys must be predefined before usage\n c. Keys are limited to numeric values only\n d. Keys must always be strings only",
    a: "a. Map keys can be any type: numbers, objects, functions, even NaN. Object keys are always strings or Symbols (obj[1] is stored as \"1\").",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What happens when the same key is inserted again into a JavaScript Map?\n a. It ignores the new value silently\n b. It overwrites the existing value\n c. It throws an error during insertion\n d. It creates a duplicate key entry",
    a: "b. It overwrites the existing value. Keys are unique; map.set(\"a\", 1) then map.set(\"a\", 99) leaves one entry, a =&gt; 99, and the key keeps its original insertion position.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "Which method is used to check if a key exists in a JavaScript Map?\n a. contains(key)\n b. exists(key)\n c. check(key)\n d. has(key)",
    a: "d. map.has(key) returns true or false. Cleaner than obj.hasOwnProperty(key) for objects. Related: map.get(key), map.set(key, value), map.delete(key) (returns true/false), map.clear(), map.size (a property, no parentheses).",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "How can a JavaScript Map be created with initial key-value pairs?\n a. Using Map.create with key-value pairs\n b. Using new Map with object literals\n c. Using new Map with an array of pairs\n d. Using the set method inside the constructor",
    a: "c. new Map([[\"a\", 1], [\"b\", 2]]) takes an array of [key, value] pairs. From an object: new Map(Object.entries(obj)). Back to an object: Object.fromEntries(map).",
    img: null
  },
  {
    cat: "Udemy Intermediate",
    q: "What is the average time complexity of search, insert and delete in a Map?\n a. O(n log n)\n b. O(n)\n c. O(log n)\n d. O(1)",
    a: "d. O(1) on average: Maps are hash tables, so lookup time doesn't grow with the number of entries. That's why map.size is instant too, while Object.keys(obj).length has to build an array first.",
    img: null
  },
  {
    cat: "Udemy Intermediate",
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