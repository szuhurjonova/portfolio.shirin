import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Laptop, 
  Sparkles, 
  Award, 
  Palette, 
  Globe, 
  Languages,
  BookMarked,
  Volume2
} from 'lucide-react';
import { SKILLS_DATA, MULTILINGUAL_PHRASES, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'it' | 'language'>('all');
  const [selectedPhraseIndex, setSelectedPhraseIndex] = useState<number>(0);
  const [copiedSpeech, setCopiedSpeech] = useState<string | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Languages': return <Languages className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  const handleSpeak = (text: string, langCode: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      setCopiedSpeech(langCode);
      setTimeout(() => setCopiedSpeech(null), 1500);
    }
  };

  const currentPhrase = MULTILINGUAL_PHRASES[selectedPhraseIndex];

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
              02. Qobiliyatlar & Til ko'nikmalari
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Ko'nikmalar va Tillar
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed">
              Axborot texnologiyalari (IT) bo'yicha o'rganilgan amaliy bilimlar va har kuni mustahkamlanib borayotgan xorijiy tillar.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Barchasi ({SKILLS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('it')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeFilter === 'it'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              IT & Texnologiyalar (6)
            </button>
            <button
              onClick={() => setActiveFilter('language')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeFilter === 'language'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Xorijiy Tillar (4)
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => {
            const isLang = skill.category === 'language';
            return (
              <div
                key={skill.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isLang
                          ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20'
                          : 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'
                      }`}
                    >
                      {getIcon(skill.iconName)}
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {skill.levelText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Progress Meter with tabular numerals */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="text-slate-500 font-medium">O'zlashtirish darajasi</span>
                      <span className="font-mono tabular-nums text-slate-300 font-semibold">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          isLang
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-400'
                            : 'bg-gradient-to-r from-cyan-400 to-sky-400'
                        }`}
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Clean unboxed tags with separator (anti-slop rule) */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
                    {skill.tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <span>{tag}</span>
                        {idx < skill.tags.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature: Multilingual Study Deck (Shirin's 4-language phrasebook) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <BookMarked className="w-4 h-4" />
                <span>Interaktiv Til Mashg'uloti</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Shirin bilan 4 Tilda Muloqot Namunasi
              </h3>
            </div>
            
            {/* Topic Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {MULTILINGUAL_PHRASES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhraseIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedPhraseIndex === idx
                      ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.topic}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Language Cards in a responsive 4-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Uzbek Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  🇺🇿 O'zbek Tili
                </span>
                <span className="text-[10px] text-cyan-400 font-medium">Ona tili</span>
              </div>
              <p className="text-sm text-slate-100 font-medium min-h-[56px] flex items-center">
                "{currentPhrase.uzbek}"
              </p>
              <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Mukammal talaffuz</span>
                <button
                  onClick={() => handleSpeak(currentPhrase.uzbek, 'uz-UZ')}
                  className="hover:text-cyan-400 p-1"
                  title="Ovoz berish"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* German Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  🇩🇪 Nemis Tili (Deutsch)
                </span>
                <span className="text-[10px] text-purple-400 font-medium">A1-A2</span>
              </div>
              <p className="text-sm text-slate-100 font-medium min-h-[56px] flex items-center">
                "{currentPhrase.german}"
              </p>
              <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Nemischa ifoda</span>
                <button
                  onClick={() => handleSpeak(currentPhrase.german, 'de-DE')}
                  className="hover:text-purple-400 p-1"
                  title="Nemischa talaffuz"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* English Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  🇬🇧 Ingliz Tili (English)
                </span>
                <span className="text-[10px] text-sky-400 font-medium">A2-B1</span>
              </div>
              <p className="text-sm text-slate-100 font-medium min-h-[56px] flex items-center">
                "{currentPhrase.english}"
              </p>
              <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Xalqaro IT tili</span>
                <button
                  onClick={() => handleSpeak(currentPhrase.english, 'en-US')}
                  className="hover:text-sky-400 p-1"
                  title="Inglizcha talaffuz"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Russian Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  🇷🇺 Rus Tili (Русский)
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">Amaliy</span>
              </div>
              <p className="text-sm text-slate-100 font-medium min-h-[56px] flex items-center">
                "{currentPhrase.russian}"
              </p>
              <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Erkin suhbat</span>
                <button
                  onClick={() => handleSpeak(currentPhrase.russian, 'ru-RU')}
                  className="hover:text-emerald-400 p-1"
                  title="Ruscha talaffuz"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-slate-500">
              💡 Har bir kartadagi dinamik belgisini bosib, xorijiy tillarning to'g'ri fonetik talaffuzini eshitishingiz mumkin.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
