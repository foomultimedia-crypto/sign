import { motion } from 'motion/react';
import { Briefcase, UserCheck, FileText, Sparkles, ArrowRight } from 'lucide-react';

interface WhoThisIsForProps {
  onGetStarted: () => void;
}

export default function WhoThisIsFor({ onGetStarted }: WhoThisIsForProps) {
  const items = [
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-600 stroke-[2.5]" />,
      iconBg: "bg-emerald-50 border-emerald-100/50",
      text: "Business owners & founders who sign contracts regularly"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-teal-600 stroke-[2.5]" />,
      iconBg: "bg-teal-50 border-teal-100/50",
      text: "Professionals who want a polished, confident signature"
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600 stroke-[2.5]" />,
      iconBg: "bg-blue-50 border-blue-100/50",
      text: "CAs, lawyers & doctors who sign documents or prescriptions daily"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600 stroke-[2.5]" />,
      iconBg: "bg-amber-50 border-amber-100/50",
      text: "Anyone looking to elevate their personal branding and professional identity"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none border-t border-zinc-100" id="who-this-is-for">
      <div className="max-w-3xl mx-auto">
        
        {/* Subtle Section Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
          <h4 className="font-sans text-[11px] sm:text-xs font-black tracking-widest text-zinc-400 uppercase text-center">
            WHO THIS IS FOR
          </h4>
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
        </div>

        {/* Headline */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-tight">
            If you sign documents, <span className="text-[#2563eb]">this</span> is for <span className="text-[#f19c1b]">you.</span>
          </h2>
        </div>

        {/* Audience Cards Grid */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white border border-zinc-200/60 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-zinc-300/40 transition-all duration-300 flex items-center gap-5 sm:gap-6 text-left"
            >
              {/* Icon container */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border shadow-sm ${item.iconBg}`}>
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-base sm:text-lg text-zinc-800 font-sans font-extrabold leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="mt-14 flex flex-col items-center gap-8 justify-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-between gap-4 bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-sm sm:text-base uppercase tracking-wider px-8 py-5 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full max-w-md"
          >
            <span className="flex-1 text-center font-black">Get Your Signature — ₹99</span>
            <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
          </button>

          {/* 100% Satisfaction Guarantee Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-md bg-amber-50/70 border border-[#f19c1b]/50 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-sans font-black text-amber-900 tracking-tight">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-sm sm:text-base text-amber-800/80 font-sans font-medium leading-relaxed">
              Not happy with your signatures? Contact us within 24 hours for a full refund. No questions asked.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
