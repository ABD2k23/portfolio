"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";

type LenisContextType = {
  getLenis: () => Lenis | null;
};

const LenisContext = createContext<LenisContextType>({ getLenis: () => null });

export function useLenis() {
  return useContext(LenisContext).getLenis();
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ getLenis: () => lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}
