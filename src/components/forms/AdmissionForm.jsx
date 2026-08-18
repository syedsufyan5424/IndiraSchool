import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, Send, Download, RefreshCw, User, Phone, Mail, GraduationCap, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function AdmissionForm({ className = '' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Grade 1',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState(null);

  const gradeOptions = [
    "Pre-Primary / Nursery",
    "LKG (Lower Kindergarten)",
    "UKG (Upper Kindergarten)",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10"
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required.';
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student's full name is required.";
    }

    // Phone validation (Indian 10-digit mobile check)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.grade) {
      newErrors.grade = 'Please select a grade/class.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic API interaction simulation
    setTimeout(() => {
      const refNumber = `IND-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const submissionDate = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      setSubmissionReceipt({
        referenceId: refNumber,
        date: submissionDate,
        parentName: formData.parentName,
        studentName: formData.studentName,
        grade: formData.grade,
        phone: formData.phone,
        email: formData.email
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      studentName: '',
      grade: 'Grade 1',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    setSubmissionReceipt(null);
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden ${className}`}>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0B2545] to-[#133E87] p-6 sm:p-8 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#D8B772] uppercase tracking-wider mb-1">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
          Academic Year 2026 – 2027
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display">
          Online Admission Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 mt-1">
          Submit your enquiry to receive admission details and schedule a campus interaction at Nacharam.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {isSuccess && submissionReceipt ? (
          <div className="py-4 space-y-6 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-slate-900">
                Enquiry Registered Successfully!
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Thank you, <strong className="text-slate-800">{submissionReceipt.parentName}</strong>. Our admissions desk at Nacharam will reach out to you shortly.
              </p>
            </div>

            {/* Application Summary Card */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Reference Number:</span>
                <span className="font-mono font-bold text-[#0B2545] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {submissionReceipt.referenceId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Student Name:</span>
                <span className="font-semibold text-slate-800">{submissionReceipt.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Class / Grade Applied:</span>
                <span className="font-semibold text-slate-800">{submissionReceipt.grade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Contact Phone:</span>
                <span className="font-semibold text-slate-800">{submissionReceipt.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Email:</span>
                <span className="font-semibold text-slate-800">{submissionReceipt.email}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-xs text-slate-400">
                <span>Date: {submissionReceipt.date}</span>
                <span>Campus: Nacharam, Hyderabad</span>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/80 rounded-lg border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
              <strong>Next Step:</strong> You are welcome to visit our school office with original documents during office hours ({schoolData.contact.officeHours}) to complete the campus interaction.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="subtle"
                size="md"
                className="flex-1"
                onClick={() => window.print()}
                icon={Download}
              >
                Print / Save Receipt
              </Button>
              <Button
                variant="primary"
                size="md"
                className="flex-1"
                onClick={handleReset}
                icon={RefreshCw}
              >
                Submit Another Enquiry
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
            {/* Parent Name */}
            <div>
              <label htmlFor="parentName" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Parent / Guardian Full Name <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                    errors.parentName 
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                      : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20 bg-white'
                  }`}
                  required
                />
              </div>
              {errors.parentName && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.parentName}
                </p>
              )}
            </div>

            {/* Student Name & Grade (2 Column) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="studentName" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                  Student's Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav Kumar"
                  className={`w-full px-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                    errors.studentName 
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                      : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20 bg-white'
                  }`}
                  required
                />
                {errors.studentName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.studentName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="grade" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                  Grade / Class Seeking <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/20 bg-white transition-colors cursor-pointer"
                  >
                    {gradeOptions.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Phone & Email (2 Column) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                  Contact Phone Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98480 12345"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone 
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                        : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20 bg-white'
                    }`}
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. parent@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                      errors.email 
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                        : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20 bg-white'
                    }`}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Optional Query / Message */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                Questions or Specific Requirements (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any queries regarding curriculum, transport, or timing..."
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/20 bg-white transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                loading={isSubmitting}
                icon={Send}
              >
                {isSubmitting ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}
              </Button>
            </div>

            <p className="text-[11px] text-center text-slate-500 leading-tight">
              By submitting this form, you agree to receive official admission communications from Indira School, Nacharam.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
