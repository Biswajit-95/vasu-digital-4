
import React, { useState } from 'react';
import { ShoppingBag, Eye, Sparkles, Globe, Search } from 'lucide-react';
import { DigitalProduct } from '../types';

interface ShopProps {
  products: DigitalProduct[];
  onProductClick: (id: string) => void;
  onAddToCart: (product: DigitalProduct) => void;
  currency: 'INR' | 'AED';
  onNavigate: (page: any) => void;
}

const Shop: React.FC<ShopProps> = ({ products, onProductClick, onAddToCart, currency, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Cosmic Yantras", "Vedic Wisdom", "Sound Healing", "Crystal Energy"];

  const formatPrice = (p: DigitalProduct) => {
    if (!p.isPaid) return "FREE";
    if (currency === 'INR') return `₹${p.priceInINR.toLocaleString()}`;
    // Fallback to INR if AED price is missing, though type expects it may be null
    return `${(p.priceInAED || p.priceInINR).toLocaleString()} AED`;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Background Elements to fill space */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mandala-bg"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aura-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rich-crimson/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rich-crimson/5 border border-rich-crimson/20 text-rich-crimson text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles size={12} /> Sacred Collection
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl text-cosmic-blue mb-6 leading-tight">Sacred Remedies</h1>
                    <p className="font-serif text-xl text-slate-700 font-normal leading-relaxed">
                        Curated tools for energetic alignment. From charged Yantras to digital wisdom, empower your space with the right frequencies.
                    </p>
                    
                    {/* Improved Price Indicator */}
                    <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-white border border-earth-beige rounded-2xl shadow-sm hover:border-aura-gold transition-colors">
                         <div className="w-8 h-8 rounded-full bg-sacred-cream flex items-center justify-center text-rich-crimson">
                            <Globe size={16} />
                         </div>
                         <div className="flex flex-col">
                             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Location Detected</span>
                             <span className="text-cosmic-blue font-sans font-medium text-sm">
                                Viewing prices in <span className="font-bold text-rich-crimson">{currency}</span>
                             </span>
                         </div>
                    </div>
                </div>

                {/* Search / Filter Placeholder */}
                <div className="w-full lg:w-auto flex flex-col gap-4">
                     <div className="relative">
                        <input type="text" placeholder="Search remedies..." className="w-full lg:w-80 px-6 py-4 rounded-2xl border border-earth-beige bg-white focus:outline-none focus:border-aura-gold font-serif text-slate-700 placeholder:text-slate-400" />
                        <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-earth-beige" size={20} />
                     </div>
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-12 border-b border-earth-beige/20 pb-8">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 rounded-full font-display text-sm tracking-wide transition-all 
                            ${activeCategory === cat 
                                ? 'bg-cosmic-blue text-white shadow-lg scale-105' 
                                : 'bg-white border border-earth-beige text-slate-600 hover:border-aura-gold hover:text-cosmic-blue'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(p => (
                    <div key={p.id} className="group glass-temple rounded-[2.5rem] overflow-hidden border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="h-64 overflow-hidden relative cursor-pointer" onClick={() => onProductClick(p.id)}>
                            <img src={p.thumbnailUrl} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-cosmic-blue/10 group-hover:bg-cosmic-blue/0 transition-colors"></div>
                            {!p.isPaid && (
                                <span className="absolute top-6 right-6 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Sacred Gift</span>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-cosmic-blue shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <Eye size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="font-display text-2xl text-cosmic-blue mb-2 group-hover:text-vibrant-orange transition-colors cursor-pointer" onClick={() => onProductClick(p.id)}>{p.title}</h3>
                            <p className="font-serif text-slate-600 text-lg mb-6 leading-relaxed line-clamp-2">{p.description}</p>
                            
                            <div className="flex justify-between items-center border-t border-earth-beige/20 pt-6">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Ritual Value</p>
                                    <p className="font-display text-2xl text-rich-crimson">
                                        {formatPrice(p)}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                     <button 
                                        onClick={() => onAddToCart(p)}
                                        className="w-12 h-12 rounded-full bg-cosmic-blue text-white flex items-center justify-center hover:bg-vibrant-orange transition-all shadow-lg active:scale-95"
                                        title="Add to Cart"
                                    >
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom Call to Action to fill page */}
            <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-cosmic-blue to-mystic-indigo text-white text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="relative z-10">
                    <h3 className="font-display text-3xl mb-4">Not sure what you need?</h3>
                    <p className="font-serif text-lg text-white/95 mb-8 max-w-xl mx-auto font-normal">
                        Our architects can analyze your floor plan and recommend specific remedies tailored for your space's unique energy signature.
                    </p>
                    <button onClick={() => onNavigate('contact')} className="px-8 py-4 bg-aura-gold text-cosmic-blue font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors shadow-lg">
                        Get a Personal Recommendation
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Shop;
