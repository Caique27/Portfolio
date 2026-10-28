import React from 'react';
import { Link } from 'react-router-dom';
import { developerInfo } from '../data/projects';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Brand Logo & Name */}
          <div className="md:col-span-4 space-y-2">
            <Link
              to="/"
              className="inline-flex items-center space-x-1.5 text-lg font-bold text-white hover:text-blue-400 transition-colors"
            >
              <span className="font-mono text-blue-500">&lt;</span>
              <span className="font-mono text-white"> /</span>
              <span className="font-mono text-blue-500">&gt;</span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm">
              Engineering modern web solutions, robust APIs, and distributed architectures that solve real-world problems.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-5 flex flex-wrap gap-6 text-xs sm:text-sm font-medium">
            <a href="/#hero" className="hover:text-white transition-colors">Home</a>
            <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
            <a href="/#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end space-x-4">
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${developerInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={handleScrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} {developerInfo.name}. All rights reserved. Built with React &amp; TypeScript.
          </div>
          <div className="flex items-center space-x-1">
            <span>Designed with precision</span>
            <span>•</span>
            <span>Clean Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
