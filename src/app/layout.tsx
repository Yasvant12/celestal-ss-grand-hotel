import type { Metadata } from "next";
import { FirstVisitEnquiryModal } from "@/components/ui/FirstVisitEnquiryModal";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celestal SS Grand Hotel | Modern Boutique Hotel & Grand Banquets, Lucknow",
  description:
    "Celestal SS Grand Hotel on Kursi Road, Lucknow. Contemporary comfort, thoughtful hospitality, and grand celebrations. 60 guest rooms, 1 lawn, and 4 banquet halls.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
        <WhatsAppFloating />
        <FirstVisitEnquiryModal />
      </body>
    </html>
  );
}
