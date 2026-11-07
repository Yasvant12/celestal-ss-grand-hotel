"use client";

import Link from "next/link";
import { HERO_BACKGROUND_IMAGE } from "@/lib/constants";
import { GALLERY_CATEGORIES } from "./galleryData";

interface GalleryHeroProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function GalleryHero({
  activeCategory,
  onSelectCategory,
}: GalleryHeroProps) {
  return (
    <section className="relative w-full bg-[#111827] text-[#FAF7F2] overflow-hidden -mt-[116px] md:-mt-[132px] pt-[150px] md:pt-[180px] pb-16 md:pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-[#111827]/88 to-[#111827] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#966d23]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#B38728]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative w-full site-container flex flex-col gap-6 md:gap-8">
        {/* Breadcrumb & Archive Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label-compact text-xs uppercase tracking-widest text-stone-300/80"
          >
            <Link
              href="/"
              prefetch={true}
              className="hover:text-[#E8D3A2] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#B38728]/40">/</span>
            <span className="text-[#E8D3A2] font-semibold">Gallery</span>
          </nav>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/10 shadow-sm backdrop-blur-sm border border-[#FAF7F2]/10">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B38728] animate-pulse" />
            <span className="font-label-compact text-[11px] text-[#E8D3A2] uppercase tracking-widest font-semibold">
              Curated Archive (48 Photographs)
            </span>
          </div>
        </div>

        {/* Main Headline Content */}
        <div className="max-w-4xl flex flex-col gap-3 pt-1">
          <span className="font-eyebrow-luxury text-eyebrow-luxury text-[#E8D3A2] tracking-widest uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#B38728]">
              photo_camera
            </span>
            Visual Chronicles &amp; Spaces
          </span>
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#FAF7F2] leading-tight font-serif">
            Explore Our <span className="italic font-light text-[#E8D3A2]">Gallery</span>
          </h1>
          <p className="font-body-md text-stone-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed pt-1">
            Discover the spaces, experiences, and moments that make every stay special. An intimate visual journey through contemporary architecture, grand celebratory sanctuaries, and artisanal culinary art.
          </p>
        </div>

        {/* Quick Interactive Pills Bar */}
        <div className="w-full pt-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all shadow-sm ${
                    isActive
                      ? "bg-[#FAF7F2]/25 text-[#E8D3A2] ring-1 ring-[#B38728]/60"
                      : "bg-[#FAF7F2]/5 text-stone-300 hover:bg-[#FAF7F2]/15 hover:text-white"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

