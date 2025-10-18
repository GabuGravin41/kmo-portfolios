
export type Section = 'Home' | 'Students' | 'Trainers' | 'Resources' | 'Gallery' | 'Events' | 'Sponsors';

export enum Role {
  STUDENT = 'student',
  TRAINER = 'trainer',
  ADMIN = 'admin',
}

export enum AchievementLevel {
  IMO = "IMO Team",
  PAMO = "PAMO Team",
  EAMO = "EAMO Team",
  NATIONAL = "National Team",
  ROUND3 = "Round 3 Finalist",
  ROUND2 = "Round 2 Qualifier",
}

export interface User {
  id: number;
  email: string;
  password?: string;
  role: Role;
  studentId?: number;
}

export interface Student {
  id: number;
  name: string;
  year: number;
  profileImageUrl: string;
  bannerImageUrl: string;
  achievement: AchievementLevel;
  bio: string;
  skills: string[];
  projects: { name: string; description: string; url?: string }[];
  publications: { title: string; journal: string; url?: string, file?: { name: string, content: string } }[];
  extracurriculars: string[];
  hobbies: string[];
}

export interface Trainer {
    id: number;
    name: string;
    profileImageUrl: string;
    expertise: string[];
    bio: string;
    institution: string;
}

export interface Resource {
    id: number;
    title: string;
    category: 'Algebra' | 'Geometry' | 'Number Theory' | 'Combinatorics';
    description: string;
    url?: string;
    file?: { name: string; content: string };
}

export interface Sponsor {
    name: string;
    logoUrl: string;
}

export interface Event {
    id: number;
    date: string;
    title: string;
    description: string;
    location: string;
    isPast: boolean;
}

export interface GalleryItem {
    id: number;
    imageUrl: string;
    thumbnailUrl: string;
    title: string;
    description: string;
}
