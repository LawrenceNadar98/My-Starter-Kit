# 05 First project in 48 hours: example walkthrough

Example idea: a one-page website for a freelance web developer who builds sites for small shops. Same steps work for any idea. Plan for about 3 hours a day.

## Day 1 (about 3 hours): decide and start

| Time | Step | What you actually do |
|---|---|---|
| 0:00 | 1. Idea sentence (10 min) | "I am building a one-page site for small shop owners so they can see my work and contact me." |
| 0:10 | 2. Problem check (30 min) | Message 3 shop owners: "How do you find someone to build your website?" Find 3 other freelancer sites. Note how yours differs: fixed prices, 2-week delivery. |
| 0:40 | 3. Type (5 min) | Website. No login, no saved data. |
| 0:45 | 4. MVP scope (20 min) | MUST: see services, see prices, contact me. SHOULD: portfolio. WON'T: blog, booking calendar, dark mode toggle. |
| 1:05 | 5. Layout and blocks (20 min) | Open html-reference.html, Layouts > Landing page. Blocks: nav-simple, hero-center, features-grid, pricing-3, faq-accordion, contact, footer-columns. |
| 1:25 | 6. Data (15 min) | Content items: 3 services (name, one sentence), 3 plans (name, price, 3 bullets), 4 FAQs. |
| 1:40 | 7. Repo (15 min) | `cp -r starter-kit shop-site`, `cd shop-site`, `git init`, `git add .`, `git commit -m "start"`, create repo on GitHub, `git remote add origin <url>`, `git push -u origin main`. Paste the idea sentence into README.md. |
| 1:55 | 8a. Thin slice, part 1 (about 1 hour) | Create `index.html` from the Page skeleton. Paste navbar, hero, contact, footer. Write real text. Make the contact form open a mail link or use a form service. |
| 2:55 | Wrap up (5 min) | Phone-width check, commit, push, write tomorrow's first task. |

## Day 2 (about 3 hours): finish, deploy, feedback

| Time | Step | What you actually do |
|---|---|---|
| 0:00 | 8b. Thin slice, part 2 (1 hour 30) | Paste features-grid, pricing-3, faq-accordion. Replace all text. Remove any block you do not need. |
| 1:30 | Launch checklist (30 min) | Go through playbook/04-launch-checklist.md. Search for `href="#"` and fix each one. |
| 2:00 | 9. Deploy (30 min) | Drag the folder to Netlify, or connect the GitHub repo. Open the URL on your phone. |
| 2:30 | 10. Feedback (30 min) | Send the URL to the 3 shop owners from Day 1. Ask the two questions. Write down answers. Pick ONE change. |

## After 48 hours
You have a live URL, a GitHub repo with daily commits, and real feedback. Ship the one change, then start the next idea from step 1.
