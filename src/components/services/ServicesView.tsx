"use client";

import { useState } from "react";
import { SERVICES_DATA } from "./servicesData";
import { ServicesHero } from "./ServicesHero";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesGrid } from "./ServicesGrid";
import { ServicesGalleryModal } from "./ServicesGalleryModal";
import { ServicesEnquirySection } from "./ServicesEnquirySection";
import { ServicesPreFooterBanner } from "./ServicesPreFooterBanner";

export function ServicesView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedEnquiryService, setSelectedEnquiryService] = useState(
    SERVICES_DATA[0].title
  );

  const handleOpenGallery = (serviceId: number) => {
    setActiveServiceIndex(serviceId);
    setActivePhotoIndex(0);
    setModalOpen(true);
  };

  const handleCloseGallery = () => {
    setModalOpen(false);
  };

  const handleSwitchService = (serviceIndex: number) => {
    setActiveServiceIndex(serviceIndex);
    setActivePhotoIndex(0);
  };

  const handleSelectPhoto = (photoIndex: number) => {
    setActivePhotoIndex(photoIndex);
  };

  const handleNextPhoto = () => {
    const currentService = SERVICES_DATA[activeServiceIndex];
    if (!currentService) return;
    const count = currentService.photos.length;
    if (count === 0) return;
    setActivePhotoIndex((prev) => (prev + 1) % count);
  };

  const handlePrevPhoto = () => {
    const currentService = SERVICES_DATA[activeServiceIndex];
    if (!currentService) return;
    const count = currentService.photos.length;
    if (count === 0) return;
    setActivePhotoIndex((prev) => (prev - 1 + count) % count);
  };

  const handleEnquireFromModal = (serviceTitle: string) => {
    setSelectedEnquiryService(serviceTitle);
    setModalOpen(false);
    setTimeout(() => {
      const target = document.getElementById("services-enquiry-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Dark Architectural Hero Pattern */}
      <ServicesHero />

      {/* 2. Short Services Introduction (3 Value Cards) */}
      <ServicesIntro />

      {/* 3. Services Card Grid */}
      <ServicesGrid onOpenGallery={handleOpenGallery} />

      {/* 4. Interactive Photo Gallery Modal with real photos & thumbnail switching */}
      <ServicesGalleryModal
        isOpen={modalOpen}
        activeServiceIndex={activeServiceIndex}
        activePhotoIndex={activePhotoIndex}
        onClose={handleCloseGallery}
        onSwitchService={handleSwitchService}
        onSelectPhoto={handleSelectPhoto}
        onNextPhoto={handleNextPhoto}
        onPrevPhoto={handlePrevPhoto}
        onEnquire={handleEnquireFromModal}
      />

      {/* 5. Elegant Services Enquiry Section with Real Email-Enquiry Dispatch */}
      <ServicesEnquirySection
        selectedServiceTitle={selectedEnquiryService}
        onServiceSelectChange={setSelectedEnquiryService}
      />

      {/* 6. Pre-Footer Banner linking to Rooms and Banquet Halls */}
      <ServicesPreFooterBanner />
    </div>
  );
}
