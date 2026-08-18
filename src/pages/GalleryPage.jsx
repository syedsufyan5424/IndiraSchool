import React, { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Lightbox from '../components/ui/Lightbox';
import AdmissionCTA from '../components/home/AdmissionCTA';
import { schoolData } from '../data/schoolData';
import { Maximize2, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = schoolData.galleryCategories;

  const filteredImages = selectedCategory === 'All'
    ? schoolData.gallery
    : schoolData.gallery.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <main id="main-content" className="w-full">
      {/* Page Hero */}
      <PageHero
        badge="Photo Gallery"
        title="Campus Life in Frames"
        subtitle="Moments of learning, discovery, athletics, and cultural expression at Indira School, Nacharam."
        breadcrumbCurrent="Gallery"
      />

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container-custom">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B2545] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-[#0B2545] backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Top Right */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-base font-bold mb-1 group-hover:text-[#D8B772] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-500">
              <ImageIcon className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p className="text-base font-medium">No gallery photographs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* CTA */}
      <AdmissionCTA />
    </main>
  );
}
