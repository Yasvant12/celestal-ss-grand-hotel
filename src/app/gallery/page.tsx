import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryView } from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Photo Gallery | Celestial SS Grand Hotel, Lucknow",
  description:
    "Explore photographs of rooms, banquet halls, the celebration lawn, and dining at Celestial SS Grand Hotel on Kursi Road, Lucknow.",
};

export default function GalleryPage() {
  return (
    <>
      {/* 1. Master Header with Top Utility Bar & Single-Line Navigation */}
      <Header />

      <main className="w-full bg-surface min-h-screen">
        <GalleryView />
      </main>

      {/* Luxury Multi-Column Footer */}
      <Footer />

    </>
  );
}

