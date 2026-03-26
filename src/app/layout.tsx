import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import RainBackground from "@/components/RainBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Loader from "@/components/Loader";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ztBros = localFont({
  src: "../font/ZTBrosOskon90s-Regular.otf",
  variable: "--font-zt-bros",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah - Full Stack Developer",
  description:
    "Portfolio of Muhammad Abdullah, a full-stack developer and web designer building clean, fast, and user-driven digital experiences.",
  keywords: [
    "Muhammad Abdullah",
    "Full Stack Developer",
    "Web Designer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Abdullah" }],
  openGraph: {
    title: "Muhammad Abdullah - Full Stack Developer",
    description:
      "Full-stack developer and web designer focused on building clean, fast, and user-driven digital experiences.",
    url: "https://muhammad-abdullah-2k26.vercel.app",
    siteName: "Muhammad Abdullah",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdullah - Full Stack Developer",
    description:
      "Full-stack developer and web designer focused on building clean, fast, and user-driven digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${ztBros.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader>
          <RainBackground />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </Loader>
      </body>
    </html>
  );
}
