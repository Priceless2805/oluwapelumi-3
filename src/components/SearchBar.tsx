import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount?: number;
  totalCount?: number;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  resultCount,
  totalCount,
  placeholder = 'Search by case title, victim name, suspect name, LGA, state, or keywords...'
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="relative flex items-center">
        <div className="absolute left-3.5 pointer-events-none text-stone-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-white text-stone-900 border border-stone-300 rounded-xs text-sm focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-red-900 shadow-xs placeholder:text-stone-400 transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className="absolute right-3 p-1 text-stone-400 hover:text-stone-700 rounded-full transition-colors"
            title="Clear search"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Result feedback */}
      {(query || (resultCount !== undefined && totalCount !== undefined)) && (
        <div className="flex items-center justify-between text-xs text-stone-500 px-1">
          <span>
            {query ? (
              <>
                Showing <strong className="text-stone-900 font-mono tabular-nums">{resultCount}</strong> {resultCount === 1 ? 'match' : 'matches'} for &ldquo;<span className="text-stone-900 font-medium">{query}</span>&rdquo;
              </>
            ) : (
              <>
                Showing <strong className="text-stone-900 font-mono tabular-nums">{resultCount}</strong> of <strong className="text-stone-900 font-mono tabular-nums">{totalCount}</strong> documented cases
              </>
            )}
          </span>
          {query && (
            <button
              onClick={() => onQueryChange('')}
              className="text-red-900 hover:underline font-medium cursor-pointer"
            >
              Reset search
            </button>
          )}
        </div>
      )}
    </div>
  );
};
