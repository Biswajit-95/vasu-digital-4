
import React from 'react';
import { Globe, Home, Package, ArrowRight } from 'lucide-react';
import { Service, PageView } from '../types';

interface ServicesProps {
  onServiceClick: (page: PageView) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services: Service[] = [
    {
      id: 'consultation',
      title: 'Online Vastu Consultation',
      description: 'Send us your floor plan. We overlay the directional grid and identify energy blockages remotely.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1668584054035-f5ba7d426401?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'consultation-onsite',
      title: 'On-Site Energy Audit',
      description: 'A physical visit to sense the "Prana" (Lifeforce) of your land using traditional dowsing rods.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'shop',
      title: 'Digital Remedies & Products',
      description: 'Curated Yantras, Pyramids, and Crystals charged with Vedic mantras for immediate correction.',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-32 bg-sacred-cream relative overflow-hidden">
      
      {/* Background Mandala Decoration */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sri_Yantra_256bw.svg/1024px-Sri_Yantra_256bw.svg.png" className="w-[800px] h-[800px] animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-4">
                Sacred Services
            </h2>
            <div className="w-24 h-1 bg-aura-gold mx-auto mb-6"></div>
            <p className="font-serif text-xl text-slate-700 font-normal">
                We bridge the gap between ancient Vedic Architecture and contemporary lifestyle needs.
            </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
                <div 
                    key={service.id} 
                    onClick={() => service.id === 'shop' ? onServiceClick('shop') : onServiceClick('consultation')}
                    className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-aura-gold/30"
                >
                    
                    {/* Image Area */}
                    <div className="h-64 w-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-cosmic-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Floating Icon */}
                        <div className="absolute -bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20 group-hover:bg-vibrant-orange transition-colors duration-300">
                            <service.icon className="w-8 h-8 text-cosmic-blue group-hover:text-white" />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="pt-12 pb-10 px-8">
                        <h3 className="font-display text-2xl text-cosmic-blue mb-3 group-hover:text-vibrant-orange transition-colors">{service.title}</h3>
                        <p className="font-serif text-slate-600 text-lg leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-aura-gold group-hover:text-vibrant-orange transition-colors">
                            {service.id === 'shop' ? 'Browse Shop' : 'View Plans'} <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
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

export default Services;
