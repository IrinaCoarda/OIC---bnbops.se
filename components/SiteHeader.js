'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';

const labels = {
  en: {
    landing: 'Home',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    gallery: 'Gallery',
    contact: 'Contact',
    cta: 'Get my property review',
    menu: 'Menu',
    close: 'Close menu',
  },
  sv: {
    landing: 'Hem',
    howItWorks: 'Så fungerar det',
    pricing: 'Priser',
    gallery: 'Galleri',
    contact: 'Kontakt',
    cta: 'Få min bostadsbedömning',
    menu: 'Meny',
    close: 'Stäng meny',
  },
};

const navItems = [
  { href: '/', key: 'landing' },
  { href: '/how-it-works', key: 'howItWorks' },
  { href: '/pricing', key: 'pricing' },
  { href: '/gallery', key: 'gallery' },
  { href: '/contact', key: 'contact' },
];

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

export default function SiteHeader({ lang = 'en' }) {
  const pathname = usePathname();
  const t = labels[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, lang]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={makeHref('/', lang)} className="flex shrink-0 items-center">
          <Image
            src="/bnbops-logo.png"
            alt="bnbops.se"
            width={340}
            height={90}
            priority
            className="h-9 w-auto object-contain sm:h-10 md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={makeHref(item.href, lang)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-white text-slate-950'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Suspense fallback={null}>
            <LanguageToggle />
          </Suspense>

          <Link
            href={makeHref('/contact', lang)}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            {t.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Suspense fallback={null}>
            <LanguageToggle />
          </Suspense>

          <button
            type="button"
            aria-label={mobileMenuOpen ? t.close : t.menu}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <>
          <button
            type="button"
            aria-label={t.close}
            className="fixed inset-0 z-40 bg-slate-950/60 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-slate-950/98 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={makeHref(item.href, lang)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? 'bg-white text-slate-950'
                          : 'bg-white/[0.03] text-slate-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {t[item.key]}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href={makeHref('/contact', lang)}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}