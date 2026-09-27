import React, { useMemo } from 'react';
import { getResourcesByCategory } from '../utils/caseHelpers';
import { CaseCard } from '../components/CaseCard';
import { FileText, Scale } from 'lucide-react';

export const UnsolvedPage: React.FC = () => {
  const directions = useMemo(() => {
    return [
      ...getResourcesByCategory('Practice Directions'),
      ...getResourcesByCategory('Court Rules & Procedure'),
      ...getResourcesByCategory('Magistrate Court Directives')
    ];
  }, []);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-900 uppercase tracking-widest font-semibold mb-1.5">
          <FileText className="w-4 h-4 text-blue-700" />
          <span>Chief Judge Directives &amp; Practice Circulars</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Practice Directions &amp; Court Rules
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Binding practice directions and procedural circulars issued under the authority of the Hon. Chief Judge of Ogun State regulating court proceedings, virtual hearings, electronic filing, and case flow management.
        </p>
      </div>

      <div className="bg-blue-50/70 border border-blue-200 p-5 rounded-xs flex items-start gap-3.5 text-xs text-blue-950 leading-relaxed shadow-xs">
        <Scale className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-blue-950 uppercase tracking-wide block">
            Practice Compliance Directive
          </span>
          <p className="text-stone-700">
            All legal practitioners appearing before the High Courts, Magistrate Courts, and Customary Courts of Ogun State are mandated to comply with these active procedural directives.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-stone-500 font-mono pb-2 border-b border-stone-200">
        <span>Showing {directions.length} Procedural Directives &amp; Rules</span>
        <span>Court of Justice Regulatory Directives</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {directions.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
