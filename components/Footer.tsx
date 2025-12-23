
import React from 'react';
import { Instagram, Facebook, Linkedin, Hexagon, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  return (
    <footer className="relative bg-[#050608] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
        
        {/* --- PREMIUM ACCENTS --- */}
        {/* Top Glow Line - Intense Gold Horizon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-aura-gold to-transparent shadow-[0_0_20px_rgba(212,175,55,0.6)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-vibrant-orange to-transparent opacity-50 blur-sm"></div>

        {/* Orange Radial Sine Flow Background */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none overflow-hidden">
            {/* Radial Core Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vibrant-orange/20 via-vibrant-orange/5 to-transparent blur-[80px] opacity-60"></div>
            
            {/* Sine Wave Flow */}
            <svg className="absolute bottom-0 left-0 w-full h-48 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="url(#orangeFlow)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
                <defs>
                    <linearGradient id="orangeFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#050608" stopOpacity="0" />
                        <stop offset="50%" stopColor="#D94F04" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#050608" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
            
                {/* BRAND COLUMN (Span 4) */}
                <div className="md:col-span-4 space-y-8">
                    <div className="flex items-center space-x-4 cursor-pointer group w-fit" onClick={() => onNavigate('home')}>
                        <div className="relative w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:border-aura-gold/50 transition-colors shadow-lg">
                            <Hexagon size={24} className="text-aura-gold" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display text-2xl font-bold tracking-widest text-white leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aura-gold transition-all duration-500">
                            DIGITAL<span className="text-rich-crimson">VASTU</span>
                            </span>
                        </div>
                    </div>
                    
                    <p className="text-slate-400 text-base font-sans font-light leading-relaxed max-w-sm">
                        Decoding the energetic blueprint of your space to unlock prosperity, health, and harmony through the ancient science of directions.
                    </p>

                    {/* Socials - Larger Touch Targets */}
                    <div className="flex items-center space-x-4">
                        {[
                            { Icon: Instagram, href: "#" },
                            { Icon: Facebook, href: "#" },
                            { Icon: Linkedin, href: "#" }
                        ].map((item, idx) => (
                            <a 
                                key={idx} 
                                href={item.href} 
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-rich-crimson hover:border-rich-crimson hover:-translate-y-1 transition-all duration-300 shadow-lg"
                            >
                                <item.Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* LINKS COLUMNS (Span 2 each) */}
                <div className="md:col-span-2 md:col-start-6">
                    <h4 className="font-display text-sm text-aura-gold font-bold tracking-[0.2em] uppercase mb-8 pb-2 border-b border-white/10 inline-block">Explore</h4>
                    <ul className="space-y-4">
                        {[
                            { label: 'Home', id: 'home' },
                            { label: 'Services', id: 'services' },
                            { label: 'Consultation', id: 'consultation' },
                            { label: 'Products', id: 'shop' },
                            { label: 'Contact', id: 'contact' }
                        ].map((link) => (
                            <li key={link.id}>
                                <button 
                                    onClick={() => onNavigate(link.id as PageView)} 
                                    className="text-base text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group w-full text-left"
                                >
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-vibrant-orange">•</span>
                                    <span className="group-hover:pl-2 transition-all duration-300">{link.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-display text-sm text-aura-gold font-bold tracking-[0.2em] uppercase mb-8 pb-2 border-b border-white/10 inline-block">Wisdom</h4>
                    <ul className="space-y-4">
                        {[
                            { label: 'FAQs', id: 'faq' },
                            { label: 'Learning Center', id: 'lms' },
                            { label: 'Vastu Guide', id: null }, 
                            { label: 'Privacy Policy', id: null }
                        ].map((link, idx) => (
                            <li key={idx}>
                                {link.id ? (
                                    <button 
                                        onClick={() => onNavigate(link.id as PageView)} 
                                        className="text-base text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group w-full text-left"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-vibrant-orange">•</span>
                                        <span className="group-hover:pl-2 transition-all duration-300">{link.label}</span>
                                    </button>
                                ) : (
                                    <a href="#" className="text-base text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group w-full text-left">
                                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-vibrant-orange">•</span>
                                        <span className="group-hover:pl-2 transition-all duration-300">{link.label}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ASSISTANCE COLUMN (Span 3) - High Visibility */}
                <div className="md:col-span-3">
                    <h4 className="font-display text-sm text-aura-gold font-bold tracking-[0.2em] uppercase mb-8 pb-2 border-b border-white/10 inline-block">Assistance</h4>
                    
                    <div className="space-y-6">
                        <a href="tel:+918954770101" className="flex items-center gap-5 group p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-aura-gold/30 hover:bg-white/[0.08] transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-aura-gold group-hover:bg-aura-gold group-hover:text-cosmic-blue transition-colors shadow-lg">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-aura-gold transition-colors">Direct Line</p>
                                <p className="text-lg text-white font-medium tracking-wide font-display">+91 89547 70101</p>
                            </div>
                        </a>

                        <a href="mailto:contact@vastuwisdom.com" className="flex items-center gap-5 group p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-aura-gold/30 hover:bg-white/[0.08] transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-aura-gold group-hover:bg-aura-gold group-hover:text-cosmic-blue transition-colors shadow-lg">
                                <Mail size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-aura-gold transition-colors">Email Support</p>
                                {/* Adjusted to be fully visible and break words if necessary */}
                                <p className="text-base text-white font-medium tracking-wide font-display break-all">contact@vastuwisdom.com</p>
                            </div>
                        </a>
                        
                        <button onClick={() => onNavigate('contact')} className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-aura-gold hover:to-vibrant-orange border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all flex items-center justify-center gap-3 group shadow-lg hover:shadow-orange-500/20 hover:border-transparent">
                            Book Audit <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-[0.15em] gap-6 relative z-10">
                <p className="hover:text-slate-300 transition-colors cursor-default text-center md:text-left">
                    &copy; {new Date().getFullYear()} Digital Vastu Pvt Ltd.
                </p>
                <div className="flex space-x-8">
                    <a href="#" className="hover:text-aura-gold transition-colors border-b border-transparent hover:border-aura-gold pb-0.5">Privacy</a>
                    <a href="#" className="hover:text-aura-gold transition-colors border-b border-transparent hover:border-aura-gold pb-0.5">Terms</a>
                    <a href="#" className="hover:text-aura-gold transition-colors border-b border-transparent hover:border-aura-gold pb-0.5">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
