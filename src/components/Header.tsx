import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Scale, BookOpen, Building2 } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'LAW CATALOG', to: '/catalog' },
    { label: 'JUDICIAL DIVISIONS', to: '/divisions' },
    { label: 'JUDGMENTS', to: '/judgments' },
    { label: 'STATE LAWS', to: '/state-laws' },
    { label: 'PRACTICE DIRECTIONS', to: '/practice-directions' },
    { label: 'CAUSE LISTS', to: '/cause-lists' },
    { label: 'ABOUT THE LIBRARY', to: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFA]/95 backdrop-blur-md border-b border-stone-200">
      {/* Top micro-bar: Official Ogun State Judiciary gazette bar */}
      <div className="bg-stone-900 text-stone-300 text-[11px] px-4 py-1.5 flex items-center justify-between border-b border-stone-800">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full" />
          <span className="font-mono uppercase tracking-wider text-stone-200 font-semibold">
            OGUN STATE JUDICIARY
          </span>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="text-stone-400 hidden sm:inline truncate">
            High Court of Justice · Official Digital Law Library &amp; Legal Research Repository · Abeokuta, Nigeria
          </span>
          <div className="ml-auto flex items-center gap-4 text-[11px]">
            <span className="font-mono text-stone-400 hidden md:inline">PORTAL: OGS/JUD/LIB-2026</span>
            <Link to="/about" className="text-stone-300 hover:text-white underline decoration-stone-600">
              Library Access Rules
            </Link>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Wordmark & Judiciary Seal */}
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-stone-950 flex items-center justify-center text-amber-500 border border-amber-600/30 shadow-xs">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-950 group-hover:text-amber-900 transition-colors uppercase leading-tight">
                  OGUN STATE JUDICIARY LAW LIBRARY
                </span>
                <span className="text-[10px] tracking-widest text-stone-500 uppercase font-mono mt-0.5">
                  High Court of Justice · Abeokuta, Nigeria
                </span>
              </div>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold tracking-wider text-stone-700">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors py-1 hover:text-amber-950 ${
                    isActive
                      ? 'text-amber-900 font-bold border-b-2 border-amber-800'
                      : 'text-stone-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Quick Search & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-xs transition-colors flex items-center gap-1.5 text-xs font-medium border border-stone-300"
              aria-label="Toggle Search"
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span className="hidden sm:inline">Search Library</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-xs transition-colors border border-stone-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Drawer */}
      {searchOpen && (
        <div className="bg-stone-100/90 border-t border-b border-stone-200 px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by suit number, statute, judgment title, presiding judge, or subject matter..."
                className="w-full pl-9 pr-24 py-2.5 bg-white text-stone-900 text-sm border border-stone-300 rounded-xs focus:outline-none focus:ring-1 focus:ring-amber-900 focus:border-amber-900 placeholder:text-stone-400"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-1 px-4 py-1.5 text-xs font-medium bg-stone-900 text-white hover:bg-amber-900 transition-colors rounded-xs"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-50 border-b border-stone-200 px-4 py-4 space-y-1">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-xs transition-colors ${
                  isActive
                    ? 'bg-amber-950 text-white'
                    : 'text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500 px-3">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>High Court of Justice Complex, Kobape Road, Abeokuta</span>
          </div>
        </div>
      )}
    </header>
  );
};
