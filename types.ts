
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

export interface User {
  id: string;
  fullName: string;
  email: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  fileUrl?: string;
  thumbnailUrl: string;
  previewUrl?: string;
  isPaid: boolean;
  priceInINR: number;
  priceInAED: number;
  currency?: string;
  type?: string;
  purchaseDate?: string;
}

export interface CartItem {
  id: string;
  type: 'product' | 'consultation';
  product?: DigitalProduct;
  consultation?: {
      plan: PricingPlan;
      bookingType: 'online' | 'onsite';
  };
  quantity: number;
}

export interface Booking {
    id: string;
    type: string;
    tier: string;
    status: string;
    date: string;
    amount: string;
}

export interface Course {
    id: string;
    title: string;
    mentor: string;
    progress: number;
    thumbnail: string;
    lessons: number;
    enrolledDate: string;
    modules: any[];
    priceInINR: number;
    priceInAED: number;
}

export interface ConsultationResumeData {
    plan: PricingPlan;
    bookingType: 'online' | 'onsite';
}

export interface ServiceArticle {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    imageUrl: string;
}

// --- NEW STRICT LMS TYPES ---

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
  isPreview?: boolean; // New field to allow previewing specific lessons
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
  isEnrolled?: boolean; // New field to track ownership
}
