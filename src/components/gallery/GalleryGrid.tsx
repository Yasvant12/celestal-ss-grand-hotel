"use client";

import Image from "next/image";
import { GALLERY_CATEGORIES, GalleryPlate } from "./galleryData";

interface GalleryGridProps {
  plates: GalleryPlate[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  viewMode: "grid" | "panoramic";
  onToggleViewMode: (mode: "grid" | "panoramic") => void;
  onOpenLightbox: (id: number) => void;
}

export function GalleryGrid({
  plates,
  activeCategory,
  onSelectCategory,
  viewMode,
  onToggleViewMode,
  onOpenLightbox,
}: GalleryGridProps) {
  return (
    <>
      {/* STICKY FILTER & DISPLAY CONTROLS BAR */}
      <section className="sticky top-[80px] sm:top-[96px] z-30 w-full bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-y border-stone-200/80">
        <div className="site-container py-3 sm:py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Scrollable Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#111827] text-[#E8D3A2] shadow-sm"
                      : "bg-[#F5EFEB] text-stone-600 hover:text-[#7a5508] hover:bg-stone-200/60"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Right Side: Display Count & Density Toggle */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
            <span className="font-label-compact text-xs sm:text-[13px] text-stone-600 tracking-wide whitespace-nowrap">
              Displaying{" "}
              <strong className="text-[#7a5508] font-bold">
                {plates.length}
              </strong>{" "}
              of 48 Curation Plates
            </span>

            {/* Density Toggles */}
            <div className="hidden lg:flex items-center gap-1 bg-stone-200/60 p-1 rounded">
              <button
                onClick={() => onToggleViewMode("grid")}
                className={`px-2 py-1 rounded flex items-center gap-1.5 text-xs font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-[#7a5508] shadow-sm font-semibold"
                    : "text-stone-600 hover:text-[#7a5508]"
                }`}
                title="Editorial Grid View"
              >
                <span className="material-symbols-outlined text-[16px]">
                  grid_view
                </span>
                <span>Grid</span>
              </button>
              <button
                onClick={() => onToggleViewMode("panoramic")}
                className={`px-2 py-1 rounded flex items-center gap-1.5 text-xs font-medium transition-all ${
                  viewMode === "panoramic"
                    ? "bg-white text-[#7a5508] shadow-sm font-semibold"
                    : "text-stone-600 hover:text-[#7a5508]"
                }`}
                title="Panoramic View"
              >
                <span className="material-symbols-outlined text-[16px]">
                  view_agenda
                </span>
                <span>Panoramic</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL MASONRY / ASYMMETRIC GRID */}
      <section className="w-full py-8 sm:py-12 site-container">
        {plates.length === 0 ? (
          <div className="w-full py-20 text-center flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-4xl text-[#B38728]">
              photo_library
            </span>
            <p className="text-base text-stone-600">
              No curation plates found in this category.
            </p>
            <button
              onClick={() => onSelectCategory("all")}
              className="px-5 py-2 rounded bg-[#7a5508] text-white text-xs uppercase font-semibold tracking-wider hover:bg-[#7B5719] transition-colors"
            >
              View All Photos
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-5 sm:gap-6 lg:gap-8 transition-all duration-300 ${
              viewMode === "panoramic"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-12"
            }`}
          >
            {plates.map((plate) => {
              const gridSpan =
                viewMode === "panoramic" ? "col-span-1" : plate.colSpan;

              return (
                <div
                  key={plate.id}
                  onClick={() => onOpenLightbox(plate.id)}
                  className={`${gridSpan} group relative overflow-hidden rounded-xl bg-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-200/60`}
                >
                  <div
                    className={`${
                      viewMode === "panoramic" ? "aspect-[16/10]" : plate.aspect
                    } w-full overflow-hidden relative min-h-[260px] sm:min-h-[320px]`}
                  >
                    <Image
                      src={plate.src}
                      alt={plate.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded bg-[#111827]/80 text-[#E8D3A2] font-eyebrow-luxury text-[10px] uppercase tracking-widest backdrop-blur-sm shadow-sm border border-white/10">
                        {plate.category}
                      </span>
                    </div>

                    {/* Top Fullscreen Icon */}
                    <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2]/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#7a5508] group-hover:text-white transition-all shadow-md">
                      <span className="material-symbols-outlined text-[18px]">
                        fullscreen
                      </span>
                    </div>

                    {/* Bottom Plate Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white flex flex-col gap-1.5 z-10">
                      <span className="font-eyebrow-luxury text-[11px] text-[#E8D3A2] uppercase tracking-widest font-semibold">
                        {plate.plateNumber} • {plate.badge}
                      </span>
                      <h3 className="font-headline-sm text-lg sm:text-xl lg:text-2xl text-white font-serif leading-snug">
                        {plate.title}
                      </h3>
                      <p className="font-body-sm text-xs sm:text-sm text-stone-300 line-clamp-2 max-w-xl leading-relaxed">
                        {plate.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

