import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { X, Send, CheckCircle2, AlertCircle, ShieldCheck, FileCheck } from 'lucide-react';

export default function ApplicationModal({ isOpen, onClose, selectedJob = null }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '28',
    phone: '',
    email: '',
    country: 'Azerbaijan (Baku)',
    jobRole: '',
    passportStatus: 'Valid Passport Available',
    message: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setFormData(prev => ({
        ...prev,
        jobRole: selectedJob.title,
        country: selectedJob.country
      }));
    }
  }, [selectedJob]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNum = parseInt(formData.age, 10);
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please provide your name and WhatsApp number.');
      return;
    }
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 51) {
      setErrorMsg('Candidate age must be strictly within 18 to 51 years.');
      return;
    }

    setErrorMsg('');
    setIsSuccess(true);

    const waText = encodeURIComponent(
      `Hello Galaxy Star Work Permit Services,\n\nI wish to apply for an overseas placement:\n` +
      `👤 Candidate Name: ${formData.name}\n` +
      `🎂 Age: ${formData.age} Years (Age Group 18-51)\n` +
      `📞 Contact: ${formData.phone}\n` +
      `💼 Position: ${formData.jobRole || (selectedJob ? selectedJob.title : 'General Inquiry')}\n` +
      `🌍 Target Country: ${formData.country || (selectedJob ? selectedJob.country : 'Azerbaijan (Baku)')}\n` +
      `🛂 Passport Status: ${formData.passportStatus}\n` +
      `💬 Remarks: ${formData.message || 'Please guide me with next documentation steps.'}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waText}`, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-brand-gold/40">
        
        {/* Header */}
        <div className="bg-brand-navy p-5 text-white flex items-center justify-between border-b border-brand-gold/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-brand-gold flex-shrink-0">
              <img src={COMPANY_INFO.logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                {selectedJob ? `Apply: ${selectedJob.title}` : 'Azerbaijan Profile Assessment (Age 18–51)'}
              </h3>
              <p className="text-xs text-brand-gold font-medium">
                Galaxy Star Work Permit Services
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-brand-green mx-auto" />
              <h4 className="font-heading font-black text-xl text-brand-navy">
                Application Transferred to WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your profile details have been compiled. Our counselor will review your age ({formData.age} yrs) and trade eligibility.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {selectedJob && (
                <div className="p-3 bg-brand-navy/5 border border-brand-navy/15 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-brand-navy">Applying for: {selectedJob.title} ({selectedJob.country})</div>
                  <div className="text-slate-600">Expected Salary: <strong className="text-brand-navy">{selectedJob.salaryInINR}</strong> • Age: {selectedJob.ageRequirement}</div>
                </div>
              )}

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex justify-between">
                    <span>Age *</span>
                    <span className="text-brand-gold-dark font-normal">Bracket: 18–51</span>
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="51"
                    required
                    placeholder="28"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy font-bold text-brand-navy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 8007884006"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Passport Status</label>
                  <select
                    value={formData.passportStatus}
                    onChange={(e) => setFormData({ ...formData, passportStatus: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy bg-white"
                  >
                    <option value="Valid Passport Available">Valid Passport Available</option>
                    <option value="Applied / Awaiting Passport">Applied / Awaiting Passport</option>
                    <option value="Need Guidance for Passport">Need Guidance for Passport</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Desired Job Trade / Qualification</label>
                <input
                  type="text"
                  placeholder="e.g. Warehouse Worker, Welder, Chef, Driver"
                  value={formData.jobRole}
                  onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Comments / Specific Queries</label>
                <textarea
                  rows={2}
                  placeholder="Any experience, target country preference..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-gold hover:opacity-95 text-brand-navy font-bold rounded-xl shadow-gold transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Profile to WhatsApp Official Helpdesk</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                Official helpline: +91 {COMPANY_INFO.phone} • Governed by Pune/Mumbai jurisdiction.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
