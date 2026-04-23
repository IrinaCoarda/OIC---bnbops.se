import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';

const content = {
  en: {
    hero: {
      badge: 'How it works',
      title: 'How we prepare a property for short-stay launch',
      subtitle:
        'Our workflow is built to take a property from early review to stronger guest-readiness, clearer presentation and a more structured launch path.',
      ctaPrimary: 'Get my property review',
      ctaSecondary: 'See pricing',
    },
    overview: {
      eyebrow: 'WORKFLOW',
      title: 'A practical process, not vague advice',
      text:
        'We work step by step. First we review the property and its starting point. Then we define what needs to be improved, coordinated and prepared before launch.',
    },
    steps: {
      title: 'The process',
      items: [
        {
          number: '01',
          title: 'Property review',
          text: 'We assess type, layout, condition, furnishing level and current readiness.',
        },
        {
          number: '02',
          title: 'Launch direction',
          text: 'We define what needs to change for stronger presentation, structure and guest-readiness.',
        },
        {
          number: '03',
          title: 'Preparation phase',
          text: 'We align cleaning, setup, presentation details and practical launch support.',
        },
        {
          number: '04',
          title: 'Next-step clarity',
          text: 'You get a clearer view of priorities, likely scope and how to move forward.',
        },
      ],
    },
  },
  sv: {
    hero: {
      badge: 'Så fungerar det',
      title: 'Hur vi förbereder en bostad för lansering inom korttidsuthyrning',
      subtitle:
        'Vårt arbetsflöde är byggt för att ta en bostad från tidig bedömning till starkare gästredo nivå, tydligare presentation och en mer strukturerad lanseringsväg.',
      ctaPrimary: 'Få min bostadsbedömning',
      ctaSecondary: 'Se priser',
    },
    overview: {
      eyebrow: 'ARBETSFLÖDE',
      title: 'En praktisk process, inte vaga råd',
      text:
        'Vi arbetar steg för steg. Först bedömer vi bostaden och dess utgångsläge. Sedan definierar vi vad som behöver förbättras, samordnas och förberedas före lansering.',
    },
    steps: {
      title: 'Processen',
      items: [
        {
          number: '01',
          title: 'Bostadsbedömning',
          text: 'Vi bedömer typ, planlösning, skick, möbleringsnivå och nuvarande beredskap.',
        },
        {
          number: '02',
          title: 'Lanseringsriktning',
          text: 'Vi definierar vad som behöver ändras för starkare presentation, struktur och gästredo nivå.',
        },
        {
          number: '03',
          title: 'Förberedelsefas',
          text: 'Vi samordnar städning, setup, presentationsdetaljer och praktiskt stöd inför lansering.',
        },
        {
          number: '04',
          title: 'Tydligt nästa steg',
          text: 'Du får en tydligare bild av prioriteringar, trolig omfattning och hur du går vidare.',
        },
      ],
    },
  },
};

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

export default async function HowItWorksPage({ searchParams }) {
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
              {t.hero.badge}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={makeHref('/contact', lang)}
                className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href={makeHref('/pricing', lang)}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {t.overview.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.overview.title}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            {t.overview.text}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.steps.items.map((item) => (
              <div
                key={item.number}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
                  {item.number}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}