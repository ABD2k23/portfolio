"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/SmoothScrollProvider";

export const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollTo = useCallback(
    (href: string) => {
      if (!href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          duration: 1.4,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
        });
        return;
      }

      // Fallback if Lenis isn't ready
      target.scrollIntoView({ behavior: "smooth" });
    },
    [lenis],
  );

  return scrollTo;
};
