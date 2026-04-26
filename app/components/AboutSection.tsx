import Image from "next/image";
import { Coffee, Music } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-ivory overflow-hidden">
      {/* Soft organic background blur to replace stiff rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-warm-100/50 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Dynamic Collage Layout */}
          <div className="animate-fade-in relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">

            {/* Main large image with asymmetrical curves */}
            <div className="absolute top-0 left-0 w-[80%] h-[75%] rounded-[2rem] rounded-tr-[8rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10 group">
              <Image
                src="/cafe-interior.png"
                alt="RiBian café interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>

            {/* Overlapping secondary image for a scrapbook/story feel */}
            <div className="absolute bottom-4 right-0 w-[60%] h-[50%] rounded-[2rem] rounded-bl-[6rem] overflow-hidden shadow-[0_30px_60px_rgba(92,61,46,0.15)] z-20 group border-8 border-white">
              <Image
                src="/menu-coffee.png"
                alt="RiBian artisan coffee"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </div>

            {/* Floating Graphic Element */}
            <div className="absolute top-1/4 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md rounded-[1.5rem] px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 animate-float z-30 flex flex-col items-center">
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-coffee leading-none mb-1">50+</span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal">Varieties</span>
              <span className="text-[10px] text-muted tracking-wide mt-1 border-t border-border/50 pt-1">Artisan Tea</span>
            </div>

            {/* Subtle decorative dot grid */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2a2a2a 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0">

            {/* Minimalist Section Line */}
            <div className="animate-fade-up delay-100 flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-coffee-light/50" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-coffee-light">
                Our Story
              </span>
            </div>

            <h2 className="animate-fade-up delay-200 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-charcoal leading-[1.1] text-balance tracking-tight">
              Where Every Sip Meets <br className="hidden sm:block" />
              <span className="italic font-light text-coffee-light">a Musical Note.</span>
            </h2>

            <div className="animate-fade-up delay-300 space-y-6 text-muted text-sm sm:text-base leading-relaxed max-w-lg mb-12 text-balance">
              <p>
                Born from a deep love for coffee culture and live music, RiBian is more than just a café —
                it is a sensory experience. We meticulously source our beans from the finest Indonesian highlands and
                our teas from historic artisan farms across Asia.
              </p>
              <p>
                As evening falls, our intimate stage comes alive. Talented local musicians create
                the perfect acoustic backdrop, turning your cup of perfection into an unforgettable memory.
              </p>
            </div>

            {/* Refined Stats */}
            <div className="animate-fade-up delay-400 grid grid-cols-2 gap-x-8 gap-y-8 w-full max-w-lg border-t border-border/40 pt-8">
              <div className="group flex flex-col lg:items-start items-center">
                <div className="flex items-center gap-3 mb-2">
                  <Coffee className="w-5 h-5 text-warm-400 group-hover:text-coffee transition-colors" strokeWidth={1.5} />
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal group-hover:text-coffee transition-colors">100%</div>
                </div>
                <div className="text-[10px] tracking-widest uppercase text-muted font-semibold">Arabica Beans</div>
              </div>

              <div className="group flex flex-col lg:items-start items-center">
                <div className="flex items-center gap-3 mb-2">
                  <Music className="w-5 h-5 text-warm-400 group-hover:text-coffee transition-colors" strokeWidth={1.5} />
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal group-hover:text-coffee transition-colors">365</div>
                </div>
                <div className="text-[10px] tracking-widest uppercase text-muted font-semibold">Live Shows/Year</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
