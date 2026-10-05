# Sprout

A mobile-first landing page for a fictional plant-watering app. Plain HTML, CSS, and JavaScript; no dependencies or build step.

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

For GitHub Pages, publish the branch containing these files from its root directory. All assets use relative paths, so the site also works at a project sub-folder URL.

## Images

The built-in image generation tool created the green-and-cream gouache illustrations. Final assets live in `images/`:

- `hero-plant-small.webp` (600×640) and `hero-plant.webp` (900×960): responsive happy plant being watered.
- `feature-reminders.webp`, `feature-pace.webp`, and `feature-tracking.webp` (600×400): the three feature illustrations.
- `demo-fern.webp` (600×400): Fernanda in the interactive preview.
- `social-preview.jpg` (1200×630): Open Graph and Twitter link-sharing card.
- `sprout-mark.svg`: brand mark and favicon.

The hero uses responsive sources and high fetch priority; below-the-fold illustrations load lazily. Page illustrations total about 137–157 KiB per visit depending on the chosen hero size. The social card is about 95 KiB and is not downloaded as part of the visible page.

Set `og:image` and `twitter:image` in `index.html` to the absolute public URL of `images/social-preview.jpg` once the deployment address is known. They currently use a relative path; some social crawlers require an absolute URL.

Generation prompts are recorded in [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md).

## Interactive preview

The watering button updates the sample plant card, and “Try again” resets it. This state lasts only until the page reloads. The preview does not schedule notifications, save personal data, or connect to a backend. The FAQ works without JavaScript.
