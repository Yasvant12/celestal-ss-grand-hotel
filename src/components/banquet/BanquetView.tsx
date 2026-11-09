"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { HERO_BACKGROUND_IMAGE } from "@/lib/constants";
import { BanquetIntroMetrics } from "./BanquetIntroMetrics";
import { BanquetVenueShowcase } from "./BanquetVenueShowcase";
import { BanquetFloorPlanViewer } from "./BanquetFloorPlanViewer";
import { BanquetCuratedEvents } from "./BanquetCuratedEvents";
import { BanquetVisualGallery } from "./BanquetVisualGallery";
import { BanquetSupportFeatures } from "./BanquetSupportFeatures";
import { BanquetEnquirySection } from "./BanquetEnquirySection";
import { BanquetCTABanner } from "./BanquetCTABanner";

export function BanquetView() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVenue, setSelectedVenue] = useState("Destiny Banquet Hall");
  const [selectedEventType, setSelectedEventType] = useState("");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "astor") {
      document.getElementById("venue-astor")?.scrollIntoView({ behavior: "smooth" });
    } else if (filter === "crystal") {
      document.getElementById("venue-crystal")?.scrollIntoView({ behavior: "smooth" });
    } else if (filter === "terrace") {
      document.getElementById("floorplan-viewer-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("banquet-venues")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectVenue = (venue: string) => {
    setSelectedVenue(venue);
  };

  const handleSelectEventType = (eventType: string) => {
    setSelectedEventType(eventType);
  };

  return (
    <>
      {/* Standardized Common PageHero with Quick Floor Navigator Pills */}
      <PageHero
        title={
          <>
            Your Celebrations Deserve a{" "}
            <span className="italic font-normal text-gold-light">Beautiful Setting</span>
          </>
        }
        subtitle="From memorable weddings to meaningful gatherings, discover event spaces designed to bring every occasion to life with generous column-free proportions, refined acoustics, and bespoke hospitality."
        backgroundImage={HERO_BACKGROUND_IMAGE}
        eyebrow="Banquets & Celebrations"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Grand Ballroom & Events" },
        ]}
        conciergeBadge={true}
        badgeText="Event Curation Desk Active"
      >
        {/* Quick Category / Floor Navigator Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => handleFilterClick("all")}
            className={`font-label-button text-xs sm:text-label-button uppercase px-4 sm:px-5 py-2.5 rounded-xl transition-all font-semibold ${
              activeFilter === "all"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-inverse-on-surface hover:bg-surface-container/30 border border-white/10"
            }`}
          >
            Published Venues
          </button>
          <button
            type="button"
            onClick={() => handleFilterClick("astor")}
            className={`font-label-button text-xs sm:text-label-button uppercase px-4 sm:px-5 py-2.5 rounded-xl transition-all font-semibold ${
              activeFilter === "astor"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-inverse-on-surface hover:bg-surface-container/30 border border-white/10"
            }`}
          >
            Destiny Banquet Hall · 500 guests
          </button>
          <button
            type="button"
            onClick={() => handleFilterClick("crystal")}
            className={`font-label-button text-xs sm:text-label-button uppercase px-4 sm:px-5 py-2.5 rounded-xl transition-all font-semibold ${
              activeFilter === "crystal"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-inverse-on-surface hover:bg-surface-container/30 border border-white/10"
            }`}
          >
            Sapphire Banquet Hall · 250 guests
          </button>
          <button
            type="button"
            onClick={() => handleFilterClick("terrace")}
            className={`font-label-button text-xs sm:text-label-button uppercase px-4 sm:px-5 py-2.5 rounded-xl transition-all font-semibold ${
              activeFilter === "terrace"
                ? "bg-primary text-on-primary shadow-md"
                : "bg-surface-container/20 text-inverse-on-surface hover:bg-surface-container/30 border border-white/10"
            }`}
          >
            Golden Knot Lawn · 400 guests
          </button>
        </div>
      </PageHero>

      {/* Section 2: Editorial Introduction & Capacity Metrics */}
      <BanquetIntroMetrics />

      {/* Section 3: Feature Alternating Venue Showcase */}
      <BanquetVenueShowcase
        onSelectVenue={handleSelectVenue}
        activeFilter={activeFilter}
      />

      {/* Section 4: Interactive Floor Plan & CAD Blueprint Viewer */}
      <BanquetFloorPlanViewer />

      {/* Section 5: Events We Host (6 Category Cards) */}
      <BanquetCuratedEvents onSelectEventType={handleSelectEventType} />

      {/* Section 6: Banquet Visual Gallery Preview */}
      <BanquetVisualGallery />

      {/* Section 7: Facilities & Event Support */}
      <BanquetSupportFeatures />

      {/* Section 8: Plan Your Event Consultation & High-Conversion Enquiry */}
      <BanquetEnquirySection
        initialVenue={selectedVenue}
        initialEventType={selectedEventType}
      />

      {/* Section 9: Closing CTA Banner */}
      <BanquetCTABanner />
    </>
  );
}
