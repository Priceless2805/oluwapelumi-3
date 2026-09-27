import React, { useMemo } from 'react';
import { getResourcesByCategory } from '../utils/caseHelpers';
import { CaseCard } from '../components/CaseCard';
import { Calendar, Clock, FileText, Building2 } from 'lucide-react';

export const CauseListsPage: React.FC = () => {
  const causeLists = useMemo(() => getResourcesByCategory('Cause Lists'), []);

  return (
    <div className="space-y-8 pb-12">
      <div className="border-b border-stone-200 pb-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1.5">
          <Calendar className="w-4 h-4" />
          <span>Court Fixtures &amp; Hearing Dockets</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Official Weekly Cause Lists
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Daily and weekly cause lists of cases slated for hearing, motions, trials, and delivery of judgments across all High Court divisions in Ogun State.
        </p>
      </div>

      <div className="bg-stone-50 border border-stone-200 p-4 rounded-xs text-xs text-stone-700 flex items-center gap-3">
        <Clock className="w-4 h-4 text-stone-500 shrink-0" />
        <span>
          Court sittings commence promptly at 9:00 AM daily unless otherwise directed by the presiding Judge. Legal practitioners are advised to verify court registries for supplementary lists.
        </span>
      </div>

      <div className="flex items-center justify-between text-xs text-stone-500 font-mono pb-2 border-b border-stone-200">
        <span>Showing {causeLists.length} Published Cause Lists</span>
        <span>Abeokuta, Ijebu-Ode, Sagamu, and Ota Divisions</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {causeLists.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
