import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import NewsCard from '../components/ui/NewsCard';
import AdmissionCTA from '../components/home/AdmissionCTA';
import { schoolData } from '../data/schoolData';
import { Search, Bell, ArrowLeft } from 'lucide-react';

export default function News() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Admissions', 'Academic', 'Announcement', 'Sports', 'School Event'];

  const filteredNews = schoolData.newsAndEvents.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <main id="main-content" className="w-full">
      {/* Page Hero with Back Button */}
      <PageHero
        badge="Official Circulars"
        title="News, Events & Circulars"
        subtitle="Official school announcements, academic schedules, and event updates for parents and students of Indira School."
        breadcrumbCurrent="News & Events"
        showBackButton={true}
        backLink="/"
        backLabel="Back to Home"
      />

      {/* News & Events Section */}
      <section className="py-12 sm:py-20 bg-slate-50 relative">
        <div className="container-custom">
          {/* Quick Back & Counter Bar */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0B2545] transition-colors cursor-pointer group"
              aria-label="Back to Previous Page"
            >
              <ArrowLeft className="w-4 h-4 text-[#C5A059] transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Previous Page</span>
            </button>

            <span className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-[#0B2545]">{filteredNews.length}</span> circular{filteredNews.length === 1 ? '' : 's'}
            </span>
          </div>

          {/* Controls Bar: Category Pills + Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Category Pills */}
            <div className="flex items-center flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0B2545] text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars..."
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs sm:text-sm bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B2545]/20 focus:border-[#0B2545]"
              />
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto">
              <Bell className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                No Notices Found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                No official circulars match your current filter or search criteria.
              </p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs font-semibold text-[#0B2545] hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <AdmissionCTA />
    </main>
  );
}
