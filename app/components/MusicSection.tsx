import Image from "next/image";

const schedule = [
  { day: "Mon", artist: "Acoustic Duo — Soulful Strings", time: "19:00–22:00", genre: "Acoustic" },
  { day: "Tue", artist: "Jazz Night — The Velvet Quarter", time: "20:00–23:00", genre: "Jazz" },
  { day: "Wed", artist: "Open Mic — Your Stage Awaits", time: "19:30–22:00", genre: "Open Mic" },
  { day: "Thu", artist: "Indie Folk — Wanderlust", time: "19:00–22:00", genre: "Indie" },
  { day: "Fri", artist: "Blues & Groove — River Road", time: "20:00–23:30", genre: "Blues" },
  { day: "Sat", artist: "Special Guest — TBA", time: "20:00–00:00", genre: "Special" },
  { day: "Sun", artist: "Bossa Nova — Café Tropicana", time: "18:00–21:00", genre: "Bossa Nova" },
];

export default function MusicSection() {
  return (
    <section id="music" className="relative py-32 md:py-48 bg-[#120e0d] text-white overflow-hidden">
      {/* Deep atmospheric stage lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(196,164,124,0.15)_0%,rgba(18,14,13,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(126,156,101,0.05)_0%,rgba(18,14,13,0)_70%)] pointer-events-none" />
      
      {/* Cinematic Film Grain */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Dynamic Asymmetrical Layout */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          {/* Left: Cinematic Polaroid/Vinyl Collage */}
          <div className="animate-fade-in w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex justify-center items-center">
            
            {/* Ambient Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c4a47c] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            {/* Main Polaroid */}
            <div className="absolute z-20 w-[70%] sm:w-[60%] aspect-[3/4] bg-[#faf8f5] p-3 sm:p-4 pb-16 sm:pb-20 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out group">
              <div className="relative w-full h-full bg-[#120e0d] overflow-hidden">
                <Image
                  src="/live-music.png"
                  alt="Live performance"
                  fill
                  className="object-cover opacity-90 sepia-[0.2] contrast-110 group-hover:scale-110 transition-transform duration-[3s]"
                  sizes="(max-width: 1024px) 70vw, 30vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 flex flex-col items-center justify-center text-center">
                 <p className="font-[family-name:var(--font-playfair)] italic text-[#1a1a1a] text-xl sm:text-2xl font-bold leading-none">Jazz Night</p>
                 <p className="text-[9px] uppercase tracking-widest text-[#7a7a7a] mt-1 font-semibold">Live at RiBian</p>
              </div>
            </div>
            
            {/* Spinning Vinyl Record Element */}
            <div className="absolute bottom-10 -right-4 sm:right-0 z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#0a0a0a] shadow-[0_20px_40px_rgba(0,0,0,0.9)] animate-[spin_4s_linear_infinite] flex items-center justify-center">
               <div className="w-[95%] h-[95%] rounded-full border-[0.5px] border-white/10 flex items-center justify-center">
                 <div className="w-[85%] h-[85%] rounded-full border-[0.5px] border-white/10 flex items-center justify-center">
                   <div className="w-[75%] h-[75%] rounded-full border-[0.5px] border-white/10 flex items-center justify-center">
                     <div className="w-[65%] h-[65%] rounded-full border-[0.5px] border-white/10 flex items-center justify-center">
                       {/* Vinyl Label */}
                       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#8b6f56] to-[#c4a47c] flex items-center justify-center relative overflow-hidden">
                          <span className="text-[6px] text-white/50 absolute top-2 uppercase tracking-widest">RiBian</span>
                          <div className="w-2 h-2 rounded-full bg-[#120e0d] shadow-inner" />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Back abstract ticket */}
            <div className="absolute top-10 left-0 w-[40%] h-[30%] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] -rotate-12 z-0 rounded-lg flex flex-col justify-center items-center opacity-70">
              <span className="text-[8px] tracking-[0.4em] uppercase text-white/30 mb-2">Admit One</span>
              <div className="w-full border-t border-dashed border-white/20 my-1" />
            </div>

          </div>

          {/* Right: Concert Program (Schedule) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-16">
              <div className="animate-fade-up flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#c4a47c]/50" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c4a47c]">
                  The Evening Sound
                </span>
              </div>
              <h2 className="animate-fade-up delay-100 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance tracking-tight">
                Live Sessions
              </h2>
              <p className="animate-fade-up delay-200 text-[#8a7b68] text-sm sm:text-base leading-relaxed max-w-md">
                As the sun sets, our café transforms. Experience a curated lineup of local artists performing acoustic, jazz, and soul.
              </p>
            </div>

            {/* Premium Program List with Timeline */}
            <div className="animate-fade-up delay-300 flex flex-col relative">
              <div className="absolute top-0 bottom-0 left-[27px] w-[1px] bg-gradient-to-b from-[#c4a47c]/0 via-[#c4a47c]/20 to-[#c4a47c]/0" />
              
              {schedule.map((item, i) => (
                <div
                  key={item.day}
                  className="group relative pl-16 py-6 border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-500"
                >
                  {/* Glowing Timeline dot */}
                  <div className="absolute left-6 top-[34px] w-2 h-2 rounded-full bg-[#120e0d] border border-[#c4a47c]/50 group-hover:bg-[#c4a47c] group-hover:shadow-[0_0_12px_#c4a47c] transition-all duration-500" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 mb-1">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#c4a47c] font-[family-name:var(--font-playfair)] text-xl italic w-10">
                        {item.day}
                      </span>
                      <span className="font-semibold text-lg tracking-wide text-[#e8e2d9] group-hover:text-white transition-colors duration-300">
                        {item.artist}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#8a7b68] tracking-widest uppercase">
                      {item.time}
                    </span>
                  </div>
                  <div className="pl-[3.5rem] text-[10px] text-[#6a5b48] tracking-[0.2em] uppercase font-semibold">
                    {item.genre}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
