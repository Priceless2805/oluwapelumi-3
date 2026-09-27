import React from 'react';

interface StatusBadgeProps {
  status: string;
  showDot?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, showDot = true }) => {
  // Editorial clean status styling: subtle text color, no bloated candy pills
  let colorStyle = 'text-stone-700 bg-stone-100 border-stone-300';
  let dotColor = 'bg-stone-500';

  if (status === 'Victims Rescued') {
    colorStyle = 'text-emerald-900 bg-emerald-50 border-emerald-200';
    dotColor = 'bg-emerald-600';
  } else if (status === 'Trial' || status === 'Suspect Charged') {
    colorStyle = 'text-amber-900 bg-amber-50 border-amber-200';
    dotColor = 'bg-amber-600';
  } else if (status === 'Convicted') {
    colorStyle = 'text-red-950 bg-red-50 border-red-200';
    dotColor = 'bg-red-700';
  } else if (status === 'Suspects Arrested' || status === 'Suspect Arrested') {
    colorStyle = 'text-blue-950 bg-blue-50 border-blue-200';
    dotColor = 'bg-blue-600';
  } else if (status === 'Unsolved' || status === 'Victims Missing') {
    colorStyle = 'text-neutral-900 bg-neutral-100 border-neutral-300';
    dotColor = 'bg-neutral-600';
  } else if (status === 'Investigation') {
    colorStyle = 'text-indigo-950 bg-indigo-50 border-indigo-200';
    dotColor = 'bg-indigo-600';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium border rounded-xs ${colorStyle} tracking-tight whitespace-nowrap`}
    >
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} aria-hidden="true" />}
      <span>{status}</span>
    </span>
  );
};
