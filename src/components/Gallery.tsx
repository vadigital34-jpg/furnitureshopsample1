import { motion } from 'motion/react';
import { gallery } from '../data';

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-black mb-4"
          >
            Inspiration <span className="italic">Gallery</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="text-brand-black/60 max-w-2xl mx-auto font-light"
          >
            Curated spaces blending our finest pieces into cohesive, breathtaking environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group rounded-sm ${item.span}`}
            >
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={item.image} 
                alt="Inspiration Space" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-4 border border-brand-black/20 text-brand-black text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-brand-black hover:text-brand-beige transition-colors">
            Follow our Pinterest
          </button>
        </div>
      </div>
    </section>
  );
}
