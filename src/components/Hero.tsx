import { Sparkles, ChevronRight } from 'lucide-react';

interface HeroProps {
  onScrollToSandbox: () => void;
  onScrollToPricing: () => void;
}

export default function Hero({ onScrollToSandbox, onScrollToPricing }: HeroProps) {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden bg-[#0c1322]">
      
      {/* Background Decorative Artworks */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none select-none" />

      {/* Hero content container */}
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 px-4">
        
        {/* Top prestige pill */}
        <div className="inline-flex items-center gap-2 bg-[#1e293b]/60 border border-zinc-800/80 px-4 py-1.5 rounded-full shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-[#f19c1b] animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono font-bold text-[#f19c1b] tracking-wider uppercase">
            Limited Offer — Introductory Price
          </span>
        </div>

        {/* High-End Typography Headline */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Still signing with <br />
            that <span className="text-[#f19c1b]">embarrassing</span> scribble?
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-relaxed">
            Get a polished, professional signature — designed specifically for you, delivered with practice sheets so you can master it in days.
          </p>
        </div>

        {/* Buttons / Calls to Action */}
        <div className="flex flex-col items-center justify-center pt-4 max-w-sm mx-auto">
          <button
            onClick={onScrollToPricing}
            className="w-full px-10 py-4.5 rounded-xl bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Get Your Signature — ₹99
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </div>
  );
}
