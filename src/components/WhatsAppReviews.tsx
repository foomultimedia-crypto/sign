import { motion } from 'motion/react';
import { Phone, MoreVertical, ChevronLeft, Smile, Camera, CheckCheck, Send, Wifi, Battery } from 'lucide-react';

export default function WhatsAppReviews() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 select-none">
      
      {/* Container holding the two beautiful responsive phone mockups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center">
        
        {/* Mockup 1: Green Background phone */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#41624b] rounded-[40px] p-6 sm:p-8 shadow-2xl border border-emerald-900/20 flex flex-col items-center justify-center relative group"
        >
          {/* Outer Phone Bezel Mockup */}
          <div className="w-full max-w-[340px] bg-[#0b0f12] rounded-[48px] p-3.5 shadow-2xl border-4 border-[#2c3539] relative">
            {/* Speaker & Camera Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0b0f12] rounded-full z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-[#1a2327] rounded-full mb-1" />
              <div className="w-2.5 h-2.5 bg-[#1a2327] rounded-full ml-3 mb-1" />
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-2 pb-3 text-white text-[10px] font-mono z-10 relative">
              <span className="font-semibold">10:45 AM</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                <span className="text-[9px]">5G</span>
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Screen Container with WhatsApp Chat Background */}
            <div className="bg-[#0b141a] rounded-[36px] overflow-hidden border border-zinc-900 flex flex-col h-[480px] font-sans relative">
              
              {/* WhatsApp Chat Header */}
              <div className="bg-[#1f2c34] text-white py-3 px-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-1">
                  <ChevronLeft className="w-5 h-5 text-[#00a884] cursor-pointer" />
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#536d7a] flex items-center justify-center text-white font-bold text-sm border border-zinc-700/60 shadow-inner overflow-hidden">
                    <span className="text-zinc-200">RK</span>
                  </div>
                  {/* Name and online status */}
                  <div className="ml-1 text-left">
                    <h4 className="text-xs font-bold leading-tight tracking-wide">Customer Reviews</h4>
                    <span className="text-[9px] text-[#00a884] font-medium block">online</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-4 text-zinc-300">
                  <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Chat Bubble Area (Doodle style background pattern simulated via grid overlay) */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0b141a] relative flex flex-col justify-start">
                
                {/* Message 1: Received (Grey bubble) */}
                <div className="self-start max-w-[85%] bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-none p-3 shadow-md relative text-left border border-[#2b3942]/40">
                  <p className="text-xs leading-relaxed font-medium">
                    Bro got my signatures this morning🔥 the tracing sheets are amazing, already practicing. My old signature was so embarrassing lol. This new one looks SO professional. Best ₹199 I ever spent!
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[9px] text-[#8696a0]">10:42 AM</span>
                  </div>
                </div>

                {/* Message 2: Sent (Green bubble) */}
                <div className="self-end max-w-[85%] bg-[#005c4b] text-[#e9edef] rounded-2xl rounded-tr-none p-3 shadow-md relative text-left border border-[#00705a]/40">
                  <p className="text-xs leading-relaxed font-medium">
                    Which variation did you pick?
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[9px] text-[#aebac1]">10:43 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb] stroke-[3]" />
                  </div>
                </div>

                {/* Message 3: Received (Grey bubble) */}
                <div className="self-start max-w-[85%] bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-none p-3 shadow-md relative text-left border border-[#2b3942]/40">
                  <p className="text-xs leading-relaxed font-medium">
                    Variation 3! It's clean and elegant. My CA friend saw it and wants to order too 😂
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[9px] text-[#8696a0]">10:44 AM</span>
                  </div>
                </div>

              </div>

              {/* Bottom WhatsApp Input Bar */}
              <div className="bg-[#1f2c34] p-2 flex items-center gap-2 border-t border-zinc-800">
                <div className="flex-1 bg-[#2a3942] rounded-full py-1.5 px-3 flex items-center justify-between text-zinc-400 border border-zinc-700/30">
                  <div className="flex items-center gap-2">
                    <Smile className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-300" />
                    <span className="text-xs text-zinc-400">Reply</span>
                  </div>
                  <Camera className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-300" />
                </div>
                {/* Circular Send icon */}
                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer hover:bg-[#009071] transition-all duration-300">
                  <Send className="w-4 h-4 ml-0.5" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Mockup 2: Light Gray Background phone */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="bg-[#e4e8eb] rounded-[40px] p-6 sm:p-8 shadow-2xl border border-zinc-200/50 flex flex-col items-center justify-center relative group"
        >
          {/* Outer Phone Bezel Mockup */}
          <div className="w-full max-w-[340px] bg-[#0b0f12] rounded-[48px] p-3.5 shadow-2xl border-4 border-[#2c3539] relative">
            {/* Speaker & Camera Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0b0f12] rounded-full z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-[#1a2327] rounded-full mb-1" />
              <div className="w-2.5 h-2.5 bg-[#1a2327] rounded-full ml-3 mb-1" />
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-2 pb-3 text-white text-[10px] font-mono z-10 relative">
              <span className="font-semibold">10:34 AM</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                <span className="text-[9px]">5G</span>
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Screen Container with WhatsApp Chat Background */}
            <div className="bg-[#0b141a] rounded-[36px] overflow-hidden border border-zinc-900 flex flex-col h-[480px] font-sans relative">
              
              {/* WhatsApp Chat Header */}
              <div className="bg-[#1f2c34] text-white py-3 px-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-1">
                  <ChevronLeft className="w-5 h-5 text-[#00a884] cursor-pointer" />
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#6b4e71] flex items-center justify-center text-white font-bold text-sm border border-zinc-700/60 shadow-inner overflow-hidden">
                    <span className="text-zinc-200">PS</span>
                  </div>
                  {/* Name and online status */}
                  <div className="ml-1 text-left">
                    <h4 className="text-xs font-bold leading-tight tracking-wide">Signature Designer Reviews</h4>
                    <span className="text-[9px] text-[#00a884] font-medium block">online</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-4 text-zinc-300">
                  <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Chat Bubble Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0b141a] relative flex flex-col justify-start">
                
                {/* Message 1: Received (Grey bubble) */}
                <div className="self-start max-w-[85%] bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-none p-3 shadow-md relative text-left border border-[#2b3942]/40">
                  <span className="block text-[10px] font-black text-emerald-400 mb-1">Priya S.</span>
                  <p className="text-xs leading-relaxed font-medium">
                    Just received my signature pack from Signature Designer! 😍
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[9px] text-[#8696a0]">10:30 AM</span>
                  </div>
                </div>

                {/* Message 2: Received (Grey bubble) */}
                <div className="self-start max-w-[85%] bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-none p-3 shadow-md relative text-left border border-[#2b3942]/40">
                  <p className="text-xs leading-relaxed font-medium">
                    All 4 variations look so beautiful and premium. The step-by-step practice sheets are so helpful for my daily tracing practice. Already mastering my favorite style!
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[9px] text-[#8696a0]">10:31 AM</span>
                  </div>
                </div>

                {/* Message 3: Sent (Green bubble) */}
                <div className="self-end max-w-[85%] bg-[#005c4b] text-[#e9edef] rounded-2xl rounded-tr-none p-3 shadow-md relative text-left border border-[#00705a]/40">
                  <p className="text-xs leading-relaxed font-medium">
                    We are so glad to hear that, Priya! Practice daily to build muscle memory quickly! ✨
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[9px] text-[#aebac1]">10:33 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb] stroke-[3]" />
                  </div>
                </div>

              </div>

              {/* Bottom WhatsApp Input Bar */}
              <div className="bg-[#1f2c34] p-2 flex items-center gap-2 border-t border-zinc-800">
                <div className="flex-1 bg-[#2a3942] rounded-full py-1.5 px-3 flex items-center justify-between text-zinc-400 border border-zinc-700/30">
                  <div className="flex items-center gap-2">
                    <Smile className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-300" />
                    <span className="text-xs text-zinc-400">Reply</span>
                  </div>
                  <Camera className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-300" />
                </div>
                {/* Circular Send icon */}
                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer hover:bg-[#009071] transition-all duration-300">
                  <Send className="w-4 h-4 ml-0.5" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
