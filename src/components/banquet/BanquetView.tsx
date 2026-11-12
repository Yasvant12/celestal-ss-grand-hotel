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
  const [activeVenueId, setActiveVenueId] = useState("all");
  const [selectedVenue, setSelectedVenue] = useState("Sapphire Hall");
  const [selectedEventType, setSelectedEventType] = useState("");

  const handleVenueNavigation = (venueId: string) => {
    setActiveVenueId(venueId);
    if (venueId === "floorplan-viewer-section") {
      document.getElementById("floorplan-viewer-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .getElementById(venueId === "all" ? "banquet-venues" : venueId)
        ?.scrollIntoView({ behavior: "smooth" });
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
          {[
            { id: "all", label: "All Venues" },
            { id: "venue-sapphire", label: "Sapphire Hall" },
            { id: "venue-emerald", label: "Emerald Hall" },
            { id: "venue-ruby", label: "Ruby Lounge" },
            { id: "venue-destiny-hall", label: "Destiny Hall" },
            { id: "venue-restaurant-60", label: "Restaurants" },
            { id: "venue-connected-lawn", label: "Green Lawn + Banquet" },
            { id: "venue-destiny-lawn", label: "Destiny Hall Lawn" },
            { id: "floorplan-viewer-section", label: "Floor Plans" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleVenueNavigation(item.id)}
              className={`rounded-xl px-4 py-2.5 font-label-button text-xs font-semibold uppercase transition-all sm:px-5 sm:text-label-button ${activeVenueId === item.id
                ? "bg-primary text-on-primary shadow-md"
                : "border border-white/10 bg-surface-container/20 text-inverse-on-surface hover:bg-surface-container/30"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Section 2: Editorial Introduction & Capacity Metrics */}
      <BanquetIntroMetrics />

      {/* Section 3: Feature Alternating Venue Showcase */}
      <BanquetVenueShowcase
        onSelectVenue={handleSelectVenue}
      />

      {/* Section 4: Interactive Floor Plan & CAD Blueprint Viewer */}
      {/* <BanquetFloorPlanViewer /> */}

      {/* Section 5: Events We Host (6 Category Cards) */}
      <BanquetCuratedEvents onSelectEventType={handleSelectEventType} />

      {/* Section 6: Banquet Visual Gallery Preview */}
      {/* <BanquetVisualGallery /> */}

      {/* Section 7: Facilities & Event Support */}
      <BanquetSupportFeatures />

      {/* Section 8: Plan Your Event Consultation & High-Conversion Enquiry */}
      <BanquetEnquirySection
        key={selectedVenue}
        initialVenue={selectedVenue}
        initialEventType={selectedEventType}
      />

      {/* Section 9: Closing CTA Banner */}
      <BanquetCTABanner />
    </>
  );
}
