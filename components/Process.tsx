
import React from 'react';
import { Upload, Eye, FileHeart, Sparkles } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: "Connect",
      description: "Initial consultation to align your goals.",
      icon: FileHeart,
    },
    {
      id: '02',
      title: "Analyze",
      description: "Mapping your space against the 8 directions.",
      icon: Eye,
    },
    {
      id: '03',
      title: "Harmonize",
      description: "Non-destructive remedies and corrections.",
      icon: Sparkles,
    },
    {
      id: '04',
      title: "Thrive",
      description: "Experience the shift in energy and abundance.",
      icon: Upload,
    }
  ];

  return (
    <section id="consultation" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
                <h4 className="text-rich-crimson font-serif italic text-xl mb-2 font-normal">How We Work</h4>
                <h2 className="font-display text-5xl text-cosmic-blue leading-tight">
                    The Path to <br/> <span className="text-aura-gold">Equilibrium</span>
                </h2>
            </div>
            <p className="font-serif text-lg text-slate-700 text-balance font-normal leading-relaxed">
                Our process is scientific, seamless, and deeply personal. We move from the gross (physical structure) to the subtle (energy flow) in four distinct stages.
            </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-earth-beige via-aura-gold to-earth-beige -z-0"></div>

            {steps.map((step, idx) => (
                <div key={step.id} className="relative z-10 group">
                    {/* Icon Circle */}
                    <div className="w-24 h-24 bg-background border-2 border-aura-gold/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:border-vibrant-orange group-hover:scale-110 transition-all duration-300">
                        <step.icon className="w-10 h-10 text-mystic-indigo group-hover:text-vibrant-orange transition-colors" />
                    </div>

                    <div className="text-center px-4">
                        <span className="block font-display text-4xl text-black/5 mb-2 font-bold group-hover:text-aura-gold/20 transition-colors">
                            {step.id}
                        </span>
                        <h3 className="font-display text-2xl text-cosmic-blue mb-3">{step.title}</h3>
                        <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
      
      {/* Decorative Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-earth-beige to-transparent opacity-50"></div>
    </section>
  );
};

export default Process;
