"use client";

import Link from "next/link";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Footer = () => {
  const scrollTo = useSmoothScroll();

  const anchorProps = (href: string) => ({
    href,
    onClick: (e: React.MouseEvent) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        scrollTo(href);
      }
    },
  });

  const linkClass =
    "hover:text-skin transition-colors duration-300 md:text-skin/75 text-skin label";

  return (
    <div className="flex items-center justify-center h-dvh w-full gap-4 xs:gap-8 bg-green flex-col xs:flex-row">
      <Link className={linkClass} {...anchorProps("#Work")}>
        Selected Work
      </Link>
      <Link className={linkClass} {...anchorProps("#About")}>
        About Me
      </Link>
      <Link className={linkClass} {...anchorProps("#Contact")}>
        Contact Now
      </Link>
      <Link
        className={linkClass}
        href="https://www.instagram.com/abd.dev.web/"
        target="_blank"
      >
        Instagram
      </Link>
      <Link className={linkClass} target="_blank" href="https://x.com/ABDK7K">
        X
      </Link>
    </div>
  );
};

export default Footer;
