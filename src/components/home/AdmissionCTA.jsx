import React from 'react';
import { MapPin, Phone, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function AdmissionCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#051329] via-[#0B2545] to-[#133E87] text-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A059]/20 text-[#D8B772] border border-[#C5A059]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B772]"></span>
            Admissions Open (2026–2027)
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Begin Your Child's Journey at <span className="text-[#D8B772]">Indira School</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            We invite parents to visit our campus in Nacharam, Hyderabad, to experience our nurturing educational environment and learn about our admission process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              to="/admissions"
              variant="gold"
              size="lg"
              icon={GraduationCap}
              className="w-full sm:w-auto shadow-xl"
            >
              Submit Admission Enquiry
            </Button>

            <Button
              to="/contact"
              variant="outlineWhite"
              size="lg"
              icon={MapPin}
              className="w-full sm:w-auto"
            >
              Visit Our Nacharam Campus
            </Button>
          </div>

          {/* Contact Bar */}
          <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{schoolData.contact.primaryPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Nacharam, Hyderabad – 500076</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Office Hours: 8:30 AM – 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
