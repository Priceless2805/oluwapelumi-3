import React, { useMemo } from 'react';
import { getResourcesByCategory } from '../utils/caseHelpers';
import { CaseCard } from '../components/CaseCard';
import { Gavel, Scale, ShieldCheck } from 'lucide-react';

export const CourtCasesPage: React.FC = () => {
  const judgments = useMemo(() => getResourcesByCategory('High Court Judgments'), []);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1.5">
          <Gavel className="w-4 h-4" />
          <span>High Court Law Reports &amp; Precedents</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Ogun State High Court Judgments &amp; Rulings
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Access authoritative Certified True Copies (CTC) of landmark judgments, rulings, and decisions delivered by the Judges of the High Court of Justice of Ogun State.
        </p>
      </div>

      {/* Jurisprudential Notice */}
      <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xs flex items-start gap-3.5 text-xs text-amber-950 leading-relaxed">
        <Scale className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-0.5 uppercase tracking-wide">
            Judicial Precedents &amp; Stare Decisis
          </span>
          Judgments compiled herein reflect decisions delivered in open court across Abeokuta, Ijebu-Ode, Sagamu, and Ota divisions. They establish binding authority for subordinate Magistrate and Customary Courts within Ogun State.
        </div>
      </div>

      {/* Count Strip */}
      <div className="flex items-center justify-between text-xs text-stone-500 font-mono pb-2 border-b border-stone-200">
        <span>Showing {judgments.length} Indexed High Court Judgments</span>
        <span>Civil &amp; Criminal Divisions</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {judgments.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
