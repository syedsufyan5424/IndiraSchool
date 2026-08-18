import React from 'react';
import { Quote, BookOpen, ShieldCheck, Award } from 'lucide-react';
import SchoolLogo from '../common/SchoolLogo';
import { schoolData } from '../../data/schoolData';

export default function PrincipalMessageSection() {
  const { heading, subheading, designation, institution, message, note } = schoolData.principalMessage;

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl relative">
          {/* Subtle Background Watermark */}
          <div className="absolute top-6 right-8 text-slate-100/80 pointer-events-none select-none">
            <Quote className="w-32 h-32 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            {/* Left: Elegant Academic Portrait Placeholder */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0B2545] to-[#133E87] p-1.5 shadow-xl border-2 border-[#C5A059]/40">
                <div className="w-full h-full rounded-xl bg-[#0B2545] flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 text-[#C5A059] border border-[#C5A059]/30">
                    <SchoolLogo className="w-10 h-10" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D8B772] font-semibold">
                    Leadership Desk
                  </span>
                  <span className="text-[11px] text-slate-300 mt-1">
                    Indira School, Nacharam
                  </span>
                </div>
              </div>

              {/* Title Under Portrait */}
              <div className="mt-4">
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  {designation}
                </h4>
                <p className="text-xs font-medium text-[#0B2545]">
                  {institution}
                </p>
                <p className="text-[11px] text-slate-400 italic mt-0.5">
                  Nacharam, Hyderabad
                </p>
              </div>
            </div>

            {/* Right: Editorial Message */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0B2545] border border-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545]"></span>
                Leadership & Vision
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                {heading}
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                {message.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-200/80 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Indira School Administration</span>
                <span className="text-[11px] text-slate-400">{note}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
