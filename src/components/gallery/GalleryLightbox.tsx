"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryPlate } from "./galleryData";

interface GalleryLightboxProps {
  plate: GalleryPlate | null;
  currentIndex: number;
  totalCount: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  plate,
  currentIndex,
  totalCount,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  // Handle keyboard events: Escape, ArrowLeft, ArrowRight
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
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

  if (!isOpen || !plate) return null;

  const displayIndex = String(currentIndex + 1).padStart(2, "0");
  const total = String(totalCount).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visual plate detail: ${plate.title}`}
      className="fixed inset-0 z-[100000] flex h-dvh flex-col justify-between overflow-hidden bg-black/95 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6 lg:p-8"
    >
      {/* Top Navigation Bar */}
      <div className="w-full flex items-center justify-between text-[#FAF7F2] z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-eyebrow-luxury text-xs text-[#E8D3A2] uppercase tracking-widest font-semibold">
            {displayIndex} / {total}
          </span>
          <span className="hidden sm:inline text-[#B38728]/40">•</span>
          <span className="hidden sm:inline px-3 py-1 rounded bg-white/10 text-[#FAF7F2] font-eyebrow-luxury text-[11px] uppercase tracking-widest border border-white/10">
            {plate.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
          title="Close Lightbox (Esc)"
          aria-label="Close Lightbox"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Centered Stage & Navigation Arrows */}
      <div className="relative my-2 flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden sm:my-4">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#111827]/85 hover:bg-[#7a5508] text-white flex items-center justify-center transition-all shadow-xl border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
          title="Previous Image (Left Arrow)"
          aria-label="Previous Image"
        >
          <span className="material-symbols-outlined text-[26px] sm:text-[30px]">
            chevron_left
          </span>
        </button>

        {/* Main Stage Image */}
        <div className="relative h-full max-h-[calc(100dvh-220px)] w-full max-w-5xl">
          <Image
            src={plate.src}
            alt={plate.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain rounded-lg drop-shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#111827]/85 hover:bg-[#7a5508] text-white flex items-center justify-center transition-all shadow-xl border border-white/10 cursor-pointer hover:scale-105 active:scale-95"
          title="Next Image (Right Arrow)"
          aria-label="Next Image"
        >
          <span className="material-symbols-outlined text-[26px] sm:text-[30px]">
            chevron_right
          </span>
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white bg-[#111827]/80 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 z-20">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-eyebrow-luxury text-[10px] sm:text-[11px] text-[#E8D3A2] uppercase tracking-widest font-semibold">
            {plate.plateNumber} • {plate.badge}
          </span>
          <h3 className="font-headline-sm text-base sm:text-lg md:text-xl text-white font-serif">
            {plate.title}
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-stone-300 line-clamp-2 max-w-2xl leading-relaxed">
            {plate.description}
          </p>
        </div>

        <Link
          href="/contact"
          prefetch={true}
          onClick={onClose}
          className="px-6 py-2.5 bg-[#7a5508] hover:bg-[#7B5719] text-white font-label-button text-xs uppercase tracking-wider rounded font-semibold whitespace-nowrap transition-colors shadow-md shrink-0"
        >
          Enquire About This Space
        </Link>
      </div>
    </div>
  );
}
