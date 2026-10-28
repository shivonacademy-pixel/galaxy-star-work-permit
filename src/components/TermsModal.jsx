import React, { useState } from 'react';
import { TERMS_AND_CONDITIONS, COMPANY_INFO } from '../data/websiteData';
import { X, FileText, Download, CheckCircle, ShieldCheck, Scale, Image as ImageIcon } from 'lucide-react';

export default function TermsModal({ isOpen, onClose, initialView = 'digital' }) {
  const [viewMode, setViewMode] = useState(initialView); // 'digital' or 'document'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-brand-gold/40">
        
        {/* Modal Header */}
        <div className="bg-brand-navy p-5 text-white flex items-center justify-between border-b border-brand-gold/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-0.5 border border-brand-gold flex-shrink-0">
              <img src={COMPANY_INFO.logoUrl} alt="Galaxy Star Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Official Terms and Conditions
              </h3>
              <p className="text-xs text-brand-gold font-medium">
                {COMPANY_INFO.name} • {COMPANY_INFO.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="hidden sm:flex bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('digital')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'digital' ? 'bg-brand-gold text-brand-navy font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                Digital Clauses
              </button>
              <button
                onClick={() => setViewMode('document')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'document' ? 'bg-brand-gold text-brand-navy font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                Original Document
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Toggle */}
        <div className="sm:hidden flex bg-slate-100 p-2 border-b border-slate-200 text-xs justify-center gap-2">
          <button
            onClick={() => setViewMode('digital')}
            className={`flex-1 py-1.5 rounded font-bold ${viewMode === 'digital' ? 'bg-brand-navy text-white' : 'bg-white text-slate-700'}`}
          >
            Digital Clauses
          </button>
          <button
            onClick={() => setViewMode('document')}
            className={`flex-1 py-1.5 rounded font-bold ${viewMode === 'document' ? 'bg-brand-navy text-white' : 'bg-white text-slate-700'}`}
          >
            Original Document
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50 space-y-6">
          {viewMode === 'digital' ? (
            <div className="space-y-6">
              <div className="bg-brand-navy/5 border border-brand-navy/15 rounded-xl p-4 text-xs text-brand-navy">
                <span className="font-bold">Official Governance: </span>
                These 6 terms and conditions constitute the core legal framework between Galaxy Star Work Permit Services and the applicant.
              </div>

              <div className="space-y-4">
                {TERMS_AND_CONDITIONS.map((term) => (
                  <div key={term.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-2">
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-brand-navy flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs">
                        {term.id}
                      </span>
                      <span>{term.title}</span>
                    </h4>
                    <div className="space-y-2 pl-8">
                      {term.points.map((pt, idx) => (
                        <div key={idx} className="text-xs text-slate-600">
                          <span className="font-bold text-slate-800">{pt.subtitle}: </span>
                          <span>{pt.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <div className="text-xs text-slate-500">
                Below is the authenticated copy of the Terms and Conditions document provided by Galaxy Star Work Permit Services:
              </div>
              <div className="max-w-lg mx-auto bg-white p-2 rounded-xl border border-slate-300 shadow-md overflow-hidden">
                <img 
                  src={COMPANY_INFO.termsDocumentUrl} 
                  alt="Galaxy Star Work Permit Services Official Terms Document" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.termsDocumentUrl}
                  download="Galaxy_Star_Official_Terms.jpg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-md hover:bg-brand-navy-light transition-all"
                >
                  <Download className="w-4 h-4 text-brand-gold" />
                  <span>Download Document File</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-brand-navy" />
            <span>Jurisdiction: Headquarters Pune / Mumbai, Maharashtra</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
