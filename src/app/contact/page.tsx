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
  title: "Contact Us | Celestal SS Grand Hotel, Lucknow",
  description:
    "Contact Celestal SS Grand Hotel at Plot 5, Misripur Guramba, Kursi Road, Lucknow 226026. Call +91 9115202115 or +91 9115202555 for rooms, banquets, and celebrations.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Master Header with Top Utility Bar & Navigation */}
      <Header />

      {/* Main Content Sections (Padding accounts for fixed header) */}
      <main className="w-full pt-[116px] md:pt-[132px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section 1: Architectural Contact Hero Banner */}
          <ContactHero />

          {/* Section 2: 3 Refined Overlapping Contact Information Cards */}
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

