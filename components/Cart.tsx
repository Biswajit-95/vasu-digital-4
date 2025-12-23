
import React from 'react';
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus, CreditCard, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { CartItem, DigitalProduct, PricingPlan } from '../types';
import Button from './ui/Button';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onBack: () => void;
  currency: 'INR' | 'AED';
  onResumeConsultation?: (plan: PricingPlan, bookingType: 'online' | 'onsite') => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity, onBack, currency, onResumeConsultation }) => {
  const subtotal = items.reduce((sum, item) => {
    let price = 0;
    if (item.type === 'product' && item.product) {
        price = currency === 'INR' ? item.product.priceInINR : (item.product.priceInAED || item.product.priceInINR);
    } else if (item.type === 'consultation' && item.consultation) {
        price = currency === 'INR' ? item.consultation.plan.priceInINR : item.consultation.plan.priceInAED;
    }
    return sum + (price * item.quantity);
  }, 0);

  const formatPrice = (val: number) => {
    return currency === 'INR' ? `₹${val.toLocaleString()}` : `${val.toLocaleString()} AED`;
  };

  const getItemPriceDisplay = (item: CartItem) => {
     let price = 0;
     if (item.type === 'product' && item.product) {
         price = (currency === 'INR' ? item.product.priceInINR : (item.product.priceInAED || 0)) * item.quantity;
     } else if (item.type === 'consultation' && item.consultation) {
         price = (currency === 'INR' ? item.consultation.plan.priceInINR : item.consultation.plan.priceInAED) * item.quantity;
     }
     return formatPrice(price);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 mb-12 text-sm font-bold uppercase tracking-widest text-mystic-indigo/50 hover:text-rich-crimson transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Continue Exploring
        </button>

        <h1 className="font-display text-5xl text-cosmic-blue mb-12">Your Sacred Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-24 glass-temple rounded-[3rem]">
            <ShoppingBag size={64} className="mx-auto text-earth-beige mb-6 opacity-20" />
            <p className="font-serif text-2xl text-mystic-indigo mb-8 italic">Your cart is as empty as a clear mind.</p>
            <Button onClick={onBack}>Browse Wisdom</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* List of Items */}
            <div className="lg:col-span-8 space-y-6">
              {items.map(item => (
                <div key={item.id} className="glass-temple p-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 shadow-sm border border-earth-beige/20">
                  
                  {/* Thumbnail / Icon */}
                  <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center bg-sacred-cream border border-earth-beige/30">
                    {item.type === 'product' && item.product ? (
                        <img src={item.product.thumbnailUrl} alt={item.product.title} className="w-full h-full object-cover" />
                    ) : (
                        <Calendar size={32} className="text-rich-crimson opacity-50" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="font-display text-xl text-cosmic-blue mb-1">
                        {item.type === 'product' ? item.product?.title : item.consultation?.plan.name}
                    </h3>
                    
                    <div className="mb-4">
                        {item.type === 'product' ? (
                            <p className="text-xs font-bold tracking-widest text-mystic-indigo/40 uppercase">Digital Access</p>
                        ) : (
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${item.consultation?.bookingType === 'online' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                                    {item.consultation?.bookingType} Consultation
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Quantity Controls (Only for Products) */}
                    {item.type === 'product' && item.product ? (
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full border border-earth-beige flex items-center justify-center hover:bg-sacred-cream text-mystic-indigo"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="font-bold text-cosmic-blue">{item.quantity}</span>
                            <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full border border-earth-beige flex items-center justify-center hover:bg-sacred-cream text-mystic-indigo"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    ) : (
                        // For Consultation: Resume Button
                        <div className="flex items-center justify-center md:justify-start">
                             <button 
                                onClick={() => item.consultation && onResumeConsultation && onResumeConsultation(item.consultation.plan, item.consultation.bookingType)}
                                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rich-crimson hover:text-vibrant-orange transition-colors border-b border-rich-crimson/20 pb-0.5"
                             >
                                 Resume Booking <ArrowRight size={12} />
                             </button>
                        </div>
                    )}
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right flex flex-col items-center md:items-end justify-between min-h-[100px] w-full md:w-auto">
                    <p className="font-display text-xl text-rich-crimson">
                        {getItemPriceDisplay(item)}
                    </p>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-mystic-indigo/30 hover:text-rich-crimson transition-colors p-2"
                      title="Remove Item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Panel */}
            <div className="lg:col-span-4">
               <div className="bg-cosmic-blue rounded-[3rem] p-10 text-white shadow-2xl sticky top-32">
                  <h2 className="font-display text-2xl mb-8 flex items-center gap-3">
                    <CreditCard size={24} className="text-aura-gold" /> Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-10 border-b border-white/10 pb-8">
                    <div className="flex justify-between text-white/60">
                      <span className="font-serif italic">Subtotal</span>
                      <span className="font-sans font-bold">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span className="font-serif italic">Ritual Discount</span>
                      <span className="font-sans font-bold">{formatPrice(0)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end mb-10">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-aura-gold mb-1">Final Investment</p>
                        <p className="font-display text-3xl text-white">{formatPrice(subtotal)}</p>
                    </div>
                  </div>

                  {/* Logic for checkout button */}
                  {items.some(i => i.type === 'consultation') ? (
                     <div className="bg-white/10 rounded-xl p-4 mb-4 text-center">
                         <p className="text-xs text-white/70 mb-2">Your cart contains a consultation booking.</p>
                         <Button onClick={() => {
                             const consultItem = items.find(i => i.type === 'consultation');
                             if (consultItem && consultItem.consultation && onResumeConsultation) {
                                 onResumeConsultation(consultItem.consultation.plan, consultItem.consultation.bookingType);
                             }
                         }} className="w-full bg-vibrant-orange border-none text-white hover:bg-white hover:text-cosmic-blue text-sm">
                             Complete Booking First
                         </Button>
                     </div>
                  ) : (
                    <Button className="w-full py-5 bg-vibrant-orange text-white hover:bg-white hover:text-cosmic-blue shadow-[0_0_20px_rgba(217,79,4,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border-none text-lg font-bold tracking-widest transition-all duration-300 transform hover:-translate-y-1">
                        Complete Sacred Order
                    </Button>
                  )}
                  
                  <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
                    <ShieldCheck size={12} /> Secure Checkout via Razorpay
                  </div>
               </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
