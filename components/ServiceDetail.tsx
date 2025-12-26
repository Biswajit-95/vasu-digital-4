
import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Phone, ChevronRight } from 'lucide-react';
import { ServiceArticle } from '../types';
import Button from './ui/Button';

interface ServiceDetailProps {
  service: ServiceArticle;
  allServices: ServiceArticle[];
  onBack: () => void;
  onNavigateToService: (service: ServiceArticle) => void;
  onNavigateToContact: () => void;
  onNavigateToConsult: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
    service, 
    allServices, 
    onBack, 
    onNavigateToService,
    onNavigateToContact,
    onNavigateToConsult
}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  const otherServices = allServices.filter(s => s.id !== service.id);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-rich-crimson transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Main Content */}
            <div className="lg:col-span-2">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cosmic-blue mb-6 leading-tight">
                    {service.title}
                </h1>
                
                <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border-4 border-white">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                </div>

                <div className="max-w-none">
                    {/* Intro / Short Description - Elegant Serif */}
                    <p className="text-xl md:text-2xl font-serif font-medium italic leading-relaxed text-cosmic-blue border-l-4 border-aura-gold pl-6 mb-10">
                        {service.shortDescription}
                    </p>
                    
                    {/* Render Full Description with Paragraphs - Clean Sans-Serif for Readability */}
                    <div className="space-y-6 text-slate-800 font-sans text-lg md:text-xl leading-relaxed">
                        {service.fullDescription ? (
                             service.fullDescription.split('\n\n').map((paragraph, index) => (
                                 <p key={index} className="mb-4">{paragraph}</p>
                             ))
                        ) : (
                            <p>
                                Ancient wisdom suggests that our physical environment is a direct reflection of our internal state. 
                                Through the lens of <strong>{service.title}</strong>, we can decode the subtle energies that shape our daily experiences.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Sidebar */}
            <div className="space-y-8">
                
                {/* CTA 1: Consultation */}
                <div className="bg-cosmic-blue rounded-[2rem] p-8 text-white relative overflow-hidden text-center shadow-xl">
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-aura-gold/20 rounded-full blur-2xl"></div>
                    <Calendar className="w-12 h-12 text-aura-gold mx-auto mb-4" />
                    <h3 className="font-display text-2xl mb-2">Need Guidance?</h3>
                    <p className="font-sans text-white/90 mb-6 text-sm leading-relaxed">
                        Book a personal session with our master architects to analyze your space.
                    </p>
                    <Button onClick={onNavigateToConsult} className="w-full bg-aura-gold text-cosmic-blue hover:bg-white hover:text-rich-crimson border-none font-bold transition-colors">
                        Book Consultation
                    </Button>
                </div>

                {/* CTA 2: Contact */}
                <div className="bg-white rounded-[2rem] p-8 border border-earth-beige shadow-lg text-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-sacred-cream/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <Phone className="w-12 h-12 text-rich-crimson mx-auto mb-4 relative z-10" />
                     <h3 className="font-display text-2xl text-cosmic-blue mb-2 relative z-10">Have Questions?</h3>
                     <p className="font-sans text-slate-700 mb-6 text-sm relative z-10 leading-relaxed">
                        Speak directly to our support team for custom requirements.
                    </p>
                    <button 
                        onClick={onNavigateToContact}
                        className="relative z-10 w-full py-3 rounded-xl border border-rich-crimson text-rich-crimson font-bold uppercase tracking-widest text-xs hover:bg-rich-crimson hover:text-white transition-all"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Navigation: Other Services */}
                <div className="pt-8 border-t border-earth-beige/30">
                    <h4 className="font-display text-xl text-cosmic-blue mb-6 pl-2">Explore More</h4>
                    <div className="space-y-3">
                        {otherServices.map(s => (
                            <button 
                                key={s.id}
                                onClick={() => onNavigateToService(s)}
                                className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-earth-beige/30 hover:border-aura-gold hover:shadow-md transition-all group text-left"
                            >
                                <span className="font-serif text-slate-700 font-medium text-lg group-hover:text-rich-crimson transition-colors">{s.title}</span>
                                <ChevronRight size={16} className="text-earth-beige group-hover:text-aura-gold" />
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
