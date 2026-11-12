import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesView } from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Services & Hospitality | Celestial SS Grand Hotel, Lucknow",
  description:
    "Explore hospitality and celebration services at Celestial SS Grand Hotel on Kursi Road, Lucknow, including dining, event styling, entertainment, and valet parking.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Master Header with Top Utility Bar & Navigation */}
      <Header />

      <main className="w-full bg-surface min-h-screen">
        <ServicesView />
      </main>

      {/* Luxury Multi-Column Footer */}
      <Footer />

    </>
  );
}

