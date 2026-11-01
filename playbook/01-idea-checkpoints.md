# 01 Idea checkpoints

Ten steps from raw idea to live product. Do them in order. Do not move on until the "Done-test" is true.

## 1. Write the idea in one sentence
- **Goal:** Turn the fuzzy idea into one clear sentence.
- **Exact action:** Fill in: "I am building [product] for [who] so they can [result]." Pick a working name. You can change it later.
- **Done-test (yes/no):** A friend can repeat it back in one breath.
- **Common trap:** Describing features ("it has login, charts...") instead of the person and their result.
- **Time:** 10 min

## 2. Check the problem is real
- **Goal:** Know that someone actually has this problem.
- **Exact action:** Send one question to 3 people who fit the "[who]" in your sentence: "How do you handle [problem] today?" Then find 3 existing alternatives and write one line on how yours differs.
- **Done-test (yes/no):** You have 3 replies or 3 alternatives written down.
- **Common trap:** Asking "Would you use this?" People say yes to be polite. Ask what they do today.
- **Time:** 30 min + waiting

## 3. Choose the product type
- **Goal:** Decide what you are building.
- **Exact action:** Answer one question: does a visitor need to log in or save data? No: build a website (HTML, CSS, JS, free hosting). Yes: build a web app (design the screens first, add the backend later).
- **Done-test (yes/no):** You wrote "website" or "web app" at the top of your notes.
- **Common trap:** Choosing a web app when a website with a contact form is enough.
- **Time:** 5 min

## 4. Scope the MVP
- **Goal:** Decide the smallest version a first user can use.
- **Exact action:** List every feature you imagine. Sort them into MUST (max 3), SHOULD and WON'T for now. Rule: cut anything the first user does not need to get the result.
- **Done-test (yes/no):** MUST has 3 items or fewer, and a WON'T list exists.
- **Common trap:** "Just one more feature." If it is not needed on day one, it goes to WON'T.
- **Time:** 20 min

## 5. Pick the layout and blocks
- **Goal:** Know every page and its sections before writing any HTML.
- **Exact action:** Open Layouts (part 3) and pick the closest page. For each page, write a numbered list of blocks from Components, in order.
- **Done-test (yes/no):** Every page has a numbered block list.
- **Common trap:** Designing from imagination. Only pick blocks that exist in the reference. Adjust later.
- **Time:** 20 min

## 6. Sketch the data (nouns only)
- **Goal:** Know what information the product holds.
- **Exact action:** List the things (User, Project, Invoice) and 3 to 5 fields under each. For a website, list the content items (services, posts) and their fields. Maximum 4 things.
- **Done-test (yes/no):** Each thing has a short field list, and you can say how they connect ("a User has many Projects").
- **Common trap:** Modelling future features. Only what the MUST list needs.
- **Time:** 25 min

## 7. Create the repo from the kit
- **Goal:** Have a safe home for the project from minute one.
- **Exact action:** Copy the starter-kit folder and rename it. Run git init, commit "start", create a GitHub repo, push. Paste your idea sentence at the top of README.md.
- **Done-test (yes/no):** The repo is on GitHub and the README shows your sentence.
- **Common trap:** Waiting until it is "ready" to push. Push on day one, then every day.
- **Time:** 15 min

## 8. Build the thin slice
- **Goal:** Make ONE path work from start to finish, even if it is ugly.
- **Exact action:** Pick the single most important flow: visitor lands, reads, clicks contact; or user adds one item and sees it in a list. Paste blocks from the reference, replace the text, wire only that flow.
- **Done-test (yes/no):** You can show a friend the main flow end to end, with real text and no lorem ipsum.
- **Common trap:** Polishing the navbar or colors first. The kit already decided the look.
- **Time:** 1 to 2 days (1 to 2 h/day)

## 9. Deploy early
- **Goal:** Get a live link while the project is still small.
- **Exact action:** Deploy to Netlify, Vercel or GitHub Pages (drag the folder in, or connect the repo).
- **Done-test (yes/no):** The live URL opens on your phone.
- **Common trap:** Leaving deployment for last. Problems are much easier to fix on a small project.
- **Time:** 30 min

## 10. Get first feedback
- **Goal:** Learn what a real person does with it.
- **Exact action:** Send the URL to the 3 people from step 2. Ask: "What did you expect to happen?" and "What confused you?" Write the answers down, choose ONE change, ship it, send the update.
- **Done-test (yes/no):** You have 3 answers and one change deployed.
- **Common trap:** Defending the idea, or fixing everything at once. One change per round.
- **Time:** 30 min + waiting

Rule for new ideas mid-project: write them in the IDEAS list in NOTES.md and go back to building.
