import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { HospitalityPhilosophy } from "@/components/about/HospitalityPhilosophy";
import { HotelOfferings } from "@/components/about/HotelOfferings";
import { AccommodationFeature } from "@/components/about/AccommodationFeature";
import { DiningFeature } from "@/components/about/DiningFeature";
import { BanquetFeature } from "@/components/about/BanquetFeature";
import { LocationMapSection } from "@/components/about/LocationMapSection";
import { TestimonialsSection } from "@/components/about/TestimonialsSection";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Celestal SS Grand Hotel | Modern Hospitality in Lucknow",
  description:
    "Discover Celestal SS Grand Hotel on Kursi Road, Lucknow. Contemporary comfort, thoughtful hospitality, 60 guest rooms, one lawn, and four banquet halls.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Master Header with Announcement Bar & Single-Line Navigation */}
      <Header />

      {/* Main Content Sections (Padding accounts for fixed header) */}
      <main className="w-full pt-[116px] md:pt-[132px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section 1: Hero with Breadcrumbs & Verified Badge */}
          <AboutHero />

          {/* Section 2: Editorial Introduction with Overlapping Visual Frames */}
          <AboutIntroduction />

          {/* Section 3: Our Hospitality Philosophy (3 Pillars) */}
          <HospitalityPhilosophy />

          {/* Section 4: Experience Everything Under One Roof (4 Signature Spaces) */}
          <HotelOfferings />

          {/* Section 5: Accommodation Experience & Feature Matrix */}
          <AccommodationFeature />

          {/* Section 6: Dining Experience & Chef Highlights */}
          <DiningFeature />

          {/* Section 7: Celebrations & Banquet Experiences (Ballroom & Lawn) */}
          <BanquetFeature />

          {/* Section 8: Strategic Location & Real Interactive Leaflet Map */}
          <LocationMapSection />

          {/* Section 9: Guest Experience & Verified Testimonials */}
          <TestimonialsSection />

          {/* Section 10: Final Enquiry & Booking Action Banner */}
          {/* <AboutCTA /> */}
        </div>
      </main>

      {/* Master Multi-Column Footer */}
      <Footer />

    </>
  );
}

