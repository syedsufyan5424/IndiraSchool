import React from 'react';
import PageHero from '../components/layout/PageHero';
import ContactForm from '../components/forms/ContactForm';
import { schoolData } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Compass } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <main id="main-content" className="w-full">
      {/* Page Hero */}
      <PageHero
        badge="Reach Out"
        title="Contact Indira School"
        subtitle="Get in touch with our administrative office in Nacharam, Hyderabad. We welcome your queries regarding admissions, visits, and school information."
        breadcrumbCurrent="Contact Us"
      />

      {/* Main Content: Info Cards & Form */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Contact Info & Nacharam Campus Breakdown (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Campus Address Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0B2545] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Campus Location
                    </h3>
                    <p className="text-xs text-[#C5A059] font-semibold">
                      Nacharam, Hyderabad
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                  <p className="font-bold text-[#0B2545]">{schoolData.name}</p>
                  <p>{schoolData.location.street}</p>
                  <p>{schoolData.location.area}, {schoolData.location.city}</p>
                  <p>{schoolData.location.state} – {schoolData.location.pincode}, {schoolData.location.country}</p>
                  {schoolData.location.landmark && (
                    <p className="text-xs text-slate-500 italic pt-1">
                      Landmark: {schoolData.location.landmark}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={schoolData.location.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-[#133E87] hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Communication Details Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Phone & Email Enquiries
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0B2545] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-slate-900">School Administrative Office</span>
                      <span className="text-slate-600">{schoolData.contact.primaryPhone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-slate-900">Admissions Information Desk</span>
                      <span className="text-slate-600">{schoolData.contact.admissionsPhone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0B2545] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-slate-900">Official Admissions Email</span>
                      <span className="text-slate-600">{schoolData.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office & Visiting Timings */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Clock className="w-5 h-5 text-[#0B2545]" />
                  <h4>Office & Visiting Hours</h4>
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-1">
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-700">Office Working Hours:</span>
                    <span>{schoolData.contact.officeHours}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-100">
                    <span className="font-medium text-slate-700">Parent Counseling Hours:</span>
                    <span>{schoolData.contact.visitingHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Working Days:</span>
                    <span>{schoolData.contact.workingDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form (Col 7) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="map" className="py-16 bg-white relative scroll-mt-28">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#133E87] block mb-1">
              Find Us On Map
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Nacharam, Hyderabad Campus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Located conveniently in Raghavendra Nagar, Nacharam — accessible from Habsiguda, Mallapur, and Uppal.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-96 sm:h-[450px] relative bg-slate-100">
            <iframe
              title="Indira School Nacharam Location Map"
              src={schoolData.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
