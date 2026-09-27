import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JUDICIAL_DIVISIONS } from '../data/divisions';
import { getResourcesByDivision } from '../utils/caseHelpers';
import { CaseCard } from '../components/CaseCard';
import { StatisticsCard } from '../components/StatisticsCard';
import { EmptyState } from '../components/EmptyState';
import { Building2, ArrowLeft, Mail, MapPin, Scale } from 'lucide-react';

export const StateDetailPage: React.FC = () => {
  const { state: divisionSlug } = useParams<{ state: string }>();

  const division = useMemo(() => {
    if (!divisionSlug) return undefined;
    const lower = divisionSlug.toLowerCase();
    return JUDICIAL_DIVISIONS.find((d) => d.slug === lower);
  }, [divisionSlug]);

  const resources = useMemo(() => {
    if (!division) return [];
    return getResourcesByDivision(division.slug);
  }, [division]);

  if (!division) {
    return (
      <div className="py-16 text-center max-w-xl mx-auto space-y-4">
        <h1 className="font-serif text-2xl font-bold text-stone-900">
          Judicial Division Not Found
        </h1>
        <p className="text-xs sm:text-sm text-stone-500">
          The requested judicial division could not be located in the Ogun State Judiciary register.
        </p>
        <Link
          to="/divisions"
          className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-amber-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Judicial Divisions</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Top Breadcrumb */}
      <div className="border-b border-stone-200 pb-3">
        <Link
          to="/divisions"
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-amber-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Judicial Divisions</span>
        </Link>
      </div>

      {/* Division Masthead */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1">
          <Building2 className="w-4 h-4" />
          <span>Ogun State Judiciary Territorial Bench</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950">
          {division.name}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 mt-2 font-mono">
          <span>Headquarters: <strong className="text-stone-900">{division.headquarters}</strong></span>
          <span>·</span>
          <span>Presiding: <strong className="text-stone-900">{division.residentJudge}</strong></span>
          <span>·</span>
          <span>Physical Holdings: <strong className="text-stone-900">{division.totalHoldings.toLocaleString()} volumes</strong></span>
        </div>
      </div>

      {/* Division Info Strip */}
      <div className="bg-stone-50 border border-stone-200 p-5 rounded-xs grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div>
          <span className="font-mono text-stone-400 uppercase text-[10px] block mb-1">Branch Law Library Address</span>
          <p className="text-stone-800 font-medium">{division.address}</p>
        </div>
        <div>
          <span className="font-mono text-stone-400 uppercase text-[10px] block mb-1">Official Registry Inquiries</span>
          <p className="text-stone-800 font-medium font-mono">{division.contactEmail}</p>
        </div>
      </div>

      {/* Holdings List */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between pb-3 border-b-2 border-stone-900">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
            Digitized Holdings &amp; Judgments from {division.name}
          </h2>
          <span className="font-mono text-xs text-stone-500">
            {resources.length} Digitized in Archive
          </span>
        </div>

        {resources.length === 0 ? (
          <EmptyState
            title={`Physical Holdings Currently Being Digitized for ${division.name}`}
            message={`The physical branch library of ${division.name} houses over ${division.totalHoldings.toLocaleString()} legal volumes. Records are actively scanned and uploaded to this digital repository.`}
            resetLabel="Browse Master Law Catalog"
            onReset={() => {
              window.location.href = '/catalog';
            }}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
