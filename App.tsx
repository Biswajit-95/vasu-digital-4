
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
      shortDescription: "Vastu is the science and art of exploring human potential through built up environment.",
      fullDescription: `Vastu identifies the purpose of building and defines the planning and design of building to achieve the same. The Vedic study of impact of built-up environment on life is called Vastu- Shastra. Vastu means ‘suitable building for dwelling’ and Shastra means study. In contemporary usage vastu means designing or “correcting” buildings as per Vastu Shastra.

Vastu is a science of structures. All structures such as houses, industries, shops, business establishments, office complexes, schools, hospitals, and temples benefit from Vastu analysis.

Vastu dates back to the ancient Vedic times and it is possible that this science was carried to China by the ancient Buddhists.

In Vastu Wisdom, we grid the map of the place to ascertain exact locations of 32 entrances, 16 directions, 5 elements and 45 devtas. It impacts each individual in a completely different way. We need to balance and rectify according to the individual/personal need of a client depends on the profession they are in, problems they want to solve and the desires they want to fulfil.`,
      imageUrl: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1000"
    },
    {
      id: "s2",
      title: "Vedic Astrology",
      shortDescription: "Astrology is the study of patterns and relationships of planets in motion to find meaning.",
      fullDescription: `The premise of Astrology is that the planetary movements influence moments in time. Since we are part of the story of the Universe, our moment of birth recorded on the celestial clock is meaningful. Vedic astrology deals with astral light patterns that are thought to determine our destiny.

Astrology is the science of the effects of planetary movements on our lives. Just like in computers and phones, there is a basic ‘default’ setting by which they function; in the same way, you have also come with a default setting. The astrological setting is the default setting or programming of your subconscious mind. Things happen according to this; however, whosoever understands this programming can customize it.

For thousands of years, people continuously observed the movements of planets and events taking place on Earth; and arriving at astrological linkages and conclusions, recorded results. The sole purpose of astrology is to know the purpose of life, then to understand how to live in the correct manner and follow the right direction, so that this aim is fulfilled.`,
      imageUrl: "https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?q=80&w=1000"
    },
    {
      id: "s3",
      title: "Numerology",
      shortDescription: "Numerology uses numbers as a key to human behaviour to save energy.",
      fullDescription: `The purpose of working with numbers is to save energy. People who act without a proper understanding of the right moment to start a job, waste a lot of energy by making the wrong moves. Numerology provides the knowledge for such things as how to select the right moment, the right relationship, the right dwelling place-thereby saving energy.

It helps us to empower our name, signature, mobile number, e-mail address, bank accounts and brands. It also helps us to ensure effective and beneficial communication over the phone by deciding the right time to call, selecting the lucky number for your new car. The science of Numerology is meant to create an equilibrium with the universal equation (concerning all of creation) of goodness, well-being and luck.`,
      imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c629640d?q=80&w=1000"
    },
    {
      id: "s4",
      title: "Fengshui",
      shortDescription: "Harnessing the power of metaphysical philosophies to restore balanced flow of energy.",
      fullDescription: `Feng-Shui is a way of harnessing the power of several metaphysical philosophies and combining them scientifically to bring about very real changes. These changes can include attraction of wealth, increase in physical and emotional health and the cultivation of an overall sense of tranquility and well-being.

Feng-Shui literally means 'wind-water' and this reflect the fact that the primary aim of this ancient art is to restore a balanced flow of energy to your life and environment.

Fengshui is the permutation and combination of five elements in your dwelling space. Which colours you should use, which shapes and which type of metal one should use in different directions.

Placement of mirrors, plants and laughing Buddha/certain powerful Chinese symbols for relationship, health, wealth and happiness.`,
      imageUrl: "https://images.unsplash.com/photo-1523454749878-57755e14dc9a?q=80&w=1000"
    },
    {
      id: "s5",
      title: "Astro Vastu",
      shortDescription: "A powerful combination of Astrology and Vastu to focus energy on essentials.",
      fullDescription: `Astrology is directly connected to Vastushastra. In other words you can say that they both work hand in hand. Whatever positive or negative aspects you have in your birth chart, your house or work place/dwelling space will reflect it in terms of certain objects and activities in certain directions/zones.

It gives you immense power to change your astrological shortcomings with the help of placing certain things in certain directions or doing Vastu rectifications accordingly. These two powerful sciences when combines, creates a magical effect which helps you focus your energy on the most essential things in life and intensifies the rectification process.`,
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000"
    },
    {
      id: "s6",
      title: "Building Biology",
      shortDescription: "Holistic interaction between human beings and the built environment, addressing Geopathic Stress.",
      fullDescription: `Building Biology is the study of the holistic interaction between human beings and the built environment. The system of analysis was developed in Germany and France to gain knowledge of how buildings and materials affect people. For Vastu/Building Biology correction we eliminate the impact of environmental and under-ground stresses that cause aggression to the body-mind of the inhabitants.

These underground or under the earth stresses are also known as Geopathic Stress. Geopathic stress can be defined as a distorted or disrupted electromagnetic field of the Earth's primary frequency which is the Schumann Resonance / Waves.

The Earth resonates with an electromagnetic frequency of approximately 7.83 Hz - Schumann resonances (SR)*, which falls within the range of (alpha) human brainwaves. When we are in an alpha brainwave state we are usually in a highly suggestible or hypnotic/ meditative state. In that very relaxed state our subconscious mind is very open and our connection to the planet is most direct. If we are resonating with the Earth frequency in a non disrupted manner we are at peace and nourished by our planetary connectivity. If, however that frequency is disrupted disease of the body and mind can result.

Underground streams, sewers, water pipes, electricity, tunnels and underground railways, mineral formations and geological faults distort the natural resonance of the Earth thus creating geopathic stress (GS). Sleeping or spending a lot of time in geopathic stress zones can ill effects on our health, performance and wellbeing.

*Schumann Resonance: In 1952, a German physicist W.O. Schumann identified 7.83Hz as a frequency of the earth's magnetic field. 7.83Hz frequency falls within the range of natural human alpha brainwaves which is optimum state for well-being and healing.

If you can answer any of these questions in yes, you may consider having your home or your workplace checked for unhealthy earth energies:
* Do you have an illness that began shortly after moving into this house or work place?
* Do you feel better when you are away from home or work?
* Do any of your family members seem hyper, cranky or moody for no apparent reason?
* Did the previous occupant suffer from any serious illness?
* Do you always feel tired and everything is an effort?
* Do you have a weakened immune system, contract colds, flu, etc easily?
* Do you suffer any of the following: headaches, insomnia, back problems, problems with muscles, joints and bones, asthma, allergies, infertility and miscarriages?

Geopathic Stress has been found to be the common factor in most serious and long-term illnesses and psychological conditions. Scientists at Dulwich Health Society, USA, studied over 25,000 people with ill health and concluded that the following groups are Geopathically Stressed (GS):
100% of people who get SECONDARY CANCER.
95% of people who get CANCER were sleeping &/or working in a geopathically stressed place before or at the time the cancer was diagnosed.
95% of children, who are HYPERACTIVE, have LEARNING DISABILITIES or are DIFFICULT TO CONTROL.
80% of DIVORCES are by one or both partners being Geopathically Stressed.
80% of couples who CANNOT HAVE BABIES, one or both are Geopathically Stressed.
80% of women who have a miscarriage.
80% of babies who died of COT DEATH.

Geopathic Stress is the Earth's vibrations which rise up through the Earth and are distorted by weak electromagnetic fields created by underground running water, certain mineral concentrations, fault lines and underground cavities. The natural radiation, disturbed in this way becomes harmful to living organisms (including animals and plants).

Based on the logical interpretation of French and German analytical instruments, we successfully diagnose geopathic stress and vastu of your house and work place. Rectification process is without breaking a single brick or any major alteration.

When Vastu was developed, there was no electric pollution, no electromagnetic radiations, no mobile phones or towers and not so much under earth aggressions. With these factors in mind, we cannot only depend on age old theories, we need to open our mind to the usage of new analytical instruments in our Vastu consultations which can give us more accurate readings and guide us to live a healthy and happier life.

According to the Vastu Purush Mandala, different human body parts are related to the different directions of house or plot. In the same way different body parts represent different energy centres called Chakras. Every Chakra has a specific function to perform and has a particular behavioural pattern. If there is a Vastu defect in a certain direction of house, concerning body part will be affected and consequently concerning Chakra and its behavioural pattern will be affected too.

With the help of French and German analytical instruments, we measure the defective human energy meridians and shifts in the fields. We can measure the energies of different Chakras in a human body, environmental energies and Geopathic stress or under earth aggression. We then rectify the distorted energy fields above or below the earth which in turn upgrades and boost in human energy meridians as well.`,
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000"
    },
    {
      id: "s7",
      title: "Luck Principle",
      shortDescription: "Control and increase your luck through scientifically proven principles.",
      fullDescription: `People are not born lucky. Instead, lucky people are, without realising it, using certain principles to create good fortune in their lives.

A scientifically proven way to understand, control and increase your luck. Luck is not a magical ability or a gift from the Gods. Instead, it is a state of mind, -- a way of thinking and behaving. People are not born lucky and unlucky, but they create much of their own good and bad luck through their thoughts, feelings and actions.

People have searched for an effective way of improving the good fortune in their lives for many centuries.

In Vastuwisdom, we are using certain luck principles which can make anyone lucky. These principles were researched throughout the history by eminent writers, scientists, psychologists and philosophers.`,
      imageUrl: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000"
    },
    {
      id: "s8",
      title: "3-Minute Miracle",
      shortDescription: "Techniques to create instant effect in your life using the power of the subconscious.",
      fullDescription: `According to the problems our clients are facing or the desires/goals they want to fulfil, we guide them with the help of 3-minute miracle techniques, a system designed by us to be able to use the immeasurable power of your subconscious mind at your service. It comprises most powerful set of affirmations, visualisations, self-talk and meditations which are tailor made according to the need of the client.

The Three minute miracle system is a set of some most power- ful, potent and effective techniques which are designed to create instant effect in our physical, psychological or emotional aspect of personality.

'Three minutes packets of power,' that's the way we think of the more than one dozen 3 minute secrets we have developed in the decades since.

You take them, sprinkle them on your life throughout the day, and then step back and watch as amazing transformations take root and blossom-right before your eyes.

You would definitely like to invest just 3 minutes to:
....relax your body, mind and soul
....have a laser like focus back towards your most important goals
....be able to use the unlimited potential of your subconscious mind to achieve your wildest dream
......be able to change your negative mental state almost instantly
..... Influence the thoughts and behaviors of your colleagues, clients, even people you've just met so you get the outcomes YOU want
And most importantly, you will be able to live a passionate and fulfilled life.`,
      imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (page: PageView) => {
    if ((page === 'dashboard' || page === 'cart') && !user) {
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

          {/* LMS now handles its own locking logic, but needs user context */}
          {view === 'lms' && (
              <LMS 
                onBack={() => handleNavigate(user ? 'dashboard' : 'home')} 
                currency={detectedCurrency} 
                user={user} 
                onAddToCart={(course) => {
                  // MOCK ADDING COURSE TO CART
                  // Convert LMSCourse to DigitalProduct for cart compatibility
                  const courseProduct: DigitalProduct = {
                    id: course.id,
                    title: course.title,
                    description: course.description,
                    thumbnailUrl: course.thumbnailUri,
                    isPaid: true,
                    priceInINR: course.priceInINR,
                    priceInAED: course.priceInAED,
                    type: 'Course'
                  };
                  handleAddProductToCart(courseProduct);
                }}
              />
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
