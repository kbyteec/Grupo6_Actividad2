<!-- Auto-generated guidance for AI coding agents. Keep concise and project-specific. -->
# Copilot instructions — Grupo6_Actividad2

This repository is a small static website for a class activity. Below are the facts and patterns an AI coding agent should use to be productive immediately.

- Primary entry: `index.html` at repository root.
- Static assets: `public/` (third-party libraries in `public/vendor/`, custom CSS in `public/css/`, custom JS in `public/js/`).

Key facts and rationale
- This is a plain static site (no build tool, no Node/webpack). Changes are applied directly to HTML/CSS/JS files.
- Bootstrap is vendored under `public/vendor/bootstrap-5.3.8-dist/`. The project links to the local vendor files; do not replace these links with CDN URLs unless you update the references across HTML files.

Files to inspect when making changes
- `index.html` — the canonical entry page (contains `<link href="public/vendor/bootstrap-5.3.8-dist/css/bootstrap.min.css" ...>` and the bundle `<script src="public/vendor/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js"></script>`).
- `public/css/styles.css` — project custom styles (simple selectors like `h1`, `.titulo`, `#titulo_adios`).
- `public/js/` — currently empty (contains `.gitkeep`); place new JS modules here and reference them from HTML.

Conventions and patterns
- Vendor libraries are stored under `public/vendor/` and referenced by relative paths from HTML. When adding a library, follow this pattern and keep the directory name versioned (e.g. `bootstrap-5.3.8-dist`).
- Custom CSS lives in `public/css/styles.css`. Prefer adding small component-level selectors here rather than editing vendor files.
- Keep markup simple and semantic — the project does not use a frontend framework or bundler.

How to run locally (developer workflows)
- Quick (file open): open `index.html` in a browser for static previews.
- Recommended (serves files over HTTP to avoid CORS/asset issues): from project root run:

```bash
# from repo root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Debugging tips specific to this project
- If styles or scripts don't load, verify the relative path from `index.html` (e.g. `public/vendor/…`).
- Use the browser DevTools Console and Network tab to confirm 200 responses for `bootstrap.min.css` and `bootstrap.bundle.min.js`.
- If encountering cached vendor files during development, use a hard refresh (Cmd+Shift+R) or disable cache in DevTools.

When changing or adding files
- Add new CSS to `public/css/styles.css` or a new file under `public/css/` and reference it from HTML with the same relative path style.
- Add new JS modules under `public/js/` and include them with `<script src="public/js/<file>.js"></script>` placed before `</body>`.
- Do not modify files inside `public/vendor/` except to upgrade versions—prefer adding overrides in `public/css/`.

Testing and quality
- There are no automated tests or linting configured. For small edits, manual verification in the browser is expected.

If you need more context
- Inspect `index.html` and `public/css/styles.css` first. The `README.md` is minimal; ask the maintainers for intended page layout or additional pages.

Please review these instructions and tell me if you want additional details (examples for adding a new page, a suggested local dev server config, or a CSS/JS organization update).
