import React from 'react';
import { Calendar, User, Code2, Globe2, BookOpen, Palette, Compass, Target, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            01. Shaxsiyat & Dunyoqarash
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Men Haqimda
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Men — Zuhurjonova Shirin Shohruh qizi. Zamonaviy axborot texnologiyalari, chet tillari va ijodkorlik orqali o'z salohiyatimni kashf etib kelayotgan yosh o'quvchiman.
          </p>
        </div>

        {/* Main Grid: Details Card & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Personal Passport / Profile Card */}
          <div className="lg:col-span-5 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-6 font-display flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span>Shaxsiy Ma'lumotlar</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div className="pb-3 border-b border-slate-800/80">
                <span className="text-xs text-slate-500 block mb-0.5">To'liq ism-familiya:</span>
                <span className="font-semibold text-slate-100 text-base">{PERSONAL_DATA.fullName}</span>
              </div>

              <div className="pb-3 border-b border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block mb-0.5">Tug'ilgan sana:</span>
                  <span className="font-semibold text-slate-200">{PERSONAL_DATA.birthDateFormatted}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block mb-0.5">Sana kodi:</span>
                  <span className="font-mono text-cyan-400 text-xs">{PERSONAL_DATA.birthDate}</span>
                </div>
              </div>

              <div className="pb-3 border-b border-slate-800/80">
                <span className="text-xs text-slate-500 block mb-0.5">Ona tili:</span>
                <span className="font-semibold text-slate-200">{PERSONAL_DATA.primaryLanguage}</span>
              </div>

              <div className="pb-3 border-b border-slate-800/80">
                <span className="text-xs text-slate-500 block mb-1">O'rganilayotgan xorijiy tillar:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-slate-300 font-medium">Nemis tili (Deutsch)</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300 font-medium">Ingliz tili (English)</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300 font-medium">Rus tili (Русский)</span>
                </div>
              </div>

              <div className="pb-3 border-b border-slate-800/80">
                <span className="text-xs text-slate-500 block mb-1">Asosiy e'tibor & O'qish:</span>
                <span className="text-cyan-300 font-medium block">
                  Axborot Texnologiyalari (IT), Nemis tili, Ingliz tili
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 block mb-1">Qiziqishlar & Xobbilar:</span>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-purple-400" />
                    Rasm chizish
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    Kitob o'qish
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action in Card */}
            <div className="mt-8 pt-4 border-t border-slate-800/80">
              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <span>Bog'lanish ma'lumotlarini olish</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Ambition, Narrative & Milestones */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4 font-display flex items-center gap-2">
                <Compass className="w-5 h-5 text-purple-400" />
                <span>Mening Maqsadim va IT intilishim</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Bolalikdan kompyuter va texnologiyalarning qanday ishlashiga qiziqib kelganman. Veb-sahifalar qanday yaratiladi, dasturlar qanday qilib insonlarning og'irini yengil qiladi — bular mening eng sevimli savollarimdir.
                </p>
                <p>
                  Hozirda men <strong className="text-cyan-300 font-medium">Axborot Texnologiyalari (IT)</strong> yo'nalishida boshlang'ich dasturlash, algoritmik mantiq hamda vizual tizimlarni qunt bilan o'rganmoqdaman. Har bir yangi yozilgan kod qatori yoki yechilgan mantiqiy masala menga katta zavq bag'ishlaydi.
                </p>
                <p>
                  Dasturlash bilan bir qatorda dunyo darajasidagi bilimlarni o'rganish va kelajakda xalqaro miqyosdagi konferensiya va loyihalarda ishtirok etish uchun <strong className="text-purple-300 font-medium">nemis va ingliz tillariga</strong> alohida e'tibor qaratmoqdaman.
                </p>
              </div>
            </div>

            {/* 3 Pillar Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mb-1">IT Ta'limi</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Algoritmlar, zamonaviy veb texnologiyalari va dasturlash intizomi.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mb-1">Ko'p Tilli Muhit</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Nemis va ingliz tillarida faol muloqot va chet el manbalarini o'rganish.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mb-1">Ijodiy Tafakkur</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Rasm chizish va kitob o'qish orqali vizual tasavvur va estetik didni o'stirish.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
