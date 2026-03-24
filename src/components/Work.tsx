"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import WorkModal from "./WorkModal";

type Props = {
  src: string;
  alt: string;
  name: string;
  description: string;
  role: string;
  year: string;
  url: string;
  priority?: boolean;
};

const Work = ({
  src,
  alt,
  name,
  description,
  role,
  year,
  url,
  priority = false,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Raw mouse position motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-smoothed cursor position
  const springConfig = { stiffness: 180, damping: 22, mass: 0.5 };
  const cursorX = useSpring(rawX, springConfig);
  const cursorY = useSpring(rawY, springConfig);

  // Cursor scale spring
  const scaleVal = useMotionValue(0);
  const cursorScale = useSpring(scaleVal, { stiffness: 220, damping: 24 });
  const cursorOpacity = useTransform(cursorScale, [0, 1], [0, 1]);

  useEffect(() => {
    scaleVal.set(isHovered ? 1 : 0);
  }, [isHovered, scaleVal]);

  // Parallax on scroll
  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = 1 - rect.bottom / (viewportHeight + rect.height);
      const offset = progress * rect.height * 0.3;
      inner.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set(e.clientX - rect.left);
      rawY.set(e.clientY - rect.top);
    },
    [rawX, rawY],
  );

  if (!src) return null;

  return (
    <>
      <div className="flex justify-center px-[32px]">
        <div className="w-full max-w-[1536px]">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden squircle"
            style={{ cursor: "none" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
          >
            {/* Parallax image wrapper */}
            <div
              ref={innerRef}
              className="absolute inset-0 will-change-transform"
              style={{ top: "-15%", bottom: "-15%", left: 0, right: 0 }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority={priority}
              />
            </div>

            {/* Framer Motion custom cursor */}
            <motion.div
              className="pointer-events-none absolute z-10 flex items-center justify-center rounded-full bg-skin text-green"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
                scale: cursorScale,
                opacity: cursorOpacity,
                width: 96,
                height: 96,
              }}
            >
              <motion.div style={{ opacity: cursorOpacity }}>
                <h2
                  className="select-none"
                  style={{ fontSize: "13px", letterSpacing: "0.05em" }}
                >
                  Click
                </h2>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <WorkModal
        isOpen={isModalOpen}
        src={src}
        alt={alt}
        name={name}
        description={description}
        role={role}
        year={year}
        url={url}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Work;
