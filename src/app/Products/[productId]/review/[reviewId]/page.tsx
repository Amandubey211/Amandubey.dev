"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Review {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
}

const mockReviews: Record<string, Review> = {
  r1: {
    id: "r1",
    productId: "1",
    productName: 'MacBook Pro 16"',
    productImage: "/images/macbook-pro-1.jpg",
    author: "Alex Johnson",
    rating: 5,
    title: "Absolutely worth every penny",
    content:
      "The performance is simply mind-blowing. Handles all my 4K video editing without breaking a sweat. The battery life is incredible - I can go a full day of heavy use without needing to charge. The display is the best I've ever seen on a laptop, perfect for color grading.",
    date: "2023-05-15",
    verified: true,
    helpful: 24,
  },
  r2: {
    id: "r2",
    productId: "1",
    productName: 'MacBook Pro 16"',
    productImage: "/images/macbook-pro-1.jpg",
    author: "Sam Wilson",
    rating: 4,
    title: "Powerful but heavy",
    content:
      "Amazing machine, though a bit heavy for daily commuting. The display is worth every penny. I dock it at my desk most of the time, but when I do need to travel with it, I definitely feel the weight in my backpack.",
    date: "2023-04-22",
    verified: true,
    helpful: 8,
  },
  r3: {
    id: "r3",
    productId: "3",
    productName: "AirPods Pro (2nd Gen)",
    productImage: "/images/airpods-pro-1.jpg",
    author: "Jordan Lee",
    rating: 5,
    title: "Significant improvement over 1st gen",
    content:
      "The noise cancellation is significantly better than the 1st gen. Sound quality is amazing. The transparency mode is so natural it's like not wearing earbuds at all. Battery life seems improved as well.",
    date: "2023-03-10",
    verified: true,
    helpful: 15,
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

export default function ReviewDetail() {
  const params = useParams();
  const productId = params?.productId as string;
  const reviewId = params?.reviewId as string;
  const review = mockReviews[reviewId as string];

  if (!review) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Review not found</h1>
          <Link
            href={`/Products/${productId}`}
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
          >
            Back to product
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {review.title} | Review for {review.productName}
        </title>
        <meta name="description" content={review.content.substring(0, 160)} />
      </Head>

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div variants={slideUp} className="mb-8">
            <Link
              href={`/products/${productId}`}
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
              Back to {review.productName}
            </Link>
          </motion.div>

          <motion.article
            variants={slideUp}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="h-16 w-16 object-contain rounded"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {review.title}
                  </h1>
                  <p className="text-sm text-gray-500">
                    Review for {review.productName}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {review.author}
                    {review.verified && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 prose prose-sm text-gray-700 max-w-none"
              >
                <p>{review.content}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between"
              >
                <span className="text-sm text-gray-500">
                  {review.helpful} people found this helpful
                </span>
                <div className="flex space-x-2">
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    Helpful
                  </button>
                  <span className="text-gray-300">•</span>
                  <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
                    Report
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.article>
        </div>
      </motion.main>
    </>
  );
}
