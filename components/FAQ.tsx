
import React, { useState } from 'react';
import { Search, HelpCircle, ArrowRight, Sparkles, MessageCircle, ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const faqs = [
    { 
        category: "Methodology",
        q: "Is demolition required for Vastu correction?", 
        a: "No. Our methodology focuses on 'Zero Demolition' remedies. We use elemental balancing, colors, metals, and geometric shapes to redirect energy flow without structural changes." 
    },
    { 
        category: "Timeline",
        q: "How soon can I expect results?", 
        a: "Energy shifts occur immediately on a subtle level. Physical manifestations (financial, health, relationship) typically become visible within 21 to 90 days as the cosmic rhythm stabilizes." 
    },
    { 
        category: "Applicability",
        q: "Can Vastu work for a rented apartment?", 
        a: "Absolutely. Vastu is about the energy within the space. We apply non-permanent remedies like rugs, frames, and specific placements that you can take with you when you move." 
    },
    { 
        category: "Advanced Science",
        q: "What is the 45-Devta Energy Mapping?", 
        a: "It is an advanced Vedic technique where we analyze 45 specific energy fields (Devtas) that reside in every space. This mapping identifies precisely which area of life (luck, health, money) is blocked." 
    },
    { 
        category: "Global Reach",
        q: "Do you consult internationally?", 
        a: "Yes. Through our Online Vastu Portal, we have harmonized thousands of spaces in 45+ countries using precise satellite coordinates and digital floor plans." 
    }
  ];

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-aura-gold/5 rounded-full blur-[100px] animate-pulse-glow"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rich-crimson/5 rounded-full blur-[120px]"></div>
            <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-aura-gold/40 rounded-full animate-float"></div>
            <div className="absolute bottom-[30%] right-[15%] w-6 h-6 bg-vibrant-orange/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
            
            {/* Header Section */}
            <div className="text-center mb-16 relative">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-earth-beige shadow-sm mb-6 animate-fade-in-up">
                    <Sparkles size={12} className="text-aura-gold" />
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-700">Divine Clarity</span>
                </div>
                
                <h1 className="font-display text-5xl md:text-6xl text-cosmic-blue mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    Answers from the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-gold to-vibrant-orange">Source</span>
                </h1>
                
                {/* Search Bar with Glow Effect */}
                <div className="relative max-w-xl mx-auto group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-aura-gold via-vibrant-orange to-aura-gold rounded-2xl opacity-20 group-focus-within:opacity-50 blur transition duration-500"></div>
                    <div className="relative bg-white rounded-2xl flex items-center shadow-lg">
                         <div className="pl-6 text-earth-beige group-focus-within:text-vibrant-orange transition-colors">
                            <Search size={22} />
                         </div>
                        <input 
                            type="text" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Ask about remedies, process, or science..."
                            className="w-full bg-transparent border-none py-5 pl-4 pr-6 focus:ring-0 text-lg font-serif text-cosmic-blue placeholder:text-slate-400 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
                {filteredFaqs.length > 0 ? filteredFaqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        onMouseEnter={() => setHoverIndex(idx)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className={`group relative bg-white/60 backdrop-blur-md rounded-[2rem] border transition-all duration-500 overflow-hidden
                            ${openIndex === idx 
                                ? 'border-aura-gold shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)] bg-white' 
                                : 'border-earth-beige/30 hover:border-aura-gold/50 hover:shadow-lg'}`}
                    >
                        {/* Decorative side accent for active item */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-aura-gold to-vibrant-orange transition-all duration-500
                            ${openIndex === idx ? 'opacity-100' : 'opacity-0'}`}></div>

                        <button 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full px-8 py-7 flex items-center justify-between text-left relative z-10"
                        >
                            <div className="pr-8">
                                <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block transition-colors duration-300 
                                    ${openIndex === idx ? 'text-vibrant-orange' : 'text-slate-500'}`}>
                                    {faq.category}
                                </span>
                                <h3 className={`font-display text-xl transition-colors duration-300 
                                    ${openIndex === idx ? 'text-cosmic-blue' : 'text-slate-700 group-hover:text-cosmic-blue'}`}>
                                    {faq.q}
                                </h3>
                            </div>
                            
                            {/* Animated Icon */}
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 flex-shrink-0
                                ${openIndex === idx 
                                    ? 'bg-cosmic-blue border-cosmic-blue text-white rotate-180' 
                                    : 'bg-transparent border-earth-beige text-slate-500 group-hover:border-aura-gold group-hover:text-aura-gold'}`}>
                                <ChevronDown size={20} className={`transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                        </button>
                        
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-8 pb-8 pl-10">
                                <p className="font-serif text-lg text-slate-700 leading-relaxed border-l-2 border-earth-beige/30 pl-6 py-1">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="text-center py-20 bg-white/40 rounded-[3rem] border border-dashed border-earth-beige animate-fade-in">
                        <div className="w-20 h-20 bg-sacred-cream rounded-full flex items-center justify-center mx-auto mb-6">
                            <HelpCircle size={32} className="text-slate-400" />
                        </div>
                        <h3 className="font-display text-xl text-cosmic-blue mb-2">No matching wisdom found</h3>
                        <p className="font-serif text-slate-600">Try searching for keywords like "Wealth", "Health", or "Process".</p>
                        <button 
                            onClick={() => setSearch('')}
                            className="mt-6 text-xs font-bold uppercase tracking-widest text-rich-crimson hover:underline"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>

            {/* Support CTA Card */}
            <div className="mt-20 relative rounded-[3rem] overflow-hidden bg-cosmic-blue text-white p-10 md:p-16 text-center shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-aura-gold/20 rounded-full blur-[80px] group-hover:bg-aura-gold/30 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rich-crimson/20 rounded-full blur-[80px] group-hover:bg-rich-crimson/30 transition-all duration-700"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <MessageCircle size={48} className="mx-auto mb-6 text-aura-gold" />
                    <h2 className="font-display text-3xl md:text-4xl mb-6">Still Seeking Clarity?</h2>
                    <p className="font-serif text-lg text-white/95 mb-10 leading-relaxed font-normal">
                        Every space has a unique energy signature. Our master architects are available to answer your specific queries about your property.
                    </p>
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cosmic-blue font-bold uppercase tracking-widest rounded-xl hover:bg-aura-gold hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform hover:-translate-y-1">
                        Connect with Expert <ArrowRight size={18} />
                    </button>
                </div>
            </div>
            
            <div className="text-center mt-12 pb-12">
                 <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Digital Vastu • Knowledge Base</p>
            </div>
        </div>
    </div>
  );
};

export default FAQ;
