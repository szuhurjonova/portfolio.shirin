import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Instagram, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setIsSent(true);
  };

  // Open direct pre-filled Telegram link
  const handleSendTelegram = () => {
    const text = encodeURIComponent(
      `Assalomu alaykum Shirin!\nIsmim: ${formData.name || 'Mehmon'}\nKontakt: ${formData.emailOrPhone || 'Ko\'rsatilmadi'}\n\nXabar:\n${formData.message || 'Portfolio saytingiz orqali bog\'lanmoqdaman.'}`
    );
    window.open(`https://t.me/szuhurjonova?text=${text}`, '_blank');
  };

  // Download vCard (.vcf)
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${PERSONAL_DATA.fullName}
N:Zuhurjonova;Shirin;Shohruh qizi;;
EMAIL;TYPE=INTERNET:${PERSONAL_DATA.contacts.email}
TEL;TYPE=CELL:${PERSONAL_DATA.contacts.phoneRaw}
X-SOCIALPROFILE;type=telegram:https://t.me/szuhurjonova
X-SOCIALPROFILE;type=instagram:https://instagram.com/s_zuhurjonova_07
NOTE:Yosh IT ishqibozi va dasturlash o'quvchisi.
BDAY:2013-07-13
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Shirin_Zuhurjonova.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            04. Aloqa & Hamkorlik
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Bog'lanish
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Men bilan yangi loyihalar, o'quv tajribalari yoki shunchaki fikr almashish uchun qulay kanal orqali bog'lanishingiz mumkin.
          </p>
        </div>

        {/* 4 Interactive Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Card 1: Email */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_DATA.contacts.email, 'email')}
                  className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Nusxa olish"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-slate-500 font-medium block">Elektron pochta</span>
              <p className="text-sm font-semibold text-slate-100 truncate mt-0.5">
                {PERSONAL_DATA.contacts.email}
              </p>
            </div>
            <a
              href={`mailto:${PERSONAL_DATA.contacts.email}`}
              className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
            >
              <span>Xat yozish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_DATA.contacts.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Nusxa olish"
                >
                  {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-slate-500 font-medium block">Telefon raqam</span>
              <p className="text-sm font-semibold text-slate-100 mt-0.5">
                {PERSONAL_DATA.contacts.phone}
              </p>
            </div>
            <a
              href={`tel:${PERSONAL_DATA.contacts.phoneRaw}`}
              className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
            >
              <span>Qo'ng'iroq qilish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Telegram */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_DATA.contacts.telegram, 'telegram')}
                  className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Nusxa olish"
                >
                  {copiedKey === 'telegram' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-slate-500 font-medium block">Telegram profil</span>
              <p className="text-sm font-semibold text-slate-100 mt-0.5">
                {PERSONAL_DATA.contacts.telegram}
              </p>
            </div>
            <a
              href={PERSONAL_DATA.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
            >
              <span>Telegramda yozish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Instagram */}
          <div className="bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_DATA.contacts.instagram, 'instagram')}
                  className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Nusxa olish"
                >
                  {copiedKey === 'instagram' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-slate-500 font-medium block">Instagram sahifa</span>
              <p className="text-sm font-semibold text-slate-100 mt-0.5">
                {PERSONAL_DATA.contacts.instagram}
              </p>
            </div>
            <a
              href={PERSONAL_DATA.contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
            >
              <span>Sahifaga o'tish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Interactive Messaging & Fast Actions Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-1 font-display flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>To'g'ridan-to'g'ri Xabar Qoldirish</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Quyidagi shakl orqali o'z tilaklaringizni yoki taklifingizni qoldiring.
            </p>

            {isSent ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-display mb-1">
                  Katta rahmat! Xabaringiz qabul qilindi.
                </h4>
                <p className="text-xs text-slate-300 mb-4">
                  Shirin tez orada siz bilan bog'lanadi yoki xabaringizni o'qib chiqadi.
                </p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', emailOrPhone: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Ismingiz:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor Aliyev"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Aloqa uchun (Email yoki Telefon):
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: sardor@example.com yoki +998 90 123 4567"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Xabaringiz:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Assalomu alaykum Shirin, sizning IT portfolioingiz bilan tanishdim..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Xabarni yuborish</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendTelegram}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-sky-400" />
                    <span>Telegramda yuborish</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Card & Fast Card Download */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick vCard Download */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Kontaktni Telefoningizga Saqlang</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-display">
                Elektron Vizitka (vCard)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Tugmani bosish orqali barcha rasmiy kontakt ma'lumotlarini (Telefon, Email, Telegram, Instagram) to'g'ridan-to'g'ri smartfoningiz kitobchasiga (.vcf formatda) yuklab olishingiz mumkin.
              </p>

              <button
                onClick={handleDownloadVCard}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Shirin_Zuhurjonova.vcf yuklab olish</span>
              </button>
            </div>

            {/* Quick Summary Snapshot */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-xs text-slate-400 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-500">Joylashuv:</span>
                <span className="text-slate-200 font-medium">Toshkent, O'zbekiston</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-500">Muloqot tillari:</span>
                <span className="text-slate-200 font-medium">O'zbek, Nemis, Ingliz, Rus</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Holat:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Yangi bilim va loyihalarga ochiq
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
