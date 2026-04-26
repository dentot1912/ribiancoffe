import Image from "next/image";

const galleryItems = [
  {
    src: "/cafe-interior.png",
    title: "THE SANCTUARY",
    subtitle: "A space designed for slow mornings and quiet contemplation.",
    size: "featured" 
  },
  {
    src: "/menu_espresso.png",
    title: "THE ROAST",
    subtitle: "Ethically sourced, artisanally roasted every sunrise.",
    size: "small"
  },
  {
    src: "/menu_matcha.png",
    title: "THE CEREMONY",
    subtitle: "Uji grade matcha, whisked to perfection.",
    size: "small"
  },
  {
    src: "/menu_croissant.png",
    title: "THE CRAFT",
    subtitle: "Flaky, buttery layers of traditional French pastry.",
    size: "medium"
  },
  {
    src: "/live-music.png",
    title: "THE VIBE",
    subtitle: "Soulful rhythms that define our evening atmosphere.",
    size: "large"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-32 md:py-48 bg-ivory overflow-hidden">
      
      {/* Background Large Text Watermark */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[15rem] lg:text-[25rem] font-[family-name:var(--font-playfair)] font-bold whitespace-nowrap tracking-tighter leading-none">
          MOMENTS MOMENTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section: Editorial Magazine Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 lg:mb-40 gap-10">
          <div className="max-w-2xl">
            <div className="animate-fade-up flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-coffee-light/40" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-coffee-light">Visual Journey</span>
            </div>
            <h2 className="animate-fade-up delay-100 font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal tracking-tight leading-[0.9]">
              Captured <br /> 
              <span className="italic font-normal text-coffee">At RiBian</span>
            </h2>
          </div>
          <div className="animate-fade-up delay-200 max-w-xs">
            <p className="text-sm text-muted leading-relaxed italic border-l-2 border-coffee/20 pl-6">
              "A collection of sensory details, shared laughter, and the quiet beauty of a perfect pour."
            </p>
          </div>
        </div>

        {/* Museum Staggered Grid: High-End Asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* 01 / Large Featured Image */}
          <div className="lg:col-span-7 group animate-fade-up">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-warm-100 border border-warm-200/30 shadow-2xl mb-8 group-hover:shadow-coffee/5 transition-all duration-700">
              <Image 
                src={galleryItems[0].src} 
                alt={galleryItems[0].title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" 
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 transition-transform duration-500 group-hover:translate-x-2">
              <span className="font-[family-name:var(--font-playfair)] text-xs italic text-coffee font-bold tracking-widest">01 / {galleryItems[0].title}</span>
              <p className="text-sm text-charcoal font-medium max-w-md leading-relaxed">{galleryItems[0].subtitle}</p>
            </div>
          </div>

          {/* 02 / Small Top Right */}
          <div className="lg:col-span-5 lg:mt-32 group animate-fade-up delay-150">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-warm-100 border border-warm-200/30 shadow-xl mb-8">
              <Image 
                src={galleryItems[1].src} 
                alt={galleryItems[1].title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out" 
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 transition-transform duration-500 group-hover:translate-x-2">
              <span className="font-[family-name:var(--font-playfair)] text-xs italic text-coffee font-bold tracking-widest">02 / {galleryItems[1].title}</span>
              <p className="text-xs text-muted max-w-[240px] leading-relaxed">{galleryItems[1].subtitle}</p>
            </div>
          </div>

          {/* 03 / Medium Offset Left */}
          <div className="lg:col-span-4 lg:-mt-24 group animate-fade-up delay-300">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-warm-100 border border-warm-200/30 shadow-xl mb-8">
              <Image 
                src={galleryItems[3].src} 
                alt={galleryItems[3].title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out" 
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 transition-transform duration-500 group-hover:translate-x-2">
              <span className="font-[family-name:var(--font-playfair)] text-xs italic text-coffee font-bold tracking-widest">03 / {galleryItems[3].title}</span>
              <p className="text-xs text-muted leading-relaxed">{galleryItems[3].subtitle}</p>
            </div>
          </div>

          {/* 04 / Large Vertical Center */}
          <div className="lg:col-span-5 group animate-fade-up delay-450">
             <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-warm-100 border border-warm-200/30 shadow-2xl mb-8">
              <Image 
                src={galleryItems[4].src} 
                alt={galleryItems[4].title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" 
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 transition-transform duration-500 group-hover:translate-x-2">
              <span className="font-[family-name:var(--font-playfair)] text-xs italic text-coffee font-bold tracking-widest">04 / {galleryItems[4].title}</span>
              <p className="text-sm text-charcoal font-medium leading-relaxed">{galleryItems[4].subtitle}</p>
            </div>
          </div>

          {/* 05 / Small Bottom Square */}
          <div className="lg:col-span-3 lg:mt-48 group animate-fade-up delay-600">
             <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-warm-100 border border-warm-200/30 shadow-xl mb-8">
              <Image 
                src={galleryItems[2].src} 
                alt={galleryItems[2].title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out" 
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 transition-transform duration-500 group-hover:translate-x-2">
              <span className="font-[family-name:var(--font-playfair)] text-xs italic text-coffee font-bold tracking-widest">05 / {galleryItems[2].title}</span>
              <p className="text-xs text-muted leading-relaxed">Artisan Whisking</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
