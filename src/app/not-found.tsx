"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8 flex flex-col items-center gap-2">
          <FuzzyText
            fontSize="clamp(4rem, 12vw, 10rem)"
            fontWeight={900}
            color="#a3e635" // Tailwind's lime-400
            baseIntensity={0.15}
            hoverIntensity={0.4}
          >
            404
          </FuzzyText>
          <FuzzyText
            fontSize="clamp(2rem, 6vw, 4rem)"
            fontWeight={700}
            color="#ffffff"
            baseIntensity={0.1}
            hoverIntensity={0.3}
          >
            Oops!
          </FuzzyText>
        </div>

        <motion.h1
          className="text-lg md:text-xl font-medium text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Page not found
        </motion.h1>

        {/* <motion.p
          className="text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-lime-400 text-black hover:bg-lime-300 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={18} />
            Return Home
          </Link>
        </motion.div>

        {/* <motion.div
          className="mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p>Error code: 404</p>
        </motion.div> */}
      </motion.div>
    </div>
  );
}
