
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Guru from './components/Guru';
import Elements from './components/Elements';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Holistic from './components/Holistic';
import Videos from './components/Videos';
import Auth from './components/Auth';
import Consultation from './components/Consultation';
import Dashboard from './components/Dashboard';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import FAQ from './components/FAQ';
import LMS from './components/LMS';
import HomeContactCTA from './components/HomeContactCTA';
import ServicesPage from './components/ServicesPage';
import ServiceDetail from './components/ServiceDetail';
import Preloader from './components/Preloader';
import { AuthView, PageView, User, DigitalProduct, CartItem, PricingPlan, ConsultationResumeData, ServiceArticle } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<PageView>('home');
  const [authView, setAuthView] = useState<AuthView>('login');
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [detectedCurrency, setDetectedCurrency] = useState<'INR' | 'AED'>('INR');
  const [selectedServiceArticle, setSelectedServiceArticle] = useState<ServiceArticle | null>(null);
  
  // State to hold data when resuming a consultation from the cart
  const [consultationResumeData, setConsultationResumeData] = useState<ConsultationResumeData | null>(null);

  // Initial Load Effect
  useEffect(() => {
    // Simulate loading/alignment time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8 seconds for a premium feel

    return () => clearTimeout(timer);
  }, []);

  // Automatic Currency Detection based on IP
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code === 'AE') {
          setDetectedCurrency('AED');
        } else {
          setDetectedCurrency('INR');
        }
      } catch (error) {
        console.error("Currency detection failed, defaulting to INR:", error);
        setDetectedCurrency('INR');
      }
    };
    detectLocation();
  }, []);

  const PRODUCTS: DigitalProduct[] = [
    {
        id: "d0015100-b946-4d43-988d-8fadf4f594f1",
        title: "The signs of directions",
        description: "The signs of direction and their effect in our day to day life. Understanding how cosmic coordinates shape your existence.",
        fileUrl: "https://youtu.be/GAbQlAgKONc?si=QBQat8BUCeeOjVOE",
        thumbnailUrl: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=600",
        previewUrl: "https://youtu.be/GAbQlAgKONc?si=QBQat8BUCeeOjVOE",
        isPaid: true,
        priceInINR: 10000,
        priceInAED: 450,
        currency: "INR"
    },
    {
        id: "d0015100-b946-4d43-988d-8fadf4f594f2",
        title: "Kubera Zone Activation",
        description: "Unlock financial blockages by energizing the North sector of your home. Includes detailed placement rituals.",
        fileUrl: "https://youtu.be/GAbQlAgKONc?si=QBQat8BUCeeOjVOE",
        thumbnailUrl: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=600",
        previewUrl: "https://youtu.be/GAbQlAgKONc?si=QBQat8BUCeeOjVOE",
        isPaid: true,
        priceInINR: 25000,
        priceInAED: 1100,
        currency: "INR"
    },
    {
        id: "d0015100-b946-4d43-988d-8fadf4f594f3",
        title: "Bedroom Harmony Guide",
        description: "Sleep like a sage. Immediate remedies for insomnia, anxiety, and relationship stress through bed alignment.",
        fileUrl: "https://youtu.be/GAbQlAgKONc?si=QBQat8BUCeeOjVOE",
        thumbnailUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600",
        previewUrl: "https://youtu.be/GAbQlAgKONc?si=QBQat8BUCeeOjVOE",
        isPaid: false,
        priceInINR: 0,
        priceInAED: 0,
        currency: "INR"
    }
  ];

  const SERVICE_ARTICLES: ServiceArticle[] = [
    {
      id: "s1",
      title: "Vedic Vastu",
      shortDescription: "Traditional Science of Architecture.",
      imageUrl: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1000"
    },
    {
      id: "s2",
      title: "Vedic Astrology",
      shortDescription: "Stars and Planets have a powerful influence on our lives.",
      imageUrl: "https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?q=80&w=1000"
    },
    {
      id: "s3",
      title: "Numerology",
      shortDescription: "Numbers as a key to human behaviour.",
      imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c629640d?q=80&w=1000"
    },
    {
      id: "s4",
      title: "Fengshui",
      shortDescription: "Solutions of five elements in your dwelling space.",
      imageUrl: "https://images.unsplash.com/photo-1523454749878-57755e14dc9a?q=80&w=1000"
    },
    {
      id: "s5",
      title: "Astro Vastu",
      shortDescription: "A combination of Astrology and Vastu.",
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000"
    },
    {
      id: "s6",
      title: "Building Biology",
      shortDescription: "Holistic interaction between human beings and the built environment.",
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000"
    },
    {
      id: "s7",
      title: "Luck Principle",
      shortDescription: "Control and increase your luck.",
      imageUrl: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000"
    },
    {
      id: "s8",
      title: "3-Minute Miracle",
      shortDescription: "Create instant effect in your life.",
      imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (page: PageView) => {
    if ((page === 'dashboard' || page === 'lms' || page === 'cart') && !user) {
      setAuthView('login');
      setView('auth');
      return;
    }
    // If navigating to consultation manually (not resume), clear resume data
    if (page === 'consultation') {
        setConsultationResumeData(null);
    }
    setView(page);
  };

  const handleAuthNavigate = (initialView: AuthView) => {
    setAuthView(initialView);
    setView('auth');
  };

  const handleLoginSuccess = (userData?: User) => {
    setUser(userData || { id: 'U1', fullName: 'Acharya Guest', email: 'guest@vastu.com' });
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setView('home');
    setCart([]);
  };

  // Handler for adding Digital Products
  const handleAddProductToCart = (product: DigitalProduct) => {
    if (!user) {
      setAuthView('login');
      setView('auth');
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.type === 'product' && item.product?.id === product.id);
      if (existing) {
        return prev.map(item => (item.type === 'product' && item.product?.id === product.id) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { id: `cart-${Date.now()}`, type: 'product', product, quantity: 1 }];
    });
    setView('cart');
  };

  // Handler for adding Consultation Packages
  const handleAddConsultationToCart = (plan: PricingPlan, bookingType: 'online' | 'onsite') => {
    if (!user) {
       // Optional: could force login here
    }

    setCart(prev => {
        const existingIndex = prev.findIndex(item => item.type === 'consultation' && item.consultation?.plan.id === plan.id);
        
        if (existingIndex >= 0) {
            return prev;
        }

        return [...prev, {
            id: `consult-${Date.now()}`,
            type: 'consultation',
            consultation: { plan, bookingType },
            quantity: 1
        }];
    });
  };

  // Handler to resume consultation from Cart
  const handleResumeConsultation = (plan: PricingPlan, bookingType: 'online' | 'onsite') => {
      setConsultationResumeData({ plan, bookingType });
      setView('consultation');
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id && item.product?.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
        if (item.type === 'product' && item.product?.id === id) {
            const newQty = Math.max(1, item.quantity + delta);
            return { ...item, quantity: newQty };
        }
        return item;
    }));
  };

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setView('product-detail');
  };

  const handleServiceSelect = (service: ServiceArticle) => {
    setSelectedServiceArticle(service);
    setView('service-detail');
  };

  const selectedProduct = selectedProductId ? PRODUCTS.find(p => p.id === selectedProductId) : null;

  return (
    <div className="relative">
      {/* Universal Preloader - Fades out when loading is done */}
      <Preloader className={`transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Main App Content - Hidden while loading to prevent flash of content, or you can let it sit behind */}
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar 
          onNavigate={handleNavigate} 
          onAuthNavigate={handleAuthNavigate} 
          currentView={view} 
          user={user}
          onLogout={handleLogout}
          cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        />
        
        <main>
          {view === 'home' && (
            <>
              <Hero />
              <Guru />
              <Holistic />
              <Elements />
              <Process />
              <Services onServiceClick={(target) => handleNavigate(target)} />
              <Videos />
              <Testimonials />
              <HomeContactCTA onContactClick={() => handleNavigate('contact')} />
            </>
          )}

          {view === 'services' && (
            <ServicesPage 
              services={SERVICE_ARTICLES} 
              onSelectService={handleServiceSelect} 
            />
          )}

          {view === 'service-detail' && selectedServiceArticle && (
            <ServiceDetail 
              service={selectedServiceArticle}
              allServices={SERVICE_ARTICLES}
              onBack={() => setView('services')}
              onNavigateToService={handleServiceSelect}
              onNavigateToContact={() => setView('contact')}
              onNavigateToConsult={() => setView('consultation')}
            />
          )}

          {view === 'consultation' && (
              <Consultation 
                user={user} 
                onAuthRequired={() => handleAuthNavigate('login')} 
                currency={detectedCurrency}
                onReturnHome={() => setView('home')}
                onAddToCart={handleAddConsultationToCart}
                resumeData={consultationResumeData}
              />
          )}

          {view === 'contact' && (
              <Contact />
          )}

          {view === 'dashboard' && user && (
              <Dashboard user={user} onNavigate={handleNavigate} currency={detectedCurrency} />
          )}

          {view === 'shop' && (
              <Shop 
                products={PRODUCTS}
                onProductClick={handleProductSelect} 
                onAddToCart={handleAddProductToCart}
                currency={detectedCurrency}
                onNavigate={handleNavigate}
              />
          )}

          {view === 'product-detail' && selectedProduct && (
              <ProductDetail 
                product={selectedProduct} 
                onBack={() => setView('shop')} 
                onAddToCart={handleAddProductToCart}
                currency={detectedCurrency}
              />
          )}

          {view === 'cart' && user && (
              <Cart 
                items={cart} 
                onRemove={handleRemoveFromCart} 
                onUpdateQuantity={handleUpdateQuantity}
                onBack={() => setView('shop')}
                currency={detectedCurrency}
                onResumeConsultation={handleResumeConsultation}
              />
          )}

          {view === 'faq' && (
              <FAQ />
          )}

          {view === 'lms' && user && (
              <LMS onBack={() => handleNavigate('dashboard')} currency={detectedCurrency} />
          )}

          {view === 'auth' && (
            <Auth 
              initialView={authView} 
              onNavigateHome={() => setView('home')} 
              onLoginSuccess={handleLoginSuccess}
            />
          )}
        </main>
        
        {(view !== 'auth' && view !== 'lms') && <Footer onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default App;
