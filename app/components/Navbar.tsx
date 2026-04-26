"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#music", label: "Live Music" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out animate-nav-slide-down ${
          scrolled ? "glass-nav py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-sm border border-charcoal/5 group-hover:shadow-md transition-all duration-500">
              <Image src="/logo.png" alt="RiBian Logo" fill className="object-cover" sizes="48px" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-semibold text-charcoal tracking-wide leading-none mb-1">
                RiBian
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-muted font-medium">
                Coffee & Tea
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-charcoal/80 hover:text-coffee text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-coffee transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* Reserve CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center px-8 py-3 rounded-full bg-charcoal text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-coffee transition-all duration-500 shadow-sm hover:shadow-[0_10px_20px_rgba(196,164,124,0.2)] hover:-translate-y-0.5"
          >
            Reserve
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col items-end gap-1.5 p-2 z-[70] relative"
            aria-label="Toggle menu"
          >
            <span className={`h-[1.5px] bg-charcoal transition-all duration-500 ease-in-out ${mobileOpen ? "w-6 rotate-45 translate-y-[7.5px]" : "w-6"}`} />
            <span className={`h-[1.5px] bg-charcoal transition-all duration-500 ease-in-out ${mobileOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`h-[1.5px] bg-charcoal transition-all duration-500 ease-in-out ${mobileOpen ? "w-6 -rotate-45 -translate-y-[7.5px]" : "w-6"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Full Screen Overlay - Sibling to nav for stability */}
      <div
        className={`fixed inset-0 bg-ivory z-[55] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden ${mobileOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-8 pointer-events-none"
          }`}
      >
        {/* Subtle Canvas Noise */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <div className="flex flex-col h-full relative z-10 px-8 pt-32 pb-12">
          
          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-baseline gap-6 transition-all duration-700 transform ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                <span className="font-[family-name:var(--font-playfair)] text-xs italic text-coffee font-bold">0{i + 1}</span>
                <span className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-charcoal hover:text-coffee transition-colors duration-500 font-bold uppercase tracking-tight">
                  {l.label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className={`mt-auto pt-12 border-t border-charcoal/5 flex flex-col gap-10 transition-all duration-1000 transform ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} style={{ transitionDelay: "600ms" }}>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-warm-400">Location</span>
              <p className="text-xs text-charcoal leading-relaxed max-w-[200px]">
                Jl. Ahmad Yani No. 123, <br />
                Semarang, Indonesia
              </p>
            </div>
            
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-warm-400">Social</span>
                <a href="#" className="text-xs text-charcoal hover:text-coffee transition-colors underline underline-offset-4">@ribiancoffee.tea</a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-coffee transition-all duration-500 shadow-xl"
              >
                <ArrowDown className="w-6 h-6 -rotate-[135deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
