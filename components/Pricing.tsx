
import React, { useEffect } from 'react';
import Button from './ui/Button';
import { Check, Star, ShieldCheck, ArrowLeft } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onBack: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Prana',
      priceInINR: 12000,
      priceInAED: 550,
      description: 'Perfect for apartments and small offices looking for quick corrections.',
      features: [
        'Floor Plan Analysis (PDF)',
        '16-Zone Energy Check',
        'Basic Elemental Balancing',
        'Email Support',
        'Delivery in 3 Days'
      ]
    },
    {
      id: 'premium',
      name: 'Moksha',
      priceInINR: 35000,
      priceInAED: 1500,
      recommended: true,
      description: 'Comprehensive analysis for complete life transformation and heavy blockage removal.',
      features: [
        'Advanced 45-Devta Field Analysis',
        'Astro-Vastu Mapping',
        'Personalized Crystal Remedies',
        '1 Hour Zoom Consultation',
        'Priority Whatsapp Support',
        'Detailed 50-page Report'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-32 bg-background relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aura-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 mb-12 text-sm font-bold uppercase tracking-widest text-mystic-indigo hover:text-rich-crimson transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="text-center mb-16">
            <span className="text-rich-crimson text-xs font-bold tracking-[0.3em] uppercase">Karmic Investment</span>
            <h2 className="font-display text-5xl text-cosmic-blue mt-4 mb-4">Invest in Harmony</h2>
            <p className="font-serif text-xl text-mystic-indigo font-medium max-w-2xl mx-auto">
                Energy is currency. Select the depth of analysis your space requires to unlock its full potential.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Basic Plan */}
            <div className="bg-white border border-earth-beige/50 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-mystic-indigo bg-sacred-cream px-3 py-1 rounded-full">Essentials</span>
                    <h3 className="font-display text-4xl text-cosmic-blue mt-4">{plans[0].name}</h3>
                    <div className="mt-4 flex items-baseline">
                        <span className="text-5xl font-serif text-cosmic-blue">₹{plans[0].priceInINR.toLocaleString()}</span>
                        <span className="ml-2 text-mystic-indigo font-medium">/ property</span>
                    </div>
                    <p className="mt-4 text-mystic-indigo text-base leading-relaxed">{plans[0].description}</p>
                </div>
                <div className="flex-grow space-y-5 mb-10 border-t border-earth-beige/30 pt-8">
                    {plans[0].features.map((f, i) => (
                        <div key={i} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-aura-gold/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <Check size={12} className="text-aura-gold" />
                            </div>
                            <span className="text-mystic-indigo text-base">{f}</span>
                        </div>
                    ))}
                </div>
                <Button variant="outline" className="w-full justify-center group-hover:bg-cosmic-blue group-hover:text-white transition-colors">Select Prana</Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-cosmic-blue text-white border border-cosmic-blue rounded-2xl p-10 shadow-2xl scale-105 relative overflow-hidden flex flex-col">
                {/* Gold Shine Effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-aura-gold/20 rounded-full blur-3xl animate-pulse-glow"></div>
                
                <div className="mb-8 relative">
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-bold uppercase tracking-widest text-cosmic-blue bg-aura-gold px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                            <Star size={10} fill="currentColor" /> Most Popular
                        </span>
                        <ShieldCheck className="text-aura-gold opacity-50" />
                    </div>
                    <h3 className="font-display text-4xl text-white mt-4">{plans[1].name}</h3>
                    <div className="mt-4 flex items-baseline">
                        <span className="text-5xl font-serif text-white">₹{plans[1].priceInINR.toLocaleString()}</span>
                        <span className="ml-2 text-white/60 font-medium">/ property</span>
                    </div>
                    <p className="mt-4 text-white/90 text-base leading-relaxed">{plans[1].description}</p>
                </div>
                <div className="flex-grow space-y-5 mb-10 relative border-t border-white/10 pt-8">
                    {plans[1].features.map((f, i) => (
                        <div key={i} className="flex items-start">
                             <div className="w-5 h-5 rounded-full bg-aura-gold flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">
                                <Check size={12} className="text-cosmic-blue" />
                            </div>
                            <span className="text-white/90 text-base">{f}</span>
                        </div>
                    ))}
                </div>
                <Button variant="primary" className="w-full justify-center bg-aura-gold text-cosmic-blue hover:bg-white hover:text-rich-crimson border-none shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    Select Moksha
                </Button>
            </div>

        </div>
        
        {/* Comparison Note */}
        <div className="text-center mt-12 text-mystic-indigo/60 text-sm">
            Need a custom quote for factories or townships? <a href="#contact" onClick={onBack} className="text-rich-crimson underline font-bold hover:text-cosmic-blue">Contact Enterprise Sales</a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
