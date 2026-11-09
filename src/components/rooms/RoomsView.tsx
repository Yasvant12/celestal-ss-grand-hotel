"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { HERO_BACKGROUND_IMAGE } from "@/lib/constants";
import { RoomFilterBar } from "@/components/rooms/RoomFilterBar";
import { RoomCollection } from "@/components/rooms/RoomCollection";
import { RoomAmenitiesMatrix } from "@/components/rooms/RoomAmenitiesMatrix";
import { RoomValuePillars } from "@/components/rooms/RoomValuePillars";
import { RoomDetailModal } from "@/components/rooms/RoomDetailModal";

export function RoomsView() {
  const [activeFilter, setActiveFilter] = useState<"all" | "executive" | "courtyard">("all");
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedSuiteId, setSelectedSuiteId] = useState("executive");
  const [detailModalTab, setDetailModalTab] = useState<"gallery" | "floorplan">("gallery");

  const handleOpenDetail = (suiteId: string, defaultTab: "gallery" | "floorplan" = "gallery") => {
    setSelectedSuiteId(suiteId);
    setDetailModalTab(defaultTab);
    setDetailModalOpen(true);
  };

  return (
    <>
      {/* 1. Fixed Header with Top Announcement Bar */}
      <Header />

      {/* Main Content Sections (Padding accounts for fixed header) */}
      <main className="w-full pt-[116px] md:pt-[132px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section 1: Standardized PageHero with Filter Bar Slot */}
          <PageHero
            eyebrow="Accommodation &amp; Residences"
            title={
              <>
                Stay in Comfort. Experience{" "}
                <span className="italic font-normal text-gold-light">More.</span>
              </>
            }
            subtitle="Discover thoughtfully sculpted rooms and residences combining contemporary comfort, serene architectural contours, and bespoke hospitality crafted for restful interludes."
            backgroundImage={HERO_BACKGROUND_IMAGE}
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Rooms & Suites" },
            ]}
            badgeText="Reservations Desk"
          >
            <RoomFilterBar
              activeFilter={activeFilter}
              onFilterChange={(f) => {
                setActiveFilter(f);
                // Scroll down slightly to collections if mobile
                const target = document.getElementById("room-collections");
                if (target && window.innerWidth < 768) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </PageHero>

          {/* Section 2: Curated Room Categories (Editorial Grid) */}
          <RoomCollection
            activeFilter={activeFilter}
            onOpenDetail={handleOpenDetail}
          />

          {/* Section 3: Room Amenities & Specifications Matrix (8 Cards) */}
          <RoomAmenitiesMatrix />

          {/* Section 4: Why Discerning Guests Choose Celestal SS Grand (3 Pillars) */}
          <RoomValuePillars />

        </div>
      </main>

      {/* 2. Standardized Global Footer */}
      <Footer />

      {/* Luxury Room Detail & Architectural Floor Plan Modal */}
      <RoomDetailModal
        isOpen={detailModalOpen}
        suiteId={selectedSuiteId}
        defaultTab={detailModalTab}
        onClose={() => setDetailModalOpen(false)}
      />
    </>
  );
}
