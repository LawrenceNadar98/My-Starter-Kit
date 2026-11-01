# Idea-to-Product Starter Kit

Plain HTML, CSS (design tokens + utility classes) and a little vanilla JS. No frameworks. Mobile-first. Component names (`card`, `card__body`, `btn--primary`) map directly to React components later.

## Start a new project in 5 steps

1. **Copy the kit.** Copy this whole folder, rename it to your project, then `git init`, commit, and push to a new GitHub repo.
2. **Write your notes.** Open `html-reference.html`, go to "Start here", and copy the NOTES.md template. Fill in the idea sentence, MUST list and pages (steps 1 to 6).
3. **Make your first page.** In `html-reference.html` open Layouts, copy the closest page into `index.html` in the project root.
4. **Swap blocks and text.** Replace blocks with ones from Components (press Copy HTML). Change only the text. Colors, spacing and sizes come from the CSS, so never type raw numbers or hex codes.
5. **Ship it.** Run the launch checklist (`playbook/04-launch-checklist.md`), deploy to Netlify, Vercel or GitHub Pages, and send the link to 3 people.

## Where things are

| File | What it is |
|---|---|
| `html-reference.html` | Open this daily: idea-to-product steps, the HTML recipe, 57 components, 6 page layouts |
| `style-guide.html` | Every design token and base component on one page |
| `css/` | `tokens`, `themes`, `base`, `utilities`, `components`. Load in this order. Keep all five together |
| `js/app.js` | Mobile menu, sidebar, tabs, modal, toast, theme toggle, table filter |
| `playbook/` | The process: checkpoints, MVP template, daily routine, launch checklist, 48-hour example |

## CSS load order
```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/themes.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/utilities.css">
<link rel="stylesheet" href="css/components.css">
```

## The recipe in one line
`<section class="section">` then `<div class="container">` then `<div class="section-head">` then ONE content pattern (`grid-3`, `split` or `stack`).

## Dark mode
Set `data-theme="dark"` on `<html>`, or add a button with `data-theme-toggle`.
