'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

const labels = {
  en: {
    landing: 'Home',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    gallery: 'Gallery',
    contact: 'Contact',
    cta: 'Get my property review',
  },
  sv: {
    landing: 'Hem',
    howItWorks: 'Så fungerar det',
    pricing: 'Priser',
    gallery: 'Galleri',
    contact: 'Kontakt',
    cta: 'Få min bostadsbedömning',
  },
};

const navItems = [
  { href: '/', key: 'landing' },
  { href: '/how-it-works', key: 'howItWorks' },
  { href: '/pricing', key: 'pricing' },
  { href: '/gallery', key: 'gallery' },
  { href: '/contact', key: 'contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = labels[language];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/bnbops-logo.png"
            alt="bnbops.se"
            width={340}
            height={90}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
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

        <div className="flex items-center gap-3">
          <LanguageToggle />

          <Link
            href="/contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200 md:inline-flex"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}