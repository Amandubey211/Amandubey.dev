"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const numbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (numbersRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(numbersRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <div className="relative h-32 mb-8">
          <motion.div
            ref={numbersRef}
            className="text-9xl font-bold text-gray-300 dark:text-gray-700 absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            404
          </motion.div>
          <motion.div
            className="text-5xl font-bold text-gray-800 dark:text-gray-200 absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Oops!
          </motion.div>
        </div>

        <motion.h1
          className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Page not found
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={18} />
            Return Home
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 text-sm text-gray-500 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p>Error code: 404</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
