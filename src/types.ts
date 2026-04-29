export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  background: string;
  painPoints: string[];
  solutions: string[];
  aiCapability: string;
  results: string[];
  reflection: string;
  category: string;
  image?: string;
}

export interface Achievement {
  label: string;
  value: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description?: string;
}
