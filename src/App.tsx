/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans selection:bg-brand-gold/30 selection:text-brand-black">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Collections />
        <ProductShowcase />
        <Features />
        <Gallery />
        <Reviews />
      </main>
      
      <FloatingActions />
      <Footer />
    </div>
  );
}
