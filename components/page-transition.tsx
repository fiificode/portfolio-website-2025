"use client";

import type React from "react";

import { motion } from "framer-motion";
import ReactLenis from "lenis/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <ReactLenis root>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.9 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </ReactLenis>
  );
}
