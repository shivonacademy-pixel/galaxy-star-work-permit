export const COMPANY_INFO = {
  name: "Galaxy Star Work Permit Services",
  shortName: "Galaxy Star",
  tagline: "YOUR DREAM | OUR GUIDANCE | GLOBAL OPPORTUNITIES",
  subTagline: "Premier Emigration & Genuine Work Permit Placement in Azerbaijan for Ages 18 to 51",
  phone: "8007884006",
  phoneDisplay: "+91 8007884006",
  whatsappNumber: "918007884006",
  whatsappUrl: "https://wa.me/918007884006?text=Hello%20Galaxy%20Star%20Work%20Permit%20Services,%20I%20would%20like%20to%20inquire%20about%20Azerbaijan%20work%20permits%20and%20job%20placements%20(Age%2018-51).",
  email: "galaxystarworkpermitservices@gmail.com",
  instagram: "https://www.instagram.com/galaxy_star_work_permit?dlrf=MXNsaDdmdmJ3b2RhaQ==",
  facebook: "https://www.facebook.com/share/1QGJqqPDTr/",
  locations: "Headquarters: Pune / Mumbai, Maharashtra, India",
  workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM (Sunday Closed)",
  ageRange: "18 to 51 Years",
  logoUrl: "./assets/logo.png",
  termsDocumentUrl: "./assets/terms_document.jpg",
  destinationCountry: "Azerbaijan",
  refundPeriod: "65 Days"
};

export const TERMS_AND_CONDITIONS = [
  {
    id: 1,
    title: "1. Scope of Services",
    icon: "FileText",
    points: [
      {
        subtitle: "Consultation and Guidance",
        text: "The consultancy will provide guidance regarding the visa process, required documents, and application procedures."
      },
      {
        subtitle: "Application Preparation",
        text: "We will assist in preparing and submitting the application based on the information provided by the client."
      },
      {
        subtitle: "No Guarantee of Visa Approval",
        text: "The authority to approve or reject a visa rests entirely with the relevant Embassy/Consulate. The consultancy does not provide a 100% guarantee of visa approval."
      }
    ]
  },
  {
    id: 2,
    title: "2. Client's Responsibilities",
    icon: "UserCheck",
    points: [
      {
        subtitle: "Accurate Information",
        text: "The client must provide all information, certificates, and documents that are true, accurate, and complete."
      },
      {
        subtitle: "Fake Documents",
        text: "If the client submits any fake or forged documents, the application may be rejected. The consultancy will not be responsible in such circumstances, and legal action may be taken."
      },
      {
        subtitle: "Timely Compliance",
        text: "The client is responsible for submitting the required documents and fees within the specified time."
      }
    ]
  },
  {
    id: 3,
    title: "3. Fees and Payment Policy",
    icon: "IndianRupee",
    points: [
      {
        subtitle: "Service Charges",
        text: "The client must pay the agreed consultancy fee as discussed at the beginning of the process."
      },
      {
        subtitle: "Government Fees",
        text: "Visa application fees, courier charges, medical examination fees, and other government charges must be paid separately by the client. If any such charges are borne by the company, the client will not be required to pay them separately."
      }
    ]
  },
  {
    id: 4,
    title: "4. Refund / Non-Refund Policy (65 Days Policy)",
    icon: "RotateCcw",
    points: [
      {
        subtitle: "Refund Window (65 Days)",
        text: "If the client cancels the process due to personal difficulties, the amount paid will be refunded within 65 days."
      },
      {
        subtitle: "Personal Reasons / Withdrawal",
        text: "If the client cancels the process due to any personal reasons or difficulties, no refund will be provided."
      },
      {
        subtitle: "e-Visa Payment Window",
        text: "After the e-visa is issued, the client must pay the remaining amount within a maximum of two days. If any problem arises during the process, the consultancy will not be held responsible."
      }
    ]
  },
  {
    id: 5,
    title: "5. Termination of Agreement",
    icon: "FileX",
    points: [
      {
        subtitle: "Cancellation of Agreement",
        text: "If the client violates the terms, provides incorrect information, or fails to pay the agreed fees, the consultancy may terminate the agreement immediately."
      },
      {
        subtitle: "No Refund on Voluntary Discontinuation",
        text: "If the client voluntarily discontinues the process, the fees already paid will not be refunded."
      }
    ]
  },
  {
    id: 6,
    title: "6. Jurisdiction",
    icon: "Scale",
    points: [
      {
        subtitle: "Legal Jurisdiction",
        text: "Any disputes or legal matters arising from this process shall be subject to the jurisdiction of the courts located in Pune/Mumbai, where the consultancy's main office is situated."
      }
    ]
  }
];

export const COUNTRIES = [
  { id: "all", name: "All Azerbaijan Roles", flag: "🇦🇿", region: "Azerbaijan" },
  { id: "baku", name: "Baku (Capital City)", flag: "🇦🇿", region: "Capital" },
  { id: "sumqayit", name: "Sumqayit (Industrial Hub)", flag: "🇦🇿", region: "Industrial" },
  { id: "ganja", name: "Ganja (Commercial Region)", flag: "🇦🇿", region: "Commercial" }
];

export const JOB_VACANCIES = [
  {
    id: "job-az-1",
    title: "Warehouse & Logistics Associate",
    country: "Azerbaijan",
    city: "Baku",
    countryCode: "baku",
    flag: "🇦🇿",
    region: "Baku Capital",
    category: "Warehouse & Logistics",
    salaryInINR: "₹75,000 – ₹95,000 / month",
    salaryLocal: "1,500 – 1,900 AZN",
    ageRequirement: "18 to 50 Years",
    contract: "1 to 2 Years (Renewable)",
    visaType: "Azerbaijan Work Permit & Residence (SMS)",
    benefits: ["Free Employer Accommodation", "Medical Insurance", "Overtime Allowance"],
    openings: 28,
    skills: "Basic English/Hindi, physically fit, goods sorting and packing"
  },
  {
    id: "job-az-2",
    title: "MIG / TIG Welder & Steel Fabricator",
    country: "Azerbaijan",
    city: "Sumqayit / Baku",
    countryCode: "sumqayit",
    flag: "🇦🇿",
    region: "Sumqayit Industrial",
    category: "Skilled Trades",
    salaryInINR: "₹90,000 – ₹1,25,000 / month",
    salaryLocal: "1,800 – 2,500 AZN",
    ageRequirement: "20 to 51 Years",
    contract: "2 Years (Renewable)",
    visaType: "Azerbaijan Work Permit (State Migration)",
    benefits: ["Company Living Quarters", "Site Transport", "Health Insurance"],
    openings: 20,
    skills: "MIG/TIG welding certificate or 2+ years structural welding experience"
  },
  {
    id: "job-az-3",
    title: "Continental & Indian Chef / Kitchen Staff",
    country: "Azerbaijan",
    city: "Baku",
    countryCode: "baku",
    flag: "🇦🇿",
    region: "Baku Hotels",
    category: "Hospitality & Tourism",
    salaryInINR: "₹80,000 – ₹1,15,000 / month",
    salaryLocal: "1,600 – 2,300 AZN",
    ageRequirement: "21 to 48 Years",
    contract: "1 to 2 Years",
    visaType: "Azerbaijan Employment Visa",
    benefits: ["Duty Meals Provided", "Shared Accommodation", "Tips & Service Bonus"],
    openings: 16,
    skills: "Culinary expertise, food hygiene compliance, team player"
  },
  {
    id: "job-az-4",
    title: "Forklift Operator & Heavy Equipment Driver",
    country: "Azerbaijan",
    city: "Baku / Sumqayit",
    countryCode: "sumqayit",
    flag: "🇦🇿",
    region: "Port & Logistics",
    category: "Skilled Trades",
    salaryInINR: "₹95,000 – ₹1,35,000 / month",
    salaryLocal: "1,900 – 2,700 AZN",
    ageRequirement: "22 to 51 Years",
    contract: "2 Years (Renewable)",
    visaType: "Azerbaijan Work Permit & TRWP",
    benefits: ["Free Accommodation", "High Overtime Hours", "Medical Care"],
    openings: 18,
    skills: "Valid Heavy Driving License / Forklift certification"
  },
  {
    id: "job-az-5",
    title: "Industrial & Commercial Electrician",
    country: "Azerbaijan",
    city: "Baku",
    countryCode: "baku",
    flag: "🇦🇿",
    region: "Baku Infrastructure",
    category: "Skilled Trades",
    salaryInINR: "₹85,000 – ₹1,20,000 / month",
    salaryLocal: "1,700 – 2,400 AZN",
    ageRequirement: "21 to 51 Years",
    contract: "2 Years",
    visaType: "Azerbaijan Work Permit",
    benefits: ["Employer Provided Housing", "Tool Kit & Safety Gear", "Insurance"],
    openings: 22,
    skills: "ITI/Trade diploma in electrical maintenance & installation"
  },
  {
    id: "job-az-6",
    title: "Hotel Front Desk & Hospitality Executive",
    country: "Azerbaijan",
    city: "Baku",
    countryCode: "baku",
    flag: "🇦🇿",
    region: "Baku City Center",
    category: "Hospitality & Tourism",
    salaryInINR: "₹85,000 – ₹1,10,000 / month",
    salaryLocal: "1,700 – 2,200 AZN",
    ageRequirement: "20 to 45 Years",
    contract: "2 Years",
    visaType: "Azerbaijan Residence & Work Permit",
    benefits: ["Duty Meals", "Transport Allowance", "Performance Incentives"],
    openings: 12,
    skills: "Good spoken English, pleasant customer service demeanor"
  },
  {
    id: "job-az-7",
    title: "Construction Mason, Carpenter & Tile Fitter",
    country: "Azerbaijan",
    city: "Baku / Ganja",
    countryCode: "ganja",
    flag: "🇦🇿",
    region: "Commercial Projects",
    category: "Construction & Building",
    salaryInINR: "₹75,000 – ₹1,00,000 / month",
    salaryLocal: "1,500 – 2,000 AZN",
    ageRequirement: "19 to 51 Years",
    contract: "1 to 2 Years",
    visaType: "Azerbaijan Work Permit (SMS)",
    benefits: ["On-site Free Living Quarters", "Canteen Meals", "Overtime Wages"],
    openings: 35,
    skills: "Practical experience in masonry, shuttering, or tiling work"
  },
  {
    id: "job-az-8",
    title: "Agricultural Greenhouse & Farm Specialist",
    country: "Azerbaijan",
    city: "Ganja Region",
    countryCode: "ganja",
    flag: "🇦🇿",
    region: "Ganja Farming",
    category: "Agriculture & Food Processing",
    salaryInINR: "₹70,000 – ₹90,000 / month",
    salaryLocal: "1,400 – 1,800 AZN",
    ageRequirement: "18 to 51 Years",
    contract: "1 Year (Renewable)",
    visaType: "Azerbaijan Seasonal & Work Permit",
    benefits: ["Farm Accommodation", "Fresh Food Support", "Overtime Pay"],
    openings: 30,
    skills: "No formal degree required, hardworking and reliable"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Profile Assessment & Age Eligibility (18–51)",
    description: "Our licensed counselors analyze your profile, trade credentials, and age group for direct Azerbaijan work permit quotas.",
    highlight: "Free & Transparent Counseling",
    icon: "CheckCircle"
  },
  {
    step: "02",
    title: "Documentation & Agreement Signing",
    description: "We issue our transparent, signed legal service agreement based on our official 6-point Terms & Conditions with our 65-Day refund policy.",
    highlight: "65-Day Refund Protection",
    icon: "FileCheck"
  },
  {
    step: "03",
    title: "Azerbaijan Employer Match & Offer Letter",
    description: "We coordinate with vetted employers in Baku & Sumqayit to secure your verified employment contract and official invitation letter.",
    highlight: "Vetted Baku Employers",
    icon: "Briefcase"
  },
  {
    step: "04",
    title: "State Migration Service (SMS) Filing",
    description: "Our documentation team files your work permit with the State Migration Service of Azerbaijan, arranges MEA apostille and embassy verification.",
    highlight: "Official Migration Compliance",
    icon: "Stamp"
  },
  {
    step: "05",
    title: "Visa Grant (e-Visa), Orientation & Baku Flight",
    description: "Upon receiving your Azerbaijan e-Visa / work permit, complete final settlement, receive pre-departure airport briefing, and depart for Baku.",
    highlight: "Smooth Relocation to Baku",
    icon: "PlaneTakeoff"
  }
];

export const SERVICES_LIST = [
  {
    id: "work-permit",
    title: "Azerbaijan Work Permit & Residence (SMS)",
    description: "Comprehensive filing of government work permit petitions with the State Migration Service of the Republic of Azerbaijan for candidates aged 18 to 51.",
    icon: "Briefcase",
    features: ["State Migration Service (SMS) Registration", "Temporary Residence & Work Permit (TRWP)", "Baku & Sumqayit Quotas", "Renewal & Extension Support"]
  },
  {
    id: "legal-guidance",
    title: "Legal Emigration Advisory for Azerbaijan",
    description: "Honest, ethical guidance grounded in Azerbaijani migration law. We never make false 100% promises and protect your time and finances.",
    icon: "Scale",
    features: ["Azerbaijan labor law compliance", "Clear consultancy fee breakdown", "Embassy interview prep", "Transparent milestones"]
  },
  {
    id: "job-placement",
    title: "Baku Job Placement & Employer Liaison",
    description: "Direct placement with authorized employers in Baku across warehouse, skilled welding, culinary/hospitality, transport, and construction.",
    icon: "Globe",
    features: ["Verified Baku Employer Contracts", "Employer-provided Accommodation", "Medical Insurance Coverage", "Competitive AZN Salaries"]
  },
  {
    id: "document-attestation",
    title: "Document Attestation & MEA Apostille",
    description: "Fast-track MEA (Ministry of External Affairs) apostille, Police Clearance Certificate (PCC) verification, and certified Azerbaijani translations.",
    icon: "ShieldCheck",
    features: ["MEA Apostille Verification", "Azerbaijan Embassy Legalization", "PCC Fast-Track Guidance", "Certified Notarized Translations"]
  },
  {
    id: "pre-departure",
    title: "Pre-Departure & Baku Airport Relocation",
    description: "Complete arrival support in Azerbaijan including Baku Heydar Aliyev Airport pickup coordination, SIM card, accommodation, and migration registration.",
    icon: "Compass",
    features: ["Baku Airport Pickup Assistance", "Local Registration (7-day rule)", "SIM Card & Bank Account Setup", "24/7 Helpline Support"]
  },
  {
    id: "refund-transparency",
    title: "65-Day Refund Policy & Written Contract",
    description: "Backed by our official 65-Day refund policy in case of any cancellation on our part, legally governed under Pune & Mumbai court jurisdiction.",
    icon: "ShieldAlert",
    features: ["Written contract with receipt", "65-Day Refund Window", "Separate Government Fee Receipts", "Pune/Mumbai Court Jurisdiction"]
  }
];

export const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: "Rameshwar Patil",
    age: 34,
    role: "MIG Welder in Baku, Azerbaijan",
    origin: "Pune, Maharashtra",
    rating: 5,
    quote: "Galaxy Star made my dream of working in Azerbaijan a reality. They explained the State Migration Service process clearly and without false promises. Within 7 weeks, my Baku work permit arrived!",
    date: "October 2026",
    verified: true
  },
  {
    id: 2,
    name: "Pooja Sawant",
    age: 26,
    role: "Hospitality Executive in Baku City Center",
    origin: "Mumbai, Maharashtra",
    rating: 5,
    quote: "Their transparency with the 65-Day refund policy and written Terms gave my family complete trust. I am happily working at a premier hotel in Baku now. Highly recommended!",
    date: "September 2026",
    verified: true
  },
  {
    id: 3,
    name: "Sukhwinder Singh",
    age: 48,
    role: "Heavy Equipment Driver in Sumqayit, Azerbaijan",
    origin: "Nashik, Maharashtra",
    rating: 5,
    quote: "At 48 years old, many agencies turned me away. Galaxy Star showed me that Azerbaijan actively hires skilled trades up to age 51. I earn well in Azerbaijani Manat and support my children back home.",
    date: "August 2026",
    verified: true
  },
  {
    id: 4,
    name: "Mohammad Irfan",
    age: 23,
    role: "Warehouse Logistics in Baku, Azerbaijan",
    origin: "Aurangabad, Maharashtra",
    rating: 5,
    quote: "Completely genuine guidance. No hidden charges, clear government fee split, and constant WhatsApp updates from the staff. I received my Azerbaijan work permit and flight smoothly!",
    date: "October 2026",
    verified: true
  }
];

export const FAQS = [
  {
    question: "Why is Azerbaijan a premier destination for overseas work permits?",
    answer: "Azerbaijan has a thriving, booming economy with major infrastructure, hotel, trade, and logistics hubs centered around Baku and Sumqayit. Work permits have structured government processing through the State Migration Service, competitive salaries in AZN (Azerbaijani Manat), and generous employer-provided accommodation."
  },
  {
    question: "What is the eligible age group for Azerbaijan work permits?",
    answer: "Galaxy Star exclusively places candidates aged between 18 and 51 years old. Roles for ages 18–30 include warehouse, hospitality, retail, and general assistance, while experienced specialists aged 30–51 are placed in master welding, heavy driving, electrical maintenance, and site supervision."
  },
  {
    question: "Do you provide a 100% guarantee for visa approval?",
    answer: "No ethical agency can legally guarantee 100% visa approval because the legal authority to grant or deny a visa rests solely with the Embassy and the State Migration Service of Azerbaijan. As outlined in Section 1 of our official Terms & Conditions, we guarantee accurate, verified documentation, genuine employer sponsorship, and full compliance."
  },
  {
    question: "What is your refund policy if something goes wrong?",
    answer: "As clearly specified in Section 4 of our official agreement: If the client cancels the process due to personal difficulties, the amount paid will be refunded within 65 days. We are committed to complete legal transparency."
  },
  {
    question: "Are English or language tests (like IELTS) required for Azerbaijan?",
    answer: "No, IELTS or formal language tests are NOT required for Azerbaijan work permits! Basic working communication ability or technical competency in your trade is completely sufficient."
  },
  {
    question: "How can I start my Azerbaijan assessment?",
    answer: "Use our interactive Age 18–51 Eligibility Tool above, or tap our official WhatsApp helpline (+91 8007884006) to send your CV/passport for a free profile evaluation."
  }
];
