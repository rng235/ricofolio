# ricofolio — personal portfolio site

Personal website showcasing who I am. Built with Gatsby 5 (React 18, Sass).

## Commands
- `npm run develop` — dev server at localhost:8000
- `npm run build` — production build to `public/`
- `npm run serve` — serve the production build
- `npm run format` — Prettier
- No tests configured.

## Structure
- `src/` — pages, components, styles (Sass)
- `gatsby-config.js` — plugins and site metadata

## Hosting
Cloudflare Pages, project `ricofolio` (ricofolio.pages.dev), serving ricardoguntur.com and www via proxied CNAMEs. DNS is on Cloudflare; domain registered at Namecheap. Pushes to `main` trigger a Cloudflare build (deploy command: `npx wrangler pages deploy public --branch=main`). Migrated from AWS Amplify in June 2026.

## Notes
- Content changes (bio, projects, etc.) matter more than tooling churn here.
- `node-sass` is deprecated/brittle; if Sass builds break, migrating to `sass` (Dart Sass) is the fix.
