import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AgeEligibilityChecker } from './components/AgeEligibilityChecker';
import JobBoard from './components/JobBoard';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import TermsAndConditionsSection from './components/TermsAndConditionsSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import TermsModal from './components/TermsModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [termsModalView, setTermsModalView] = useState('digital');
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  const handleOpenApplication = (job = null) => {
    setSelectedJobForModal(job);
    setIsAppModalOpen(true);
  };

  const handleOpenTermsModal = (mode = 'digital') => {
    setTermsModalView(mode);
    setIsTermsModalOpen(true);
  };

  const scrollToEligibility = () => {
    const el = document.getElementById('eligibility');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-gray text-slate-800 antialiased selection:bg-brand-gold selection:text-brand-navy">
      {/* Navigation */}
      <Navbar 
        onOpenApplication={() => handleOpenApplication()}
        onOpenTermsModal={() => handleOpenTermsModal('digital')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero 
          onOpenApplication={() => handleOpenApplication()}
          onScrollToEligibility={scrollToEligibility}
        />

        <AgeEligibilityChecker />

        <JobBoard 
          onSelectJobForApplication={(job) => handleOpenApplication(job)}
        />

        <ServicesSection 
          onOpenApplication={(serviceName) => handleOpenApplication({ title: serviceName, country: 'Multiple Destinations' })}
        />

        <WorkflowSection 
          onOpenApplication={() => handleOpenApplication()}
        />

        <TermsAndConditionsSection 
          onOpenDocumentPreview={() => handleOpenTermsModal('document')}
        />

        <WhyChooseUs 
          onOpenApplication={() => handleOpenApplication()}
          onOpenTermsModal={() => handleOpenTermsModal('digital')}
        />

        <TestimonialsSection />

        <FaqSection 
          onOpenTermsModal={() => handleOpenTermsModal('digital')}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTermsModal={() => handleOpenTermsModal('digital')}
        onOpenApplication={() => handleOpenApplication()}
      />

      {/* Floating Actions */}
      <FloatingActions 
        onOpenApplication={() => handleOpenApplication()}
      />

      {/* Application & Free Assessment Modal */}
      <ApplicationModal 
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        selectedJob={selectedJobForModal}
      />

      {/* Terms & Conditions Viewer Modal */}
      <TermsModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        initialView={termsModalView}
      />
    </div>
  );
}
