# Exterior cleaning launch

## Implemented

- Current services: driveways, sidewalks, siding, and fences.
- Removed fabricated testimonials, ratings, unsupported performance promises, discounts, insurance/license claims, and placeholder telephone numbers.
- Multiservicios Elite LLC is the operator; its name is used provisionally until the owner selects a separate public brand. This change does not register a DBA.
- Old roof and commercial URLs explain that these services are not offered; former driveway and house-washing URLs redirect to the corresponding current services.
- Kept Formspree form `mgobbkpo`. Its identifier is public configuration, not a secret.
- Accessible quote form with required name, email, city/ZIP, and services; optional telephone, street address, and notes. Preserves data on failure, guards repeat submissions, and confirms success only after acceptance.
- Sun halo and disk share a single positioned, animated parent. Reduced-motion preferences are respected.

## Validation

- `npm run build` compiles the site.
- `npm test` runs browser tests using Chrome. Install Chrome or adjust the Playwright channel for your environment.
- Automated tests block external network requests and simulate Formspree responses; they never send real leads.
- One owner-authorized live request on October 12, 2026 returned HTTP 200 with `ok: true` from Formspree. Marker: `ELITE-1210`. The owner reported that the test email had not arrived yet. Provider acceptance is verified; inbox delivery and the configured recipient remain unverified. The test used `qa@example.com`, a reserved example address, and is not a real customer or booking.

## Owner follow-up

- Confirm receipt of `ELITE-1210`; recover/access the Formspree dashboard to verify the notification recipient and domain/spam settings. Do not change the existing destination blindly.
- Owner photos are now included on the homepage and driveway/sidewalk service pages. The front walkway has a before/after pair; finished driveway and sidewalk images are shown separately. All belong to one project at the owner's property. See `docs/project-photos.md` for source mapping. No stock or generated work examples are included.
- Choose a final commercial name and check its availability and potential conflicts before using it.
- Confirm the actual service area. The form currently asks for location and states that availability is confirmed before booking.
- A dedicated business telephone may be added later. Do not use the owner's personal or insurance-business number.

## Hosting

This is a client-routed Vite site. The hosting service must serve `index.html` for application routes such as `/estimate` and `/services/fence-cleaning`. Build output is `dist/`. Publishing and the production hosting configuration are not changed by this branch.
