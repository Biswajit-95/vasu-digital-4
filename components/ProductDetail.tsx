
import React from 'react';
import { ArrowLeft, ShoppingBag, PlayCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DigitalProduct } from '../types';
import Button from './ui/Button';

interface ProductDetailProps {
  product: DigitalProduct;
  onBack: () => void;
  onAddToCart: (product: DigitalProduct) => void;
  currency: 'INR' | 'AED';
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart, currency }) => {
  const formatPrice = () => {
    if (!product.isPaid) return "FREE";
    if (currency === 'INR') return `₹${product.priceInINR.toLocaleString()}`;
    // Use priceInAED if available, otherwise fallback (safety)
    return `${(product.priceInAED || product.priceInINR).toLocaleString()} AED`;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mandala-bg"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 mb-12 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-rich-crimson transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Product Thumbnail & Preview Link */}
          <div className="space-y-8">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-video">
                <img src={product.thumbnailUrl} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/40 to-transparent"></div>
                {!product.isPaid && (
                  <span className="absolute top-8 left-8 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">Sacred Gift</span>
                )}
            </div>
            
            <a 
              href={product.previewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 w-full py-6 rounded-2xl bg-sacred-cream border border-earth-beige/50 hover:border-aura-gold transition-all group"
            >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-vibrant-orange shadow-md group-hover:scale-110 transition-transform">
                    <PlayCircle size={28} />
                </div>
                <div className="text-left">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Open Preview</p>
                    <p className="font-display text-lg text-cosmic-blue">Visual Introduction</p>
                </div>
            </a>
          </div>

          {/* Product Info (Strictly adhering to provided keys) */}
          <div className="space-y-10">
            <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cosmic-blue mb-6 leading-tight">{product.title}</h1>
                <p className="font-serif text-xl md:text-2xl text-slate-700 leading-relaxed font-normal italic">
                  "{product.description}"
                </p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-earth-beige/10">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Exclusive Value</p>
                        <p className="font-display text-4xl text-rich-crimson">{formatPrice()}</p>
                    </div>
                    <div className="text-right">
                        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                           <CheckCircle2 size={12} /> Instant Access
                        </span>
                    </div>
                </div>

                <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-sacred-cream flex items-center justify-center text-aura-gold flex-shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-cosmic-blue">Secured Delivery</p>
                            <p className="text-xs text-slate-600">Access your file via {product.fileUrl ? 'provided link' : 'dashboard'}.</p>
                        </div>
                    </div>
                </div>

                <Button 
                    onClick={() => onAddToCart(product)} 
                    className="w-full py-5 text-lg flex items-center gap-3 shadow-2xl bg-cosmic-blue"
                >
                    <ShoppingBag size={20} /> Add to Sacred Cart
                </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
