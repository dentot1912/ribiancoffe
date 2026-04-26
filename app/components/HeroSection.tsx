import Image from "next/image";
import { Music, Coffee, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ivory">
      {/* Refined Decorative circles */}
      <div className="absolute top-10 right-[-150px] w-[500px] h-[500px] rounded-full border border-silk opacity-40 mix-blend-multiply" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full border border-warm-200 opacity-30 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-32 pb-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            
            {/* Premium Badge */}
            <div className="animate-fade-up delay-100 mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-border/50 text-charcoal text-[10px] font-semibold tracking-[0.25em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tea-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tea-light"></span>
                </span>
                Est. 2024 · Artisan Beverages
              </span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-up delay-200 font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-4 text-charcoal text-balance tracking-tight">
              Coffee
              <span className="inline-block text-warm-400 mx-3 font-light text-5xl sm:text-6xl lg:text-[4.5rem] italic">&amp;</span>
              <span className="text-gradient-coffee relative">
                Tea
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-coffee/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Music tagline */}
            <div className="animate-fade-up delay-300 mb-8">
              <p className="text-xl sm:text-2xl text-coffee-light font-[family-name:var(--font-playfair)] italic font-medium tracking-wide">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-3 mb-1 text-warm-400" />
                Live Music Everyday
              </p>
            </div>

            {/* Description */}
            <p className="animate-fade-up delay-400 max-w-md text-muted text-sm sm:text-base leading-relaxed mb-10 text-balance">
              Where every cup tells a story and every note sets the mood. Hand-crafted artisan beverages
              with soulful live performances in our cozy, elegantly designed haven.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-500 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-charcoal text-white font-semibold text-[11px] tracking-[0.2em] uppercase hover:bg-coffee-dark hover:shadow-[0_10px_30px_rgba(42,42,42,0.2)] hover:-translate-y-0.5 transition-all duration-500 text-center"
              >
                Explore Menu
              </a>
              <a
                href="#music"
                className="w-full sm:w-auto px-10 py-4 rounded-full border border-charcoal/20 text-charcoal font-semibold text-[11px] tracking-[0.2em] uppercase hover:border-charcoal hover:bg-charcoal/5 transition-all duration-500 text-center"
              >
                Tonight&apos;s Show <Music className="w-3.5 h-3.5 inline-block ml-2 mb-0.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="animate-scale-in relative">
              
              {/* Spinning Aesthetic Rings */}
              <div className="absolute -inset-6 rounded-full border-[1px] border-charcoal/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-10 rounded-full border-[1px] border-warm-200/50 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Main Circular Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-[0_30px_60px_rgba(92,61,46,0.15)] group">
                <Image
                  src="/hero-coffee-tea.png"
                  alt="Premium coffee and tea at RiBian"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                  priority
                />
                {/* Inner soft glow */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
              </div>

              {/* Glassmorphism Floating Accent Cards */}
              
              {/* Left Card: 100% Arabica */}
              <div className="absolute -bottom-4 -left-8 sm:-left-12 z-20 animate-fade-up delay-400">
                <div className="bg-white/85 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/50 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center text-xl shadow-sm border border-border/50">
                      <Coffee className="w-5 h-5 text-charcoal/80" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-charcoal mb-0.5">100% Arabica</p>
                      <p className="text-[10px] text-muted tracking-wide">Single Origin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: Premium Tea */}
              <div className="absolute -top-4 -right-8 sm:-right-12 z-20 animate-fade-up delay-600">
                <div className="bg-white/85 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/50 animate-float" style={{ animationDelay: "2.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center text-xl shadow-sm border border-border/50">
                      <Leaf className="w-5 h-5 text-charcoal/80" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-charcoal mb-0.5">Premium Tea</p>
                      <p className="text-[10px] text-muted tracking-wide">50+ Varieties</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Minimalist Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700 flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-warm-400">Scroll</span>
          <div className="w-[1px] h-10 bg-warm-200 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-coffee-light animate-[fadeUp_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
