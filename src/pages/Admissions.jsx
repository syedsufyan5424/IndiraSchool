import React, { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import AdmissionForm from '../components/forms/AdmissionForm';
import { schoolData } from '../data/schoolData';
import { 
  FileText, 
  Users, 
  FolderCheck, 
  CheckCircle2, 
  Check, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Phone, 
  Calendar,
  AlertCircle 
} from 'lucide-react';
import Button from '../components/ui/Button';

export default function Admissions() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const stepIcons = {
    "01": FileText,
    "02": Users,
    "03": FolderCheck,
    "04": CheckCircle2
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <main id="main-content" className="w-full">
      {/* Page Hero */}
      <PageHero
        badge="Join Our School"
        title={schoolData.admissions.heroTitle}
        subtitle={schoolData.admissions.heroSubtitle}
        breadcrumbCurrent="Admissions"
      />

      {/* Main Split Content: Form & Process Overview */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Interactive Admission Form (Col 6) */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <AdmissionForm />
            </div>

            {/* Right: Admission Steps & Process Guide (Col 6) */}
            <div className="lg:col-span-6 space-y-12">
              {/* Notice Banner */}
              <div className="bg-gradient-to-br from-[#0B2545] to-[#133E87] rounded-2xl p-6 text-white shadow-lg space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8B772]">
                  <Calendar className="w-4 h-4" />
                  <span>Session 2026 – 2027</span>
                </div>
                <h3 className="text-xl font-bold font-display">
                  {schoolData.admissions.announcement}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Parents are encouraged to submit the online enquiry form or visit the administrative office in Nacharam for registration and direct interaction.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Office: 8:30 AM – 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Nacharam, Hyderabad</span>
                  </div>
                </div>
              </div>

              {/* 4-Step Process */}
              <div id="steps" className="space-y-6 scroll-mt-28">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#133E87] block mb-1">
                    Guideline
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    4-Step Admission Procedure
                  </h3>
                </div>

                <div className="space-y-4">
                  {schoolData.admissions.steps.map((step) => {
                    const Icon = stepIcons[step.stepNumber] || FileText;

                    return (
                      <div
                        key={step.stepNumber}
                        className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B2545] flex items-center justify-center font-bold text-sm flex-shrink-0 border border-blue-100">
                          {step.stepNumber}
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-slate-900">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Required Documents List */}
              <div id="documents" className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <FolderCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Required Documents for Verification
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please carry original copies for preliminary verification along with photocopies.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {schoolData.admissions.requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent FAQs Section */}
      <section id="faqs" className="py-16 sm:py-24 bg-white relative scroll-mt-28">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="Admission FAQs"
            title="Frequently Asked Questions"
            subtitle="Common questions from parents regarding admissions, office visits, and school routines in Nacharam."
            align="center"
          />

          <div className="space-y-3.5">
            {schoolData.admissions.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 bg-slate-50/50 hover:bg-slate-100/80 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0B2545] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'transform rotate-180 text-[#0B2545]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Card */}
          <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0B2545]">
                Need more information or personalized assistance?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Call our admissions desk directly or visit the school in person.
              </p>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={Phone}
              className="flex-shrink-0"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
