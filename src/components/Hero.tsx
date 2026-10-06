import React from 'react';
import { Send, ArrowDown, Sparkles, Terminal, Mail, Phone, Instagram, Globe } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient glowing gradient orbs in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean Unboxed Metadata Kicker (Anti-slop compliant) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-cyan-400 tracking-wide uppercase mb-4">
              <span>Yosh IT Ishqibozi</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Ko'p Tilli Ta'lim</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Tug'ilgan sana: 13.07.2013</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 font-display leading-[1.12]">
              Assalomu alaykum, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                {PERSONAL_DATA.fullName}
              </span>
            </h1>

            {/* Short Tagline / Intro */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              Axborot texnologiyalari (IT), nemis va ingliz tillarini qunt bilan o'rganayotgan yosh istiqbolli o'quvchi. 
              Dasturlash sirlarini kashf etish, raqamli loyihalar yaratish va ijodkorlik bilan yangi marralar sari intilaman.
            </p>

            {/* Current Studies Summary List */}
            <div className="w-full bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 mb-8 backdrop-blur-sm">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hozirgi Asosiy Yo'nalishlar & Ta'lim:</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Axborot Texnologiyalari (IT)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Nemis tili (Deutsch)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  Ingliz tili (English)
                </span>
              </div>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 whitespace-nowrap"
              >
                <span>Bog'lanish</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Ko'nikmalarni ko'rish</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href={PERSONAL_DATA.contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
                title="Telegram profil"
              >
                <span>@szuhurjonova</span>
              </a>
            </div>

            {/* Quick Contact Links Ribbon */}
            <div className="flex items-center gap-5 text-slate-400 text-xs pt-4 border-t border-slate-800/60 w-full">
              <a
                href={`mailto:${PERSONAL_DATA.contacts.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate max-w-[170px] sm:max-w-none">{PERSONAL_DATA.contacts.email}</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`tel:${PERSONAL_DATA.contacts.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PERSONAL_DATA.contacts.phone}</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <a
                href={PERSONAL_DATA.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 hover:text-purple-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{PERSONAL_DATA.contacts.instagram}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset & Floating Highlights */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 -z-10"></div>
              
              {/* Main Avatar Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1322] shadow-2xl aspect-square">
                <img
                  src="/src/assets/images/shirin_hero_avatar_1791298066614.jpg"
                  alt="Zuhurjonova Shirin - IT ishqibozi va dasturlash o'quvchisi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient overlay scrim at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 via-[#080c14]/20 to-transparent pointer-events-none" />

                {/* Bottom Card Identity Info */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white font-display">Shirin Zuhurjonova</p>
                      <p className="text-xs text-slate-400">13.07.2013 · Toshkent, O'zbekiston</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Tag 1: Languages */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 leading-none">O'rganilayotgan tillar</p>
                    <p className="text-xs font-semibold text-slate-100 mt-1">Nemis · Ingliz · Rus</p>
                  </div>
                </div>
              </div>

              {/* Floating Feature Tag 2: Focus */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 leading-none">Asosiy e'tibor</p>
                    <p className="text-xs font-semibold text-slate-100 mt-1">Axborot Texnologiyalari (IT)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
