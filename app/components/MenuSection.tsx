"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowDown, Leaf, Sparkles } from "lucide-react";

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
    <section id="menu" className="relative py-32 md:py-56 bg-white overflow-hidden">
      
      {/* Background Watermark - Editorial Style */}
      <div className="absolute top-0 left-[-5%] h-full flex items-center pointer-events-none select-none z-0">
        <h2 className="vertical-text text-[12rem] md:text-[20rem] font-bold text-charcoal/[0.03] tracking-tighter leading-none whitespace-nowrap uppercase">
          The Offerings
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header: Magazine Inspired */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 lg:mb-32 gap-12">
          <div className="flex flex-col">
            <div className="animate-fade-up flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-brand-forest" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-forest">
                Special Menu
              </span>
            </div>
            <h2 className="animate-fade-up delay-100 font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-bold text-charcoal tracking-tighter leading-[0.8] mb-4">
              Curated <br /> 
              <span className="italic font-normal text-brand-forest">Selection</span>
            </h2>
          </div>

          {/* Magazine-style filter pills */}
          <div className="animate-fade-up delay-200 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border ${
                  activeCategory === cat.id 
                    ? "bg-brand-forest text-white border-brand-forest shadow-xl" 
                    : "bg-transparent text-charcoal border-charcoal/10 hover:border-brand-forest"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div 
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          {filteredItems.map((item, idx) => (
            <div 
              key={item.name}
              className="group flex flex-col gap-8 animate-fade-up"
              style={{ transitionDelay: `${(idx % 6) * 100}ms` }}
            >
              {/* Item Visual Container: Editorial Mask */}
              <div className="relative aspect-square">
                
                {/* Floating Decorative Leaf Accent */}
                {idx % 2 === 0 && (
                  <div className="absolute -top-6 -right-6 z-20 animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: `${idx * 0.5}s` }}>
                    <Leaf className="w-12 h-12 text-brand-forest/20 fill-brand-forest/10 -rotate-45" />
                  </div>
                )}
                
                <div className="relative w-full h-full rounded-[3rem] rounded-tr-[8rem] overflow-hidden bg-ivory shadow-[0_20px_60px_rgba(0,0,0,0.04)] group-hover:shadow-[0_40px_80px_rgba(30,58,43,0.12)] transition-all duration-1000 group-hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out-expo"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Label Overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-brand-forest shadow-sm">
                      {idx + 1}
                    </span>
                    <span className="bg-brand-forest/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-bold tracking-widest text-white uppercase">
                      {item.categoryId}
                    </span>
                  </div>
                </div>

                {/* Aesthetic Detail Dots */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity" style={{ backgroundImage: 'radial-gradient(var(--color-brand-forest) 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
              </div>

              {/* Textual Identity: Editorial Style */}
              <div className="flex flex-col px-2">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h4 className="font-bold text-2xl text-charcoal group-hover:text-brand-forest transition-colors duration-500 leading-tight">
                    {item.name}
                  </h4>
                  <span className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-brand-forest">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-muted tracking-wide italic max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32 lg:mt-48 flex flex-col items-center">
           <div className="w-full h-[1px] bg-charcoal/5 relative mb-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10">
                <Leaf className="w-6 h-6 text-brand-forest opacity-20" />
              </div>
           </div>
           
           <div className="flex flex-col items-center gap-12 text-center">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted">Ready to Taste?</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl italic text-charcoal">Experience the RiBian standard</h3>
              </div>
              <a
                href="#contact"
                className="group relative flex items-center justify-center w-24 h-24 rounded-full border border-charcoal/10 overflow-hidden transition-all duration-1000 hover:border-brand-forest"
              >
                <div className="absolute inset-0 bg-brand-forest scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
                <ArrowDown className="relative z-10 text-brand-forest group-hover:text-white transition-colors duration-700 w-8 h-8" strokeWidth={1} />
              </a>
           </div>
        </div>

      </div>
    </section>
  );
}
