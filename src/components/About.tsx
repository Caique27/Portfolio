import React from 'react';
import { developerInfo, skillsData } from '../data/projects';
import { TechIcon } from './TechIcons';
import { 
  FileText, CheckCircle2, Code2, Server, Database, Cloud, 
  Layers, Terminal, Award, Zap, Compass, Cpu 
} from 'lucide-react';

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase text-blue-400 font-semibold mb-3">
            <span>Profile &amp; Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            A look into my engineering background, core philosophies, and the tools I wield.
          </p>
        </div>

        {/* Top Split: Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a <strong className="text-white font-semibold">Software Engineer &amp; Solutions Architect</strong> with experience building scalable web applications, distributed backend services, and high-precision user interfaces.
            </p>
            <p>
              My primary focus centers on building challenging innovative systems. Whether tackling concurrent database locking in CRM, building real-time collaboration engines, or optimizing multi-cloud deployment pipelines, I prioritize simplicity, measurable performance, and long-term maintainability.
            </p>
            <p>
              Outside of immediate production delivery, I continuously study new technologies.
            </p>

            {/* Quick Core Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Distributed Systems & Concurrency',
                'Efficient Backend Tools (Node, Express.js)',
                'Data Modeling and ETL building',
                'Cloud Infrastructure & CI/CD Pipelines',
                'Fullstack development',
                'REST APIs',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            {onOpenResume && (
              <div className="pt-4">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center space-x-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all shadow-sm group"
                >
                  <FileText className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>View Full Curriculum Vitae</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Highlight Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <Award className="w-6 h-6 text-blue-400 mb-3" />
              <div className="text-3xl font-extrabold text-white">{'3+ years'}</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1">Professional Experience</div>
              <p className="text-xs text-slate-500 mt-2">Delivering production software for enterprises and startups.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <Zap className="w-6 h-6 text-amber-400 mb-3" />
              <div className="text-3xl font-extrabold text-white">{developerInfo.projectsShipped}</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1">Production Applications</div>
              <p className="text-xs text-slate-500 mt-2">Shipped across e-commerce, fintech, and analytics.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <Cpu className="w-6 h-6 text-emerald-400 mb-3" />
              <div className="text-3xl font-extrabold text-white">Strong</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1">Computer Science Fundamentals</div>
              <p className="text-xs text-slate-500 mt-2">Grounded in algorithms, data structures, and core computing principles.</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <Compass className="w-6 h-6 text-purple-400 mb-3" />
              <div className="text-3xl font-extrabold text-white">Global</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1">Remote Mindset</div>
              <p className="text-xs text-slate-500 mt-2">Seamless asynchronous collaboration worldwide.</p>
            </div>

          </div>

        </div>

        {/* Stack & Skills Category Breakdown (Prompt Requirement: "organizar as habilidades por categorias") */}
        <div id="stack" className="pt-8">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white">Technical Arsenal &amp; Stack</h3>
            <p className="text-sm text-slate-400 mt-1">
              Categorized technologies, frameworks, and tooling verified in production workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((category) => (
              <div
                key={category.category}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono mb-4 pb-2 border-b border-slate-800">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between text-sm py-1.5 px-2 -mx-2 rounded-lg hover:bg-slate-800/40 transition-colors"
                      >
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            <TechIcon name={skill.name} className="w-5 h-5" />
                          </div>
                          <span className="text-slate-200 font-medium truncate">{skill.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded flex-shrink-0 ml-2">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

