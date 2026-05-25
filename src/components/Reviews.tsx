import { motion } from 'motion/react';
import { reviews } from '../data';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-beige border-y border-brand-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-brand-black/10 pb-8 flex justify-between items-end"
        >
          <h2 className="text-4xl font-serif text-brand-black">Client Voices</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-brand-cream p-10 flex flex-col justify-between border border-brand-black/5"
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-[13px] tracking-wide italic text-brand-black/80 mb-8 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold uppercase opacity-60 text-[10px] tracking-widest">&mdash; {review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
