import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Sparkles, X, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello. I am Aura, your interior design assistant. How can I help elevate your space today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "Based on our minimalist luxury collection, a walnut console table would pair beautifully with that dynamic." 
      }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-[#25D366] rounded-full text-white shadow-xl flex items-center justify-center relative group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-16 bg-brand-beige text-brand-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-black/5 shadow-md">
            WhatsApp Us
          </span>
        </motion.button>

        {/* AI Chatbot Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(true)}
          className="w-12 h-12 bg-white border border-brand-black/5 rounded-full text-brand-black shadow-xl flex items-center justify-center relative group hover:bg-brand-cream transition-colors"
        >
          <Sparkles className="w-5 h-5" />
          <span className="absolute right-16 bg-brand-beige text-brand-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-black/5 shadow-md">
            AI Concierge
          </span>
        </motion.button>
      </div>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] bg-brand-beige border border-brand-black/10 shadow-2xl z-50 flex flex-col overflow-hidden rounded-sm"
          >
            <div className="bg-brand-beige border-b border-brand-black/5 p-4 flex justify-between items-center text-brand-black">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold uppercase tracking-widest text-[9px] opacity-80">AI Concierge Online</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-brand-black/40 hover:text-brand-black">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="h-[350px] p-4 overflow-y-auto flex flex-col gap-4 bg-brand-cream/50">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] text-xs leading-relaxed p-3 ${
                  msg.role === 'ai' 
                    ? 'bg-brand-beige border border-brand-black/5 self-start text-brand-black shadow-sm' 
                    : 'bg-brand-black text-white self-end'
                }`}>
                  {msg.content}
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-3 bg-brand-beige flex gap-2 border-t border-brand-black/5">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about materials, styles..." 
                className="flex-1 bg-brand-cream border border-brand-black/5 p-2 text-xs focus:outline-none focus:border-brand-black/20"
              />
              <button type="submit" className="bg-brand-black text-white px-3 flex justify-center items-center hover:bg-brand-walnut transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
