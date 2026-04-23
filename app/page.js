import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

const content = {
  en: {
    badge: 'Stockholm & Uppsala',
    title: 'Turn your property into a high-performing Airbnb from day one',
    subtitle:
      'Launch and operate your short-stay rental in Stockholm & Uppsala with stronger presentation, smoother operations and a better guest experience from day one.',
    ctaPrimary: 'Get my property review',
    ctaSecondary: 'See pricing',
    trust: [
      '4.8+ cleaning ratings on active properties',
      'Trusted by Airbnb operators since 2019',
      'Stockholm & Uppsala coverage',
    ],
    rightBadge: 'BNB READY',
    rightTitle: 'Built for better reviews, pricing and launch readiness',
    rightText:
      'We do not offer generic preparation. We help shape a property into something more guest-ready, more launch-ready and easier to operate from the start.',
    points: [
      'Layout and guest-flow thinking',
      'Preparation cleaning and presentation standards',
      'Launch-oriented setup guidance',
      'Clear next step toward pricing and execution',
    ],
    whyTitle: 'Why this matters',
    whyText:
      'A property can look acceptable for normal living and still perform weakly for short-stay guests. Small setup mistakes can reduce presentation quality, guest comfort and owner confidence before the property even launches.',
  },
  sv: {
    badge: 'Stockholm & Uppsala',
    title: 'Gör din bostad till en högpresterande Airbnb från dag ett',
    subtitle:
      'Lansera och driv din korttidsuthyrning i Stockholm & Uppsala med starkare presentation, smidigare drift och en bättre gästupplevelse från dag ett.',
    ctaPrimary: 'Få min bostadsbedömning',
    ctaSecondary: 'Se priser',
    trust: [
      '4,8+ städbetyg på aktiva bostäder',
      'Betrodd av Airbnb-operatörer sedan 2019',
      'Täcker Stockholm & Uppsala',
    ],
    rightBadge: 'BNB READY',
    rightTitle: 'Byggd för bättre omdömen, prissättning och lanseringsnivå',
    rightText:
      'Vi erbjuder inte generisk förberedelse. Vi hjälper dig att forma en bostad som är mer gästredo, mer lanseringsredo och lättare att driva redan från start.',
    points: [
      'Tänk kring layout och gästflöde',
      'Förberedande städning och presentationsstandard',
      'Guidning inför lansering',
      'Tydligt nästa steg mot prissättning och utförande',
    ],
    whyTitle: 'Varför detta spelar roll',
    whyText:
      'En bostad kan se acceptabel ut för vanligt boende och ändå prestera svagt för korttidsgäster. Små missar i setupen kan sänka presentationskvalitet, gästkomfort och ägarens trygghet redan före lansering.',
  },
};

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === 'sv' ? 'sv' : 'en';
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader lang={lang} />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.12),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {t.badge}
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={makeHref('/contact', lang)}
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                {t.ctaPrimary}
              </Link>

              <Link
                href={makeHref('/pricing', lang)}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.ctaSecondary}
              </Link>
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-300">
              {t.trust.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t.rightBadge}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{t.rightTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.rightText}</p>

            <div className="mt-8 space-y-4">
              {t.points.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {t.whyTitle}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{t.whyText}</p>
        </div>
      </section>
    </main>
  );
}