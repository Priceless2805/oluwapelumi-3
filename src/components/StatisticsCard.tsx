import React from 'react';

interface StatisticsCardProps {
  label: string;
  value: number | string;
  description?: string;
  subtext?: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  label,
  value,
  description,
  subtext
}) => {
  return (
    <div className="bg-white border border-stone-200 p-5 rounded-xs shadow-xs flex flex-col justify-between">
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
          {label}
        </div>
        <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 font-mono tabular-nums">
          {value}
        </div>
        {description && (
          <p className="text-xs text-stone-600 mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {subtext && (
        <div className="mt-4 pt-2.5 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
          {subtext}
        </div>
      )}
    </div>
  );
};
