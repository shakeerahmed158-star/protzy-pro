"use client";

import { ReactNode } from "react";
import { SellBackground } from "./sell-background";
import SellHeader from "./sell-header";
import SellProgress from "./sell-progress";
import { SellContainer } from "./sell-container";

interface SellLayoutProps {
  children: ReactNode;

  step?: number;

  showHeader?: boolean;

  showProgress?: boolean;

  progressValue?: number;

  containerClassName?: string;
}

export default function SellLayout({
  children,

  step = 1,

  showHeader = true,

  showProgress = true,

  progressValue,

  containerClassName = "",
}: SellLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-black">

      {/* PREMIUM BACKGROUND */}
      <SellBackground />

      {/* HEADER */}
      {showHeader && (
        <div className="relative z-50">
          <SellHeader title="Sell Device" />
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10">

        {/* PROGRESS */}
        {showProgress && (
          <div className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-2xl">
            <SellContainer className="py-4">
              <SellProgress
                step={step}
                progressValue={progressValue}
              />
            </SellContainer>
          </div>
        )}

        {/* PAGE CONTENT */}
        <SellContainer className={containerClassName}>
          {children}
        </SellContainer>

      </div>
    </main>
  );
}