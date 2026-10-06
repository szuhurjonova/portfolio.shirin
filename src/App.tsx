import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { HobbiesSection } from './components/HobbiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NetlifyDeployModal } from './components/NetlifyDeployModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isNetlifyModalOpen, setIsNetlifyModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'hobbies', 'contact'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Top Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenNetlifyModal={() => setIsNetlifyModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <HobbiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Netlify Deploy Modal */}
      <NetlifyDeployModal
        isOpen={isNetlifyModalOpen}
        onClose={() => setIsNetlifyModalOpen(false)}
      />
    </div>
  );
}
