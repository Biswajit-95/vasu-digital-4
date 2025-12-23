
import React, { useState, useRef, useEffect } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import { 
  Globe, Home, Check, Calendar, CreditCard, CheckCircle2, 
  ArrowRight, ShieldCheck, Star, Upload, FileText, 
  Image as ImageIcon, X, Play, Compass, Sparkles, Activity, MapPin, Clock, Edit2,
  User, ScrollText, Building2
} from 'lucide-react';
import { PricingPlan, User as UserType, ConsultationResumeData } from '../types';

interface ConsultationProps {
  user: UserType | null;
  onAuthRequired: () => void;
  currency: 'INR' | 'AED';
  onReturnHome: () => void;
  onAddToCart: (plan: PricingPlan, bookingType: 'online' | 'onsite') => void;
  resumeData: ConsultationResumeData | null;
}

type Step = 'intro' | 'package' | 'details' | 'review' | 'payment' | 'scheduling' | 'success';

const Consultation: React.FC<ConsultationProps> = ({ user, onAuthRequired, currency, onReturnHome, onAddToCart, resumeData }) => {
  const [step, setStep] = useState<Step>('intro');
  const [bookingType, setBookingType] = useState<'online' | 'onsite'>('online');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Resume State Logic
  useEffect(() => {
    if (resumeData) {
        setBookingType(resumeData.bookingType);
        setSelectedPlan(resumeData.plan);
        setStep('details'); // Jump straight to details if resuming
    }
  }, [resumeData]);

  // Scheduling State
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: user?.fullName || '',
    phone: '',
    buildingType: '',
    occupation: '',
    category: 'Residential',
    notes: '',
    street: '',
    city: '',
    zip: '',
    country: 'India' // Default
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const plans: Record<'online' | 'onsite', PricingPlan[]> = {
    online: [
      { 
        id: 'online-prana', 
        name: 'Online Prana', 
        priceInINR: 12000, 
        priceInAED: 550, 
        description: 'Essential directional mapping for modern apartments.', 
        features: ['Floor Plan Analysis (PDF)', '16-Zone Energy Check', 'Basic Elemental Balancing', 'Email Support'] 
      },
      { 
        id: 'online-moksha', 
        name: 'Online Moksha', 
        priceInINR: 35000, 
        priceInAED: 1500, 
        description: 'Deep cosmic alignment for sprawling residences.', 
        recommended: true, 
        features: ['45-Devta Energy Mapping', 'Personalized Astro-Vastu Report', '2x Zoom Sessions', 'Sacred Remedial Manifest'] 
      }
    ],
    onsite: [
      { 
        id: 'onsite-prana', 
        name: 'On-Site Prana', 
        priceInINR: 45000, 
        priceInAED: 2000, 
        description: 'Physical energy audit for your sacred space.', 
        features: ['Personal Site Visit (4 hrs)', 'Geopathy Stress Check', 'On-the-spot corrections', 'Digital Audit Report'] 
      },
      { 
        id: 'onsite-moksha', 
        name: 'On-Site Moksha', 
        priceInINR: 120000, 
        priceInAED: 5500, 
        description: 'Complete architectural healing & transformation.', 
        recommended: true, 
        features: ['Full Day Site Audit', 'Structural Bio-Geometry', 'Remedial Implementation', '6 Months Handholding'] 
      }
    ]
  };

  const countries = ["India", "United Arab Emirates", "United States", "United Kingdom", "Canada", "Australia", "Singapore", "Germany"];

  // Dynamic Progress Steps based on Booking Type
  const progressSteps = bookingType === 'online' 
    ? ['package', 'details', 'review', 'payment', 'scheduling'] 
    : ['package', 'details', 'review', 'confirmation'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Numeric only for phone
    if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) return;
    
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 3) newErrors.name = "Enter valid full name";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Enter valid 10-12 digit phone";
    if (!formData.buildingType) newErrors.buildingType = "Building type is required";
    
    // Conditional validation for On-Site booking
    if (bookingType === 'onsite') {
      if (!formData.street.trim()) newErrors.street = "Street Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.zip.trim()) newErrors.zip = "Postal Code is required";
      if (!formData.country) newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    if (step === 'package') setStep('intro');
    if (step === 'details') setStep('package');
    if (step === 'review') setStep('details');
    if (step === 'payment') setStep('review');
    if (step === 'scheduling') setStep('payment');
  };

  const nextStep = () => {
    if (step === 'intro') {
      setStep('package');
      window.scrollTo(0, 0);
      return;
    }
    
    if (step === 'package') {
      if (!user) {
        onAuthRequired();
        return;
      }
      setStep('details');
      window.scrollTo(0, 0);
      return;
    }

    if (step === 'details') {
      if (!validateForm()) return;
      // GO TO REVIEW INSTEAD OF DIRECT PAYMENT
      setStep('review');
      window.scrollTo(0, 0);
      return;
    }

    if (step === 'review') {
       // BRANCHING LOGIC FROM REVIEW
       if (bookingType === 'onsite') {
          setIsProcessing(true);
          // Simulate API call for lead submission
          setTimeout(() => {
            setIsProcessing(false);
            setStep('success');
            window.scrollTo(0, 0);
          }, 1500);
       } else {
          // If Online: Go to Payment
          setStep('payment');
          window.scrollTo(0, 0);
       }
       return;
    }

    if (step === 'payment') {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep('scheduling');
        window.scrollTo(0, 0);
      }, 2500);
      return;
    }

    if (step === 'scheduling') {
      if (!selectedDate || !selectedTime) {
         alert("Please select a date and time slot.");
         return;
      }
      setStep('success');
      window.scrollTo(0, 0);
    }
  };

  const handlePlanSelection = (plan: PricingPlan) => {
      setSelectedPlan(plan);
      // Automatically add to cart when moving to details
      onAddToCart(plan, bookingType);
      nextStep();
  };

  const getDisplayPrice = (plan: PricingPlan | null) => {
    if (!plan) return '';
    return currency === 'INR' 
      ? `₹${plan.priceInINR.toLocaleString()}`
      : `${plan.priceInAED.toLocaleString()} AED`;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Intro Section: Explainer & How it Works */}
      {step === 'intro' && (
        <div className="animate-fade-in">
          {/* Hero Explainer */}
          <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 md:space-y-8">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aura-gold/10 border border-aura-gold/20 text-[10px] font-bold uppercase tracking-[0.3em] text-aura-gold">
                    <Sparkles size={12} /> The Science of Space
                  </span>
                  <h1 className="font-display text-5xl md:text-7xl text-cosmic-blue leading-[1.1]">
                    Your Space, <br/> <span className="text-rich-crimson italic font-serif">Perfected</span>
                  </h1>
                  <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                    Watch our brief explainer video to understand the scientific process behind digital Vastu analysis.
                  </p>
                  <Button onClick={() => setStep('package')} className="group shadow-2xl w-full md:w-auto">
                    Begin Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border-4 md:border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-cosmic-blue/30 group-hover:bg-cosmic-blue/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center text-white animate-pulse-glow">
                      <Play size={32} md:size={40} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works (3 Steps) */}
          <section className="py-16 md:py-24 bg-sacred-cream relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12 md:mb-20">
                <h2 className="font-display text-3xl md:text-4xl text-cosmic-blue mb-4">The Journey to Balance</h2>
                <div className="w-24 h-1 bg-aura-gold mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connecting Lines */}
                <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-px border-t-2 border-dashed border-aura-gold/30"></div>
                
                {[
                  { icon: Compass, title: "Submit Layout", desc: "Upload your digital floor plan or schedule a site visit with our experts." },
                  { icon: Activity, title: "Energy Audit", desc: "We map 45-Devta fields to identify precise energetic leaks in your space." },
                  { icon: CheckCircle2, title: "Balance", desc: "Receive non-destructive remedies to harmonize your environment instantly." }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 text-center group">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl mx-auto mb-6 md:mb-8 flex items-center justify-center border border-earth-beige/50 group-hover:border-vibrant-orange transition-all duration-500 group-hover:scale-110">
                      <item.icon size={32} md:size={36} className="text-cosmic-blue group-hover:text-vibrant-orange transition-colors" />
                    </div>
                    <h3 className="font-display text-xl text-cosmic-blue mb-3">{item.title}</h3>
                    <p className="font-serif text-slate-700 text-base md:text-lg leading-relaxed px-4 font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Main Flow Containers */}
      {step !== 'intro' && (
        <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-20 relative z-10">
          
          {/* Progress Tracker (Dynamic based on Booking Type) */}
          {step !== 'success' && (
            <div className="flex justify-between items-center mb-10 md:mb-16 max-w-2xl mx-auto">
              {progressSteps.map((s, idx) => {
                const stepIndex = ['package', 'details', 'review', 'payment', 'scheduling'].indexOf(step);
                // Adjust index logic based on booking type since steps differ
                const isActive = stepIndex >= idx;

                return (
                  <div key={idx} className="flex flex-col items-center gap-2 relative flex-1">
                    {/* Line Connector */}
                    {idx < progressSteps.length - 1 && (
                        <div className={`absolute top-4 md:top-5 left-1/2 w-full h-[2px] -z-10 
                            ${isActive && step !== s ? 'bg-cosmic-blue' : 'bg-earth-beige/30'}`}>
                        </div>
                    )}
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display text-[10px] md:text-xs border-2 transition-all duration-700 relative z-10
                      ${isActive ? 'bg-cosmic-blue text-white border-cosmic-blue' : 'bg-white text-earth-beige border-earth-beige'}`}>
                      {idx + 1}
                    </div>
                    <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{s}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* --- STEP: PACKAGE CHOICE --- */}
          {step === 'package' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-4">Choose Your Path</h2>
                <div className="flex justify-center gap-2 md:gap-4 mt-8">
                  <button onClick={() => setBookingType('online')} className={`px-6 md:px-8 py-3 rounded-full font-display text-xs md:text-sm tracking-widest transition-all ${bookingType === 'online' ? 'bg-cosmic-blue text-white shadow-xl' : 'bg-sacred-cream text-slate-700 hover:bg-earth-beige/20'}`}>ONLINE</button>
                  <button onClick={() => setBookingType('onsite')} className={`px-6 md:px-8 py-3 rounded-full font-display text-xs md:text-sm tracking-widest transition-all ${bookingType === 'onsite' ? 'bg-cosmic-blue text-white shadow-xl' : 'bg-sacred-cream text-slate-700 hover:bg-earth-beige/20'}`}>ON-SITE</button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans[bookingType].map((plan) => (
                  <div key={plan.id} className="group relative">
                    <div className={`crimson-glow-border p-8 md:p-10 h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 ${plan.recommended ? 'scale-100 md:scale-105 z-10' : ''}`}>
                      {plan.recommended && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-aura-gold text-cosmic-blue text-[9px] font-bold uppercase tracking-[0.3em] px-4 py-1 rounded-full shadow-lg">Recommended</div>
                      )}
                      <h3 className="font-display text-2xl text-cosmic-blue mb-1">{plan.name}</h3>
                      <div className="text-3xl md:text-4xl font-serif text-rich-crimson mb-6">
                        {getDisplayPrice(plan)}
                      </div>
                      <p className="text-slate-700 text-base mb-8 font-serif leading-relaxed h-12">{plan.description}</p>
                      
                      <div className="space-y-4 mb-10 flex-grow border-t border-earth-beige/20 pt-8">
                        {plan.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <Check size={14} className="text-aura-gold mt-1 flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <Button onClick={() => handlePlanSelection(plan)} className="w-full">Select Ritual</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ... [Rest of the file remains unchanged, just need to preserve it] ... */}
          {/* --- STEP: DETAILS FORM --- */}
          {step === 'details' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                <button onClick={prevStep} className="p-2 hover:bg-sacred-cream rounded-full transition-colors"><ArrowRight className="rotate-180" size={24} /></button>
                <h2 className="font-display text-3xl md:text-4xl text-cosmic-blue">The Sacred Manifest</h2>
              </div>

              <div className="glass-temple p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-white/50">
                <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    <Input label="Full Name" name="name" value={formData.name} onChange={handleInputChange} error={errors.name} maxLength={50} />
                    <Input label="Mobile Number" name="phone" value={formData.phone} onChange={handleInputChange} error={errors.phone} maxLength={12} placeholder="Numbers only" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    <Input label="Building Type" name="buildingType" value={formData.buildingType} onChange={handleInputChange} error={errors.buildingType} maxLength={100} placeholder="e.g. 4BHK Duplex, IT Hub" />
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Property Category</label>
                      <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-white/80 focus:ring-2 focus:ring-aura-gold/10 transition-all font-light text-cosmic-blue">
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Sacred Plot</option>
                      </select>
                    </div>
                  </div>

                  {/* Conditional Address Fields for On-Site */}
                  {bookingType === 'onsite' && (
                    <div className="border-t border-earth-beige/30 pt-8 animate-fade-in">
                      <div className="flex items-center gap-2 mb-6 text-cosmic-blue">
                        <MapPin size={18} className="text-rich-crimson" />
                        <h3 className="font-display text-lg uppercase tracking-widest">Sacred Coordinates</h3>
                      </div>
                      <div className="grid gap-8">
                        <Input 
                          label="Street Address / Landmark" 
                          name="street" 
                          value={formData.street} 
                          onChange={handleInputChange} 
                          error={errors.street}
                          placeholder="e.g. 108 Lotus Tower, MG Road" 
                        />
                        <div className="grid md:grid-cols-3 gap-8">
                            <Input 
                              label="City" 
                              name="city" 
                              value={formData.city} 
                              onChange={handleInputChange} 
                              error={errors.city}
                            />
                            <Input 
                              label="Postal Code" 
                              name="zip" 
                              value={formData.zip} 
                              onChange={handleInputChange} 
                              error={errors.zip}
                            />
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase text-slate-600 tracking-[0.2em] block">Country</label>
                                <select 
                                    name="country" 
                                    value={formData.country} 
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-earth-beige bg-white/80 focus:outline-none focus:ring-2 focus:ring-aura-gold/10 transition-all font-light text-cosmic-blue"
                                >
                                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Knowledge Upload (Floor Plan/Photos)</label>
                    <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-earth-beige/40 rounded-[2rem] p-6 md:p-10 text-center cursor-pointer hover:border-aura-gold hover:bg-aura-gold/[0.02] transition-all group">
                      <input type="file" ref={fileInputRef} className="hidden" multiple onChange={(e) => e.target.files && setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)])} />
                      <Upload className="mx-auto text-earth-beige group-hover:text-aura-gold mb-4 transition-colors" size={32} md:size={40} />
                      <p className="font-serif text-base md:text-lg text-slate-600">Drag and drop site artifacts here</p>
                    </div>
                    {uploadedFiles.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {uploadedFiles.map((f, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-sacred-cream rounded-xl border border-earth-beige/20">
                            <div className="flex items-center gap-3 overflow-hidden">
                              <FileText size={16} className="text-aura-gold" />
                              <span className="text-xs truncate max-w-[120px] font-bold text-cosmic-blue">{f.name}</span>
                            </div>
                            <button type="button" onClick={() => setUploadedFiles(uploadedFiles.filter((_, idx) => idx !== i))} className="text-slate-500 hover:text-rich-crimson"><X size={14}/></button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Input 
                    label="Notes for the Master" 
                    name="notes" 
                    isTextArea 
                    value={formData.notes} 
                    onChange={handleInputChange} 
                    maxLength={500} 
                    currentLength={formData.notes.length} 
                    placeholder="Specific blockages or history of the space..."
                  />

                  <Button type="submit" className="w-full py-5 text-lg shadow-2xl">
                     Proceed to Review
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* --- STEP: REVIEW --- */}
          {step === 'review' && (
            <div className="animate-fade-in max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <button onClick={prevStep} className="p-2 hover:bg-sacred-cream rounded-full transition-colors"><ArrowRight className="rotate-180" size={24} /></button>
                    <h2 className="font-display text-3xl md:text-4xl text-cosmic-blue">Review Your Manifest</h2>
                </div>

                <div className="glass-temple rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 relative">
                    {/* Decorative Watermark */}
                    <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sri_Yantra_2D.svg/1024px-Sri_Yantra_2D.svg.png" className="w-96 h-96" />
                    </div>

                    {/* 1. Header Section: The Selected Plan */}
                    <div className="bg-cosmic-blue p-8 md:p-12 relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aura-gold via-vibrant-orange to-aura-gold"></div>
                         
                         <div className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 gap-6">
                             <div>
                                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-aura-gold mb-4">
                                     <Sparkles size={12} /> {bookingType} Consultation
                                 </div>
                                 <h3 className="font-display text-4xl text-white mb-2">{selectedPlan?.name}</h3>
                                 <p className="font-serif text-white/90 text-lg max-w-lg">{selectedPlan?.description}</p>
                             </div>
                             <div className="text-left md:text-right">
                                 <p className="font-display text-4xl text-aura-gold mb-2">{getDisplayPrice(selectedPlan)}</p>
                                 <button 
                                    onClick={() => setStep('package')} 
                                    className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-1 md:justify-end"
                                 >
                                     <Edit2 size={12} /> Change Plan
                                 </button>
                             </div>
                         </div>
                    </div>

                    {/* 2. Details Grid */}
                    <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm">
                        
                        {/* The Seeker */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6 border-b border-earth-beige/30 pb-4">
                                <div className="w-10 h-10 rounded-full bg-sacred-cream flex items-center justify-center text-cosmic-blue">
                                    <User size={20} />
                                </div>
                                <h4 className="font-display text-xl text-cosmic-blue">The Seeker</h4>
                            </div>
                            
                            <div className="space-y-4 pl-4">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Full Name</p>
                                    <p className="font-serif text-xl text-cosmic-blue">{formData.name}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Contact</p>
                                    <p className="font-serif text-xl text-cosmic-blue">{formData.phone}</p>
                                </div>
                            </div>
                        </div>

                        {/* The Space */}
                        <div className="space-y-6">
                             <div className="flex items-center gap-3 mb-6 border-b border-earth-beige/30 pb-4">
                                <div className="w-10 h-10 rounded-full bg-sacred-cream flex items-center justify-center text-cosmic-blue">
                                    <Building2 size={20} />
                                </div>
                                <h4 className="font-display text-xl text-cosmic-blue">The Space</h4>
                            </div>

                            <div className="space-y-4 pl-4">
                                 <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Building Type</p>
                                        <p className="font-serif text-lg text-cosmic-blue">{formData.buildingType}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Category</p>
                                        <p className="font-serif text-lg text-cosmic-blue">{formData.category}</p>
                                    </div>
                                 </div>

                                 {bookingType === 'onsite' && (
                                     <div className="mt-4 pt-4 border-t border-dashed border-earth-beige/30">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Site Coordinates</p>
                                        <p className="font-serif text-lg text-cosmic-blue">{formData.street}, {formData.city}</p>
                                        <p className="text-sm text-slate-500">{formData.zip}, {formData.country}</p>
                                     </div>
                                 )}
                            </div>
                        </div>

                        {/* Artifacts & Notes (Full Width) */}
                        <div className="md:col-span-2 space-y-6 pt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <ScrollText size={18} className="text-aura-gold" />
                                <h4 className="font-display text-lg text-cosmic-blue">Artifacts & Notes</h4>
                            </div>
                            
                            <div className="bg-sacred-cream/40 rounded-2xl p-6 border border-earth-beige/20">
                                {uploadedFiles.length > 0 ? (
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {uploadedFiles.map((f, i) => (
                                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-earth-beige/30 shadow-sm">
                                                <FileText size={14} className="text-aura-gold" />
                                                <span className="text-xs font-bold text-cosmic-blue">{f.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-500 italic mb-4">No files uploaded.</p>
                                )}

                                {formData.notes && (
                                    <div className="relative pl-4 border-l-2 border-aura-gold/30">
                                        <p className="text-sm text-slate-700 font-normal italic leading-relaxed">"{formData.notes}"</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 3. Footer Actions */}
                    <div className="bg-sacred-cream p-8 md:p-10 border-t border-earth-beige/20 flex flex-col md:flex-row items-center gap-6">
                        <Button variant="outline" onClick={() => setStep('details')} className="w-full md:w-auto border-earth-beige text-slate-600 hover:bg-white hover:text-cosmic-blue hover:border-cosmic-blue">
                             Edit Information
                        </Button>
                        <Button onClick={nextStep} className="w-full md:flex-1 py-5 text-lg shadow-xl hover:shadow-2xl">
                             {bookingType === 'onsite' ? 'Submit Official Request' : 'Confirm & Proceed to Payment'}
                        </Button>
                    </div>

                </div>
            </div>
          )}

          {/* --- STEP: PAYMENT (Online Only) --- */}
          {step === 'payment' && bookingType === 'online' && (
            <div className="animate-fade-in max-w-xl mx-auto">
              {/* Header Navigation */}
              <div className="flex items-center gap-4 mb-8">
                   <button onClick={prevStep} className="p-2 hover:bg-sacred-cream rounded-full transition-colors"><ArrowRight className="rotate-180" size={24} /></button>
                   <h2 className="font-display text-3xl md:text-4xl text-cosmic-blue">Sacred Investment</h2>
              </div>
              
              {/* Main Payment Card */}
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.15)] border border-white/50">
                 
                 {/* Decorative Top Gradient */}
                 <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-aura-gold via-vibrant-orange to-aura-gold animate-border-beam"></div>
                 
                 {/* Background Pattern */}
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                 <div className="p-8 md:p-12 relative z-10">
                    
                    {/* Top Section: Plan & Price */}
                    <div className="text-center mb-10">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-sacred-cream border border-earth-beige/30 mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Order Summary</span>
                        </div>
                        <h3 className="font-display text-3xl text-cosmic-blue mb-2">{selectedPlan?.name}</h3>
                        <p className="text-sm font-serif text-slate-600 italic mb-6">Complete Directional & Elemental Analysis</p>
                        
                        <div className="flex items-center justify-center gap-2 text-rich-crimson">
                            <span className="font-serif text-5xl md:text-6xl font-medium tracking-tight">
                                {getDisplayPrice(selectedPlan)}
                            </span>
                        </div>
                    </div>

                    {/* Divider with Cutout Effect */}
                    <div className="relative h-px bg-earth-beige/30 my-8 w-[120%] -ml-[10%] border-t border-dashed border-earth-beige">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full -ml-3"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full -mr-3"></div>
                    </div>

                    {/* Payment Method Section */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center px-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Payment Method</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Secure</span>
                        </div>
                        
                        <div className="group border border-earth-beige/40 rounded-2xl p-4 flex items-center justify-between hover:border-aura-gold hover:bg-sacred-cream/30 transition-all cursor-pointer shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white border border-earth-beige/20 flex items-center justify-center shadow-sm">
                                    <CreditCard size={24} className="text-cosmic-blue" />
                                </div>
                                <div>
                                    <p className="font-bold text-cosmic-blue text-sm">Credit / Debit Card</p>
                                    <p className="text-[10px] text-slate-500 font-bold tracking-wider">VIA RAZORPAY</p>
                                </div>
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-earth-beige flex items-center justify-center group-hover:border-vibrant-orange group-hover:bg-vibrant-orange transition-all">
                                <Check size={12} className="text-white opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>

                        {/* Button */}
                        <Button 
                            onClick={nextStep} 
                            disabled={isProcessing} 
                            className="w-full py-5 text-lg shadow-[0_10px_30px_rgba(15,23,42,0.2)] bg-gradient-to-r from-cosmic-blue to-[#1a233b] hover:to-rich-crimson transition-all"
                        >
                            {isProcessing ? (
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                    Connecting Gateway...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Complete Sacred Offering <ArrowRight size={18} />
                                </span>
                            )}
                        </Button>

                        {/* Security Footer */}
                        <div className="flex items-center justify-center gap-6 pt-2 opacity-60">
                             <div className="flex items-center gap-1.5">
                                 <ShieldCheck size={14} className="text-emerald-600" />
                                 <span className="text-[9px] font-bold uppercase tracking-widest text-slate-700">Bank Level Security</span>
                             </div>
                             <div className="h-3 w-px bg-earth-beige"></div>
                             <div className="flex items-center gap-1.5">
                                 <CheckCircle2 size={14} className="text-emerald-600" />
                                 <span className="text-[9px] font-bold uppercase tracking-widest text-slate-700">Instant Confirmation</span>
                             </div>
                        </div>
                    </div>

                 </div>
              </div>
            </div>
          )}

          {/* --- STEP: SCHEDULING (Online Only) --- */}
          {step === 'scheduling' && bookingType === 'online' && (
             <div className="animate-fade-in max-w-4xl mx-auto">
                 <div className="flex items-center gap-4 mb-8 justify-start">
                   <button onClick={prevStep} className="p-2 hover:bg-sacred-cream rounded-full transition-colors"><ArrowRight className="rotate-180" size={24} /></button>
                 </div>
                 
                <div className="text-center mb-10">
                    <h2 className="font-display text-3xl md:text-4xl text-cosmic-blue mb-2">Temporal Alignment</h2>
                    <p className="font-serif text-slate-700 text-lg italic">Select a propitious moment for your digital session.</p>
                </div>
                
                <div className="glass-temple rounded-[2rem] overflow-hidden shadow-2xl border-earth-beige/40 flex flex-col md:flex-row min-h-[600px]">
                    {/* Left: Info Panel */}
                    <div className="md:w-1/3 bg-sacred-cream p-8 border-r border-earth-beige/30 flex flex-col">
                        <div className="mb-8">
                             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Service</p>
                             <h3 className="font-display text-xl text-cosmic-blue">{selectedPlan?.name}</h3>
                        </div>
                        <div className="mb-8">
                             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Duration</p>
                             <div className="flex items-center gap-2 text-cosmic-blue font-bold">
                                 <Clock size={16} />
                                 <span>60 Minutes</span>
                             </div>
                        </div>
                        <div className="mt-auto hidden md:block">
                            <p className="text-xs text-slate-600 leading-relaxed italic">
                                "Time is the vertical dimension of space. Choosing the right Muhurta amplifies the remedy."
                            </p>
                        </div>
                    </div>

                    {/* Right: Calendar Interface (Mock) */}
                    <div className="md:w-2/3 bg-white p-8 flex flex-col">
                        <h4 className="font-display text-lg text-cosmic-blue mb-6">Select Date & Time</h4>
                        
                        {/* Mock Calendar Grid */}
                        <div className="flex-grow flex flex-col md:flex-row gap-8">
                            {/* Date Picker */}
                            <div className="flex-1">
                                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 mb-2">
                                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {[...Array(31)].map((_, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => setSelectedDate(i + 1)}
                                            className={`aspect-square rounded-full text-sm flex items-center justify-center transition-all
                                                ${selectedDate === i + 1 
                                                    ? 'bg-cosmic-blue text-white shadow-lg scale-110' 
                                                    : 'hover:bg-sacred-cream text-cosmic-blue'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className="w-full md:w-40 border-l border-earth-beige/20 md:pl-8 overflow-y-auto mt-6 md:mt-0">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Available Slots</p>
                                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                                    {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`w-full py-2 px-4 rounded-lg text-xs font-bold border transition-all
                                                ${selectedTime === time 
                                                    ? 'bg-white border-vibrant-orange text-vibrant-orange shadow-md ring-1 ring-vibrant-orange' 
                                                    : 'bg-white border-earth-beige/50 text-cosmic-blue hover:border-aura-gold'}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-earth-beige/20 flex justify-end">
                            <Button onClick={nextStep} disabled={!selectedDate || !selectedTime}>
                                Confirm Appointment
                            </Button>
                        </div>
                    </div>
                </div>
             </div>
          )}

          {/* --- SUCCESS VIEW --- */}
          {step === 'success' && (
            <div className="animate-fade-in-up text-center max-w-2xl mx-auto py-12">
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-10 text-emerald-600 border border-emerald-100 shadow-2xl shadow-emerald-500/10">
                <CheckCircle2 size={48} className="animate-pulse" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-cosmic-blue mb-6">
                 {bookingType === 'online' ? 'Alignment Commenced' : 'Request Received'}
              </h2>
              <p className="font-serif text-xl md:text-2xl text-slate-700 mb-6 italic">
                {bookingType === 'online' 
                    ? <span>Your ritual for <span className="text-rich-crimson font-bold">{selectedPlan?.name}</span> is confirmed.</span>
                    : <span>Your request for the <span className="text-rich-crimson font-bold">{selectedPlan?.name}</span> has been securely logged.</span>
                }
              </p>
              
              {/* Online Specific Success Details */}
              {bookingType === 'online' && selectedDate && selectedTime && (
                 <div className="inline-block bg-white px-10 py-6 rounded-2xl shadow-lg border border-earth-beige/40 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aura-gold to-vibrant-orange"></div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Appointment Confirmed</p>
                    <div className="flex flex-col items-center">
                        <p className="font-display text-3xl text-cosmic-blue mb-1">
                            {selectedDate} <span className="text-slate-600">{new Date().toLocaleString('default', { month: 'long' })}</span> {new Date().getFullYear()}
                        </p>
                        <div className="h-px w-12 bg-earth-beige/50 my-2"></div>
                        <p className="font-serif text-xl text-rich-crimson font-medium flex items-center gap-2">
                            <Clock size={18} /> {selectedTime}
                        </p>
                    </div>
                 </div>
              )}

              {/* Onsite Specific Success Details */}
              {bookingType === 'onsite' && (
                  <div className="bg-sacred-cream/50 p-8 rounded-2xl border border-earth-beige/30 mb-10 max-w-md mx-auto">
                      <p className="text-slate-700 font-serif mb-4">
                          Our master architects will review your property coordinates in <span className="font-bold">{formData.city}, {formData.country}</span>.
                      </p>
                      <p className="text-sm font-bold text-cosmic-blue uppercase tracking-wider">
                          Expect a call within 24 hours to finalize dates & investment.
                      </p>
                  </div>
              )}

              <div>
                  <Button onClick={onReturnHome} className="px-12 bg-cosmic-blue">Return to Sanctuary</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Consultation;
