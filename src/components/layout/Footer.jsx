import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import SchoolLogo from '../common/SchoolLogo';
import { schoolData } from '../../data/schoolData';

export default function Footer() {
  return (
    <footer className="bg-[#051329] text-slate-300 border-t border-slate-800">
      {/* Upper Footer Notice / Contact Strip */}
      <div className="bg-[#0B2545]/80 border-b border-slate-800/80 py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="font-semibold text-white">Admissions Open (2026–27):</span>
            <span className="text-slate-300">Enquiries accepted for primary and secondary classes.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/admissions"
              className="text-[#C5A059] hover:text-[#D8B772] font-semibold underline underline-offset-4 decoration-[#C5A059]/40 hover:decoration-[#C5A059]"
            >
              Submit Online Enquiry &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SchoolLogo className="w-10 h-10" />
              <div>
                <span className="block text-lg font-bold text-white tracking-wide font-display">
                  {schoolData.name}
                </span>
                <span className="text-xs text-[#C5A059] font-medium">
                  Nacharam, Hyderabad
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {schoolData.footer.about}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Values • Discipline • Growth</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Quick Links</span>
              <span className="w-6 h-0.5 bg-[#C5A059]"></span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {schoolData.footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-[#C5A059] transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Admissions & Academics */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Admissions</span>
              <span className="w-6 h-0.5 bg-[#C5A059]"></span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {schoolData.footer.admissionsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-[#C5A059] transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">Campus Timings</span>
              {schoolData.contact.officeHours}
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Contact Us</span>
              <span className="w-6 h-0.5 bg-[#C5A059]"></span>
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-1" />
                <span className="text-slate-300 leading-relaxed">
                  {schoolData.location.street}, {schoolData.location.area}, {schoolData.location.city}, {schoolData.location.state} – {schoolData.location.pincode}, {schoolData.location.country}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{schoolData.contact.primaryPhone}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{schoolData.contact.admissionsPhone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span className="text-slate-300">{schoolData.contact.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{schoolData.contact.workingDays}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#030B17] border-t border-slate-800/80 py-5 text-xs text-slate-400">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-center sm:text-left">
            © 2026 <strong className="text-slate-200">Indira School</strong>, Nacharam, Hyderabad. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-slate-400">
            <span className="text-slate-500">Official Institutional Portal</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Campus Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
