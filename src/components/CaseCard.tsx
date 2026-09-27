import React from 'react';
import { Link } from 'react-router-dom';
import { LawResource } from '../types';
import { BookMarked, MapPin, Scale, Calendar, ArrowUpRight, FileText } from 'lucide-react';

interface CaseCardProps {
  item: LawResource;
}

export const CaseCard: React.FC<CaseCardProps> = ({ item }) => {
  return (
    <article className="group relative bg-white border border-stone-200 p-5 sm:p-6 transition-all hover:border-stone-400 hover:shadow-xs flex flex-col justify-between">
      <div>
        {/* Category & Call Number */}
        <div className="flex items-center justify-between gap-3 text-xs mb-2.5">
          <span className="font-mono text-[11px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="font-mono text-[11px] text-stone-500">
            {item.callNumber}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-950 transition-colors mb-2">
          <Link to={`/catalog/${item.slug}`} className="focus:outline-none focus:underline">
            {item.title}
          </Link>
        </h3>

        {/* Citation and Suit Number */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-600 mb-3 font-mono">
          {item.citation && (
            <span className="font-bold text-stone-800">{item.citation}</span>
          )}
          {item.suitNumber && (
            <>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Suit No: {item.suitNumber}</span>
            </>
          )}
          {item.division && (
            <>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500">{item.division}</span>
            </>
          )}
        </div>

        {/* Presiding Judge or Enactment */}
        {item.presidingJudge && (
          <div className="text-xs text-stone-600 mb-2.5 italic">
            Before: <span className="font-serif font-semibold text-stone-800">{item.presidingJudge}</span>
          </div>
        )}

        {/* Summary */}
        <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
          {item.summary}
        </p>

        {/* Subject Matter Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {item.subjectMatter.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded-xs border border-stone-200"
            >
              {tag}
            </span>
          ))}
          {item.subjectMatter.length > 3 && (
            <span className="text-[10px] text-stone-400 self-center">
              +{item.subjectMatter.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Shelf location and Access Link */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <div className="flex items-center gap-1.5 text-[11px] text-stone-500 truncate max-w-[200px] sm:max-w-xs">
          <BookMarked className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="truncate">{item.shelfLocation}</span>
        </div>

        <Link
          to={`/catalog/${item.slug}`}
          className="inline-flex items-center gap-1 font-medium text-stone-900 group-hover:text-amber-900 transition-colors shrink-0"
        >
          <span>Read Law File</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
