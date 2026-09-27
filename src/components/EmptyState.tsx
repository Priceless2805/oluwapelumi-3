import React from 'react';
import { SearchX, FolderSearch } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  onReset?: () => void;
  resetLabel?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Documented Cases Match Your Criteria',
  message = 'Try modifying your search keywords or loosening filter constraints such as State, Year, or Classification.',
  onReset,
  resetLabel = 'Reset Filters'
}) => {
  return (
    <div className="bg-white border border-stone-200 p-8 sm:p-12 text-center rounded-xs shadow-xs my-6">
      <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mx-auto mb-4 text-stone-500">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto leading-relaxed mb-6">
        {message}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-red-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
        >
          <FolderSearch className="w-4 h-4" />
          <span>{resetLabel}</span>
        </button>
      )}
    </div>
  );
};

export const LoadingState: React.FC<{ message?: string }> = ({
  message = 'Loading verified archive records...'
}) => {
  return (
    <div className="py-16 text-center">
      <div className="w-8 h-8 border-2 border-stone-300 border-t-red-900 rounded-full animate-spin mx-auto mb-3" />
      <p className="text-xs font-mono uppercase tracking-wider text-stone-500">
        {message}
      </p>
    </div>
  );
};

export const ErrorState: React.FC<{ message?: string; onRetry?: () => void }> = ({
  message = 'An unexpected error occurred while loading case records.',
  onRetry
}) => {
  return (
    <div className="bg-red-50 border border-red-200 p-6 text-center max-w-lg mx-auto my-8 rounded-xs">
      <p className="text-xs sm:text-sm text-red-950 font-medium mb-3">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1.5 bg-red-900 text-white text-xs rounded-xs hover:bg-red-950 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
};
