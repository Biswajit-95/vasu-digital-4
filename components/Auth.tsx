
import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import { ArrowLeft, CheckCircle2, ShieldCheck, Star, Sparkles, MoveRight } from 'lucide-react';
import { AuthView } from '../types';

interface AuthProps {
  initialView?: AuthView;
  onNavigateHome: () => void;
  onLoginSuccess: () => void;
}

type AuthStep = 'login' | 'signup' | 'otp' | 'forgot-password' | 'reset-password';

const Auth: React.FC<AuthProps> = ({ initialView = 'login', onNavigateHome, onLoginSuccess }) => {
  const [step, setStep] = useState<AuthStep>(initialView);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Context State (to remember email between steps)
  const [flowContext, setFlowContext] = useState<'signup' | 'reset' | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (pass: string) => pass.length >= 8;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  // --- ACTIONS ---

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.password) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!validatePassword(formData.password)) newErrors.password = "Password must be at least 8 characters.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFlowContext('signup');
      setStep('otp');
    }, 1500);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFlowContext('reset');
      setStep('otp');
    }, 1500);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.otp.length < 4) {
      setErrors({ otp: "Please enter a valid 4-digit OTP." });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (flowContext === 'signup') {
        onLoginSuccess();
      } else if (flowContext === 'reset') {
        setStep('reset-password');
      }
    }, 1500);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validatePassword(formData.password)) newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('login');
    }, 1500);
  };

  // --- RENDER HELPERS ---

  const renderBackBtn = (target: AuthStep) => (
    <button 
      onClick={() => setStep(target)}
      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-rich-crimson transition-colors mb-8 group"
    >
      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
    </button>
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-sacred-cream relative p-4 md:p-8">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(#DCCEB8 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      
      {/* Main Card Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-white relative z-10">
        
        {/* --- LEFT PANEL: The Portal (Visuals) --- */}
        <div className="hidden md:flex w-5/12 bg-cosmic-blue relative overflow-hidden flex-col justify-between p-12 text-white">
            
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-gold/10 rounded-full blur-[80px]"></div>
                {/* Rotating Yantra */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 animate-spin-slow">
                    <svg viewBox="0 0 500 500" className="w-[500px] h-[500px] fill-none stroke-white" strokeWidth="1">
                        <circle cx="250" cy="250" r="200" />
                        <circle cx="250" cy="250" r="180" strokeDasharray="4 4" />
                        <polygon points="250,50 423,350 77,350" />
                        <polygon points="250,450 423,150 77,150" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <button 
                  onClick={onNavigateHome}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aura-gold hover:text-white transition-colors mb-12"
                >
                  <ArrowLeft size={14} /> Back to Home
                </button>

                <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-aura-gold backdrop-blur-md mb-6">
                        <Sparkles size={10} /> Wisdom of Vastu
                    </span>
                    <h2 className="font-display text-4xl leading-tight text-white mb-6">
                        "The universe speaks in frequencies. Your home is its antenna."
                    </h2>
                    <p className="font-serif text-white/90 text-lg font-normal leading-relaxed">
                        Join 10,000+ conscious homeowners aligning their space with the cosmic blueprint.
                    </p>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="relative z-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-cosmic-blue bg-gray-200"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-cosmic-blue bg-gray-300"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-cosmic-blue bg-gray-400"></div>
                    </div>
                    <div>
                        <div className="flex items-center gap-1 text-aura-gold mb-1">
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                        </div>
                        <p className="text-xs text-white/60">Trusted by community</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- RIGHT PANEL: The Ritual (Form) --- */}
        <div className="flex-1 bg-white relative p-8 md:p-16 flex flex-col justify-center">
          
            {/* Mobile Home Button */}
            <button 
              onClick={onNavigateHome}
              className="md:hidden absolute top-6 left-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-rich-crimson transition-colors"
            >
              <ArrowLeft size={14} /> Home
            </button>

            {/* Form Content */}
            <div className="max-w-sm mx-auto w-full">
                
                {/* --- LOGIN VIEW --- */}
                {step === 'login' && (
                    <form onSubmit={handleLogin} className="animate-fade-in space-y-8">
                        <div>
                            <h3 className="font-display text-3xl text-cosmic-blue mb-2">Welcome Back</h3>
                            <p className="text-slate-600">Enter your credentials to access your dashboard.</p>
                        </div>
                        
                        <div className="space-y-5">
                            <Input 
                                label="Email" 
                                name="email" 
                                type="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                error={errors.email}
                                placeholder="name@example.com"
                            />
                            <div className="space-y-2">
                                <Input 
                                    label="Password" 
                                    name="password" 
                                    type="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    error={errors.password}
                                    placeholder="••••••••"
                                />
                                <div className="flex justify-end">
                                    <button type="button" onClick={() => setStep('forgot-password')} className="text-xs text-rich-crimson hover:text-vibrant-orange font-bold tracking-wide transition-colors">
                                        FORGOT PASSWORD?
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Button type="submit" disabled={isLoading} className="w-full py-4 text-sm bg-cosmic-blue hover:bg-vibrant-orange shadow-xl hover:shadow-2xl">
                                {isLoading ? (
                                    <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Validating...</span>
                                ) : 'Login to Account'}
                            </Button>
                            
                            <div className="relative text-center">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                                <span className="relative px-4 bg-white text-xs text-gray-400 font-medium">New to Digital Vastu?</span>
                            </div>

                            <button 
                                type="button" 
                                onClick={() => setStep('signup')} 
                                className="w-full py-4 rounded-lg border border-earth-beige text-cosmic-blue font-display text-sm font-bold uppercase tracking-wider hover:border-aura-gold hover:text-rich-crimson transition-all"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                )}

                {/* --- SIGN UP VIEW --- */}
                {step === 'signup' && (
                    <form onSubmit={handleSignUp} className="animate-fade-in space-y-8">
                        <div>
                            <h3 className="font-display text-3xl text-cosmic-blue mb-2">Begin Journey</h3>
                            <p className="text-slate-600">Create your profile to get your energy score.</p>
                        </div>

                        <div className="space-y-4">
                            <Input 
                                label="Full Name" 
                                name="fullName" 
                                type="text" 
                                value={formData.fullName} 
                                onChange={handleChange} 
                                error={errors.fullName}
                                placeholder="e.g. John Doe"
                            />
                            <Input 
                                label="Email" 
                                name="email" 
                                type="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                error={errors.email}
                                placeholder="name@example.com"
                            />
                            <Input 
                                label="Password" 
                                name="password" 
                                type="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                error={errors.password}
                                placeholder="Min 8 chars"
                            />
                        </div>

                        <div className="space-y-6">
                            <Button type="submit" disabled={isLoading} className="w-full py-4 bg-aura-gold text-cosmic-blue hover:bg-rich-crimson hover:text-white border-none shadow-xl">
                                {isLoading ? 'Creating...' : 'Continue'}
                            </Button>

                            <p className="text-center text-sm text-slate-500">
                                Already have an account?{' '}
                                <button type="button" onClick={() => setStep('login')} className="font-bold text-cosmic-blue hover:text-rich-crimson transition-colors border-b border-cosmic-blue/20 hover:border-rich-crimson pb-0.5">
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                )}

                {/* --- OTP VIEW --- */}
                {step === 'otp' && (
                    <form onSubmit={handleVerifyOTP} className="animate-fade-in space-y-8">
                        <button 
                            type="button"
                            onClick={() => setStep(flowContext === 'signup' ? 'signup' : 'forgot-password')}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-rich-crimson transition-colors group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Wrong Email?
                        </button>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-aura-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-aura-gold">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-display text-2xl text-cosmic-blue mb-2">Verify Identity</h3>
                            <p className="text-slate-600 text-sm">
                                We sent a 4-digit code to <br/><span className="font-bold text-cosmic-blue">{formData.email}</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Input 
                                label="One Time Password" 
                                name="otp" 
                                type="text" 
                                value={formData.otp} 
                                onChange={handleChange} 
                                error={errors.otp}
                                placeholder="0 0 0 0"
                                className="text-center tracking-[0.5em] text-2xl font-bold py-4"
                                maxLength={6}
                                autoFocus
                            />

                            <Button type="submit" disabled={isLoading} className="w-full py-4 bg-cosmic-blue hover:bg-vibrant-orange">
                                {isLoading ? 'Verifying...' : 'Verify & Proceed'}
                            </Button>

                            <p className="text-center text-xs text-slate-500">
                                Didn't receive code? <button type="button" className="text-rich-crimson font-bold hover:underline">Resend</button>
                            </p>
                        </div>
                    </form>
                )}

                 {/* --- FORGOT PASSWORD VIEW --- */}
                 {step === 'forgot-password' && (
                    <form onSubmit={handleForgotPassword} className="animate-fade-in space-y-8">
                        {renderBackBtn('login')}
                        
                        <div>
                            <h3 className="font-display text-2xl text-cosmic-blue mb-2">Reset Password</h3>
                            <p className="text-slate-600 text-sm">
                                Enter your email address and we'll send you a code to reset your password.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Input 
                                label="Email Address" 
                                name="email" 
                                type="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                error={errors.email}
                                placeholder="name@example.com"
                            />

                            <Button type="submit" disabled={isLoading} className="w-full py-4 bg-cosmic-blue hover:bg-vibrant-orange group">
                                <span className="flex items-center gap-2">
                                    {isLoading ? 'Sending...' : 'Send Recovery Code'} 
                                    {!isLoading && <MoveRight size={16} className="group-hover:translate-x-1 transition-transform"/>}
                                </span>
                            </Button>
                        </div>
                    </form>
                 )}

                {/* --- RESET PASSWORD VIEW --- */}
                {step === 'reset-password' && (
                    <form onSubmit={handleResetPassword} className="animate-fade-in space-y-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-emerald-100">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="font-display text-2xl text-cosmic-blue mb-2">New Password</h3>
                            <p className="text-slate-600 text-sm">
                                Create a strong password to secure your account.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Input 
                                label="New Password" 
                                name="password" 
                                type="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                error={errors.password}
                                placeholder="Min 8 chars"
                            />
                            <Input 
                                label="Confirm Password" 
                                name="confirmPassword" 
                                type="password" 
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                error={errors.confirmPassword}
                                placeholder="Repeat password"
                            />
                        </div>
                        
                        <Button type="submit" disabled={isLoading} className="w-full py-4 bg-aura-gold text-cosmic-blue hover:bg-rich-crimson hover:text-white border-none shadow-lg">
                            {isLoading ? 'Updating...' : 'Update Password'}
                        </Button>
                    </form>
                )}

            </div>
        </div>

      </div>
    </section>
  );
};

export default Auth;
