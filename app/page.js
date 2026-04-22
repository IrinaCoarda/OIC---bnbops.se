'use client';

import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { useLanguage } from '../components/LanguageProvider';

const content = {
  en: {
    hero: {
      badge: 'Stockholm & Uppsala',
      title: 'Make your property Airbnb-ready',
      subtitle:
        'We help owners prepare apartments, townhouses and villas for short-stay launch with stronger structure, cleaner presentation and a more professional guest-ready standard.',
      ctaPrimary: 'Get my property review',
      ctaSecondary: 'See pricing',
      trust: 'Built for owners who want speed, clarity and a professional setup.',
    },
    intro: {
      eyebrow: 'BNB READY',
      title: 'A stronger way to launch a short-stay property',
      text: 'We do not offer generic preparation. We help shape a property into something that is more guest-ready, more launch-ready and easier to operate from the start.',
      bullets: [
        'Layout and guest-flow thinking',
        'Preparation cleaning and presentation standards',
        'Launch-oriented setup guidance',
        'Clear next step toward pricing and execution',
      ],
    },
    value: {
      title: 'Why this matters',
      text: 'A property can look acceptable for normal living and still perform weakly for short-stay guests. Small setup mistakes can reduce presentation quality, guest comfort and the owner’s confidence before the property even launches.',
      cards: [
        {
          title: 'Poor first impression',
          text: 'Weak setup and inconsistent presentation can lower perceived quality immediately.',
        },
        {
          title: 'Harder guest experience',
          text: 'Unclear layout and missing essentials create friction for guests and owners alike.',
        },
        {
          title: 'Slower launch',
          text: 'Without a structured approach, owners lose time and momentum before going live.',
        },
      ],
    },
    processPreview: {
      title: 'A simpler path from property to launch',
      text: 'We review the property, define what needs to be improved, prepare the setup and guide the next step.',
      cta: 'See how it works',
    },
    pricingPreview: {
      title: 'Clear pricing structure',
      text: 'Choose the level of support that fits your property, your timeline and how involved you want to be.',
      cta: 'See pricing',
    },
    galleryPreview: {
      title: 'Visual results matter',
      text: 'A strong setup is visible. Our gallery page is where before-and-after examples and future client proof will live.',
      cta: 'View gallery',
    },
    finalCta: {
      title: 'Start with a property review',
      text: 'Tell us a few details and we will help you understand the right next step for your property.',
      ctaPrimary: 'Go to contact',
      ctaSecondary: 'See pricing first',
    },
  },

  sv: {
    hero: {
      badge: 'Stockholm & Uppsala',
      title: 'Gör din bostad Airbnb-redo',
      subtitle:
        'Vi hjälper ägare att förbereda lägenheter, radhus och villor för korttidsuthyrning med starkare struktur, bättre presentation och en mer professionell gästredo standard.',
      ctaPrimary: 'Få min bostadsbedömning',
      ctaSecondary: 'Se priser',
      trust: 'Byggt för ägare som vill ha snabbhet, tydlighet och en professionell start.',
    },
    intro: {
      eyebrow: 'BNB READY',
      title: 'Ett starkare sätt att lansera en bostad för korttidsuthyrning',
      text: 'Vi erbjuder inte generisk förberedelse. Vi hjälper till att forma bostaden till något som är mer gästredo, mer lanseringsredo och enklare att driva från början.',
      bullets: [
        'Tänk kring layout och gästflöde',
        'Förberedande städning och presentationsstandard',
        'Lanseringsinriktad setup-vägledning',
        'Tydligt nästa steg mot pris och genomförande',
      ],
    },
    value: {
      title: 'Varför detta spelar roll',
      text: 'En bostad kan fungera för vanligt boende men ändå prestera svagt för korttidsgäster. Små misstag i setupen kan sänka presentationen, gästupplevelsen och ägarens trygghet redan innan lansering.',
      cards: [
        {
          title: 'Svagt första intryck',
          text: 'Ojämn setup och svag presentation kan snabbt sänka det upplevda värdet.',
        },
        {
          title: 'Sämre gästupplevelse',
          text: 'Otydlig layout och saknade detaljer skapar friktion för både gäster och ägare.',
        },
        {
          title: 'Långsammare start',
          text: 'Utan en tydlig struktur förlorar ägaren tid och fart innan bostaden går live.',
        },
      ],
    },
    processPreview: {
      title: 'En enklare väg från bostad till lansering',
      text: 'Vi går igenom bostaden, definierar vad som behöver förbättras, förbereder setupen och guidar nästa steg.',
      cta: 'Se hur det fungerar',
    },
    pricingPreview: {
      title: 'Tydlig prisstruktur',
      text: 'Välj den nivå av stöd som passar din bostad, din tidsplan och hur involverad du vill vara.',
      cta: 'Se priser',
    },
    galleryPreview: {
      title: 'Visuella resultat spelar roll',
      text: 'En stark setup syns. Gallerisidan blir platsen för före- och efterbilder och framtida kundbevis.',
      cta: 'Se galleri',
    },
    finalCta: {
      title: 'Börja med en bostadsbedömning',
      text: 'Skicka några uppgifter så hjälper vi dig att förstå rätt nästa steg för din bostad.',
      ctaPrimary: 'Gå till kontakt',
      ctaSecondary: 'Se priser först',
    },
  },
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {t.hero.badge}
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                {t.hero.ctaPrimary}
              </Link>

              <Link
                href="/pricing"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">{t.hero.trust}</p>
          </div>

          <div className="relative z-10">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-900/10 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {t.intro.eyebrow}
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {t.intro.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-300">{t.intro.text}</p>

              <div className="mt-8 space-y-4">
                {t.intro.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.value.title} text={t.value.text} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.value.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">{t.processPreview.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{t.processPreview.text}</p>
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t.processPreview.cta}
            </Link>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">{t.pricingPreview.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{t.pricingPreview.text}</p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t.pricingPreview.cta}
            </Link>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-white">{t.galleryPreview.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{t.galleryPreview.text}</p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t.galleryPreview.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-10">
          <SectionTitle title={t.finalCta.title} text={t.finalCta.text} />

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t.finalCta.ctaPrimary}
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t.finalCta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}