import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-cream border-b border-brand-black/5" id="home">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-brand-cream/80 backdrop-blur-sm z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
          alt="Luxury Living Room" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="overflow-hidden"
        >
          <span className="block text-brand-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-6">
            Est. 1984 &bull; Luxury Showroom
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[5rem] font-serif text-brand-black leading-[1.05] mb-8"
        >
          Crafted Furniture <br />
          <span className="italic font-light">For Modern Living.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-lg text-brand-black/60 max-w-md font-light mb-10 leading-relaxed"
        >
          Luxury furniture designed to elevate your space through artisanal craftsmanship and timeless walnut textures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-4 bg-brand-black text-brand-beige text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center gap-3 hover:bg-brand-walnut transition-colors">
            Explore Collection
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="px-8 py-4 text-brand-black text-[11px] uppercase tracking-[0.2em] font-semibold border border-brand-black/20 hover:bg-white/20 transition-all">
            Visit Showroom
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-brand-black/40 text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-black/10">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-brand-gold"
          />
        </div>
      </motion.div>
    </div>
  );
}
