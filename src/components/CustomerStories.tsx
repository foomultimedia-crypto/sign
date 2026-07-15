import { motion } from 'motion/react';
import { Star, Check } from 'lucide-react';

export default function CustomerStories() {
  const reviews = [
    {
      stars: 5,
      text: "“I've always been embarrassed signing in front of clients. Practiced for 4 days and now I look forward to signing documents. The tracing sheets are genius.”",
      name: "Rahul M.",
      title: "Chartered Accountant, Mumbai",
      initial: "R"
    },
    {
      stars: 5,
      text: "“₹99 for this is a steal. My new signature looks like a work of art. The step-by-step video guide and A4 tracing template made learning it incredibly intuitive.”",
      name: "Priya S.",
      title: "Software Engineer, Bangalore",
      initial: "P"
    },
    {
      stars: 5,
      text: "“Incredible experience. I got 4 distinct, elegant variations to choose from. The customer support helped me refine my chosen concept to perfection.”",
      name: "Vikram R.",
      title: "Business Consultant, Delhi",
      initial: "V"
    },
    {
      stars: 5,
      text: "“As a doctor signing prescriptions all day, I needed something fast yet sophisticated. This completely exceeded my expectations. Muscle memory kicked in by day 3.”",
      name: "Dr. Ananya K.",
      title: "Pediatrician, Hyderabad",
      initial: "A"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none border-t border-zinc-100" id="customer-stories">
      <div className="max-w-4xl mx-auto">
        
        {/* Subtle Section Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
          <h4 className="font-sans text-[11px] sm:text-xs font-black tracking-widest text-zinc-400 uppercase text-center">
            CUSTOMER STORIES
          </h4>
          <div className="h-[1px] bg-zinc-200 flex-1 max-w-[100px] sm:max-w-[150px]" />
        </div>

        {/* Headline */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-zinc-950 tracking-tight leading-tight">
            Don't take our word for it.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans font-medium text-left">
                  {review.text}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-zinc-100">
                {/* Avatar Initial */}
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 font-sans font-black text-sm shadow-sm border border-zinc-200/30">
                  {review.initial}
                </div>
                {/* Name & Title */}
                <div className="text-left">
                  <h4 className="text-sm font-sans font-black text-zinc-950 leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs font-sans text-zinc-400 mt-0.5 font-medium">
                    {review.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
