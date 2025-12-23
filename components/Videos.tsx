import React from 'react';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  const videos = [
    {
      title: "The Science of Directions",
      desc: "Understanding the magnetic field of your home.",
      thumb: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Vastu for Wealth",
      desc: "Unlock the North zone for financial abundance.",
      thumb: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Bedroom Secrets",
      desc: "Sleep better by aligning with cosmic rhythm.",
      thumb: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-earth-beige/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-rich-crimson text-xs font-bold tracking-[0.3em] uppercase">Knowledge Base</span>
                <h2 className="font-display text-4xl text-cosmic-blue mt-2">Wisdom from the Source</h2>
            </div>
            <a href="#" className="hidden md:block text-aura-gold font-bold uppercase tracking-wider text-sm hover:text-rich-crimson transition-colors border-b border-aura-gold/30 pb-1">View All Videos</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((vid, i) => (
                <div key={i} className="group cursor-pointer">
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg mb-6">
                        <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-cosmic-blue/30 group-hover:bg-cosmic-blue/10 transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                                <Play fill="white" className="text-white ml-1" />
                            </div>
                        </div>
                    </div>
                    <h3 className="font-display text-xl text-cosmic-blue mb-2 group-hover:text-rich-crimson transition-colors">{vid.title}</h3>
                    <p className="font-serif text-mystic-indigo text-lg">{vid.desc}</p>
                </div>
            ))}
        </div>
         <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-aura-gold font-bold uppercase tracking-wider text-sm hover:text-rich-crimson transition-colors border-b border-aura-gold/30 pb-1">View All Videos</a>
         </div>
      </div>
    </section>
  );
};

export default Videos;