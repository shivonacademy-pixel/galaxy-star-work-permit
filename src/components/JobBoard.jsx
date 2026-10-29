import React, { useState } from 'react';
import { COUNTRIES, JOB_VACANCIES, COMPANY_INFO } from '../data/websiteData';
import { 
  Briefcase, 
  MapPin, 
  IndianRupee, 
  Calendar, 
  CheckCircle2, 
  Send, 
  Filter, 
  UserCheck, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function JobBoard({ onSelectJobForApplication }) {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(JOB_VACANCIES.map(j => j.category)))];

  const filteredJobs = JOB_VACANCIES.filter(job => {
    const matchesCountry = selectedCountry === 'all' || job.countryCode === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesCategory && matchesSearch;
  });

  const handleWhatsAppJobInquiry = (job) => {
    const text = encodeURIComponent(
      `Hello Galaxy Star Work Permit Services,\n\nI am interested in applying for:\n` +
      `💼 Position: ${job.title}\n` +
      `🌍 Country: ${job.country}\n` +
      `💵 Salary: ${job.salaryInINR}\n` +
      `🎂 Age Requirement: ${job.ageRequirement}\n\n` +
      `Please provide more details on the visa process and required documents.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="jobs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Verified Azerbaijan Job Openings 🇦🇿</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Current Azerbaijan Work Permit Openings (Ages 18–51)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Explore verified vacancies across Baku, Sumqayit, and Ganja in Azerbaijan. Every placement comes with legal employment contracts, free employer accommodation, and full State Migration Service documentation.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 space-y-4">
          
          {/* Search and Category Row */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-72">
              <input
                type="text"
                placeholder="Search job title, skill or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy bg-white"
              />
            </div>

            {/* Category Pills */}
            <div className="w-full md:w-auto flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-brand-navy text-white shadow-sm' 
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'All Roles' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Country Selection Pills */}
          <div className="pt-3 border-t border-slate-200/80">
            <div className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-gold-dark" /> Select Azerbaijan Location:
            </div>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountry(c.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    selectedCountry === c.id 
                      ? 'bg-brand-gold text-brand-navy shadow-md font-bold' 
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-500">
              No jobs matching your specific criteria. Please reset filters or contact us directly on WhatsApp.
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-gold/60 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Banner */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Country Flag, Location & Openings */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">
                      <span className="text-base">{job.flag}</span>
                      <span>{job.country}</span>
                      <span className="text-slate-400 font-normal">({job.region})</span>
                    </span>
                    <span className="text-[11px] font-semibold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                      {job.openings} Openings
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-brand-navy group-hover:text-brand-navy-light transition-colors">
                      {job.title}
                    </h3>
                    <div className="text-xs text-brand-gold-dark font-semibold mt-0.5">
                      {job.category}
                    </div>
                  </div>

                  {/* Salary Highlight Box */}
                  <div className="p-3 bg-brand-navy/5 rounded-xl border border-brand-navy/10">
                    <div className="text-[11px] text-slate-500 font-medium">Estimated Monthly Package:</div>
                    <div className="text-base font-black text-brand-navy flex items-center gap-1 mt-0.5">
                      <IndianRupee className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>{job.salaryInINR}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Local Currency: <span className="font-semibold text-slate-700">{job.salaryLocal}</span>
                    </div>
                  </div>

                  {/* Age & Visa Type Attributes */}
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-brand-gold-dark" />
                        Age Limit:
                      </span>
                      <span className="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded text-[11px]">
                        {job.ageRequirement}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-dark" />
                        Visa Type:
                      </span>
                      <span className="font-semibold text-slate-700 truncate max-w-[170px]" title={job.visaType}>
                        {job.visaType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold-dark" />
                        Contract:
                      </span>
                      <span className="font-semibold text-slate-700">
                        {job.contract}
                      </span>
                    </div>
                  </div>

                  {/* Benefits Pills */}
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Key Employer Inclusions:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.benefits.map((b, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-brand-green flex-shrink-0" />
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Actions Bottom */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectJobForApplication(job)}
                    className="flex-1 py-2.5 bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppJobInquiry(job)}
                    className="p-2.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green border border-brand-green/30 rounded-xl transition-colors"
                    title="Inquire directly on WhatsApp"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notice Bar */}
        <div className="mt-12 p-4 bg-brand-navy/5 border border-brand-navy/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-gold-dark flex-shrink-0" />
            <span>
              All Azerbaijan job placements adhere strictly to Section 1 of our official Terms & Conditions. Visa granting authority belongs solely to the Embassy and State Migration Service of Azerbaijan.
            </span>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy font-bold hover:underline whitespace-nowrap"
          >
            Don't see your specific trade? Ask our counselors →
          </a>
        </div>

      </div>
    </section>
  );
}
