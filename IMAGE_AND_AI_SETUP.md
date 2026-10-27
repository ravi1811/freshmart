# FreshMart image and AI assistant updates

## Homepage image
The homepage hero now uses `/images/vegetable-hero.jpg`, a clean produce-basket photograph. It no longer uses `homepage_hero.png`, which contains embedded marketing text/navigation and looked like a screenshot inside the page.

## Image paths
Files in `public/images/...` are referenced from the site root as `/images/...`. Do not include `public` in a browser image path. Product and category images use the existing local files bundled in this project.

## Shopping assistant
A floating “Ask FreshMart AI” assistant appears across the site. Its server route is `app/api/assistant/route.ts`.

- Without an API key, it uses a built-in catalogue helper for basic product/budget questions.
- To enable model-powered responses, copy `.env.example` to `.env.local` and set `OPENAI_API_KEY` to your own API key. Optionally set `OPENAI_MODEL`.
- Keep API keys server-side. Never add them to client-side code or commit `.env.local`.
- Restart the development server after changing environment variables.

The store's current product prices are sample/demo values; update them before production use. Account authentication, live inventory, delivery-slot confirmation, and order tracking are not implemented by this UI update.

## Pages included
- `/` homepage
- `/categories` category directory
- `/vegetables` product browse/search/filter
- `/search` product search
- `/offers` popular products/offer landing page
- `/about` about FreshMart
- `/account` account placeholder
- `/cart` cart
- `/checkout` checkout
