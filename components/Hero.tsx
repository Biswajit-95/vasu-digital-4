
import React from 'react';
import Button from './ui/Button';
import { Compass, MoveRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background">
      
      {/* --- SACRED GEOMETRY BACKGROUND --- */}
      
      {/* 1. Dynamic Gradient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-aura-gold/5 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>

      {/* 2. SVG Sri Yantra with "Drawing" Animation - INCREASED OPACITY */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
        <div className="relative w-[900px] h-[900px] animate-spin-slow">
            <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
                
                {/* Outer Circles - More visible */}
                <circle cx="250" cy="250" r="240" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" className="opacity-60" />
                <circle cx="250" cy="250" r="230" stroke="#D4AF37" strokeWidth="0.8" fill="none" strokeDasharray="4 4" className="opacity-50" />
                
                {/* Petals - Increased Opacity */}
                <g className="animate-pulse">
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(0 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(45 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(90 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(135 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(180 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(225 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(270 250 250)" />
                   <path d="M250 10 Q280 50 250 90 Q220 50 250 10" stroke="#D4AF37" fill="none" strokeWidth="0.8" opacity="0.6" transform="rotate(315 250 250)" />
                </g>

                {/* Central Triangles - The "Drawing" Effect - Thicker strokes for clarity */}
                <g transform="translate(250, 250) scale(1.5)">
                    {/* Downward Triangles */}
                    <polygon points="-100,-70 100,-70 0,100" className="sri-yantra-path" strokeWidth="1" />
                    <polygon points="-80,-50 80,-50 0,90" className="sri-yantra-path" strokeWidth="1" style={{animationDelay: '1s'}} />
                    <polygon points="-60,-30 60,-30 0,80" className="sri-yantra-path" strokeWidth="1" style={{animationDelay: '2s'}} />
                    <polygon points="-40,-10 40,-10 0,70" className="sri-yantra-path" strokeWidth="1" style={{animationDelay: '3s'}} />
                    
                    {/* Upward Triangles */}
                    <polygon points="0,-100 -100,70 100,70" className="sri-yantra-path" strokeWidth="1" style={{animationDelay: '0.5s'}} />
                    <polygon points="0,-90 -80,50 80,50" className="sri-yantra-path" strokeWidth="1" style={{animationDelay: '1.5s'}} />
                    <polygon points="0,-80 -60,30 60,30" className="sri-yantra-path" strokeWidth="1" style={{animationDelay: '2.5s'}} />
                </g>
                
                {/* The Bindu (Center Point) */}
                <circle cx="250" cy="250" r="4" fill="#D4AF37" className="animate-pulse">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
            </svg>
            
            {/* Shooting Star Lines overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 w-[200%] h-[1.5px] bg-gradient-to-r from-transparent via-aura-gold to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 animate-shoot opacity-0"></div>
                 <div className="absolute top-1/2 left-1/2 w-[200%] h-[1.5px] bg-gradient-to-r from-transparent via-rich-crimson to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-12 animate-shoot opacity-0" style={{animationDelay: '2s'}}></div>
            </div>
        </div>
      </div>

      {/* 3. Floating Icons (Vastu Elements) */}
      <div className="absolute top-1/4 left-10 md:left-1/4 animate-float opacity-40">
        <Sparkles className="text-aura-gold w-6 h-6" />
      </div>
      <div className="absolute bottom-1/3 right-10 md:right-1/5 animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
        <Compass className="text-rich-crimson w-10 h-10" />
      </div>


      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-aura-gold/40 shadow-sm mb-10 animate-fade-in-up hover:border-vibrant-orange transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vibrant-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vibrant-orange"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mystic-indigo">The Science of Directional Energy</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cosmic-blue leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
            Align Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-gold to-vibrant-orange">Energy</span><br />
            Awaken Your <span className="italic font-serif text-rich-crimson font-light">Destiny</span>
        </h1>

        {/* Sub-headline - IMPROVED READABILITY */}
        <div className="max-w-xl mx-auto mb-10 relative group">
            <div className="bg-white/90 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)]">
                 {/* Chic Top Accent Line */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-aura-gold/60"></div>
                 
                 <p className="font-serif text-lg md:text-xl text-slate-700 font-normal leading-relaxed text-balance tracking-wide">
                    Your home is a <span className="font-medium text-cosmic-blue">living energy field</span>. 
                    We decode its geometry to remove blockages 
                    and unlock the flow of <span className="italic font-medium text-emerald-700">health</span>, <span className="italic font-medium text-aura-gold">wealth</span>, and <span className="italic font-medium text-vibrant-orange">clarity</span>.
                </p>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto min-w-[220px] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(139,30,63,0.4)] border-aura-gold/20 text-base"
            >
                Analyse My Space
            </Button>
            
            <button 
                onClick={() => scrollToSection('holistic')}
                className="group flex items-center gap-3 text-cosmic-blue font-display text-sm font-bold uppercase tracking-wider hover:text-rich-crimson transition-colors py-4 px-6 rounded-lg hover:bg-white/50 border border-transparent hover:border-white/50 backdrop-blur-sm"
            >
                <span>View Methodology</span>
                {/* Icon now changes to Rich Crimson to match the Primary Button hover state */}
                <span className="w-8 h-8 rounded-full bg-cosmic-blue/5 flex items-center justify-center group-hover:bg-rich-crimson group-hover:text-white transition-all">
                    <MoveRight size={14} />
                </span>
            </button>
        </div>

        {/* Stats / Social Proof */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
                { val: "10k+", label: "Spaces Harmonized" },
                { val: "100%", label: "Scientific Logic" },
                { val: "0", label: "Demolition Needed" },
                { val: "45+", label: "Countries" }
            ].map((stat, i) => (
                <div key={i} className="group bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/60 hover:border-aura-gold/40 hover:bg-white/90 transition-all duration-300 cursor-default shadow-sm">
                    <p className="font-display text-3xl md:text-4xl text-cosmic-blue group-hover:text-vibrant-orange transition-colors">{stat.val}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mt-2 group-hover:text-aura-gold transition-colors">{stat.label}</p>
                </div>
            ))}
        </div>

      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-background">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white opacity-40"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
