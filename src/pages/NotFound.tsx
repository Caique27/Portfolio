import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-32 text-center bg-slate-950">
      <div className="text-7xl font-extrabold text-blue-500 font-mono tracking-widest mb-4">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-slate-400 max-w-md mb-8">
        The route you navigated to does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="inline-flex items-center space-x-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
      >
        <Home className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
};

