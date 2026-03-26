"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Moves up at 20% of scroll speed — subtle and premium
      inner.style.transform = `translateY(${scrollY * 0.08}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={innerRef}
        className="will-change-transform py-[96px] flex items-center justify-center flex-col gap-[16px] px-4 md:px-8"
      >
        <h1 className="text-center w-full max-w-[1050px]">
          Solo developer Building ai driven websites
        </h1>
        <p>Website Designer - Full Stack Developer</p>
      </div>
    </div>
  );
};

export default Hero;
