import React from 'react';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { About } from '../components/About';
import { ContactForm } from '../components/ContactForm';
import { projectsData } from '../data/projects';

interface HomeProps {
  onOpenResume?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenResume }) => {
  return (
    <main>
      <Hero />
      <ProjectGrid projects={projectsData} />
      <About />
      <ContactForm />
    </main>
  );
};

