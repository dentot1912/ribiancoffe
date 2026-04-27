"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Send, Camera, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section: High-End Magazine Style */}
        <div className="mb-24 lg:mb-32">
          <div className="animate-fade-up flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-coffee-light/40" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-coffee-light">Connect</span>
          </div>
          <h2 className="animate-fade-up delay-100 font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[6rem] font-bold text-charcoal tracking-tight leading-[0.9]">
            Secure <br /> 
            <span className="italic font-normal text-coffee">Your Table</span>
          </h2>
        </div>

        {/* Bento Editorial Grid: Layered Information Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-fr">
          
          {/* Main Form Block: The Action Center */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.03)] border border-charcoal/5 flex flex-col justify-between animate-fade-up delay-200">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal mb-10">Reservation Details</h3>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-warm-400 block mb-2">Guest Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-sm focus:outline-none focus:border-coffee transition-all placeholder:text-charcoal/20" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-warm-400 block mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@address.com" 
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-sm focus:outline-none focus:border-coffee transition-all placeholder:text-charcoal/20" 
                    />
                  </div>
                </div>
                <div className="group relative">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-warm-400 block mb-2">Occasions / Special Requests</label>
                    <textarea 
                      rows={2} 
                      placeholder="Tell us about your visit..." 
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-sm focus:outline-none focus:border-coffee transition-all resize-none placeholder:text-charcoal/20" 
                    />
                </div>
                <button className="mt-8 flex items-center gap-6 group outline-none">
                  <span className="w-16 h-16 rounded-full bg-charcoal text-white flex items-center justify-center group-hover:bg-coffee transition-all duration-500 shadow-xl group-hover:shadow-coffee/30">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal">Submit Request</span>
                    <span className="text-xs text-muted italic">Our concierge will contact you</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Aesthetic Image Block: Atmospheric Depth */}
          <div className="lg:col-span-5 relative rounded-[3rem] overflow-hidden group shadow-2xl animate-fade-up delay-300 min-h-[400px]">
            <Image 
              src="/hero-coffee-tea.png" 
              alt="Atmosphere" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out" 
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white transition-transform duration-700 group-hover:-translate-y-2">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block opacity-80">Atmosphere</span>
              <h4 className="font-[family-name:var(--font-playfair)] text-white text-3xl md:text-4xl font-bold italic leading-tight">Elevated <br />Sensory Detail</h4>
            </div>
          </div>

          {/* Location Block: The Compass */}
          <div className="lg:col-span-4 bg-coffee/5 p-10 rounded-[3rem] flex flex-col justify-between border border-coffee/10 animate-fade-up delay-400 group">
            <div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-10 shadow-sm group-hover:shadow-md transition-shadow">
                 <Globe className="w-5 h-5 text-coffee" />
              </div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-coffee mb-4">Location</h4>
              <p className="text-base text-charcoal font-medium leading-relaxed italic">
                Jl. Ahmad Yani No. 123, <br />
                Semarang, Indonesia
              </p>
            </div>
            <a href="#" className="flex items-center gap-3 text-[10px] font-bold text-coffee uppercase tracking-[0.3em] mt-12 hover:gap-5 transition-all">
              Google Maps <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Hours Block: The Tempo */}
          <div className="lg:col-span-5 bg-charcoal p-10 rounded-[3rem] text-white flex flex-col justify-between animate-fade-up delay-500 min-h-[350px]">
             <div className="flex justify-between items-start">
                <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-warm-400">Opening Hours</h4>
                <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[8px] font-bold uppercase tracking-widest text-green-500">Open Now</span>
                </div>
             </div>
             <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                   <span className="text-sm font-medium text-warm-200 italic">Mon - Thu</span>
                   <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold tracking-tight">08:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                   <span className="text-sm font-medium text-warm-200 italic">Fri - Sun</span>
                   <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold tracking-tight text-coffee-light">08:00 - 00:00</span>
                </div>
             </div>
          </div>

          {/* Social Block: The Community */}
          <div className="lg:col-span-3 bg-warm-100 p-10 rounded-[3rem] border border-warm-200 flex flex-col justify-center items-center text-center animate-fade-up delay-600 group cursor-pointer hover:bg-warm-200 transition-colors duration-500">
             <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700">
                <Camera className="w-8 h-8 text-charcoal" />
             </div>
             <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-warm-400 mb-2">Follow Us</span>
             <a href="https://www.instagram.com/ribian.coffee/" className="text-xs font-bold text-charcoal hover:text-coffee transition-colors tracking-widest">@ribian.coffee</a>
          </div>

        </div>

        {/* Section Footer: Editorial Detail */}
        <div className="mt-40 flex justify-center animate-fade-up">
           <div className="h-[1px] w-full bg-charcoal/5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-12 bg-ivory">
                <span className="text-[10px] font-bold tracking-[1.2em] uppercase text-warm-400">RiBian Boutique</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
