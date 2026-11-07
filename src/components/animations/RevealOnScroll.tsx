"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  threshold?: number;
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 28,
  className = "",
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : yOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
