import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, BookOpen, Building2, FileCheck2, ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-20">
      {/* Editorial Sourcing & Legal Banner */}
      <div className="border-b border-stone-800 bg-stone-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-stone-400">
          <div className="flex items-start gap-3">
            <Scale className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-200 block mb-0.5">High Court of Justice Repository</span>
              Official digital archive of the Ogun State Judiciary preserving authoritative law reports, certified true copies of judgments, and state gazettes for the bench and bar.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BookOpen className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-200 block mb-0.5">Judicial Research &amp; Precedents</span>
              Covering all six judicial divisions: Abeokuta, Ijebu-Ode, Sagamu, Ota, Ilaro, and Ijebu-Igbo, alongside appellate authorities.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-200 block mb-0.5">Statutory Fidelity</span>
              All statutes, court rules, and practice directions are verified against official Ogun State Government Gazettes and Chief Judge Directives.
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xs bg-amber-950 flex items-center justify-center text-amber-400 border border-amber-800/40">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                OGUN STATE JUDICIARY LAW LIBRARY
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed pr-4">
              Dedicated to upholding the rule of law and judicial excellence by providing comprehensive access to primary legal materials, case precedents, state legislation, and practice directions for Judges, Magistrates, Legal Practitioners, and researchers.
            </p>
            <div className="space-y-1 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Judiciary Complex, Kobape Road, P.M.B. 2001, Abeokuta, Ogun State</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>chiefregistrar@ogunstatelawlibrary.gov.ng</span>
              </div>
            </div>
          </div>

          {/* Holdings */}
          <div>
            <h4 className="text-xs font-semibold text-stone-100 uppercase tracking-widest mb-3">
              Library Holdings
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/catalog" className="text-stone-400 hover:text-white transition-colors">
                  Master Law Catalog
                </Link>
              </li>
              <li>
                <Link to="/judgments" className="text-stone-400 hover:text-white transition-colors">
                  High Court Judgments
                </Link>
              </li>
              <li>
                <Link to="/state-laws" className="text-stone-400 hover:text-white transition-colors">
                  Laws of Ogun State
                </Link>
              </li>
              <li>
                <Link to="/practice-directions" className="text-stone-400 hover:text-white transition-colors">
                  Practice Directions
                </Link>
              </li>
              <li>
                <Link to="/cause-lists" className="text-stone-400 hover:text-white transition-colors">
                  Weekly Cause Lists
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-xs font-semibold text-stone-100 uppercase tracking-widest mb-3">
              Judicial Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/divisions/abeokuta" className="text-stone-400 hover:text-white transition-colors">
                  Abeokuta Division (Headquarters)
                </Link>
              </li>
              <li>
                <Link to="/divisions/ijebu-ode" className="text-stone-400 hover:text-white transition-colors">
                  Ijebu-Ode Division
                </Link>
              </li>
              <li>
                <Link to="/divisions/sagamu" className="text-stone-400 hover:text-white transition-colors">
                  Sagamu Division
                </Link>
              </li>
              <li>
                <Link to="/divisions/ota" className="text-stone-400 hover:text-white transition-colors">
                  Ota Division
                </Link>
              </li>
              <li>
                <Link to="/divisions/ilaro" className="text-stone-400 hover:text-white transition-colors">
                  Ilaro Division
                </Link>
              </li>
              <li>
                <Link to="/divisions/ijebu-igbo" className="text-stone-400 hover:text-white transition-colors">
                  Ijebu-Igbo Division
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Institutional */}
          <div>
            <h4 className="text-xs font-semibold text-stone-100 uppercase tracking-widest mb-3">
              Institutional
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Official digital service provided under the authority of the Hon. Chief Judge of Ogun State.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-300 bg-stone-800/80 p-2.5 rounded-xs border border-stone-700/60">
              <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Certified True Legal Records</span>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div>
            © {new Date().getFullYear()} High Court of Justice &amp; Judiciary of Ogun State. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-stone-300 transition-colors">Library Charter</Link>
            <span>·</span>
            <Link to="/disclaimer" className="hover:text-stone-300 transition-colors">Legal Notices</Link>
            <span>·</span>
            <span className="font-mono text-[11px] text-stone-500">Abeokuta, Ogun State, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
