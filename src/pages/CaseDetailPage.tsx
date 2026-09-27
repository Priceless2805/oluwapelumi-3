import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getResourceBySlug, getAllLawResources } from '../utils/caseHelpers';
import {
  MapPin,
  Calendar,
  Scale,
  Gavel,
  ArrowLeft,
  FileText,
  BookOpen,
  Download,
  BookMarked,
  Tag,
  ShieldCheck,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const CaseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const resource = useMemo(() => {
    if (!slug) return undefined;
    return getResourceBySlug(slug);
  }, [slug]);

  const related = useMemo(() => {
    if (!resource) return [];
    return getAllLawResources()
      .filter((r) => r.id !== resource.id)
      .filter((r) => r.category === resource.category || r.division === resource.division)
      .slice(0, 3);
  }, [resource]);

  if (!resource) {
    return (
      <div className="py-16 text-center max-w-xl mx-auto space-y-4">
        <h1 className="font-serif text-2xl font-bold text-stone-900">
          Legal Holding Not Found
        </h1>
        <p className="text-xs sm:text-sm text-stone-500">
          The requested judgment or statute file could not be found in the Ogun State Judiciary Law Library catalog.
        </p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-amber-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Law Catalog</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-12 pb-16 pt-4 max-w-4xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-3">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1.5 text-stone-700 hover:text-amber-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Master Law Catalog</span>
        </Link>
        <span className="font-mono text-[11px] text-stone-500">
          HOLDING CALL NO: {resource.callNumber}
        </span>
      </div>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-xs border border-amber-200 uppercase tracking-widest">
            {resource.category}
          </span>
          <span className="font-mono text-xs text-stone-600 bg-stone-100 px-2.5 py-1 rounded-xs">
            {resource.shelfLocation}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 leading-tight">
          {resource.title}
        </h1>

        {/* Lead Case Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-stone-100/70 border border-stone-200 rounded-xs text-xs">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-mono tracking-wider">Citation</span>
            <span className="font-mono font-bold text-stone-900">
              {resource.citation || 'Unreported Ruling'}
            </span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-mono tracking-wider">Suit Number</span>
            <span className="font-mono font-semibold text-stone-900">
              {resource.suitNumber || 'Statutory Enactment'}
            </span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-mono tracking-wider">Judicial Division</span>
            <span className="font-semibold text-stone-900">
              {resource.division || 'Statewide Application'}
            </span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-mono tracking-wider">Date Promulgated / Delivered</span>
            <span className="font-semibold text-stone-900 font-mono">
              {resource.datePromulgatedOrDelivered}
            </span>
          </div>
        </div>
      </header>

      {/* Parties or Presiding Bench */}
      {(resource.parties || resource.presidingJudge) && (
        <section className="bg-stone-50 border border-stone-200 p-5 rounded-xs space-y-3">
          {resource.presidingJudge && (
            <div className="flex items-center gap-2 text-xs text-stone-800">
              <Gavel className="w-4 h-4 text-amber-800 shrink-0" />
              <span className="font-bold">Presiding Bench:</span>
              <span className="font-serif font-semibold text-stone-950">{resource.presidingJudge}</span>
            </div>
          )}

          {resource.parties && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200 text-xs">
              <div>
                <span className="font-mono text-[10px] uppercase text-stone-400 block mb-0.5">Claimant / Appellant / Prosecution</span>
                <span className="font-semibold text-stone-900">{resource.parties.appellantOrClaimant}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-stone-400 block mb-0.5">Defendant / Respondent</span>
                <span className="font-semibold text-stone-900">{resource.parties.respondentOrDefendant}</span>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Summary / Headnote */}
      <section className="bg-white border border-stone-200 p-6 sm:p-8 rounded-xs shadow-xs space-y-3">
        <h2 className="font-serif text-lg font-bold text-stone-900 uppercase tracking-wide border-b border-stone-200 pb-2 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-800" />
          <span>Judicial Headnote &amp; Case Summary</span>
        </h2>
        <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-serif">
          {resource.summary}
        </p>
      </section>

      {/* Subject Matter & Statutes Considered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subject Matter */}
        <div className="bg-white border border-stone-200 p-5 rounded-xs space-y-3">
          <h3 className="font-serif text-base font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center gap-2">
            <Tag className="w-4 h-4 text-stone-700" />
            <span>Subject Matter Indexed</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {resource.subjectMatter.map((sub, i) => (
              <span
                key={i}
                className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded-xs border border-stone-200"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Statutes Considered */}
        {resource.statutesConsidered && (
          <div className="bg-white border border-stone-200 p-5 rounded-xs space-y-3">
            <h3 className="font-serif text-base font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-800" />
              <span>Statutes &amp; Rules Considered</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {resource.statutesConsidered.map((stat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Ratio Decidendi / Legal Principles */}
      {resource.ratioDecidendi && resource.ratioDecidendi.length > 0 && (
        <section className="bg-white border border-stone-200 p-6 sm:p-8 rounded-xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
            <Scale className="w-5 h-5 text-amber-800" />
            <h2 className="font-serif text-xl font-bold text-stone-950">
              Ratio Decidendi &amp; Authoritative Holdings
            </h2>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-sm text-stone-800 leading-relaxed font-sans">
            {resource.ratioDecidendi.map((ratio, idx) => (
              <li key={idx} className="p-3 bg-stone-50/70 rounded-xs border border-stone-200">
                <span className="font-medium">{ratio}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Full Text / Excerpts */}
      <section className="bg-white border border-stone-200 p-6 sm:p-8 rounded-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <h2 className="font-serif text-lg font-bold text-stone-950 flex items-center gap-2">
            <FileText className="w-4 h-4 text-stone-700" />
            <span>Authoritative Text &amp; Excerpts</span>
          </h2>
          {resource.pdfFileSize && (
            <span className="font-mono text-xs text-stone-500 bg-stone-100 px-2 py-0.5 rounded-xs">
              PDF ARCHIVE SIZE: {resource.pdfFileSize}
            </span>
          )}
        </div>
        <pre className="whitespace-pre-wrap font-serif text-xs sm:text-sm text-stone-800 leading-relaxed bg-stone-50 p-5 rounded-xs border border-stone-200 overflow-x-auto">
          {resource.fullTextOrExcerpts}
        </pre>
      </section>

      {/* Physical Archival Citation Details */}
      <div className="bg-stone-900 text-stone-200 p-5 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <span className="font-mono text-amber-400 uppercase tracking-widest text-[10px] block">
            CERTIFIED LAW ARCHIVE VERIFICATION
          </span>
          <p className="text-stone-300">
            Physical copy preserved at {resource.shelfLocation}, High Court of Justice, Ogun State.
          </p>
        </div>
        <div className="font-mono text-xs text-stone-400">
          Call No: {resource.callNumber}
        </div>
      </div>

      {/* Related Holdings */}
      {related.length > 0 && (
        <section className="pt-8 border-t border-stone-200 space-y-4">
          <h3 className="font-serif text-lg font-bold text-stone-950">
            Related Legal Holdings in this Category / Division
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((item) => (
              <div key={item.id} className="bg-white border border-stone-200 p-4 rounded-xs">
                <span className="font-mono text-[10px] uppercase text-amber-900 font-semibold block mb-1">
                  {item.category}
                </span>
                <Link
                  to={`/catalog/${item.slug}`}
                  className="font-serif text-sm font-bold text-stone-900 hover:text-amber-900 line-clamp-2"
                >
                  {item.title}
                </Link>
                <div className="text-[11px] font-mono text-stone-500 mt-2">
                  {item.citation || item.callNumber}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
