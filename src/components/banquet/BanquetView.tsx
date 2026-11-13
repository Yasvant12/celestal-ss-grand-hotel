"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { getHeroBackgroundImageForPage } from "@/lib/constants";
import { BanquetIntroMetrics } from "./BanquetIntroMetrics";
import { BanquetVenueShowcase } from "./BanquetVenueShowcase";
import { BanquetFloorPlanViewer } from "./BanquetFloorPlanViewer";
import { BanquetCuratedEvents } from "./BanquetCuratedEvents";
import { BanquetVisualGallery } from "./BanquetVisualGallery";
import { BanquetSupportFeatures } from "./BanquetSupportFeatures";
import { BanquetEnquirySection } from "./BanquetEnquirySection";
import { BanquetCTABanner } from "./BanquetCTABanner";

export function BanquetView() {
  const [selectedVenue, setSelectedVenue] = useState("Sapphire Hall");
  const [selectedEventType, setSelectedEventType] = useState("");

  const handleSelectVenue = (venue: string) => {
    setSelectedVenue(venue);
  };

  const handleSelectEventType = (eventType: string) => {
    setSelectedEventType(eventType);
  };

  return (
    <>
      {/* Standardized Banquet Hero */}
      <PageHero
        title={
          <>
            Your Celebrations Deserve a{" "}
            <span className="italic font-normal text-gold-light">Beautiful Setting</span>
          </>
        }
        backgroundImage={getHeroBackgroundImageForPage("banquet")}
        backgroundImageAlt="Elegant banquet ballroom with a wedding stage and warm lighting"
        backgroundImagePosition="center"
        eyebrow="Banquets & Celebrations"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Grand Ballroom & Events" },
        ]}
      />

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
        onEventTypeChange={handleSelectEventType}
      />

      {/* Section 9: Closing CTA Banner */}
      <BanquetCTABanner />
    </>
  );
}
