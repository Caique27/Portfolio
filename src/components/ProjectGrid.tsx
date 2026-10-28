import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';
import { FolderSearch, RotateCcw } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend & APIs',
  'Mobile & Cloud',
  'AI & Data',
];

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Combined Category + Search filtering
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Category check
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      // 2. Search query check (title, technologies, short description, full description)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q)) ||
        project.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase text-blue-400 font-semibold mb-3">
            <span>Portfolio Vitrine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            A curated selection of projects I've built, exploring different technologies, architectures, and solutions.
          </p>
        </div>

        {/* Filters & Search Component */}
        <div className="mb-10">
          <ProjectFilters
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={projects.length}
            filteredCount={filteredProjects.length}
          />
        </div>

        {/* Project Cards Grid (3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 px-6 text-center bg-slate-900/60 rounded-2xl border border-slate-800/80 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <FolderSearch className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="mt-1.5 text-sm text-slate-400">
              No projects match your search for "{searchQuery}" in{' '}
              <span className="text-blue-400 font-medium">"{activeCategory}"</span>.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

