import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large authentic school imagery & highlights */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                  alt="Indira School Campus & Classroom"
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#D8B772] font-semibold block mb-0.5">
                    Campus Learning Environment
                  </span>
                  <span className="text-sm font-medium">
                    Nacharam, Hyderabad – 500076
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0B2545] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Value-Based</span>
                    <span className="text-[11px] text-slate-500">Education & Discipline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0B2545] border border-blue-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545]"></span>
              {schoolData.about.badge}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug font-display">
              {schoolData.about.heading}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {schoolData.about.introText}
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#0B2545] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Foundational Academics</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Focus on core literacy, numeracy & sciences.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#0B2545] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Moral Character</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Integrity, discipline, and mutual respect.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#0B2545] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Safe Campus</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Supervised environment in Nacharam.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#0B2545] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Co-Curriculars</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sports, arts, music, and school activities.</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
