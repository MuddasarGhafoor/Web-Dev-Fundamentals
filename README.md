# Web Development Fundamentals

> A progressive collection of HTML, CSS, and JavaScript exercises covering core front-end concepts and browser APIs.

![HTML Pages](https://img.shields.io/badge/HTML_Pages-42-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript Lessons](https://img.shields.io/badge/JavaScript_Lessons-34-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS Chapters](https://img.shields.io/badge/CSS_Chapters-9-1572B6?style=flat-square&logo=css3&logoColor=white)
![Level](https://img.shields.io/badge/Level-Beginner-orange?style=flat-square)

This repository records my early web-development practice while learning HTML, CSS, and JavaScript. It begins with document structure and semantic HTML, continues through layout and responsive CSS, and finishes with JavaScript fundamentals, asynchronous programming, and browser storage APIs.

Each file is a small, focused exercise. The collection is preserved as a record of the learning sequence rather than as one combined website.

## Repository Overview

```text
Web-Dev-Fundamentals/
├── 01_HTML/
├── 02_CSS/
├── 03_JavaScript/
├── .gitignore
└── README.md
```

## Learning Roadmap

| Section | Main Concepts | Exercises |
|---|---|---:|
| `01_HTML` | Document structure, headings, links, images, layout, lists, tables, forms, video, and SEO basics | 9 pages |
| `02_CSS` | Selectors, colors, backgrounds, box model, text, positioning, units, floats, Flexbox, Grid, media queries, transforms, transitions, and animations | 32 pages |
| `03_JavaScript` | Variables, operators, input, conditions, loops, functions, strings, arrays, DOM/BOM, timers, callbacks, promises, async/await, fetch, cookies, and local storage | 34 lessons |

## HTML Topics

| Chapter | Main Concepts |
|---|---|
| `Chapter_01 - Creating Website` | First HTML document, headings, paragraphs, and comments |
| `Chapter_02 - Basic HTML tags` | Headings, anchors, images, text formatting, subscript, superscript, `div`, and `span` |
| `Chapter_03 - Creating Page Layout` | `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` |
| `Chapter_04 - Lists , Tables and Forms` | Ordered and unordered lists, tables, form controls, and video |
| `Chapter_05 - SEO` | Metadata and semantic page structure |

## CSS Topics

| Chapter | Main Concepts |
|---|---|
| `Chapter 00–01` | First stylesheet, inline/internal/external CSS, cascade, classes, IDs, and selectors |
| `Chapter 02` | Colors, backgrounds, images, sizing, and reset rules |
| `Chapter 03` | Box model, margins, padding, borders, border radius, and box sizing |
| `Chapter 04` | Display, visibility, typography, text properties, and Google Fonts |
| `Chapter 05` | Relative and absolute positioning, sticky headers, viewport units, and min/max sizes |
| `Chapter 06` | Float-based layouts and Flexbox |
| `Chapter 07` | CSS Grid and media queries |
| `Chapter 08` | Transforms, transitions, keyframes, and animations |
| `CSS Properties.html` | A standalone transform-function reference and hover demonstration |

## JavaScript Topics

| Lessons | Main Concepts |
|---|---|
| `01–04` | First program, primitive values, objects, operators, and comments |
| `05–09` | Prompt input, conditions, loops, functions, and strings |
| `10–15` | Arrays, array methods, iteration, `map`, `filter`, and `reduce` |
| `16–20` | Console methods, dialog boxes, window/DOM/BOM, and page styling |
| `21–26` | Timers, synchronous and asynchronous code, callbacks, promises, and Promise APIs |
| `27–30` | `async`/`await`, error handling, error objects, and `finally` |
| `31–34` | Fetch, POST requests, cookies, URI encoding, and local storage |

## Run the Examples

No package installation or build step is required. Open an individual HTML file in a modern browser.

For example, from PowerShell:

```powershell
Start-Process ".\01_HTML\Chapter_01 - Creating Website\index.html"
Start-Process ".\02_CSS\Chapter 07\media.html"
Start-Process ".\03_JavaScript\index.html"
```

The JavaScript files are independent lessons. The current `03_JavaScript/index.html` loads `34_local_storage.js`; change its script source when you want to try another lesson. Lessons that use `prompt`, `alert`, timers, `document.cookie`, `localStorage`, or `fetch` must run in a browser.

## Suggested Learning Order

1. Start with `01_HTML`, following the chapter order from basic document structure through forms and SEO.
2. Continue through `02_CSS` from selectors and the box model to Flexbox, Grid, responsive design, and animation.
3. Work through the numbered JavaScript lessons in `03_JavaScript` from variables and conditions to browser APIs and asynchronous programming.
4. Before running an exercise, read the code, predict the result, then change values and observe what happens.

## Notes

- This is a learning archive. Some exercises intentionally use simple, older, or experimental techniques to demonstrate a particular concept.
- A few CSS pages load external Google Fonts or Unsplash image URLs, so their appearance depends on an internet connection and those services remaining available.
- The HTML, CSS, and JavaScript examples are separate exercises. Do not load all JavaScript lesson files into the same HTML page, because several reuse variable names.
- `.gitignore` excludes operating-system files, editor settings, dependency folders, environment files, and logs.

---

Maintained by **Muddasar Ali Ghafoor** as a personal record of learning, practicing, and improving with web development.
