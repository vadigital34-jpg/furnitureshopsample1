import { motion } from 'motion/react';
import { features } from '../data';
import { ShieldCheck, Target, Ruler, Wrench } from 'lucide-react';

const icons = [ShieldCheck, Target, Ruler, Wrench];

export default function Features() {
  return (
    <section className="py-24 bg-brand-beige text-brand-black border-y border-brand-black/5 relative overflow-hidden" id="about">
      {/* Decorative background element */}
      <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-brand-black/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            The Aura Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[2.5rem] font-serif mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-black/60 font-light text-lg"
          >
            We merge timeless craftsmanship with modern sensibilities to create pieces that aren't just furnished, but felt.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 bg-brand-beige/60 p-10 border border-brand-black/5">
          {features.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-start border-l-2 border-brand-gold pl-6"
              >
                <div className="mb-4 text-brand-walnut">
                  <Icon className="w-6 h-6 opacity-80" strokeWidth={1.5} />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider mb-2">{feature.title}</h3>
                <p className="text-brand-black/60 font-light text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
