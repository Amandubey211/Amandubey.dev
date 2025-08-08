// app/contact/components/InfoCarousel.tsx
"use client";

import {
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import React from "react";
import Image from "next/image";
import amandubey from "@/assets/Contact/amandubey.png";
import {
  Mail,
  Github,
  Linkedin,
  Zap,
  Layers,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

const SLIDE_DATA: CarouselItem[] = [
  {
    title: "My Inbox Is Open",
    description:
      "I'm actively seeking new opportunities. Whether you have a project or just want to connect, I'd love to hear from you.",
    id: 0,
    icon: <Mail className="h-6 w-6 text-white" />,
  },
  {
    title: "Frontend Optimization",
    description:
      "Optimized application performance by 30% using code splitting and lazy loading, achieving 98 Lighthouse scores.",
    id: 1,
    icon: <Zap className="h-6 w-6 text-white" />,
  },
  {
    title: "Full-Stack Architecture",
    description:
      "Architected large-scale applications, including a multi-role SaaS platform supporting 5+ user types.",
    id: 2,
    icon: <Layers className="h-6 w-6 text-white" />,
  },
  {
    title: "Security & Verification",
    description:
      "Engineered multi-tier verification systems and enhanced security with JWT, reducing fraudulent profiles by 70%.",
    id: 3,
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
  },
  {
    title: "Intuitive User Experience",
    description:
      "Developed innovative features like drag-and-drop interfaces and real-time previews to create seamless user workflows.",
    id: 4,
    icon: <MousePointerClick className="h-6 w-6 text-white" />,
  },
];

const CARD_WIDTH = 300;
const CARD_HEIGHT = 240;
const GAP = 24;
const DRAG_THRESHOLD = 50;
const SPRING_OPTIONS = { type: "spring", stiffness: 400, damping: 40 } as const;
const TRACK_OFFSET = CARD_WIDTH + GAP;

function CarouselCard({
  item,
  index,
  x,
}: {
  item: CarouselItem;
  index: number;
  x: MotionValue<number>;
}) {
  const range = [
    -(index + 1) * TRACK_OFFSET,
    -index * TRACK_OFFSET,
    -(index - 1) * TRACK_OFFSET,
  ];
  const rotateY = useTransform(x, range, [45, 0, -45], { clamp: false });

  return (
    <motion.div
      key={item.id}
      className="relative shrink-0 flex flex-col justify-start bg-[#121212] border border-gray-700/50 rounded-xl p-6"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: GAP,
        transformStyle: "preserve-3d",
        rotateY,
      }}
      transition={SPRING_OPTIONS}
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full ">
        {item.icon}
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 font-bold text-lg text-white">{item.title}</h3>
        <p className="text-md text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function InfoCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const x = useMotionValue(0);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_THRESHOLD || velocity < -500) {
      setCurrentIndex((prev) => Math.min(prev + 1, SLIDE_DATA.length - 1));
    } else if (offset > DRAG_THRESHOLD || velocity > 500) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // UPDATED: Main container is now responsive
  return (
    <div
      className="relative rounded-2xl border border-gray-800 flex flex-col w-full max-w-[348px] mx-auto lg:mx-0"
      style={{ minHeight: CARD_HEIGHT + 180 }}
    >
      {/* --- Header Section (No changes needed here) --- */}
      <div className="flex justify-between items-center px-6 pt-6 pb-4">
        <div className="flex items-center gap-4">
          <Image
            src={amandubey}
            alt="Aman Dubey"
            width={60}
            height={60}
            className="object-cover rounded-full border p-1 border-white"
            priority
          />
          <div className="flex items-center gap-2 text-sm font-medium px-3 py-1 bg-[#21291f] rounded-full border border-lime-400/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            Available for work
          </div>
        </div>
        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/Amanstudentdiwan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "white" }}
            className="text-gray-500 transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/profile-amandubey/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "white" }}
            className="text-gray-500 transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </div>

      {/* --- Carousel Body - UPDATED: padding removed to maximize space --- */}
      <div className="relative overflow-hidden w-full h-full flex items-center">
        <motion.div
          drag="x"
          dragConstraints={{
            left: -(TRACK_OFFSET * (SLIDE_DATA.length - 1)),
            right: 0,
          }}
          style={{
            x,
            width: TRACK_OFFSET * SLIDE_DATA.length,
            perspective: 1000,
            perspectiveOrigin: `${
              currentIndex * TRACK_OFFSET + CARD_WIDTH / 2
            }px 50%`,
          }}
          className="flex h-full cursor-grab active:cursor-grabbing pl-6" // Added pl-6 here to align first card
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * TRACK_OFFSET) }}
          transition={SPRING_OPTIONS}
        >
          {SLIDE_DATA.map((item, index) => (
            <CarouselCard key={item.id} item={item} index={index} x={x} />
          ))}
        </motion.div>
      </div>

      {/* --- Navigation (No changes needed here) --- */}
      <div className="flex w-full justify-center gap-3 py-6">
        {SLIDE_DATA.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index
                ? "bg-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
