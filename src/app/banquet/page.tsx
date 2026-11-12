import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BanquetView } from "@/components/banquet/BanquetView";

export const metadata: Metadata = {
  title: "Grand Ballroom & Banquet Halls in Lucknow | Celestal SS Grand Hotel",
  description:
    "Explore Sapphire Hall and Emerald Hall, Ruby Lounge, two restaurant venues, a connected lawn and double-height banquet for 1,000 guests, and Destiny Hall Green Lawn for up to 1,500 guests.",
};

export default function BanquetPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[116px] md:pt-[132px] bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <BanquetView />
        </div>
      </main>
      <Footer />
    </>
  );
}
