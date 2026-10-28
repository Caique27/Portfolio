import React, { useState } from 'react';
import { developerInfo } from '../data/projects';
import { 
  Mail, Copy, Check, MapPin, Clock, ArrowUpRight, MessageCircle 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const ContactForm: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase text-blue-400 font-semibold mb-3">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's build something together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            I am open to discussing professional opportunities, high-impact projects, and new ideas.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Direct Channel Card */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Fast Response
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">Direct Email</h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Reach out directly for project proposals, technical inquiries, or consulting.
              </p>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-sm text-slate-200">
                <span className="font-mono text-xs sm:text-sm truncate select-all">{developerInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex-shrink-0 inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md border border-slate-700 transition-colors ml-2"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={`mailto:${developerInfo.email}`}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Compose in Email App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Network Card */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  Network
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">LinkedIn Profile</h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Connect professionally, view verified career milestones, and discuss enterprise opportunities.
              </p>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 font-mono">
                linkedin.com/in/caique-alves-/
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Codebase Card */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                  Open Source
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">GitHub Repositories</h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                Explore open source contributions, production repositories, architectural experiments, and clean code.
              </p>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 font-mono">
                github.com/Caique27
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Explore Repositories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Worldwide
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">Location &amp; Remote</h3>
              <p className="text-sm text-slate-400 mt-1 mb-4">
                {developerInfo.location}
              </p>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Typical response time: Under 24 hours</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Timezone: GMT-3 / EST Compatible
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
