"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Click from "./Click";

type Props = {
  isOpen: boolean;
  src: string;
  alt: string;
  name: string;
  description: string;
  role: string;
  year: string;
  url: string;
  onClose: () => void;
};

const expo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: expo },
  },
  exit: {
    opacity: 0,
    y: 24,
    scale: 0.97,
    transition: { duration: 0.3, ease: expo },
  },
};

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: expo } },
};

const WorkModal = ({
  isOpen,
  src,
  alt,
  name,
  description,
  role,
  year,
  url,
  onClose,
}: Props) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-[24px]"
          style={{
            backgroundColor: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(8px)",
          }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            className="relative w-full sm:max-w-[560px] rounded-t-[16px] squircle sm:rounded-[20px] overflow-hidden text-green bg-skin"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle — mobile only */}
            {/* <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full opacity-30 bg-current" />
            </div> */}

            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-[20px] right-[24px] z-10 transition-opacity text-green cursor-pointer"
              aria-label="Close modal"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.7,
                transition: { delay: 0.2, duration: 0.3 },
              }}
              exit={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h2 className="text-skin!">Close</h2>
            </motion.button>

            {/* Thumbnail */}
            <motion.div
              className="relative w-full aspect-[16/9] overflow-hidden"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1, transition: { duration: 0.6, ease: expo } }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 560px"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="p-[20px] sm:p-[32px] flex flex-col gap-[20px] sm:gap-[24px]"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Name + meta */}
              <motion.div
                className="flex flex-col gap-[6px] sm:gap-[8px]"
                variants={itemVariants}
              >
                <h1 style={{ fontSize: "clamp(22px, 5vw, 40px)" }}>{name}</h1>
                <div className="flex gap-[16px]" style={{ opacity: 0.45 }}>
                  <p>{role}</p>
                  <p>·</p>
                  <p>{year}</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p style={{ opacity: 0.7 }} variants={itemVariants}>
                {description}
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={itemVariants}
                className="pb-[env(safe-area-inset-bottom)] w-fit"
              >
                <Click path={url} content="Visit Live Site" target="_blank" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;
