"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ribian.coffee/" },
  { label: "TikTok", href: "#" },
  { label: "WhatsApp", href: "#" },
];
export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative pt-32 pb-8 bg-ivory overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section: Navigation & Brand Authority */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          
          <div className="max-w-md">
            <a href="#home" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-charcoal/5 shadow-sm group-hover:shadow-md transition-shadow">
                <Image src="/logo.png" alt="RiBian" fill className="object-cover" sizes="56px" />
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal leading-none mb-1">
                  RiBian
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-medium">Coffee & Tea</span>
              </div>
            </a>
            <p className="text-muted text-sm leading-relaxed italic border-l-2 border-coffee/20 pl-6 mb-10">
              "We believe that every cup tells a story, and every moment shared over coffee is a chapter worth remembering."
            </p>
            <div className="flex gap-8">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal hover:text-coffee transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 lg:gap-32">
             <div className="flex flex-col gap-8">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-warm-400">Navigate</span>
                <div className="flex flex-col gap-5">
                  {navLinks.map((l) => (
                    <a key={l.label} href={l.href} className="text-sm text-charcoal hover:text-coffee transition-colors font-medium">
                      {l.label}
                    </a>
                  ))}
                </div>
             </div>
             
             {/* Rotating Seal of Quality Badge */}
             <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 animate-spin-slow">
                   <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text className="text-[7.5px] font-bold uppercase tracking-[0.2em] fill-coffee/40">
                         <textPath xlinkHref="#circlePath">
                            • ESTABLISHED 2024 • PREMIUM COFFEE • ARTISAN TEA •
                         </textPath>
                      </text>
                   </svg>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-charcoal/5">
                   <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-coffee">R</span>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Section: Legal & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-charcoal/5 gap-8">
          <p className="text-[10px] font-medium text-muted tracking-widest uppercase flex items-center gap-2">
            © {currentYear} RIBIAN. ALL RIGHTS RESERVED. MADE WITH <Heart className="w-3 h-3 text-coffee fill-coffee" /> IN INDONESIA.
          </p>
          <a 
            href="#home" 
            className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-charcoal hover:text-coffee transition-all"
          >
            Back to Top
            <span className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all duration-500 shadow-sm">
               <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}
