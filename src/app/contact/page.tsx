import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactEnquirySection } from "@/components/contact/ContactEnquirySection";
import { ContactMapSection } from "@/components/contact/ContactMapSection";
import { ContactFAQSection } from "@/components/contact/ContactFAQSection";
import { ContactCTASection } from "@/components/contact/ContactCTASection";

export const metadata: Metadata = {
  title: "Contact Us | Celestial SS Grand Hotel, Lucknow",
  description:
    "Contact Celestial SS Grand Hotel at Plot 5, Misripur Guramba, Kursi Road, Lucknow, Uttar Pradesh 226026 for room, banquet, and event enquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Master Header with Top Utility Bar & Navigation */}
      <Header />

      <main className="w-full bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section 1: Architectural Contact Hero Banner */}
          <ContactHero />

          {/* Section 2: 3 Refined Contact Information Cards */}
          <ContactInfoCards />

          {/* Section 3: 2-Column Luxury Enquiry Form & Executive Assistance */}
          <ContactEnquirySection />

          {/* Section 4: Interactive Location & Leaflet Map Section */}
          <ContactMapSection />

          {/* Section 5: Interactive FAQ Accordion Section */}
          <ContactFAQSection />

          {/* Section 6: Instant Concierge Access Dark Obsidian CTA Banner */}
          <ContactCTASection />
        </div>
      </main>
      <Footer />

    </>
  );
}
