import React, { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import FacilityCard from '../components/ui/FacilityCard';
import AdmissionCTA from '../components/home/AdmissionCTA';
import { schoolData } from '../data/schoolData';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic', 'Technology', 'Wellness', 'Co-Curricular', 'Campus Safety', 'Logistics'];

  const filteredFacilities = selectedCategory === 'All'
    ? schoolData.facilities
    : schoolData.facilities.filter(f => f.category === selectedCategory);

  return (
    <main id="main-content" className="w-full">
      {/* Page Hero */}
      <PageHero
        badge="Campus Infrastructure"
        title="Facilities Designed for Purposeful Learning"
        subtitle="A secure, well-equipped, and supportive campus in Nacharam fostering academic curiosity, physical fitness, and co-curricular creativity."
        breadcrumbCurrent="Facilities"
      />

      {/* Facilities Section */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="container-custom">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B2545] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Facilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

          {/* Infrastructure Commitment Note */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B2545] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-slate-900">
                Safe, Clean & Supervised Learning Spaces
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All school facilities in our Nacharam campus are monitored daily for cleanliness, safety standards, and orderly student routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AdmissionCTA />
    </main>
  );
}
