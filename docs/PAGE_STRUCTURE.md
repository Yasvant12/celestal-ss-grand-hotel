# Hotel Celestial Casa — Page & Module Structure

This document outlines the architectural blueprint, URL schema, components, and layout composition for all website modules.

---

## 1. Master URL Map & Route Matrix

| Route | Page Name | Primary Purpose & Content | Form Included |
| :--- | :--- | :--- | :--- |
| `/` | Home | Authoritative Stitch conversion: Hero, Availability Bar, Heritage, Venues, Facilities, Inquiry, Map, Footer | Quick Event Inquiry |
| `/about` | About Us | Hotel heritage, Royal Awadhi ethos, leadership vision, comprehensive facilities & safety credentials | Venue Tour Request |
| `/rooms` | Rooms & Suites | Boutique rooms showcase (Maharaja Suite, Executive Deluxe, Heritage Twin, Bridal Dressing Suite) | Room Availability Check |
| `/rooms/[slug]` | Room Details | Individual room specifications, bed dimensions, virtual 360 preview, en-suite features | Room Booking Enquiry |
| `/restaurant` | Restaurant & Dining | Royal Awadhi culinary traditions, Galouti Kebabs, Dum Biryanis, segregated kitchens, banquet dining | Table / Dining Enquiry |
| `/menu` | Food Menu | Downloadable & interactive royal banquet food course menus, chaat street, dessert buffets | Catering Enquiry |
| `/banquet` | Banquet Halls | The Royal Darbar Ballroom, Gulmohar Celebration Lawn, capacities, floor plans, technical AV specs | Banquet Proposal Form |
| `/banquet/[slug]` | Venue Details | Deep dive into specific hall/lawn layouts, stage configurations, entry setups | Venue Date Booking |
| `/weddings` | Weddings | Turnkey destination wedding services, Mandap themes, Jaimala stages, bridal hospitality | Wedding Consultation Form |
| `/wedding-packages` | Wedding Packages | Curated wedding tier packages (Silver, Gold, Imperial Awadhi Maharaja package) | Package Enquiry |
| `/events` | Events & Corporate | Corporate summits, executive conferences, boardrooms, birthday & anniversary galas | Corporate Event Form |
| `/offers` | Offers & Packages | Seasonal banquet offers, early wedding booking perks, corporate retreat packages | Offer Claim Form |
| `/gallery` | Gallery | Categorized high-res visual gallery (Weddings, Banquets, Lawns, Rooms, Culinary, Exterior) | — |
| `/testimonials` | Guest Testimonials | Verified wedding families & corporate host reviews, video testimonial placeholders | Submit Review / Story |
| `/contact` | Contact Us | Direct department lines, Google Map navigation, contact form, address details | General Contact Form |
| `/privacy-policy` | Privacy Policy | Data privacy, enquiry information handling, cookies policy | — |
| `/terms` | Terms & Conditions | Reservation policies, date blocking guidelines, cancellation terms, campus safety rules | — |

---

## 2. Reusable Layout Components

1. **Header Component (`src/components/layout/Header.tsx`)**:
   - Fixed elevation with `bg-surface/95 backdrop-blur-xl`.
   - Top utility bar (`h-10`): Direct phone links, email, Ashiyana address, "Royal Awadhi Hospitality" badge.
   - Main navbar (`h-24`): Crown insignia logo, desktop navigation with active state pills, WhatsApp direct trigger, "Book / Enquire" CTA, responsive mobile drawer toggle.
2. **Mobile Navigation Drawer (`src/components/layout/MobileNav.tsx`)**:
   - Smooth Framer Motion slide-in drawer.
   - Full navigation links, quick call buttons, direct WhatsApp button, and event date inquiry shortcut.
3. **Footer Component (`src/components/layout/Footer.tsx`)**:
   - Charcoal noir background (`bg-noir-charcoal text-surface-champagne`).
   - 4-column layout: Brand summary & directions, reservations desk phone matrix, bespoke venues directory, and e-brochure newsletter form with social icons.
   - Bottom bar with copyright and legal links.
4. **WhatsApp Floating Concierge Button (`src/components/ui/WhatsAppButton.tsx`)**:
   - Fixed bottom-right pill/badge providing instant direct access to `+91 7054250911`.

---

## 3. Dedicated Enquiry Forms Matrix

1. **Room Enquiry Form (`src/components/forms/RoomEnquiryForm.tsx`)**:
   - Fields: Full Name, 10-digit Phone, Email, Check-in Date, Check-out Date, Number of Guests, Room Category, Special Requests.
2. **Banquet Enquiry Form (`src/components/forms/BanquetEnquiryForm.tsx`)**:
   - Fields: Full Name, Phone, Email, Event Date, Event Type, Guest Count Range, Catering Requirement, Approximate Budget, Message.
3. **Wedding Enquiry Form (`src/components/forms/WeddingEnquiryForm.tsx`)**:
   - Fields: Full Name, Phone, Email, Wedding Date, Expected Guests, Guest Rooms Required, Function Details (Mehendi / Sangeet / Jaimala), Special Requirements.
4. **General Contact Form (`src/components/forms/ContactForm.tsx`)**:
   - Fields: Name, Phone, Email, Subject, Message.

All forms connect to `/api/enquiry` via POST, validated by Zod, with anti-spam honeypot protection, client validation states, loading spinners, and friendly confirmation banners.

