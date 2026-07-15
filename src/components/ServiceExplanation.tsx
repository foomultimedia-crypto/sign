import { motion } from 'motion/react';
import { Sparkles, Users, Award, Check, ArrowRight, PenTool } from 'lucide-react';

interface ServiceExplanationProps {
  onGetStarted: () => void;
}

export default function ServiceExplanation({ onGetStarted }: ServiceExplanationProps) {
  const whatItIsBullets = [
    "A custom-tailored creative service where professional calligraphers design custom signatures for your exact name.",
    "Delivers 4 distinctive stylistic options ranging from sleek & modern to highly elegant & classic.",
    "Includes professional step-by-step video tutorials and printable A4 tracing sheets to easily learn your chosen style.",
    "Provides high-resolution transparent PNG files for seamless use on contracts, digital emails, and PDF documents."
  ];

  const whoItsForBullets = [
    "Business founders, CEOs, and executives who regularly authorize high-value contracts and agreements.",
    "Certified Professionals (CAs, doctors, advocates, engineers) who sign official papers and documents daily.",
    "Creative artists, authors, and content creators looking to reinforce their distinct personal brand identity.",
    "Anyone wishing to replace an inconsistent, child-like scribble with an impactful, sophisticated mark."
  ];

  const keyBenefitsBullets = [
    "Authority & Prestige: Elevate your first impression and instantly command respect on physical or digital paper.",
    "Repeatable Consistency: Master a signature that looks identically striking, professional, and elegant every time.",
    "Practice & Master in 10 Mins: High-quality tracing guides and videos let you build muscle-memory quickly.",
    "Double-Format Versatility: Works flawlessly on physical paper (cheques, letters) and online PDFs (DocuSign, Adobe Sign)."
  ];

  return (
    <section className="bg-zinc-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-zinc-200/60 select-none" id="service-explanation">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Subtle Section Header */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
          <h4 className="font-sans text-[11px] sm:text-xs font-black tracking-widest text-zinc-400 uppercase text-center">
            THE STUDIO DETAILS
          </h4>
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
        </div>

        {/* Headline */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-tight">
            Elevating signatures from <span className="text-[#2563eb]">simple scribble</span> to <span className="text-[#f19c1b]">brand mark.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-sans font-medium leading-relaxed">
            Your signature is authorized on every important deal you secure, every contract you approve, and every document you finalize. Here is how our premium bespoke signature design service elevates your identity.
          </p>
        </div>

        {/* 3-Column Structured Explanation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: What It Is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shadow-inner">
                  <PenTool className="w-5 h-5 text-amber-600 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-sans font-black text-zinc-950 tracking-tight">
                  What is the Service?
                </h3>
              </div>
              
              <div className="h-px bg-zinc-100 w-full" />

              {/* Bullet Points */}
              <ul className="space-y-4">
                {whatItIsBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-sm mt-0.5 select-none">•</span>
                    <p className="text-sm text-zinc-600 font-sans font-medium leading-relaxed">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Who It's For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-inner">
                  <Users className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-sans font-black text-zinc-950 tracking-tight">
                  Who is it For?
                </h3>
              </div>
              
              <div className="h-px bg-zinc-100 w-full" />

              {/* Bullet Points */}
              <ul className="space-y-4">
                {whoItsForBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-sm mt-0.5 select-none">•</span>
                    <p className="text-sm text-zinc-600 font-sans font-medium leading-relaxed">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-inner">
                  <Award className="w-5 h-5 text-emerald-600 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-sans font-black text-zinc-950 tracking-tight">
                  Key Benefits
                </h3>
              </div>
              
              <div className="h-px bg-zinc-100 w-full" />

              {/* Bullet Points */}
              <ul className="space-y-4">
                {keyBenefitsBullets.map((bullet, idx) => {
                  const [boldPart, rest] = bullet.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold text-sm mt-0.5 select-none">•</span>
                      <p className="text-sm text-zinc-600 font-sans font-medium leading-relaxed">
                        <strong className="text-zinc-900 font-bold">{boldPart}</strong>: {rest}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* CTA Banner */}
        <div className="flex flex-col items-center justify-center pt-4 space-y-4">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-between gap-4 bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-sm sm:text-base uppercase tracking-wider px-8 py-5 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full max-w-md"
          >
            <span className="flex-1 text-center font-black">Design Your Signature — ₹99</span>
            <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
          </button>
          
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans font-medium">
            <Check className="w-4 h-4 text-emerald-500 stroke-[3.5]" />
            <span>4 unique handcrafted design variations provided with direct practice guide files</span>
          </div>
        </div>

      </div>
    </section>
  );
}
