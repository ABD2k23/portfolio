"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);
  const [showTapHint, setShowTapHint] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  // Silky smooth spring config — low stiffness, high damping, heavier mass
  const springConfig = { stiffness: 60, damping: 20, mass: 1.2 };
  const cursorX = useSpring(rawX, springConfig);
  const cursorY = useSpring(rawY, springConfig);

  const scaleVal = useMotionValue(0);
  const cursorScale = useSpring(scaleVal, {
    stiffness: 80,
    damping: 22,
    mass: 1,
  });
  const cursorOpacity = useTransform(cursorScale, [0, 1], [0, 1]);

  // Detect touch device
  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Show tap hint on mobile after 1s, hide after 2.5s
  useEffect(() => {
    if (!isMobile) return;
    const show = setTimeout(() => setShowTapHint(true), 1000);
    const hide = setTimeout(() => setShowTapHint(false), 10000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [isMobile]);

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
      const offset = progress * rect.height * 0.08;
      inner.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set(e.clientX - rect.left);
      rawY.set(e.clientY - rect.top);
    },
    [rawX, rawY, isMobile],
  );

  if (!src) return null;

  return (
    <>
      <div className="flex justify-center px-4 md:px-[32px]">
        <div className="w-full max-w-[1536px]">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-[12px] md:rounded-[16px] overflow-hidden squircle"
            style={{ cursor: isMobile ? "pointer" : "none" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
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
                sizes="(max-width: 768px) 100vw, (max-width: 1536px) 100vw, 1536px"
                priority={priority}
              />
            </div>

            {/* Desktop: spring cursor */}
            {!isMobile && (
              <motion.div
                className="pointer-events-none absolute z-10 flex items-center justify-center rounded-full bg-skin "
                style={{
                  x: cursorX,
                  y: cursorY,
                  translateX: "-50%",
                  translateY: "-50%",
                  scale: cursorScale,
                  opacity: cursorOpacity,
                  width: 128,
                  height: 128,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                  mass: 1.2,
                }}
              >
                <motion.h3
                  className="select-none text-green"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={
                    isHovered
                      ? {
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: {
                            delay: 0.08,
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        }
                      : {
                          opacity: 0,
                          filter: "blur(4px)",
                          transition: { duration: 0.15 },
                        }
                  }
                >
                  Click
                </motion.h3>
              </motion.div>
            )}
            {/* Mobile: tap hint — bottom center, fades in then out */}
            <AnimatePresence>
              {isMobile && showTapHint && (
                <motion.div
                  className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-full bg-skin/80 px-4 py-2 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    transition: { duration: 0.4, ease: "easeIn" },
                  }}
                >
                  {/* Tap icon */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11V6a3 3 0 0 1 6 0v5M9 11a3 3 0 0 0-3 3v1a8 8 0 0 0 16 0v-4a3 3 0 0 0-3-3H9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h2
                    className="select-none"
                    style={{ fontSize: "12px", letterSpacing: "0.05em" }}
                  >
                    Tap to view
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
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
