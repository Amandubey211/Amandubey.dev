import React, { useEffect, useRef, useMemo, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  enableBlur?: boolean;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  enableBlur = true, // Blur is now cheap because it's not scrubbing
  blurStrength = 8,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Memoizing the split text remains a good practice
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    // No need to wrap each word in a span here, GSAP's SplitText can do this
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span style={{ display: "inline-block" }} className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    // Select all the word spans
    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    // ✅ The Fix: Animate the words in once, without scrubbing.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // Start animation when the top of the text hits 85% of the viewport height
        // We remove scrub and use toggleActions to play the animation once.
        toggleActions: "play none none none", 
      },
    });

    tl.from(wordElements, {
      duration: 0.8,
      ease: "power3.out",
      // Animate from a slight vertical offset and fade in
      y: 20,
      opacity: 0,
      // Conditionally add the blur effect
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      // Stagger creates the beautiful "reveal" effect, one word after another
      stagger: 0.03,
    });

    // Cleanup is still important!
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [enableBlur, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;