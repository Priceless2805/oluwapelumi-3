import React from 'react';
import { Link } from 'react-router-dom';
import { LawResource } from '../types';
import { Scale, BookOpen, MapPin, Calendar, FileText, ArrowRight, BookMarked } from 'lucide-react';
import libraryInterior from '../assets/images/ogun_judiciary_law_library_1790523661227.jpg';

interface FeaturedCaseProps {
  item: LawResource;
}

export const FeaturedCase: React.FC<FeaturedCaseProps> = ({ item }) => {
  return (
    <section className="bg-white border border-stone-200 overflow-hidden mb-12 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left/Top: Law Library Photo */}
        <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] bg-stone-900 flex items-center justify-center overflow-hidden">
          <img
            src={libraryInterior}
            alt="Ogun State Judiciary Law Library Reading Room and Book Stacks"
            className="w-full h-full object-cover object-center brightness-95"
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent p-5 text-[11px] text-stone-300">
            <span className="font-mono uppercase text-amber-400 text-[10px] block mb-0.5 tracking-wider">
              JUDICIARY HEADQUARTERS · LAW LIBRARY &amp; ARCHIVES
            </span>
            <span>Chief Judge Memorial Law Wing, High Court of Justice, Kobape Road, Abeokuta.</span>
          </div>
        </div>

        {/* Right/Bottom: Featured Resource Narrative */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-stone-50/60">
          <div>
            {/* Category and Call Number */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-amber-900 uppercase tracking-widest">
                FEATURED STATUTORY HOLDING
              </span>
              <span className="font-mono text-xs text-stone-600 bg-white px-2.5 py-0.5 border border-stone-200 rounded-xs">
                {item.callNumber}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 leading-tight mb-3">
              <Link to={`/catalog/${item.slug}`} className="hover:text-amber-900 transition-colors">
                {item.title}
              </Link>
            </h2>

            {/* Citation Strip */}
            <div className="space-y-2 py-3 border-y border-stone-200 text-xs text-stone-600 mb-5">
              {item.citation && (
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="font-semibold text-stone-800">Official Citation:</span>
                  <span className="font-mono font-bold text-stone-900">{item.citation}</span>
                </div>
              )}
              {item.division && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="font-semibold text-stone-800">Judicial Division:</span>
                  <span>{item.division}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                <span className="font-semibold text-stone-800">Promulgation / Date:</span>
                <span className="font-mono">{item.datePromulgatedOrDelivered}</span>
              </div>
            </div>

            {/* Synopsis */}
            <p className="text-sm text-stone-700 leading-relaxed mb-6">
              {item.summary}
            </p>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs text-stone-500 font-mono flex items-center gap-1">
              <BookMarked className="w-3.5 h-3.5" />
              <span>{item.shelfLocation}</span>
            </span>
            <Link
              to={`/catalog/${item.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
            >
              <span>Examine Holding</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
