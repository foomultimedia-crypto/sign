import { Check, Flame, Award, Sparkles, Layers, Image, FileText, ArrowRight } from 'lucide-react';
import practiceImg from '../assets/images/signature_diff_chart_1784099012802.jpg';

interface PackagesProps {
  onSelectPackage: (packageName: string, price: number) => void;
}

export const PACKAGES = [
  {
    id: 'single',
    name: 'Single Signature',
    icon: '🖊️',
    price: 99,
    description: 'Get a clean, custom-crafted digital signature tailored perfectly to your style.',
    tagline: 'INDIVIDUAL LICENSE',
    features: [
      '1 Custom Signature Design',
      'Transparent PNG',
      'High Quality',
      'Fast Delivery'
    ],
    popular: false
  },
  {
    id: 'bundle',
    name: '3 in one bundle',
    icon: '✨',
    price: 99,
    description: 'The ultimate signature suite offering 3 distinct styles to fit all your branding needs.',
    tagline: 'PREMIUM EXECUTIVE BUNDLE',
    features: [
      '3 Custom Signature Designs',
      'Transparent PNG Files',
      'High Quality',
      'Fast Delivery',
      'Best Value'
    ],
    popular: true
  }
];

export default function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <div className="py-20 bg-white relative border-t border-zinc-100" id="pricing-packages">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Pricing & Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-950 mt-4 tracking-tight">
            Choose Your Signature Suite
          </h2>
          <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
            Every signature is custom designed by professional penmen and digitized into high-resolution transparent assets.
          </p>
        </div>

        {/* Pricing Cards Grid (Two Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col h-full border rounded-2xl p-6 md:p-8 transition-all duration-300 card-glow ${
                pkg.popular
                  ? 'border-amber-500/70 ring-1 ring-amber-500/20 shadow-xl shadow-amber-500/5 bg-amber-50/[0.02]'
                  : 'border-zinc-200 bg-zinc-50/60'
              }`}
            >
              {/* Popular / Best Value Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-zinc-950 text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-amber-500/20">
                  <Flame className="w-3.5 h-3.5 fill-zinc-950" />
                  Best Value Bundle
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{pkg.icon}</span>
                  <span className="text-[10px] font-mono text-amber-600 uppercase tracking-wider">
                    {pkg.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-950 mt-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-2 min-h-[40px] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                  <span className="text-3xl font-display font-bold text-zinc-950">
                    ₹{pkg.price}
                  </span>
                  <span className="text-xs font-mono text-amber-600 font-semibold ml-1.5">
                    Only
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 ml-auto">
                    One-time payment
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <button
                onClick={() => onSelectPackage(pkg.name, pkg.price)}
                className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 mb-8 cursor-pointer ${
                  pkg.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-zinc-950 shadow-lg shadow-amber-500/10'
                    : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-100 border border-zinc-800'
                } transform hover:-translate-y-0.5 active:translate-y-0`}
              >
                Order Now
              </button>

              {/* Features List */}
              <div className="flex-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4 border-b border-zinc-200 pb-2">
                  What is Included
                </span>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-zinc-600 leading-normal">
                      <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security Guarantee */}
              <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-center gap-1.5 text-[10px] text-zinc-400">
                <Award className="w-3.5 h-3.5 text-zinc-400/80" />
                100% Customer Satisfaction Guarantee
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards from Screenshot - Styled exactly as shown */}
        <div className="mt-16 pt-12 border-t border-zinc-900/60 max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: 4 Unique Variations */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-zinc-300/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm">
                <Layers className="w-6 h-6 text-zinc-800 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-sans font-black text-zinc-950 mt-6 tracking-tight">
                4 Unique Variations
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-3 leading-relaxed font-sans font-medium max-w-xs">
                Four different signature styles tailored to your name. Pick your favourite or use different ones for different occasions.
              </p>
            </div>

            {/* Card 2: High-Res PNGs */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-zinc-300/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm">
                <Image className="w-6 h-6 text-zinc-800 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-sans font-black text-zinc-950 mt-6 tracking-tight">
                High-Res PNGs
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-3 leading-relaxed font-sans font-medium max-w-xs">
                Transparent + white background in 3 sizes. 300 DPI, print-ready. Use on documents, emails, or anywhere.
              </p>
            </div>

            {/* Card 3: Practice PDFs */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-zinc-300/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm">
                <FileText className="w-6 h-6 text-zinc-800 stroke-[2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-sans font-black text-zinc-950 mt-6 tracking-tight">
                Practice PDFs
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-3 leading-relaxed font-sans font-medium max-w-xs">
                A4 tracing sheets with faded guides. Print, trace daily, master your new signature in 3–5 days.
              </p>
            </div>

          </div>

          {/* Master it in days, not months section */}
          <div className="mt-16 bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Practice Info and CTA */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-sans font-black text-zinc-950 tracking-tight leading-none">
                  Master it in days, not months.
                </h2>
                
                <div className="space-y-4 text-zinc-600 font-sans text-sm sm:text-base leading-relaxed">
                  <p>
                    Each pack includes <strong className="text-zinc-900 font-bold">A4 practice tracing sheets</strong> with faded signature guides. Simply print them out and practice daily.
                  </p>
                  <p>
                    Most customers master their new signature in <strong className="text-zinc-900 font-bold">3–5 days</strong> of regular practice. The muscle memory kicks in fast.
                  </p>
                </div>

                {/* Practice Feature Checklist */}
                <ul className="space-y-3.5 pt-2">
                  {[
                    '3 practice layouts included',
                    'Faded guides for easy tracing',
                    'A4 size — standard printer compatible',
                    'Works with any pen or pencil',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-semibold text-zinc-900">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* High Contrast CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectPackage('Single Signature', 99)}
                    className="inline-flex items-center justify-between gap-3 bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-sm uppercase tracking-wider px-8 py-4.5 rounded-2xl shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full"
                  >
                    <span className="flex-1 text-center font-black">Get Your Signature — ₹99</span>
                    <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="p-1.5 bg-zinc-50 rounded-2xl shadow-md border border-zinc-100/80 overflow-hidden group">
                  <div className="relative rounded-xl overflow-hidden border border-zinc-200/60 bg-white p-1 shadow-inner group/img aspect-[4/3] w-full">
                    <img 
                      src={practiceImg} 
                      alt="A4 Practice Sheets with signature tracing guides" 
                      className="w-full h-full object-cover rounded-lg group-hover/img:scale-[1.01] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
