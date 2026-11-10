# Hotel Celestial Casa — Development Roadmap

A phased, disciplined implementation plan ensuring uncompromising fidelity to the Stitch design prototype, robust software engineering, and production readiness.

---

## Phase 1: Reference Audit and Project Setup (CURRENT PHASE)
- [x] Complete code and visual inspection of `reference/stitch-homepage.html`.
- [x] Extraction and documentation of design tokens (colors, typography, spacing, shadows).
- [x] Creation of the recommended Next.js 16 App Router folder structure.
- [x] Installation and verification of core packages (`lucide-react`, `framer-motion`, `react-hook-form`, `clsx`, `tailwind-merge`).
- [x] Configuration of Tailwind CSS v4 design theme in `src/app/globals.css`.
- [x] Configuration of TypeScript paths (`@/*` -> `./src/*`) and `next.config.ts`.
- [x] Creation of environment variables template (`.env.example`).
- [x] Comprehensive architectural documentation in `/docs`.
- [x] Static build verification with zero errors.
- [ ] **Awaiting User Review & Sign-Off to proceed to Phase 2.**

---

## Phase 2: Homepage Conversion
*Objective: Convert the Stitch HTML prototype into modular Next.js components with 100% visual fidelity.*
1. **Header & Navigation**:
   - Deconstruct into `HeaderTopBar`, `HeaderNavBar`, and responsive `MobileNav` drawer.
   - Implement working internal links and phone/WhatsApp actions.
2. **Hero & Quick Highlights**:
   - Implement `HeroSection` with twilight illuminated facade background, ambient gold badges, and live counter statistics.
3. **Floating Availability Bar**:
   - Implement interactive `FloatingAvailabilityBar` overlapping the hero section.
   - Pass selected dates and guest count directly to the enquiry form.
4. **Welcome & Heritage Section**:
   - Build two-column editorial story with curated multi-image grid and "Royal Standard" highlight card.
5. **Venues Showcase Grid**:
   - Construct venue cards for Grand Banquet Hall, Open Celebration Lawn, and Luxury Rooms.
   - Implement full-width Gourmet Awadhi Dining & Catering card.
6. **Facilities & Amenities**:
   - Implement 6 luxury amenity cards (Parking, Valet, CCTV, Fire Safety, Bouncers, Jaimala/DJ).
7. **Direct Concierge & Enquiry Form**:
   - Replace demo alert dialog with a real reactive form connected to Web3Forms.
   - Implement instant client-side feedback and validation.
8. **Location & Vicinity Map**:
   - Build proximity milestones (Airport, Railway Station, Shaheed Path) and Google Maps navigation card.
9. **Footer**:
   - Implement 4-column luxury footer with e-brochure subscription and working links.

---

## Phase 3: Remaining Website Pages & Modules
*Objective: Build all remaining 16 modules using the approved design system.*
1. **About Us (`/about`)**: Full heritage story, royal culinary philosophy, leadership commitment, and facility certifications.
2. **Rooms & Suites (`/rooms`) & Room Details (`/rooms/[slug]`)**: Detailed luxury room catalog, amenities, bed types, pricing inquiries.
3. **Restaurant (`/restaurant`) & Food Menu (`/menu`)**: Royal Awadhi culinary traditions, live counters, segregated kitchens, banquet menu packages.
4. **Banquet Halls (`/banquet`) & Venue Details (`/banquet/[slug]`)**: The Royal Darbar Ballroom, Gulmohar Lawn, seating charts, floor plans.
5. **Weddings (`/weddings`) & Wedding Packages (`/wedding-packages`)**: Mandap themes, Jaimala concepts, luxury packages (Silver, Gold, Imperial).
6. **Events & Corporate (`/events`)**: Corporate retreats, conferences, boardrooms.
7. **Offers & Seasonal Packages (`/offers`)**: Limited-time celebratory tariffs and early-bird wedding privileges.
8. **Gallery (`/gallery`)**: Filterable high-definition imagery across celebrations, decor, and architecture.
9. **Guest Testimonials (`/testimonials`)**: Authentic guest feedback, couple reviews, and hospitality stories.
10. **Contact Us (`/contact`)**: Dedicated contact channels, department extensions, and interactive map.
11. **Legal Policies (`/privacy-policy`, `/terms`)**: Comprehensive terms of reservation and data handling.

---

## Phase 4: Enquiry Form Integration
*Objective: Deliver enquiry notifications through the configured Web3Forms account without a custom backend.*
1. **Shared Frontend Utility**: Submit existing enquiry forms through Web3Forms with consistent guest and source metadata.
2. **Form Feedback**: Retain validation, loading, success, error, duplicate-submit prevention, and success-only form reset behavior.
3. **Spam Mitigation**: Include Web3Forms honeypot protection.
4. **Configuration**: Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` locally and in the deployment environment, and configure the destination email in Web3Forms.
5. **Live Delivery Test**: Submit a test enquiry after the real access key is configured and verify receipt at the hotel email.

---

## Phase 5: Complete Website Quality Assurance
*Objective: Production hardening, SEO, and performance optimization.*
1. **Cross-Device Responsiveness**: Validate on 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop).
2. **SEO Audits**: Dynamic metadata, OpenGraph tags, JSON-LD Schema (`Hotel`, `EventVenue`, `LocalBusiness`), sitemap generation, and robots.txt.
3. **Performance & Core Web Vitals**: Image optimization, lazy loading, font swap, zero layout shifts.
4. **Accessibility (WCAG 2.1 AA)**: Contrast ratios, ARIA attributes, keyboard navigation, screen reader testing.

---

## Phase 6: Production Deployment & Handoff
1. **GitHub Repository Setup**: Clean commit history and branch protection.
2. **Vercel Project Setup**: Edge configuration, automated CI/CD pipeline, and preview deployments.
3. **Environment Secrets**: Secure production configuration of Resend and hotel email targets.
4. **DNS & Custom Domain**: Guidance for configuring `celestialcasa.in` records and SSL certificate.
5. **Documentation Delivery**: Final operations manual and maintenance guide.
