
import React from 'react';
import Button from './ui/Button';

const Guru: React.FC = () => {
  return (
    <section id="guru" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Info */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1 relative z-10">
            <div className="inline-block px-3 py-1 border border-rich-crimson/30 rounded-full bg-rich-crimson/5 text-rich-crimson text-xs font-bold uppercase tracking-widest mb-6">
                The Master Architect
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cosmic-blue mb-6 leading-tight">
                Acharya <br />
                <span className="text-aura-gold italic">Girender Bharti</span>
            </h2>
            <p className="font-serif text-xl text-slate-800 mb-6 leading-relaxed font-medium italic">
                "A house is not just brick and mortar; it is a living organism breathing in the cosmic rhythm."
            </p>
            <p className="font-sans text-slate-700 mb-8 leading-relaxed font-normal">
                With over 25 years of experience in Vedic Architecture and Geopathy, Acharya Girender Bharti combines ancient Shastra with modern architectural principles. He has transformed over 10,000 spaces globally, proving that the right alignment can rewrite destiny.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center px-6 py-4 bg-white border border-earth-beige rounded-xl shadow-sm hover:border-aura-gold transition-colors">
                    <span className="block font-display text-3xl text-rich-crimson">25+</span>
                    <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">Years Exp</span>
                </div>
                <div className="text-center px-6 py-4 bg-white border border-earth-beige rounded-xl shadow-sm hover:border-aura-gold transition-colors">
                    <span className="block font-display text-3xl text-rich-crimson">10k+</span>
                    <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">Homes Healed</span>
                </div>
            </div>
        </div>

        {/* Right Side: Image with Concentric Halo */}
        <div className="flex-1 order-1 md:order-2 flex justify-center relative">
            
            {/* Concentric Halo Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-aura-gold/20 rounded-full animate-pulse-glow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-rich-crimson/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-cosmic-blue/5 rounded-full"></div>

            {/* Sacred Geometry Behind Head */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sri_Yantra_2D.svg/1024px-Sri_Yantra_2D.svg.png')] bg-contain bg-center bg-no-repeat opacity-20 animate-spin-slow"></div>

            {/* Guru Image */}
            <div className="relative w-80 h-96 md:w-96 md:h-[500px] bg-sacred-cream rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-4 border-white shadow-2xl z-10 group">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Acharya Girender Bharti" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter sepia-[0.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                    <p className="font-serif italic text-lg">Vastu Shastri</p>
                </div>
            </div>
        </div>

      </div>
      
      {/* Decorative Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-earth-beige to-transparent opacity-50"></div>
    </section>
  );
};

export default Guru;
