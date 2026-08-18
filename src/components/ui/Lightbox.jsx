import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || {};

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Image container */}
      <div 
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black/40 border border-white/10">
          <img
            src={currentItem.image}
            alt={currentItem.title || "Indira School Gallery"}
            className="max-h-[72vh] max-w-full object-contain select-none"
            loading="eager"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-3 text-center text-white max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#C5A059] text-slate-900">
              {currentItem.category || "Campus"}
            </span>
            <span className="text-xs text-slate-400">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {currentItem.title}
          </h3>
          {currentItem.caption && (
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              {currentItem.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
