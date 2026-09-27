import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 text-center max-w-lg mx-auto space-y-5">
      <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-500 border border-stone-200">
        <FileQuestion className="w-7 h-7 text-stone-700" />
      </div>
      <div className="space-y-1">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold">
          Error 404
        </span>
        <h1 className="font-serif text-3xl font-bold text-stone-950">
          Law Holding or Page Not Found
        </h1>
      </div>
      <p className="text-sm text-stone-600 leading-relaxed">
        The legal document, judgment docket, or library division page you requested could not be located in the Ogun State Judiciary Law Library catalog.
      </p>
      <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-amber-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Library Home</span>
        </Link>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded-xs hover:border-stone-500 transition-colors"
        >
          <Search className="w-4 h-4 text-stone-500" />
          <span>Search Master Catalog</span>
        </Link>
      </div>
    </div>
  );
};
