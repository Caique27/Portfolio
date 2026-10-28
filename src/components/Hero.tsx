import React from 'react';
import { ArrowDown, Mail, Terminal, Code2, Layers, Cpu, ShieldCheck, Award } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { developerInfo } from '../data/projects';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-600/20 via-sky-500/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-indigo-600/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-48 w-[550px] h-[550px] bg-cyan-600/15 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:36px_36px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10">
            
            {/* Subtitle / Role Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 shadow-sm">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-blue-300">
                {'Software Engineer'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Transforming ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                solutions
              </span>{' '}
              through code.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {developerInfo.bio}
            </p>

            {/* Solid Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 flex items-center justify-center space-x-2 group border border-blue-400/30"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 active:scale-95 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:border-slate-600"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Proof Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Full Stack &amp; Systems</span>
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>12+ Public Repos</span>
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>3+ years of experience</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${developerInfo.email}`}
                className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Photo Seamlessly Joining the Page (No Frame/Box) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-end">
            
            {/* Ambient Radial Spotlight Directly on the Page Background behind the Photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(37,99,235,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none -z-10" />

            {/* Seamless Cutout Presentation */}
            <div className="relative flex justify-center items-end">
              <img
                src="/assets/profile.png"
                alt={`${developerInfo.name} - Software Engineer`}
                className="w-auto h-[440px] sm:h-[500px] lg:h-[540px] max-w-full object-contain object-bottom select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                }}
              />
              
              {/* Soft Grounding Gradient into Hero Section Base */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
