import fs from 'fs';
import path from 'path';

const projectDir = 'C:/Users/kisha/.gemini/antigravity/scratch/galaxy-star-work-permit';
const logoPath = path.join(projectDir, 'public/assets/logo.jpg');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUri = `data:image/jpeg;base64,${logoBase64}`;

const termsDocPath = path.join(projectDir, 'public/assets/terms_document.jpg');
const termsDocBase64 = fs.readFileSync(termsDocPath).toString('base64');
const termsDocDataUri = `data:image/jpeg;base64,${termsDocBase64}`;

const html = `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Galaxy Star Work Permit Services | Emigration & Global Job Placements (Age 18–51)</title>
  <meta name="description" content="Your Dream | Our Guidance | Global Opportunities. Premier emigration consultancy and genuine overseas work permit placement for candidates aged 18 to 51 across Europe, Gulf, Singapore, Canada, and beyond." />
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              navy: {
                DEFAULT: '#0B2545',
                dark: '#061629',
                light: '#133E87',
                deep: '#0F172A',
              },
              gold: {
                DEFAULT: '#D4AF37',
                light: '#F4DE86',
                dark: '#AA8822',
                champagne: '#DFBA63',
              },
              slate: {
                DEFAULT: '#475569',
                dark: '#334E68',
                light: '#64748B',
                bg: '#F1F5F9',
              },
              green: {
                DEFAULT: '#10B981',
                dark: '#059669',
                light: '#34D399',
              },
              gray: {
                DEFAULT: '#F8FAFC',
                border: '#E2E8F0',
              }
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            heading: ['Outfit', 'Inter', 'sans-serif']
          },
          boxShadow: {
            'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
            'navy': '0 10px 30px -5px rgba(11, 37, 69, 0.2)',
            'card': '0 4px 25px 0 rgba(0, 0, 0, 0.05)',
          }
        }
      }
    }
  </script>
  <style>
    .text-gradient-gold {
      background: linear-gradient(135deg, #DFBA63 0%, #D4AF37 50%, #B89726 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .bg-gradient-navy {
      background: linear-gradient(135deg, #061629 0%, #0B2545 60%, #133E87 100%);
    }
    .bg-gradient-gold {
      background: linear-gradient(135deg, #F4DE86 0%, #D4AF37 50%, #B89726 100%);
    }
  </style>
</head>
<body class="bg-brand-gray text-slate-800 antialiased font-sans selection:bg-brand-gold selection:text-brand-navy">

  <!-- TOP HEADER BAR -->
  <div class="bg-brand-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex flex-wrap items-center gap-4 sm:gap-6">
        <a href="tel:+918007884006" class="flex items-center gap-1.5 hover:text-brand-gold transition-colors font-medium text-white">
          <svg class="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span>+91 8007884006</span>
        </a>
        <a href="mailto:galaxystarworkpermitservices@gmail.com" class="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors">
          <svg class="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <span>galaxystarworkpermitservices@gmail.com</span>
        </a>
        <div class="hidden md:flex items-center gap-1.5 text-slate-400">
          <svg class="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span>Headquarters: Pune / Mumbai, Maharashtra</span>
        </div>
      </div>

      <div class="flex items-center gap-3 ml-auto">
        <span class="hidden lg:inline-flex items-center gap-1 text-slate-400">
          <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
        </span>
        <a href="https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20would%20like%20to%20inquire%20about%20overseas%20work%20permits%20and%20job%20placements%20(Age%2018-51)." target="_blank" class="flex items-center gap-1.5 bg-brand-green/20 text-brand-green hover:bg-brand-green/30 px-2.5 py-0.5 rounded-full border border-brand-green/30 font-medium transition-all text-[11px]">
          <span>WhatsApp Direct</span>
        </a>
      </div>
    </div>
  </div>

  <!-- NAVIGATION BAR -->
  <nav class="sticky top-0 z-40 w-full bg-brand-navy shadow-navy py-3 px-4 border-b border-brand-gold/20">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#home" class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-brand-gold shadow-md flex-shrink-0">
          <img src="${logoDataUri}" alt="Galaxy Star Logo" class="w-full h-full object-contain" />
        </div>
        <div>
          <div class="font-heading font-extrabold text-white text-base sm:text-lg leading-tight tracking-wide flex items-center gap-1">
            <span>GALAXY STAR</span>
            <span class="text-brand-gold">SERVICES</span>
          </div>
          <div class="text-[10px] sm:text-xs text-brand-gold font-semibold tracking-wider uppercase">
            Work Permit & Emigration Consultancy
          </div>
        </div>
      </a>

      <!-- Desktop Links -->
      <div class="hidden xl:flex items-center gap-1">
        <a href="#home" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Home</a>
        <a href="#about" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">About Us</a>
        <a href="#services" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Services</a>
        <a href="#jobs" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Jobs (Age 18–51)</a>
        <a href="#eligibility" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Eligibility Tool</a>
        <a href="#workflow" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Workflow</a>
        <a href="#terms" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Terms & Policy</a>
        <a href="#contact" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Contact</a>
      </div>

      <!-- Header CTAs -->
      <div class="hidden lg:flex items-center gap-3">
        <button onclick="openTermsModal('digital')" class="flex items-center gap-1.5 text-xs text-slate-300 hover:text-brand-gold px-3 py-2 border border-slate-700 rounded-lg hover:border-brand-gold/50 transition-colors">
          <span>Official Terms</span>
        </button>
        <button onclick="openApplyModal()" class="bg-gradient-gold hover:opacity-95 text-brand-navy font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-gold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
          <span>Free 18–51 Assessment</span>
        </button>
      </div>

      <!-- Mobile Button -->
      <div class="flex xl:hidden items-center gap-2">
        <button onclick="openApplyModal()" class="bg-brand-gold text-brand-navy font-bold text-xs px-3 py-1.5 rounded-md">
          Apply Now
        </button>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section id="home" class="relative overflow-hidden bg-brand-navy pt-8 pb-16 lg:py-20 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-brand-navy to-brand-navy-dark pointer-events-none"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wide">
            <span>✨ YOUR DREAM | OUR GUIDANCE | GLOBAL OPPORTUNITIES</span>
          </div>

          <h1 class="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-white">
            Overseas Emigration & <br class="hidden sm:inline" />
            <span class="text-gradient-gold">Work Permit Services</span> <br />
            For Ages <span class="underline decoration-brand-gold decoration-4 underline-offset-4">18 to 51</span>
          </h1>

          <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Turn your international career ambition into reality with verified employer job placements in 
            <strong class="text-white">Poland, Croatia, Germany, Malta, UAE, Singapore, UK & Canada</strong>. 
            Protected by our transparent 6-point legal agreement, 30-day refund safety, and zero false promises.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Legitimate Embassy-Compliant Process</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Candidates Aged 18 to 51 Eligible</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Written Agreement with 30-Day Refund Clause</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Court Jurisdiction: Pune / Mumbai HQ</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a href="#eligibility" class="bg-gradient-gold text-brand-navy hover:opacity-95 font-bold px-6 py-3.5 rounded-xl shadow-gold hover:shadow-xl transition-all flex items-center gap-2.5 text-base">
              <span>Check Age 18–51 Eligibility</span>
              <span>→</span>
            </a>
            <a href="https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20would%20like%20an%20instant%20overseas%20assessment." target="_blank" class="inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all text-base">
              <span>WhatsApp Instant Inquiry</span>
            </a>
          </div>
        </div>

        <!-- Hero Card -->
        <div class="lg:col-span-5">
          <div class="relative bg-slate-900/90 border border-brand-gold/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div class="flex items-center gap-4 pb-4 border-b border-slate-800">
              <div class="w-16 h-16 rounded-full bg-white p-1 border-2 border-brand-gold shadow-md flex-shrink-0">
                <img src="${logoDataUri}" alt="Galaxy Star Logo" class="w-full h-full object-contain" />
              </div>
              <div>
                <h3 class="font-heading font-extrabold text-white text-lg sm:text-xl">
                  Galaxy Star
                </h3>
                <p class="text-xs text-brand-gold font-medium">Work Permit & Emigration Consultancy</p>
                <p class="text-[11px] text-slate-400">Pune & Mumbai Legal Jurisdiction</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                <div class="text-2xl font-black text-brand-gold">18 – 51</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Eligible Candidate Age</div>
              </div>
              <div class="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                <div class="text-2xl font-black text-white">12+</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Top Global Destinations</div>
              </div>
              <div class="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                <div class="text-2xl font-black text-brand-green">100%</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Transparent Terms</div>
              </div>
              <div class="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                <div class="text-2xl font-black text-brand-gold">30 Days</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Refund Policy Protection</div>
              </div>
            </div>

            <button onclick="openApplyModal()" class="w-full py-3.5 bg-gradient-gold hover:opacity-95 text-brand-navy font-bold rounded-xl shadow-gold transition-all text-sm">
              Submit Profile for Free Verification
            </button>
            <div class="text-center text-xs text-slate-400">
              Call helpline: <a href="tel:+918007884006" class="text-brand-gold font-bold hover:underline">+91 8007884006</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- AGE 18 TO 51 ELIGIBILITY CALCULATOR -->
  <section id="eligibility" class="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
          <span>Interactive Overseas Assessment</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Age 18 to 51 Eligibility & Country Matcher
        </h2>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Galaxy Star exclusively places job candidates aged between <strong>18 and 51 years</strong>. Adjust your age and trade below to evaluate your international work permit opportunities.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200 space-y-6">
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="font-heading font-bold text-slate-800 text-base">
                1. Your Current Age: <span class="text-xs font-normal text-slate-500">(18 to 51)</span>
              </label>
              <div id="ageDisplay" class="bg-brand-navy text-brand-gold font-extrabold text-xl px-4 py-1 rounded-xl shadow-sm border border-brand-gold/30">
                28 Years
              </div>
            </div>
            <input id="ageSlider" type="range" min="18" max="51" value="28" oninput="updateAge(this.value)" class="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-gold" />
            <div class="flex justify-between text-xs font-semibold text-slate-400 mt-1">
              <span>Min: 18 Yrs</span>
              <span class="text-brand-slate">Average: 34 Yrs</span>
              <span>Max: 51 Yrs</span>
            </div>
            <div id="ageInsightBox" class="mt-3 p-3 bg-brand-navy/5 border border-brand-navy/15 rounded-xl text-xs text-brand-navy">
              <strong>Age 28 Guidance:</strong> Core peak career age: Highest demand across all technical trades, skilled welding, heavy driving, and supervisor positions in Europe and Gulf.
            </div>
          </div>

          <div>
            <label class="font-heading font-bold text-slate-800 text-base block mb-2">
              2. Select Your Skill or Trade Category:
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button onclick="selectTrade('warehouse')" id="trade-warehouse" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-brand-navy bg-brand-navy text-white shadow-md">
                Warehouse & Logistics / Packer
              </button>
              <button onclick="selectTrade('welder')" id="trade-welder" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700">
                Welder / Fabricator / Fitter
              </button>
              <button onclick="selectTrade('hospitality')" id="trade-hospitality" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700">
                Chef / Kitchen Staff / Hospitality
              </button>
              <button onclick="selectTrade('driver')" id="trade-driver" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700">
                Heavy Driver / Forklift Operator
              </button>
              <button onclick="selectTrade('electrician')" id="trade-electrician" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700">
                Electrician / Maintenance Tech
              </button>
              <button onclick="selectTrade('agriculture')" id="trade-agriculture" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700">
                Agriculture & Farm Worker
              </button>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100">
            <div class="text-xs font-semibold text-slate-500 mb-2">Enter your name & phone to dispatch directly to WhatsApp:</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input id="calcName" type="text" placeholder="Your Full Name" class="px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy" />
              <input id="calcPhone" type="tel" placeholder="Mobile / WhatsApp Number" class="px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-brand-navy" />
            </div>
          </div>
        </div>

        <!-- Calculator Result Card -->
        <div class="lg:col-span-5 bg-brand-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-gold/30 space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-700">
            <div>
              <span class="text-xs text-brand-gold font-bold uppercase tracking-wider">Assessment Outcome</span>
              <h3 class="font-heading font-extrabold text-xl text-white mt-0.5">Eligibility Evaluation</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold">100% Eligible</span>
          </div>

          <div class="space-y-3 text-xs">
            <div class="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div class="font-bold text-white text-sm" id="calcMatchedTrade">Category: Warehouse & Logistics</div>
              <div class="text-slate-300 mt-0.5">Age bracket: <strong class="text-brand-gold">18 to 51 Years</strong>. You are fully qualified.</div>
            </div>
            <div class="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div class="font-bold text-white text-sm">Estimated Monthly Package:</div>
              <div class="text-brand-gold font-extrabold text-base mt-0.5" id="calcSalary">₹1,10,000 – ₹1,55,000 / month</div>
              <div class="text-slate-400 text-[11px]">Free accommodation & overtime generally included</div>
            </div>
            <div class="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div class="font-bold text-white text-sm">Recommended Countries:</div>
              <div class="text-slate-200 mt-1 flex flex-wrap gap-1.5" id="calcCountries">
                <span class="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px]">Poland</span>
                <span class="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px]">Croatia</span>
                <span class="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px]">UAE</span>
              </div>
            </div>
          </div>

          <button onclick="sendCalculatorToWhatsApp()" class="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl shadow-lg transition-all text-sm">
            Send Profile to WhatsApp (+91 8007884006)
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- JOB BOARD SECTION -->
  <section id="jobs" class="py-16 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
          <span>Verified International Openings</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Current Overseas Work Permit Openings (Ages 18–51)
        </h2>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Explore verified vacancies across Europe, Gulf, and Asia-Pacific. All roles include legal employer contracts and accommodation provisions.
        </p>
      </div>

      <!-- Job Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Job 1: Poland Warehouse -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇵🇱 Poland (Europe)</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">24 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Warehouse & Logistics Associate</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Warehouse & Logistics</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹1,20,000 – ₹1,55,000 / mo (5,500 - 7,200 PLN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">18 to 50 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Type D Work Permit</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Free Accommodation, Medical</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Warehouse & Logistics Associate (Poland)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Poland%20Warehouse%20Associate" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 2: Croatia Welder -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇭🇷 Croatia (Europe)</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">18 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">MIG / TIG Welder & Fabricator</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Skilled Trades</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹1,40,000 – ₹1,85,000 / mo (1,500 - 2,000 EUR)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">20 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Croatia Residence Permit</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Free Lodging, Transport</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('MIG/TIG Welder (Croatia)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Croatia%20Welder%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 3: Malta Chef -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇲🇹 Malta (Europe)</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">12 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Continental Chef & Kitchen Staff</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Hospitality & Tourism</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹1,35,000 – ₹1,90,000 / mo (1,450 - 2,100 EUR)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">21 to 48 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Identity Malta Work Permit</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Duty Meals, Accommodation</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Continental Chef (Malta)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Malta%20Chef%20Position" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 4: Germany Forklift -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇩🇪 Germany (Europe)</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">15 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Forklift & Heavy Equipment Operator</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Skilled Technical Trades</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹1,90,000 – ₹2,40,000 / mo (2,200 - 2,700 EUR)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">22 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Opportunity Card / Work Visa</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">German Social Security, Housing</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Forklift Operator (Germany)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Germany%20Forklift%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 5: Dubai Electrician -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇪 UAE / Dubai</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">30 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Industrial Electrician & Technician</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Skilled Technical</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹85,000 – ₹1,25,000 / mo (3,800 - 5,500 AED)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">21 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">MOHRE 2-Yr Employment Visa</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Free Accommodation, Air Ticket</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Industrial Electrician (Dubai)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Dubai%20Electrician%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 6: Singapore Customer Service -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇸🇬 Singapore</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">10 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Hospitality & Customer Service</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Hospitality & Tourism</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹1,50,000 – ₹2,10,000 / mo (2,400 - 3,400 SGD)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">21 to 45 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">MOM Work Pass / S-Pass</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Medical Coverage, Annual Bonus</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Hospitality Executive (Singapore)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Singapore%20Hospitality%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- WORKFLOW SECTION -->
  <section id="workflow" class="py-16 sm:py-20 bg-brand-navy text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
          <span>Ethical & Transparent Process</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white">
          Our 5-Step Emigration & Placement Workflow
        </h2>
        <p class="mt-3 text-slate-300 text-sm sm:text-base">
          Follow our proven, step-by-step roadmap from initial profile check to flight departure.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">01</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Profile & Age Check (18–51)</h4>
            <p class="text-xs text-slate-300 mt-2">Free evaluation of candidate trade credentials, passport status, and age group match.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Free Consultation</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">02</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Agreement Signing</h4>
            <p class="text-xs text-slate-300 mt-2">Official written agreement under our 6-point Terms & Conditions with 30-day refund safety.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Legal Protection</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">03</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Verified Job Match</h4>
            <p class="text-xs text-slate-300 mt-2">Securing genuine foreign employment offer letter and work contract from authorized employers.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Direct Employer</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">04</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Work Permit Filing</h4>
            <p class="text-xs text-slate-300 mt-2">Government petition filing, MEA apostille, PCC attestation, and embassy appointment scheduling.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Embassy Compliance</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">05</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Visa Grant & Departure</h4>
            <p class="text-xs text-slate-300 mt-2">Receipt of e-Visa / passport stamping, final settlement, pre-departure orientation, and flight.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Smooth Relocation</div>
        </div>
      </div>
    </div>
  </section>

  <!-- OFFICIAL 6-POINT TERMS & CONDITIONS SECTION -->
  <section id="terms" class="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
          <span>Official Client Agreement & Policy</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Terms and Conditions & Transparency Charter
        </h2>
        <div class="mt-2 text-xs sm:text-sm font-semibold text-brand-gold-dark uppercase tracking-wider">
          YOUR DREAM | OUR GUIDANCE | GLOBAL OPPORTUNITIES
        </div>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Below is the verbatim agreement issued to every candidate. We operate with zero false promises, complete fee transparency, and Pune/Mumbai jurisdiction.
        </p>
      </div>

      <!-- Preview Banner -->
      <div class="bg-white border border-brand-gold/40 rounded-2xl p-4 sm:p-5 mb-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold text-xl flex-shrink-0">
            📄
          </div>
          <div>
            <div class="font-heading font-extrabold text-brand-navy text-sm sm:text-base">Official Printed Terms Document</div>
            <div class="text-xs text-slate-500">Authorized document issued by Galaxy Star Work Permit Services</div>
          </div>
        </div>
        <div class="flex items-center gap-2.5 w-full sm:w-auto">
          <button onclick="openTermsModal('document')" class="flex-1 sm:flex-none px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl shadow-sm hover:bg-brand-navy-light">
            Preview Original Document
          </button>
        </div>
      </div>

      <!-- 6 Points Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Clause 1 -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-100 pb-2">
              1. Scope of Services
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Advice and Guidance:</strong> The consultancy will provide legal advice and guidance to the client on the visa process, required documents and application methods.</p>
              <p><strong>Application Preparation:</strong> We will help prepare and submit the application based on the information provided by the customer.</p>
              <p><strong>No Visa Guarantee:</strong> The consultancy only assists in the application process. The approval or rejection of a visa is entirely at the discretion of the Embassy/Consulate of the respective country. The consultancy does not provide any one hundred percent (100%) guarantee of obtaining a visa.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-100">Clause #1 • Legally Binding</div>
        </div>

        <!-- Clause 2 -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-100 pb-2">
              2. Client's Responsibilities
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Accurate Information:</strong> It is mandatory that all information, certificates and documents provided by the client are true and accurate.</p>
              <p><strong>Forged Documents:</strong> If the client provides any forged or false documents, his application may be rejected. In such a situation, the consultancy will not be responsible and legal action may be taken.</p>
              <p><strong>Timeliness:</strong> It will be the customer's responsibility to submit the required documents and fees within the given deadline.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-100">Clause #2 • Legally Binding</div>
        </div>

        <!-- Clause 3 -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-100 pb-2">
              3. Fees and Payment Policy
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Service Fee:</strong> The customer will have to pay the service fee (Consultancy Fee) agreed upon at the time of initial consultation.</p>
              <p><strong>Government Fees:</strong> Visa application fees, courier fees, medical tests and other government fees will have to be paid separately by the customer or will not be charged by the company if they are paid separately.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-100">Clause #3 • Legally Binding</div>
        </div>

        <!-- Clause 4 -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-100 pb-2">
              4. Refund / Non-Refund Policy
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>30-Day Refund:</strong> If your process is canceled due to some issues on our part, your money will be refunded within the next 30 days.</p>
              <p><strong>Client Fault:</strong> If the process is canceled due to some issues on your part, there will be no refund.</p>
              <p><strong>e-Visa Payment Window:</strong> You should pay your next payment within a maximum of two days of receiving your e-Visa, otherwise the consultancy will not be responsible for any disruption in the process.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-100">Clause #4 • Legally Binding</div>
        </div>

        <!-- Clause 5 -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-100 pb-2">
              5. Termination of Agreement
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Cancellation:</strong> If the client violates the rules, provides incorrect information, or does not pay the fee on time, the consultancy may cancel the contract immediately.</p>
              <p><strong>Withdrawal:</strong> If the customer wants to stop the process on their own, the fee paid earlier will not be refunded.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-100">Clause #5 • Legally Binding</div>
        </div>

        <!-- Clause 6 -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-100 pb-2">
              6. Jurisdiction
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Legal Headquarters:</strong> Any dispute or legal issue arising in connection with this process shall be resolved under the jurisdiction of the court at the headquarters of the consultancy [Pune/Mumbai].</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-100">Clause #6 • Legally Binding</div>
        </div>

      </div>
    </div>
  </section>

  <!-- CONTACT & APPLICATION SECTION -->
  <section id="contact" class="py-16 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
          <span>Connect Directly</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Get in Touch with Galaxy Star
        </h2>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Reach out via WhatsApp, phone, email, or visit our headquarters in Pune / Mumbai.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card space-y-4">
            <h3 class="font-heading font-extrabold text-lg text-brand-navy">Helpline & Social Accounts</h3>
            <div class="space-y-3 text-sm">
              <a href="tel:+918007884006" class="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 font-bold text-brand-navy hover:text-brand-gold-dark">
                📞 +91 8007884006
              </a>
              <a href="https://wa.me/918007884006" target="_blank" class="flex items-center gap-3 p-3 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/30 font-bold">
                💬 WhatsApp: 8007884006
              </a>
              <a href="mailto:galaxystarworkpermitservices@gmail.com" class="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-brand-navy break-all">
                ✉️ galaxystarworkpermitservices@gmail.com
              </a>
            </div>
          </div>

          <div class="bg-brand-navy text-white rounded-2xl p-6 space-y-3">
            <h4 class="font-heading font-extrabold text-base text-white">Official Social Media Profiles</h4>
            <div class="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="https://www.instagram.com/galaxy_star_service?psln=MW9qeHpqNGE3NGtlaw==" target="_blank" class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-center text-xs font-bold text-white shadow-md">
                Instagram Page
              </a>
              <a href="https://www.facebook.com/share/1QGJqqPDTr/" target="_blank" class="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 text-center text-xs font-bold text-white shadow-md">
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <h3 class="font-heading font-black text-xl text-brand-navy mb-4">Book Free Consultation (Age 18–51)</h3>
          <form onsubmit="handleContactSubmit(event)" class="space-y-4 text-xs sm:text-sm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input id="formName" type="text" required placeholder="Candidate Name" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Age (18 to 51) *</label>
                <input id="formAge" type="number" min="18" max="51" required value="28" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-brand-navy" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                <input id="formPhone" type="tel" required placeholder="+91 8007884006" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl" />
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Preferred Destination</label>
                <select id="formCountry" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white">
                  <option value="Poland">Poland</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Malta">Malta</option>
                  <option value="Germany">Germany</option>
                  <option value="UAE / Dubai">UAE / Dubai</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Trade / Occupation</label>
              <input id="formTrade" type="text" placeholder="e.g. Welder, Chef, Warehouse, Driver" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl" />
            </div>

            <button type="submit" class="w-full py-3.5 bg-gradient-gold text-brand-navy font-bold rounded-xl shadow-gold text-sm">
              Submit & Send to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-brand-navy-dark text-slate-300 border-t border-brand-gold/30 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-brand-gold flex-shrink-0">
              <img src="${logoDataUri}" alt="Logo" class="w-full h-full object-contain" />
            </div>
            <div>
              <span class="font-heading font-black text-white text-lg tracking-wide">GALAXY STAR</span>
              <span class="text-brand-gold font-bold text-xs block">Work Permit Services</span>
            </div>
          </div>
          <p class="text-xs text-brand-gold font-bold tracking-wider uppercase">YOUR DREAM | OUR GUIDANCE | GLOBAL OPPORTUNITIES</p>
          <p class="text-xs text-slate-400 leading-relaxed">
            Emigration consultancy & job placements for ages 18 to 51 across Poland, Croatia, Germany, Malta, UAE, Singapore, Canada.
          </p>
        </div>

        <div class="lg:col-span-4 space-y-2 text-xs text-slate-400">
          <h4 class="font-heading font-bold text-white text-sm uppercase">Contact & Location</h4>
          <p>📞 Phone: +91 8007884006</p>
          <p>💬 WhatsApp: +91 8007884006</p>
          <p>✉️ Email: galaxystarworkpermitservices@gmail.com</p>
          <p>📍 Headquarters: Pune / Mumbai, Maharashtra, India</p>
        </div>

        <div class="lg:col-span-3 space-y-3">
          <h4 class="font-heading font-bold text-white text-sm uppercase">Legal Policy</h4>
          <button onclick="openTermsModal('digital')" class="w-full py-2 px-3 rounded-lg bg-slate-800 text-xs font-semibold text-brand-gold border border-slate-700">
            View Official 6 Terms
          </button>
          <button onclick="openTermsModal('document')" class="w-full py-2 px-3 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700">
            Preview Original Document
          </button>
        </div>
      </div>

      <div class="pt-6 text-center text-xs text-slate-500">
        © ${new Date().getFullYear()} Galaxy Star Work Permit Services. Court Jurisdiction: Pune / Mumbai.
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP -->
  <aside aria-label="Quick contact" class="fixed bottom-6 right-6 z-50">
    <a href="https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20am%20inquiring%20about%20overseas%20work%20permits." target="_blank" class="flex items-center gap-2 bg-brand-green text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all border-2 border-white">
      <span class="font-bold text-xs">WhatsApp Direct</span>
    </a>
  </aside>

  <!-- APPLICATION MODAL -->
  <div id="applyModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
    <div class="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl border border-brand-gold/40 relative">
      <button onclick="closeApplyModal()" class="absolute top-4 right-4 text-slate-400 hover:text-black font-bold text-xl">✕</button>
      <h3 class="font-heading font-black text-lg text-brand-navy mb-1" id="modalTitle">Apply for Work Permit (Age 18–51)</h3>
      <p class="text-xs text-slate-500 mb-4">Galaxy Star Work Permit Services</p>
      
      <form onsubmit="handleModalApply(event)" class="space-y-3 text-xs">
        <div>
          <label class="block font-bold mb-1">Full Name *</label>
          <input id="modalName" type="text" required placeholder="Candidate Name" class="w-full p-2.5 border border-slate-300 rounded-lg" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold mb-1">Age (18-51) *</label>
            <input id="modalAge" type="number" min="18" max="51" value="28" required class="w-full p-2.5 border border-slate-300 rounded-lg font-bold text-brand-navy" />
          </div>
          <div>
            <label class="block font-bold mb-1">WhatsApp Mobile *</label>
            <input id="modalPhone" type="tel" required placeholder="8007884006" class="w-full p-2.5 border border-slate-300 rounded-lg" />
          </div>
        </div>
        <div>
          <label class="block font-bold mb-1">Target Country / Trade</label>
          <input id="modalRole" type="text" placeholder="e.g. Poland Warehouse / Welder" class="w-full p-2.5 border border-slate-300 rounded-lg" />
        </div>
        <button type="submit" class="w-full py-3 bg-gradient-gold text-brand-navy font-bold rounded-xl text-xs sm:text-sm">
          Send to WhatsApp Helpdesk (+91 8007884006)
        </button>
      </form>
    </div>
  </div>

  <!-- TERMS MODAL -->
  <div id="termsModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
    <div class="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative">
      <div class="bg-brand-navy p-4 text-white flex justify-between items-center">
        <div>
          <h3 class="font-heading font-extrabold text-base">Official Terms & Conditions</h3>
          <p class="text-xs text-brand-gold">Galaxy Star Work Permit Services • Pune/Mumbai</p>
        </div>
        <button onclick="closeTermsModal()" class="text-slate-300 hover:text-white font-bold text-xl">✕</button>
      </div>
      <div id="termsModalContent" class="p-6 overflow-y-auto flex-1 bg-slate-50 space-y-4 text-xs">
        <!-- Injected dynamically -->
      </div>
    </div>
  </div>

  <!-- INTERACTIVE SCRIPT -->
  <script>
    const TRADES_DATA = {
      warehouse: { name: 'Warehouse & Logistics / Packer', salary: '₹1,10,000 – ₹1,55,000 / mo', countries: ['Poland', 'Croatia', 'UAE'] },
      welder: { name: 'Welder / Fabricator / Fitter', salary: '₹1,35,000 – ₹1,90,000 / mo', countries: ['Croatia', 'Poland', 'Germany'] },
      hospitality: { name: 'Chef / Kitchen Staff / Hospitality', salary: '₹1,25,000 – ₹1,85,000 / mo', countries: ['Malta', 'Poland', 'Singapore'] },
      driver: { name: 'Heavy Driver / Forklift Operator', salary: '₹1,40,000 – ₹2,40,000 / mo', countries: ['Germany', 'Poland', 'Canada', 'UAE'] },
      electrician: { name: 'Electrician / Maintenance Tech', salary: '₹1,10,000 – ₹1,75,000 / mo', countries: ['UAE', 'Poland', 'Croatia'] },
      agriculture: { name: 'Agriculture & Farm Worker', salary: '₹1,00,000 – ₹1,40,000 / mo', countries: ['Poland', 'Croatia'] }
    };

    let activeTrade = 'warehouse';
    let currentAgeVal = 28;

    function updateAge(val) {
      currentAgeVal = val;
      document.getElementById('ageDisplay').innerText = val + ' Years';
      
      let text = '';
      if (val >= 18 && val <= 25) {
        text = '<strong>Age ' + val + ' Guidance:</strong> Prime entry age: Excellent for fast-track warehouse, hospitality, agricultural, and apprenticeships with rapid visa approvals.';
      } else if (val >= 26 && val <= 40) {
        text = '<strong>Age ' + val + ' Guidance:</strong> Core peak career age: Highest demand across all technical trades, skilled welding, heavy driving, and supervisor positions in Europe and Gulf.';
      } else {
        text = '<strong>Age ' + val + ' Guidance:</strong> Master experience bracket: Highly valued for heavy machinery, master craftsmen, certified welders, and maintenance leads where practical experience outweighs theoretical degrees.';
      }
      document.getElementById('ageInsightBox').innerHTML = text;
    }

    function selectTrade(tradeId) {
      activeTrade = tradeId;
      document.querySelectorAll('.trade-btn').forEach(b => {
        b.className = 'trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700';
      });
      document.getElementById('trade-' + tradeId).className = 'trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-brand-navy bg-brand-navy text-white shadow-md';
      
      const t = TRADES_DATA[tradeId];
      document.getElementById('calcMatchedTrade').innerText = 'Category: ' + t.name;
      document.getElementById('calcSalary').innerText = t.salary;
      document.getElementById('calcCountries').innerHTML = t.countries.map(c => '<span class="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px]">' + c + '</span>').join(' ');
    }

    function sendCalculatorToWhatsApp() {
      const name = document.getElementById('calcName').value || 'Candidate';
      const phone = document.getElementById('calcPhone').value || 'Not provided';
      const t = TRADES_DATA[activeTrade];
      const text = encodeURIComponent(
        'Hello Galaxy Star Work Permit Services,\\n\\nI used your 18-51 Age Eligibility Checker:\\n' +
        '👤 Name: ' + name + '\\n' +
        '📞 Phone: ' + phone + '\\n' +
        '🎂 Age: ' + currentAgeVal + ' years\\n' +
        '🛠️ Category: ' + t.name + '\\n' +
        '💵 Expected: ' + t.salary + '\\n\\n' +
        'Please review my profile and guide me on the work permit process.'
      );
      window.open('https://wa.me/918007884006?text=' + text, '_blank');
    }

    function openApplyModal(title) {
      if (title) {
        document.getElementById('modalTitle').innerText = 'Apply: ' + title;
        document.getElementById('modalRole').value = title;
      } else {
        document.getElementById('modalTitle').innerText = 'Apply for Work Permit (Age 18–51)';
        document.getElementById('modalRole').value = '';
      }
      document.getElementById('applyModal').classList.remove('hidden');
    }

    function closeApplyModal() {
      document.getElementById('applyModal').classList.add('hidden');
    }

    function handleModalApply(e) {
      e.preventDefault();
      const name = document.getElementById('modalName').value;
      const age = document.getElementById('modalAge').value;
      const phone = document.getElementById('modalPhone').value;
      const role = document.getElementById('modalRole').value || 'General Work Permit';
      const text = encodeURIComponent(
        'Hello Galaxy Star Work Permit Services,\\n\\nApplication Form Submission:\\n' +
        '👤 Name: ' + name + '\\n' +
        '🎂 Age: ' + age + ' Years (Bracket 18-51)\\n' +
        '📞 Phone: ' + phone + '\\n' +
        '💼 Position: ' + role + '\\n\\n' +
        'Please confirm receipt and let me know the document requirements.'
      );
      window.open('https://wa.me/918007884006?text=' + text, '_blank');
      closeApplyModal();
    }

    function handleContactSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const age = document.getElementById('formAge').value;
      const phone = document.getElementById('formPhone').value;
      const country = document.getElementById('formCountry').value;
      const trade = document.getElementById('formTrade').value || 'General';
      const text = encodeURIComponent(
        'Hello Galaxy Star Work Permit Services,\\n\\nWebsite Inquiry:\\n' +
        '👤 Name: ' + name + '\\n' +
        '🎂 Age: ' + age + ' Years\\n' +
        '📞 WhatsApp: ' + phone + '\\n' +
        '🌍 Destination: ' + country + '\\n' +
        '🛠️ Trade: ' + trade
      );
      window.open('https://wa.me/918007884006?text=' + text, '_blank');
    }

    function openTermsModal(mode) {
      const container = document.getElementById('termsModalContent');
      if (mode === 'document') {
        container.innerHTML = '<div class="text-center space-y-3"><div class="text-xs text-slate-500 font-bold">Physical Document Issued by Galaxy Star Work Permit Services:</div><img src="${termsDocDataUri}" class="max-w-md mx-auto rounded-lg shadow-md border border-slate-300" /></div>';
      } else {
        container.innerHTML = \`
          <div class="space-y-3">
            <div class="bg-brand-navy/5 p-3 rounded-lg border border-brand-navy/15 text-brand-navy font-bold">
              Official 6 Terms & Conditions (Pune / Mumbai Jurisdiction)
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">1. Scope of Services:</strong>
              <p class="text-slate-600 mt-1">Legal advice on visa process; application preparation; strictly no 100% visa guarantee as approval rests solely with Embassy/Consulate.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">2. Client's Responsibilities:</strong>
              <p class="text-slate-600 mt-1">Mandatory true & accurate documents. Forged documents lead to cancellation and legal action. Timeliness in submission.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">3. Fees and Payment Policy:</strong>
              <p class="text-slate-600 mt-1">Agreed consultancy fee paid as scheduled. Government fees paid separately.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">4. Refund / Non-Refund Policy:</strong>
              <p class="text-slate-600 mt-1">100% refund within 30 days if cancellation occurs on consultancy part. No refund if cancellation on client part. e-Visa payment due within 2 days.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">5. Termination of Agreement:</strong>
              <p class="text-slate-600 mt-1">Contract immediately cancellable on client rule violation. Fee non-refundable upon voluntary client withdrawal.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">6. Jurisdiction:</strong>
              <p class="text-slate-600 mt-1">Court at headquarters Pune / Mumbai, Maharashtra.</p>
            </div>
          </div>
        \`;
      }
      document.getElementById('termsModal').classList.remove('hidden');
    }

    function closeTermsModal() {
      document.getElementById('termsModal').classList.add('hidden');
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(projectDir, 'standalone-preview.html'), html, 'utf8');
console.log('Successfully created standalone-preview.html');
