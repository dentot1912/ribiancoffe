"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent interaction while loading
    document.body.style.overflow = "hidden";

    // Trigger the split animation
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 3200);

    // Unmount after doors are fully open
    const timer2 = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  const brandName = "RIBIAN";

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden transition-colors duration-1000 ${
      isFadingOut ? "pointer-events-none" : "pointer-events-auto bg-ivory"
    }`}>

      {/* Center Logo & Brand Presentation */}
      <div className={`absolute inset-0 z-[110] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
        isFadingOut ? "opacity-0 scale-90 blur-2xl" : "opacity-100 scale-100 blur-0"
      }`}>
        
        {/* Subtle Canvas Noise */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        {/* Central Logo Area */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-full bg-coffee-light/15 blur-3xl animate-luxury-pulse" />
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl animate-float z-10 border-[0.5px] border-warm-200">
            <Image src="/logo.png" alt="RiBian Logo" fill className="object-cover" priority />
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[30deg] animate-[shimmer_2.5s_ease-in-out_infinite]" />
          </div>
        </div>
        <div className="w-16 h-[1px] bg-coffee-light/40 mt-10 animate-expand-line opacity-0" style={{ animationFillMode: "forwards", animationDelay: "1.5s" }} />

      </div>
    </div>
  );
}
