# Sprout

A mobile-first landing page for a fictional plant-watering app. Plain HTML, CSS, and JavaScript; no dependencies or build step.

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

For GitHub Pages, publish the branch containing these files from its root directory. All assets use relative paths, so the site also works at a project sub-folder URL.

## Images

`images/hero-plant-placeholder.svg`, `images/demo-plant-placeholder.svg`, and `images/sprig-placeholder.svg` are temporary illustrations. Replace them with real images and update the corresponding `src`, dimensions, and alt text in `index.html`. The sprig is decorative and should keep empty alt text. `images/sprout-mark.svg` is the small brand mark and favicon.

## Interactive preview

The watering button updates the sample plant card, and “Try again” resets it. This state lasts only until the page reloads. The preview does not schedule notifications, save personal data, or connect to a backend. The FAQ works without JavaScript.
