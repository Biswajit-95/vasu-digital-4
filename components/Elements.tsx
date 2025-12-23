import React from 'react';
import { Sun, Droplets, Wind, Mountain, Layers } from 'lucide-react';

const Elements: React.FC = () => {
  const elements = [
    { icon: Mountain, name: "Prithvi", label: "Earth", color: "text-emerald-700", border: "hover:border-emerald-500", bg: "hover:bg-emerald-50" },
    { icon: Droplets, name: "Jala", label: "Water", color: "text-blue-500", border: "hover:border-blue-400", bg: "hover:bg-blue-50" },
    { icon: Sun, name: "Agni", label: "Fire", color: "text-orange-500", border: "hover:border-orange-400", bg: "hover:bg-orange-50" },
    { icon: Wind, name: "Vayu", label: "Air", color: "text-sky-400", border: "hover:border-sky-300", bg: "hover:bg-sky-50" },
    { icon: Layers, name: "Akasha", label: "Space", color: "text-indigo-500", border: "hover:border-indigo-400", bg: "hover:bg-indigo-50" },
  ];

  return (
    <section className="py-16 bg-white border-y border-earth-beige/30">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
                <span className="text-rich-crimson text-xs font-bold tracking-[0.3em] uppercase">Pancha Bhoota</span>
                <h3 className="font-serif text-2xl text-cosmic-blue mt-2 font-medium">The Five Pillars of Existence</h3>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-around gap-8">
                {elements.map((el, idx) => (
                    <div key={idx} className="group flex flex-col items-center cursor-pointer transition-all duration-300">
                        <div className={`w-20 h-20 rounded-full border border-earth-beige flex items-center justify-center mb-4 transition-all duration-300 ${el.border} ${el.bg} group-hover:scale-110 shadow-sm`}>
                            <el.icon className={`w-8 h-8 text-mystic-indigo ${el.color} transition-colors`} />
                        </div>
                        <span className="font-display text-lg text-cosmic-blue">{el.name}</span>
                        <span className="text-xs uppercase tracking-widest text-mystic-indigo/80 font-bold">{el.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Elements;