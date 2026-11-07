"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
  eyebrow?: string;
  breadcrumb?: BreadcrumbItem[];
  conciergeBadge?: boolean;
  badgeText?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  eyebrow,
  breadcrumb = [{ label: "Home", href: "/" }],
  conciergeBadge = true,
  badgeText = "Reservations Desk",
  children,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-noir-charcoal text-surface-container-lowest overflow-hidden">
      {/* Background Architectural Image & Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Celestal SS Grand Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal via-noir-charcoal/80 to-noir-charcoal/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 site-container pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 lg:pb-20">
        {/* Breadcrumb Navigation */}
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 font-eyebrow-luxury text-eyebrow-luxury text-gold-light uppercase tracking-widest pb-4 sm:pb-6"
          >
            {breadcrumb.map((item, idx) => {
              const isLast = idx === breadcrumb.length - 1;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-stone-400">/</span>}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-surface-container-lowest transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-surface-container-lowest font-bold">{item.label}</span>
                  )}
                </div>
              );
            })}
          </motion.nav>
        )}

        {/* Main Hero Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-3"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md w-fit rounded-full shadow-sm border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic inline-block animate-pulse" />
                <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-light uppercase tracking-widest">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-display-hero text-surface-container-lowest tracking-tight mt-1 leading-[1.15]">
              {title}
            </h1>

            <p className="font-body-lg text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {conciergeBadge && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 pb-1 flex lg:justify-end"
            >
              <div className="flex items-center gap-2.5 bg-noir-charcoal/90 backdrop-blur-md px-4 py-2.5 rounded-full text-surface-container-lowest font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest shadow-lg border border-gold-metallic/30">
                <span className="w-2 h-2 rounded-full bg-whatsapp-brand animate-pulse" />
                <span>{badgeText}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Optional Inner Page Bottom Bar (e.g. Filters, Tabs, Search) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 sm:mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

