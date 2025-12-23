
import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, ArrowLeft, BookOpen, Clock, FileText, ChevronDown, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import Button from './ui/Button';
import { LMSCourse, Subtopic, Topic } from '../types';

interface LMSProps {
  onBack: () => void;
  currency: 'INR' | 'AED';
}

// --- DATA SOURCE (Strictly based on provided object) ---
const MY_COURSES: LMSCourse[] = [
  {
    id: "2fa9de85-c168-48b3-9e50-bdf56d38869b",
    title: "Vastu & Astrology: Designing Spaces Aligned With Cosmic Energy",
    slug: null,
    description: "Learn the ancient science of Vastu Shastra combined with Vedic Astrology to create homes, offices, and environments that attract prosperity, health, and harmony. This course blends traditional wisdom with practical modern-day applications.",
    priceInINR: 2299,
    priceInAED: 105,
    thumbnailUri: "https://plus.unsplash.com/premium_photo-1701068457053-d21ad8f94a1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPublished: false,
    createdAt: "2025-12-09T11:23:14.162Z",
    updatedAt: "2025-12-19T08:07:58.355Z",
    category: {
      id: "6b00556c-2725-4005-bada-ad760dfc4af2",
      name: "Vastu Home",
      slug: null,
      description: "Vastu hom",
      createdAt: "2025-12-01T07:40:36.560Z",
      updatedAt: "2025-12-01T07:40:36.560Z",
    },
    stats: {
      purchases: 0,
    },
    topics: [
      {
        id: "7a6c9f77-175a-4f72-9e00-6ae504dd676a",
        title: "Foundations of Vastu Shastra",
        description: "Understand the origins, principles, and core concepts of Vastu Shastra and how energy flows within a space.",
        createdAt: "2025-12-09T11:27:14.198Z",
        updatedAt: "2025-12-19T08:05:10.786Z",
        subtopics: [
          {
            id: "72894eef-bfd3-4080-8238-f541bc4c215d",
            title: "Introduction to Vastu Shastra",
            description: "An overview of Vastu Shastra, its history, relevance, and importance in daily life.",
            youtubeLink: "https://www.youtube.com/watch?v=abcd1234", // Mock ID from prompt
            docUrl: "https://example.com/docs/introduction-to-vastu.pdf",
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:06:07.207Z",
            updatedAt: "2025-12-19T08:06:07.207Z",
          },
          {
            id: "c69bf045-d7d9-4072-9f7d-842d2c8e97d3",
            title: "The Five Elements (Pancha Mahabhutas)",
            description: "Learn how Earth, Water, Fire, Air, and Space influence energy balance in a structure.",
            youtubeLink: "https://www.youtube.com/watch?v=efgh5678",
            docUrl: "https://example.com/docs/pancha-mahabhutas.pdf",
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:08:48.978Z",
            updatedAt: "2025-12-19T08:08:48.978Z",
          },
        ],
      },
      {
        id: "20a94b4f-ac78-4e2a-8df0-160f7660a145",
        title: "Directional Science & Energy Zones",
        description: "Explore the significance of directions and how different zones impact various aspects of life.",
        createdAt: "2025-12-19T08:09:16.767Z",
        updatedAt: "2025-12-19T08:09:16.767Z",
        subtopics: [
          {
            id: "fd5240b5-8efa-418c-9204-f2c49ef7b159",
            title: "Importance of the Eight Directions",
            description: "Understand North, South, East, West and their intercardinal directions in Vastu.",
            youtubeLink: "https://www.youtube.com/watch?v=ijkl9012",
            docUrl: null,
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:10:00.807Z",
            updatedAt: "2025-12-19T08:10:00.807Z",
          },
          {
            id: "d68c270b-8d9e-44a9-9354-eb7f3ef6ed16",
            title: "Brahmasthan & Energy Flow",
            description: "Learn about the central zone of a building and its role in maintaining harmony.",
            youtubeLink: "https://www.youtube.com/watch?v=mnop3456",
            docUrl: null,
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:10:32.548Z",
            updatedAt: "2025-12-19T08:10:32.548Z",
          },
        ],
      },
      {
        id: "ddec2dcf-f09c-4c97-84f8-ae2826eaa9fc",
        title: "Basics of Vedic Astrology for Vastu",
        description: "Understand how astrology and planetary energies influence spaces and structures.",
        createdAt: "2025-12-19T08:11:00.543Z",
        updatedAt: "2025-12-19T08:11:00.543Z",
        subtopics: [
          {
            id: "f79d1dae-78f0-4e20-9667-a5cbf224c414",
            title: "Planets and Their Directional Influence",
            description: "Learn how each planet governs specific directions and areas of life.",
            youtubeLink: "https://www.youtube.com/watch?v=qrst7890",
            docUrl: "https://example.com/docs/planets-and-directions.pdf",
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:11:40.295Z",
            updatedAt: "2025-12-19T08:11:40.295Z",
          },
          {
            id: "7f08b803-3323-41d5-9733-97391944e189",
            title: "Nakshatras & Muhurta in Construction",
            description: "Understand the role of nakshatras and auspicious timings in building and renovation.",
            youtubeLink: "https://www.youtube.com/watch?v=uvwx1122",
            docUrl: null,
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:12:12.006Z",
            updatedAt: "2025-12-19T08:12:12.006Z",
          },
        ],
      },
    ],
  }
];

// --- HELPERS ---

// Helper to calculate progress percentage based on 'watched' boolean in subtopics
const calculateProgress = (course: LMSCourse) => {
  let total = 0;
  let completed = 0;
  course.topics.forEach(t => {
    t.subtopics.forEach(s => {
      total++;
      if (s.watched) completed++;
    });
  });
  return total === 0 ? 0 : Math.round((completed / total) * 100);
};

// Helper to convert provided URLs to Embed URLs without strict validation
const getEmbedUrl = (url: string | null) => {
  if (!url) return null;
  
  // Directly handle the "watch?v=" format used in the provided mock object
  if (url.includes("watch?v=")) {
    // Replace watch?v= with embed/ to make it iframe compatible
    // Also remove any extra query parameters if present
    const cleanUrl = url.split('&')[0]; 
    return cleanUrl.replace("watch?v=", "embed/");
  }
  
  // Handle youtu.be format if present
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // If it's already an embed link or something else, return as is
  return url;
};

// --- VIEW 1: COURSE LIBRARY ---
const CourseLibrary: React.FC<{ courses: LMSCourse[]; onSelect: (c: LMSCourse) => void; currency: 'INR' | 'AED' }> = ({ courses, onSelect, currency }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
            <h1 className="font-display text-4xl text-cosmic-blue mb-4">My Sacred Path</h1>
            <p className="font-serif text-xl text-slate-700 font-normal">Your purchased wisdom and certifications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => {
                const progress = calculateProgress(course);
                const totalLessons = course.topics.reduce((acc, topic) => acc + topic.subtopics.length, 0);
                
                // Select price based on currency without conversion
                const displayPrice = currency === 'INR' 
                  ? `₹${course.priceInINR.toLocaleString()}`
                  : `${course.priceInAED.toLocaleString()} AED`;

                return (
                    <div key={course.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-earth-beige/30 hover:shadow-2xl hover:border-aura-gold/50 transition-all duration-300 flex flex-col h-full">
                        {/* Thumbnail */}
                        <div className="h-56 overflow-hidden relative bg-gray-100">
                            <img src={course.thumbnailUri} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-cosmic-blue/10 group-hover:bg-cosmic-blue/0 transition-colors"></div>
                            
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-cosmic-blue shadow-sm">
                                {course.category.name}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="font-display text-xl text-cosmic-blue mb-2 line-clamp-2 leading-tight group-hover:text-vibrant-orange transition-colors">
                                {course.title}
                            </h3>
                            
                            {/* Price Display */}
                            <div className="text-lg font-bold text-rich-crimson mb-3 font-serif">
                                {displayPrice}
                            </div>

                            <p className="font-serif text-slate-600 text-base line-clamp-3 mb-6 leading-relaxed flex-grow">
                                {course.description}
                            </p>

                            {/* Progress Section */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Progress</span>
                                    <span className="font-bold text-cosmic-blue text-sm">{progress}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-sacred-cream rounded-full overflow-hidden mb-6">
                                    <div className="h-full bg-gradient-to-r from-aura-gold to-vibrant-orange transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                        <BookOpen size={14} /> {totalLessons} Lessons
                                    </span>
                                    <Button onClick={() => onSelect(course)} size="sm" className="shadow-md">
                                        {progress > 0 ? 'Continue' : 'Start Learning'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

// --- VIEW 2: COURSE PLAYER ---
const CoursePlayer: React.FC<{ course: LMSCourse; onBack: () => void }> = ({ course, onBack }) => {
  // Use state to track which accordion item is open
  const [activeTopicId, setActiveTopicId] = useState<string>(course.topics[0]?.id || "");
  
  // Use state to track the currently playing subtopic
  const [activeSubtopic, setActiveSubtopic] = useState<Subtopic | null>(
    course.topics[0]?.subtopics[0] || null
  );

  if (!activeSubtopic) return <div className="p-12 text-center pt-32">Course content not found.</div>;

  const embedUrl = getEmbedUrl(activeSubtopic.youtubeLink);

  return (
    <div className="min-h-screen bg-background pt-32"> {/* Increased top padding to clear navbar */}
        
        {/* Sticky Header - Adjusted top position to sit below main Navbar */}
        <div className="bg-white border-b border-earth-beige/30 sticky top-24 z-30 shadow-sm transition-all duration-300">
            <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-sacred-cream rounded-full transition-colors text-slate-600" title="Back to Library">
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h2 className="font-display text-lg md:text-xl text-cosmic-blue truncate max-w-[200px] md:max-w-md">
                            {course.title}
                        </h2>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden md:block">
                            {course.category.name}
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-cosmic-blue bg-sacred-cream px-3 py-1.5 rounded-lg border border-earth-beige/20">
                       <CheckCircle2 size={14} className="text-emerald-500" />
                       <span>{calculateProgress(course)}% Complete</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Player Layout */}
        <div className="max-w-[1600px] mx-auto px-0 md:px-6 lg:px-12 py-0 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-8 lg:gap-10">
                
                {/* LEFT: Video Player & Details */}
                <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
                    
                    {/* 16:9 Video Container */}
                    <div className="aspect-video bg-black w-full md:rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                        {embedUrl ? (
                             <iframe 
                                className="w-full h-full"
                                src={embedUrl}
                                title={activeSubtopic.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-white/50 bg-cosmic-blue">
                                <Play size={48} className="mb-4 opacity-50" />
                                <p>Video source not available for this lesson.</p>
                            </div>
                        )}
                    </div>

                    {/* Lesson Text Content */}
                    <div className="px-6 md:px-0 pb-12 md:pb-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 border-b border-earth-beige/30 pb-6">
                            <div>
                                <h1 className="font-display text-2xl md:text-3xl text-cosmic-blue mb-2">{activeSubtopic.title}</h1>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                   {activeSubtopic.duration ? `Duration: ${activeSubtopic.duration} • ` : ''} 
                                   Posted: {new Date(activeSubtopic.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            
                            {/* Resource Download if available */}
                            {activeSubtopic.docUrl && (
                                <a 
                                    href={activeSubtopic.docUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-3 bg-sacred-cream hover:bg-aura-gold hover:text-white rounded-xl text-cosmic-blue transition-all text-sm font-bold shadow-sm group"
                                >
                                    <FileText size={16} /> Download PDF
                                </a>
                            )}
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-earth-beige/20 shadow-sm">
                            <h3 className="font-serif text-xl text-cosmic-blue italic mb-4">Description</h3>
                            <p className="font-sans text-slate-700 leading-relaxed text-base font-normal">
                                {activeSubtopic.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Curriculum Accordion */}
                <div className="lg:col-span-4">
                    <div className="bg-white md:rounded-[2rem] shadow-xl border border-earth-beige/30 overflow-hidden sticky top-44"> {/* Adjusted sticky top */}
                        <div className="bg-cosmic-blue p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-display text-lg">Curriculum</h3>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                                    {course.topics.length} Modules
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-aura-gold">
                                <BookOpen size={16} />
                            </div>
                        </div>

                        {/* Topics List */}
                        <div className="overflow-y-auto max-h-[600px] custom-scrollbar bg-sacred-cream/20">
                            {course.topics.map((topic, index) => (
                                <div key={topic.id} className="border-b border-earth-beige/10 last:border-none bg-white">
                                    {/* Topic Header (Clickable Accordion) */}
                                    <button 
                                        onClick={() => setActiveTopicId(activeTopicId === topic.id ? "" : topic.id)}
                                        className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors
                                            ${activeTopicId === topic.id ? 'bg-sacred-cream' : 'hover:bg-gray-50'}`}
                                    >
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Module {index + 1}</p>
                                            <h4 className="font-display text-sm text-cosmic-blue font-semibold">{topic.title}</h4>
                                        </div>
                                        {activeTopicId === topic.id ? <ChevronDown size={16} className="text-aura-gold" /> : <ChevronRight size={16} className="text-slate-400" />}
                                    </button>

                                    {/* Subtopics (Visible if Active) */}
                                    {activeTopicId === topic.id && (
                                        <div className="bg-white py-2 shadow-inner">
                                            {topic.subtopics.map((sub) => (
                                                <button
                                                    key={sub.id}
                                                    onClick={() => setActiveSubtopic(sub)}
                                                    className={`w-full flex items-start gap-4 px-6 py-4 transition-all relative
                                                        ${activeSubtopic?.id === sub.id 
                                                            ? 'bg-aura-gold/5 border-l-4 border-vibrant-orange' 
                                                            : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
                                                >
                                                    {/* Status Icon */}
                                                    <div className={`mt-0.5 flex-shrink-0 ${sub.watched ? 'text-emerald-500' : 'text-slate-300'}`}>
                                                        {sub.watched ? <CheckCircle size={18} /> : (
                                                            activeSubtopic?.id === sub.id ? <Play size={18} className="text-vibrant-orange fill-vibrant-orange" /> : <div className="w-4 h-4 rounded-full border-2 border-current"></div>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Text */}
                                                    <div className="text-left">
                                                        <p className={`text-sm font-bold mb-1 ${activeSubtopic?.id === sub.id ? 'text-vibrant-orange' : 'text-cosmic-blue'}`}>
                                                            {sub.title}
                                                        </p>
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                                                            {sub.duration ? <><Clock size={10} /> {sub.duration}</> : "Video Lesson"}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

// --- MAIN WRAPPER ---
const LMS: React.FC<LMSProps> = ({ onBack, currency }) => {
  const [view, setView] = useState<'library' | 'player'>('library');
  const [selectedCourse, setSelectedCourse] = useState<LMSCourse | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleSelectCourse = (course: LMSCourse) => {
    setSelectedCourse(course);
    setView('player');
  };

  const handleBackToLibrary = () => {
    setSelectedCourse(null);
    setView('library');
  };

  if (view === 'player' && selectedCourse) {
    return <CoursePlayer course={selectedCourse} onBack={handleBackToLibrary} />;
  }

  return (
    <div className="min-h-screen bg-sacred-cream pt-32"> {/* Increased padding to prevent navbar overlap */}
       {/* Breadcrumb / Back */}
       <div className="max-w-7xl mx-auto px-6 mb-4">
            <button 
                onClick={onBack} 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-rich-crimson transition-colors"
            >
                <ArrowLeft size={14} /> Back to Dashboard
            </button>
       </div>

       {/* Uses provided data */}
       <CourseLibrary courses={MY_COURSES} onSelect={handleSelectCourse} currency={currency} />
    </div>
  );
};

export default LMS;
