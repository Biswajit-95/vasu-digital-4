

import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceInINR: number;
  priceInAED: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export type AuthView = 'login' | 'signup';
export type PageView = 'home' | 'consultation' | 'dashboard' | 'shop' | 'faq' | 'auth' | 'lms' | 'product-detail' | 'cart' | 'contact' | 'services' | 'service-detail';

// --- NEW STRICT LMS TYPES START ---

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  youtubeLink: string | null;
  docUrl: string | null;
  previewLink: string | null;
  duration: string | null;
  watched: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  subtopics: Subtopic[];
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string | null;
  description: string;
  createdAt: string;
  updatedAt: string;
  subtopics?: any; // loose typing for backward compat if needed
}

export interface CourseStats {
  purchases: number;
}

export interface LMSCourse {
  id: string;
  title: string;
  slug: string | null;
  description: string;
  priceInINR: number;
  priceInAED: number;
  thumbnailUri: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  category: CourseCategory;
  stats: CourseStats;
  topics: Topic[];
}

// --- NEW LMS TYPES END ---

// Legacy Course type kept for compatibility with existing dashboard mock data if needed
export interface Course {
  id: string;
  title: string;
  mentor: string;
  progress: number;
  thumbnail: string;
  lessons: number;
  enrolledDate: string;
  modules: { title: string; duration: string }[];
  priceInINR?: number;
  priceInAED?: number;
}

export interface Booking {
  id: string;
  type: 'online' | 'onsite';
  tier: 'prana' | 'moksha';
  status: 'pending_review' | 'confirmed' | 'payment_pending' | 'completed';
  date: string;
  amount: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  thumbnailUrl: string;
  previewUrl: string;
  isPaid: boolean;
  priceInINR: number;
  priceInAED: number | null;
  currency: "INR" | "AED";
}

export interface ConsultationItem {
    plan: PricingPlan;
    bookingType: 'online' | 'onsite';
}

export interface CartItem {
  id: string;
  type: 'product' | 'consultation';
  product?: DigitalProduct;
  consultation?: ConsultationItem;
  quantity: number;
}

export interface ConsultationResumeData {
    plan: PricingPlan;
    bookingType: 'online' | 'onsite';
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
}

export interface ServiceArticle {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string; // Content placeholder
  imageUrl: string;
}
