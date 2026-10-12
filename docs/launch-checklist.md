# Exterior cleaning launch

## Implemented

- Current services: driveways, sidewalks, house washing (including siding), and fences.
- Removed fabricated testimonials, ratings, unsupported performance promises, discounts, insurance/license claims, and placeholder telephone numbers.
- Florida SunRinse remains the public brand at the owner’s explicit request. Multiservicios Elite LLC appears only as the legal operator. This change does not register a DBA or establish name availability.
- Roof and commercial service pages and visible mentions are removed. Their old URLs reach the generic page-not-found screen; the original driveway-sidewalk and house-washing pages retain their URLs. The siding URL redirects to House Washing.
- Kept Formspree form `mgobbkpo`. Its identifier is public configuration, not a secret.
- Accessible quote form with required name, email, city/ZIP, and services; optional telephone, street address, and notes. Preserves data on failure, guards repeat submissions, and confirms success only after acceptance.
- Original website layout, palette, Inter typography, responsive title sizes, gradients, navigation branding, and form steps are preserved. Fence Cleaning follows the original service page structure. The gradient title paint area has a small descender allowance without changing font size or line height.
- Sun halo and disk share a single positioned, animated parent. Reduced-motion preferences are respected.

## Validation

- `npm run build` compiles the site.
- `npm test` runs browser tests using Chrome. Install Chrome or adjust the Playwright channel for your environment.
- Automated tests block external network requests and simulate Formspree responses; they never send real leads.
- One owner-authorized live request on October 12, 2026 returned HTTP 200 with `ok: true` from Formspree. Marker: `ELITE-1210`. The owner reported that the test email had not arrived yet. Provider acceptance is verified; inbox delivery and the configured recipient remain unverified. The test used `qa@example.com`, a reserved example address, and is not a real customer or booking.

## Owner follow-up

- Confirm receipt of `ELITE-1210`; recover/access the Formspree dashboard to verify the notification recipient and domain/spam settings. Do not change the existing destination blindly.
- Owner photos are now included on the homepage and driveway/sidewalk service pages. Both the driveway and front walkway have before/after pairs; the finished sidewalk is shown separately. All belong to one project at the owner's property. The small pressure-washer photo is excluded. See `docs/project-photos.md` for source mapping. No stock or generated work examples are included.
- Choose a final commercial name and check its availability and potential conflicts before using it.
- Confirm the actual service area. The form currently asks for location and states that availability is confirmed before booking.
- A dedicated business telephone may be added later. Do not use the owner's personal or insurance-business number.

## Hosting

This is a client-routed Vite site. The hosting service must serve `index.html` for application routes such as `/estimate` and `/services/fence-cleaning`. Build output is `dist/`. Publishing and the production hosting configuration are not changed by this branch.
