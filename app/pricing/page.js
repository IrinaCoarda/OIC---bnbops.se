import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import PricingCalculator from '../../components/PricingCalculator';

const content = {
  en: {
    hero: {
      badge: 'Pricing',
      title: 'Choose how you want to launch your property',
      subtitle:
        'Most properties need more than just cleaning to perform well. The difference between a basic setup and a structured launch often shapes the first reviews and long-term performance.',
      support:
        'Simple setup options depending on how involved you want to be.',
      ctaPrimary: 'Get my property review',
      ctaSecondary: 'Go to contact',
    },
    cards: {
      start: {
        name: 'BNB Ready Start',
        price: 'From 12,900 SEK excl. VAT',
        tag: 'Basic readiness',
        micro: 'For smaller or already well-prepared properties',
        desc: 'Clean, structured foundation for a proper launch',
        features: [
          'Property readiness review',
          'Layout and guest-flow recommendations',
          'Deep preparation cleaning',
          'Essentials and equipment checklist',
          'Launch planning call',
        ],
      },
      launch: {
        name: 'BNB Ready Launch',
        price: 'From 21,900 SEK excl. VAT',
        tag: 'Most popular',
        micro: 'Most similar properties fall into this category',
        desc: 'Best balance between speed, quality and performance',
        features: [
          'Everything in Start',
          'Styling and presentation guidance',
          'Professional photo planning',
          'Listing-ready presentation text',
          'Guest-ready final review',
        ],
      },
      premium: {
        name: 'BNB Ready Premium',
        price: 'From 34,900 SEK excl. VAT',
        tag: 'Minimal involvement',
        micro: 'For owners who want minimal day-to-day involvement',
        desc: 'Complete setup with minimal owner involvement',
        features: [
          'Everything in Launch',
          'Higher-detail setup coordination',
          'Linen and operating-flow planning',
          'Welcome setup guidance',
          '30 days launch support',
        ],
      },
      urgency:
        'We take on a limited number of new properties each month to maintain quality and execution speed.',
      footnote:
        'Final price depends on property size, condition, furnishing level and scope. Custom quotes are available for larger properties, villas and multi-unit setups.',
      loss:
        'A weak initial setup often leads to lower ratings and slower booking momentum. Fixing it later is usually more expensive.',
    },
    calculator: {
      eyebrow: 'Estimate',
      title: 'Get a quick estimate',
      text: 'Use this guided calculator to see a likely package and a starting price range. Final pricing is confirmed after a property review.',
      fields: {
        city: 'City',
        propertyType: 'Property type',
        rooms: 'Rooms',
        furnished: 'Furnished',
        condition: 'Current condition',
        photoSupport: 'Need photo & listing support?',
        opsPlanning: 'Need linen & operating-flow planning?',
      },
      options: {
        city: ['Stockholm', 'Uppsala'],
        propertyType: ['Apartment', 'Townhouse', 'Villa'],
        rooms: ['1', '2', '3', '4+'],
        furnished: ['Yes', 'Partly', 'No'],
        condition: ['Good', 'Needs light improvement', 'Needs more preparation'],
        yesNo: ['Yes', 'No'],
      },
      result: {
        recommended: 'Recommended package',
        estimate: 'Estimated starting range',
        note:
          'This is a guided estimate, not a final quote. The final scope is confirmed after review.',
        validation:
          'Based on your inputs, most properties in this category require a structured setup to perform well.',
        ctaPrimary: 'Confirm my setup plan',
        ctaSecondary: 'Request detailed review',
      },
    },
    factors: {
      title: 'What affects final price',
      items: [
        {
          title: 'Property size and type',
          text: 'Apartments, townhouses and villas can require different preparation scope and coordination.',
        },
        {
          title: 'Current furnishing level',
          text: 'A fully furnished property may need less setup work than a partly furnished or empty property.',
        },
        {
          title: 'Condition and presentation',
          text: 'Some properties need only light refinement, while others need more preparation before launch.',
        },
        {
          title: 'Support level requested',
          text: 'Photo planning, listing support and operating-flow planning increase the preparation scope.',
        },
      ],
    },
    faq: {
      title: 'Pricing FAQ',
      items: [
        {
          q: 'Is the calculator a final quote?',
          a: 'No. It gives a practical estimate and recommended package. Final pricing is confirmed after reviewing the property.',
        },
        {
          q: 'Can you prepare larger properties?',
          a: 'Yes. Villas, larger apartments and multi-unit setups can be quoted separately.',
        },
        {
          q: 'Can I start with one package and upgrade later?',
          a: 'Yes. The property review helps define the right starting point, and the scope can be adjusted if needed.',
        },
      ],
    },
    closing: {
      title: 'Need a confirmed price for your property?',
      text: 'The fastest way to get clarity is to send us your details and request a property review.',
      ctaPrimary: 'Go to contact',
      ctaSecondary: 'See how it works',
    },
  },
  sv: {
    hero: {
      badge: 'Priser',
      title: 'Välj hur du vill lansera din bostad',
      subtitle:
        'De flesta bostäder behöver mer än bara städning för att prestera bra. Skillnaden mellan en enkel setup och en strukturerad lansering formar ofta de första omdömena och den långsiktiga prestationen.',
      support:
        'Enkla upplägg beroende på hur mycket du vill vara involverad.',
      ctaPrimary: 'Få min bostadsbedömning',
      ctaSecondary: 'Gå till kontakt',
    },
    cards: {
      start: {
        name: 'BNB Ready Start',
        price: 'Från 12 900 SEK exkl. moms',
        tag: 'Grundläggande readiness',
        micro: 'För mindre eller redan väl förberedda bostäder',
        desc: 'Ren och strukturerad grund för en riktig lansering',
        features: [
          'Genomgång av bostadens readiness',
          'Rekommendationer för layout och gästflöde',
          'Djup förberedande städning',
          'Checklista för utrustning och essentials',
          'Planeringssamtal inför start',
        ],
      },
      launch: {
        name: 'BNB Ready Launch',
        price: 'Från 21 900 SEK exkl. moms',
        tag: 'Mest vald',
        micro: 'De flesta liknande bostäder hamnar i denna kategori',
        desc: 'Bästa balans mellan snabbhet, kvalitet och resultat',
        features: [
          'Allt i Start',
          'Styling- och presentationsrådgivning',
          'Planering för professionella bilder',
          'Presentations- och annonsredo text',
          'Slutlig genomgång innan lansering',
        ],
      },
      premium: {
        name: 'BNB Ready Premium',
        price: 'Från 34 900 SEK exkl. moms',
        tag: 'Minimal involvering',
        micro: 'För ägare som vill ha minimal daglig involvering',
        desc: 'Komplett setup med minimal involvering från ägaren',
        features: [
          'Allt i Launch',
          'Mer detaljerad setup-koordinering',
          'Planering för linne och driftflöde',
          'Guidning för välkomstsetup',
          '30 dagars stöd efter start',
        ],
      },
      urgency:
        'Vi tar endast in ett begränsat antal nya bostäder varje månad för att hålla hög kvalitet och snabb leverans.',
      footnote:
        'Slutpris beror på bostadens storlek, skick, möbleringsnivå och omfattning. Offert finns för större objekt, villor och flera enheter.',
      loss:
        'En svag initial setup leder ofta till lägre betyg och långsammare bokningsflöde. Att rätta till det i efterhand blir oftast dyrare.',
    },
    calculator: {
      eyebrow: 'Uppskattning',
      title: 'Få en snabb uppskattning',
      text: 'Använd denna guidande kalkylator för att se ett troligt paket och ett uppskattat startpris. Slutpris bekräftas efter en bostadsbedömning.',
      fields: {
        city: 'Stad',
        propertyType: 'Typ av bostad',
        rooms: 'Antal rum',
        furnished: 'Möblerad',
        condition: 'Nuvarande skick',
        photoSupport: 'Behöver du stöd för bilder och annons?',
        opsPlanning: 'Behöver du planering för linne och driftflöde?',
      },
      options: {
        city: ['Stockholm', 'Uppsala'],
        propertyType: ['Lägenhet', 'Radhus', 'Villa'],
        rooms: ['1', '2', '3', '4+'],
        furnished: ['Ja', 'Delvis', 'Nej'],
        condition: ['Bra', 'Behöver lätt förbättring', 'Behöver mer förberedelse'],
        yesNo: ['Ja', 'Nej'],
      },
      result: {
        recommended: 'Rekommenderat paket',
        estimate: 'Uppskattat startintervall',
        note:
          'Detta är en vägledande uppskattning, inte en slutlig offert. Slutlig omfattning bekräftas efter genomgång.',
        validation:
          'Baserat på dina val behöver de flesta bostäder i denna kategori en strukturerad setup för att prestera väl.',
        ctaPrimary: 'Bekräfta min setup-plan',
        ctaSecondary: 'Begär detaljerad bedömning',
      },
    },
    factors: {
      title: 'Vad påverkar slutpriset',
      items: [
        {
          title: 'Bostadens storlek och typ',
          text: 'Lägenheter, radhus och villor kan kräva olika omfattning av förberedelse och koordinering.',
        },
        {
          title: 'Nuvarande möbleringsnivå',
          text: 'En fullt möblerad bostad kan kräva mindre setup-arbete än en delvis möblerad eller tom bostad.',
        },
        {
          title: 'Skick och presentation',
          text: 'Vissa bostäder behöver bara lätt förfining, medan andra kräver mer förberedelse före lansering.',
        },
        {
          title: 'Nivå på önskat stöd',
          text: 'Planering för bilder, annonsstöd och driftflöde ökar omfattningen av förberedelsen.',
        },
      ],
    },
    faq: {
      title: 'Prisfrågor',
      items: [
        {
          q: 'Är kalkylatorn en slutlig offert?',
          a: 'Nej. Den ger en praktisk uppskattning och rekommenderat paket. Slutpris bekräftas efter genomgång av bostaden.',
        },
        {
          q: 'Kan ni förbereda större bostäder?',
          a: 'Ja. Villor, större lägenheter och flera enheter kan offereras separat.',
        },
        {
          q: 'Kan jag börja med ett paket och uppgradera senare?',
          a: 'Ja. Bostadsbedömningen hjälper till att definiera rätt startnivå, och omfattningen kan justeras vid behov.',
        },
      ],
    },
    closing: {
      title: 'Behöver du ett bekräftat pris för din bostad?',
      text: 'Det snabbaste sättet att få tydlighet är att skicka dina uppgifter och begära en bostadsbedömning.',
      ctaPrimary: 'Gå till kontakt',
      ctaSecondary: 'Se hur det fungerar',
    },
  },
};

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

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

export default async function PricingPage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === 'sv' ? 'sv' : 'en';
  const t = content[lang];
  const packages = [t.cards.start, t.cards.launch, t.cards.premium];

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
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              {t.hero.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
              {t.hero.support}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={makeHref('/contact', lang)}
                className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href={makeHref('/contact', lang)}
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
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`rounded-[30px] border p-8 ${
                  index === 1
                    ? 'border-cyan-300/40 bg-cyan-400/10 shadow-xl shadow-cyan-900/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white">{pkg.name}</h2>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {pkg.tag}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-cyan-200">{pkg.micro}</p>
                <p className="mt-6 text-2xl font-semibold text-cyan-300">{pkg.price}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{pkg.desc}</p>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={makeHref('/contact', lang)}
                  className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-medium transition ${
                    index === 1
                      ? 'bg-white text-slate-950 hover:bg-slate-200'
                      : 'border border-white/25 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {t.hero.ctaPrimary}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-300">{t.cards.loss}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">{t.cards.urgency}</p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{t.cards.footnote}</p>
        </div>
      </section>

      <PricingCalculator lang={lang} content={t} />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.factors.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.factors.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={t.faq.title} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.faq.items.map((item) => (
              <div
                key={item.q}
                className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8"
              >
                <h3 className="text-xl font-semibold text-white">{item.q}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-10">
          <SectionTitle title={t.closing.title} text={t.closing.text} />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={makeHref('/contact', lang)}
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              {t.closing.ctaPrimary}
            </Link>
            <Link
              href={makeHref('/how-it-works', lang)}
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