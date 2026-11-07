import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BanquetView } from "@/components/banquet/BanquetView";

export const metadata: Metadata = {
  title: "Grand Ballroom & Banquet Halls in Lucknow | Celestal SS Grand Hotel",
  description:
    "Banquet halls and Golden Knot Lawn at Celestal SS Grand Hotel, Kursi Road, Lucknow. Published capacities: Destiny 500, Sapphire 250, Emerald 200, Golden Knot Banquet 100, and Golden Knot Lawn 400 guests.",
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

