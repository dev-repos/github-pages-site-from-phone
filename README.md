# Sprout

A mobile-first landing page for a fictional plant-watering app. Plain HTML, CSS, and JavaScript; no dependencies or build step.

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Deployment

The site is published at https://dev-repos.github.io/github-pages-site-from-phone/ by [the Pages workflow](.github/workflows/pages.yml) on every push to `main`. It can also be run manually from the Actions tab. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** once before the first deployment.

The workflow stages only `index.html`, `styles.css`, `script.js`, and `images/` into the Pages artifact; `README.md` and `IMAGE-PROMPTS.md` are not published. No build step is needed. Assets use relative paths to work under the project URL.

## Images

The built-in image generation tool created the green-and-cream gouache illustrations. Final assets live in `images/`:

- `hero-plant-small.webp` (600×640) and `hero-plant.webp` (900×960): responsive happy plant being watered.
- `feature-reminders.webp`, `feature-pace.webp`, and `feature-tracking.webp` (600×400): the three feature illustrations.
- `demo-fern.webp` (600×400): Fernanda in the interactive preview.
- `social-preview.jpg` (1200×630): Open Graph and Twitter link-sharing card.
- `sprout-mark.svg`: brand mark and favicon.

The hero uses responsive sources and high fetch priority; below-the-fold illustrations load lazily. Page illustrations total about 137–157 KiB per visit depending on the chosen hero size. The social card is about 95 KiB and is not downloaded as part of the visible page.

Open Graph and Twitter metadata use the absolute GitHub Pages URL for `images/social-preview.jpg`.

Generation prompts are recorded in [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md).

## Interactive preview

The watering button updates the sample plant card, and “Try again” resets it. This state lasts only until the page reloads. The preview does not schedule notifications, save personal data, or connect to a backend. The FAQ works without JavaScript.

## Built from a phone

Every change in this repo was made by Codex, driven from the ChatGPT app with remote control (Codex running on our own computer, Default permissions). Each step is tagged; check out a tag to start from that point.

| Tag | Step |
|-----|------|
| `step-01` | Build the site |
| `step-02` | Images made by Codex |
| `step-03` | Mobile-friendly pass |
| `step-04` | Publish with GitHub Pages |

The prompts, word for word, in order:

1. **Build the site** (`step-01`)

   > Build a one-page static website in this folder for a made-up app called "Sprout" that reminds you to water your plants. Plain HTML, CSS and JavaScript, no build step, no frameworks. Sections: a hero with a call-to-action, three features, "how it works" in 3 steps, a short FAQ and a footer. Mobile-first, it should look great on a phone; dark green and cream colours. Use relative paths everywhere so it works from a sub-folder on GitHub Pages. Put image placeholders in an images/ folder for now: I will ask for the real images next.

2. **Images made by Codex** (`step-02`)

   > Now replace the image placeholders with real images. Use your built-in image generation to make: a hero illustration of a happy potted plant being watered, one illustration for each of the three features, and a social preview image (1200x630) for link sharing. Keep the same dark green and cream style as the page. Save them in images/, make them small enough for a fast phone load, wire them into the page with good alt text, add the social preview as the og:image, and remove the placeholders you no longer need.

3. **Mobile-friendly pass** (`step-03`)

   > Make sure the site is properly mobile friendly. Check it at 320, 360, 390 and 430 px wide: no sideways scrolling, every link and button at least 44x44 px to tap, body text at least 16 px and nothing under 14 px, images sized for small screens, and the FAQ and the watering preview easy to use with a thumb. It must still look good on a laptop. Fix anything that fails and tell me what you changed.

4. **Publish with GitHub Pages** (`step-04`)

   > Publish this site with GitHub Pages. The repo is github.com/dev-repos/github-pages-site-from-phone, so the live address will be https://dev-repos.github.io/github-pages-site-from-phone/. Add a GitHub Actions workflow that deploys the site to Pages on every push to main (only the site files, not README or IMAGE-PROMPTS.md), use that address for the og:image and og:url, and add a short README section on how it is deployed. Then commit and push.

Step 4's commit and push were done after approving them: Default permissions blocked network access and git writes, as intended.

Video walkthrough: AI System Design Deep Dive on YouTube ([@AI.JoinDev](https://www.youtube.com/@AI.JoinDev)).
