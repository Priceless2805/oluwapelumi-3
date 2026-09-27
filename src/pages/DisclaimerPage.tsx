import React from 'react';
import { Scale, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-4">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1.5">
          <ShieldAlert className="w-4 h-4" />
          <span>Legal Notices &amp; Citation Terms</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950">
          Judicial Information &amp; Legal Notices
        </h1>
        <p className="text-sm text-stone-500 mt-2 font-mono">
          HIGH COURT OF JUSTICE OF OGUN STATE · ABEODUTA
        </p>
      </div>

      {/* Primary Principle Block */}
      <div className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xs space-y-4 shadow-sm border border-stone-800">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
          <Scale className="w-4 h-4" />
          <span>Official Public Records Charter</span>
        </div>
        <blockquote className="font-serif text-lg sm:text-xl text-stone-100 italic leading-relaxed border-l-2 border-amber-600 pl-4 py-1">
          &ldquo;The laws, judgments, rulings, practice directions, and cause lists presented on this digital platform are authoritative public records of the Ogun State Judiciary. While every care is exercised in proofreading digital transcripts against original signed judgments and gazetted enactments, certified true copies issued under seal by the Chief Registrar remain the definitive legal documents for court proceedings.&rdquo;
        </blockquote>
      </div>

      {/* Structured Legal Terms */}
      <div className="space-y-8 text-sm text-stone-800 leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-stone-950 border-b border-stone-200 pb-2">
            1. Certified True Copies (CTC)
          </h2>
          <p>
            Law practitioners tendering judicial documents in contentious trial proceedings may apply to the Central Registry at Abeokuta or relevant Divisional Registries for physical Certified True Copies bearing the official rubber stamp and dry seal of the High Court of Justice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-stone-950 border-b border-stone-200 pb-2">
            2. Copyright &amp; Fair Use
          </h2>
          <p>
            Judgments and statutory legislation of Ogun State are official public records. They may be quoted, cited, and reproduced freely for legal practice, scholarly critique, judicial advocacy, and academic study with appropriate attribution to the Ogun State Judiciary Law Library.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-stone-950 border-b border-stone-200 pb-2">
            3. Privacy &amp; Anonymization in Matrimonial and Juvenile Causes
          </h2>
          <p>
            In compliance with the Child’s Rights Law of Ogun State and applicable High Court Rules, names of minors and vulnerable parties in adoption, wardship, and certain matrimonial proceedings may be redacted or anonymized in published electronic law reports.
          </p>
        </section>
      </div>
    </div>
  );
};
