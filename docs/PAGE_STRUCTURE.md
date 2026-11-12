# Hotel Celestial Casa — Page & Module Structure

This document outlines the architectural blueprint, URL schema, components, and layout composition for all website modules.

---

## 1. Master URL Map & Route Matrix

| Route | Page Name | Primary Purpose & Content | Form Included |
| :--- | :--- | :--- | :--- |
| `/` | Home | Authoritative Stitch conversion: Hero, Availability Bar, Heritage, Venues, Facilities, Inquiry, Map, Footer | Quick Event Inquiry |
| `/about` | About Us | Hotel heritage, Royal Awadhi ethos, leadership vision, comprehensive facilities & safety credentials | Venue Tour Request |
| `/rooms` | Rooms & Accommodation | Room collection showcase (Executive Club Room, Garden Courtyard Deluxe, and bridal preparation rooms) | Room Availability Check |
| `/rooms/[slug]` | Room Details | Individual room specifications, bed dimensions, virtual 360 preview, and private bathroom features | Room Booking Enquiry |
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

## 3. Enquiry Forms

The active enquiry forms submit directly from the browser to Web3Forms through the shared `src/lib/web3forms.ts` utility:

1. **General Contact** (`src/components/contact/ContactEnquirySection.tsx`)
2. **Wedding and Banquet** (`src/components/banquet/BanquetEnquirySection.tsx`)
3. **Room Enquiry** (`src/components/rooms/RoomEnquiryModal.tsx`)
4. **Corporate and Event** (`src/components/services/ServicesEnquirySection.tsx`)
5. **Homepage Enquiry** (`src/components/home/InquirySection.tsx`)
6. **First Visit Popup** (`src/components/ui/FirstVisitEnquiryModal.tsx`)

The shared utility validates guest name, mobile number, and an optional email address, includes enquiry fields, category, source page, and submission time, and reports service errors to the existing form UI. The forms use Web3Forms' honeypot field and retain their existing loading, success, error, and reset behavior. The destination email is configured in the Web3Forms account; there is no custom enquiry API or server-side email service.
