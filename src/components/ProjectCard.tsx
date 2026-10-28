import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { Github } from './Icons';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="group relative flex flex-col bg-[#0f172a] hover:bg-[#131d35] rounded-xl border border-slate-800/90 hover:border-blue-500/50 shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden">
      
      {/* Top Image Container with Reference 2 Hover Actions */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
        
        {/* Placeholder skeleton while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-800/40 animate-pulse flex items-center justify-center">
            <Layers className="w-8 h-8 text-slate-600 animate-bounce" />
          </div>
        )}

        <img
          src={project.coverImage}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover ${project.slug === 'flappy-bird' ? 'object-center' : 'object-top'} transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Hover Overlay with Reference 2 Circular Quick Action Buttons */}
        <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          {/* GitHub Repo Circular Button (White background with black icon as in Reference 2) */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="w-11 h-11 rounded-full bg-white text-slate-950 hover:bg-slate-100 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              title="View Source Code on GitHub"
            >
              <Github className="w-5 h-5 fill-current" />
            </a>
          )}

          {/* Live Demo Circular Button (Blue background with white icon as in Reference 2) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-500 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Open Live Application"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Category Pill Tag (top-left) */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-slate-950/80 text-blue-400 border border-slate-700/80 rounded-md backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-200">
            <Link to={`/project/${project.slug}`} className="focus:outline-none focus:underline">
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technology Tag Pills (Matching Reference 2) */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 rounded-md transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-mono text-slate-400 bg-slate-900 rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer: View Details CTA */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all focus:outline-none"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <span className="text-xs font-mono text-slate-500">
            {project.publishedYear}
          </span>
        </div>

      </div>

    </article>
  );
};
