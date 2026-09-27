import React from 'react';
import { JUDICIAL_DIVISIONS, RESOURCE_CATEGORIES } from '../data/divisions';
import { RotateCcw, Filter } from 'lucide-react';

export interface FilterState {
  division: string;
  category: string;
  year: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  availableYears: number[];
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  onReset,
  availableYears
}) => {
  const hasActiveFilters = Boolean(
    filters.division || filters.category || filters.year
  );

  const handleFieldChange = (field: keyof FilterState, value: string) => {
    onChange({
      ...filters,
      [field]: value
    });
  };

  return (
    <div className="bg-white border border-stone-200 p-4 sm:p-5 rounded-xs shadow-xs mb-8">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-amber-900" />
          <span>Catalog Search Criteria &amp; Filters</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-amber-900 hover:text-amber-950 font-medium transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label htmlFor="filter-category" className="block text-xs font-medium text-stone-700 mb-1">
            Resource Classification
          </label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(e) => handleFieldChange('category', e.target.value)}
            className="w-full text-xs py-2 px-2.5 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900"
          >
            <option value="">All Categories ({RESOURCE_CATEGORIES.length})</option>
            {RESOURCE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Division Filter */}
        <div>
          <label htmlFor="filter-division" className="block text-xs font-medium text-stone-700 mb-1">
            Judicial Division
          </label>
          <select
            id="filter-division"
            value={filters.division}
            onChange={(e) => handleFieldChange('division', e.target.value)}
            className="w-full text-xs py-2 px-2.5 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900"
          >
            <option value="">All Divisions ({JUDICIAL_DIVISIONS.length})</option>
            {JUDICIAL_DIVISIONS.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div>
          <label htmlFor="filter-year" className="block text-xs font-medium text-stone-700 mb-1">
            Year of Promulgation / Judgment
          </label>
          <select
            id="filter-year"
            value={filters.year}
            onChange={(e) => handleFieldChange('year', e.target.value)}
            className="w-full text-xs py-2 px-2.5 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900"
          >
            <option value="">All Years</option>
            {availableYears.map((yr) => (
              <option key={yr} value={yr.toString()}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
