# 12-Week Roadmap: junior full-stack web developer

**Start:** 2026-11-03 · **End:** 2027-01-26 · **Pace:** 3–4 h/day, 6 days/week
**Stack:** JavaScript → TypeScript · HTML/CSS · Node + Express · SQL (PostgreSQL) · React · Git

## The daily routine (3–4 h)
| Block | Time | What |
|---|---|---|
| Learn | 45 min | Read docs or a course section. Write notes **in your own words** in `notes/` |
| Build | 2 h | Exercises or project work. AI may explain, but you type every line |
| Review | 30 min | Get your code reviewed, fix it, commit |
| Log | 5 min | 3 lines in `PROGRESS.md`: what I did, what confused me, what's next |

**Commit every day you code.** Small, honest commits make a GitHub that looks real because it is.

---

## Phase 1: Fundamentals (weeks 1–4)
**Week 1: JS core + Git + terminal**
- Variables, types, operators, conditionals, loops, functions, scope
- Git: init, add, commit, log, diff, branch, merge, push. Make a GitHub repo for this folder
- Terminal: cd, ls, mkdir, running `node file.js`
- ✅ Done when you can write FizzBuzz, reverse a string, and count vowels **with no help**

**Week 2: Data and problem solving**
- Arrays, objects, array methods (map/filter/reduce/find), destructuring, spread
- Debugging: `console.log`, VS Code debugger, breakpoints, reading stack traces
- 15+ easy problems (Exercism JS track or LeetCode Easy)
- ✅ Done when you can explain what `reduce` does without looking it up

**Week 3: The browser**
- HTML semantics, CSS (flexbox, grid), the DOM, events
- Async: callbacks → promises → async/await, `fetch`, JSON
- 🔨 **Mini project:** a weather or todo app in plain JS (no framework) using a public API

**Week 4: Leveling up**
- TypeScript basics: types, interfaces, unions, generics (light)
- Big-O intuition: why a nested loop over 10,000 items is slow, Map/Set vs arrays
- Testing with Vitest: write tests for your week 2 functions
- 🔨 Port the mini project to TypeScript

## Phase 2: Real projects (weeks 5–10)
**Week 5: Backend**
- Node, npm, Express, REST (routes, status codes, middleware), env variables
- SQL: SELECT/INSERT/UPDATE/DELETE, JOIN, indexes. PostgreSQL locally
- 🔨 A REST API for something you care about, with CRUD and a database

**Week 6: React**
- Components, props, state, effects, lists and keys, forms, fetching data
- Vite, React Router
- 🔨 A frontend for your week 5 API

**Weeks 7–8: Portfolio Project #1 (full-stack, your own idea)**
- Plan first: a one-page spec, data model, list of features (MVP vs later)
- Auth (sessions or JWT, and **why** passwords are hashed), validation, error handling
- Deploy it (Render/Railway for the API, Vercel/Netlify for the frontend)
- ⭐ **First hackathon** around here. Go even if you feel unready

**Week 9: Code quality**
- Refactoring, naming, separation of concerns, DRY vs over-abstraction
- `code-review-lab/`: critique real open-source code and AI-generated code
- Security basics: SQL injection, XSS, secrets in git

**Week 10: Portfolio Project #2 (or a hackathon project you keep improving)**
- Something with a "wow" angle: real-time (WebSockets), an LLM API, maps or payments
- Tests, CI (GitHub Actions), a proper README with screenshots

## Phase 3: Ship and get seen (weeks 11–12)
**Week 11:** Make your first open-source contribution (a "good first issue"). Polish the README for each project. Get your GitHub profile README written
**Week 12:** Write your CV, LinkedIn, mock interviews (explain each project in 2 minutes, live-code easy problems). Start applying. ⭐ **Second hackathon**

---

## Networking (ongoing)
- Join local dev communities and Discord/Telegram groups. Go to at least 2 meetups
- Find hackathons: Devpost, MLH, Lu.ma and local university events
- Ask your friend to review one project of yours each month. Real feedback beats tutorials

## How to tell good code from bad (and AI code from human code)
You'll train this in `code-review-lab/`. Signs to watch for:
- **AI tells:** comments that restate the code (`// increment i`), overly generic names (`data`, `result`, `handleData`), defensive checks for impossible cases, try/catch that swallows errors, inconsistent style across files, unused imports, "enterprise" abstractions in a 50-line app, every function with the same docstring template
- **Bad code in general:** functions that do 5 things, magic numbers, deep nesting, copy-pasted blocks, mutating shared state, ignoring errors, O(n²) where a Map would give O(n)

## Resources (free)
- **javascript.info**: the best JS reference/tutorial, read in order
- **MDN Web Docs**: the official reference for HTML/CSS/JS
- **The Odin Project** (Full Stack JavaScript path): project-based curriculum
- **Exercism**: JS/TS tracks with human mentor feedback
- **Missing Semester (MIT)**: terminal and git
