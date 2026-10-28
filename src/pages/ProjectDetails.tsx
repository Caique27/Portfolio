import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Calendar, 
  Layers, CheckCircle2, ShieldAlert, Cpu, Sparkles, Server,
  Code2, Users, Target, Lightbulb, Compass, Share2, Check
} from 'lucide-react';
import { Github } from '../components/Icons';
import { useState } from 'react';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);

  // Find the project matching slug
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 mb-4">
          <Layers className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
        <p className="mt-2 text-sm text-slate-400 max-w-md">
          The project you are looking for might have been moved or does not exist.
        </p>
        <Link
          to="/#projects"
          className="mt-6 inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    );
  }

  // Previous and next projects for Section H
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-blue-400 font-semibold">{project.title}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors text-xs"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">URL Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>

            <Link
              to="/#projects"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Vitrine</span>
            </Link>
          </div>
        </div>

        {/* SECTION A: Presentation */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full font-mono">
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-full">
              Published: {project.publishedYear}
            </span>
            <span className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-full">
              Role: {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-3 text-lg sm:text-xl text-blue-300/90 font-medium">
            {project.subtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            {project.fullDescription}
          </p>

          {/* Action Links & Tech Stack */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all group"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all group"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Technologies Tag Pills */}
          <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-mono text-slate-500 mr-2">Technologies:</span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* High-Resolution Project Interface Preview / Animated GIF */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900/90 shadow-2xl relative">
            <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-500 ml-2">Interface Preview &amp; Workflow</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Interactive Mockup
              </span>
            </div>
            
            <div className="aspect-[16/9] w-full bg-slate-950 flex items-center justify-center p-2">
              <img
                src={project.demoGif}
                alt={`${project.title} live interface visual preview`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* SECTION B: Problem & Objective */}
        <section className="mb-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-blue-400 font-semibold mb-2">
            <Target className="w-4 h-4 text-blue-400" />
            <span>Problem &amp; Objective</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">The Challenge &amp; Purpose</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/70">
              <div className="text-xs font-mono uppercase text-rose-400 mb-2 font-semibold">The Core Problem</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem.statement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/70">
              <div className="text-xs font-mono uppercase text-sky-400 mb-2 font-semibold">Target Audience</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem.targetUsers}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/70">
              <div className="text-xs font-mono uppercase text-emerald-400 mb-2 font-semibold">Architectural Motivation</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem.motivation}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION C: Developed Solution */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span>Architected Solution</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Developed Solution &amp; Approach</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            {project.solution.overview}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.solution.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION D: Technologies & Architecture */}
        <section className="mb-16 p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-purple-400 font-semibold mb-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Technical Blueprint</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Technologies &amp; System Architecture</h2>
          <p className="text-sm font-mono text-purple-300 mb-6">
            Topology: {project.solution.architectureType}
          </p>

          <p className="text-slate-300 leading-relaxed mb-8">
            {project.architecture.summary}
          </p>

          {/* Interactive Flow Diagram Representation (Section D Requirement) */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-mono text-slate-400 tracking-wider">
              System Execution Flow:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {project.architecture.flowSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 relative group hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold font-mono flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                      {step.tech}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION E: Key Features */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-sky-400 font-semibold mb-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Key Engineering Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-white">{feature.title}</h3>
                    {feature.highlight && (
                      <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {feature.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION F: Technical Challenges & Learnings */}
        <section className="mb-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-amber-400 font-semibold mb-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Deep Dives</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Technical Challenges &amp; Learnings</h2>

          <div className="space-y-6">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3"
              >
                <div className="text-sm font-bold text-rose-400 flex items-center space-x-2">
                  <span>Challenge:</span>
                  <span className="text-slate-100 font-medium">{item.challenge}</span>
                </div>
                <div className="text-sm font-bold text-sky-400 flex items-start space-x-2">
                  <span className="flex-shrink-0">Engineered Solution:</span>
                  <span className="text-slate-300 font-normal">{item.solution}</span>
                </div>
                <div className="text-sm font-bold text-emerald-400 flex items-center space-x-2 pt-2 border-t border-slate-900">
                  <span>Verified Impact:</span>
                  <span className="text-emerald-300/90 font-medium">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION G: Results & Metrics */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Verified Impact</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Concrete Results &amp; Benchmarks</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-2">
                    {res.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{res.label}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION H: Navigation Between Projects */}
        <section className="pt-12 border-t border-slate-800">
          <div className="text-xs font-mono uppercase text-slate-500 mb-6 text-center">
            Explore Other Case Studies
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Previous Project Card */}
            <Link
              to={`/project/${prevProject.slug}`}
              className="p-6 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors mb-2">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Project</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {prevProject.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {prevProject.shortDescription}
                </p>
              </div>
            </Link>

            {/* Next Project Card */}
            <Link
              to={`/project/${nextProject.slug}`}
              className="p-6 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group flex flex-col justify-between text-right"
            >
              <div>
                <div className="flex items-center justify-end space-x-2 text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors mb-2">
                  <span>Next Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {nextProject.shortDescription}
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/#projects"
              className="inline-flex items-center space-x-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
            >
              <span>View All Featured Projects</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
