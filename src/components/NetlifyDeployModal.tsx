import React, { useState } from 'react';
import { CloudUpload, Download, Check, Copy, ExternalLink, X, FileCode, FolderArchive, HelpCircle } from 'lucide-react';

interface NetlifyDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetlifyDeployModal: React.FC<NetlifyDeployModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'drop' | 'github'>('drop');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadStandaloneIndex = async () => {
    try {
      const response = await fetch('/standalone-index.html');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'index.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open('/standalone-index.html', '_blank');
    }
  };

  const netlifyTomlContent = `[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`;

  const copyConfig = () => {
    navigator.clipboard.writeText(netlifyTomlContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0d1322] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <CloudUpload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Netlify-ga Joylash (Deploy) Qo'llanmasi
              </h3>
              <p className="text-xs text-slate-400">
                Portfolio veb-saytini Netlify-da bepul jonli (live) qilish
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('drop')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'drop'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>1-Usul: Netlify Drop (Eng oson, 1 daqiqa)</span>
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'github'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderArchive className="w-4 h-4" />
            <span>2-Usul: GitHub / Git orqali</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {activeTab === 'drop' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>Barcha kodlar bitta "index.html" faylida jamlangan!</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Saytning barcha uslublari (CSS), ikonkalari (FontAwesome), skriptlari va ma'lumotlari bitta mustaqil <code>index.html</code> fayliga joylangan. Siz shunchaki ushbu faylni yuklab olib, Netlify-ga yuklashingiz mumkin.
                </p>
              </div>

              {/* Download CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleDownloadStandaloneIndex}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:from-cyan-300 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Tayyor "index.html" faylini yuklab olish</span>
                </button>

                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <span>Netlify Drop sahifasini ochish</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>

              {/* Step by step */}
              <div className="space-y-3 pt-2">
                <h5 className="font-semibold text-white text-xs uppercase tracking-wider text-slate-400">
                  3 ta oson qadam:
                </h5>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="leading-relaxed">
                    Yuqoridagi yashil tugma orqali <strong className="text-cyan-300">index.html</strong> faylini yuklab oling va kompyuteringizda yangi bitta papka ochib (masalan: <code>portfolio</code>), faylni uning ichiga soling.
                  </li>
                  <li className="leading-relaxed">
                    Brauzerda <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-medium">app.netlify.com/drop</a> manziliga kiring.
                  </li>
                  <li className="leading-relaxed">
                    O'sha papkani ushlab olib (drag-and-drop), Netlify Drop maydoniga tashlang. 10 soniyada saytingiz butun dunyo uchun jonli bo'ladi!
                  </li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-5">
              <p className="text-xs text-slate-300 leading-relaxed">
                Agar siz loyihani GitHub ombori (repository) orqali Netlify-ga ulamoqchi bo'lsangiz, biz barcha sozlamalarni (<code className="text-cyan-300">netlify.toml</code> va <code className="text-cyan-300">dist/</code>) tayyorlab qo'ydik.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">netlify.toml konfiguratsiyasi:</span>
                  <button
                    onClick={copyConfig}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 py-1 px-2 rounded bg-slate-900 border border-slate-800"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? "Nusxalandi" : "Nusxa olish"}</span>
                  </button>
                </div>
                <pre className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-[11px] text-cyan-300 overflow-x-auto">
                  {netlifyTomlContent}
                </pre>
              </div>

              <div className="space-y-2 text-xs">
                <h5 className="font-semibold text-white uppercase tracking-wider text-slate-400">
                  Netlify boshqaruv panelidagi sozlamalar:
                </h5>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  <li><strong>Build command:</strong> <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-300 font-mono">npm run build</code></li>
                  <li><strong>Publish directory:</strong> <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-300 font-mono">dist</code></li>
                </ul>
              </div>

              <a
                href="https://app.netlify.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
              >
                <span>Netlify yangi sayt qo'shish sahifasini ochish</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
          >
            Yopish
          </button>
        </div>

      </div>
    </div>
  );
};
