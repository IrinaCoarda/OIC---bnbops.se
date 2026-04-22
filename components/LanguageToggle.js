'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { language, setLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-sm">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1.5 transition ${
          language === 'en'
            ? 'bg-white text-slate-950'
            : 'text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('sv')}
        className={`rounded-full px-3 py-1.5 transition ${
          language === 'sv'
            ? 'bg-white text-slate-950'
            : 'text-white hover:bg-white/10'
        }`}
      >
        SV
      </button>
    </div>
  );
}