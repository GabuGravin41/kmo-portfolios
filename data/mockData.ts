
import { Student, Trainer, Resource, Sponsor, Event, GalleryItem, AchievementLevel } from '../types';

export const students: Student[] = [
  {
    id: 1,
    name: 'Amina Yusuf',
    year: 2023,
    profileImageUrl: 'https://i.pravatar.cc/150?u=amina',
    bannerImageUrl: 'https://picsum.photos/seed/banner1/800/200',
    achievement: AchievementLevel.IMO,
    bio: 'A passionate mathematician with a love for number theory and complex analysis. Represented Kenya at the International Mathematical Olympiad and brought home a bronze medal.',
    skills: ['Number Theory', 'Calculus', 'Abstract Algebra', 'Python'],
    projects: [{ name: 'Prime Number Visualizer', description: 'An interactive web app to visualize the distribution of prime numbers.' }],
    publications: [{ title: 'On the Distribution of Twin Primes', journal: 'Kenyan Journal of Mathematics' }],
    extracurriculars: ['Debate Club President', 'Chess Team Captain'],
    hobbies: ['Hiking', 'Playing the Piano'],
  },
  {
    id: 2,
    name: 'David Otieno',
    year: 2023,
    profileImageUrl: 'https://i.pravatar.cc/150?u=david',
    bannerImageUrl: 'https://picsum.photos/seed/banner2/800/200',
    achievement: AchievementLevel.PAMO,
    bio: 'Specializing in geometry and combinatorics, David was a gold medalist at the Pan-African Mathematical Olympiad. He enjoys solving puzzles and competitive programming.',
    skills: ['Euclidean Geometry', 'Combinatorics', 'Graph Theory', 'C++'],
    projects: [{ name: 'Graph Coloring Algorithm', description: 'Implemented a novel algorithm for solving the graph coloring problem efficiently.' }],
    publications: [],
    extracurriculars: ['Programming Club', 'Volunteer Tutor'],
    hobbies: ['Basketball', 'Reading Sci-Fi'],
  },
    {
    id: 3,
    name: 'Faith Wanjiru',
    year: 2022,
    profileImageUrl: 'https://i.pravatar.cc/150?u=faith',
    bannerImageUrl: 'https://picsum.photos/seed/banner3/800/200',
    achievement: AchievementLevel.NATIONAL,
    bio: 'A national champion with a keen interest in applied mathematics and statistics. Faith is working on a project to model climate change patterns using mathematical equations.',
    skills: ['Statistics', 'Differential Equations', 'Mathematical Modeling', 'R'],
    projects: [],
    publications: [],
    extracurriculars: ['Environmental Club', 'School Magazine Editor'],
    hobbies: ['Photography', 'Gardening'],
  },
  {
    id: 4,
    name: 'Samuel Kariuki',
    year: 2024,
    profileImageUrl: 'https://i.pravatar.cc/150?u=samuel',
    bannerImageUrl: 'https://picsum.photos/seed/banner4/800/200',
    achievement: AchievementLevel.ROUND3,
    bio: 'A rising star in the Olympiad circuit, Samuel reached the final round of the national competition. His strengths lie in algebra and problem-solving strategies.',
    skills: ['Polynomials', 'Inequalities', 'Functional Equations', 'LaTeX'],
    projects: [],
    publications: [],
    extracurriculars: ['Music Club'],
    hobbies: ['Playing Guitar', 'Cycling'],
  },
];

export const trainers: Trainer[] = [
  {
    id: 201,
    name: 'Dr. Hellen Obiri',
    profileImageUrl: 'https://i.pravatar.cc/150?u=hellen',
    expertise: ['Number Theory', 'Abstract Algebra'],
    bio: 'A senior lecturer at the University of Nairobi with over 15 years of experience in coaching Olympiad teams. Dr. Obiri is known for her rigorous training methods and deep passion for mathematics.',
    institution: 'University of Nairobi',
  },
  {
    id: 202,
    name: 'Prof. Peter Kamau',
    profileImageUrl: 'https://i.pravatar.cc/150?u=peter',
    expertise: ['Geometry', 'Combinatorics'],
    bio: 'Professor Kamau is a renowned geometer from Kenyatta University. He has authored several textbooks on Olympiad geometry and enjoys creating challenging problems for students.',
    institution: 'Kenyatta University',
  },
  {
    id: 203,
    name: 'Ms. Jane Wambui',
    profileImageUrl: 'https://i.pravatar.cc/150?u=jane',
    expertise: ['Problem Solving', 'Inequalities'],
    bio: 'A former IMO participant and a gold medalist at PAMO, Jane now dedicates her time to mentoring the next generation. She is a mathematics teacher at Alliance High School.',
    institution: 'Alliance High School',
  },
];

export const resources: Resource[] = [
  { id: 301, title: 'Art of Problem Solving: Volume 1', category: 'Algebra', description: 'A foundational text for any aspiring Olympiad participant.', url: 'https://artofproblemsolving.com' },
  { id: 302, title: 'Euclidean Geometry in Mathematical Olympiads', category: 'Geometry', description: 'A comprehensive guide to geometry problems.', url: 'https://www.maa.org/press/ebooks/euclidean-geometry-in-mathematical-olympiads' },
  { id: 303, title: '2022 KMO Round 1 Problems', category: 'Number Theory', description: 'Past paper from the first round of the 2022 competition.', file: { name: 'KMO_2022_R1.pdf', content: 'dummy pdf content' } },
  { id: 304, title: 'A Walk Through Combinatorics', category: 'Combinatorics', description: 'An introduction to enumeration and graph theory.', url: 'https://www.worldscientific.com/worldscibooks/10.1142/8027' },
];

export const sponsors: Sponsor[] = [
    { name: 'Safaricom', logoUrl: 'https://via.placeholder.com/150x60.png?text=Safaricom' },
    { name: 'KCB Bank', logoUrl: 'https://via.placeholder.com/150x60.png?text=KCB+Bank' },
    { name: 'Equity Bank', logoUrl: 'https://via.placeholder.com/150x60.png?text=Equity+Bank' },
    { name: 'Ministry of Education', logoUrl: 'https://via.placeholder.com/150x60.png?text=Ministry+of+Education' },
    { name: 'Brookside', logoUrl: 'https://via.placeholder.com/150x60.png?text=Brookside' },
    { name: 'KenGen', logoUrl: 'https://via.placeholder.com/150x60.png?text=KenGen' },
];

export const events: Event[] = [
    { id: 401, date: '2024-09-15', title: 'KMO 2024 Round 1', description: 'The first round of the annual Kenya Mathematical Olympiad.', location: 'Online', isPast: false },
    { id: 402, date: '2024-10-20', title: 'KMO 2024 Round 2', description: 'Qualifiers from Round 1 compete for a spot in the finals.', location: 'CEMASTEA, Nairobi', isPast: false },
    { id: 403, date: '2024-11-10', title: 'National Finals & Awards', description: 'The top students battle it out to be crowned national champion.', location: 'CEMASTEA, Nairobi', isPast: false },
    { id: 404, date: '2024-03-05', title: 'PAMO 2024 Training Camp', description: 'Intensive training for the team representing Kenya at the Pan-African Mathematical Olympiad.', location: 'University of Nairobi', isPast: true },
    { id: 405, date: '2024-01-20', title: 'KMO 2023 Round 3', description: 'Final round of the 2023 competition.', location: 'CEMASTEA, Nairobi', isPast: true },
];

export const galleryItems: GalleryItem[] = [
    { id: 501, imageUrl: 'https://picsum.photos/seed/gallery1/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery1/200/200', title: '2023 Awards Ceremony', description: 'Celebrating the winners of the KMO 2023.' },
    { id: 502, imageUrl: 'https://picsum.photos/seed/gallery2/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery2/200/200', title: 'Training Camp Day 1', description: 'Students deep in a problem-solving session.' },
    { id: 503, imageUrl: 'https://picsum.photos/seed/gallery3/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery3/200/200', title: 'PAMO Team Departure', description: 'The Kenyan team at JKIA, ready for PAMO.' },
    { id: 504, imageUrl: 'https://picsum.photos/seed/gallery4/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery4/200/200', title: 'Collaborative Work', description: 'Students working together on a tough geometry problem.' },
    { id: 505, imageUrl: 'https://picsum.photos/seed/gallery5/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery5/200/200', title: 'Lecture by Prof. Kamau', description: 'A guest lecture during the national training camp.' },
    { id: 506, imageUrl: 'https://picsum.photos/seed/gallery6/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery6/200/200', title: 'Round 2 Competition Hall', description: 'The tense atmosphere during the second round exam.' },
    { id: 507, imageUrl: 'https://picsum.photos/seed/gallery7/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery7/200/200', title: 'Sponsor Meet and Greet', description: 'Students interacting with representatives from our partner companies.' },
    { id: 508, imageUrl: 'https://picsum.photos/seed/gallery8/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery8/200/200', title: 'Victorious Return', description: 'The team returning with medals from the international competition.' },
    { id: 509, imageUrl: 'https://picsum.photos/seed/gallery9/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery9/200/200', title: 'Informal Discussion', description: 'A trainer clarifying a concept after a session.' },
    { id: 510, imageUrl: 'https://picsum.photos/seed/gallery10/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery10/200/200', title: 'The Finalists Group Photo', description: 'All the finalists of the KMO 2023.' },
];
