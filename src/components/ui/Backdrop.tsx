// components/ui/Backdrop.tsx

"use client";

import { motion } from "framer-motion";

interface BackdropProps {
  onClose: () => void;
}

export const Backdrop = ({ onClose }: BackdropProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
    aria-hidden="true" // Hide from screen readers as it's purely decorative
  />
);