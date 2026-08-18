import React from 'react';
import { ArrowRight, BookOpen, Brain, Smile, Lightbulb, GraduationCap, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function AcademicsPreview() {
  const stageIcons = {
    primary: Smile,
    middle: Lightbulb,
    secondary: GraduationCap
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="container-custom">
        <SectionHeading
          badge="Academic Framework"
          title="Learning That Builds Strong Foundations"
          subtitle="A progressive and structured curriculum designed to nurture curiosity in early years, deepen analytical skills in middle school, and ensure academic rigor in secondary classes."
          align="center"
        />

        {/* 3 Stage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {schoolData.academics.stages.map((stage) => {
            const StageIcon = stageIcons[stage.id] || BookOpen;

            return (
              <div
                key={stage.id}
                className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 hover:border-[#0B2545]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-[#C5A059] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <StageIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200">
                      {stage.grades}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#0B2545] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#133E87] mb-3">
                    {stage.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {stage.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2545] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Button
                    to="/academics"
                    variant="ghost"
                    size="sm"
                    className="p-0 text-[#0B2545] hover:text-[#133E87] font-semibold"
                    icon={ArrowRight}
                  >
                    View Stage Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="bg-[#0B2545] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Interested in our curriculum and teaching approach?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Discover how our subject progression and continuous evaluation support every student's growth.
            </p>
          </div>
          <Button
            to="/academics"
            variant="gold"
            size="md"
            icon={ArrowRight}
            className="flex-shrink-0"
          >
            Explore Full Academics
          </Button>
        </div>
      </div>
    </section>
  );
}
