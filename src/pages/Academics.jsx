import React from 'react';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import FeatureCard from '../components/ui/FeatureCard';
import AdmissionCTA from '../components/home/AdmissionCTA';
import Button from '../components/ui/Button';
import { Smile, Lightbulb, GraduationCap, CheckCircle2, Brain, ClipboardCheck, HelpCircle, Flame, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Academics() {
  const stageIcons = {
    primary: Smile,
    middle: Lightbulb,
    secondary: GraduationCap
  };

  return (
    <main id="main-content" className="w-full">
      {/* Page Hero */}
      <PageHero
        badge="Academic Framework"
        title="Learning That Builds Strong Foundations"
        subtitle={schoolData.academics.heroSubtitle}
        breadcrumbCurrent="Academics"
      />

      {/* Academic Stages Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container-custom space-y-16 sm:space-y-20">
          <SectionHeading
            badge="Learning Stages"
            title="Comprehensive Curriculum Framework"
            subtitle="Carefully structured learning pathways that adapt to the developmental and cognitive milestones of each age group."
            align="center"
          />

          {schoolData.academics.stages.map((stage, index) => {
            const StageIcon = stageIcons[stage.id] || BookOpen;
            const isReversed = index % 2 !== 0;

            const stageImages = {
              primary: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
              middle: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
              secondary: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
            };

            return (
              <div
                key={stage.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Col (5 cols) */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 group">
                    <img
                      src={stageImages[stage.id] || "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"}
                      alt={stage.title}
                      className="w-full h-72 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C5A059] text-slate-900">
                        {stage.grades}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#0B2545] text-white flex items-center justify-center">
                        <StageIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Col (7 cols) */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0B2545] border border-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545]"></span>
                    Stage 0{index + 1}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                    {stage.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#133E87]">
                    {stage.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Core Academic Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-[#0B2545] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Teaching Methodology / Pedagogy Pillars */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="container-custom">
          <SectionHeading
            badge="Teaching Methodology"
            title="Our Pedagogical Approach"
            subtitle="How we make learning engaging, conceptual, and impactful in everyday classroom lessons."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolData.academics.pedagogyPillars.map((pillar, idx) => (
              <FeatureCard
                key={idx}
                title={pillar.title}
                description={pillar.description}
                iconName={pillar.icon}
                badge={`Pillar 0${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Co-curricular note */}
      <section className="py-16 bg-white relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50/80 to-slate-50 rounded-2xl p-8 sm:p-10 border border-blue-200/70">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-[#C5A059] flex items-center justify-center flex-shrink-0 shadow-md">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Continuous Assessment & Academic Mentorship
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  At Indira School, assessment is designed as a tool for encouragement and diagnostic improvement rather than stress. Regular unit evaluations, project assessments, and constructive teacher feedback help identify learning gaps early.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button to="/admissions" variant="primary" size="sm" icon={ArrowRight}>
                    Apply for Admission
                  </Button>
                  <Button to="/contact" variant="outline" size="sm">
                    Connect with Teachers Desk
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AdmissionCTA />
    </main>
  );
}
