import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllLawResources } from '../utils/caseHelpers';
import { CaseCard } from '../components/CaseCard';
import { SearchBar } from '../components/SearchBar';
import { FilterPanel, FilterState } from '../components/FilterPanel';
import { EmptyState } from '../components/EmptyState';
import { Pagination } from '../components/Pagination';
import { BookOpen } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

export const CasesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allResources = useMemo(() => getAllLawResources(), []);

  const initialQuery = searchParams.get('q') || '';
  const initialDivision = searchParams.get('division') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialYear = searchParams.get('year') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    division: initialDivision,
    category: initialCategory,
    year: initialYear
  });

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const div = searchParams.get('division') || '';
    const cat = searchParams.get('category') || '';
    const yr = searchParams.get('year') || '';

    setSearchQuery(q);
    setFilters({ division: div, category: cat, year: yr });
  }, [searchParams]);

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(allResources.map((c) => c.year))).sort((a, b) => b - a);
    return years;
  }, [allResources]);

  const handleQueryChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);

    const newParams = new URLSearchParams(searchParams);
    if (val) {
      newParams.set('q', val);
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);

    const newParams = new URLSearchParams(searchParams);
    if (newFilters.division) newParams.set('division', newFilters.division);
    else newParams.delete('division');

    if (newFilters.category) newParams.set('category', newFilters.category);
    else newParams.delete('category');

    if (newFilters.year) newParams.set('year', newFilters.year);
    else newParams.delete('year');

    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setFilters({ division: '', category: '', year: '' });
    setCurrentPage(1);
    setSearchParams({});
  };

  const filteredResources = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allResources.filter((item) => {
      if (q) {
        const titleMatch = item.title.toLowerCase().includes(q);
        const summaryMatch = item.summary.toLowerCase().includes(q);
        const citationMatch = item.citation?.toLowerCase().includes(q);
        const suitMatch = item.suitNumber?.toLowerCase().includes(q);
        const judgeMatch = item.presidingJudge?.toLowerCase().includes(q);
        const callMatch = item.callNumber.toLowerCase().includes(q);
        const shelfMatch = item.shelfLocation.toLowerCase().includes(q);
        const divMatch = item.division?.toLowerCase().includes(q);
        const catMatch = item.category.toLowerCase().includes(q);
        const subjectMatch = item.subjectMatter.some((s) => s.toLowerCase().includes(q));
        const statutesMatch = item.statutesConsidered?.some((s) => s.toLowerCase().includes(q));
        const ratioMatch = item.ratioDecidendi?.some((r) => r.toLowerCase().includes(q));

        const hasMatch =
          titleMatch ||
          summaryMatch ||
          citationMatch ||
          suitMatch ||
          judgeMatch ||
          callMatch ||
          shelfMatch ||
          divMatch ||
          catMatch ||
          subjectMatch ||
          statutesMatch ||
          ratioMatch;

        if (!hasMatch) return false;
      }

      if (filters.division && item.division !== filters.division) {
        return false;
      }

      if (filters.category && item.category !== filters.category) {
        return false;
      }

      if (filters.year && item.year.toString() !== filters.year) {
        return false;
      }

      return true;
    });
  }, [allResources, searchQuery, filters]);

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const paginatedResources = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredResources.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredResources, currentPage]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest font-semibold mb-1.5">
          <BookOpen className="w-4 h-4" />
          <span>Library Holdings Repository</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950">
          Ogun State Master Law Catalog
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Search the collection of Ogun State statutory enactments, High Court rulings, practice directions, civil procedure rules, and certified cause lists.
        </p>
      </div>

      <SearchBar
        query={searchQuery}
        onQueryChange={handleQueryChange}
        resultCount={filteredResources.length}
        totalCount={allResources.length}
        placeholder="Search by suit number, citation, statute, presiding judge, or subject matter..."
      />

      <FilterPanel
        filters={filters}
        onChange={handleFiltersChange}
        onReset={handleResetFilters}
        availableYears={availableYears}
      />

      {filteredResources.length === 0 ? (
        <EmptyState
          title="No Legal Resources Match Your Search Criteria"
          message="Try revising your keywords, clearing judicial division filters, or broadening your subject matter search."
          onReset={handleResetFilters}
          resetLabel="Clear Search &amp; Filters"
        />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
            <span>
              Showing {paginatedResources.length} of {filteredResources.length} cataloged volumes
            </span>
            <span>Page {currentPage} of {totalPages || 1}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedResources.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => {
              setCurrentPage(p);
              window.scrollTo({ top: 180, behavior: 'smooth' });
            }}
          />
        </div>
      )}
    </div>
  );
};
