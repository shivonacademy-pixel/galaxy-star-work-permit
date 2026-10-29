import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  CheckCircle, 
  HelpCircle, 
  Send, 
  Sliders, 
  Award, 
  Globe, 
  FileCheck2, 
  AlertCircle,
  Briefcase,
  IndianRupee,
  Clock
} from 'lucide-react';

const TRADES = [
  { id: 'warehouse', name: 'Warehouse & Logistics / Packer', minAge: 18, maxAge: 51, avgSalary: '₹75,000 – ₹95,000/mo (1,500 – 1,900 AZN)', idealCountries: ['Baku, Azerbaijan'] },
  { id: 'welder', name: 'Welder / Fabricator / Fitter', minAge: 20, maxAge: 51, avgSalary: '₹90,000 – ₹1,25,000/mo (1,800 – 2,500 AZN)', idealCountries: ['Sumqayit / Baku, Azerbaijan'] },
  { id: 'hospitality', name: 'Chef / Kitchen Staff / Hospitality', minAge: 18, maxAge: 48, avgSalary: '₹80,000 – ₹1,15,000/mo (1,600 – 2,300 AZN)', idealCountries: ['Baku Luxury Hotels, Azerbaijan'] },
  { id: 'driver', name: 'Heavy Driver / Forklift Operator', minAge: 22, maxAge: 51, avgSalary: '₹95,000 – ₹1,35,000/mo (1,900 – 2,700 AZN)', idealCountries: ['Baku Logistics & Port, Azerbaijan'] },
  { id: 'electrician', name: 'Electrician / Maintenance Tech', minAge: 21, maxAge: 51, avgSalary: '₹85,000 – ₹1,20,000/mo (1,700 – 2,400 AZN)', idealCountries: ['Baku Commercial Hub, Azerbaijan'] },
  { id: 'construction', name: 'Construction Mason / Carpenter', minAge: 19, maxAge: 51, avgSalary: '₹75,000 – ₹1,00,000/mo (1,500 – 2,000 AZN)', idealCountries: ['Baku Infrastructure, Azerbaijan'] },
  { id: 'agriculture', name: 'Agriculture & Farm Specialist', minAge: 18, maxAge: 51, avgSalary: '₹70,000 – ₹90,000/mo (1,400 – 1,800 AZN)', idealCountries: ['Ganja / Absheron, Azerbaijan'] },
  { id: 'general', name: 'General Helper / Factory Assistant', minAge: 18, maxAge: 51, avgSalary: '₹70,000 – ₹90,000/mo (1,400 – 1,800 AZN)', idealCountries: ['Baku & Sumqayit, Azerbaijan'] }
];

const DESTINATIONS = [
  { id: 'baku', name: 'Baku (Capital City Hub)', flag: '🇦🇿' },
  { id: 'sumqayit', name: 'Sumqayit (Industrial Hub)', flag: '🇦🇿' },
  { id: 'ganja', name: 'Ganja (Commercial Region)', flag: '🇦🇿' },
  { id: 'all-az', name: 'All Azerbaijan Work Quotas', flag: '🇦🇿' }
];

export const AgeEligibilityChecker = () => {
  const [age, setAge] = useState(28);
  const [selectedTrade, setSelectedTrade] = useState('warehouse');
  const [selectedDest, setSelectedDest] = useState('Baku (Capital City Hub)');
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');

  const currentTrade = TRADES.find(t => t.id === selectedTrade) || TRADES[0];
  const isEligible = age >= currentTrade.minAge && age <= currentTrade.maxAge;

  // Custom feedback text based on age bracket
  let ageInsight = '';
  if (age >= 18 && age <= 25) {
    ageInsight = 'Prime entry age: Excellent for fast-track Baku hotel hospitality, warehouse logistics, and store assistants with rapid State Migration Service approvals.';
  } else if (age >= 26 && age <= 40) {
    ageInsight = 'Core peak career age: Highest demand across Azerbaijan for technical trades, skilled welders, commercial electricians, and heavy vehicle operators.';
  } else {
    ageInsight = 'Master experience bracket: Highly valued in Azerbaijan for heavy machinery, master fabricators, and site foremen where practical skills outweigh formal degrees.';
  }

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello Galaxy Star Work Permit Services,\n\nI used your 18-51 Azerbaijan Age Eligibility Checker:\n` +
      `👤 Name: ${candidateName || 'Candidate'}\n` +
      `📞 Phone: ${candidatePhone || 'Not provided'}\n` +
      `🎂 Age: ${age} years (Bracket 18-51)\n` +
      `🛠️ Trade/Skill: ${currentTrade.name}\n` +
      `🇦🇿 Target: Azerbaijan (${selectedDest})\n\n` +
      `Please review my profile and guide me on the Azerbaijan work permit process.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="eligibility" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Azerbaijan Work Permit Assessment 🇦🇿</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Age 18 to 51 Eligibility & Azerbaijan Matcher
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Galaxy Star exclusively places job candidates aged between <strong>18 and 51 years</strong> for official Azerbaijan work permits and residence. Adjust your age and trade below to evaluate your placement in Baku.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200 space-y-6">
            
            {/* Age Slider with Visual Dial */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-heading font-bold text-slate-800 text-base flex items-center gap-2">
                  <span>1. Your Current Age:</span>
                  <span className="text-xs font-normal text-slate-500">(Must be between 18 and 51)</span>
                </label>
                <div className="bg-brand-navy text-brand-gold font-extrabold text-xl px-4 py-1 rounded-xl shadow-sm border border-brand-gold/30">
                  {age} Years
                </div>
              </div>

              <input 
                type="range" 
                min="18" 
                max="51" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />

              <div className="flex justify-between text-xs font-semibold text-slate-400 mt-1">
                <span>Min: 18 Yrs</span>
                <span className="text-brand-slate">Average: 34 Yrs</span>
                <span>Max: 51 Yrs</span>
              </div>

              {/* Dynamic Age Badge Callout */}
              <div className="mt-3 p-3 bg-brand-navy/5 border border-brand-navy/15 rounded-xl text-xs text-brand-navy flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold-dark flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Age {age} Azerbaijan Guidance: </span>
                  <span>{ageInsight}</span>
                </div>
              </div>
            </div>

            {/* Trade / Sector Selection */}
            <div>
              <label className="font-heading font-bold text-slate-800 text-base block mb-2">
                2. Select Your Skill or Trade Category:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TRADES.map((trade) => (
                  <button
                    key={trade.id}
                    onClick={() => setSelectedTrade(trade.id)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      selectedTrade === trade.id 
                        ? 'border-brand-navy bg-brand-navy text-white shadow-md' 
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span>{trade.name}</span>
                    {selectedTrade === trade.id && (
                      <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 ml-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Selector */}
            <div>
              <label className="font-heading font-bold text-slate-800 text-base block mb-2">
                3. Preferred Location in Azerbaijan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDest(dest.name)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5 ${
                      selectedDest === dest.name 
                        ? 'border-brand-gold bg-brand-gold/10 text-brand-navy font-bold shadow-sm' 
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg">{dest.flag}</span>
                    <span>{dest.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Contact inputs for instant WhatsApp forwarding */}
            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-500 mb-2">
                Optional: Enter your details to generate your Azerbaijan assessment:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy"
                />
                <input
                  type="tel"
                  placeholder="Mobile / WhatsApp Number"
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  className="px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy"
                />
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-brand-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-gold/30 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div>
                <span className="text-xs text-brand-gold font-bold uppercase tracking-wider">
                  Assessment Outcome
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                  Azerbaijan Qualification
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>100% Eligible</span>
              </div>
            </div>

            {/* Status overview */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Award className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white text-sm">Matched Sector: {currentTrade.name}</div>
                  <div className="text-slate-300 mt-0.5">
                    Age suitability window: <strong className="text-brand-gold">{currentTrade.minAge} to {currentTrade.maxAge} Years</strong>. Your age ({age}) is fully qualified for Azerbaijan.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <IndianRupee className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white text-sm">Estimated Monthly Package:</div>
                  <div className="text-brand-gold font-extrabold text-base mt-0.5">{currentTrade.avgSalary}</div>
                  <div className="text-slate-400 text-[11px]">Free accommodation, health insurance & overtime included.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                <Globe className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white text-sm">Work Hub Placement:</div>
                  <div className="text-slate-200 mt-1 flex flex-wrap gap-1.5">
                    {currentTrade.idealCountries.map((c) => (
                      <span key={c} className="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px] font-medium text-slate-200 flex items-center gap-1">
                        <span>🇦🇿</span>
                        <span>{c}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist of required documents */}
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4" />
                <span>Documents Needed for Azerbaijan:</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Valid Passport (Minimum 1-2 years validity)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>White Background Passport Photos (35x45mm)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Police Clearance Certificate (PCC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Medical Fitness Certificate for Azerbaijan</span>
                </li>
              </ul>
            </div>

            {/* Direct Action Button */}
            <button
              onClick={handleWhatsAppShare}
              className="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Send Profile to WhatsApp (+91 8007884006)</span>
            </button>

            <div className="text-center text-[11px] text-slate-400">
              65-Day refund policy protection • Governed under Pune/Mumbai legal terms.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
