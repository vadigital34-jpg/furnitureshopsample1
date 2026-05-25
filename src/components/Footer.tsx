export default function Footer() {
  return (
    <footer className="bg-brand-beige border-t border-brand-black/5 text-brand-black pt-24 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 text-brand-black">
            <h3 className="font-serif text-3xl tracking-tight mb-6 italic font-bold text-brand-walnut">Aura Living</h3>
            <p className="max-w-md text-brand-black/60 font-light text-sm mb-8 leading-relaxed">
              Curating spaces that define modern luxury. Exceptional craftsmanship tailored for those who appreciate the poetry in furniture.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-b border-brand-black/20 pb-2 text-[11px] uppercase tracking-wider w-full max-w-[250px] focus:outline-none focus:border-brand-black text-brand-black placeholder:text-brand-black/30"
              />
              <button className="uppercase text-[11px] tracking-[0.2em] font-semibold hover:text-brand-walnut transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-black text-[10px] uppercase tracking-widest font-bold mb-6">Collections</h4>
            <ul className="space-y-4">
              {['Living Room', 'Dining', 'Bedroom', 'Office', 'Bespoke'].map(link => (
                <li key={link}>
                  <a href="#" className="font-light text-brand-black/60 hover:text-brand-black transition-colors text-xs">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-black text-[10px] uppercase tracking-widest font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-xs font-light text-brand-black/60">
              <li>info@auraliving.com</li>
              <li>+1 (555) 019-2831</li>
              <li className="pt-4 border-t border-brand-black/10 mt-4">
                <span className="opacity-40 font-bold uppercase text-[9px] tracking-widest block mb-1">Showroom:</span>
                401 Luxury Avenue, <br />
                Design District, NY 10012
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-brand-black/40 px-2 gap-4 text-center">
          <p>© 2026 Aura Living. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
