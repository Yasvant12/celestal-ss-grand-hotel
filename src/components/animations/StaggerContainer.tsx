"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  className = "",
  viewportMargin = "-60px",
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

