# LeakFix — local SEO launch pack

Owner-ready notes for launching the LeakFix website and Google Business Profile in Riyadh.
Nothing here has been submitted anywhere. Each external step needs the owner's authorisation.

Items marked **[needed]** are business details that are not yet confirmed. Do not fill them with estimates.

---

## 1. Google Business Profile (service-area business)

LeakFix visits customers' properties, so set the profile up as a **service-area business with the street address hidden**.

| Field | What to enter |
| --- | --- |
| Business name | LeakFix (exactly as used on signage and documents; do not add keywords to the name) |
| Primary category | Choose the closest match offered in Google Business Profile. **Plumber** (سبّاك) is the safe default; if Google offers a leak-detection category when you search the category list, prefer it. |
| Additional categories | Only categories LeakFix actually provides, e.g. a water-damage or leak-related category if offered. |
| Phone | **[needed]** Business number, the same one configured on the website. |
| Website | **[needed]** Production URL, e.g. `https://www.<domain>/ar/` for the Arabic profile or `https://www.<domain>/` |
| Hours | **[needed]** Real working hours. Do not mark 24 hours unless that is true. |
| Address | Enter the business address for verification, then **hide it** ("I deliver goods and services to my customers"). |
| Service area | Riyadh. Add individual districts only if LeakFix confirms it serves them. |
| Services | Plumbing (السباكة): kitchen and bathroom plumbing, taps and fixtures, pipe and fitting replacement, blocked sinks and toilets; Water leak detection (كشف تسربات المياه); Leak detection inside walls, floors and ceilings; Underground water leak detection (كشف تسربات المياه تحت الأرض); Water leak repair (إصلاح تسربات المياه); Pipe and connection repair. |
| Description (Arabic) | تكشف LeakFix تسربات المياه وتصلحها في منازل ومنشآت الرياض. نستخدم الكشف الصوتي والتصوير الحراري واختبار الضغط لتضييق مكان التسرب قبل أي فتح، ونتفق مع العميل على نطاق العمل والسعر قبل البدء. |
| Description (English) | LeakFix finds and repairs water leaks in Riyadh homes and businesses. We use acoustic listening, thermal imaging and pressure testing to narrow down the leak before anything is opened, and agree the scope and price with the customer before work starts. |
| Photos | Only genuine photos of LeakFix staff, vehicles, equipment and completed jobs. **Do not upload the generated illustration images.** |

After the profile is verified, add its public URL to `googleBusinessProfileUrl` in `src/config/business.ts`. It is then included in the site's structured data (`sameAs`). If customers leave reviews there, add the same URL as `reviewProfileUrl` so the site can link to them.

---

## 2. Priority URLs (production)

Replace `<domain>` with the production domain. Each Arabic URL has an English equivalent without `/ar`.

| Priority | Arabic URL | Target phrase |
| --- | --- | --- |
| 1 | `/ar/water-leak-detection/` | كشف تسربات المياه بالرياض |
| 2 | `/ar/water-leak-repair/` | إصلاح تسربات المياه بالرياض |
| 3 | `/ar/underground-water-leak-detection/` | كشف تسربات المياه تحت الأرض بالرياض |
| 4 | `/ar/areas-we-cover/` | Riyadh coverage |
| 5 | `/ar/` | Brand overview (LeakFix) |

Supporting pages: `/ar/hidden-water-leak-detection/` (leaks inside walls, floors and ceilings) and `/ar/pipe-leak-repair/` (pipes and connections). Each has a distinct H1 so it does not compete with the main detection and repair pages.

---

## 3. Launch checks

**Before launch (in the repo):**

1. Set real `phone`, `whatsapp` and `email` in `src/config/business.ts`, and set `demoContact: false`.
2. Build with `SITE_URL=https://www.<domain>`, `DEPLOY_ENV=production` and no `BASE_PATH`, then run `npm run verify`. It must report "Indexable build: yes" and "No problems found".
3. Confirm `/sitemap.xml` lists 32 URLs (16 pages × 2 languages) on the production domain, and `/robots.txt` allows crawling and points to the sitemap.
4. Make sure the GitHub Pages preview (or any staging copy) is **not** built with `DEPLOY_ENV=production`, so it stays noindex.

**After launch (needs Search Console access):**

1. Add the domain property in Google Search Console and verify it.
2. Submit `https://www.<domain>/sitemap.xml`.
3. Use URL Inspection on each priority Arabic URL above, then on its English pair. Record two separate results for each:
   - **Technical indexability**: crawl allowed, page fetched (200), indexing allowed (no noindex), the canonical Google selected matches the page.
   - **Actual indexing**: "URL is on Google" or not. A new site can take days to weeks; request indexing for priority URLs once.
4. Check that each Arabic page's alternate English page is reported, which confirms the hreflang pairs.

---

## 4. Measurement plan

The website has no analytics or trackers installed. Every Call, WhatsApp and email link carries a `data-contact` attribute (`call`, `whatsapp`, `email`) so clicks can be counted once the owner chooses a tool.

| What | Where to measure | How |
| --- | --- | --- |
| Saudi search impressions and clicks | Google Search Console → Performance | Filter **Country: Saudi Arabia**. Compare queries containing كشف تسربات / إصلاح تسربات, and pages `/ar/…` vs English. Review monthly. |
| Profile calls and website clicks | Google Business Profile → Performance | Calls, website clicks and direction requests from the profile. |
| Call and WhatsApp clicks on the website | Analytics tool chosen by the owner **[needed]** | Count clicks on links with `data-contact="call"` and `data-contact="whatsapp"`, split by page. A privacy-friendly, cookie-free tool keeps the privacy policy simple; update the policy before adding any tool. |
| WhatsApp enquiries from the website | WhatsApp Business | Website WhatsApp links open with a pre-filled message ("Hello LeakFix… water leak in Riyadh" / "السلام عليكم، أبي أستفسر عن تسرب مياه في الرياض"), so website enquiries can be recognised. |
| Booked jobs | LeakFix job log | For each booking, record the date, district, service and how the customer found LeakFix (website, Google profile, WhatsApp, referral). Compare monthly with calls and WhatsApp clicks. |

---

## 5. Still needed from the owner

- Confirmation of water heater and water pump work (heater/pump types; installation, repair or connections only), and whether larger drainage lines are handled. These are not on the site yet.

- Business phone and WhatsApp number, email, working hours.
- Production domain and Search Console access.
- Confirmed Riyadh districts served, if they should be listed.
- Inspection fee wording in SAR, if it should be published.
- Whether reinstatement (tiles, walls, paving) is included or quoted separately.
- Genuine photos of staff, equipment and jobs.
- Up to three Riyadh case studies with permission: problem, method, finding, repair and how the result was checked.
- A redacted sample inspection report, if LeakFix issues reports.
- Engineer's photo, qualification, experience and training provider.
- Customer reviews with permission, or the verified review profile URL.

---

## 6. Photos to replace the illustrations

All current photos are generated illustrations and are labelled "Illustration" on the site. Genuine photos, approved by the people shown, would add the most credibility here:

| Where | Current image | Genuine photo to supply |
| --- | --- | --- |
| Homepage hero, Underground page | Acoustic listening (illustration) | A LeakFix technician listening along a buried pipe route in a Riyadh courtyard |
| Leak Detection hero, Walls & Floors page | Thermal camera (illustration) | The thermal camera LeakFix uses, pointed at a damp wall, ideally with the screen visible |
| Leak Repair and Pipe Repair pages, coverage section | Valve repair (illustration) | A real repair in progress: the opened area, the replaced fitting or pipe section |
| Water Leak Guide | Torch inspection (illustration) | A technician checking a water meter or under-sink connections |
| Our Engineer page | No photo (text-only profile) | A professional portrait of Engineer Muhammad Faisal, approved by him |
| Pressure testing (no image yet) | — | The pressure gauge connected to an isolated pipe section |
| Completed work section (hidden) | — | Before/after photos for up to three jobs, with the customer's permission and no identifying property details |
