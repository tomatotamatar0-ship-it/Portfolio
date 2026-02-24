import { Project, Skill, Experience, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'env-1',
    title: 'Stylized Game Environment',
    category: 'Environment Design',
    description: 'A vibrant, stylized environment created for a mobile game project. Focused on modularity and performance optimization.',
    thumbnail: 'https://picsum.photos/seed/env1/800/600',
    renders: [
      'https://picsum.photos/seed/env1-1/1920/1080',
      'https://picsum.photos/seed/env1-2/1920/1080',
    ],
    software: ['Blender', 'Unity', 'Substance Painter'],
    artstationUrl: 'https://ahmadali01.artstation.com/projects/989K4y'
  },
  {
    id: 'env-2',
    title: 'Blue Tower Environment',
    category: 'Environment Design',
    description: 'A cinematic environment piece exploring verticality and atmospheric lighting in Unity URP.',
    thumbnail: 'https://picsum.photos/seed/tower/800/600',
    renders: [
      'https://picsum.photos/seed/tower-1/1920/1080',
      'https://picsum.photos/seed/tower-2/1920/1080',
    ],
    software: ['Maya', 'Unity', 'Substance Painter'],
    artstationUrl: 'https://ahmadali01.artstation.com/projects/P6VWg8'
  },
  {
    id: 'prop-1',
    title: 'Stylized Game Coins',
    category: 'Prop Modeling',
    description: 'A set of interactive game coins with custom shaders for a shiny, collectible feel.',
    thumbnail: 'https://picsum.photos/seed/coins/800/600',
    renders: [
      'https://picsum.photos/seed/coins-1/1920/1080',
    ],
    software: ['Blender', 'Substance Painter'],
    artstationUrl: 'https://ahmadali01.artstation.com/projects/kNb80n'
  },
  {
    id: 'char-1',
    title: 'Fantasy Character Model',
    category: 'Character Modeling',
    description: 'High-poly sculpt to low-poly game-ready character with clean topology and PBR textures.',
    thumbnail: 'https://picsum.photos/seed/char/800/600',
    renders: [
      'https://picsum.photos/seed/char-1/1920/1080',
    ],
    software: ['ZBrush', 'Maya', 'Substance Painter'],
  }
];

export const SKILLS: Skill[] = [
  { name: 'Blender', level: 90 },
  { name: 'Unity (URP/HDRP)', level: 85 },
  { name: 'Substance Painter', level: 88 },
  { name: 'ZBrush', level: 75 },
  { name: 'Autodesk Maya', level: 80 },
  { name: 'Photoshop', level: 82 },
  { name: 'Game Optimization', level: 92 }
];

export const EXPERIENCES: Experience[] = [
  {
    role: '3D Environment Artist',
    company: 'Markhor Games',
    period: 'Feb 2025 – Present',
    description: [
      'Developing high-quality, optimized 3D environments for game projects.',
      'Collaborating with the team to ensure artistic vision aligns with technical constraints.'
    ]
  },
  {
    role: '3D Environment Artist',
    company: 'BRIC Games',
    period: 'Mar 2024 – Present',
    description: [
      'Creating modular and optimized game-ready environments.',
      'Utilizing Unity Engine for scene setup, lighting, rendering, and performance optimization.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Art Director @ PixelForge',
    content: 'Ahmad has an incredible eye for detail. His ability to optimize assets without sacrificing visual quality is exactly what we needed for our mobile titles.',
    rating: 5
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Developer @ BRIC Games',
    content: 'Working with Ahmad is a breeze. He understands the technical requirements of game engines and delivers assets that are ready to drop into the scene.',
    rating: 5
  },
  {
    name: 'Elena Rossi',
    role: 'Indie Game Dev',
    content: 'The stylized environments Ahmad created for my project exceeded my expectations. He really brought the world to life.',
    rating: 5
  }
];
