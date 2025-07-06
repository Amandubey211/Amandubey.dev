"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  productId: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  images: string[];
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  reviews: {
    id: string;
    author: string;
    rating: number;
    content: string;
    date: string;
  }[];
}

const mockProducts: Record<string, Product> = {
  "1": {
    productId: "1",
    name: 'MacBook Pro 16"',
    price: 2499,
    category: "Laptops",
    rating: 4.8,
    images: [
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png",
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png",
    ],
    description:
      "Supercharged for pros with M2 Pro or M2 Max chip. The most advanced MacBook Pro ever with groundbreaking performance, incredible battery life, and an immersive 16-inch Retina display.",
    specifications: [
      { label: "Processor", value: "M2 Pro or M2 Max chip" },
      { label: "Memory", value: "Up to 96GB unified memory" },
      { label: "Storage", value: "Up to 8TB SSD" },
      { label: "Display", value: "16.2-inch Liquid Retina XDR" },
      { label: "Battery Life", value: "Up to 22 hours" },
      { label: "Ports", value: "HDMI, SDXC, Thunderbolt 4, MagSafe 3" },
    ],
    reviews: [
      {
        id: "r1",
        author: "Alex Johnson",
        rating: 5,
        content:
          "The performance is simply mind-blowing. Handles all my 4K video editing without breaking a sweat.",
        date: "2023-05-15",
      },
      {
        id: "r2",
        author: "Sam Wilson",
        rating: 4,
        content:
          "Amazing machine, though a bit heavy for daily commuting. The display is worth every penny.",
        date: "2023-04-22",
      },
    ],
  },
  "2": {
    productId: "2",
    name: "iPhone 15 Pro",
    price: 999,
    category: "Smartphones",
    rating: 4.7,
    images: [
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png",
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png",
    ],
    description:
      "Titanium. A17 Pro chip. Action button. 48MP camera. USB-C. The iPhone 15 Pro is our most pro iPhone lineup ever, with a strong and light titanium design, the best iPhone camera system, and A17 Pro performance.",
    specifications: [
      { label: "Chip", value: "A17 Pro chip" },
      { label: "Display", value: "6.1-inch Super Retina XDR" },
      {
        label: "Camera",
        value: "Pro camera system: 48MP Main, Ultra Wide, Telephoto",
      },
      { label: "Battery Life", value: "Up to 23 hours video playback" },
      { label: "Material", value: "Aerospace-grade titanium" },
      { label: "Water Resistance", value: "IP68 (6m for 30 min)" },
    ],
    reviews: [
      {
        id: "r1",
        author: "Taylor Smith",
        rating: 5,
        content:
          "The titanium build feels premium and the camera is incredible. Best iPhone yet!",
        date: "2023-09-20",
      },
    ],
  },
  "3": {
    productId: "3",
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    category: "Audio",
    rating: 4.6,
    images: [
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png",
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png",
    ],
    description:
      "Active Noise Cancellation. Adaptive Audio. MagSafe Charging. The AirPods Pro (2nd generation) deliver an even more immersive audio experience with next-level Active Noise Cancellation and Adaptive Audio.",
    specifications: [
      { label: "Battery Life", value: "Up to 6 hours listening time (ANC on)" },
      { label: "Case Battery", value: "Over 30 hours total listening time" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Chip", value: "H2 chip" },
      { label: "Sweat/Water Resistant", value: "IP54 (earbuds and case)" },
      { label: "Charging", value: "MagSafe, Qi, Lightning" },
    ],
    reviews: [
      {
        id: "r1",
        author: "Jordan Lee",
        rating: 5,
        content:
          "The noise cancellation is significantly better than the 1st gen. Sound quality is amazing.",
        date: "2023-03-10",
      },
      {
        id: "r2",
        author: "Casey Kim",
        rating: 4,
        content:
          "Great sound and fit. Battery life could be slightly better though.",
        date: "2023-02-28",
      },
      {
        id: "r3",
        author: "Riley Park",
        rating: 5,
        content: "Perfect for commuting. The transparency mode is so natural.",
        date: "2023-01-15",
      },
    ],
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function ProductDetail() {
  const params = useParams();
  const productId = params?.productId as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      // Simulate API fetch
      setTimeout(() => {
        setProduct(mockProducts[productId] || null);
        setLoading(false);
      }, 500);
    }
  }, [productId]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </motion.div>
    );
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Product not found
          </h1>
          <Link
            href="/Products"
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
          >
            Back to products
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={slideUp} className="mb-8">
            <Link
              href="/Products"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to products
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div variants={slideUp} className="space-y-4">
              <div className="relative aspect-square bg-white rounded-xl shadow-md overflow-hidden">
                <motion.img
                  key={activeImage}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                      activeImage === index
                        ? "border-indigo-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div variants={staggerItem}>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                  {product.category}
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                {product.name}
              </motion.h1>

              <motion.div variants={staggerItem} className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating.toFixed(1)} ({product.reviews.length} reviews)
                </span>
              </motion.div>

              <motion.p
                variants={staggerItem}
                className="text-3xl font-extrabold text-gray-900"
              >
                ${product.price.toLocaleString()}
              </motion.p>

              <motion.p variants={staggerItem} className="text-gray-700">
                {product.description}
              </motion.p>

              <motion.div variants={staggerItem} className="pt-6">
                <button className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300">
                  Add to cart
                </button>
              </motion.div>

              {/* Specifications */}
              <motion.div
                variants={staggerItem}
                className="pt-8 border-t border-gray-200"
              >
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Specifications
                </h2>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </div>

          {/* Reviews Section */}
          <motion.section
            variants={fadeIn}
            className="mt-16 border-t border-gray-200 pt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Customer Reviews
            </h2>

            {product.reviews.length > 0 ? (
              <motion.div variants={staggerContainer} className="space-y-8">
                {product.reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    variants={staggerItem}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-bold text-gray-900">
                          {review.author}
                        </h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.content}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p variants={staggerItem} className="text-gray-500">
                No reviews yet. Be the first to review this product!
              </motion.p>
            )}
          </motion.section>
        </div>
      </motion.main>
    </>
  );
}
