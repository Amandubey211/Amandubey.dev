"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  productId: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    productId: "1",
    name: 'MacBook Pro 16"',
    price: 2499,
    category: "Laptops",
    rating: 4.8,
    image:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",
    description: "Supercharged for pros with M2 Pro or M2 Max chip.",
  },
  {
    productId: "2",
    name: "iPhone 15 Pro",
    price: 999,
    category: "Smartphones",
    rating: 4.7,
    image:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",
    description: "Titanium. A17 Pro chip. Action button. 48MP camera.",
  },
  {
    productId: "3",
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    category: "Audio",
    rating: 4.6,
    image:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",
    description: "Active Noise Cancellation. Adaptive Audio. MagSafe Charging.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

export default function ProductList() {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Premium Tech Collection
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Discover cutting-edge technology for work and play
            </p>
          </motion.div>

          <motion.ul
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((product) => (
              <motion.li
                key={product.productId}
                variants={itemVariants}
                whileHover="hover"
                className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="aspect-w-3 aspect-h-2 bg-gray-200 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center">
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
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-extrabold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>

                    <Link
                      href={`/Products/${product.productId}`}
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 overflow-hidden group"
                    >
                      <span className="relative z-10">View Details</span>
                      <span className="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.main>
    </>
  );
}
