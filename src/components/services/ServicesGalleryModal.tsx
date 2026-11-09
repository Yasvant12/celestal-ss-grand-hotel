"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "./servicesData";

interface ServicesGalleryModalProps {
  isOpen: boolean;
  activeServiceIndex: number;
  activePhotoIndex: number;
  onClose: () => void;
  onSwitchService: (serviceIndex: number) => void;
  onSelectPhoto: (photoIndex: number) => void;
  onNextPhoto: () => void;
  onPrevPhoto: () => void;
  onEnquire: (serviceTitle: string) => void;
}

export function ServicesGalleryModal({
  isOpen,
  activeServiceIndex,
  activePhotoIndex,
  onClose,
  onSwitchService,
  onSelectPhoto,
  onNextPhoto,
  onPrevPhoto,
  onEnquire,
}: ServicesGalleryModalProps) {
  // Handle keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevPhoto();
      if (e.key === "ArrowRight") onNextPhoto();
    },
    [isOpen, onClose, onPrevPhoto, onNextPhoto]
  );

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];
  const photos = currentService.photos;
  const safePhotoIndex = Math.min(activePhotoIndex, photos.length - 1);
  const currentPhoto = photos[safePhotoIndex] || photos[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo gallery for ${currentService.title}`}
      className="fixed inset-0 z-[100000] flex h-dvh flex-col justify-between overflow-hidden bg-[#111827]/95 p-2 backdrop-blur-md animate-in fade-in duration-200 sm:p-4 md:p-6"
    >
      {/* 1. Top Modal Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pb-3 sm:pb-4 border-b border-stone-700/60 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#7a5508] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm">
            C
          </div>
          <div>
            <h4 className="font-headline-sm text-base sm:text-lg md:text-xl text-[#FAF7F2] font-serif leading-tight">
              {currentService.title}
            </h4>
            <span className="font-eyebrow-luxury text-[10px] text-[#E8D3A2] tracking-widest uppercase font-semibold">
              {currentService.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-label-compact text-xs text-stone-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Photo {safePhotoIndex + 1} of {photos.length}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#FAF7F2] font-label-button text-xs tracking-wider transition-colors border border-white/10 cursor-pointer"
            type="button"
            title="Close Gallery (Esc)"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
            <span className="hidden sm:inline">ESC</span>
          </button>
        </div>
      </div>

      {/* 2. Discipline Switcher Tabs Inside Modal */}
      <div className="w-full max-w-7xl mx-auto py-2.5 sm:py-3 overflow-x-auto scrollbar-none flex items-center gap-2 shrink-0">
        {SERVICES_DATA.map((srv, idx) => {
          const isSelected = idx === activeServiceIndex;
          return (
            <button
              key={srv.id}
              onClick={() => onSwitchService(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-label-button tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? "bg-[#7a5508] text-white shadow-sm font-semibold ring-1 ring-[#E8D3A2]"
                  : "bg-white/10 text-stone-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {srv.title.split(" & ")[0]}
            </button>
          );
        })}
      </div>

      {/* 3. Main Stage (Large Image & Navigation Controls) */}
      <div className="relative my-2 mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={onPrevPhoto}
          aria-label="Previous Photo"
          className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-[#111827]/85 hover:bg-[#7a5508] text-[#E8D3A2] hover:text-white flex items-center justify-center transition-all backdrop-blur-md shadow-lg border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-[24px]">
            chevron_left
          </span>
        </button>

        {/* Central Active Image Container */}
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain select-none transition-opacity duration-300"
          />

          {/* Caption Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#111827] via-[#111827]/75 to-transparent z-10">
            <p className="font-body-sm text-xs sm:text-sm text-[#FAF7F2] max-w-3xl leading-relaxed">
              {currentPhoto.caption}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNextPhoto}
          aria-label="Next Photo"
          className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-[#111827]/85 hover:bg-[#7a5508] text-[#E8D3A2] hover:text-white flex items-center justify-center transition-all backdrop-blur-md shadow-lg border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-[24px]">
            chevron_right
          </span>
        </button>
      </div>

      {/* 4. Bottom Real Thumbnail Strip & CTA Action */}
      <div className="w-full max-w-7xl mx-auto pt-3 border-t border-stone-700/60 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0">
        {/* Real Thumbnail Photos (NOT empty boxes!) */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 scrollbar-none">
          {photos.map((photo, pIdx) => {
            const isThumbActive = pIdx === safePhotoIndex;
            return (
              <button
                key={pIdx}
                type="button"
                onClick={() => onSelectPhoto(pIdx)}
                className={`relative w-16 h-12 rounded overflow-hidden shrink-0 transition-transform cursor-pointer border ${
                  isThumbActive
                    ? "ring-2 ring-[#E8D3A2] scale-105 border-white opacity-100"
                    : "border-stone-700 opacity-60 hover:opacity-100"
                }`}
                title={`Photo ${pIdx + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Action Button: Enquire About This Service */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onEnquire(currentService.title)}
            className="px-5 py-2.5 bg-[#7a5508] hover:bg-[#7B5719] text-white rounded font-label-button text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md font-semibold cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              edit_calendar
            </span>
            <span>Enquire About This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
}
