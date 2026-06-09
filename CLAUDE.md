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
Currently on an AWS EC2 instance. Planned: migrate to a static host (Cloudflare Pages / Netlify / Vercel) since this is a fully static Gatsby build — but don't start that migration unprompted.

## Notes
- Content changes (bio, projects, etc.) matter more than tooling churn here.
- `node-sass` is deprecated/brittle; if Sass builds break, migrating to `sass` (Dart Sass) is the fix.
