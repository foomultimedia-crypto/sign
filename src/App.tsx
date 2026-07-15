import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import SignatureGenerator from './components/SignatureGenerator';
import Packages from './components/Packages';
import FAQ from './components/FAQ';
import OrderModal from './components/OrderModal';
import WhatsAppReviews from './components/WhatsAppReviews';
import HowItWorks from './components/HowItWorks';
import CustomerStories from './components/CustomerStories';
import WhoThisIsFor from './components/WhoThisIsFor';
import USPSection from './components/USPSection';
import ServiceExplanation from './components/ServiceExplanation';
import Footer from './components/Footer';
import handcraftedImg from './assets/images/handcrafted_signatures_paper_1784100869013.jpg';
import beforeAfterImg from './assets/images/signature_before_after_1784098069811.jpg';
import signatureDiffChartImg from './assets/images/signature_diff_chart_1784099012802.jpg';
import agreementSignatureImg from './assets/images/fountain_pen_signature_1784158367928.jpg';
import signatureComparisonsImg from './assets/images/signature_comparisons_1784098375364.jpg';

export default function App() {
  // Order Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [packageName, setPackageName] = useState('Single Signature');
  const [packagePrice, setPackagePrice] = useState(99);

  // Scroll Helpers
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderInitiated = (name: string, price: number) => {
    setPackageName(name);
    setPackagePrice(price);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-400 pb-28 sm:pb-32">
      
      {/* Brand Header Bar */}
      <header className="w-full bg-white text-zinc-900 h-16 px-4 md:px-8 flex items-center justify-between border-b border-zinc-200/80 shadow-sm sticky top-0 z-50 select-none">
        <div className="flex items-center gap-1.5 font-sans">
          <span className="text-sm sm:text-base font-black tracking-tight text-zinc-900 uppercase whitespace-nowrap">
            Kaviya Digital <span className="text-amber-600">Agency</span>
          </span>
        </div>
        <button
          onClick={() => handleOrderInitiated('Single Signature', 99)}
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-sm shadow-blue-500/10 active:scale-95"
        >
          Get Started — ₹99
        </button>
      </header>

      {/* Hero Section */}
      <Hero 
        onScrollToSandbox={() => scrollToId('signature-sandbox')}
        onScrollToPricing={() => scrollToId('pricing-packages')}
      />

      {/* Handcrafted Process Visual ("kela add same image") */}
      {/* SECTION 1: THE TRANSFORMATION */}
      <div className="bg-zinc-50 py-16 px-4 border-b border-zinc-200/60 select-none">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section Titles: THE TRANSFORMATION */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-zinc-200 w-12 sm:w-20" />
              <h4 className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                THE TRANSFORMATION
              </h4>
              <div className="h-px bg-zinc-200 w-12 sm:w-20" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-none">
              From <span className="line-through text-zinc-400 decoration-[#e52e2e]/90 decoration-3 sm:decoration-4">scribble</span> to <span className="text-[#f19c1b]">signature.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-500 font-sans font-medium leading-relaxed">
              See the difference a professionally designed signature makes. Your old scribble vs. your new identity.
            </p>
          </div>

          {/* Centered clean display of the signature comparisons template image */}
          <div className="p-2 bg-zinc-50 rounded-2xl shadow-md border border-zinc-100 overflow-hidden group max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-zinc-200/60 bg-white p-1 shadow-inner group/img aspect-[16/10] sm:aspect-[16/11] w-full">
              <img 
                src={signatureComparisonsImg} 
                alt="Signature comparisons and rewrite templates showcasing different handwriting design variations" 
                className="w-full h-full object-cover rounded-lg group-hover/img:scale-[1.01] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Before vs After Checklist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            {/* Before Card */}
            <div className="bg-[#fff5f5] border border-[#ffe3e3] rounded-2xl p-5 sm:p-6 flex flex-col justify-center space-y-3.5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-rose-500 font-bold text-lg leading-none">❌</span>
                <span className="text-[#e52e2e] font-extrabold text-base sm:text-lg tracking-tight">Before</span>
              </div>
              <ul className="space-y-2.5 text-zinc-600 text-xs sm:text-sm font-sans font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Looks different every time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Embarrassing on formal documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>No confidence while signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Unprofessional first impression</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-5 sm:p-6 flex flex-col justify-center space-y-3.5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-lg leading-none">✓</span>
                <span className="text-[#15803d] font-extrabold text-base sm:text-lg tracking-tight">After</span>
              </div>
              <ul className="space-y-2.5 text-zinc-600 text-xs sm:text-sm font-sans font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Consistent, repeatable every time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Looks great on contracts & cheques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Sign with confidence anywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400">•</span>
                  <span>Premium, professional identity</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION 2: THE PROBLEM */}
      <div className="bg-white py-16 px-4 border-y border-zinc-100 select-none">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section Titles: THE PROBLEM */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-zinc-200 w-12 sm:w-20" />
              <h4 className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                THE PROBLEM
              </h4>
              <div className="h-px bg-zinc-200 w-12 sm:w-20" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-none">
              Your signature says <span className="text-[#e52e2e]">more about you</span> than you think.
            </h2>
            <div className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-500 font-sans font-medium leading-relaxed space-y-4">
              <p>
                Think about it — every <strong className="text-zinc-800 font-bold">contract you sign</strong>, every <strong className="text-zinc-800 font-bold">cheque you write</strong>, every <strong className="text-zinc-800 font-bold">official document</strong> has your signature on it.
              </p>
              <p>
                Yet most people spend <strong className="text-zinc-800 font-bold">zero time</strong> designing their signature. They scribble something in school and stick with it for life.
              </p>
            </div>
          </div>

          {/* Centered clean display of the handcrafted handwriting worksheet templates */}
          <div className="p-2 bg-zinc-50 rounded-2xl shadow-md border border-zinc-100 overflow-hidden group max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-zinc-200/60 bg-white p-1 shadow-inner group/img aspect-[16/10] sm:aspect-[16/11] w-full">
              <img 
                src={handcraftedImg} 
                alt="Handwriting worksheets and template guides customized for your signature" 
                className="w-full h-full object-cover rounded-lg group-hover/img:scale-[1.01] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Styled quote banner requested by user */}
          <div className="bg-gradient-to-br from-[#fffbeb] to-[#fef9c3] border-2 border-[#f19c1b] rounded-3xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-amber-900 font-extrabold text-base sm:text-lg md:text-xl leading-relaxed">
              "First impressions aren't just visual — your signature is the first thing people judge on paper."
            </p>
          </div>

        </div>
      </div>

      {/* Signature Sandbox Section */}
      <section className="py-16 md:py-24 bg-white border-t border-zinc-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <SignatureGenerator 
            onOrderClick={(packageName) => handleOrderInitiated(packageName, 99)} 
          />

        </div>
      </section>

      {/* SECTION 3: WHAT YOU GET */}
      <div className="bg-zinc-50 py-16 px-4 border-t border-zinc-200/60 select-none">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section Titles: WHAT YOU GET */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-zinc-200 w-12 sm:w-20" />
              <h4 className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                WHAT YOU GET
              </h4>
              <div className="h-px bg-zinc-200 w-12 sm:w-20" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-none">
              A complete signature pack, <span className="text-[#3b82f6]">crafted</span> <span className="text-[#f19c1b]">for you.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-500 font-sans font-medium leading-relaxed">
              Every single detail of your signature is designed with high artistic precision to give you a strong, memorable identity.
            </p>
          </div>

          {/* Centered clean display of the premium signature agreement photo */}
          <div className="p-2 bg-zinc-50 rounded-2xl shadow-md border border-zinc-100 overflow-hidden group max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-zinc-200/60 bg-white p-1 shadow-inner group/img aspect-[16/10] sm:aspect-[16/11] w-full">
              <img 
                src={agreementSignatureImg} 
                alt="A professional hand signing an official agreement document using a luxury black and gold fountain pen" 
                className="w-full h-full object-cover rounded-lg group-hover/img:scale-[1.01] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Service Explanation Section (What it is, Who it is for, Key Benefits) */}
      <ServiceExplanation onGetStarted={() => handleOrderInitiated('Single Signature', 99)} />

      {/* Unique Selling Proposition Section */}
      <USPSection onGetStarted={() => handleOrderInitiated('Single Signature', 99)} />

      {/* How It Works Section */}
      <HowItWorks onGetStarted={() => handleOrderInitiated('Single Signature', 99)} />

      {/* Pricing / Packages Section */}
      <Packages onSelectPackage={handleOrderInitiated} />

      {/* WhatsApp Reviews Section - Styled exactly as requested */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 select-none" id="whatsapp-reviews">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <h4 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              REAL CUSTOMER REVIEWS
            </h4>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-none">
              What customers are saying <span className="text-[#f19c1b]">on WhatsApp</span>
            </h2>
            
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-500 font-sans font-medium leading-relaxed">
              Real, unfiltered conversations from people who got their signatures designed.
            </p>
          </div>

          {/* WhatsApp Screenshots Container */}
          <WhatsAppReviews />

          {/* Centered Premium CTA Button */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => handleOrderInitiated('Single Signature', 99)}
              className="inline-flex items-center justify-between gap-4 bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-sm sm:text-base uppercase tracking-wider px-8 py-5 rounded-2xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full max-w-md md:max-w-lg"
            >
              <span className="flex-1 text-center font-black">Get Your Signature — ₹99</span>
              <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </section>

      {/* Customer Stories Section */}
      <CustomerStories />

      {/* Who This Is For Section */}
      <WhoThisIsFor onGetStarted={() => handleOrderInitiated('Single Signature', 99)} />

      {/* Frequently Asked Questions */}
      <FAQ onGetStarted={() => handleOrderInitiated('Single Signature', 99)} />

      {/* Footer Branding Section */}
      <Footer onScrollToId={scrollToId} />

      {/* Interactive Step-by-Step Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageName={packageName}
        price={packagePrice}
      />

      {/* Sticky Bottom Checkout Bar (ex this model down la add) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d1527] border-t border-zinc-800 shadow-2xl flex flex-col select-none">
        {/* Top Urgency Strip */}
        <div className="w-full bg-[#e52e2e] text-white font-sans text-[11px] sm:text-xs py-1.5 px-4 flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm font-extrabold tracking-wider">
          <Clock className="w-3.5 h-3.5 stroke-[3] animate-pulse flex-shrink-0" />
          <span>OFFER EXPIRING</span>
          <span className="text-white/60">•</span>
          <div className="bg-[#b51d1d] px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black tracking-wider uppercase">
            ONLY 2 SLOTS LEFT
          </div>
        </div>

        {/* Pricing and CTA Bar */}
        <div className="w-full px-4 py-3 sm:px-6 md:px-8 flex items-center justify-between gap-4 max-w-5xl mx-auto">
          {/* Price details (left) */}
          <div className="flex flex-col">
            <span className="text-[9px] text-zinc-400 font-extrabold tracking-widest uppercase">
              TOTAL PRICE
            </span>
            <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-white font-sans">
                ₹99
              </span>
              <span className="text-xs sm:text-sm line-through text-zinc-500 font-bold font-sans">
                ₹999
              </span>
            </div>
          </div>

          {/* Action Button (right) */}
          <button
            onClick={() => handleOrderInitiated('Single Signature', 99)}
            className="bg-[#f19c1b] hover:bg-[#d97706] text-zinc-950 font-sans font-black text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <span>Get Signature</span>
            <ArrowRight className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
          </button>
        </div>
      </div>

    </div>
  );
}
