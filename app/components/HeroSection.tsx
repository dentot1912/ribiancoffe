import Image from "next/image";
import { Music, Coffee, Leaf, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 noise-texture opacity-[0.03] pointer-events-none" />
      
      {/* Refined Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-silk/40 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-warm-200/30 blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Content: Textual Authority */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            
            {/* Premium Status Badge */}
            <div className="animate-fade-up delay-100 mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-charcoal text-[10px] font-bold tracking-[0.3em] uppercase shadow-[0_4px_20px_rgba(0,0,0,0.03)] group cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coffee-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coffee-light"></span>
                </span>
                <span className="group-hover:text-coffee transition-colors duration-500">Established 2024 · Artisan Roastery</span>
              </div>
            </div>

            {/* Cinematic Hero Title */}
            <div className="mb-10 space-y-2">
              <h1 className="flex flex-col font-[family-name:var(--font-playfair)] text-7xl sm:text-8xl lg:text-[7rem] font-bold leading-[0.85] text-charcoal tracking-tighter">
                <span className="animate-fade-up delay-200 block overflow-hidden pb-2">
                  Coffee
                </span>
                <span className="animate-fade-up delay-300 flex items-center justify-center lg:justify-start gap-4 italic font-light text-coffee/80 ml-0 lg:ml-12">
                  <span className="text-4xl sm:text-5xl lg:text-6xl not-italic font-light text-warm-400 opacity-60 tracking-normal">&amp;</span>
                  Tea
                </span>
              </h1>
            </div>

            {/* Sensorial Tagline */}
            <div className="animate-fade-up delay-500 mb-12 flex items-center gap-4 group">
               <div className="w-10 h-[1px] bg-coffee/20 group-hover:w-16 transition-all duration-700" />
               <p className="text-xl sm:text-2xl text-coffee-light font-[family-name:var(--font-playfair)] italic font-medium tracking-wide flex items-center gap-3">
                 Live Music Everyday
                 <Sparkles className="w-4 h-4 text-warm-400 animate-pulse" />
               </p>
            </div>

            {/* Description: Editorial Flow */}
            <p className="animate-fade-up delay-600 max-w-md text-muted text-sm sm:text-base leading-relaxed mb-12 text-balance font-medium">
              Experience the harmony of hand-crafted artisan beverages and soulful live performances. 
              Our boutique space is designed for those who appreciate the finer notes in every cup and every chord.
            </p>

            {/* Premium CTAs */}
            <div className="animate-fade-up delay-700 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <a
                href="#menu"
                className="group relative w-full sm:w-auto px-12 py-5 rounded-full bg-charcoal text-white font-bold text-[11px] tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 shadow-xl hover:shadow-coffee/20 hover:-translate-y-1 text-center"
              >
                <div className="absolute inset-0 w-0 group-hover:w-full bg-coffee transition-all duration-700 ease-out z-0" />
                <span className="relative z-10">Explore Menu</span>
              </a>
              <a
                href="#music"
                className="group w-full sm:w-auto px-12 py-5 rounded-full border border-charcoal/10 text-charcoal font-bold text-[11px] tracking-[0.25em] uppercase hover:border-coffee transition-all duration-700 hover:bg-coffee/5 text-center flex items-center justify-center gap-3"
              >
                Tonight&apos;s Show 
                <Music className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500" />
              </a>
            </div>
          </div>

          {/* Right Content: Visual Centerpiece */}
          <div className="order-1 lg:order-2 flex justify-center relative py-12">
            <div className="animate-scale-in relative">
              
              {/* Ethereal Spinning Rings */}
              <div className="absolute -inset-10 rounded-full border-[0.5px] border-charcoal/5 animate-[spin_25s_linear_infinite] opacity-60" />
              <div className="absolute -inset-16 rounded-full border-[0.5px] border-warm-200/30 animate-[spin_40s_linear_infinite_reverse] opacity-40" />
              <div className="absolute -inset-24 rounded-full border-[0.5px] border-coffee/5 animate-[spin_60s_linear_infinite] opacity-20" />

              {/* Main Visual Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-full p-4 border border-white/40 shadow-2xl backdrop-blur-sm group">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/hero-coffee-tea.png"
                    alt="RiBian Signature Experience"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out-expo"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 480px"
                    priority
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.15)] pointer-events-none" />
                </div>
              </div>

              {/* Layered Glassmorphism Accent Cards */}
              
              {/* Card 1: 100% Arabica */}
              <div className="absolute -bottom-8 -left-12 z-20 animate-fade-up delay-700">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center shadow-inner border border-charcoal/5">
                      <Coffee className="w-5 h-5 text-charcoal/80" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal mb-0.5">Origin</p>
                      <p className="text-[12px] text-muted italic font-medium">100% Arabica</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Music Vibe */}
              <div className="absolute top-1/2 -right-16 z-20 animate-fade-up delay-900">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center shadow-lg">
                      <Music className="w-5 h-5 text-warm-200" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal mb-0.5">Evening</p>
                      <p className="text-[12px] text-muted italic font-medium">Soulful Vibe</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Premium Tea (Top Left) */}
              <div className="absolute -top-12 left-1/4 z-20 animate-fade-up delay-[1100ms]">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 animate-float" style={{ animationDelay: "3.5s" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-tea-light/10 flex items-center justify-center border border-tea-light/20">
                      <Leaf className="w-5 h-5 text-tea-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal mb-0.5">Selection</p>
                      <p className="text-[12px] text-muted italic font-medium">50+ Tea Varieties</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
