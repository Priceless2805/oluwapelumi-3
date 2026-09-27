import React from 'react';
import { Link } from 'react-router-dom';
import { LibraryDivisionInfo } from '../types';
import { ArrowRight, MapPin, Building, Mail, BookOpen } from 'lucide-react';

interface StateCardProps {
  state: LibraryDivisionInfo;
  caseCount: number;
}

export const StateCard: React.FC<StateCardProps> = ({
  state,
  caseCount
}) => {
  return (
    <Link
      to={`/divisions/${state.slug}`}
      className="group block bg-white border border-stone-200 p-5 hover:border-stone-400 hover:shadow-xs transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
          <Building className="w-3.5 h-3.5 text-amber-700" />
          <span>Judicial Division</span>
        </div>
        <span className="font-mono text-xs font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-xs">
          {state.totalHoldings.toLocaleString()} physical vols
        </span>
      </div>

      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
        {state.name}
      </h3>

      <p className="text-xs text-stone-600 mt-1 line-clamp-2">
        {state.headquarters}
      </p>

      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <span className="font-mono text-[11px] text-stone-600">
          {caseCount} digitized holdings in portal
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-900 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
};
