import React from 'react';
import { developerInfo, skillsData } from '../data/projects';
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, Code, CheckCircle, Mail, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Actions Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase text-slate-400">Curriculum Vitae</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="py-6 space-y-8 max-h-[75vh] overflow-y-auto pr-2">
          
          {/* Header Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{developerInfo.name}</h2>
            <p className="text-sm sm:text-base text-blue-400 font-mono mt-1">{developerInfo.title}</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-3">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{developerInfo.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{developerInfo.email}</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              {developerInfo.bio}
            </p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center space-x-2 pb-2 border-b border-slate-800 mb-4">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-blue-500/40 pl-4 py-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h4 className="font-bold text-white">Lead Full Stack Engineer • TechWave Solutions</h4>
                  <span className="text-xs font-mono text-slate-400">2023 — Present</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Architected decoupled cloud systems, managed high-throughput microservices handling millions of monthly requests, and mentored senior and junior developers on React and Go best practices.
                </p>
              </div>

              <div className="border-l-2 border-slate-700 pl-4 py-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h4 className="font-bold text-white">Senior Software Engineer • Apex Digital Systems</h4>
                  <span className="text-xs font-mono text-slate-400">2021 — 2023</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Spearheaded frontend migration to Next.js App Router, engineered atomic inventory locking pipelines in Redis, and reduced bundle load times by 48%.
                </p>
              </div>

              <div className="border-l-2 border-slate-700 pl-4 py-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h4 className="font-bold text-white">Full Stack Developer • CloudForge Labs</h4>
                  <span className="text-xs font-mono text-slate-400">2019 — 2021</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Developed customer-facing analytics dashboards using React and Chart.js, designed secure RESTful APIs, and automated CI/CD releases on AWS.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center space-x-2 pb-2 border-b border-slate-800 mb-4">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education &amp; Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-white">B.S. in Computer Science</div>
                <div className="text-xs text-slate-400 mt-0.5">University of Technology • Honors</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-white">AWS Solutions Architect Associate</div>
                <div className="text-xs text-slate-400 mt-0.5">Amazon Web Services • Certified</div>
              </div>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center space-x-2 pb-2 border-b border-slate-800 mb-4">
              <Code className="w-4 h-4 text-amber-400" />
              <span>Core Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'Python', 'C Language', 'Java', 'React', 'Node.js', 'Express', 'MySQL', 'Spring Boot', 'Pygame', 'Pandas', 'Docker', 'Git & GitHub'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

