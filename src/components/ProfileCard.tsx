// app/contact/components/ProfileCard.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import amandubey from "@/assets/Contact/amandubey.png";
import { Heart } from "lucide-react";

// FIX: Explicitly type variants
const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export function ProfileCard() {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
      variants={floatingVariants}
      animate="animate"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <motion.div
            className="relative w-32 h-32 rounded-full ring-4 ring-lime-400/50 p-1 bg-gradient-to-r from-lime-400 to-emerald-400"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src={amandubey} alt="Aman Dubey" fill sizes="128px" className="object-cover rounded-full" placeholder="blur"/>
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white/20 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={14} className="text-white" />
          </motion.div>
        </div>
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Aman Dubey
          </h3>
          <p className="text-lime-400 text-sm font-medium tracking-wide">
            Full-Stack Developer
          </p>
          <p className="text-gray-400 text-xs mt-1">
            🌍 Based in India • Available Worldwide
          </p>
        </div>
      </div>
    </motion.div>
  );
}