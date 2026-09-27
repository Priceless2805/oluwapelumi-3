import React, { useState, useMemo } from 'react';
import { JUDICIAL_DIVISIONS } from '../data/divisions';
import { getLibraryStatistics } from '../utils/caseHelpers';
import { StateCard } from '../components/StateCard';
import { Building2, Search, MapPin } from 'lucide-react';

export const StatesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const stats = useMemo(() => getLibraryStatistics(), []);

  const filteredDivisions = useMemo(() => {
    return JUDICIAL_DIVISIONS.filter((d) => {
      const q = search.toLowerCase();
      return (
        d.name.toLowerCase().includes(q) ||
        d.headquarters.toLowerCase().includes(q) ||
        d.residentJudge.toLowerCase().includes(q)
      );
    });
  }, [search]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1.5">
          <Building2 className="w-4 h-4" />
          <span>Judicial Administration &amp; Divisional Branch Libraries</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Judicial Divisions of Ogun State
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          The Ogun State Judiciary operates six statutory judicial divisions with dedicated court complexes, divisional law libraries, and specialized registries.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by division name, location, or judge..."
          className="w-full pl-9 pr-4 py-2 bg-white text-stone-900 text-xs border border-stone-300 rounded-xs focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900 shadow-xs"
        />
      </div>

      {/* Divisional Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDivisions.map((division) => {
          const count = stats.byDivision[division.name] || 0;
          return (
            <StateCard
              key={division.slug}
              state={division}
              caseCount={count}
            />
          );
        })}
      </div>
    </div>
  );
};
