"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  Menu,
} from "lucide-react";
import { HeaderTopBar } from "./HeaderTopBar";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{ zIndex: 99999, transform: "translateZ(0)" }}
        className="fixed top-0 left-0 right-0 w-full z-[99999] bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)] transition-all"
      >
        {/* Top utility announcement bar */}
        <HeaderTopBar />

        {/* Main luxury navigation bar: logo and navigation in ONE single line */}
        <div className="h-20 md:h-24">
          <div className="site-container h-full flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
            
            {/* BRAND LOGO: CELESTAL SS GRAND HOTEL */}
            <Link
              href="/"
              className="flex items-center shrink-0 py-1 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Celestal SS Grand Hotel Homepage"
            >
              <Image
                src="/images/logo-ss-grand.webp"
                alt="Celestal SS Grand Hotel"
                width={200}
                height={80}
                priority
                className="h-13 sm:h-15 md:h-17 lg:h-19 w-auto object-contain drop-shadow-sm"
              />
            </Link>

            {/* DESKTOP NAVIGATION BAR (In one line, hidden below lg) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] xl:text-[14px] font-medium tracking-wide">
              {/* Home */}
              <Link
                href="/"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/" ? "text-[#7E5507]" : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>Home</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/"
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/about" || pathname.startsWith("/about")
                    ? "text-[#7E5507]"
                    : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>About Us</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/about" || pathname.startsWith("/about")
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>

              {/* Rooms */}
              <Link
                href="/rooms"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/rooms" || pathname.startsWith("/rooms")
                    ? "text-[#7E5507]"
                    : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>Rooms</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/rooms" || pathname.startsWith("/rooms")
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>

              {/* Banquet */}
              <Link
                href="/banquet"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/banquet" || pathname.startsWith("/banquet")
                    ? "text-[#7E5507]"
                    : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>Banquet</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/banquet" || pathname.startsWith("/banquet")
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>

              {/* Services */}
              <Link
                href="/services"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/services" || pathname.startsWith("/services")
                    ? "text-[#7E5507]"
                    : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>Services</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/services" || pathname.startsWith("/services")
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>

              {/* Gallery */}
              <Link
                href="/gallery"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/gallery" || pathname.startsWith("/gallery")
                    ? "text-[#7E5507]"
                    : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>Gallery</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/gallery" || pathname.startsWith("/gallery")
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                prefetch={true}
                className={`group relative px-3 py-2 text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#9B6E09] rounded-md ${
                  pathname === "/contact" || pathname.startsWith("/contact")
                    ? "text-[#7E5507]"
                    : "text-stone-700 hover:text-[#7E5507]"
                }`}
              >
                <span>Contact Us</span>
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#966d23] rounded-full transition-all duration-300 ease-out origin-left ${
                    pathname === "/contact" || pathname.startsWith("/contact")
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                  }`}
                />
              </Link>
            </nav>

            {/* CTA & MOBILE TOGGLE (Right side, stays aligned in one line) */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Inquiry Button (Signature Gold Gradient) */}
              <Link
                href="/#inquiry-form-section"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 rounded-full gold-gradient-bg text-[#14110E] font-semibold text-xs md:text-sm tracking-wider uppercase shadow-[0_4px_14px_rgba(184,134,11,0.35)] hover:shadow-[0_6px_20px_rgba(184,134,11,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send an Inquiry</span>
              </Link>

              {/* Mobile Hamburger Toggle Button (Below lg) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden w-10 h-10 rounded-xl border border-stone-200 text-stone-700 hover:text-[#7E5507] hover:border-[#DEC384] hover:bg-[#FBF8EF] flex items-center justify-center transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-down Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
