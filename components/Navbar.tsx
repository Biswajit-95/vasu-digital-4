
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Hexagon, User as UserIcon, LayoutDashboard, LogOut, ShoppingCart, ChevronDown, BookOpen, Settings } from 'lucide-react';
import { AuthView, PageView, User } from '../types';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
  onAuthNavigate: (view: AuthView) => void;
  currentView: PageView;
  user: User | null;
  onLogout: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onAuthNavigate, currentView, user, onLogout, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close profile dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { name: 'Services', action: () => onNavigate('services'), id: 'services' },
    { name: 'Consultation', action: () => onNavigate('consultation'), id: 'consultation' },
    { name: 'Products', action: () => onNavigate('shop'), id: 'shop' },
    { name: 'Learning', action: () => onNavigate('lms'), id: 'lms' }, // Visible to everyone
    { name: 'Contact', action: () => onNavigate('contact'), id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-background/95 backdrop-blur-xl border-b border-earth-beige py-3 shadow-md' : 'bg-transparent border-b border-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer relative z-50" onClick={() => { onNavigate('home'); setIsOpen(false); }}>
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <div className="absolute inset-0 border-[1.5px] border-aura-gold rotate-45 transition-transform duration-700 group-hover:rotate-90"></div>
                  <div className="absolute inset-0 border-[1.5px] border-cosmic-blue/30 rotate-12 transition-transform duration-700 group-hover:-rotate-12"></div>
                  <Hexagon size={16} className="text-rich-crimson relative z-10" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                  <span className={`font-display text-xl md:text-2xl font-bold tracking-[0.15em] leading-none transition-colors ${scrolled || isOpen ? 'text-cosmic-blue' : 'text-cosmic-blue'}`}>
                      DIGITAL<span className="text-rich-crimson">VASTU</span>
                  </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-rich-crimson ${currentView === link.id ? 'text-rich-crimson' : 'text-slate-600'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-6">
                {/* Cart Icon */}
                <button 
                  onClick={() => onNavigate('cart')}
                  className="relative group p-2"
                >
                    <ShoppingCart className="w-5 h-5 text-cosmic-blue group-hover:text-rich-crimson transition-colors" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rich-crimson text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>

                {user ? (
                    <div className="relative" ref={profileRef}>
                        <button 
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-earth-beige/50 hover:border-aura-gold transition-all shadow-sm group"
                        >
                             <div className="w-8 h-8 rounded-full bg-sacred-cream flex items-center justify-center text-aura-gold group-hover:bg-aura-gold group-hover:text-white transition-colors">
                                <UserIcon size={16} />
                            </div>
                            <span className="text-xs font-bold text-cosmic-blue tracking-wide uppercase max-w-[100px] truncate">{user.fullName.split(' ')[0]}</span>
                            <ChevronDown size={14} className={`text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Profile Dropdown */}
                        {isProfileOpen && (
                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-earth-beige/20 overflow-hidden py-2 animate-fade-in-up">
                                <button onClick={() => { onNavigate('dashboard'); setIsProfileOpen(false); }} className="w-full text-left px-5 py-3 hover:bg-sacred-cream flex items-center gap-3 text-sm text-cosmic-blue font-medium transition-colors">
                                    <LayoutDashboard size={16} className="text-aura-gold" /> Dashboard
                                </button>
                                <button onClick={() => { onNavigate('lms'); setIsProfileOpen(false); }} className="w-full text-left px-5 py-3 hover:bg-sacred-cream flex items-center gap-3 text-sm text-cosmic-blue font-medium transition-colors">
                                    <BookOpen size={16} className="text-aura-gold" /> My Learning
                                </button>
                                <div className="h-px bg-earth-beige/20 my-1 mx-4"></div>
                                <button onClick={() => { onLogout(); setIsProfileOpen(false); }} className="w-full text-left px-5 py-3 hover:bg-red-50 flex items-center gap-3 text-sm text-rich-crimson font-medium transition-colors">
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button 
                        onClick={() => onAuthNavigate('login')}
                        className="px-6 py-2.5 bg-cosmic-blue text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-rich-crimson shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-lg transition-all"
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4 relative z-50">
               <button 
                  onClick={() => onNavigate('cart')}
                  className="relative p-2"
                >
                    <ShoppingCart className="w-6 h-6 text-cosmic-blue" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rich-crimson text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-cosmic-blue hover:text-rich-crimson transition-colors"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background/98 backdrop-blur-xl z-40 transition-transform duration-500 lg:hidden flex flex-col pt-24 px-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => { link.action(); setIsOpen(false); }}
                  className={`text-2xl font-display text-left ${currentView === link.id ? 'text-rich-crimson' : 'text-cosmic-blue'}`}
                >
                  {link.name}
                </button>
              ))}
              
              <div className="h-px bg-earth-beige/20 w-full my-4"></div>

              {user ? (
                  <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-sacred-cream flex items-center justify-center text-aura-gold">
                                <UserIcon size={20} />
                          </div>
                          <div>
                              <p className="font-display text-lg text-cosmic-blue">{user.fullName}</p>
                              <p className="text-xs text-slate-500 uppercase tracking-widest">Logged In</p>
                          </div>
                      </div>
                      <button onClick={() => { onNavigate('dashboard'); setIsOpen(false); }} className="w-full py-4 rounded-xl bg-sacred-cream text-cosmic-blue font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                          <LayoutDashboard size={18} /> Dashboard
                      </button>
                      <button onClick={() => { onLogout(); setIsOpen(false); }} className="w-full py-4 rounded-xl border border-rich-crimson/20 text-rich-crimson font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                          <LogOut size={18} /> Logout
                      </button>
                  </div>
              ) : (
                  <button 
                    onClick={() => { onAuthNavigate('login'); setIsOpen(false); }}
                    className="w-full py-4 bg-cosmic-blue text-white text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg"
                  >
                    Login / Sign Up
                  </button>
              )}
          </div>
      </div>
    </>
  );
};

export default Navbar;
