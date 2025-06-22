"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import gsap from "gsap";

export interface BlobCursorProps {
  blobType?: "circle" | "square";
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
  isActive?: boolean;
  textScale?: number;
  linkOpacity?: number;
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#9ae600",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.2)",
  shadowBlur = 5,
  shadowOffsetX = 2,
  shadowOffsetY = 2,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 100,
  isActive = true,
  textScale = 0.5,
  linkOpacity = 0.4,
}: BlobCursorProps) {
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationRefs = useRef<gsap.core.Tween[]>([]);
  const posRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const opacityRef = useRef(1);
  const [hoverState, setHoverState] = useState<"default" | "text" | "link">(
    "default"
  );

  // Update cursor appearance based on hover state
  useEffect(() => {
    const targets = blobsRef.current.filter(Boolean);

    if (hoverState === "text") {
      scaleRef.current = textScale;
      opacityRef.current = 0.7;
    } else if (hoverState === "link") {
      scaleRef.current = 0.8;
      opacityRef.current = linkOpacity;
    } else {
      scaleRef.current = 1;
      opacityRef.current = 1;
    }

    targets.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        scale: scaleRef.current * (i === 0 ? 1 : 1 - i * 0.1),
        opacity: opacities[i] * opacityRef.current,
        duration: 0.2,
      });
    });
  }, [hoverState, opacities, textScale, linkOpacity]);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isActive) return;

      const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
      const y = "clientY" in e ? e.clientY : e.touches[0].clientY;

      // Detect hover state
      const target = document.elementFromPoint(x, y);
      if (!target) return;

      posRef.current = { x, y };

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button"
      ) {
        setHoverState("link");
      } else if (isTextNode(target)) {
        // Call the helper function directly
        setHoverState("text");
      } else {
        setHoverState("default");
      }
    },
    [isActive]
  );

  const isTextNode = (element: Element | null): boolean => {
    if (!element) return false;
    if (element.nodeType === Node.TEXT_NODE) return true;
    if (
      ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "LABEL"].includes(
        element.tagName
      )
    ) {
      return true;
    }
    return false;
  };

  const animateBlobs = useCallback(() => {
    if (!isActive) return;

    const { x, y } = posRef.current;

    animationRefs.current.forEach((anim) => anim.kill());
    animationRefs.current = [];

    blobsRef.current.forEach((el, i) => {
      if (!el) return;

      const isLead = i === 0;
      const size = sizes[i] || sizes[0];

      const anim = gsap.to(el, {
        x: x - size / 2,
        y: y - size / 2,
        duration: isLead ? fastDuration : slowDuration,
        ease: isLead ? fastEase : slowEase,
      });

      animationRefs.current.push(anim);
    });

    requestAnimationFrame(animateBlobs);
  }, [isActive, sizes, fastDuration, slowDuration, fastEase, slowEase]);

  useEffect(() => {
    if (!isActive) return;

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    const animationFrame = requestAnimationFrame(animateBlobs);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      cancelAnimationFrame(animationFrame);
      animationRefs.current.forEach((anim) => anim.kill());
    };
  }, [handleMove, animateBlobs, isActive]);

  // Initialize cursor position to center of screen
  useEffect(() => {
    posRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  }, []);

  if (!isActive) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="absolute inset-0 overflow-hidden select-none"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              blobsRef.current[i] = el;
            }}
            className="absolute will-change-transform origin-center"
            style={{
              width: sizes[i] || sizes[0],
              height: sizes[i] || sizes[0],
              borderRadius: blobType === "circle" ? "50%" : "0",
              backgroundColor: fillColor,
              opacity: opacities[i] || opacities[0],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
              transform: "translate(0, 0) scale(1)",
              mixBlendMode: hoverState === "text" ? "difference" : "normal",
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i] || innerSizes[0],
                height: innerSizes[i] || innerSizes[0],
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
