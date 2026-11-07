import type { Metadata } from "next";
import { RoomsView } from "@/components/rooms/RoomsView";

export const metadata: Metadata = {
  title: "Rooms & Suites | Celestal SS Grand Hotel, Lucknow",
  description:
    "60 guest rooms at Celestal SS Grand Hotel, Plot 5, Misripur Guramba, Kursi Road, Lucknow. Enquire by phone or the room enquiry form.",
};

export default function RoomsPage() {
  return <RoomsView />;
}

