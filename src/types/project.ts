export type ProjectCategory = 
  | 'All'
  | 'Full Stack'
  | 'Frontend'
  | 'Backend & APIs'
  | 'Mobile & Cloud'
  | 'AI & Data';

export interface ArchitectureStep {
  step: number;
  title: string;
  description: string;
  tech: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
  impact: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
  highlight?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: Exclude<ProjectCategory, 'All'>;
  technologies: string[];
  coverImage: string;
  demoGif: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  publishedYear: string;
  role: string;
  problem: {
    statement: string;
    targetUsers: string;
    motivation: string;
  };
  solution: {
    overview: string;
    architectureType: string;
    highlights: string[];
  };
  architecture: {
    summary: string;
    flowSteps: ArchitectureStep[];
  };
  features: ProjectFeature[];
  challenges: TechnicalChallenge[];
  results: ProjectMetric[];
}

