import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Phone, Mail, MessageSquare, HelpCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function ContactForm({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjectOptions = [
    "General Enquiry",
    "Admission Query",
    "Campus Visit Appointment",
    "Transport Coverage",
    "Curriculum & Academics",
    "Administrative Matter"
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Enquiry',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8 ${className}`}>
      <h3 className="text-xl font-bold text-slate-900 mb-1">
        Send Us a Message
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 mb-6">
        Have a question for Indira School office? Fill out the form below and our administrative team in Nacharam will respond promptly.
      </p>

      {isSuccess ? (
        <div className="py-8 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">
            Message Sent Successfully!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you for contacting Indira School. Our team will review your enquiry and get back to you shortly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSuccess(false)}
            className="mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
              Your Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                  errors.name 
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                    : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20'
                }`}
                required
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone & Email (2-col) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                Phone Number <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit Mobile"
                  className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                    errors.phone 
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                      : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20'
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
              <label htmlFor="contact-email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full pl-9 pr-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors ${
                    errors.email 
                      ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                      : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20'
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

          {/* Subject Dropdown */}
          <div>
            <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
              Subject / Topic
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-slate-300 focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/20 bg-white"
            >
              {subjectOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="contact-message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
              Message <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-colors resize-none ${
                errors.message 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-[#0B2545] focus:ring-[#0B2545]/20'
              }`}
              required
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full justify-center"
            loading={isSubmitting}
            icon={Send}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
}
