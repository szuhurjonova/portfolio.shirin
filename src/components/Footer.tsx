import React from 'react';
import { ArrowUp, Heart, Send, Instagram, Mail, Phone } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-display"
            >
              <span>Shirin.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            </a>
            <p className="text-slate-400 text-xs mt-1">
              Zuhurjonova Shirin Shohruh qizi · Yosh IT ishqibozi
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Men haqimda
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Ko'nikmalar
            </a>
            <a href="#hobbies" className="hover:text-cyan-400 transition-colors">
              Qiziqishlar
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Bog'lanish
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_DATA.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Telegram"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_DATA.contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-purple-400 hover:border-slate-700 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.contacts.email}`}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${PERSONAL_DATA.contacts.phoneRaw}`}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Telefon"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500">
            © 2026 {PERSONAL_DATA.fullName}. Barcha huquqlar himoyalangan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-xs py-1 px-2 rounded-md hover:bg-slate-900"
          >
            <span>Yuqoriga qaytish</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
