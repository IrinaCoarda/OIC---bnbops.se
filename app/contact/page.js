import SiteHeader from '../../components/SiteHeader';

const content = {
  en: {
    hero: {
      badge: 'Contact',
      title: 'Contact us about your property',
      subtitle:
        'Tell us a bit about your property and we will come back with the right next step, a likely support level and a clearer launch direction.',
    },
    intro: {
      eyebrow: 'GET IN TOUCH',
      title: 'Start with a property review',
      text:
        'The easiest way to begin is to send us the key details. Once we understand the property type, location and current readiness level, we can guide the next step more clearly.',
    },
    details: {
      title: 'Contact details',
      emailTitle: 'Email',
      phoneTitle: 'Phone',
      secondaryEmailTitle: 'Company contact',
      email: 'contact@bnbops.se',
      phone: '+46 70 324 97 00',
      secondaryEmail: 'contact@oicab.se',
      note:
        'BNB Ops is focused on Airbnb location readiness and short-stay launch support.',
    },
    form: {
      title: 'Request a property review',
      text:
        'Send us a few details and we will come back with an initial view of fit, scope and next steps.',
      fields: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        area: 'Area / Address',
        propertyType: 'Property type',
        rooms: 'Rooms',
        furnished: 'Furnished',
        message: 'Tell us about the property',
      },
      propertyTypes: ['Apartment', 'Townhouse', 'Villa', 'Other'],
      furnishedOptions: ['Yes', 'No', 'Partially'],
      submit: 'Send request',
    },
    extras: {
      title: 'What to include',
      items: [
        'Property type and approximate size',
        'Area or address',
        'Whether the property is already furnished',
        'Current condition and how soon you want to launch',
      ],
    },
  },
  sv: {
    hero: {
      badge: 'Kontakt',
      title: 'Kontakta oss om din bostad',
      subtitle:
        'Berätta lite om din bostad så återkommer vi med rätt nästa steg, en trolig stödnivå och en tydligare lanseringsriktning.',
    },
    intro: {
      eyebrow: 'KONTAKT',
      title: 'Börja med en bostadsbedömning',
      text:
        'Det enklaste sättet att börja är att skicka oss de viktigaste uppgifterna. När vi förstår bostadstyp, område och nuvarande nivå kan vi tydligare guida nästa steg.',
    },
    details: {
      title: 'Kontaktuppgifter',
      emailTitle: 'E-post',
      phoneTitle: 'Telefon',
      secondaryEmailTitle: 'Företagskontakt',
      email: 'contact@bnbops.se',
      phone: '+46 70 324 97 00',
      secondaryEmail: 'contact@oicab.se',
      note:
        'BNB Ops är fokuserat på Airbnb-ready bostäder och stöd inför lansering av korttidsuthyrning.',
    },
    form: {
      title: 'Begär en bostadsbedömning',
      text:
        'Skicka några detaljer så återkommer vi med en första bedömning av upplägg, omfattning och nästa steg.',
      fields: {
        name: 'Namn',
        email: 'E-post',
        phone: 'Telefon',
        area: 'Område / Adress',
        propertyType: 'Bostadstyp',
        rooms: 'Antal rum',
        furnished: 'Möblerad',
        message: 'Berätta om bostaden',
      },
      propertyTypes: ['Lägenhet', 'Radhus', 'Villa', 'Annat'],
      furnishedOptions: ['Ja', 'Nej', 'Delvis'],
      submit: 'Skicka förfrågan',
    },
    extras: {
      title: 'Bra att inkludera',
      items: [
        'Bostadstyp och ungefärlig storlek',
        'Område eller adress',
        'Om bostaden redan är möblerad',
        'Nuvarande skick och hur snart du vill lansera',
      ],
    },
  },
};

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === 'sv' ? 'sv' : 'en';
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader lang={lang} />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              {t.hero.badge}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              {t.intro.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {t.intro.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              {t.intro.text}
            </p>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                <h3 className="text-2xl font-semibold text-white">{t.details.title}</h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm font-medium text-cyan-300">{t.details.emailTitle}</p>
                    <a
                      href={`mailto:${t.details.email}`}
                      className="mt-2 inline-block text-lg text-white transition hover:text-cyan-300"
                    >
                      {t.details.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-cyan-300">{t.details.phoneTitle}</p>
                    <a
                      href="tel:+46703249700"
                      className="mt-2 inline-block text-lg text-white transition hover:text-cyan-300"
                    >
                      {t.details.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-cyan-300">
                      {t.details.secondaryEmailTitle}
                    </p>
                    <a
                      href={`mailto:${t.details.secondaryEmail}`}
                      className="mt-2 inline-block text-lg text-white transition hover:text-cyan-300"
                    >
                      {t.details.secondaryEmail}
                    </a>
                  </div>
                </div>

                <p className="mt-8 leading-7 text-slate-300">{t.details.note}</p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                <h3 className="text-2xl font-semibold text-white">{t.extras.title}</h3>

                <div className="mt-6 space-y-4">
                  {t.extras.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span className="text-sm leading-7 text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)] md:p-10">
              <h3 className="text-3xl font-semibold text-white">{t.form.title}</h3>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">{t.form.text}</p>

              <form action="/api/property-review" method="POST" className="mt-10 grid gap-6 md:grid-cols-2">
                <input type="hidden" name="language" value={lang} />

                <div>
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.name}</label>
                  <input type="text" name="name" required className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.email}</label>
                  <input type="email" name="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.phone}</label>
                  <input type="text" name="phone" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.area}</label>
                  <input type="text" name="area" required className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.propertyType}</label>
                  <select name="propertyType" required defaultValue="" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40">
                    <option value="" disabled>{t.form.fields.propertyType}</option>
                    {t.form.propertyTypes.map((item) => (
                      <option key={item} value={item} className="bg-slate-950">{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.rooms}</label>
                  <input type="text" name="rooms" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.furnished}</label>
                  <select name="furnished" defaultValue="" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40">
                    <option value="" disabled>{t.form.fields.furnished}</option>
                    {t.form.furnishedOptions.map((item) => (
                      <option key={item} value={item} className="bg-slate-950">{item}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-slate-300">{t.form.fields.message}</label>
                  <textarea name="message" rows="6" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300/40" />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-4 pt-2">
                  <button type="submit" className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
                    {t.form.submit}
                  </button>

                  <a href={makeHref('/pricing', lang)} className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
                    {lang === 'sv' ? 'Se priser' : 'See pricing'}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}