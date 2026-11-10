"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{ zIndex: 10000 }}
          className="fixed inset-0 z-[10000] lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#14110E]/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between p-5 z-[10000] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {/* Header Row: Celestal SS Grand Hotel Logo + Close */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <Link href="/" onClick={onClose} className="flex items-center">
                  <Image
                    src="/images/logo-ss-grand.webp"
                    alt="Celestal SS Grand Hotel"
                    width={140}
                    height={55}
                    className="h-12 w-auto object-contain"
                    priority
                  />
                </Link>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 hover:text-[#9B6E09] hover:bg-[#F5EED8] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            <Link
              href="/"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/"
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/about"
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/rooms"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/rooms" || pathname.startsWith("/rooms")
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              Rooms
            </Link>

            <Link
              href="/banquet"
              prefetch={true}
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/banquet" || pathname.startsWith("/banquet")
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              Banquet &amp; Events
            </Link>

            <Link
              href="/services"
              prefetch={true}
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/services" || pathname.startsWith("/services")
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              Services
            </Link>

            <Link
              href="/gallery"
              prefetch={true}
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/gallery" || pathname.startsWith("/gallery")
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                pathname === "/contact"
                  ? "bg-[#F5EED8] text-[#7E5507] font-bold"
                  : "text-stone-800 hover:bg-[#FBF8EF] hover:text-[#7E5507]"
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-4 border-t border-stone-200 space-y-3">
          <Link
            href="/#inquiry-form-section"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gold-gradient-bg text-[#14110E] font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send an Inquiry</span>
          </Link>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] font-semibold border border-[#25D366]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${HOTEL_INFO.phones.primary}`}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-stone-100 text-stone-800 font-semibold hover:bg-stone-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#9B6E09]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
