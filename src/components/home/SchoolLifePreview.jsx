import React from 'react';
import { ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function SchoolLifePreview() {
  const images = schoolData.gallery.slice(0, 5);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Student Life & Experiences"
            title="Vibrant School Life Beyond Textbooks"
            subtitle="From morning assemblies and practical science sessions to annual sports meets and cultural celebrations in Nacharam."
            align="left"
            className="mb-0"
          />

          <Button
            to="/gallery"
            variant="primary"
            size="md"
            icon={ImageIcon}
            className="self-start md:self-auto flex-shrink-0"
          >
            Explore Photo Gallery
          </Button>
        </div>

        {/* Editorial Collage Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Main Large Feature Image (Col 7) */}
          {images[0] && (
            <div className="md:col-span-7 group relative h-72 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden shadow-md bg-slate-900">
              <img
                src={images[0].image}
                alt={images[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C5A059] text-slate-900 inline-block mb-2">
                  {images[0].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display">
                  {images[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
                  {images[0].caption}
                </p>
              </div>
            </div>
          )}

          {/* Right 2 Stacked Images (Col 5) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            {images[1] && (
              <div className="group relative h-52 sm:h-64 md:h-[208px] rounded-2xl overflow-hidden shadow-md bg-slate-900">
                <img
                  src={images[1].image}
                  alt={images[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 text-slate-900 inline-block mb-1">
                    {images[1].category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold">
                    {images[1].title}
                  </h4>
                </div>
              </div>
            )}

            {images[2] && (
              <div className="group relative h-52 sm:h-64 md:h-[208px] rounded-2xl overflow-hidden shadow-md bg-slate-900">
                <img
                  src={images[2].image}
                  alt={images[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 text-slate-900 inline-block mb-1">
                    {images[2].category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold">
                    {images[2].title}
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
