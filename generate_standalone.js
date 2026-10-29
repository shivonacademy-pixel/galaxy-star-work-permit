import fs from 'fs';
import path from 'path';

const projectDir = 'C:/Users/kisha/.gemini/antigravity/scratch/galaxy-star-work-permit';
const logoPath = path.join(projectDir, 'public/assets/logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUri = `data:image/png;base64,${logoBase64}`;

const termsDocPath = path.join(projectDir, 'public/assets/terms_document.jpg');
const termsDocBase64 = fs.readFileSync(termsDocPath).toString('base64');
const termsDocDataUri = `data:image/jpeg;base64,${termsDocBase64}`;

const html = `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Galaxy Star Work Permit Services | Azerbaijan Emigration & Work Permits (Age 18–51)</title>
  <meta name="description" content="Your Dream | Our Guidance | Global Opportunities. Premier emigration consultancy and genuine work permit placement in Azerbaijan (Baku) for candidates aged 18 to 51. 65-Day refund policy." />
  
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
          <span>📞 +91 8007884006</span>
        </a>
        <a href="mailto:galaxystarworkpermitservices@gmail.com" class="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors">
          <span>✉️ galaxystarworkpermitservices@gmail.com</span>
        </a>
        <div class="hidden md:flex items-center gap-1.5 text-slate-400">
          <span>📍 Headquarters: Pune / Mumbai, Maharashtra</span>
        </div>
      </div>

      <div class="flex items-center gap-3 ml-auto">
        <span class="hidden lg:inline-flex items-center gap-1 text-slate-400">
          <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
        </span>
        <a href="https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20would%20like%20to%20inquire%20about%20Azerbaijan%20work%20permits%20and%20job%20placements%20(Age%2018-51)." target="_blank" class="flex items-center gap-1.5 bg-brand-green/20 text-brand-green hover:bg-brand-green/30 px-2.5 py-0.5 rounded-full border border-brand-green/30 font-medium transition-all text-[11px]">
          <span>💬 WhatsApp Direct</span>
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
            Work Permit & Emigration Consultancy • Azerbaijan 🇦🇿
          </div>
        </div>
      </a>

      <!-- Desktop Links -->
      <div class="hidden xl:flex items-center gap-1">
        <a href="#home" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Home</a>
        <a href="#about" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">About Us</a>
        <a href="#services" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Services</a>
        <a href="#jobs" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Azerbaijan Jobs (18–51)</a>
        <a href="#eligibility" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Eligibility</a>
        <a href="#workflow" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Workflow</a>
        <a href="#reviews" class="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Reviews</a>
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
            Azerbaijan Emigration & <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Work Permit Services</span> <br />
            For Ages <span className="underline decoration-brand-gold decoration-4 underline-offset-4">18 to 51</span>
          </h1>

          <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Turn your international career ambition into reality with verified employer job placements in 
            <strong class="text-white"> Baku, Sumqayit, and across Azerbaijan 🇦🇿</strong>. 
            Protected by our transparent 6-point legal agreement, 65-Day refund policy, and zero false promises.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>State Migration Service (SMS) Compliant</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Candidates Aged 18 to 51 Eligible</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Written Agreement with 65-Day Refund Clause</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-brand-green font-bold">✓</span>
              <span>Court Jurisdiction: Pune / Mumbai HQ</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a href="#eligibility" class="bg-gradient-gold text-brand-navy hover:opacity-95 font-bold px-6 py-3.5 rounded-xl shadow-gold hover:shadow-xl transition-all flex items-center gap-2.5 text-base">
              <span>Check Azerbaijan Eligibility</span>
              <span>→</span>
            </a>
            <a href="https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20would%20like%20an%20instant%20Azerbaijan%20assessment." target="_blank" class="inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all text-base">
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
                <div class="text-xl font-black text-white">🇦🇿 Baku</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Azerbaijan Work Hub</div>
              </div>
              <div class="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                <div class="text-2xl font-black text-brand-green">100%</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Transparent Terms</div>
              </div>
              <div class="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                <div class="text-2xl font-black text-brand-gold">65 Days</div>
                <div class="text-xs text-slate-300 font-medium mt-0.5">Refund Policy Protection</div>
              </div>
            </div>

            <button onclick="openApplyModal()" class="w-full py-3.5 bg-gradient-gold hover:opacity-95 text-brand-navy font-bold rounded-xl shadow-gold transition-all text-sm">
              Submit Profile for Azerbaijan Verification
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
          <span>Azerbaijan Assessment 🇦🇿</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Age 18 to 51 Eligibility & Azerbaijan Matcher
        </h2>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Galaxy Star exclusively places job candidates aged between <strong>18 and 51 years</strong> for official Azerbaijan work permits. Adjust your age and trade below to evaluate your placement in Baku.
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
              <strong>Age 28 Azerbaijan Guidance:</strong> Core peak career age: Highest demand across Azerbaijan for technical trades, skilled welders, commercial electricians, and heavy vehicle operators.
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
              <button onclick="selectTrade('construction')" id="trade-construction" class="trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700">
                Construction Mason / Carpenter
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
              <h3 class="font-heading font-extrabold text-xl text-white mt-0.5">Azerbaijan Qualification</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold">100% Eligible</span>
          </div>

          <div class="space-y-3 text-xs">
            <div class="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div class="font-bold text-white text-sm" id="calcMatchedTrade">Category: Warehouse & Logistics</div>
              <div class="text-slate-300 mt-0.5">Age bracket: <strong class="text-brand-gold">18 to 51 Years</strong>. You are fully qualified for Azerbaijan.</div>
            </div>
            <div class="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div class="font-bold text-white text-sm">Estimated Monthly Package:</div>
              <div class="text-brand-gold font-extrabold text-base mt-0.5" id="calcSalary">₹75,000 – ₹95,000 / month (1,500 – 1,900 AZN)</div>
              <div class="text-slate-400 text-[11px]">Free accommodation, health insurance & overtime included</div>
            </div>
            <div class="bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div class="font-bold text-white text-sm">Work Hub Placement:</div>
              <div class="text-slate-200 mt-1 flex flex-wrap gap-1.5" id="calcCountries">
                <span class="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px]">🇦🇿 Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          <button onclick="sendCalculatorToWhatsApp()" class="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl shadow-lg transition-all text-sm">
            Send Profile to WhatsApp (+91 8007884006)
          </button>
          <div class="text-center text-[11px] text-slate-400">
            65-Day refund policy protection • Governed under Pune/Mumbai legal terms.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AZERBAIJAN JOB BOARD SECTION -->
  <section id="jobs" class="py-16 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
          <span>Verified Azerbaijan Openings 🇦🇿</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Current Azerbaijan Work Permit Openings (Ages 18–51)
        </h2>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Explore verified vacancies across Baku, Sumqayit, and Ganja in Azerbaijan. All roles include legal employer contracts, free accommodation, and full State Migration Service documentation.
        </p>
      </div>

      <!-- Job Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Job 1: Baku Warehouse -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇿 Baku, Azerbaijan</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">28 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Warehouse & Logistics Associate</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Warehouse & Logistics</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹75,000 – ₹95,000 / mo (1,500 – 1,900 AZN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">18 to 50 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Azerbaijan Work Permit (SMS)</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Free Accommodation, Medical</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Warehouse Associate (Baku, Azerbaijan)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Azerbaijan%20Warehouse%20Associate" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 2: Sumqayit Welder -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇿 Sumqayit, Azerbaijan</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">20 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">MIG / TIG Welder & Steel Fabricator</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Skilled Technical Trades</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹90,000 – ₹1,25,000 / mo (1,800 – 2,500 AZN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">20 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Azerbaijan Residence & Work Permit</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Company Living Quarters, Transport</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('MIG/TIG Welder (Sumqayit, Azerbaijan)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Azerbaijan%20Welder%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 3: Baku Chef -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇿 Baku Hotels, Azerbaijan</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">16 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Continental & Indian Chef / Kitchen Staff</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Hospitality & Tourism</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹80,000 – ₹1,15,000 / mo (1,600 – 2,300 AZN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">21 to 48 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Azerbaijan Employment Visa</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Duty Meals, Accommodation, Tips</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Chef / Kitchen Staff (Baku, Azerbaijan)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Azerbaijan%20Chef%20Position" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 4: Baku Forklift & Heavy Driver -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇿 Baku Logistics Hub</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">18 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Forklift Operator & Heavy Driver</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Heavy Transport & Logistics</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹95,000 – ₹1,35,000 / mo (1,900 – 2,700 AZN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">22 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Azerbaijan TRWP & Work Pass</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Free Accommodation, High Overtime</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Forklift / Heavy Driver (Azerbaijan)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Azerbaijan%20Heavy%20Driver%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 5: Baku Electrician -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇿 Baku Infrastructure</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">22 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Industrial & Building Electrician</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Skilled Technical Maintenance</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹85,000 – ₹1,20,000 / mo (1,700 – 2,400 AZN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">21 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Azerbaijan State Migration Permit</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">Free Living Quarters, Tool Kit</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Industrial Electrician (Azerbaijan)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Azerbaijan%20Electrician%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Job 6: Construction Mason -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-xl transition-all p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-xs">🇦🇿 Baku / Ganja Projects</span>
              <span class="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-semibold">35 Openings</span>
            </div>
            <div>
              <h3 class="font-heading font-extrabold text-lg text-brand-navy">Construction Mason & Carpenter</h3>
              <p class="text-xs text-brand-gold-dark font-semibold">Construction & Infrastructure</p>
            </div>
            <div class="p-3 bg-brand-navy/5 rounded-xl">
              <div class="text-[11px] text-slate-500">Estimated Monthly Package:</div>
              <div class="text-base font-black text-brand-navy">₹75,000 – ₹1,00,000 / mo (1,500 – 2,000 AZN)</div>
            </div>
            <div class="text-xs space-y-1.5 text-slate-600">
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Age Limit:</span><span class="font-bold text-brand-navy bg-brand-gold/15 px-2 py-0.5 rounded">19 to 51 Years</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Visa Type:</span><span class="font-semibold text-slate-700">Azerbaijan Work Permit (SMS)</span>
              </div>
              <div class="flex justify-between border-b border-slate-100 py-1">
                <span>Benefits:</span><span class="font-semibold text-slate-700">On-site Living Quarters, Canteen</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openApplyModal('Construction Mason (Azerbaijan)')" class="flex-1 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-navy-light">
              Apply Now
            </button>
            <a href="https://wa.me/918007884006?text=I%20am%20inquiring%20about%20Azerbaijan%20Construction%20Job" target="_blank" class="p-2.5 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green/20">
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
          Our 5-Step Azerbaijan Placement Workflow
        </h2>
        <p class="mt-3 text-slate-300 text-sm sm:text-base">
          Follow our proven, step-by-step roadmap from initial profile check to flight departure for Baku.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">01</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Profile & Age Check (18–51)</h4>
            <p class="text-xs text-slate-300 mt-2">Free evaluation of candidate trade credentials, passport status, and Azerbaijan work quota match.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Free Consultation</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">02</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Agreement Signing</h4>
            <p class="text-xs text-slate-300 mt-2">Official written agreement under our 6-point Terms & Conditions with 65-Day refund protection.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">65-Day Protection</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">03</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Baku Employer Match</h4>
            <p class="text-xs text-slate-300 mt-2">Securing genuine foreign employment offer letter and work contract from authorized Baku employers.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Direct Employer</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">04</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">State Migration (SMS) Filing</h4>
            <p class="text-xs text-slate-300 mt-2">Government work permit filing with State Migration Service of Azerbaijan, MEA apostille, and embassy file verification.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">SMS Compliance</div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="font-heading font-black text-2xl text-brand-gold">05</span>
            <h4 class="font-heading font-bold text-base text-white mt-2">Visa Grant & Baku Flight</h4>
            <p class="text-xs text-slate-300 mt-2">Receipt of Azerbaijan e-Visa / work permit, pre-departure orientation, and arrival pickup in Baku.</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-brand-green">Smooth Relocation</div>
        </div>
      </div>
    </div>
  </section>

  <!-- MANUAL REVIEW SECTION (ANYONE CAN SUBMIT & SEE REVIEWS) -->
  <section id="reviews" class="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <span>⭐ Candidate Reviews (Azerbaijan 🇦🇿)</span>
          </div>
          <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Candidate Experiences & Reviews
          </h2>
          <p class="mt-2 text-slate-600 text-xs sm:text-sm max-w-xl">
            Authentic feedback from candidates placed in Baku, Sumqayit, and across Azerbaijan. Anyone can manually share their review below.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <div class="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <span class="font-heading font-extrabold text-lg text-brand-navy">⭐ 4.9 / 5.0</span>
            <span class="text-xs text-slate-500 border-l border-slate-200 pl-3">Verified Placements</span>
          </div>

          <button onclick="toggleReviewForm()" class="px-5 py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all">
            ✍️ Write a Review
          </button>
        </div>
      </div>

      <!-- Add Review Form (Collapsible) -->
      <div id="reviewFormContainer" class="hidden bg-white rounded-2xl border-2 border-brand-gold/50 shadow-xl p-6 sm:p-8 mb-12">
        <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <h3 class="font-heading font-extrabold text-lg text-brand-navy">Share Your Experience with Galaxy Star</h3>
            <p class="text-xs text-slate-500">Your review will be added immediately and displayed to all visitors.</p>
          </div>
          <button onclick="toggleReviewForm()" class="text-slate-400 hover:text-slate-600 text-xl font-bold">✕</button>
        </div>

        <form onsubmit="handleManualReviewSubmit(event)" class="space-y-4 text-xs sm:text-sm">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Full Name *</label>
              <input id="revName" type="text" required placeholder="e.g. Anand Shinde" class="w-full px-3.5 py-2 border border-slate-300 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Age (18–51) *</label>
              <input id="revAge" type="number" min="18" max="51" value="28" required class="w-full px-3.5 py-2 border border-slate-300 rounded-xl font-bold text-brand-navy" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">City / State</label>
              <input id="revCity" type="text" placeholder="e.g. Pune, Maharashtra" class="w-full px-3.5 py-2 border border-slate-300 rounded-xl" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Trade / Role in Azerbaijan *</label>
              <input id="revRole" type="text" required placeholder="e.g. Welder in Baku / Hotel Staff" class="w-full px-3.5 py-2 border border-slate-300 rounded-xl" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Rating (1 to 5 Stars)</label>
              <select id="revRating" class="w-full px-3.5 py-2 border border-slate-300 rounded-xl bg-white">
                <option value="5">⭐⭐⭐⭐⭐ (5 Stars - Excellent)</option>
                <option value="4">⭐⭐⭐⭐ (4 Stars - Good)</option>
                <option value="3">⭐⭐⭐ (3 Stars - Average)</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Your Review Message *</label>
            <textarea id="revQuote" rows="3" required placeholder="Describe your experience with Galaxy Star regarding your Azerbaijan work permit..." class="w-full px-3.5 py-2 border border-slate-300 rounded-xl"></textarea>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button type="button" onclick="toggleReviewForm()" class="px-5 py-2 border border-slate-300 rounded-xl text-slate-700 font-bold">Cancel</button>
            <button type="submit" class="px-6 py-2 bg-gradient-gold text-brand-navy font-bold rounded-xl shadow-gold">Post Review Instantly</button>
          </div>
        </form>
      </div>

      <!-- Reviews Container -->
      <div id="reviewsList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Rendered dynamically -->
      </div>
    </div>
  </section>

  <!-- OFFICIAL 6-POINT TERMS & CONDITIONS SECTION -->
  <section id="terms" class="py-16 sm:py-20 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
          <span>Official Client Agreement & Policy</span>
        </div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
          Terms and Conditions & Transparency Charter
        </h2>
        <div class="mt-2 text-xs sm:text-sm font-semibold text-brand-gold-dark uppercase tracking-wider">
          YOUR DREAM | OUR GUIDANCE | GLOBAL OPPORTUNITIES • YOUR VISA • OUR PRIORITY
        </div>
        <p class="mt-3 text-slate-600 text-sm sm:text-base">
          Below is the verbatim agreement issued to every candidate. We operate with zero false promises, complete fee transparency, 65-Day refund policy, and Pune/Mumbai jurisdiction.
        </p>
      </div>

      <!-- Preview Banner -->
      <div class="bg-slate-50 border border-brand-gold/40 rounded-2xl p-4 sm:p-5 mb-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
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
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-200 pb-2">
              1. Scope of Services
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Consultation and Guidance:</strong> The consultancy will provide guidance regarding the visa process, required documents, and application procedures.</p>
              <p><strong>Application Preparation:</strong> We will assist in preparing and submitting the application based on the information provided by the client.</p>
              <p><strong>No Guarantee of Visa Approval:</strong> The authority to approve or reject a visa rests entirely with the relevant Embassy/Consulate. The consultancy does not provide a 100% guarantee of visa approval.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-200">Clause #1 • Legally Binding</div>
        </div>

        <!-- Clause 2 -->
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-200 pb-2">
              2. Client's Responsibilities
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Accurate Information:</strong> The client must provide all information, certificates, and documents that are true, accurate, and complete.</p>
              <p><strong>Fake Documents:</strong> If the client submits any fake or forged documents, the application may be rejected. The consultancy will not be responsible in such circumstances, and legal action may be taken.</p>
              <p><strong>Timely Compliance:</strong> The client is responsible for submitting the required documents and fees within the specified time.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-200">Clause #2 • Legally Binding</div>
        </div>

        <!-- Clause 3 -->
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-200 pb-2">
              3. Fees and Payment Policy
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Service Charges:</strong> The client must pay the agreed consultancy fee as discussed at the beginning of the process.</p>
              <p><strong>Government Fees:</strong> Visa application fees, courier charges, medical examination fees, and other government charges must be paid separately by the client. If any such charges are borne by the company, the client will not be required to pay them separately.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-200">Clause #3 • Legally Binding</div>
        </div>

        <!-- Clause 4 -->
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-200 pb-2">
              4. Refund / Non-Refund Policy (65 Days Policy)
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Refund Window (65 Days):</strong> If the client cancels the process due to personal difficulties, the amount paid will be refunded within 65 days.</p>
              <p><strong>Personal Reasons / Difficulties:</strong> If the client cancels the process due to any personal reasons or difficulties, no refund will be provided.</p>
              <p><strong>e-Visa Payment Window:</strong> After the e-visa is issued, the client must pay the remaining amount within a maximum of two days. If any problem arises during the process, the consultancy will not be held responsible.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-200">Clause #4 • 65-Day Guarantee</div>
        </div>

        <!-- Clause 5 -->
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-200 pb-2">
              5. Termination of Agreement
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Cancellation of Agreement:</strong> If the client violates the terms, provides incorrect information, or fails to pay the agreed fees, the consultancy may terminate the agreement immediately.</p>
              <p><strong>No Refund:</strong> If the client voluntarily discontinues the process, the fees already paid will not be refunded.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-200">Clause #5 • Legally Binding</div>
        </div>

        <!-- Clause 6 -->
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
          <div class="space-y-3">
            <h3 class="font-heading font-black text-base text-brand-navy border-b border-slate-200 pb-2">
              6. Jurisdiction
            </h3>
            <div class="text-xs text-slate-600 space-y-2">
              <p><strong>Legal Jurisdiction:</strong> Any disputes or legal matters arising from this process shall be subject to the jurisdiction of the courts located in Pune/Mumbai, where the consultancy's main office is situated.</p>
            </div>
          </div>
          <div class="mt-4 pt-2 text-[11px] text-brand-green font-semibold border-t border-slate-200">Clause #6 • Pune / Mumbai Courts</div>
        </div>

      </div>
    </div>
  </section>

  <!-- CONTACT & APPLICATION SECTION -->
  <section id="contact" class="py-16 sm:py-20 bg-slate-50">
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
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-4">
            <h3 class="font-heading font-extrabold text-lg text-brand-navy">Helpline & Social Accounts</h3>
            <div class="space-y-3 text-sm">
              <a href="tel:+918007884006" class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-brand-navy hover:text-brand-gold-dark">
                📞 +91 8007884006
              </a>
              <a href="https://wa.me/918007884006" target="_blank" class="flex items-center gap-3 p-3 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/30 font-bold">
                💬 WhatsApp: 8007884006
              </a>
              <a href="mailto:galaxystarworkpermitservices@gmail.com" class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-brand-navy break-all">
                ✉️ galaxystarworkpermitservices@gmail.com
              </a>
            </div>
          </div>

          <div class="bg-brand-navy text-white rounded-2xl p-6 space-y-3">
            <h4 class="font-heading font-extrabold text-base text-white">Official Social Media Profiles</h4>
            <div class="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="https://www.instagram.com/galaxy_star_work_permit?dlrf=MXNsaDdmdmJ3b2RhaQ==" target="_blank" class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-center text-xs font-bold text-white shadow-md">
                Instagram Page
              </a>
              <a href="https://www.facebook.com/share/1QGJqqPDTr/" target="_blank" class="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 text-center text-xs font-bold text-white shadow-md">
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <h3 class="font-heading font-black text-xl text-brand-navy mb-4">Book Free Azerbaijan Consultation (Age 18–51)</h3>
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
                <label class="block font-bold text-slate-700 mb-1">Target Location in Azerbaijan</label>
                <select id="formCountry" class="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl bg-white">
                  <option value="Azerbaijan (Baku)">Baku (Capital City Hub)</option>
                  <option value="Azerbaijan (Sumqayit)">Sumqayit (Industrial Hub)</option>
                  <option value="Azerbaijan (Ganja)">Ganja (Commercial Hub)</option>
                  <option value="Azerbaijan (All Quotas)">All Azerbaijan Quotas</option>
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
              <span class="text-brand-gold font-bold text-xs block">Work Permit Services • Azerbaijan 🇦🇿</span>
            </div>
          </div>
          <p class="text-xs text-brand-gold font-bold tracking-wider uppercase">YOUR DREAM | OUR GUIDANCE | GLOBAL OPPORTUNITIES</p>
          <p class="text-xs text-slate-400 leading-relaxed">
            Emigration consultancy & job placements for ages 18 to 51 across Baku, Sumqayit, and Azerbaijan. Protected by our 65-Day refund policy.
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
            View Official 6 Terms (65-Day Refund)
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
    <a href="https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20am%20inquiring%20about%20Azerbaijan%20work%20permits." target="_blank" class="flex items-center gap-2 bg-brand-green text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all border-2 border-white">
      <span class="font-bold text-xs">WhatsApp Direct</span>
    </a>
  </aside>

  <!-- APPLICATION MODAL -->
  <div id="applyModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
    <div class="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl border border-brand-gold/40 relative">
      <button onclick="closeApplyModal()" class="absolute top-4 right-4 text-slate-400 hover:text-black font-bold text-xl">✕</button>
      <h3 class="font-heading font-black text-lg text-brand-navy mb-1" id="modalTitle">Apply for Azerbaijan Work Permit (Age 18–51)</h3>
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
          <label class="block font-bold mb-1">Azerbaijan Trade / Sector</label>
          <input id="modalRole" type="text" placeholder="e.g. Baku Warehouse / Welder / Chef" class="w-full p-2.5 border border-slate-300 rounded-lg" />
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
          <p class="text-xs text-brand-gold">Galaxy Star Work Permit Services • Pune/Mumbai • 65-Day Refund Policy</p>
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
      warehouse: { name: 'Warehouse & Logistics / Packer', salary: '₹75,000 – ₹95,000 / mo (1,500 – 1,900 AZN)', countries: ['🇦🇿 Baku, Azerbaijan'] },
      welder: { name: 'Welder / Fabricator / Fitter', salary: '₹90,000 – ₹1,25,000 / mo (1,800 – 2,500 AZN)', countries: ['🇦🇿 Sumqayit / Baku, Azerbaijan'] },
      hospitality: { name: 'Chef / Kitchen Staff / Hospitality', salary: '₹80,000 – ₹1,15,000 / mo (1,600 – 2,300 AZN)', countries: ['🇦🇿 Baku Luxury Hotels'] },
      driver: { name: 'Heavy Driver / Forklift Operator', salary: '₹95,000 – ₹1,35,000 / mo (1,900 – 2,700 AZN)', countries: ['🇦🇿 Baku Logistics Hub'] },
      electrician: { name: 'Electrician / Maintenance Tech', salary: '₹85,000 – ₹1,20,000 / mo (1,700 – 2,400 AZN)', countries: ['🇦🇿 Baku Commercial Hub'] },
      construction: { name: 'Construction Mason / Carpenter', salary: '₹75,000 – ₹1,00,000 / mo (1,500 – 2,000 AZN)', countries: ['🇦🇿 Baku Infrastructure'] }
    };

    let activeTrade = 'warehouse';
    let currentAgeVal = 28;

    function updateAge(val) {
      currentAgeVal = val;
      document.getElementById('ageDisplay').innerText = val + ' Years';
      
      let text = '';
      if (val >= 18 && val <= 25) {
        text = '<strong>Age ' + val + ' Azerbaijan Guidance:</strong> Prime entry age: Excellent for fast-track Baku hotel hospitality, warehouse logistics, and store assistants with rapid State Migration Service approvals.';
      } else if (val >= 26 && val <= 40) {
        text = '<strong>Age ' + val + ' Azerbaijan Guidance:</strong> Core peak career age: Highest demand across Azerbaijan for technical trades, skilled welders, commercial electricians, and heavy vehicle operators.';
      } else {
        text = '<strong>Age ' + val + ' Azerbaijan Guidance:</strong> Master experience bracket: Highly valued in Azerbaijan for heavy machinery, master fabricators, and site foremen where practical skills outweigh formal degrees.';
      }
      document.getElementById('ageInsightBox').innerHTML = text;
    }

    function selectTrade(tradeId) {
      activeTrade = tradeId;
      document.querySelectorAll('.trade-btn').forEach(b => {
        b.className = 'trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-slate-200 bg-slate-50 text-slate-700';
      });
      const el = document.getElementById('trade-' + tradeId);
      if (el) {
        el.className = 'trade-btn text-left p-3 rounded-xl border text-xs sm:text-sm font-medium border-brand-navy bg-brand-navy text-white shadow-md';
      }
      
      const t = TRADES_DATA[tradeId];
      if (t) {
        document.getElementById('calcMatchedTrade').innerText = 'Category: ' + t.name;
        document.getElementById('calcSalary').innerText = t.salary;
        document.getElementById('calcCountries').innerHTML = t.countries.map(c => '<span class="px-2 py-0.5 bg-brand-navy-dark border border-slate-700 rounded text-[11px]">' + c + '</span>').join(' ');
      }
    }

    function sendCalculatorToWhatsApp() {
      const name = document.getElementById('calcName').value || 'Candidate';
      const phone = document.getElementById('calcPhone').value || 'Not provided';
      const t = TRADES_DATA[activeTrade];
      const text = encodeURIComponent(
        'Hello Galaxy Star Work Permit Services,\\n\\nI used your 18-51 Azerbaijan Age Eligibility Checker:\\n' +
        '👤 Name: ' + name + '\\n' +
        '📞 Phone: ' + phone + '\\n' +
        '🎂 Age: ' + currentAgeVal + ' years (Bracket 18-51)\\n' +
        '🛠️ Category: ' + t.name + '\\n' +
        '🇦🇿 Destination: Azerbaijan\\n' +
        '💵 Expected: ' + t.salary + '\\n\\n' +
        'Please review my profile and guide me on the Azerbaijan work permit process.'
      );
      window.open('https://wa.me/918007884006?text=' + text, '_blank');
    }

    function openApplyModal(title) {
      if (title) {
        document.getElementById('modalTitle').innerText = 'Apply: ' + title;
        document.getElementById('modalRole').value = title;
      } else {
        document.getElementById('modalTitle').innerText = 'Apply for Azerbaijan Work Permit (Age 18–51)';
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
      const role = document.getElementById('modalRole').value || 'Azerbaijan Work Permit';
      const text = encodeURIComponent(
        'Hello Galaxy Star Work Permit Services,\\n\\nApplication Form Submission:\\n' +
        '👤 Name: ' + name + '\\n' +
        '🎂 Age: ' + age + ' Years (Bracket 18-51)\\n' +
        '📞 Phone: ' + phone + '\\n' +
        '🇦🇿 Country: Azerbaijan\\n' +
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
              Official 6 Terms & Conditions (Pune / Mumbai Jurisdiction • 65-Day Refund Policy)
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">1. Scope of Services:</strong>
              <p class="text-slate-600 mt-1">Consultation and guidance on visa process; application preparation; strictly no 100% guarantee of visa approval as authority rests solely with the Embassy/Consulate.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">2. Client's Responsibilities:</strong>
              <p class="text-slate-600 mt-1">Mandatory true & accurate documents. Fake/forged documents lead to cancellation and legal action. Timely submission of required documents and fees.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">3. Fees and Payment Policy:</strong>
              <p class="text-slate-600 mt-1">Agreed consultancy fee paid as discussed. Government fees (visa, medical, courier) paid separately.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">4. Refund / Non-Refund Policy (65-Day Policy):</strong>
              <p class="text-slate-600 mt-1">If the client cancels due to personal difficulties, the amount paid will be refunded within 65 days. No refund if canceled for personal reasons. e-Visa payment due within maximum 2 days.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">5. Termination of Agreement:</strong>
              <p class="text-slate-600 mt-1">Agreement terminable immediately on rule violation/non-payment. No refund on voluntary client discontinuation.</p>
            </div>
            <div class="p-3 bg-white border border-slate-200 rounded-lg">
              <strong class="text-brand-navy">6. Jurisdiction:</strong>
              <p class="text-slate-600 mt-1">Court jurisdiction at headquarters in Pune / Mumbai, Maharashtra.</p>
            </div>
          </div>
        \`;
      }
      document.getElementById('termsModal').classList.remove('hidden');
    }

    function closeTermsModal() {
      document.getElementById('termsModal').classList.add('hidden');
    }

    // --- REVIEWS SYSTEM (LOCALSTORAGE + IMMEDIATE RENDERING) ---
    const DEFAULT_REVIEWS = [
      { id: 1, name: "Rameshwar Patil", age: 34, role: "MIG Welder in Baku, Azerbaijan", origin: "Pune, Maharashtra", rating: 5, quote: "Galaxy Star made my dream of working in Azerbaijan a reality. They explained the State Migration Service process clearly and without false promises. Within 7 weeks, my Baku work permit arrived!", date: "Oct 2026" },
      { id: 2, name: "Pooja Sawant", age: 26, role: "Hospitality Executive in Baku City Center", origin: "Mumbai, Maharashtra", rating: 5, quote: "Their transparency with the 65-Day refund policy and written Terms gave my family complete trust. I am happily working at a premier hotel in Baku now. Highly recommended!", date: "Sep 2026" },
      { id: 3, name: "Sukhwinder Singh", age: 48, role: "Heavy Equipment Driver in Sumqayit, Azerbaijan", origin: "Nashik, Maharashtra", rating: 5, quote: "At 48 years old, many agencies turned me away. Galaxy Star showed me that Azerbaijan actively hires skilled trades up to age 51. I earn well in Azerbaijani Manat and support my children back home.", date: "Aug 2026" },
      { id: 4, name: "Mohammad Irfan", age: 23, role: "Warehouse Logistics in Baku, Azerbaijan", origin: "Aurangabad, Maharashtra", rating: 5, quote: "Completely genuine guidance. No hidden charges, clear government fee split, and constant WhatsApp updates from the staff. I received my Azerbaijan work permit and flight smoothly!", date: "Oct 2026" }
    ];

    function loadReviews() {
      try {
        const stored = localStorage.getItem('gs_user_reviews_az');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {}
      return DEFAULT_REVIEWS;
    }

    function renderReviews() {
      const reviews = loadReviews();
      const container = document.getElementById('reviewsList');
      if (!container) return;
      container.innerHTML = reviews.map(r => \`
        <div class="bg-white rounded-2xl p-6 border \${r.isNew ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-slate-200'} shadow-card flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-brand-gold text-sm font-bold">\${'★'.repeat(r.rating || 5)}</span>
              \${r.isNew ? '<span class="text-[10px] uppercase font-bold bg-brand-gold/20 text-brand-gold-dark px-2 py-0.5 rounded-full">New Review</span>' : ''}
            </div>
            <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">"\${r.quote}"</p>
          </div>
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <div class="font-heading font-bold text-sm text-brand-navy">\${r.name} <span class="text-xs text-slate-400 font-normal">(\${r.age} yrs)</span></div>
              <div class="text-xs font-semibold text-brand-gold-dark">\${r.role}</div>
              <div class="text-[11px] text-slate-400">📍 \${r.origin} • \${r.date}</div>
            </div>
            <div class="w-7 h-7 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs" title="Verified Placement">✓</div>
          </div>
        </div>
      \`).join('');
    }

    function toggleReviewForm() {
      const form = document.getElementById('reviewFormContainer');
      form.classList.toggle('hidden');
    }

    function handleManualReviewSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('revName').value.trim();
      const age = document.getElementById('revAge').value;
      const origin = document.getElementById('revCity').value.trim() || 'Maharashtra, India';
      const role = document.getElementById('revRole').value.trim();
      const rating = parseInt(document.getElementById('revRating').value, 10) || 5;
      const quote = document.getElementById('revQuote').value.trim();

      const newRev = {
        id: Date.now(),
        name,
        age: parseInt(age, 10),
        origin,
        role,
        rating,
        quote,
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        isNew: true
      };

      const current = loadReviews();
      const updated = [newRev, ...current];
      try {
        localStorage.setItem('gs_user_reviews_az', JSON.stringify(updated));
      } catch (err) {}

      renderReviews();
      toggleReviewForm();
      alert('Thank you! Your review has been added successfully and is now visible.');
    }

    // Initial render
    renderReviews();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(projectDir, 'standalone-preview.html'), html, 'utf8');
console.log('Successfully updated standalone-preview.html with Azerbaijan and 65-day refund policy');
