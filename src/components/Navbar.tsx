import React, { useState, useEffect } from 'react';
import { Menu, X, Send, CloudUpload } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenNetlifyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenNetlifyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Men haqimda", href: "#about", id: "about" },
    { label: "Ko'nikmalar", href: "#skills", id: "skills" },
    { label: "Qiziqishlar", href: "#hobbies", id: "hobbies" },
    { label: "Bog'lanish", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-white flex items-center gap-1 group font-display"
        >
          <span>Shirin</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-purple-400 transition-colors duration-300 inline-block"></span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary action button + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenNetlifyModal}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors whitespace-nowrap"
            title="Netlify-ga deploy qilish va index.html yuklab olish"
          >
            <CloudUpload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Netlify Deploy</span>
          </button>

          <a
            href={PERSONAL_DATA.contacts.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/60 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Bog'lanish</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menyuni ochish"
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1220]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNetlifyModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg transition-colors"
              >
                <CloudUpload className="w-4 h-4" />
                <span>Netlify Deploy & index.html</span>
              </button>

              <a
                href={PERSONAL_DATA.contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram orqali yozish</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
