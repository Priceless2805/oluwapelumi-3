import React, { useMemo } from 'react';
import { getResourcesByCategory } from '../utils/caseHelpers';
import { CaseCard } from '../components/CaseCard';
import { Scale, BookOpen, ShieldCheck } from 'lucide-react';

export const RescuedPage: React.FC = () => {
  const laws = useMemo(() => getResourcesByCategory('Ogun State Laws'), []);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-900 uppercase tracking-widest font-semibold mb-1.5">
          <Scale className="w-4 h-4" />
          <span>Statutory Legislation &amp; Gazettes</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Laws of Ogun State (Statutory Compendium)
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          The official digital collection of substantive and procedural laws enacted by the Ogun State House of Assembly and assented to by the Executive Governor.
        </p>
      </div>

      <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xs flex items-center gap-3 text-xs text-emerald-950">
        <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
        <span>
          Text verified against original publications of the Ogun State Government Official Gazette and Law Reform Commission records.
        </span>
      </div>

      <div className="flex items-center justify-between text-xs text-stone-500 font-mono pb-2 border-b border-stone-200">
        <span>Showing {laws.length} Enacted State Statutes</span>
        <span>House of Assembly Enactments</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {laws.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
