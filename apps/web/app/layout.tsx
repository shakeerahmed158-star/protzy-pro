import type { Metadata } from "next";

import "./globals.css";

import { Geist } from "next/font/google";

import QueryProvider from "../providers/query-provider";
import ThemeProvider from "../providers/theme-provider";

import { SmoothScroll } from "../components/animations/smooth-scroll";
import { MouseGlow } from "../components/animations/mouse-glow";
import { ScrollProgress } from "../components/animations/scroll-progress";
import { InteractiveGlow } from "../components/animations/interactive-glow";
import { PageTransition } from "../components/animations/page-transition";
import AppProvider from "../providers/app-provider";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "protzy Pro",
  description:
    "Premium Dealer & Customer Commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={geist.variable}
    >
    <body className="bg-[#0d0f4f] text-zinc-900 antialiased overflow-x-hidden">
  <AppProvider>

    <SmoothScroll />
    <MouseGlow />
    <ScrollProgress />
    <InteractiveGlow />

    <PageTransition>
      {children}
    </PageTransition>

  </AppProvider>
</body>
    </html>
  );
}