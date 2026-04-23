'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLang = searchParams.get('lang') === 'sv' ? 'sv' : 'en';

  function changeLanguage(lang) {
    const params = new URLSearchParams(searchParams.toString());

    if (lang === 'sv') {
      params.set('lang', 'sv');
    } else {
      params.delete('lang');
    }

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    router.push(nextUrl);
  }

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`rounded-full px-3 py-1.5 text-sm transition ${
          currentLang === 'en'
            ? 'bg-white text-slate-950'
            : 'text-slate-300 hover:text-white'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('sv')}
        className={`rounded-full px-3 py-1.5 text-sm transition ${
          currentLang === 'sv'
            ? 'bg-white text-slate-950'
            : 'text-slate-300 hover:text-white'
        }`}
      >
        SV
      </button>
    </div>
  );
}