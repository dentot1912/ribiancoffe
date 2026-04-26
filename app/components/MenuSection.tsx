"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const menuCategories = [
  {
    id: "coffee",
    title: "Signature Coffee",
    subtitle: "Artisan Roasts",
    items: [
      { name: "RiBian Espresso", price: "25K", desc: "Bold single origin shot", image: "/menu_espresso.png" },
      { name: "Caramel Macchiato", price: "35K", desc: "Espresso, steamed milk, caramel", image: "/menu_macchiato.png" },
      { name: "Café Mocha", price: "38K", desc: "Chocolate, espresso, cream", image: "/menu_mocha.png" },
      { name: "Cold Brew Tonic", price: "40K", desc: "24hr brew, tonic water, citrus", image: "/menu_coldbrew.png" },
    ],
  },
  {
    id: "tea",
    title: "Premium Tea",
    subtitle: "Hand-picked Leaves",
    items: [
      { name: "Matcha Ceremonial", price: "35K", desc: "Stone-ground Japanese matcha", image: "/menu_matcha.png" },
      { name: "Oolong Silk", price: "30K", desc: "High mountain Taiwanese oolong", image: "/menu_oolong.png" },
      { name: "Jasmine Pearl", price: "28K", desc: "Hand-rolled jasmine green tea", image: "/menu_jasmine.png" },
      { name: "Chai Velvet Latte", price: "35K", desc: "Spiced chai, oat milk, honey", image: "/menu_chai.png" },
    ],
  },
  {
    id: "pastries",
    title: "Bites & Pastries",
    subtitle: "Freshly Baked",
    items: [
      { name: "Butter Croissant", price: "28K", desc: "French-style, golden flaky layers", image: "/menu_croissant.png" },
      { name: "Banana Bread", price: "25K", desc: "Walnut, cinnamon, brown butter", image: "/menu_bananabread.png" },
      { name: "Lemon Tart", price: "32K", desc: "Zesty lemon curd, butter pastry", image: "/menu_lemontart.png" },
      { name: "Almond Danish", price: "30K", desc: "Flaky pastry, toasted almonds", image: "/menu-pastry.png" },
    ],
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "coffee", label: "Coffee" },
    { id: "tea", label: "Tea" },
    { id: "pastries", label: "Pastries" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return menuCategories.flatMap(cat => cat.items.map(item => ({ ...item, categoryId: cat.id })));
    }
    const cat = menuCategories.find(c => c.id === activeCategory);
    return cat ? cat.items.map(item => ({ ...item, categoryId: cat.id })) : [];
  }, [activeCategory]);

  return (
    <section id="menu" className="relative py-32 md:py-48 bg-ivory overflow-hidden">
      {/* Decorative subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="animate-fade-up flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-coffee-light/50" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-coffee-light">
              Interactive Menu
            </span>
            <span className="w-12 h-[1px] bg-coffee-light/50" />
          </div>
          <h2 className="animate-fade-up delay-100 font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-charcoal tracking-tighter leading-[0.8] mb-12">
            The Palette
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 animate-fade-up delay-200 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-2 px-1 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 group ${
                  activeCategory === cat.id ? "text-coffee" : "text-muted hover:text-charcoal"
                }`}
              >
                {cat.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-coffee transition-all duration-500 ${
                  activeCategory === cat.id ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24 min-h-[700px]">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.name}
              className="group flex flex-col gap-6 animate-[revealItem_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ 
                animationDelay: `${(idx % 6) * 80}ms` 
              }}
            >
              {/* Item Card Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-warm-100/50 border border-warm-200/30 group-hover:shadow-[0_40px_80px_rgba(92,61,46,0.12)] transition-all duration-1000 group-hover:-translate-y-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out-expo"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Elegant Overlay Label */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-coffee uppercase shadow-sm">
                    {item.categoryId}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-bold text-charcoal">0{idx + 1}</span>
                  </div>
                </div>

                {/* Bottom Gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Textual Details */}
              <div className="flex flex-col text-center px-4">
                <div className="flex flex-col gap-2 mb-3">
                  <h4 className="font-bold text-xl sm:text-2xl text-charcoal group-hover:text-coffee transition-colors duration-500">
                    {item.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-muted tracking-wide max-w-[280px] mx-auto italic">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 bg-border" />
                  <span className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-charcoal">
                    {item.price}
                  </span>
                  <div className="h-[1px] w-8 bg-border" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Minimalist CTA */}
        <div className="mt-32 lg:mt-48 flex flex-col items-center justify-center gap-12 animate-fade-up">
           <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-warm-400">Discover More</span>
             <h4 className="font-[family-name:var(--font-playfair)] text-2xl italic text-charcoal">Visit Our Space</h4>
           </div>
           <a
              href="#contact"
              className="group relative flex items-center justify-center w-24 h-24 rounded-full border border-border overflow-hidden transition-all duration-1000"
            >
              <div className="absolute inset-0 bg-coffee scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
              <ArrowDown className="relative z-10 text-warm-400 group-hover:text-white transition-colors duration-700 w-8 h-8" strokeWidth={1} />
            </a>
        </div>

      </div>
    </section>
  );
}
