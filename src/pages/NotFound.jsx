import React from 'react';
import { Home, ArrowLeft, GraduationCap, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import SchoolLogo from '../components/common/SchoolLogo';

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-[80vh] flex items-center justify-center py-24 bg-slate-50">
      <div className="container-custom max-w-lg text-center px-4 space-y-6">
        <SchoolLogo className="w-16 h-16 mx-auto mb-2" />

        <div className="space-y-2">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] font-display">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for may have been moved, updated, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={Home}>
            Back to Homepage
          </Button>
          <Button to="/admissions" variant="gold" size="md" icon={GraduationCap}>
            Admissions Enquiry
          </Button>
        </div>

        <p className="text-xs text-slate-400">
          Indira School • Nacharam, Hyderabad – 500076
        </p>
      </div>
    </main>
  );
}
