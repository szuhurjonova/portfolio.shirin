import React, { useState } from 'react';
import { Palette, BookOpen, Sparkles, Heart, BookmarkCheck, ExternalLink, Brush, Library } from 'lucide-react';
import { BOOKS_DATA, ARTWORKS_DATA } from '../data/portfolioData';
import { InteractiveDoodleCanvas } from './InteractiveDoodleCanvas';

export const HobbiesSection: React.FC = () => {
  const [activeHobbyTab, setActiveHobbyTab] = useState<'drawing' | 'reading'>('drawing');
  const [bookFilter, setBookFilter] = useState<string>('all');

  const filteredBooks = BOOKS_DATA.filter((book) => {
    if (bookFilter === 'all') return true;
    return book.status === bookFilter;
  });

  return (
    <section id="hobbies" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-2">
              03. Ilhom & Ijodkorlik
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Qiziqishlar va Xobbilar
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed">
              Dasturlashdan tashqari vaqtlarda qalbimga quvonch va yangi g'oyalar bag'ishlovchi mashg'ulotlar: Rasm chizish va Kitob mutolaasi.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveHobbyTab('drawing')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                activeHobbyTab === 'drawing'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Rasm Chizish (Drawing)</span>
            </button>
            <button
              onClick={() => setActiveHobbyTab('reading')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                activeHobbyTab === 'reading'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Kitob O'qish (Reading)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: DRAWING (Rasm Chizish) */}
        {activeHobbyTab === 'drawing' && (
          <div className="space-y-12">
            {/* Visual Highlight Banner Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 overflow-hidden">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Brush className="w-4 h-4" />
                  <span>Raqamli & An'anaviy San'at</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  Rasm Chizish — Tasavvurni Vizual Shakllantirish
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Men uchun rasm chizish — bu shunchaki qog'ozdagi ranglar emas, balki g'oyalarni erkin ifodalash va dizayn sezgisini o'stirish vositasidir. 
                  IT sohasida ham yaxshi dasturchi nafaqat kod yoza olishi, balki chiroyli, qulay va didli vizual interfeyslarni his qila bilishi muhim deb bilaman.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <span className="text-slate-500 block mb-1">Sevimli uslub:</span>
                    <span className="font-semibold text-slate-200">Eskiz & Raqamli Art</span>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <span className="text-slate-500 block mb-1">Asboblar:</span>
                    <span className="font-semibold text-slate-200">Planshet, Qalam, Akvarel</span>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 col-span-2 sm:col-span-1">
                    <span className="text-slate-500 block mb-1">Foydasi:</span>
                    <span className="font-semibold text-purple-300">UI/UX Dizayn hissi</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl aspect-4/3">
                  <img
                    src="/src/assets/images/drawing_art_hobby_1791298080700.jpg"
                    alt="Rasm chizish xobbisi - Shirin ijod burchagi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                    🎨 Ijodiy eskizlar va ranglar jozibasi
                  </div>
                </div>
              </div>
            </div>

            {/* Shirin's Artwork Gallery Concept */}
            <div>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-white font-display">
                  Ijodiy Yo'nalishlar & Mavzular
                </h4>
                <p className="text-xs text-slate-400">
                  Men chizishni yaxshi ko'radigan asosiy mavzular va eskizlar
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {ARTWORKS_DATA.map((art) => (
                  <div
                    key={art.id}
                    className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between text-xs text-purple-400 font-semibold mb-2">
                      <span>{art.category}</span>
                    </div>
                    <h5 className="text-base font-bold text-white mb-2 font-display">
                      {art.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {art.description}
                    </p>
                    <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Asbob:</span>
                      <span className="text-slate-300 font-medium">{art.tool}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Doodle Canvas */}
            <InteractiveDoodleCanvas />
          </div>
        )}

        {/* Tab 2: READING (Kitob O'qish) */}
        {activeHobbyTab === 'reading' && (
          <div className="space-y-12">
            {/* Visual Highlight Banner Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 overflow-hidden">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Library className="w-4 h-4" />
                  <span>Mutolaa Madaniyati & Kitoblar</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  Kitob O'qish — Bilim va Fikrlash Chashmasi
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Har bir o'qilgan kitob — yangi bir olamga sayohat. Men IT va texnologiya sohasidagi darsliklar, badiiy klassik asarlar hamda nemis va ingliz tillaridagi qiziqarli hikoyalarni o'qish orqali so'z boyligimni oshiraman va dunyoqarashimni kengaytiraman.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <span className="text-slate-500 block mb-1">Sevimli janr:</span>
                    <span className="font-semibold text-slate-200">IT, Ertaklar & Ilm</span>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
                    <span className="text-slate-500 block mb-1">Tillar:</span>
                    <span className="font-semibold text-slate-200">O'zbek, Nemis, Ingliz</span>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 col-span-2 sm:col-span-1">
                    <span className="text-slate-500 block mb-1">Odat:</span>
                    <span className="font-semibold text-cyan-300">Har kuni 30-40 daqiqa</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl aspect-4/3">
                  <img
                    src="/src/assets/images/reading_books_hobby_1791298092411.jpg"
                    alt="Kitob o'qish xobbisi - Shirin kutubxonasi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                    📖 Bilim o'rganish — eng yaxshi sarmoya
                  </div>
                </div>
              </div>
            </div>

            {/* Bookshelf Section */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                <div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Shirinning Sevimli Kitob Javoni
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    O'qilgan va hozirda mutolaa qilinayotgan sara adabiyotlar
                  </p>
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    onClick={() => setBookFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      bookFilter === 'all'
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Barchasi
                  </button>
                  <button
                    onClick={() => setBookFilter("O'qilgan")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      bookFilter === "O'qilgan"
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    O'qilgan
                  </button>
                  <button
                    onClick={() => setBookFilter("Hozir o'qilmoqda")}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      bookFilter === "Hozir o'qilmoqda"
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Hozir o'qilmoqda
                  </button>
                </div>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="text-cyan-400 font-medium">{book.category}</span>
                        <span
                          className={`font-semibold ${
                            book.status === "O'qilgan"
                              ? 'text-emerald-400'
                              : 'text-amber-400'
                          }`}
                        >
                          {book.status}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-100 font-display mb-1">
                        {book.title}
                      </h5>
                      <p className="text-xs text-slate-400 mb-3">
                        Muallif: <span className="text-slate-300">{book.author}</span>
                      </p>
                      <p className="text-xs text-slate-400 italic mb-4 leading-relaxed">
                        "{book.notes}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Til:</span>
                      <span className="text-slate-300 font-medium">{book.language}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
