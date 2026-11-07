import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryView } from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Photo Gallery | Celestal SS Grand Hotel, Lucknow",
  description:
    "Explore photographs of rooms, banquet halls, the celebration lawn, and dining at Celestal SS Grand Hotel on Kursi Road, Lucknow.",
};

export default function GalleryPage() {
  return (
    <>
      {/* 1. Master Header with Top Utility Bar & Single-Line Navigation */}
      <Header />

      {/* Main Content Sections (Padding accounts for fixed header) */}
      <main className="w-full pt-[116px] md:pt-[132px] bg-surface min-h-screen">
        <GalleryView />
      </main>

      {/* Luxury Multi-Column Footer */}
      <Footer />

    </>
  );
}

