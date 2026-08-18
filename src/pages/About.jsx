import React from 'react';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import PrincipalMessageSection from '../components/home/PrincipalMessageSection';
import FeatureCard from '../components/ui/FeatureCard';
import AdmissionCTA from '../components/home/AdmissionCTA';
import Button from '../components/ui/Button';
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Users, BookOpen, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function About() {
  return (
    <main id="main-content" className="w-full">
      {/* Page Hero */}
      <PageHero
        badge="About Our School"
        title="A Place to Learn, Grow and Discover"
        subtitle={schoolData.about.heroSubtitle}
        breadcrumbCurrent="About Us"
      />

      {/* Narrative Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Indira School Students Assembly"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-[#D8B772] uppercase tracking-wider block">
                    Campus Ethos
                  </span>
                  <p className="text-sm font-medium text-slate-100">
                    Fostering discipline, mutual respect, and foundational learning in Nacharam.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <p className="text-xs text-slate-600">
                    Nacharam, Hyderabad – 500076, Telangana
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block mb-1">
                    Pillars
                  </span>
                  <p className="text-xs text-slate-600">
                    Trust • Education • Discipline • Growth
                  </p>
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0B2545] border border-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545]"></span>
                Our Educational Philosophy
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                Dedicated to Educational Excellence & Student Well-Being
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {schoolData.about.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="font-bold text-[#0B2545] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#133E87]" />
                  <span>The Indira School Commitment</span>
                </div>
                <p>
                  We prioritize a supportive, child-friendly environment where every student receives academic attention, moral encouragement, and guidance to achieve their full potential.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button to="/academics" variant="primary" size="md" icon={ArrowRight}>
                  Explore Academics
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Contact Campus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Cards */}
      <section className="py-16 sm:py-20 bg-slate-50 relative">
        <div className="container-custom">
          <SectionHeading
            badge="Institutional Purpose"
            title="Vision & Mission"
            subtitle="Guiding principles that steer our academic goals and community values."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-[#C5A059] flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#133E87] block mb-2">
                Future Orientation
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                {schoolData.about.vision.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {schoolData.about.vision.description}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#133E87] text-[#C5A059] flex items-center justify-center mb-6 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#133E87] block mb-2">
                Daily Commitment
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                {schoolData.about.mission.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {schoolData.about.mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container-custom">
          <SectionHeading
            badge="Guiding Values"
            title="Values That Define Our Culture"
            subtitle="The foundational ethos nurtured in every student, classroom, and activity at Indira School."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolData.about.coreValues.map((val, idx) => (
              <FeatureCard
                key={idx}
                title={val.title}
                description={val.description}
                iconName={val.icon}
                badge={`Value 0${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principal Editorial Message */}
      <PrincipalMessageSection />

      {/* CTA Banner */}
      <AdmissionCTA />
    </main>
  );
}
