
import React from 'react';
import { Sparkles, Moon, Home, Brain, Activity, PenTool, Zap, CheckCircle2 } from 'lucide-react';

const Holistic: React.FC = () => {
  const leftFeatures = [
    { title: "Vedic Vastu", subtitle: "Traditional Science of Architecture", icon: Home },
    { title: "Vedic Astrology", subtitle: "Planetary influence on life", icon: Moon },
    { title: "Astro Vastu", subtitle: "Combination of Astrology & Vastu", icon: Sparkles },
    { title: "Building Biology", subtitle: "Holistic interaction of spaces", icon: Activity },
  ];

  const rightFeatures = [
    { title: "Numerology", subtitle: "Numbers as key to behavior", icon: Brain },
    { title: "Fengshui", subtitle: "Solutions of five elements", icon: PenTool },
    { title: "Luck Principle", subtitle: "Control and increase luck", icon: CheckCircle2 },
    { title: "Miracle Techniques", subtitle: "Instant effect in your space", icon: Zap },
  ];

  return (
    <section id="holistic" className="py-24 bg-sacred-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-4">The Holistic Approach</h2>
            <p className="font-serif text-xl text-slate-700 max-w-2xl mx-auto font-normal">
                We don't just look at walls. We analyze the cosmic coordinates of your existence using 8 dimensions of sacred science.
            </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            
            {/* Left Column */}
            <div className="flex-1 space-y-12 md:text-right w-full md:w-auto md:pr-12">
                {leftFeatures.map((f, i) => (
                    <div key={i} className="flex flex-row md:flex-row-reverse items-center gap-6 group cursor-default">
                         <div className="flex-1">
                             <h3 className="font-display text-xl text-cosmic-blue group-hover:text-vibrant-orange transition-colors">{f.title}</h3>
                             <p className="font-serif text-slate-600 font-normal">{f.subtitle}</p>
                         </div>
                         <div className="w-14 h-14 rounded-full bg-white border-2 border-aura-gold/50 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-vibrant-orange group-hover:border-vibrant-orange group-hover:text-white transition-all duration-300 relative z-10">
                            <f.icon size={24} />
                         </div>
                         {/* Dotted Line Connector for desktop */}
                         <div className="hidden md:block w-20 h-[2px] border-t-2 border-dotted border-earth-beige/50 group-hover:border-vibrant-orange transition-colors"></div>
                    </div>
                ))}
            </div>

            {/* Center Yantra - Inline SVG for reliability with HOVER EFFECT */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex-shrink-0 group cursor-pointer transition-all duration-500 rounded-full bg-white/50 backdrop-blur-sm p-8 border border-aura-gold/30 shadow-2xl hover:shadow-orange-200/50">
                <div className="absolute inset-0 rounded-full border border-aura-gold/50 scale-110 animate-pulse group-hover:border-vibrant-orange transition-colors duration-500"></div>
                
                {/* Rotating SVG Container */}
                <div className="w-full h-full animate-spin-slow group-hover:animate-none transition-all">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-90 drop-shadow-xl fill-none transition-colors duration-500">
                        <g className="stroke-aura-gold group-hover:stroke-vibrant-orange transition-colors duration-500" strokeWidth="0.5">
                            {/* Simplified Sri Yantra Geometry Representation */}
                            <circle cx="50" cy="50" r="48" />
                            <circle cx="50" cy="50" r="45" strokeDasharray="2 1" />
                            
                            <polygon points="50,2 90,75 10,75" />
                            <polygon points="50,98 90,25 10,25" />
                            <polygon points="50,15 80,65 20,65" />
                            <polygon points="50,85 80,35 20,35" />
                            <polygon points="50,30 70,60 30,60" />
                            <polygon points="50,70 70,40 30,40" />
                        </g>
                        
                        <circle cx="50" cy="50" r="2" fill="currentColor" stroke="none" className="text-aura-gold group-hover:text-vibrant-orange transition-colors duration-500" />
                    </svg>
                </div>
            </div>

            {/* Right Column */}
             <div className="flex-1 space-y-12 md:text-left w-full md:w-auto md:pl-12">
                {rightFeatures.map((f, i) => (
                    <div key={i} className="flex flex-row items-center gap-6 group cursor-default">
                         {/* Dotted Line Connector for desktop */}
                         <div className="hidden md:block w-20 h-[2px] border-t-2 border-dotted border-earth-beige/50 group-hover:border-vibrant-orange transition-colors"></div>
                         <div className="w-14 h-14 rounded-full bg-white border-2 border-aura-gold/50 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-vibrant-orange group-hover:border-vibrant-orange group-hover:text-white transition-all duration-300 relative z-10">
                            <f.icon size={24} />
                         </div>
                         <div className="flex-1">
                             <h3 className="font-display text-xl text-cosmic-blue group-hover:text-vibrant-orange transition-colors">{f.title}</h3>
                             <p className="font-serif text-slate-600 font-normal">{f.subtitle}</p>
                         </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
      
      {/* Decorative Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-earth-beige to-transparent opacity-50"></div>
    </section>
  );
};

export default Holistic;
