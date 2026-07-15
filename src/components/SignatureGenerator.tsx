import { Frown, Shuffle, FileX, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SignatureGeneratorProps {
  onStyleSelected?: (styleName: string) => void;
  onOrderClick?: (packageName: string) => void;
}

export default function SignatureGenerator({ onStyleSelected, onOrderClick }: SignatureGeneratorProps) {
  const problems = [
    {
      id: 1,
      icon: Frown,
      text: "Embarrassed every time you sign in front of someone?",
    },
    {
      id: 2,
      icon: Shuffle,
      text: "Your signature looks different every single time?",
    },
    {
      id: 3,
      icon: FileX,
      text: "Doesn't look professional on contracts & letterheads?",
    },
    {
      id: 4,
      icon: XCircle,
      text: "Tried to fix it yourself but it never sticks?",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-50 border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm" id="signature-sandbox">
      <div className="flex flex-col gap-4">
        {problems.map((prob, index) => {
          const IconComponent = prob.icon;
          return (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="flex items-center gap-4 bg-white border border-zinc-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-zinc-200/60 transition-all duration-300"
            >
              {/* Left side pink/red icon box */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100/40">
                <IconComponent className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 text-red-500 stroke-[2]" />
              </div>

              {/* Right side text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug sm:leading-normal">
                  {prob.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
