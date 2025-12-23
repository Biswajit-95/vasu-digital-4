
import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Calendar, ShoppingBag, ArrowRight, User as UserIcon, Settings, Clock, Heart, Package, Download, PlayCircle, ChevronRight, Globe, Infinity, Hourglass, FileText } from 'lucide-react';
import { User, Booking, Course } from '../types';
import Button from './ui/Button';

interface DashboardProps {
  user: User;
  onNavigate: (page: any) => void;
  currency: 'INR' | 'AED';
}

type DashboardTab = 'rituals' | 'library' | 'courses';

// Extended interface for local mock data to include new fields
interface ExtendedCourse extends Course {
    language: string;
    validity: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onNavigate, currency }) => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('rituals');

  // Enhanced Mock Data
  const activeBookings: Booking[] = [
    { id: 'B1', type: 'online', tier: 'moksha', status: 'pending_review', date: 'Nov 12, 2023 • 10:30 AM', amount: '₹35,000' },
    { id: 'B2', type: 'onsite', tier: 'prana', status: 'confirmed', date: 'Oct 28, 2023 • 02:15 PM', amount: '₹45,000' },
    { id: 'B3', type: 'online', tier: 'prana', status: 'completed', date: 'Sep 15, 2023 • 11:00 AM', amount: '₹12,000' },
    { id: 'B4', type: 'online', tier: 'prana', status: 'completed', date: 'Aug 10, 2023 • 09:00 AM', amount: '₹12,000' }
  ];

  const enrolledCourses: ExtendedCourse[] = [
    { id: 'C1', title: 'Foundations of Vedic Geometry', mentor: 'Acharya Girender Bharti', progress: 45, thumbnail: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=400', lessons: 24, enrolledDate: 'Oct 01, 2023', modules: [], priceInINR: 2299, priceInAED: 105, language: 'English', validity: 'Lifetime Access' },
    { id: 'C2', title: 'Advanced Directional Alchemy', mentor: 'Dr. V. S. Shastri', progress: 12, thumbnail: 'https://images.unsplash.com/photo-1507608869274-2c33ee138cdd?q=80&w=400', lessons: 18, enrolledDate: 'Nov 05, 2023', modules: [], priceInINR: 5999, priceInAED: 270, language: 'Hindi', validity: '1 Year Access' },
    { id: 'C3', title: 'Crystals & Energy Fields', mentor: 'Sarah Conner', progress: 0, thumbnail: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=400', lessons: 8, enrolledDate: 'Nov 10, 2023', modules: [], priceInINR: 1499, priceInAED: 70, language: 'English', validity: 'Lifetime Access' }
  ];

  const purchasedProducts = [
    {
        id: "P1",
        title: "The Signs of Directions (Masterclass)",
        purchaseDate: "Nov 15, 2023",
        thumbnailUrl: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=200",
        type: "Video Guide",
        priceInINR: 4999,
        priceInAED: 225
    },
    {
        id: "P2",
        title: "North Zone Activation Yantra",
        purchaseDate: "Oct 20, 2023",
        thumbnailUrl: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=200",
        type: "Digital Yantra (PDF)",
        priceInINR: 1100,
        priceInAED: 50
    },
    {
        id: "P3",
        title: "Sound Healing Frequencies",
        purchaseDate: "Sep 05, 2023",
        thumbnailUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=200",
        type: "Audio MP3",
        priceInINR: 1500,
        priceInAED: 70
    }
  ];

  const formatPrice = (inr: number = 0, aed: number = 0) => {
    if (currency === 'INR') return `₹${inr.toLocaleString()}`;
    return `${aed.toLocaleString()} AED`;
  };

  const tabs = [
    { id: 'rituals', label: 'Booked Rituals', icon: Calendar },
    { id: 'library', label: 'Sacred Library', icon: Package },
    { id: 'courses', label: 'Enrolled Path', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mandala-bg"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <h1 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-3">Welcome, <span className="text-aura-gold">{user.fullName.split(' ')[0]}</span></h1>
                    <p className="font-serif text-xl text-slate-600 font-normal">Your sanctuary of sacred knowledge and alignment.</p>
                </div>
                <div className="flex gap-4">
                    <button className="p-3 bg-white rounded-xl border border-earth-beige/50 hover:border-aura-gold transition-colors text-slate-700 shadow-sm">
                        <Settings size={20} />
                    </button>
                    <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-earth-beige/50 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-sacred-cream flex items-center justify-center text-aura-gold">
                            <UserIcon size={16} />
                        </div>
                        <span className="text-xs font-bold text-cosmic-blue tracking-wide uppercase">{user.email}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* --- MAIN CONTENT AREA (Left) --- */}
                <div className="lg:col-span-8 order-2 lg:order-1">
                    
                    {/* Tabs Navigation */}
                    <div className="flex items-center space-x-1 md:space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide border-b border-earth-beige/30">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as DashboardTab)}
                                className={`flex items-center gap-2 px-6 py-4 rounded-t-2xl font-display text-xs md:text-sm font-bold uppercase tracking-widest transition-all relative
                                    ${activeTab === tab.id 
                                        ? 'text-rich-crimson bg-white border-b-2 border-rich-crimson' 
                                        : 'text-slate-400 hover:text-cosmic-blue hover:bg-white/50'}`}
                            >
                                <tab.icon size={16} className={activeTab === tab.id ? 'text-rich-crimson' : 'opacity-70'} />
                                <span className="whitespace-nowrap">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* --- TAB CONTENT: RITUALS --- */}
                    {activeTab === 'rituals' && (
                        <div className="animate-fade-in space-y-4">
                             {activeBookings.length > 0 ? activeBookings.map(b => (
                                <div key={b.id} className="bg-white p-6 md:p-8 rounded-3xl border border-earth-beige/30 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner ${b.type === 'online' ? 'bg-sky-50 text-sky-600' : 'bg-amber-50 text-amber-600'}`}>
                                            {b.type === 'online' ? <LayoutDashboard size={28} /> : <Calendar size={28} />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className="font-display text-xl text-cosmic-blue uppercase tracking-wide group-hover:text-rich-crimson transition-colors">
                                                    {b.tier} Consultation
                                                </h4>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${b.type === 'online' ? 'bg-sky-50 text-sky-600 border-sky-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                                    {b.type}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Date:</span>
                                                    <p className="text-base font-serif text-slate-800 font-bold">{b.date}</p>
                                                </div>
                                                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Ref ID: {b.id}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end border-t md:border-t-0 border-earth-beige/20 pt-4 md:pt-0">
                                        <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3
                                            ${b.status === 'pending_review' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 
                                              b.status === 'confirmed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                                              b.status === 'completed' ? 'bg-slate-100 text-slate-500 border border-slate-200' : ''}`}>
                                            {b.status.replace('_', ' ')}
                                        </span>
                                        <div>
                                            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right mb-1">Paid Amount</span>
                                            <p className="text-xl font-display font-bold text-cosmic-blue">{b.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="p-16 text-center bg-white rounded-3xl border border-dashed border-earth-beige">
                                    <Calendar className="w-12 h-12 text-earth-beige mx-auto mb-4" />
                                    <p className="font-serif text-lg text-slate-600 mb-2">Your calendar is currently clear.</p>
                                    <p className="text-sm text-slate-400 mb-6">Book a session to align your space.</p>
                                    <Button onClick={() => onNavigate('consultation')} variant="outline" size="sm">Start a Ritual</Button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* --- TAB CONTENT: LIBRARY (REDESIGNED) --- */}
                    {activeTab === 'library' && (
                        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
                            {purchasedProducts.map(p => (
                                 <div key={p.id} className="group bg-white rounded-[2rem] border border-earth-beige/30 hover:border-aura-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                                    
                                    {/* Image Header */}
                                    <div className="h-48 relative overflow-hidden bg-sacred-cream flex-shrink-0">
                                        <img src={p.thumbnailUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                                        <div className="absolute inset-0 bg-cosmic-blue/10 group-hover:bg-transparent transition-colors"></div>
                                        
                                        {/* Type Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-cosmic-blue shadow-sm">
                                                {p.type.includes('Video') ? <PlayCircle size={12} className="text-rich-crimson" /> : <FileText size={12} className="text-rich-crimson" />}
                                                {p.type}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content Body */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="font-display text-lg text-cosmic-blue leading-snug group-hover:text-rich-crimson transition-colors mb-4 line-clamp-2 min-h-[3.5rem]">
                                            {p.title}
                                        </h4>
                                        
                                        {/* Metadata Row */}
                                        <div className="flex items-center justify-between mb-6 pt-4 border-t border-earth-beige/20">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Purchased On</p>
                                                <p className="font-serif text-sm font-bold text-slate-700">{p.purchaseDate}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Amount</p>
                                                <p className="font-serif text-sm font-bold text-cosmic-blue">{formatPrice(p.priceInINR, p.priceInAED)}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Action Button */}
                                        <button className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-3 bg-sacred-cream text-cosmic-blue rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-cosmic-blue hover:text-white transition-all group/btn shadow-sm">
                                            {p.type.includes('Video') ? <PlayCircle size={16} /> : <Download size={16} />}
                                            <span>Access Material</span>
                                            <ChevronRight size={14} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                                        </button>
                                    </div>
                                 </div>
                            ))}
                        </div>
                    )}

                    {/* --- TAB CONTENT: COURSES --- */}
                    {activeTab === 'courses' && (
                         <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
                             {enrolledCourses.map(c => (
                                <div key={c.id} onClick={() => onNavigate('lms')} className="group bg-white rounded-[2rem] overflow-hidden border border-earth-beige/30 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col h-full">
                                    <div className="h-44 overflow-hidden relative flex-shrink-0">
                                        <img src={c.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={c.title} />
                                        <div className="absolute inset-0 bg-cosmic-blue/20 group-hover:bg-cosmic-blue/0 transition-colors"></div>
                                        
                                        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-cosmic-blue shadow-md border border-earth-beige/20">
                                            {c.lessons} Lessons
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="font-display text-lg font-bold text-cosmic-blue mb-3 group-hover:text-rich-crimson transition-colors line-clamp-2 leading-snug">
                                            {c.title}
                                        </h3>

                                        {/* Validity & Language Tags */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 border border-sky-100">
                                                <Globe size={12} />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">{c.language}</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-100">
                                                {c.validity.includes('Lifetime') ? <Infinity size={12} /> : <Hourglass size={12} />}
                                                <span className="text-[10px] font-bold uppercase tracking-wider">{c.validity}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-6 flex justify-between items-start pt-4 border-t border-earth-beige/10">
                                            <div>
                                                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Enrolled Date</p>
                                                 <p className="text-sm font-semibold text-slate-600">{c.enrolledDate}</p>
                                            </div>
                                            <div className="text-right">
                                                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Course Fee</p>
                                                 <p className="text-sm font-semibold text-cosmic-blue">{formatPrice(c.priceInINR, c.priceInAED)}</p>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                                                <span>Completion</span>
                                                <span className="text-cosmic-blue font-bold">{c.progress}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-sacred-cream rounded-full overflow-hidden mb-5 border border-earth-beige/20">
                                                <div className="h-full bg-vibrant-orange transition-all duration-1000 rounded-full" style={{ width: `${c.progress}%` }}></div>
                                            </div>
                                            
                                            <button className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-cosmic-blue hover:text-rich-crimson transition-colors group/btn bg-sacred-cream/50 p-3 rounded-xl hover:bg-sacred-cream">
                                                <span>Continue Learning</span>
                                                <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                         </div>
                    )}
                </div>

                {/* --- SIDEBAR (Right) --- */}
                <div className="lg:col-span-4 order-1 lg:order-2 space-y-8">
                    {/* Quick Actions Card */}
                    <div className="bg-cosmic-blue rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl sticky top-32">
                        {/* Decorative background blob */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-aura-gold/20 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <h3 className="font-display text-2xl mb-6 relative z-10 flex items-center gap-2">
                            <Heart size={20} className="text-aura-gold" /> Sacred Services
                        </h3>
                        
                        <div className="space-y-4 relative z-10">
                            <button onClick={() => onNavigate('contact')} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-aura-gold flex items-center justify-center text-cosmic-blue group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest group-hover:text-aura-gold transition-colors">Support</p>
                                    <p className="text-[10px] text-white/70 font-medium">Response within 2 hours</p>
                                </div>
                            </button>

                            <button onClick={() => onNavigate('shop')} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-rich-crimson flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                                    <ShoppingBag size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest group-hover:text-aura-gold transition-colors">Remedy Shop</p>
                                    <p className="text-[10px] text-white/70 font-medium">Charged Yantras & Crystals</p>
                                </div>
                            </button>

                            <button onClick={() => onNavigate('consultation')} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-lg flex-shrink-0">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest group-hover:text-aura-gold transition-colors">Book Audit</p>
                                    <p className="text-[10px] text-white/70 font-medium">Start your healing journey</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Dashboard;
