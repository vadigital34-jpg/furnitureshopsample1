import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { showcaseProducts } from '../data';
import { Maximize2, X } from 'lucide-react';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof showcaseProducts[0] | null>(null);

  const categories = ['All', 'Scandinavian', 'Modern Luxury', 'Wooden Classics', 'Contemporary', 'Premium Office'];
  const filteredProducts = activeCategory === 'All' 
    ? showcaseProducts 
    : showcaseProducts.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-brand-cream text-brand-black relative border-b border-brand-black/5" id="showcase">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-black/10 pb-8">
          <div>
            <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-3 block">Featured</span>
            <h2 className="text-4xl md:text-[2.5rem] font-serif">Product <span className="italic">Showcase</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-6 mt-8 md:mt-0">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                  activeCategory === cat ? 'text-brand-gold border-b border-brand-gold pb-1' : 'text-brand-black/50 hover:text-brand-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer bg-brand-beige border border-brand-black/5 p-4"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-[400px] overflow-hidden mb-6 bg-brand-black/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-walnut/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-beige text-brand-black flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-lg font-serif font-medium tracking-wide mb-1 group-hover:text-brand-walnut transition-colors">{product.name}</h3>
                    <p className="text-[9px] text-brand-black/40 font-bold uppercase tracking-widest">{product.category}</p>
                  </div>
                  <span className="font-serif italic text-brand-gold text-lg">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Cinematic Preview Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-brand-beige/95 flex items-center justify-center backdrop-blur-md"
          >
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-8 right-8 text-brand-black/50 hover:text-brand-black z-50"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-10 h-10" />
            </motion.button>
            
            <div className="w-full max-w-6xl p-6 md:p-12 relative flex items-center justify-center h-full">
              <motion.img 
                layoutId={`image-${selectedProduct.id}`}
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="max-h-[85vh] w-auto max-w-full object-contain mx-auto shadow-2xl border border-brand-black/5"
              />
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 left-12 right-12 flex justify-between items-end bg-brand-beige/80 backdrop-blur border border-brand-black/5 p-6"
              >
                <div>
                  <p className="text-brand-black/50 text-[9px] font-bold uppercase tracking-widest mb-1">Preview</p>
                  <h3 className="text-3xl md:text-5xl font-serif text-brand-black">{selectedProduct.name}</h3>
                  <p className="text-brand-gold font-serif italic text-xl mt-2">{selectedProduct.price}</p>
                </div>
                <button className="px-8 py-4 bg-brand-black text-brand-beige text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-brand-walnut transition-colors">
                  Inquire Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
