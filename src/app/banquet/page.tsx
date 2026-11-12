import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BanquetView } from "@/components/banquet/BanquetView";

export const metadata: Metadata = {
  title: "Grand Ballroom & Banquet Halls in Lucknow | Celestial SS Grand Hotel",
  description:
    "Explore five banquet spaces and two celebration lawns at Celestial SS Grand Hotel, with event capacity ranging from 100 to 1,200 guests.",
};

export default function BanquetPage() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <BanquetView />
        </div>
      </main>
      <Footer />
    </>
  );
}
