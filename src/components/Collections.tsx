import { motion } from 'motion/react';
import { collections } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream" id="collections">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-brand-gold text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[2.5rem] font-serif text-brand-black"
            >
              Discover Our <span className="italic">Collections</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            href="#all-categories"
            className="group flex items-center gap-2 text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-black transition-colors"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer bg-brand-beige"
            >
              <div className="absolute inset-0 bg-brand-walnut/10 group-hover:bg-brand-black/40 transition-colors duration-500 z-10" />
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 border border-brand-black/5 bg-gradient-to-t from-brand-black/80 to-transparent">
                <span className="text-brand-beige/80 text-[9px] font-bold tracking-[0.2em] uppercase mb-2 block opacity-80 transition-all duration-500">
                  {String(index + 1).padStart(2, '0')} &mdash; {item.count}
                </span>
                <h3 className="text-2xl font-serif text-brand-beige mb-4">{item.title}</h3>
                
                <div className="w-12 h-[2px] bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
