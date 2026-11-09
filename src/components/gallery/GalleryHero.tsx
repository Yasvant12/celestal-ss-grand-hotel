"use client";

import { PageHero } from "@/components/shared/PageHero";
import { GALLERY_CATEGORIES, GALLERY_PLATES } from "./galleryData";

interface GalleryHeroProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function GalleryHero({
  activeCategory,
  onSelectCategory,
}: GalleryHeroProps) {
  return (
    <PageHero
      eyebrow="Visual Chronicles & Spaces"
      title={
        <>
          Explore Our <span className="italic font-normal text-gold-light">Gallery</span>
        </>
      }
      subtitle="Discover the spaces, experiences, and moments that make every stay special. An intimate visual journey through contemporary architecture, grand celebratory sanctuaries, and artisanal culinary art."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      badgeText={`Curated Archive (${GALLERY_PLATES.length} Photographs)`}
    >
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm ${
                isActive
                  ? "bg-white/25 text-gold-light ring-1 ring-gold-metallic/60"
                  : "bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          );
        })}
      </div>
    </PageHero>
  );
}
