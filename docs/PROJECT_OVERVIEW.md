# Hotel Celestial Casa — Project Overview

## 1. Executive Summary & Brand Identity
**Hotel Celestial Casa** is a distinguished luxury hospitality destination located at **CC-4, Sector-M, LDA Colony, Ashiyana, Lucknow, Uttar Pradesh 226012**. The property blends the regal traditions of royal Awadhi hospitality with modern palatial infrastructure, serving as an all-in-one celebration destination featuring:
- **1,200+ Guest Capacity Open Celebration Lawn**
- **400+ Capacity Climate-Controlled Grand Darbar Ballroom / Banquet Hall**
- **50+ Boutique Luxury Rooms & Bridal Preparation Rooms**
- **In-house Royal Awadhi & Multi-Cuisine Catering** with strictly segregated vegetarian and non-vegetarian kitchens
- **24/7 Concierge, Uniformed Valet, and 150+ Vehicle Secure Parking**

This project represents the production-ready website development for Hotel Celestial Casa, engineered to deliver high-converting celebration enquiries while celebrating the cultural elegance of Lucknow.

---

## 2. Strategic Objectives
1. **Fidelity to Approved Stitch Design**: Convert the Google Stitch HTML prototype (`reference/stitch-homepage.html`) into modern Next.js 16 components with pixel-accurate fidelity to typography, color palette, spacing, and editorial layout.
2. **High-Conversion Enquiry Funnels**: Deliver seamless, high-trust reservation forms across rooms, grand banquets, royal weddings, and corporate events.
3. **Instant Email Notification System**: Send guest enquiries through Web3Forms using client-side validation and honeypot spam mitigation, without a custom email backend.
4. **Lightweight & High-Performance Architecture**: Zero database, zero CMS, and zero payment gateway overhead in this release, maximizing performance, security, and Core Web Vitals.
5. **SEO & Geographic Dominance**: Optimize metadata, schema markup (LocalBusiness, Hotel, EventVenue), and local search visibility for Ashiyana, LDA Colony, and Lucknow wedding keywords.

---

## 3. Technology Stack & Architecture

| Layer | Technology | Specification / Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.4.5 (App Router) | Server Components, metadata API, and fast SSR |
| **UI Library** | React 19.3.0 | Modern declarative component architecture |
| **Language** | TypeScript 5.9 | Strict type safety for data models, props, and schemas |
| **Styling** | Tailwind CSS v4 | CSS variable token theme matching Stitch design spec |
| **Iconography** | Material Symbols & Lucide React | Google Material Symbols (Stitch source) + Lucide React |
| **Animations** | Framer Motion 14.9 | Subtle, elegant scroll reveals respecting reduced motion |
| **Form Handling** | React Hook Form 7.91 | Client-side reactive form states and accessibility |
| **Validation** | Native form validation and shared TypeScript utility | Client-side required-field and contact-format checks |
| **Email Service** | Web3Forms | Frontend enquiry delivery to the account-configured hotel email |
| **Deployment** | Vercel & GitHub | Edge hosting, continuous integration, and SSL |

---

## 4. Strict Project Boundaries (Out of Scope)
In alignment with client requirements, the following are **strictly excluded**:
- **No Content Management System (CMS)**: No WordPress, Strapi, Sanity, or fake CMS integrations. Content is structured in clean TypeScript data dictionaries for effortless future migration.
- **No Database**: No PostgreSQL, Supabase, MySQL, MongoDB, or Prisma.
- **No Online Booking Engine / Payment Gateway**: No Razorpay, Stripe, or instant credit card booking. All bookings operate via personalized, concierge-assisted email enquiries.
- **No Customer Accounts or Admin Dashboards**: Eliminates authentication vulnerabilities, password management overhead, and unnecessary backend maintenance.

---

## 5. Key Stakeholders & Contact Channels
- **Front Desk & Banquets Desk**: `+91 7054250911`
- **Wedding Event Desk**: `+91 7054250912`
- **Lawns & Catering Desk**: `+91 7054250913`
- **Primary Email**: `info@celestialcasa.in`
- **WhatsApp Concierge**: `https://wa.me/917054250911`
- **Physical Address**: CC-4, Sector-M, in front of Ansal Orchid Green, near Vishwanath Academy, LDA Colony, Ashiyana, Lucknow, Uttar Pradesh 226012
