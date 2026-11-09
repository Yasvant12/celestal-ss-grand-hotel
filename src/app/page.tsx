import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeHighlightsSection } from "@/components/home/HomeHighlightsSection";
import { HeritageSection } from "@/components/home/HeritageSection";
import { ReceptionSection } from "@/components/home/ReceptionSection";
import { VenuesSection } from "@/components/home/VenuesSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { InquirySection } from "@/components/home/InquirySection";
import { LocationSection } from "@/components/home/LocationSection";
export default function HomePage() {
  return (
    <>
      {/* 1. Master Header with Top Utility Bar & Mobile Navigation */}
      <Header />

      {/* Main Content Sections (Responsive padding accounts for fixed header) */}
      <main className="w-full pt-[116px] md:pt-[132px] bg-surface min-h-[calc(100vh-132px)]">
        <div className="flex flex-col w-full">
          {/* 1. Full-Width Cinematic Hero Section */}
          <HeroSection />

          <HomeHighlightsSection />

          {/* 3. Welcome & Heritage Section */}
          <HeritageSection />

          {/* Reception image placeholder until the official photo is provided */}
          <ReceptionSection />

          {/* 4. Signature Venues & Accommodations Showcase Grid */}
          <VenuesSection />

          {/* 5. Unrivaled Hotel Facilities & Amenities */}
          <FacilitiesSection />

          {/* 6. Interactive Direct Event Concierge & Booking Query Form */}
          <InquirySection />

          {/* 7. Location & Vicinity Map Integration */}
          <LocationSection />
        </div>
      </main>

      {/* 8. Luxury 4-Column Footer */}
      <Footer />

    </>
  );
}
