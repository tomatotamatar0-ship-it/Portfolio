export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  renders: string[];
  wireframe?: string;
  textures?: string[];
  software: string[];
  sketchfabId?: string;
  artstationUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}
