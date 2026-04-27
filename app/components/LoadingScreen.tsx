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
    }, 3800); // Increased duration for cinematic effect

    // Unmount after doors are fully open
    const timer2 = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  const brandName = "RIBIAN";

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden ${isFadingOut ? "pointer-events-none" : "pointer-events-auto"
      }`}>

      {/* Cinematic Double Door Split */}
      {/* Top Door */}
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-ivory z-10 transition-transform duration-[1.8s] ease-[cubic-bezier(0.85,0,0.15,1)] ${isFadingOut ? "-translate-y-full" : "translate-y-0"
        }`}>
        <div className="absolute inset-0 noise-texture opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal/[0.03]" />
      </div>

      {/* Bottom Door */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-ivory z-10 transition-transform duration-[1.8s] ease-[cubic-bezier(0.85,0,0.15,1)] ${isFadingOut ? "translate-y-full" : "translate-y-0"
        }`}>
        <div className="absolute inset-0 noise-texture opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-charcoal/[0.03]" />
      </div>

      {/* Center Logo & Brand Presentation */}
      <div className={`absolute inset-0 z-[110] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${isFadingOut ? "opacity-0 scale-90 blur-2xl" : "opacity-100 scale-100 blur-0"
        }`}>

        {/* Central Logo Area */}
        <div className="relative mb-20">
          {/* Elegant Glow Ring */}
          <div className="absolute inset-[-20px] rounded-full border border-coffee/5 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-[-40px] rounded-full border border-coffee/5 animate-[spin_15s_linear_infinite_reverse]" />

          <div className="absolute inset-0 rounded-full bg-coffee-light/10 blur-3xl animate-luxury-pulse" />

          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_40px_100px_rgba(92,61,46,0.15)] animate-float z-10 border-[0.5px] border-white/40">
            <Image
              src="/logo.png"
              alt="RiBian Logo"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]"
              priority
            />
            {/* Liquid Shimmer Overlay */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] animate-[shimmer_3s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Brand Typography: Editorial Reveal */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4 md:gap-8 overflow-hidden">
            {brandName.split("").map((char, i) => (
              <span
                key={i}
                className="animate-text-reveal font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-[0.25em]"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-[1px] bg-coffee-light/40 animate-expand-line opacity-0" style={{ animationDelay: "1.5s" }} />
            <span className="animate-subtitle-reveal opacity-0 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-warm-400">
              Premium Coffee & Tea
            </span>
          </div>
        </div>

      </div>

      {/* Decorative Established Year (Floating Corner) */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-[110] transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"
        }`} style={{ transitionDelay: "2s" }}>
        <span className="text-[9px] font-bold tracking-[0.8em] uppercase text-charcoal/20">ESTD 2024</span>
      </div>

    </div>
  );
}
