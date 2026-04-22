'use client';

import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import { useLanguage } from '../../components/LanguageProvider';

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
      text: 'We work step by step. First we review the property and its starting point. Then we define what needs to be improved, coordinate the preparation and shape a clearer launch-ready result.',
    },
    steps: {
      title: 'The process',
      items: [
        {
          number: '01',
          title: 'Initial property review',
          text: 'We start by understanding the property type, number of rooms, furnishing level, condition and launch ambition. This helps us see where the property stands today and what level of support it needs.',
          bullets: [
            'Property type and size',
            'Current furnishing and readiness level',
            'General condition and presentation quality',
            'Owner goals and launch timeline',
          ],
        },
        {
          number: '02',
          title: 'Readiness assessment',
          text: 'We identify what is missing for a stronger short-stay setup. This can include layout issues, presentation gaps, missing essentials or areas that reduce the guest-ready feeling.',
          bullets: [
            'Layout and guest-flow review',
            'Presentation and first-impression review',
            'Essentials and hospitality logic',
            'Readiness gaps before launch',
          ],
        },
        {
          number: '03',
          title: 'Setup plan',
          text: 'Once the property has been reviewed, we define the recommended path forward. This gives the owner a clearer structure and helps connect the property to the right support level.',
          bullets: [
            'Recommended package level',
            'Preparation scope',
            'Priority actions',
            'Estimated path to launch',
          ],
        },
        {
          number: '04',
          title: 'Property preparation',
          text: 'This is where the property starts to take shape. Depending on scope, we coordinate preparation cleaning, setup guidance, presentation upgrades and the overall launch standard.',
          bullets: [
            'Preparation cleaning',
            'Layout and setup improvements',
            'Presentation refinement',
            'Stronger guest-ready standard',
          ],
        },
        {
          number: '05',
          title: 'Launch-oriented handover',
          text: 'After preparation, the property is in a much better position for the next stage. The owner moves forward with better clarity, stronger presentation and a more structured base for launch.',
          bullets: [
            'More launch-ready presentation',
            'Clearer next steps',
            'Better readiness for photos and listing',
            'Optional path to ongoing support later',
          ],
        },
      ],
    },
    timeline: {
      title: 'Typical timeline',
      text: 'Most properties move through this process in around 10–14 days, depending on size, condition, furnishing level and scope of work.',
      items: [
        {
          title: 'Day 1–2',
          text: 'Initial review and readiness assessment',
        },
        {
          title: 'Day 3–5',
          text: 'Setup definition and preparation planning',
        },
        {
          title: 'Day 6–10',
          text: 'Preparation work, cleaning and presentation improvements',
        },
        {
          title: 'Day 10–14',
          text: 'Final review and launch-oriented handover',
        },
      ],
    },
    roles: {
      title: 'What we handle vs what the owner handles',
      leftTitle: 'What we handle',
      rightTitle: 'What the owner handles',
      left: [
        'Property review and readiness logic',
        'Preparation structure',
        'Cleaning and presentation-focused preparation',
        'Guidance toward the right launch path',
      ],
      right: [
        'Providing access and property details',
        'Approving scope and direction',
        'Making final decisions on investment level',
        'Choosing next step after preparation',
      ],
    },
    closing: {
      title: 'Start with the first step',
      text: 'The best place to start is with a property review. Once we see the property and its current level, we can guide the right next step clearly.',
      ctaPrimary: 'Go to contact',
      ctaSecondary: 'See pricing',
    },
  },

  sv: {
    hero: {
      badge: 'Så fungerar det',
      title: 'Så förbereder vi en bostad för korttidslansering',
      subtitle:
        'Vårt arbetsflöde är byggt för att ta en bostad från första genomgång till starkare gästredo standard, tydligare presentation och en mer strukturerad väg till lansering.',
      ctaPrimary: 'Få min bostadsbedömning',
      ctaSecondary: 'Se priser',
    },
    overview: {
      eyebrow: 'ARBETSFLÖDE',
      title: 'En praktisk process, inte vag rådgivning',
      text: 'Vi arbetar steg för steg. Först går vi igenom bostaden och dess utgångsläge. Sedan definierar vi vad som behöver förbättras, koordinerar förberedelsen och formar ett tydligare lanseringsredo resultat.',
    },
    steps: {
      title: 'Processen',
      items: [
        {
          number: '01',
          title: 'Inledande genomgång av bostaden',
          text: 'Vi börjar med att förstå bostadstyp, antal rum, möbleringsnivå, skick och ambitionsnivå för lansering. Detta hjälper oss att se var bostaden står idag och vilken nivå av stöd som behövs.',
          bullets: [
            'Bostadstyp och storlek',
            'Nuvarande möblering och readiness-nivå',
            'Allmänt skick och presentationskvalitet',
            'Ägarens mål och tidsplan',
          ],
        },
        {
          number: '02',
          title: 'Bedömning av readiness',
          text: 'Vi identifierar vad som saknas för en starkare korttidssetup. Det kan handla om layoutproblem, presentationsluckor, saknade detaljer eller delar som minskar den gästredo känslan.',
          bullets: [
            'Genomgång av layout och gästflöde',
            'Genomgång av presentation och första intryck',
            'Essentials och hospitality-logik',
            'Luckor i readiness före lansering',
          ],
        },
        {
          number: '03',
          title: 'Setup-plan',
          text: 'När bostaden har gåtts igenom definierar vi rekommenderad väg framåt. Det ger ägaren en tydligare struktur och hjälper oss att koppla bostaden till rätt stödnivå.',
          bullets: [
            'Rekommenderad paketnivå',
            'Omfattning av förberedelse',
            'Prioriterade åtgärder',
            'Bedömd väg till lansering',
          ],
        },
        {
          number: '04',
          title: 'Förberedelse av bostaden',
          text: 'Här börjar bostaden ta form. Beroende på omfattning koordinerar vi förberedande städning, setup-vägledning, förbättringar av presentationen och en starkare lanseringsstandard.',
          bullets: [
            'Förberedande städning',
            'Förbättringar i layout och setup',
            'Förfinad presentation',
            'Starkare gästredo standard',
          ],
        },
        {
          number: '05',
          title: 'Lanseringsinriktad överlämning',
          text: 'Efter förberedelsen står bostaden mycket starkare inför nästa steg. Ägaren går vidare med bättre tydlighet, starkare presentation och en mer strukturerad grund för lansering.',
          bullets: [
            'Mer lanseringsredo presentation',
            'Tydligare nästa steg',
            'Bättre readiness för bilder och annons',
            'Möjlig väg till löpande stöd senare',
          ],
        },
      ],
    },
    timeline: {
      title: 'Typisk tidslinje',
      text: 'De flesta bostäder går igenom denna process på cirka 10–14 dagar, beroende på storlek, skick, möbleringsnivå och arbetsomfattning.',
      items: [
        {
          title: 'Dag 1–2',
          text: 'Inledande genomgång och bedömning av readiness',
        },
        {
          title: 'Dag 3–5',
          text: 'Definition av setup och planering av förberedelse',
        },
        {
          title: 'Dag 6–10',
          text: 'Förberedelsearbete, städning och förbättringar av presentationen',
        },
        {
          title: 'Dag 10–14',
          text: 'Slutlig genomgång och lanseringsinriktad överlämning',
        },
      ],
    },
    roles: {
      title: 'Vad vi hanterar och vad ägaren hanterar',
      leftTitle: 'Det vi hanterar',
      rightTitle: 'Det ägaren hanterar',
      left: [
        'Bostadsgranskning och readiness-logik',
        'Struktur för förberedelse',
        'Städning och presentationsinriktad förberedelse',
        'Vägledning mot rätt lanseringsväg',
      ],
      right: [
        'Tillgång till bostaden och grunduppgifter',
        'Godkännande av omfattning och riktning',
        'Slutliga beslut om investeringsnivå',
        'Val av nästa steg efter förberedelsen',
      ],
    },
    closing: {
      title: 'Börja med första steget',
      text: 'Det bästa stället att börja är med en bostadsbedömning. När vi ser bostaden och dess nuvarande nivå kan vi tydligt guida rätt nästa steg.',
      ctaPrimary: 'Gå till kontakt',
      ctaSecondary: 'Se priser',
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

export default function HowItWorksPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.12),transparent_24%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {t.hero.badge}
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
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
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.overview.eyebrow}
            title={t.overview.title}
            text={t.overview.text}
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.steps.title} />

          <div className="mt-12 space-y-6">
            {t.steps.items.map((step) => (
              <div
                key={step.number}
                className="grid gap-6 rounded-[30px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[140px_1fr]"
              >
                <div>
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-lg font-semibold text-cyan-300">
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 max-w-3xl leading-8 text-slate-300">{step.text}</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {step.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <span className="text-sm leading-7 text-slate-200">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.timeline.title} text={t.timeline.text} />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.timeline.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.roles.title} />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white">{t.roles.leftTitle}</h3>
              <div className="mt-6 space-y-4">
                {t.roles.left.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white">{t.roles.rightTitle}</h3>
              <div className="mt-6 space-y-4">
                {t.roles.right.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-10">
          <SectionTitle title={t.closing.title} text={t.closing.text} />

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t.closing.ctaPrimary}
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t.closing.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}