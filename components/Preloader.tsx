
import React from 'react';
import { Hexagon, Sparkles } from 'lucide-react';

interface PreloaderProps {
  className?: string;
}

const Preloader: React.FC<PreloaderProps> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 z-[100] bg-[#FFFCF8] flex flex-col items-center justify-center overflow-hidden ${className}`}>
      
      {/* Background Texture & Vignette */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-earth-beige/10 pointer-events-none"></div>
      
      {/* Background Glow - Warmer Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-gold/10 rounded-full blur-[120px] animate-pulse-glow"></div>

      {/* Central Sacred Geometry Animation */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-16">
        
        {/* Outer Rotating Ring - Complex */}
        <div className="absolute inset-0 border-[1px] border-cosmic-blue/5 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-[1px] border-aura-gold/30 rounded-full border-dashed animate-spin-reverse-slow"></div>
        
        {/* Hexagon Outline */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 animate-pulse">
           <Hexagon size={220} strokeWidth={0.5} className="text-cosmic-blue" />
        </div>

        {/* Inner Sri Yantra - More Detailed & Sharp */}
        <div className="relative z-10 w-36 h-36">
             <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" style={{ filter: 'drop-shadow(0px 0px 10px rgba(212, 175, 55, 0.2))' }}>
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#B4941F" />
                    </linearGradient>
                </defs>
                
                {/* Outer Circle */}
                <circle cx="50" cy="50" r="48" stroke="url(#goldGradient)" strokeWidth="0.6" fill="none" opacity="0.9" />
                
                {/* Triangles */}
                <g stroke="url(#goldGradient)" strokeWidth="0.6" fill="none">
                    <polygon points="50,5 90,80 10,80" />
                    <polygon points="50,95 90,20 10,20" />
                    <polygon points="50,15 85,75 15,75" opacity="0.7"/>
                    <polygon points="50,85 85,25 15,25" opacity="0.7"/>
                </g>
                
                {/* Bindu Point */}
                <circle cx="50" cy="50" r="3" fill="#8B1E3F" className="animate-pulse" />
            </svg>
        </div>
        
        {/* Orbiting Particles */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3">
                <Sparkles size={20} className="text-rich-crimson fill-rich-crimson/50 animate-pulse" />
            </div>
        </div>
      </div>

      {/* Typography & Loading Status */}
      <div className="text-center relative z-10 space-y-8">
        
        {/* Brand Name - Sharper & Larger */}
        <div className="space-y-3">
             <h1 className="font-display text-4xl md:text-5xl text-cosmic-blue tracking-[0.25em] font-medium leading-none drop-shadow-sm">
                DIGITAL<span className="text-rich-crimson font-bold">VASTU</span>
            </h1>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-aura-gold to-transparent mx-auto opacity-60"></div>
        </div>
        
        {/* Loading Text */}
        <div className="flex flex-col items-center gap-4">
            <p className="font-sans text-sm md:text-base text-cosmic-blue/80 uppercase tracking-[0.25em] font-bold">
                Harmonizing Energy
            </p>
            
            {/* Elegant Loading Bar */}
            <div className="w-72 h-[3px] bg-earth-beige/20 relative overflow-hidden rounded-full">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-aura-gold via-rich-crimson to-aura-gold w-1/3 animate-border-beam rounded-full shadow-[0_0_15px_rgba(139,30,63,0.4)]"></div>
            </div>
        </div>
      </div>

      {/* Footer text */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-60">
           <Hexagon size={14} className="text-aura-gold animate-spin-slow" strokeWidth={1.5} />
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">
              Sacred Geometry Loading
          </span>
      </div>
    </div>
  );
};

export default Preloader;
