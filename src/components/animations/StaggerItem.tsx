"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import React from "react";

export interface StaggerItemProps {
  children: React.ReactNode;
  yOffset?: number;
  className?: string;
  duration?: number;
}

export function StaggerItem({
  children,
  yOffset = 24,
  className = "",
  duration = 0.55,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
