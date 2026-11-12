"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

export interface BanquetGalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface BanquetImageCarouselProps {
  images: BanquetGalleryImage[];
}

export function BanquetImageCarousel({ images }: BanquetImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(carouselRef, { amount: 0.25 });
  const activeImage = images[activeIndex];

  const showImage = useCallback(
    (step: 1 | -1) => {
      setDirection(step);
      setActiveIndex((index) => (index + step + images.length) % images.length);
    },
    [images.length]
  );

  const openLightbox = () => {
    const activeElement = document.activeElement;
    returnFocusRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;
    setIsLightboxOpen(true);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mobileQuery.matches);

    updateIsMobile();
    mobileQuery.addEventListener("change", updateIsMobile);
    return () => mobileQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (
      !activeImage ||
      !isInView ||
      isHovered ||
      isMobile ||
      shouldReduceMotion ||
      isLightboxOpen
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((index) => (index + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [
    activeImage,
    images.length,
    isHovered,
    isInView,
    isLightboxOpen,
    isMobile,
    shouldReduceMotion,
  ]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showImage(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showImage(-1);
      } else if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements.item(0);
        const lastElement = focusableElements.item(focusableElements.length - 1);

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, showImage]);

  if (!activeImage) {
    return null;
  }

  return (
    <>
      <div
        ref={carouselRef}
        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-noir-charcoal shadow-xl sm:aspect-[16/9] lg:aspect-[2/1]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeImage.src}
            custom={direction}
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : direction * 36,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : direction * -36,
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={openLightbox}
          aria-label={`View gallery: ${activeImage.title}`}
          className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-noir-charcoal/80 via-noir-charcoal/10 to-noir-charcoal/10 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-fixed-dim"
        >
          <div className="p-5 sm:p-8 lg:p-10">
            <span className="mb-2 block font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.2em] text-primary-fixed-dim">
              {activeImage.category}
            </span>
            <h3 className="font-headline-md text-2xl text-white sm:text-3xl lg:text-4xl">
              {activeImage.title}
            </h3>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-noir-charcoal/35 px-4 py-2 font-label-button text-xs uppercase tracking-widest text-white opacity-100 backdrop-blur-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
              <Images className="h-4 w-4 text-primary-fixed-dim" aria-hidden="true" />
              View Gallery
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => showImage(-1)}
          aria-label="Previous banquet photo"
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-noir-charcoal/65 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => showImage(1)}
          aria-label="Next banquet photo"
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-noir-charcoal/65 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        <div
          aria-live="polite"
          className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-noir-charcoal/65 px-3 py-1.5 font-label-compact text-xs font-semibold tracking-wider text-white backdrop-blur-sm sm:right-6 sm:top-6"
        >
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={openLightbox}
          className="inline-flex items-center gap-2 rounded-xl border border-[#DEC384]/50 bg-surface-champagne px-6 py-3 font-label-button text-label-button uppercase tracking-widest text-on-surface shadow-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary"
        >
          <Images className="h-4 w-4 text-primary" aria-hidden="true" />
          View All Photos
        </button>
      </div>

      {isLightboxOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Banquet photo gallery"
          tabIndex={-1}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsLightboxOpen(false);
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir-charcoal/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => showImage(-1)}
            aria-label="Previous banquet photo"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim sm:left-8 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="relative flex h-full max-h-[85vh] w-full max-w-6xl flex-col items-center justify-center gap-4">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeImage.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                className="relative min-h-0 w-full flex-1"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex w-full items-center justify-between gap-4 text-white">
              <div>
                <p className="font-eyebrow-luxury text-[10px] uppercase tracking-[0.2em] text-primary-fixed-dim sm:text-xs">
                  {activeImage.category}
                </p>
                <p className="mt-1 font-title-editorial text-base sm:text-lg">
                  {activeImage.title}
                </p>
              </div>
              <span
                aria-live="polite"
                className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-label-compact text-sm"
              >
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => showImage(1)}
            aria-label="Next banquet photo"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim sm:right-8 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
