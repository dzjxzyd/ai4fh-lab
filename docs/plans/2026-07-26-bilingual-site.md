# Bilingual Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Add an English / Chinese language switcher to the static AI4FH Lab website while keeping names and publication records in English.

**Architecture:** Store translated UI copy in `data.js`, keep the active language in `App` state and `localStorage`, and pass a `t(key)` helper into the page and chrome components. Keep the existing hash router and static React/Babel setup.

**Tech Stack:** Static HTML, React 18 UMD, Babel standalone, plain CSS, localStorage.

---

### Task 1: Add Translation Data

**Files:**
- Modify: `data.js`

Add `window.I18N` with English and Chinese copy for navigation, shared labels, home, research, people, news, join, collaboration, footer, research pillars, and project descriptions.

### Task 2: Add Language State

**Files:**
- Modify: `app.jsx`

Read initial language from `localStorage`, expose `t(key)`, persist language changes, and pass `lang`, `setLang`, and `t` into `TopBar`, `Footer`, and active page components.

### Task 3: Render Bilingual Chrome

**Files:**
- Modify: `chrome.jsx`

Use translated nav and footer labels. Add a compact `English / 中文` switch beside the menu.

### Task 4: Render Bilingual Pages

**Files:**
- Modify: `page-home.jsx`
- Modify: `pages.jsx`

Replace static UI strings with `t(key)`. Keep names and publications in English. Translate eligible research, people, news, join, and collaboration copy.

### Task 5: Verify

Run syntax checks where possible, open the local site, switch languages, and verify no console errors beyond known Babel standalone / favicon messages.
