
import React, { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceArticle } from '../types';

interface ServicesPageProps {
  services: ServiceArticle[];
  onSelectService: (service: ServiceArticle) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services, onSelectService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mandala-bg"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aura-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rich-crimson/5 border border-rich-crimson/20 text-rich-crimson text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles size={12} /> Sacred Offerings
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-cosmic-blue mb-6 leading-tight">
                Our Services
            </h1>
            <div className="w-24 h-1 bg-aura-gold mx-auto mb-8"></div>
            <p className="font-serif text-xl text-slate-700 font-normal leading-relaxed">
                You can transform your surroundings and eliminate the effects of geopathic stress while improving your health, happiness and well-being.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
                <div 
                    key={service.id} 
                    onClick={() => onSelectService(service)}
                    className="group glass-temple rounded-[2rem] overflow-hidden border border-earth-beige/30 hover:border-aura-gold/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col h-full"
                >
                    <div className="h-48 overflow-hidden relative">
                        <img 
                            src={service.imageUrl} 
                            alt={service.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-cosmic-blue/20 group-hover:bg-cosmic-blue/0 transition-colors"></div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-display text-xl text-cosmic-blue mb-3 group-hover:text-vibrant-orange transition-colors">
                            {service.title}
                        </h3>
                        <p className="font-serif text-slate-600 text-base leading-relaxed mb-6 flex-grow opacity-100 group-hover:opacity-100 transition-opacity">
                            {service.shortDescription}
                        </p>
                        
                        <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rich-crimson group-hover:gap-3 transition-all">
                            Read Article <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
