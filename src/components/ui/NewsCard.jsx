import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Bell } from 'lucide-react';
import Button from './Button';

export default function NewsCard({ item, className = '' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, category, date, summary, fullContent, isRecent } = item;

  return (
    <>
      <div className={`bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group ${className}`}>
        {/* Recent indicator ribbon if applicable */}
        {isRecent && (
          <div className="absolute top-0 right-0">
            <span className="bg-[#0B2545] text-[#C5A059] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              Notice
            </span>
          </div>
        )}

        <div>
          {/* Header with Date & Category */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="inline-flex items-center gap-1 font-medium text-[#0B2545] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              <Calendar className="w-3.5 h-3.5 text-[#133E87]" />
              {date}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#0B2545] transition-colors leading-snug">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {summary}
          </p>
        </div>

        {/* Read More Trigger */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B2545] hover:text-[#133E87] group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            Read Notice
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-xs text-slate-400">Official Notice</span>
        </div>
      </div>

      {/* Detail Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-[#0B2545]">
                {category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
              {title}
            </h3>

            <div className="prose prose-sm text-slate-600 mb-6 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p>{fullContent || summary}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Indira School, Nacharam</span>
              <Button size="sm" variant="primary" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
