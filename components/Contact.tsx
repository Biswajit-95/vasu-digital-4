
import React, { useEffect } from 'react';
import Button from './ui/Button';
import { Phone, Layout, Zap, HeartPulse, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  
  // Ensure page starts at top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-sacred-cream min-h-screen">
        
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-earth-beige to-transparent opacity-50"></div>

        {/* Background Mandala Effect */}
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] border-[40px] border-white rounded-full opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* LEFT COLUMN: Content & Offerings */}
                <div className="space-y-10">
                    <div>
                        <span className="text-rich-crimson text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
                        <h2 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-6">WHAT WE CAN OFFER</h2>
                        <div className="w-24 h-1 bg-aura-gold mb-6"></div>
                        <p className="font-serif text-lg text-slate-700 leading-relaxed font-normal">
                            Align your space with cosmic geometry. We provide specialized solutions tailored to your unique energy blueprint.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Service 1 */}
                        <div className="flex gap-5 group">
                            <div className="w-14 h-14 rounded-full bg-white border border-earth-beige flex items-center justify-center text-vibrant-orange flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-vibrant-orange group-hover:text-white duration-300">
                                <Layout size={24} />
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-cosmic-blue mb-2">New Projects</h3>
                                <p className="font-sans text-slate-700 leading-relaxed font-normal">
                                    Vastu Consultancy for New/Upcoming Projects.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex gap-5 group">
                             <div className="w-14 h-14 rounded-full bg-white border border-earth-beige flex items-center justify-center text-vibrant-orange flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-vibrant-orange group-hover:text-white duration-300">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-cosmic-blue mb-2">Remedial & Rectification</h3>
                                <p className="font-sans text-slate-700 leading-relaxed font-normal">
                                    Vastu/Energy Vastu/Astro Vastu Remedial and Rectification solutions for already built space.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex gap-5 group">
                             <div className="w-14 h-14 rounded-full bg-white border border-earth-beige flex items-center justify-center text-vibrant-orange flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-vibrant-orange group-hover:text-white duration-300">
                                <HeartPulse size={24} />
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-cosmic-blue mb-2">Problem Oriented Solutions</h3>
                                <p className="font-sans text-slate-700 leading-relaxed font-normal">
                                    Specific Problem such as poor health , money crunch, relationship issues, career, marriage delays, oriented solutions using Vedic/Energy/Astro Vastu and a wide range of techniques and systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/60 p-8 rounded-2xl border border-earth-beige/50 backdrop-blur-sm shadow-sm mt-8">
                        <p className="font-serif text-xl text-cosmic-blue italic mb-4">
                            "Ready to harmonize your space?"
                        </p>
                        <p className="text-slate-700 mb-6 font-normal leading-relaxed">
                            Reach out directly to book your appointment or for any queries.
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="tel:+918954770101" className="inline-flex items-center gap-3 text-xl md:text-2xl font-display text-rich-crimson hover:text-vibrant-orange transition-colors font-bold tracking-tight">
                                <Phone size={24} className="animate-pulse" /> +91 89547 70101
                            </a>
                            <a href="mailto:contact@vastuwisdom.com" className="inline-flex items-center gap-3 text-xl md:text-2xl font-display text-cosmic-blue hover:text-vibrant-orange transition-colors font-bold tracking-tight break-all">
                                <Mail size={24} /> contact@vastuwisdom.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-earth-beige/30 relative">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-aura-gold/5 rounded-bl-[100px] pointer-events-none"></div>
                     
                     <div className="mb-8">
                        <h3 className="font-display text-3xl text-cosmic-blue mb-2">Book Appointment</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Fill the details below</p>
                     </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em]">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-sacred-cream/30 focus:outline-none focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange transition-all font-light"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em]">Phone</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-sacred-cream/30 focus:outline-none focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange transition-all font-light"
                                    placeholder="+91..."
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em]">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-sacred-cream/30 focus:outline-none focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange transition-all font-light"
                                placeholder="email@address.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em]">Service Interest</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-sacred-cream/30 focus:outline-none focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange transition-all appearance-none font-light text-cosmic-blue cursor-pointer">
                                    <option>Online Consultation</option>
                                    <option>Offline Consultation</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m1 1 4 4 4-4"/></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em]">Message</label>
                            <textarea 
                                rows={4} 
                                className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-sacred-cream/30 focus:outline-none focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange transition-all font-light resize-none"
                                placeholder="Describe your requirement..."
                            ></textarea>
                        </div>
                        
                        <Button variant="primary" className="w-full text-lg py-4 bg-cosmic-blue hover:bg-vibrant-orange shadow-xl hover:shadow-2xl">
                            Send Request
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Contact;
