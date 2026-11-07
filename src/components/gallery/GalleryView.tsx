"use client";

import { useState, useMemo } from "react";
import { GALLERY_PLATES, GalleryPlate } from "./galleryData";
import { GalleryHero } from "./GalleryHero";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryPerspectivePillars } from "./GalleryPerspectivePillars";
import { GalleryCTABanner } from "./GalleryCTABanner";
import { GalleryLightbox } from "./GalleryLightbox";

export function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "panoramic">("grid");
  const [lightboxPlateId, setLightboxPlateId] = useState<number | null>(null);

  // Filter plates based on active category
  const filteredPlates = useMemo(() => {
    if (activeCategory === "all") return GALLERY_PLATES;
    return GALLERY_PLATES.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  // Find index in current visible filtered plates
  const currentFilteredIndex = useMemo(() => {
    if (lightboxPlateId === null) return -1;
    return filteredPlates.findIndex((p) => p.id === lightboxPlateId);
  }, [lightboxPlateId, filteredPlates]);

  const currentPlate = useMemo(() => {
    if (currentFilteredIndex === -1) return null;
    return filteredPlates[currentFilteredIndex];
  }, [currentFilteredIndex, filteredPlates]);

  const handleOpenLightbox = (id: number) => {
    setLightboxPlateId(id);
  };

  const handleCloseLightbox = () => {
    setLightboxPlateId(null);
  };

  const handlePrev = () => {
    if (filteredPlates.length === 0) return;
    const prevIndex =
      (currentFilteredIndex - 1 + filteredPlates.length) % filteredPlates.length;
    setLightboxPlateId(filteredPlates[prevIndex].id);
  };

  const handleNext = () => {
    if (filteredPlates.length === 0) return;
    const nextIndex = (currentFilteredIndex + 1) % filteredPlates.length;
    setLightboxPlateId(filteredPlates[nextIndex].id);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Signature Architectural Dark Hero */}
      <GalleryHero
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 2. Sticky Category Controls & Asymmetrical Editorial Grid */}
      <GalleryGrid
        plates={filteredPlates}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 3. Architectural Perspective Highlight Break */}
      <GalleryPerspectivePillars />

      {/* 4. Closing Call to Action Banner */}
      {/* <GalleryCTABanner /> */}

      {/* 5. Interactive Fullscreen Lightbox Modal */}
      <GalleryLightbox
        plate={currentPlate}
        currentIndex={currentFilteredIndex >= 0 ? currentFilteredIndex : 0}
        totalCount={filteredPlates.length}
        isOpen={lightboxPlateId !== null && currentPlate !== null}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

