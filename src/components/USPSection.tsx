import { motion } from 'motion/react';
import { ShieldCheck, Video, Award, CheckCircle2, XCircle, Sparkles, Star, Lock } from 'lucide-react';

interface USPSectionProps {
  onGetStarted: () => void;
}

export default function USPSection({ onGetStarted }: USPSectionProps) {
  const coreBenefits = [
    {
      icon: <Award className="w-6 h-6 text-amber-500 stroke-[2]" />,
      title: "100% Handcrafted by Artists",
      description: "Unlike robotic online generators or static cursive fonts, our signatures are custom-sketched by professional calligraphers who study the flow, weight, and geometry of your unique letters."
    },
    {
      icon: <Video className="w-6 h-6 text-blue-500 stroke-[2]" />,
      title: "Video Tracing Tutorials Included",
      description: "An elegant design is useless if you can't repeat it. Every package includes step-by-step slow-motion video tutorials and printable worksheets so you can master your signature in under 15 minutes."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500 stroke-[2]" />,
      title: "Built-In Forgery Protection",
      description: "We optimize for security. Our artists inject subtle stroke variations and dynamic flow vectors that make your signature look incredibly fluid to write, but highly complex and virtually impossible for others to replicate."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-500 stroke-[2]" />,
      title: "Full Lifetime Ownership",
      description: "You receive high-resolution vector SVGs and transparent background PNGs. You retain 100% of the copyright for commercial use, bank documents, branding, and digital signatures."
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 overflow-hidden select-none" id="usp-why-us">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <h4 className="font-mono text-xs font-extrabold uppercase tracking-widest text-amber-600">
              WHY KAVIYA DIGITAL
            </h4>
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-none">
            The difference between a <span className="text-zinc-500 italic font-serif font-normal">generic scribble</span> and an <span className="text-gold">artistic statement.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-sans font-medium leading-relaxed">
            Free generators use standard system fonts that anyone can copy. We design highly-secure, customized calligraphic masterpieces tailored to your professional identity.
          </p>
        </div>

        {/* Core Value Pillars - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative p-6 sm:p-8 bg-zinc-50 border border-zinc-200/60 rounded-3xl hover:border-amber-500/30 transition-all duration-300 hover:bg-zinc-100/30 group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/[0.01] rounded-3xl pointer-events-none group-hover:to-amber-500/[0.03] transition-all duration-300" />
              
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-zinc-200 shadow-sm shrink-0">
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-sans font-black text-zinc-900 group-hover:text-amber-600 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Direct USP Section Call-to-Action */}
        <div className="flex flex-col items-center justify-center pt-4 text-center">
          <button
            onClick={onGetStarted}
            className="group relative inline-flex items-center gap-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-extrabold text-sm sm:text-base px-8 py-4.5 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <span>Upgrade Your Signature Identity Today</span>
            <span className="text-blue-200 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <span className="text-[10px] sm:text-xs text-zinc-500 font-mono font-bold tracking-wider uppercase mt-4 block">
            ⭐ 4.9/5 RATING • MASTER CALLIGRAPHERS • 100% SECURE
          </span>
        </div>

      </div>
    </section>
  );
}
