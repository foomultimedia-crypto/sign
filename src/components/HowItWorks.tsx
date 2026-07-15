import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onGetStarted: () => void;
}

export default function HowItWorks({ onGetStarted }: HowItWorksProps) {
  const steps = [
    {
      number: 1,
      title: "Pay ₹99 & Fill the Brief",
      description: "Complete a quick payment, then fill out a short form — your name, style preferences, and any reference signatures you like. Takes 2 minutes."
    },
    {
      number: 2,
      title: "We Handcraft Your Options",
      description: "Our professional signature designers custom-design 4 unique variations based on your style brief. You select your absolute favorite."
    },
    {
      number: 3,
      title: "Receive Your Complete Pack",
      description: "Get high-res PNGs, transparent source files, and custom A4 practice tracing sheets delivered straight to your email in less than 24 hours."
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none border-t border-zinc-100" id="how-it-works">
      <div className="max-w-3xl mx-auto">
        
        {/* Subtle Section Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
          <h4 className="font-sans text-[11px] sm:text-xs font-black tracking-widest text-zinc-400 uppercase text-center">
            HOW IT WORKS
          </h4>
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
        </div>

        {/* Headline */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-tight">
            3 simple steps. <span className="text-[#2563eb]">That's</span> <span className="text-[#f19c1b]">it.</span>
          </h2>
        </div>

        {/* Steps Timeline Stack */}
        <div className="relative pl-4 sm:pl-8 space-y-12 max-w-2xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[30px] sm:left-[46px] top-4 bottom-4 w-[2px] bg-zinc-100" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative flex gap-6 sm:gap-10 items-start group"
            >
              {/* Number Circle Badge */}
              <div className="relative z-10 flex-shrink-0 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#2563eb] border-4 border-white shadow-md flex items-center justify-center text-white font-sans font-black text-sm sm:text-base">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="space-y-2 pt-1">
                <h3 className="text-lg sm:text-xl font-sans font-black text-zinc-950 tracking-tight leading-none group-hover:text-[#2563eb] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Embedded Premium Call-to-Action */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-4 pt-4">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-between gap-4 bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-sm sm:text-base uppercase tracking-wider px-8 py-5 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full max-w-md"
          >
            <span className="flex-1 text-center font-black">Get Your Signature — ₹99</span>
            <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
          </button>
          
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans font-medium">
            <Check className="w-4 h-4 text-emerald-500 stroke-[3.5]" />
            <span>Handcrafted custom options delivered in 24 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
