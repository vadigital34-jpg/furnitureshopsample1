import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Search, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Collections', 'Living Room', 'Bedroom', 'Dining', 'Custom Orders', 'About', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-beige/90 backdrop-blur-sm shadow-sm border-b border-brand-black/5 py-4' : 'bg-brand-beige/40 backdrop-blur-sm border-b border-brand-black/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-walnut flex items-center justify-center rounded-sm">
              <div className="w-4 h-4 border border-white/80 rotate-45"></div>
            </div>
            <a href="#" className="font-serif text-xl tracking-tight font-bold italic text-brand-walnut">AURA.</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold opacity-80">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-brand-black hover:opacity-100 border-b border-transparent hover:border-brand-black pb-1 transition-all"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-brand-black/60">
            <button className="hover:text-brand-black hover:opacity-100 transition-colors">
              <Search className="w-5 h-5 opacity-60" />
            </button>
            <button className="hover:text-brand-black hover:opacity-100 transition-colors">
              <Heart className="w-5 h-5 opacity-60" />
            </button>
            <button className="hover:text-brand-black hover:opacity-100 transition-colors">
              <ShoppingBag className="w-5 h-5 opacity-60" />
            </button>
            <button 
              className="lg:hidden text-brand-black opacity-60"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-cream flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-brand-beige">
              <span className="font-serif text-2xl tracking-wide">AURA.</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-brand-black" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 overflow-y-auto py-12">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-brand-black hover:text-brand-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
