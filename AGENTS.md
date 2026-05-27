# Repository Guidelines

## Project Structure & Module Organization

This repository is a single-page portfolio website with no build system. `index.html` contains the page structure and portfolio content, `style.css` defines layout, tokens, responsive behavior, and animations, and `script.js` manages navigation, filters, form behavior, and scroll effects. `mixitup.min.js` is a vendored browser dependency; do not edit it directly.

Store media in the established folders: `img/web/` for web project previews, `img/new-mobile/` for current mobile screenshots, `img/event/` for event photos, and `img/certificate/` for certificates. Root-level images and `CV-Rangga Dwi Saputra.pdf` are public site assets referenced from HTML.

## Build, Test, and Development Commands

There is no `package.json`, compilation step, or automated test suite. Preview changes from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` and verify navigation, portfolio filtering, contact form presentation, and mobile layout. For repository inspection in agent workflows, prefix shell commands with `rtk`, for example `rtk git status` or `rtk git diff`.

## Coding Style & Naming Conventions

Match the existing two-space indentation in HTML, CSS, and JavaScript. Keep JavaScript in plain ES5-compatible browser style where surrounding code uses `function` callbacks. CSS follows BEM-like classes such as `.header__nav-link` and modifier forms such as `.btn--primary`; continue that convention. Prefer existing CSS custom properties in `:root` rather than adding repeated color or spacing literals.

Use descriptive asset names and keep references relative, for example `img/web/learninghub.jpg`. Compress large images before committing because media dominates repository size.

## Testing Guidelines

Testing is currently manual. After UI changes, check desktop and narrow viewport behavior, image loading, external/download links, menu open/close interactions, scroll animations, and the project category filter. Confirm the browser console has no new errors.

## Commit & Pull Request Guidelines

Recent commits are short and change-focused, such as `feat: Add 'Learning Hub' and 'PARDP' projects to the portfolio.` and `Optimize images for faster loading`. Use concise imperative subjects; add a conventional prefix such as `feat:` or `fix:` when it clarifies intent.

Pull requests should describe visible changes, list manual checks performed, and include before/after screenshots for layout, styling, or asset updates. Avoid committing `.DS_Store` or unrelated image churn.
