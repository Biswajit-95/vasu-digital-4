
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
    // Updated Services action to navigate to new page
    { name: 'Services', action: () => onNavigate('services'), id: 'services' },
    { name: 'Consultation', action: () => onNavigate('consultation'), id: 'consultation' },
    { name: 'Products', action: () => onNavigate('shop'), id: 'shop' },
    // "Learning" is shown in main nav if logged in, but also available in dropdown
    ...(user ? [{ name: 'Learning', action: () => onNavigate('lms'), id: 'lms' }] : []),
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
                  <div className="absolute inset-0 border-[1.5px] border-rich-crimson/50 rotate-12 transition-transform duration-700 group-hover:-rotate-12"></div>
                  <Hexagon size={18} className="text-aura-gold fill-aura-gold/20 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col">
                  <span className="font-display text-xl md:text-2xl font-bold text-cosmic-blue tracking-widest leading-none">
                  DIGITAL<span className="text-rich-crimson">VASTU</span>
                  </span>
                  <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] text-aura-gold uppercase font-serif font-bold">Sacred Geometry</span>
              </div>
            </div>

            {/* Desktop Nav - SWITCHED TO XL BREAKPOINT to prevent overcrowding */}
            <div className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => { link.action(); setIsOpen(false); }} 
                  className={`font-sans font-normal text-[13px] uppercase tracking-wider transition-colors relative group ${currentView === link.id ? 'text-vibrant-orange' : 'text-cosmic-blue'} hover:text-vibrant-orange`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-vibrant-orange transition-all duration-300 ${currentView === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
              
              <div className="h-6 w-px bg-earth-beige mx-2"></div>
              
              <div className="flex items-center space-x-4">
                  {/* Cart Icon - ONLY VISIBLE IF LOGGED IN */}
                  {user && (
                    <button 
                        onClick={() => onNavigate('cart')}
                        className="relative p-2 text-cosmic-blue hover:text-vibrant-orange transition-colors group"
                        title="Cart"
                    >
                        <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rich-crimson text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                                {cartCount}
                            </span>
                        )}
                    </button>
                  )}

                  {user ? (
                    // PROFILE DROPDOWN (Replaces cluttered buttons)
                    <div className="relative" ref={profileRef}>
                        <button 
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                          className={`flex items-center space-x-2 pl-2 pr-3 py-1.5 rounded-full border transition-all duration-300 ${isProfileOpen ? 'bg-sacred-cream border-aura-gold' : 'bg-white border-earth-beige/50 hover:border-aura-gold/50'}`}
                        >
                            <div className="w-8 h-8 rounded-full bg-cosmic-blue text-white flex items-center justify-center font-display font-bold">
                                {user.fullName.charAt(0)}
                            </div>
                            <span className="text-xs font-bold text-cosmic-blue uppercase tracking-wider max-w-[80px] truncate">
                                {user.fullName.split(' ')[0]}
                            </span>
                            <ChevronDown size={14} className={`text-mystic-indigo transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-earth-beige shadow-xl overflow-hidden animate-fade-in origin-top-right z-50">
                                <div className="p-4 bg-sacred-cream/50 border-b border-earth-beige/30">
                                    <p className="text-xs font-bold uppercase tracking-widest text-mystic-indigo/50 mb-1">Signed in as</p>
                                    <p className="text-sm font-bold text-cosmic-blue truncate">{user.email}</p>
                                </div>
                                <div className="p-2">
                                    <button 
                                        onClick={() => { onNavigate('dashboard'); setIsProfileOpen(false); }}
                                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-sacred-cream text-left transition-colors group"
                                    >
                                        <LayoutDashboard size={18} className="text-mystic-indigo group-hover:text-vibrant-orange" />
                                        <span className="text-sm font-medium text-cosmic-blue">Dashboard</span>
                                    </button>
                                    
                                    <button 
                                        onClick={() => { onNavigate('lms'); setIsProfileOpen(false); }}
                                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-sacred-cream text-left transition-colors group"
                                    >
                                        <BookOpen size={18} className="text-mystic-indigo group-hover:text-vibrant-orange" />
                                        <span className="text-sm font-medium text-cosmic-blue">My Learning</span>
                                    </button>

                                    <button 
                                        onClick={() => { setIsProfileOpen(false); }}
                                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-sacred-cream text-left transition-colors group"
                                    >
                                        <Settings size={18} className="text-mystic-indigo group-hover:text-vibrant-orange" />
                                        <span className="text-sm font-medium text-cosmic-blue">Settings</span>
                                    </button>
                                </div>
                                <div className="p-2 border-t border-earth-beige/30">
                                    <button 
                                        onClick={() => { onLogout(); setIsProfileOpen(false); }}
                                        className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-rich-crimson/5 text-left transition-colors group"
                                    >
                                        <LogOut size={18} className="text-rich-crimson group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-bold text-rich-crimson">Sign Out</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                  ) : (
                    <button 
                        onClick={() => onAuthNavigate('login')}
                        className="flex items-center space-x-2 font-display text-sm font-bold uppercase tracking-wider text-cosmic-blue hover:text-vibrant-orange transition-colors"
                    >
                        <UserIcon size={18} />
                        <span>Login</span>
                    </button>
                  )}
              </div>
            </div>

            {/* Mobile Actions & Menu Button - Visible below XL */}
            <div className="xl:hidden flex items-center space-x-4 relative z-50">
              {/* Cart Icon Mobile - ONLY VISIBLE IF LOGGED IN */}
              {user && (
                <button 
                    onClick={() => { onNavigate('cart'); setIsOpen(false); }}
                    className="relative p-2 text-cosmic-blue"
                    >
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rich-crimson text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {cartCount}
                            </span>
                        )}
                </button>
              )}
              <button onClick={() => setIsOpen(!isOpen)} className="text-cosmic-blue hover:text-vibrant-orange transition-colors p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col pt-28 px-6 pb-10 animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-2 flex-grow">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => { link.action(); setIsOpen(false); }}
                className={`text-left font-display text-3xl py-4 border-b border-earth-beige/20 transition-colors ${currentView === link.id ? 'text-vibrant-orange' : 'text-cosmic-blue hover:text-rich-crimson'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="mt-8 space-y-4">
            {user ? (
              <div className="bg-sacred-cream/50 p-6 rounded-2xl border border-earth-beige/30">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-aura-gold flex items-center justify-center text-cosmic-blue font-bold">
                     {user.fullName.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-cosmic-blue">{user.fullName}</p>
                     <p className="text-xs text-mystic-indigo">{user.email}</p>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <button 
                      onClick={() => { onNavigate('dashboard'); setIsOpen(false); }}
                      className="flex flex-col items-center justify-center space-y-1 bg-white p-3 rounded-xl border border-earth-beige/20"
                    >
                        <LayoutDashboard size={20} className="text-cosmic-blue" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-cosmic-blue">Dashboard</span>
                    </button>
                    <button 
                      onClick={() => { onNavigate('lms'); setIsOpen(false); }}
                      className="flex flex-col items-center justify-center space-y-1 bg-white p-3 rounded-xl border border-earth-beige/20"
                    >
                        <BookOpen size={20} className="text-cosmic-blue" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-cosmic-blue">Learning</span>
                    </button>
                </div>
                
                <button 
                  onClick={() => { onLogout(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center space-x-2 font-sans text-sm text-rich-crimson font-semibold py-2 border-t border-earth-beige/20 mt-2"
                >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => { onAuthNavigate('login'); setIsOpen(false); }}
                className="w-full flex items-center justify-center space-x-2 font-display text-lg font-bold uppercase tracking-widest bg-cosmic-blue text-white py-4 rounded-xl shadow-lg"
              >
                  <UserIcon size={20} />
                  <span>Login / Sign Up</span>
              </button>
            )}
            
            <p className="text-center text-[10px] uppercase tracking-widest text-mystic-indigo/30 pt-4">
              &copy; Digital Vastu
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
