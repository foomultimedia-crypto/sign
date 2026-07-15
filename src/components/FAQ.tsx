import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Lock, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  onGetStarted?: () => void;
}

export default function FAQ({ onGetStarted }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How long until I receive my signatures?',
      answer: 'You will receive your custom signature options in just 2 to 3 days. We focus on speed without compromising on calligraphic quality and precision.'
    },
    {
      question: 'Just ₹99 — what\'s the catch?',
      answer: 'No catch! We believe beautiful, professional penmanship should be accessible to everyone. By streamlining our digital proofing process, we can offer premium handcrafted signatures at an unbeatable price.'
    },
    {
      question: 'Can I really learn to replicate these by hand?',
      answer: 'Yes, absolutely! Our packages include step-by-step slow-motion stroke videos and printable tracing sheets specifically designed to help you build muscle memory and master your new signature quickly.'
    },
    {
      question: 'What if I don\'t like any of the variations?',
      answer: 'We want you to love your signature. We provide revisions with our packages, allowing us to tweak lines, slopes, and style options until it is exactly what you envisioned.'
    },
    {
      question: 'Is the payment secure?',
      answer: 'Yes, 100% secure. We use industry-standard encrypted payment gateways to ensure your transaction details and personal information are completely protected.'
    },
    {
      question: 'What info do I need to provide?',
      answer: 'All we need is your name, your preferred style (e.g., modern, elegant, bold, or complex), and any specific letters or flourishes you\'d like us to emphasize.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white border-t border-zinc-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Inquiries
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-zinc-950 mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-zinc-500 mt-2">
            Have questions about digital usage, learning guides, or legalities? Explore our detailed breakdown.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-zinc-50/80 transition cursor-pointer"
                >
                  <span className="text-xs md:text-sm font-semibold text-zinc-800 flex items-center gap-2.5">
                    <HelpCircle className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-zinc-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <div className="p-5 text-xs text-zinc-600 leading-relaxed bg-zinc-50/30">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Replacement CTA Callout */}
        <div className="mt-16 text-center p-8 sm:p-12 bg-[#0b1220] border border-zinc-800/50 rounded-3xl shadow-xl space-y-6 sm:space-y-8 max-w-3xl mx-auto">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white leading-tight tracking-tight">
              Your signature is the most personal <br className="hidden sm:inline" />
              thing you put on paper. <br />
              <span className="text-[#f19c1b]">Make it count.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans font-medium max-w-lg mx-auto leading-relaxed">
              ₹99. One-time. 4 signature variations. Practice sheets. Delivered in 24 hours.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center gap-3 bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full max-w-md"
            >
              <span>Get Your Signature — ₹99</span>
              <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 border-t border-zinc-800/50 text-[11px] sm:text-xs font-sans font-semibold text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>24hr Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
