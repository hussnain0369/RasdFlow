# LeakFix website

Bilingual (English / Arabic) website for LeakFix, a water leak detection and repair business in Riyadh.

**Status: not ready for public enquiries.** No telephone, WhatsApp, email or form delivery is configured yet, so the site deliberately shows no contact methods and stays out of search indexes. See [Before launch](#before-launch).

## Stack

- [Astro 5](https://astro.build) — every page is prerendered to static HTML.
- `@astrojs/node` (standalone) — runs the one server route, `/api/enquiry/`, which delivers the enquiry form.
- Self-hosted variable fonts: Archivo (English) and Readex Pro (Arabic). No third-party requests, cookies or analytics.
- Images are optimised at build time to AVIF and WebP in several sizes, with JPEG as the fallback.

## Run it

Requires Node 20.3 or later.

```bash
npm install
npm run dev          # http://localhost:4321 for local development
npm run build        # type-check and build into dist/
npm run verify       # check the built pages (headings, metadata, links, hreflang, contact links)
npm run preview      # serve the production build (pages + enquiry route) on port 4321
```

To preview the indexable production behaviour locally:

```bash
SITE_URL=https://www.example.com DEPLOY_ENV=production npm run build && npm run verify
```

## Where things live

| What | Where |
| --- | --- |
| Business facts (phone, WhatsApp, email, hours, legal name, retention…) | `src/config/business.ts` |
| Deployment settings (domain, indexing, form delivery) | environment variables, see `.env.example`, read in `src/config/site.ts` |
| Page copy, English and Arabic | `src/content/pages.ts`, plus `src/content/extra.ts` for How It Works, the Leak Guide and Our Engineer |
| Engineer details and portrait | `engineer` in `src/config/business.ts`; put the photo in `src/assets/team/` and set `photo` to its file name |
| Shared interface text (navigation, buttons, form, validation) | `src/i18n/ui.ts` |
| Privacy policy draft | `src/components/pages/PrivacyPage.astro` |
| Page templates | `src/components/pages/` |
| URL map | `src/i18n/routes.ts` |
| Photos and logo | `src/assets/` |

English pages (13): `/`, `/water-leak-detection/`, `/hidden-water-leak-detection/`, `/underground-water-leak-detection/`, `/water-leak-repair/`, `/pipe-leak-repair/`, `/how-it-works/`, `/water-leak-guide/`, `/areas-we-cover/`, `/about/`, `/our-engineer/`, `/contact/`, `/privacy-policy/`.
Arabic pages use the same paths under `/ar/`. Each page links to its equivalent through the language switcher and reciprocal `hreflang` tags.

## Confirmed content switches (`src/config/business.ts`)

- `methods`: detection methods the owner has confirmed (acoustic, thermal, pressure testing, underground investigation). A method set to `false` disappears from every page.
- `reinstatement`: `null` until confirmed; the copy then says reinstatement is set out in each job's agreed scope. Set `'included'` or `'separate'` once decided.
- `projects` and `reviews`: completed-work examples and customer reviews, published only with permission. Both sections stay hidden while empty. `reviewProfileUrl` links a verified review profile.
- `engineer`: verified details only. Add `photo` (in `src/assets/team/`), `qualification`, `experience` and `trainingProvider` when confirmed; until then the profile is text only.
- All supplied photos are generated images and are labelled "Illustration" on the page. Replace them with genuine job photos when available.

## How missing information is handled

- **Contact methods** in `business.ts` that are `null` are never shown. The Call and WhatsApp buttons, the mobile contact bar, footer details and contact page entries appear only once a valid international number or email is set. `tel:` and `https://wa.me/` links are generated from those values.
- **The enquiry form** only appears when `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` are set at build time. The server route also checks them at request time and returns an error when they are missing. A success message is shown only after the delivery service accepts the email.
- **Search indexing**: pages get `noindex` and `robots.txt` blocks all crawlers unless `SITE_URL` is set and `DEPLOY_ENV=production`. Canonical URLs, `hreflang`, the sitemap and Open Graph URLs need `SITE_URL`.
- **Equipment photos**: the homepage shows the acoustic listening photo and the Leak Detection page the thermal camera photo, as the business asked. The page text does not name or promise specific equipment.
- **Privacy policy**: the wording follows the configuration. It mentions the form provider only when the form is on, and states clearly where the hosting provider, retention period and privacy contact are still being confirmed.

## Customer reviews and feedback

- **Homepage "Customer Reviews" section** (after the visit steps): shows the three newest reviews from `src/data/reviews.ts`. With none, it shows "Have you used LeakFix? Tell us how your visit went." An average rating and count appear only if `reviewSummary` is filled in from a real, named source (e.g. Google) with the date it was read. No `Review` or `AggregateRating` structured data is added.
- **Feedback page** (`/feedback/`, `/ar/feedback/`): private form with a 1–5 star rating, feedback, optional service, name, phone or email, and an unchecked permission box. It is always `noindex` and left out of the sitemap. It appears only when email delivery is configured (`RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL`, and `FEEDBACK_TO_EMAIL` or `ENQUIRY_TO_EMAIL`). Until then the reviews section offers "Share Feedback on WhatsApp".
- **Where feedback goes:** every submission, whatever the rating, is emailed to the owner by `/api/feedback/`. Nothing is stored on the site, and the response never repeats the customer's details. The same spam protection as the enquiry form applies.
- **Publishing a review:** only when the email says "Permission to publish: YES" and the owner approves. Copy the rating, the customer's words and the chosen display name into `src/data/reviews.ts` (instructions at the top of that file), never the phone or email. Commit; the site rebuilds.
- **Google reviews:** once the Google Business Profile is verified, put its "write a review" link in `googleReviewUrl` in `src/config/business.ts`. "Review Us on Google" then shows to everyone, whatever their rating.

## Enquiry form security

Server-side validation shared with the browser, a hidden honeypot field, a minimum time on the page, a per-IP rate limit (5 per 10 minutes), a cross-site origin check against `SITE_URL`, and length limits on every field. No file uploads. Without JavaScript the form still works and the server returns a plain result page.

The rate limit is in memory, so it applies per server process. If you host on several instances or serverless functions, add a shared store or a CAPTCHA service.

## Deploying

Any Node host works: run `node dist/server/entry.mjs` behind HTTPS, with the environment variables from `.env.example`. Serve only over HTTPS. Set `DEPLOY_ENV=production` **only** on the live site, so preview and staging deployments stay out of search results.

To host as fully static files (no form), deploy `dist/client/` and leave the form variables unset.

## GitHub Pages preview

`.github/workflows/deploy-pages.yml` builds the site and publishes it to https://hussnain0369.github.io/RasdFlow/ on every push to the working branch, or when run by hand from the Actions tab. It builds with `BASE_PATH=/RasdFlow/` and without `DEPLOY_ENV=production`, so every page is noindex. GitHub Pages only serves static files, so the enquiry form is not available there.

One-time setup: in the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.

For the real launch on a custom domain, set `BASE_PATH` to `/` (or remove it), `SITE_URL` to the domain and `DEPLOY_ENV=production`.

## Before launch

**Trial contacts are on.** `demoContact: true` in `src/config/business.ts` shows placeholder contact buttons (+966 5X XXX XXXX, info@leakfix.example) that open a "trial preview" message. Set it to `false` once real details are entered. Real numbers always take over automatically.

The business needs to supply or confirm:

1. Business telephone number and WhatsApp number (international format).
2. Business email address, and an address for privacy requests if different.
3. Production domain (`SITE_URL`) and the hosting provider's name.
4. Form delivery: a Resend account with a verified sending domain, the API key, and the address that receives enquiries. Or confirm the form should stay off.
5. Working hours, if they should be shown.
6. Confirmed service scope: which detection methods and equipment are used (the homepage and Leak Detection photos show acoustic and thermal equipment), and whether any specialist repairs should be listed.
7. Registered business name and any registration details for the privacy policy.
8. How long enquiry data is kept, and who handles it.
9. A review of the privacy policy draft by the business, with legal advice where needed.
10. Confirmation that the supplied photos are licensed for use on the website.
11. A portrait of Engineer Muhammad Faisal (the page shows an initials badge until one is added), and confirmation of how the "Engineer" title and the Pakistan training should be described, such as the qualification or institution.
