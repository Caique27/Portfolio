import React from 'react';
import { ProjectCategory } from '../types/project';
import { Search, X, Sparkles, Filter } from 'lucide-react';

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}) => {
  return (
    <div className="w-full space-y-6">
      
      {/* Top Filter Controls Bar: Search & Quick Counts */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search Input Box */}
        <div className="relative flex-grow max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects by title, stack (e.g. React, Go, Redis)..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-900/90 text-slate-100 placeholder-slate-400 text-sm rounded-lg border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Counter Badge */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 self-end md:self-center">
          <Filter className="w-3.5 h-3.5 text-blue-400" />
          <span>
            Showing <strong className="text-white">{filteredCount}</strong> of {totalCount} projects
          </span>
        </div>

      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'All' && <Sparkles className="w-3.5 h-3.5 inline mr-1.5 opacity-80" />}
              {cat}
            </button>
          );
        })}
      </div>

    </div>
  );
};

