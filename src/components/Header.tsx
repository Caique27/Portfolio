import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  // Monitor scroll for header styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = ['hero', 'projects', 'about', 'stack', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHome) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', target: 'about' },
    { id: 'projects', label: 'Projects', target: 'projects' },
    { id: 'stack', label: 'Stack', target: 'stack' },
    { id: 'contact', label: 'Contact', target: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo - Matches Reference 2: <Dev /> */}
          <Link
            to="/"
            className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            <span className="font-mono text-xl sm:text-2xl text-blue-500 group-hover:text-blue-400 transition-colors">
              &lt;
            </span>
            <span className="font-mono text-lg sm:text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
               /
            </span>
            <span className="font-mono text-xl sm:text-2xl text-blue-500 group-hover:text-blue-400 transition-colors">
              &gt;
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.target;
              return (
                <a
                  key={link.id}
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Get in Touch Button (Outline pill inspired by Reference 1) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center space-x-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-100 hover:text-white bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/50 hover:border-blue-400 rounded-md transition-all shadow-sm shadow-blue-500/10"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-slate-800">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
