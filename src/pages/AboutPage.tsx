import React from 'react';
import { Scale, BookOpen, Building2, CheckCircle2, Shield, Users, Library } from 'lucide-react';
import libraryInterior from '../assets/images/ogun_judiciary_law_library_1790523661227.jpg';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16 pt-4">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1.5">
          <Library className="w-4 h-4" />
          <span>Institutional Profile</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950">
          About Ogun State Judiciary Law Library
        </h1>
        <p className="text-base text-stone-600 mt-2 font-serif italic">
          &ldquo;Official Custodian of Jurisprudence, State Legislation, and Legal Research for Ogun State, Nigeria&rdquo;
        </p>
      </div>

      {/* Mandate */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-950 border-b border-stone-200 pb-2">
          1. Mandate &amp; Establishment
        </h2>
        <div className="text-sm text-stone-700 leading-relaxed space-y-3">
          <p>
            Established under the auspices of the High Court of Justice of Ogun State, the <strong>Ogun State Judiciary Law Library</strong> is the premier judicial research and legal documentation center in the Gateway State. Headquartered at the Judiciary Complex on Kobape Road, Abeokuta, the library serves as the intellectual nerve center for the Hon. Chief Judge, High Court Judges, Magistrates, Customary Court Presidents, and legal practitioners.
          </p>
          <p>
            The digital portal was instituted to ensure seamless access to primary legal authorities, certified law reports, enacted state legislation, and practice circulars, fostering transparency, judicial expedition, and academic rigor in the administration of justice.
          </p>
        </div>
      </section>

      {/* Library Photographic Record */}
      <section className="border border-stone-200 bg-white overflow-hidden rounded-xs shadow-xs">
        <div className="relative aspect-video max-h-[420px] overflow-hidden bg-stone-900">
          <img
            src={libraryInterior}
            alt="Ogun State Judiciary Law Library Research Hall and Holdings"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 gap-2">
          <div>
            <span className="font-semibold text-stone-900 block sm:inline">Central Law Library Reading Room &amp; Holdings:</span>{' '}
            Judiciary Headquarters, High Court of Justice Complex, Kobape Road, Abeokuta.
          </div>
          <span className="font-mono text-[10px] text-amber-900 font-medium shrink-0 uppercase">
            Official Archives
          </span>
        </div>
      </section>

      {/* Library Collections */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-950 border-b border-stone-200 pb-2">
          2. Scope of Library Holdings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Ogun State Laws &amp; Gazettes</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Complete volumes of the Laws of Ogun State (Capitular compendiums) and official gazette supplements printed by the Government Printer.
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>High Court Law Reports (OGSJLR)</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Certified judgments and rulings of the High Court of Justice containing comprehensive summaries, subject-matter indexing, and authoritative ratios.
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Appellate &amp; Supreme Court Precedents</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nigerian Weekly Law Reports (NWLR), All Federation Weekly Law Reports (All FWLR), and Supreme Court Monthly Judgments (SCNJ).
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-stone-900 text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Practice Directions &amp; Court Rules</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Statutory procedural directives from the Chief Judge regulating electronic filing, virtual courtroom hearings, and mediation schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Divisional Network */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-950 border-b border-stone-200 pb-2">
          3. Divisional Network Across Ogun State
        </h2>
        <div className="text-sm text-stone-700 leading-relaxed space-y-3">
          <p>
            The library operates as an integrated system connecting the Central Law Library in Abeokuta with divisional libraries in:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-stone-800 bg-stone-50 p-4 rounded-xs border border-stone-200 font-mono">
            <li>Abeokuta Judicial Division (Central Repository)</li>
            <li>Ijebu-Ode Judicial Division</li>
            <li>Sagamu Judicial Division</li>
            <li>Ota Judicial Division</li>
            <li>Ilaro Judicial Division</li>
            <li>Ijebu-Igbo Judicial Division</li>
          </ul>
        </div>
      </section>

      {/* Use & Access Guidelines */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-950 border-b border-stone-200 pb-2">
          4. Library Usage &amp; Citation Guidelines
        </h2>
        <div className="text-sm text-stone-700 leading-relaxed space-y-3">
          <p>
            Judgments and statutory texts hosted on this digital portal are certified legal public records. Counsel preparing briefs of argument may cite decisions using the standard citation format: <em>(Year) Volume OGSJLR Page</em>, noting the division and presiding Judge.
          </p>
        </div>
      </section>
    </div>
  );
};
