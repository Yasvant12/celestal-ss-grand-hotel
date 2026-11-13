"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function ReceptionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="site-container grid grid-cols-1 items-center gap-space-2xl lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-space-md lg:col-span-5"
        >
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary">
            Reception &amp; Arrival
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            A Warm Welcome at Every Arrival
          </h2>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Our reception team is ready to welcome guests and help make every stay and celebration feel effortless.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="relative aspect-[16/10] min-h-[260px] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hotel-reception-home.jpg"
              alt="A welcoming reception at Celestial SS Grand Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              loading="lazy"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
