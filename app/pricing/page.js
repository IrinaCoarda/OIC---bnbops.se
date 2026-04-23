import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';

const content = {
  en: {
    badge: 'Pricing',
    title: 'Clear pricing direction before launch',
    subtitle:
      'Pricing depends on property type, condition, setup level and required support. We start with a review and then define the right next step.',
    cards: [
      {
        title: 'Property review',
        text: 'First-step review of property type, location, readiness and likely support level.',
      },
      {
        title: 'Preparation scope',
        text: 'Pricing depends on how much cleaning, setup improvement and launch preparation is needed.',
      },
      {
        title: 'Ongoing support',
        text: 'For properties moving into operations, we define the right level of recurring support separately.',
      },
    ],
    ctaPrimary: 'Request a property review',
    ctaSecondary: 'See how it works',
  },
  sv: {
    badge: 'Priser',
    title: 'Tydlig prisriktning före lansering',
    subtitle:
      'Prissättning beror på bostadstyp, skick, setup-nivå och vilket stöd som behövs. Vi börjar med en bedömning och definierar sedan rätt nästa steg.',
    cards: [
      {
        title: 'Bostadsbedömning',
        text: 'Första genomgång av bostadstyp, område, beredskap och trolig stödnivå.',
      },
      {
        title: 'Förberedelseomfattning',
        text: 'Prisbilden beror på hur mycket städning, förbättrad setup och förberedelse inför lansering som behövs.',
      },
      {
        title: 'Löpande stöd',
        text: 'För bostäder som går vidare till drift definierar vi rätt nivå av återkommande stöd separat.',
      },
    ],
    ctaPrimary: 'Begär en bostadsbedömning',
    ctaSecondary: 'Se hur det fungerar',
  },
};

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

export default async function PricingPage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === 'sv' ? 'sv' : 'en';
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader lang={lang} />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.12),transparent_24%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {t.badge}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {t.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
            >
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-4">
          <Link
            href={makeHref('/contact', lang)}
            className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            {t.ctaPrimary}
          </Link>

          <Link
            href={makeHref('/how-it-works', lang)}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </section>
    </main>
  );
}