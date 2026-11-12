"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ROOMS_DATA, RoomData } from "./roomsData";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Compass,
  Phone,
  MessageCircle,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";
import { RoomImagePlaceholder } from "./RoomImagePlaceholder";

export interface RoomDetailModalProps {
  isOpen: boolean;
  roomId: string;
  defaultTab?: "gallery" | "floorplan";
  onClose: () => void;
}

export function RoomDetailModal({
  isOpen,
  roomId,
  defaultTab = "gallery",
  onClose,
}: RoomDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "floorplan">(defaultTab);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const room: RoomData = ROOMS_DATA[roomId] || ROOMS_DATA["executive"];
  const images = room.images;

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      images.length === 0 ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      images.length === 0 ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (activeTab === "gallery") {
        if (e.key === "ArrowLeft") handlePrevImage();
        if (e.key === "ArrowRight") handleNextImage();
      }
    };

    if (!isOpen) return;

    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, activeTab, onClose, handleNextImage, handlePrevImage]);

  if (!isOpen) return null;

  const currentImage = images[currentImageIndex];

  return (
    <div className="fixed inset-0 z-[100000] bg-noir-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-surface-container-lowest border border-[#B38728]/40 rounded-2xl max-w-6xl w-full shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="px-4 sm:px-6 py-4 border-b border-stone-200 bg-surface-champagne/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary font-bold">
                Residence Blueprint &amp; Gallery
              </span>
              <span className="text-stone-400 hidden sm:inline">•</span>
              <span className="font-label-compact text-xs text-stone-600 hidden sm:inline">
                {room.tagline}
              </span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:gap-3">
            {/* Tab Switcher */}
            <div className="inline-flex p-1 bg-surface-container-high rounded-xl text-xs font-semibold tracking-wider uppercase">
              <button
                type="button"
                onClick={() => setActiveTab("gallery")}
                aria-label="Show room photo gallery"
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "gallery"
                    ? "bg-primary-container text-on-primary-container font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Images className="w-4 h-4" />
                <span className="hidden sm:inline">Photo Gallery</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("floorplan")}
                aria-label="Show room floor plan"
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "floorplan"
                    ? "bg-primary-container text-on-primary-container font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span className="hidden sm:inline">Floor Plan</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Two-Column Interior Body (Scrollable) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* ================= LEFT COLUMN: Visual Presentation ================= */}
          <div className="lg:col-span-7 bg-noir-charcoal p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200 relative min-h-[440px] lg:min-h-[560px]">
            {activeTab === "gallery" ? (
              /* VIEW 1: IMAGE CAROUSEL TAB */
              <div className="flex flex-col h-full justify-between">
                <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[340px] max-h-[420px] rounded-xl overflow-hidden bg-noir-charcoal flex items-center justify-center group shadow-inner">
                  {currentImage?.src ? (
                    <>
                      <Image
                        src={currentImage.src}
                        alt={currentImage.label}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-contain transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/70 via-transparent to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <RoomImagePlaceholder roomName={room.name} />
                  )}

                  {/* Top Indicator Badge */}
                  <div className="absolute top-4 left-4 bg-noir-charcoal/85 backdrop-blur-md px-3 py-1 rounded-md text-surface-container-lowest font-label-compact text-xs tracking-wider border border-white/10">
                    <span className="text-gold-light font-bold">
                      {images.length > 0 ? `${currentImageIndex + 1} / ${images.length}` : "No photos"}
                    </span>
                    {currentImage ? ` • ${currentImage.label}` : ""}
                  </div>

                  {/* Arrow Controls */}
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    disabled={images.length < 2}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-noir-charcoal/70 hover:bg-noir-charcoal backdrop-blur-md text-white flex items-center justify-center transition-all opacity-90 hover:scale-105 border border-white/10 cursor-pointer"
                    title="Previous Image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    disabled={images.length < 2}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-noir-charcoal/70 hover:bg-noir-charcoal backdrop-blur-md text-white flex items-center justify-center transition-all opacity-90 hover:scale-105 border border-white/10 cursor-pointer"
                    title="Next Image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                    <p className="font-body-sm text-xs sm:text-sm text-stone-300 line-clamp-2">
                      {currentImage?.caption ?? "Room photographs are not available yet."}
                    </p>
                  </div>
                </div>

                {/* Bottom Thumbnail Strip */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between pb-2 text-[11px] font-eyebrow-luxury uppercase tracking-widest text-gold-light">
                    <span>Interactive Photo Preview</span>
                    <span className="text-stone-400">Click thumbnail to inspect</span>
                  </div>
                  <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={img.label}
                        type="button"
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative h-14 w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          idx === currentImageIndex
                            ? "border-primary shadow-sm scale-105 opacity-100"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        {img.src ? (
                          <Image
                            src={img.src}
                            alt={img.label}
                            fill
                            sizes="80px"
                            className="object-contain"
                          />
                        ) : (
                          <RoomImagePlaceholder roomName={room.name} compact />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* VIEW 2: ARCHITECTURAL FLOOR PLAN TAB */
              <div className="flex flex-col h-full justify-between">
                <div className="relative w-full flex-1 min-h-[320px] sm:min-h-[380px] rounded-xl overflow-hidden bg-[#0d131f] border border-gold-metallic/30 p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

                  {/* Top Specs */}
                  <div className="relative z-10 flex items-center justify-between border-b border-gold-metallic/20 pb-2">
                    <div className="flex flex-col">
                      <span className="font-eyebrow-luxury text-[10px] text-gold-light uppercase tracking-widest">
                        {room.floorplan.title}
                      </span>
                      <span className="font-mono text-[11px] text-stone-400">
                        {room.floorplan.scale}
                      </span>
                    </div>
                    <div className="px-2.5 py-0.5 bg-gold-metallic/20 border border-gold-metallic/40 rounded text-gold-light font-mono text-[10px]">
                      {room.floorplan.dimensions}
                    </div>
                  </div>

                  {/* Center Vector Schematic */}
                  <div className="relative z-10 w-full flex-1 flex items-center justify-center my-3 min-h-[200px]">
                    <svg
                      className="w-full h-full max-h-[220px] text-gold-light/80 drop-shadow-md"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      viewBox="0 0 600 300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="#131b2c"
                        fillOpacity="0.6"
                        height="240"
                        rx="4"
                        stroke="#B38728"
                        strokeDasharray="4 2"
                        strokeWidth="1.5"
                        width="560"
                        x="20"
                        y="30"
                      />
                      <rect
                        fill="#1a243b"
                        fillOpacity="0.4"
                        height="130"
                        stroke="#E8D3A2"
                        strokeWidth="1"
                        width="230"
                        x="220"
                        y="45"
                      />
                      <rect
                        fill="#1a243b"
                        fillOpacity="0.4"
                        height="130"
                        stroke="#E8D3A2"
                        strokeWidth="1"
                        width="180"
                        x="35"
                        y="45"
                      />
                      <rect
                        fill="#162033"
                        fillOpacity="0.4"
                        height="80"
                        stroke="#E8D3A2"
                        strokeWidth="1"
                        width="180"
                        x="35"
                        y="180"
                      />
                      <rect
                        fill="#162033"
                        fillOpacity="0.4"
                        height="80"
                        stroke="#E8D3A2"
                        strokeWidth="1"
                        width="110"
                        x="220"
                        y="180"
                      />
                      <rect
                        fill="#162033"
                        fillOpacity="0.4"
                        height="80"
                        stroke="#E8D3A2"
                        strokeWidth="1"
                        width="115"
                        x="335"
                        y="180"
                      />
                      <rect
                        fill="#1b2842"
                        fillOpacity="0.6"
                        height="215"
                        stroke="#B38728"
                        strokeWidth="1.2"
                        width="105"
                        x="460"
                        y="45"
                      />
                      {/* Bed */}
                      <rect
                        fill="#B38728"
                        fillOpacity="0.2"
                        height="60"
                        stroke="#B38728"
                        width="70"
                        x="80"
                        y="70"
                      />
                      <line
                        stroke="#E8D3A2"
                        strokeDasharray="2 2"
                        x1="80"
                        x2="150"
                        y1="90"
                        y2="90"
                      />
                      {/* Sofa */}
                      <path
                        d="M 250 80 L 320 80 L 320 130"
                        fill="none"
                        stroke="#B38728"
                        strokeWidth="2"
                      />
                      <circle cx="280" cy="110" r="14" stroke="#E8D3A2" strokeWidth="1" />
                    </svg>

                    {/* Interactive Hotspot Pins */}
                    <div className="absolute inset-0 pointer-events-auto">
                      {room.floorplan.spaces.map((sp) => (
                        <div
                          key={sp.name}
                          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                          style={{ left: sp.x, top: sp.y }}
                        >
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-noir-charcoal/90 text-surface-container-lowest rounded-full border border-gold-metallic/40 shadow-lg text-[11px] font-label-compact whitespace-nowrap hover:bg-primary transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-ping" />
                            <span className="font-semibold">{sp.name}</span>
                            <span className="text-gold-light font-mono text-[10px] pl-1 border-l border-white/20">
                              {sp.area}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Legend */}
                  <div className="relative z-10 pt-2 border-t border-gold-metallic/20 flex flex-wrap items-center justify-between text-[11px] text-stone-400">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded bg-primary-container" />
                        <span>Private Chambers</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded bg-gold-metallic" />
                        <span>Marble Bathrooms</span>
                      </div>
                    </div>
                    <span className="text-gold-light font-mono text-[10px]">
                      Auto-scaled CAD Specification
                    </span>
                  </div>
                </div>

                {/* Metric Summary Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-surface-container-lowest">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <span className="block text-[10px] uppercase font-eyebrow-luxury text-gold-light">
                      Total Area
                    </span>
                    <span className="font-label-compact text-xs font-semibold">
                      {room.sqft} ({room.sqm})
                    </span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <span className="block text-[10px] uppercase font-eyebrow-luxury text-gold-light">
                      Ceiling Clear
                    </span>
                    <span className="font-label-compact text-xs font-semibold">
                      {room.ceilingHeight}
                    </span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <span className="block text-[10px] uppercase font-eyebrow-luxury text-gold-light">
                      Acoustics
                    </span>
                    <span className="font-label-compact text-xs font-semibold truncate">
                      {room.acousticRating.split(" ")[0]} Isolation
                    </span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <span className="block text-[10px] uppercase font-eyebrow-luxury text-gold-light">
                      Climate
                    </span>
                    <span className="font-label-compact text-xs font-semibold">
                      Dual Inverter
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT COLUMN: Narrative & Highlights ================= */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-surface-container-lowest flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              {/* Room Header Strip */}
              <div className="flex flex-col gap-1.5 border-b border-stone-200 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-eyebrow-luxury text-[11px] text-primary uppercase tracking-widest font-bold">
                    {room.wing}
                  </span>
                  <span className="px-3 py-0.5 bg-surface-champagne rounded-full font-label-compact text-xs text-on-surface font-semibold">
                    {room.occupancy}
                  </span>
                </div>

                <h2 className="font-headline-sm text-2xl text-on-surface font-serif font-bold mt-1">
                  {room.name}
                </h2>

                <div className="flex items-center gap-2 pt-1 font-label-compact text-xs text-stone-600">
                  <span className="font-bold text-on-surface text-sm">{room.sqft}</span>
                  <span className="text-stone-400">({room.sqm})</span>
                  <span>•</span>
                  <span>{room.bedConfig}</span>
                </div>
              </div>

              {/* Narrative Description */}
              <div className="flex flex-col gap-1">
                <span className="font-eyebrow-luxury text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  Architectural Narrative
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Spec Matrix */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-surface-container-low rounded-xl border border-stone-200/80 text-xs font-label-compact">
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-eyebrow-luxury">
                    Ceiling Height
                  </span>
                  <span className="font-semibold text-stone-800">{room.ceilingHeight}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-eyebrow-luxury">
                    Balcony Vista
                  </span>
                  <span className="font-semibold text-stone-800">{room.view}</span>
                </div>
                <div className="col-span-2 pt-1.5 border-t border-stone-200">
                  <span className="text-stone-500 block text-[10px] uppercase font-eyebrow-luxury">
                    Sound Attenuation
                  </span>
                  <span className="font-semibold text-stone-800">{room.acousticRating}</span>
                </div>
              </div>

              {/* In-Room Curated Amenities Grid */}
              <div className="flex flex-col gap-2">
                <span className="font-eyebrow-luxury text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  Signature In-Chamber Amenities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {room.amenities.map((am) => (
                    <div
                      key={am.title}
                      className="p-2.5 bg-surface-container-low rounded-lg border border-stone-100 flex flex-col"
                    >
                      <span className="font-label-compact text-xs text-stone-800 font-semibold">
                        {am.title}
                      </span>
                      <span className="font-body-sm text-[11px] text-stone-500 leading-tight mt-0.5">
                        {am.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Reservation Action Strip */}
            <div className="pt-6 mt-6 border-t border-stone-200 flex flex-col gap-3">
              <a
                href={`tel:${HOTEL_INFO.phones.primary}`}
                onClick={onClose}
                className="w-full py-3.5 px-4 bg-primary hover:bg-gold-deep text-on-primary font-label-button text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Enquire About This Room</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  className="py-2.5 px-3 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-compact text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-stone-200"
                  href={`tel:${HOTEL_INFO.phones.primary}`}
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{HOTEL_INFO.phones.primary}</span>
                </a>
                <a
                  className="py-2.5 px-3 bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white text-stone-800 font-label-compact text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-[#25D366]/30"
                  href={`${HOTEL_INFO.whatsappUrl}?text=Hello%20Celestial%20SS%20Grand%20Hotel%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                    room.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
