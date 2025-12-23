
import React from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface HomeContactCTAProps {
  onContactClick: () => void;
}

const HomeContactCTA: React.FC<HomeContactCTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-earth-beige/30">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-sacred-cream/50 pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-rich-crimson/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-rich-crimson text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Connect With Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-8">
                Ready to Harmonize Your Space?
            </h2>
            <div className="w-24 h-1 bg-aura-gold mx-auto mb-8"></div>
            <p className="font-serif text-xl text-mystic-indigo/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                Whether it's a new beginning or a realignment of existing energies, our experts are here to guide your journey towards balance and abundance.
            </p>
            <Button onClick={onContactClick} size="lg" className="shadow-2xl">
                Book Your Appointment <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
        </div>
    </section>
  );
};

export default HomeContactCTA;
