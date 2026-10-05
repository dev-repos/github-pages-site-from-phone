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
