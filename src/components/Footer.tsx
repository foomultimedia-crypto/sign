import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToId: (id: string) => void;
}

export default function Footer({ onScrollToId }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090f1a] text-zinc-400 font-sans py-12 border-t border-zinc-900 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-white uppercase">
                Kaviya Digital <span className="text-amber-500">Agency</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              Professional signature design & practice kits. One-time purchase, lifetime access. Elevate your personal brand with a signature crafted with artistic precision.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToId('how-it-works')}
                  className="hover:text-amber-400 transition cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToId('pricing-packages')}
                  className="hover:text-amber-400 transition cursor-pointer text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToId('faq')}
                  className="hover:text-amber-400 transition cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToId('signature-sandbox')}
                  className="hover:text-amber-400 transition cursor-pointer text-left"
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#faq" className="hover:text-amber-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <button
                  onClick={() => onScrollToId('faq')}
                  className="hover:text-amber-400 transition cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Back to top Column */}
          <div className="md:col-span-1 flex justify-end items-start">
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-zinc-600 font-sans">
          <div>
            © 2026 Kaviya Digital Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <span className="text-zinc-500 font-bold">Kaviya Digital</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
