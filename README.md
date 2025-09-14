
# Swastic Drilling • Static Site (GitHub Pages Ready)

This repository contains a **fast, SEO-friendly, multi-region** website for Swastic/Drillman. It’s 100% static (HTML/CSS/JS) and deploys easily on **GitHub Pages**.

## Structure
- `/index.html` — Global homepage with region picker & trust slab
- `/in/index.html` — India landing (EN + Hindi highlights)
- `/cl/index.html` — Chile landing (Spanish)
- `/products/` — Product index + 3 product templates
- `/case-studies/` — Case study index + 2 samples
- `/contact/` — Quote/contact form (Formspree-ready) + WhatsApp CTA
- `/assets/css/styles.css` — Lightweight responsive CSS
- `/assets/js/main.js` — Mobile menu, smooth scroll, idle iframe loading
- `/assets/img/placeholder.svg` — Replace with real images (use WebP/AVIF)
- `sitemap.xml`, `robots.txt`, `.nojekyll`

## Quick Start
1) **Replace placeholders**:
   - Update phone numbers, emails (`/contact/index.html`, header WhatsApp link).
   - Replace logo & images at `/assets/img`. Keep sizes similar; use **WebP/AVIF**.
   - Swap `your-domain.github.io` in JSON-LD & `sitemap.xml` with your real Pages URL.
   - Add real PDFs: `/assets/brochure.pdf`, `/assets/datasheets/*.pdf` (or update links).

2) **Enable the form** (optional):
   - Use [Formspree](https://formspree.io/) or similar.
   - Replace `action="https://formspree.io/f/your-form-id"` in `/contact/index.html`.

3) **Run locally** (optional):
   - Use any static server, e.g. `python3 -m http.server` from repo root.

4) **Deploy to GitHub Pages**:
   - Create a new repo (e.g. `swastic-site`).
   - Push files to the `main` branch.
   - In repo settings → **Pages** → Source: `Deploy from a branch` → Branch: `main` → `/ (root)`.
   - Your site will be live at `https://<username>.github.io/swastic-site/` (or set a custom domain).

## Performance & SEO
- Images are lazy-loaded; use modern formats (WebP/AVIF). Add width/height to prevent CLS.
- CSS is lightweight; JS deferred. Avoid heavy third-party scripts.
- `sitemap.xml` & `robots.txt` included. JSON-LD for Organization & Product.
- Make Spanish/India pages canonical or hreflang if you publish duplicates (advanced).

## Customization Ideas
- Add more product pages (copy a template in `/products`).
- Expand case studies (copy template in `/case-studies` with real metrics & quotes).
- Add a `/blog/` folder for SEO content.
- Swap WhatsApp FAB positioning/color in CSS if desired.

## License
You own the content. No external library licenses used here.
