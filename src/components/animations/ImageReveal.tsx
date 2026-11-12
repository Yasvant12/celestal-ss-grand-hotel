"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import React from "react";

export interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlay?: React.ReactNode;
  aspectRatio?: string;
}

export function ImageReveal({
  src,
  alt,
  className = "relative overflow-hidden rounded-xl",
  imageClassName = "w-full h-full object-cover",
  overlay,
  aspectRatio,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`relative overflow-hidden ${className} group`}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.08,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: shouldReduceMotion ? 0.3 : 0.9,
          ease: "easeOut",
        }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`${imageClassName} transition-transform duration-700 ease-out group-hover:scale-105`}
        />
      </motion.div>
      {overlay}
    </div>
  );
}
