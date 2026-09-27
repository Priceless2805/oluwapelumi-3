import React from 'react';
import { Link } from 'react-router-dom';
import {
  getAllLawResources,
  getFeaturedResource,
  getRecentResources,
  getResourcesByCategory,
  getLibraryStatistics
} from '../utils/caseHelpers';
import { JUDICIAL_DIVISIONS } from '../data/divisions';
import { FeaturedCase } from '../components/FeaturedCase';
import { CaseCard } from '../components/CaseCard';
import { StatisticsCard } from '../components/StatisticsCard';
import {
  Scale,
  BookOpen,
  Search,
  ArrowRight,
  MapPin,
  Clock,
  Gavel,
  FileText,
  Building2,
  FileCheck,
  Library
} from 'lucide-react';
import ogunHero from '../assets/images/ogun_judiciary_hero_1790522989025.jpg';

export const HomePage: React.FC = () => {
  const featured = getFeaturedResource();
  const recentHoldings = getRecentResources(4);
  const judgments = getResourcesByCategory('High Court Judgments').slice(0, 3);
  const stateLaws = getResourcesByCategory('Ogun State Laws').slice(0, 3);
  const practiceDirections = getResourcesByCategory('Practice Directions').slice(0, 3);
  const stats = getLibraryStatistics();

  return (
    <div className="space-y-16 pb-12">
      {/* Editorial Broadsheet Masthead Banner */}
      <section className="border-b border-stone-200 pb-8 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-900 uppercase font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              OFFICIAL DIGITAL LAW REPOSITORY · HIGH COURT OF JUSTICE
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
              Ogun State Judiciary Law Library
            </h1>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl font-serif italic">
              &ldquo;Preserving Judicial Precedents, State Legislation, and Legal Heritage for the Administration of Justice&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-amber-950 transition-colors shadow-xs"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Law Catalog</span>
            </Link>
            <Link
              to="/divisions"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded-xs hover:border-stone-500 hover:text-stone-950 transition-colors shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5 text-stone-500" />
              <span>Judicial Divisions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <div className="relative rounded-xs overflow-hidden border border-stone-200 shadow-xs max-h-[380px]">
        <img
          src={ogunHero}
          alt="High Court of Justice Abeokuta Ogun State"
          className="w-full h-full object-cover object-center max-h-[380px] brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-white max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 block mb-1">
              CENTRAL LAW LIBRARY · JUDICIARY HEADQUARTERS
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold">
              High Court of Justice Complex, Kobape Road, Abeokuta
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
              Serving the Supreme Court, Court of Appeal, High Court Benches, Customary Court of Appeal, and Magisterial Districts across Ogun State.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Law Holding */}
      {featured && <FeaturedCase item={featured} />}

      {/* Latest Cataloged Additions */}
      <section>
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-stone-900">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-900" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 tracking-tight">
              Recently Cataloged Holdings &amp; Judgments
            </h2>
          </div>
          <Link
            to="/catalog"
            className="text-xs font-semibold text-stone-700 hover:text-amber-900 flex items-center gap-1 uppercase tracking-wider transition-colors"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentHoldings.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
      </section>

      {/* Three Pillar Jurisprudence Section: Judgments, State Laws, Practice Directions */}
      <section className="bg-stone-100/70 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-stone-950">
              Primary Legal Collections
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Direct access to certified High Court judgments, enacted state laws, and active practice directives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: High Court Judgments */}
            <div className="bg-white border border-stone-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                    <Gavel className="w-4 h-4 text-amber-700" />
                    <span>High Court Judgments</span>
                  </div>
                  <span className="font-mono text-xs bg-amber-50 text-amber-900 px-2 py-0.5 rounded-xs font-semibold">
                    {stats.highCourtJudgmentsCount} Indexed
                  </span>
                </div>
                <p className="text-xs text-stone-500 mb-4">
                  Full certified judgments from the High Courts across Abeokuta, Ijebu-Ode, Sagamu, and Ota divisions.
                </p>
                <div className="space-y-3">
                  {judgments.map((c) => (
                    <div key={c.id} className="pb-3 border-b border-stone-100 last:border-0">
                      <Link
                        to={`/catalog/${c.slug}`}
                        className="font-serif text-sm font-bold text-stone-900 hover:text-amber-900 block leading-snug"
                      >
                        {c.title}
                      </Link>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-1 font-mono">
                        <span className="text-amber-900 font-semibold">{c.citation || c.suitNumber}</span>
                        <span>·</span>
                        <span>{c.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/judgments"
                className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 hover:text-amber-900"
              >
                <span>Browse All Judgments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Column 2: Laws of Ogun State */}
            <div className="bg-white border border-stone-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                    <Scale className="w-4 h-4 text-emerald-700" />
                    <span>Ogun State Laws</span>
                  </div>
                  <span className="font-mono text-xs bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-xs font-semibold">
                    {stats.stateLawsCount} Statutes
                  </span>
                </div>
                <p className="text-xs text-stone-500 mb-4">
                  Substantive statutes enacted by the Ogun State House of Assembly and gazetted by the Government Printer.
                </p>
                <div className="space-y-3">
                  {stateLaws.map((c) => (
                    <div key={c.id} className="pb-3 border-b border-stone-100 last:border-0">
                      <Link
                        to={`/catalog/${c.slug}`}
                        className="font-serif text-sm font-bold text-stone-900 hover:text-amber-900 block leading-snug"
                      >
                        {c.title}
                      </Link>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-1 font-mono">
                        <span className="text-emerald-900 font-semibold">{c.citation}</span>
                        <span>·</span>
                        <span>Enacted {c.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/state-laws"
                className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 hover:text-amber-900"
              >
                <span>Browse All State Laws</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Column 3: Practice Directions */}
            <div className="bg-white border border-stone-200 p-5 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                    <FileText className="w-4 h-4 text-blue-700" />
                    <span>Practice Directions</span>
                  </div>
                  <span className="font-mono text-xs bg-blue-50 text-blue-900 px-2 py-0.5 rounded-xs font-semibold">
                    {stats.practiceDirectionsCount} Active
                  </span>
                </div>
                <p className="text-xs text-stone-500 mb-4">
                  Procedural directives issued by the Chief Judge regarding virtual hearings, e-filing, and fast-track trials.
                </p>
                <div className="space-y-3">
                  {practiceDirections.map((c) => (
                    <div key={c.id} className="pb-3 border-b border-stone-100 last:border-0">
                      <Link
                        to={`/catalog/${c.slug}`}
                        className="font-serif text-sm font-bold text-stone-900 hover:text-amber-900 block leading-snug"
                      >
                        {c.title}
                      </Link>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-1 font-mono">
                        <span className="text-blue-900 font-semibold">{c.citation}</span>
                        <span>·</span>
                        <span>{c.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/practice-directions"
                className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 hover:text-amber-900"
              >
                <span>Browse Practice Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Library Holdings Statistics */}
      <section>
        <div className="flex items-start justify-between flex-wrap gap-4 pb-3 mb-6 border-b border-stone-200">
          <div>
            <span className="font-mono text-[11px] font-semibold text-amber-900 uppercase tracking-widest block mb-1">
              ARCHIVE INVENTORY
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
              Ogun State Judiciary Library Catalog Statistics
            </h2>
          </div>
          <div className="text-xs text-stone-500 max-w-sm text-right">
            Official holdings across the Central Law Library and Divisional Branches.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatisticsCard
            label="Total Holdings in Repository"
            value={stats.totalCatalogedVolumes}
            description="Digitized statutory enactments, rulings, and procedural guidelines."
            subtext="Available for Bench and Bar study"
          />
          <StatisticsCard
            label="High Court Judgments"
            value={stats.highCourtJudgmentsCount}
            description="Full text rulings with headnotes, ratio decidendi, and facts."
            subtext="Certified True Copies"
          />
          <StatisticsCard
            label="State Laws & Codes"
            value={stats.stateLawsCount}
            description="Substantive legislation enacted by the House of Assembly."
            subtext="Updated with latest amendments"
          />
          <StatisticsCard
            label="Judicial Divisions"
            value={stats.divisionsCount}
            description="Divisional libraries spanning Abeokuta, Ijebu, Remo, Yewa & Ota."
            subtext="Unified digital library network"
          />
        </div>
      </section>

      {/* Judicial Divisions Directory */}
      <section>
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-stone-900">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
              Judicial Divisions &amp; Branch Libraries
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Physical library collections and court complexes established across Ogun State.
            </p>
          </div>
          <Link
            to="/divisions"
            className="text-xs font-semibold text-stone-700 hover:text-amber-900 uppercase tracking-wider flex items-center gap-1"
          >
            <span>View All Divisions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JUDICIAL_DIVISIONS.map((div) => {
            const count = stats.byDivision[div.name] || 0;
            return (
              <div key={div.slug} className="bg-white border border-stone-200 p-5 rounded-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-amber-900 font-semibold uppercase">
                      Division
                    </span>
                    <span className="font-mono text-xs text-stone-500">
                      {div.totalHoldings.toLocaleString()} volumes
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    <Link to={`/divisions/${div.slug}`} className="hover:text-amber-900">
                      {div.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                    {div.headquarters}
                  </p>
                  <div className="text-[11px] text-stone-500 font-mono">
                    Bench: {div.residentJudge}
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">{count} digital records</span>
                  <Link
                    to={`/divisions/${div.slug}`}
                    className="text-stone-900 font-medium hover:text-amber-900 flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional Legal Mission */}
      <section className="bg-stone-950 text-white p-6 sm:p-10 rounded-xs border border-stone-800">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
            <Scale className="w-4 h-4" />
            <span>Chief Judge Welcome &amp; Archival Mandate</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-100">
            Fostering Legal Erudition and the Swift Dispensation of Justice
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            The Ogun State Judiciary Law Library serves as the repository of jurisprudence for the Gateway State. Accessible without financial impediment, the platform democratizes legal research for legal practitioners, scholars, and members of the public seeking authoritative state laws and certified judgments.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white underline underline-offset-4 decoration-stone-600"
            >
              <span>Read About Library History &amp; Collections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white underline underline-offset-4 decoration-stone-600"
            >
              <span>Access Complete Law Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
