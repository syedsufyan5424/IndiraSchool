import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Award, GraduationCap, Compass } from 'lucide-react';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden bg-[#051329]">
      {/* Background Image with Layered Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85"
          alt="Indira School Students & Learning Environment"
          className="w-full h-full object-cover object-center transform scale-105 animate-subtleZoom"
        />
        {/* Navy brand overlay with radial gradient focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051329]/95 via-[#0B2545]/85 to-[#0B2545]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-[#051329]/70"></div>
      </div>

      {/* Decorative Golden Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white">
          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/20 mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <MapPin className="w-3.5 h-3.5 text-[#D8B772]" />
            <span>Nacharam, Hyderabad</span>
            <span className="text-white/40">|</span>
            <span className="text-[#D8B772]">Admissions 2026–27 Open</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] font-display">
            Shaping Young Minds for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B772] via-[#F3E6C7] to-[#C5A059]">Brighter Future</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed font-normal max-w-2xl">
            Welcome to <strong className="text-white font-semibold">Indira School, Nacharam</strong> — a place where learning, discipline and personal growth come together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Button
              to="/admissions"
              variant="gold"
              size="lg"
              icon={GraduationCap}
              className="shadow-xl"
            >
              Admission Enquiry
            </Button>

            <Button
              to="/about"
              variant="outlineWhite"
              size="lg"
              icon={ArrowRight}
            >
              Explore Our School
            </Button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-slate-300">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Discipline</span>
                <span className="text-xs text-slate-200">Values & Conduct</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Academics</span>
                <span className="text-xs text-slate-200">Strong Foundation</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Development</span>
                <span className="text-xs text-slate-200">Holistic Growth</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Location</span>
                <span className="text-xs text-slate-200">Nacharam, Hyd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
