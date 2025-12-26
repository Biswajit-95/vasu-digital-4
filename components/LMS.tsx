
import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, ArrowLeft, BookOpen, Clock, FileText, ChevronDown, ChevronRight, CheckCircle2, Lock, ShoppingCart, Eye, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import { LMSCourse, Subtopic, Topic, User } from '../types';

interface LMSProps {
  onBack: () => void;
  currency: 'INR' | 'AED';
  user: User | null;
  onAddToCart: (course: LMSCourse) => void;
}

// --- DATA SOURCE (Strictly based on provided object) ---
const MY_COURSES_DATA: LMSCourse[] = [
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
    isEnrolled: true, // Simulating a purchased course for logged-in users
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
            youtubeLink: "https://www.youtube.com/watch?v=abcd1234",
            docUrl: "https://example.com/docs/introduction-to-vastu.pdf",
            previewLink: null,
            duration: null,
            watched: false,
            createdAt: "2025-12-19T08:06:07.207Z",
            updatedAt: "2025-12-19T08:06:07.207Z",
            isPreview: true
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
    ],
  },
  {
    id: "9b1f2a60-42bb-4a7a-bc89-4c6c0a8f7c21",
    title: "Vastu & Astrology: Designing Spaces Aligned With Cosmic Energy (Comprehensive)",
    slug: "vastu-astrology-cosmic-design",
    description:
      "A comprehensive, practical course on Vastu Shastra integrated with Vedic Astrology. Learn how spatial energy, planetary forces, and natural elements influence health, wealth, relationships, and success — with real-world layouts, case studies, and remedies.",
    priceInINR: 2499,
    priceInAED: 115,
    thumbnailUri:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1200&auto=format&fit=crop",
    isPublished: true,
    createdAt: "2025-12-01T10:12:44.000Z",
    updatedAt: "2025-12-25T09:45:10.000Z",
    category: {
      id: "6b00556c-2725-4005-bada-ad760dfc4af2",
      name: "Vastu Home",
      slug: "vastu-home",
      description: "Residential & commercial Vastu planning",
      createdAt: "2025-12-01T07:40:36.560Z",
      updatedAt: "2025-12-01T07:40:36.560Z",
    },
    stats: {
      purchases: 0,
    },
    isEnrolled: false, // Simulating a locked course
    topics: [
      {
        id: "t1",
        title: "Foundations of Vastu Shastra",
        description: "Core philosophy, origins, and energy principles behind Vastu.",
        createdAt: "2025-12-01T10:15:00.000Z",
        updatedAt: "2025-12-01T10:15:00.000Z",
        subtopics: [
          {
            id: "t1s1",
            title: "Introduction to Vastu Shastra",
            description: "History, relevance, and scientific parallels.",
            youtubeLink: "https://www.youtube.com/watch?v=1Yl0K7x8n8A",
            docUrl: "https://archive.org/details/VastuShastra_Intro",
            previewLink: null,
            duration: "18:42",
            watched: false,
            createdAt: "2025-12-01T10:20:00.000Z",
            updatedAt: "2025-12-01T10:20:00.000Z",
            isPreview: true // ONLY THIS LESSON IS FREE
          },
          {
            id: "t1s2",
            title: "Pancha Mahabhutas (Five Elements)",
            description: "Earth, Water, Fire, Air, Space explained with layouts.",
            youtubeLink: "https://www.youtube.com/watch?v=ZkRkGmE6Y5c",
            docUrl: "https://archive.org/details/pancha-mahabhuta-vastu",
            previewLink: null,
            duration: "22:10",
            watched: false,
            createdAt: "2025-12-01T10:40:00.000Z",
            updatedAt: "2025-12-01T10:40:00.000Z",
            isPreview: false
          },
        ],
      },
      {
        id: "t2",
        title: "The 8 Directions & Deities",
        description: "Advanced mapping of the 8 directions.",
        createdAt: "2025-12-01T11:00:00.000Z",
        updatedAt: "2025-12-01T11:00:00.000Z",
        subtopics: [
            {
                id: "t2s1",
                title: "North: The Zone of Wealth (Kuber)",
                description: "Unlocking financial flow.",
                youtubeLink: "https://www.youtube.com/watch?v=sample",
                docUrl: null,
                previewLink: null,
                duration: "25:00",
                watched: false,
                createdAt: "2025-12-01T11:05:00.000Z",
                updatedAt: "2025-12-01T11:05:00.000Z",
                isPreview: false
            }
        ]
      }
    ],
  },
  {
    id: "edge-case-1",
    title: "Vastu Quick Start (Single Module)",
    slug: "vastu-quick-start",
    description: "A specialized short course to demonstrate the single-module, single-lesson lock functionality. Perfect for testing edge cases.",
    priceInINR: 999,
    priceInAED: 45,
    thumbnailUri: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
    isPublished: true,
    createdAt: "2025-12-01T10:12:44.000Z",
    updatedAt: "2025-12-25T09:45:10.000Z",
    category: {
      id: "cat-3",
      name: "Mini Course",
      slug: "mini-course",
      description: "Short burst learning",
      createdAt: "2025-12-01T07:40:36.560Z",
      updatedAt: "2025-12-01T07:40:36.560Z",
    },
    stats: {
      purchases: 0,
    },
    isEnrolled: false,
    topics: [
      {
        id: "single-topic",
        title: "The Only Module",
        description: "This is the only module in this course.",
        createdAt: "2025-12-01T10:15:00.000Z",
        updatedAt: "2025-12-01T10:15:00.000Z",
        subtopics: [
          {
            id: "single-subtopic",
            title: "The Locked Lesson",
            description: "This lesson is locked and is the only one. The player should still render.",
            youtubeLink: "https://www.youtube.com/watch?v=sample",
            docUrl: null,
            previewLink: null,
            duration: "10:00",
            watched: false,
            createdAt: "2025-12-01T10:20:00.000Z",
            updatedAt: "2025-12-01T10:20:00.000Z",
            isPreview: false // Locked
          }
        ],
      },
    ],
  },
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
  if (url.includes("watch?v=")) {
    const cleanUrl = url.split('&')[0]; 
    return cleanUrl.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

// --- VIEW 1: COURSE LIBRARY ---
const CourseLibrary: React.FC<{ courses: LMSCourse[]; onSelect: (c: LMSCourse) => void; onPurchase: (c: LMSCourse) => void; currency: 'INR' | 'AED' }> = ({ courses, onSelect, onPurchase, currency }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
            <h1 className="font-display text-4xl text-cosmic-blue mb-4">My Sacred Path</h1>
            <p className="font-serif text-xl text-slate-700 font-normal">Your wisdom journey begins here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => {
                const progress = calculateProgress(course);
                const totalLessons = course.topics.reduce((acc, topic) => acc + topic.subtopics.length, 0);
                
                const displayPrice = currency === 'INR' 
                  ? `₹${course.priceInINR.toLocaleString()}`
                  : `${course.priceInAED.toLocaleString()} AED`;

                const isLocked = !course.isEnrolled;

                return (
                    <div 
                        key={course.id} 
                        // Allow navigation to player even if locked (for preview)
                        onClick={() => onSelect(course)}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-earth-beige/30 hover:shadow-2xl hover:border-aura-gold/50 transition-all duration-300 flex flex-col h-full relative cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <div className="h-56 overflow-hidden relative bg-gray-100">
                            <img src={course.thumbnailUri} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-cosmic-blue/10 group-hover:bg-cosmic-blue/0 transition-colors"></div>
                            
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-cosmic-blue shadow-sm">
                                {course.category.name}
                            </div>
                            
                            {/* Lock Icon - Visual Indicator only, does not block click anymore */}
                            {isLocked && (
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                    <Lock size={14} />
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="font-display text-xl text-cosmic-blue mb-2 line-clamp-2 leading-tight group-hover:text-vibrant-orange transition-colors">
                                {course.title}
                            </h3>
                            
                            {isLocked ? (
                                <div className="text-lg font-bold text-rich-crimson mb-3 font-serif">
                                    {displayPrice}
                                </div>
                            ) : (
                                <div className="text-sm font-bold text-emerald-600 mb-3 font-sans uppercase tracking-widest">
                                    Enrolled
                                </div>
                            )}

                            <p className="font-serif text-slate-600 text-base line-clamp-3 mb-6 leading-relaxed flex-grow">
                                {course.description}
                            </p>

                            <div className="mt-auto">
                                {!isLocked && (
                                    <>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Progress</span>
                                            <span className="font-bold text-cosmic-blue text-sm">{progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-sacred-cream rounded-full overflow-hidden mb-6">
                                            <div className="h-full bg-gradient-to-r from-aura-gold to-vibrant-orange transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                                        </div>
                                    </>
                                )}

                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                        <BookOpen size={14} /> {totalLessons} Lessons
                                    </span>
                                    
                                    {isLocked ? (
                                        <Button 
                                            // Primary action is to preview
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSelect(course); 
                                            }}
                                            size="sm" 
                                            className="bg-white border border-earth-beige text-cosmic-blue hover:bg-sacred-cream hover:border-aura-gold shadow-sm"
                                        >
                                            <Eye size={14} className="mr-2"/> Start Free Preview
                                        </Button>
                                    ) : (
                                        <Button onClick={(e) => { e.stopPropagation(); onSelect(course); }} size="sm" className="shadow-md">
                                            {progress > 0 ? 'Continue' : 'Start Learning'}
                                        </Button>
                                    )}
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
const CoursePlayer: React.FC<{ course: LMSCourse; onBack: () => void; onPurchase: () => void; currency: 'INR' | 'AED' }> = ({ course, onBack, onPurchase, currency }) => {
  // Initialize state more robustly to handle potential empty topics/subtopics
  const [activeTopicId, setActiveTopicId] = useState<string>(() => {
    const validTopic = course.topics.find(t => t.subtopics.length > 0);
    return validTopic?.id || course.topics[0]?.id || "";
  });
  
  const [activeSubtopic, setActiveSubtopic] = useState<Subtopic | null>(() => {
     const validTopic = course.topics.find(t => t.id === activeTopicId) || course.topics.find(t => t.subtopics.length > 0);
     return validTopic?.subtopics[0] || null;
  });

  const embedUrl = getEmbedUrl(activeSubtopic?.youtubeLink || null);
  const isCourseLocked = !course.isEnrolled;
  
  // A lesson is locked if the course is locked AND it's not a preview
  const isLessonLocked = isCourseLocked && (!activeSubtopic?.isPreview);

  const displayPrice = currency === 'INR' 
    ? `₹${course.priceInINR.toLocaleString()}`
    : `${course.priceInAED.toLocaleString()} AED`;

  return (
    <div className="min-h-screen bg-background pt-32"> 
        
        {/* Sticky Header */}
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
                        <div className="flex items-center gap-2">
                             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden md:block">
                                {course.category.name}
                            </p>
                            {isCourseLocked && (
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-rich-crimson/10 text-rich-crimson px-2 rounded-full">
                                    Preview Mode
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    {isCourseLocked ? (
                        <Button onClick={onPurchase} size="sm" className="flex items-center gap-2">
                            Unlock Full Course • {displayPrice}
                        </Button>
                    ) : (
                        <div className="flex items-center gap-2 text-xs font-bold text-cosmic-blue bg-sacred-cream px-3 py-1.5 rounded-lg border border-earth-beige/20">
                           <CheckCircle2 size={14} className="text-emerald-500" />
                           <span>{calculateProgress(course)}% Complete</span>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Player Layout */}
        <div className="max-w-[1600px] mx-auto px-0 md:px-6 lg:px-12 py-0 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-8 lg:gap-10">
                
                {/* LEFT: Video Player & Details */}
                <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
                    
                    {/* 16:9 Video Container */}
                    <div className="aspect-video bg-black w-full md:rounded-[2rem] overflow-hidden shadow-2xl relative z-10 group">
                        {!activeSubtopic ? (
                            <div className="absolute inset-0 z-20 bg-sacred-cream flex flex-col items-center justify-center text-center p-8">
                                <AlertCircle size={48} className="text-slate-300 mb-4" />
                                <h3 className="font-display text-xl text-slate-500 mb-2">No Content Available</h3>
                                <p className="text-slate-400 font-serif">This course module is currently empty.</p>
                            </div>
                        ) : isLessonLocked ? (
                            <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 border border-white/20">
                                    <Lock size={32} />
                                </div>
                                <h3 className="font-display text-2xl text-white mb-2">Module Locked</h3>
                                <p className="text-white/60 font-serif text-lg mb-8 max-w-md">
                                    This lesson is part of the premium curriculum. Purchase the course to continue your journey.
                                </p>
                                <Button onClick={onPurchase} className="bg-vibrant-orange hover:bg-white hover:text-cosmic-blue border-none shadow-xl shadow-orange-500/20">
                                    Unlock Access • {displayPrice}
                                </Button>
                            </div>
                        ) : embedUrl ? (
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
                         {activeSubtopic ? (
                             <>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 border-b border-earth-beige/30 pb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h1 className="font-display text-2xl md:text-3xl text-cosmic-blue">{activeSubtopic.title}</h1>
                                            {isCourseLocked && activeSubtopic.isPreview && (
                                                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                                                    Free Preview
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                        {activeSubtopic.duration ? `Duration: ${activeSubtopic.duration} • ` : ''} 
                                        Posted: {new Date(activeSubtopic.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    
                                    {/* Resource Download if available */}
                                    {activeSubtopic.docUrl && !isLessonLocked && (
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

                                <div className="bg-white p-6 rounded-2xl border border-earth-beige/20 shadow-sm relative overflow-hidden">
                                    {/* Gradient fade for locked content description */}
                                    {isLessonLocked && (
                                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                                    )}
                                    <h3 className="font-serif text-xl text-cosmic-blue italic mb-4">Description</h3>
                                    <p className="font-sans text-slate-700 leading-relaxed text-base font-normal">
                                        {activeSubtopic.description}
                                    </p>
                                </div>
                             </>
                         ) : (
                             <div className="h-32 bg-white rounded-2xl border border-earth-beige/20 animate-pulse"></div>
                         )}
                    </div>
                </div>

                {/* RIGHT: Curriculum Accordion */}
                <div className="lg:col-span-4">
                    <div className="bg-white md:rounded-[2rem] shadow-xl border border-earth-beige/30 overflow-hidden sticky top-44"> 
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
                                    {/* Topic Header */}
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

                                    {/* Subtopics */}
                                    {activeTopicId === topic.id && (
                                        <div className="bg-white py-2 shadow-inner">
                                            {topic.subtopics.length > 0 ? topic.subtopics.map((sub) => {
                                                // Determine if this specific subtopic is locked
                                                // It is locked if the course is not enrolled AND it is not a preview
                                                const subLocked = isCourseLocked && !sub.isPreview;
                                                const isActive = activeSubtopic?.id === sub.id;

                                                return (
                                                    <button
                                                        key={sub.id}
                                                        onClick={() => setActiveSubtopic(sub)}
                                                        className={`w-full flex items-start gap-4 px-6 py-4 transition-all relative
                                                            ${isActive 
                                                                ? 'bg-aura-gold/5 border-l-4 border-vibrant-orange' 
                                                                : 'hover:bg-gray-50 border-l-4 border-transparent'}
                                                            ${subLocked && !isActive ? 'opacity-60' : ''}
                                                            `}
                                                    >
                                                        {/* Status Icon */}
                                                        <div className={`mt-0.5 flex-shrink-0`}>
                                                            {subLocked ? (
                                                                <Lock size={16} className="text-slate-400" />
                                                            ) : sub.watched ? (
                                                                <CheckCircle size={18} className="text-emerald-500" />
                                                            ) : (
                                                                isActive ? <Play size={18} className="text-vibrant-orange fill-vibrant-orange" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                                                            )}
                                                        </div>
                                                        
                                                        {/* Text */}
                                                        <div className="text-left">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <p className={`text-sm font-bold ${isActive ? 'text-vibrant-orange' : 'text-cosmic-blue'}`}>
                                                                    {sub.title}
                                                                </p>
                                                                {sub.isPreview && isCourseLocked && (
                                                                    <span className="text-[9px] font-bold uppercase bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded">Free</span>
                                                                )}
                                                            </div>
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                                                                {sub.duration ? <><Clock size={10} /> {sub.duration}</> : "Video Lesson"}
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            }) : (
                                                <div className="px-6 py-4 text-xs text-slate-400 italic">No lessons in this module yet.</div>
                                            )}
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
const LMS: React.FC<LMSProps> = ({ onBack, currency, user, onAddToCart }) => {
  const [view, setView] = useState<'library' | 'player'>('library');
  const [selectedCourse, setSelectedCourse] = useState<LMSCourse | null>(null);

  // Dynamic Course Data based on Auth Status
  const coursesWithAuthStatus = MY_COURSES_DATA.map(c => ({
      ...c,
      // If no user, everything is locked. If user exists, respect the mock data's isEnrolled flag.
      isEnrolled: user ? c.isEnrolled : false
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleSelectCourse = (course: LMSCourse) => {
    setSelectedCourse(course);
    setView('player');
  };

  const handlePurchaseAttempt = (course: LMSCourse) => {
    onAddToCart(course);
  };

  const handleBackToLibrary = () => {
    setSelectedCourse(null);
    setView('library');
  };

  if (view === 'player' && selectedCourse) {
    // Re-find the course in the updated list to ensure auth status is current
    const currentCourseState = coursesWithAuthStatus.find(c => c.id === selectedCourse.id) || selectedCourse;
    
    return (
        <CoursePlayer 
            course={currentCourseState} 
            onBack={handleBackToLibrary} 
            onPurchase={() => handlePurchaseAttempt(currentCourseState)}
            currency={currency} 
        />
    );
  }

  return (
    <div className="min-h-screen bg-sacred-cream pt-32">
       {/* Breadcrumb / Back */}
       <div className="max-w-7xl mx-auto px-6 mb-4">
            <button 
                onClick={onBack} 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-rich-crimson transition-colors"
            >
                <ArrowLeft size={14} /> Back to Dashboard
            </button>
       </div>

       <CourseLibrary 
            courses={coursesWithAuthStatus} 
            onSelect={handleSelectCourse} 
            onPurchase={handlePurchaseAttempt}
            currency={currency} 
        />
    </div>
  );
};

export default LMS;
