import React, { useState } from 'react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Aditi Rao',
      role: 'Architect, Bangalore',
      quote: "Digital Vastu's approach is pure science. They identified a flaw in the North-East corner that was causing stagnation. The correction was subtle, but the impact on my career was massive.",
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: '2',
      name: 'Rajesh Malhotra',
      role: 'CEO, TechFlow',
      quote: "I was skeptical about 'energy' until I saw their analysis. They mapped my office layout to the degree. We moved the accounts department to the North, and cash flow stabilized within months.",
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        
      {/* Sacred Geometry Background - Faint Mandala Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 flex items-center justify-center pointer-events-none">
         <img src="https://img.freepik.com/premium-vector/sri-yantra-sacred-geometry-pattern_106317-1906.jpg?w=1060" className="w-[100vw] max-w-none opacity-20 mix-blend-multiply grayscale" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <Quote size={60} className="text-aura-gold/20 mx-auto mb-8" />
        
        <div className="min-h-[250px] flex flex-col justify-center animate-fade-in">
            <p className="font-serif text-2xl md:text-4xl text-cosmic-blue leading-tight mb-10 font-medium">
                "{testimonials[currentIndex].quote}"
            </p>
            
            <div>
                <h4 className="font-display text-xl text-rich-crimson mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-xs font-bold tracking-widest text-mystic-indigo uppercase">{testimonials[currentIndex].role}</p>
            </div>
        </div>

        <div className="flex justify-center space-x-4 mt-12">
                <button onClick={prev} className="p-3 rounded-full border border-earth-beige hover:border-aura-gold hover:bg-aura-gold hover:text-white transition-all">
                <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-earth-beige hover:border-aura-gold hover:bg-aura-gold hover:text-white transition-all">
                <ChevronRight size={24} />
            </button>
        </div>

      </div>
      
      {/* Decorative Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-earth-beige to-transparent opacity-50"></div>
    </section>
  );
};

export default Testimonials;