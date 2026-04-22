'use client';

import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import { useLanguage } from '../../components/LanguageProvider';

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
      text: 'The easiest way to begin is to send us the key details. Once we understand the property type, location and current readiness level, we can guide the next step more clearly.',
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
        message: 'Message',
      },
      propertyTypes: ['Apartment', 'Townhouse', 'Villa'],
      furnishedOptions: ['Yes', 'Partly', 'No'],
      submit: 'Send request',
      sending: 'Sending...',
      success:
        'Your request has been sent successfully. We will get back to you soon.',
      error:
        'Something went wrong while sending your request. Please try again.',
      validation:
        'Please fill in the required fields: name, email, area and property type.',
      disclaimer:
        'By submitting this form, you agree that we may contact you regarding your request.',
    },
    support: {
      title: 'What to include',
      items: [
        'Property location or area',
        'Property type and number of rooms',
        'Current furnishing level',
        'Current condition',
        'Whether you want setup only or broader support',
      ],
    },
  },

  sv: {
    hero: {
      badge: 'Kontakt',
      title: 'Kontakta oss om din bostad',
      subtitle:
        'Berätta lite om din bostad så återkommer vi med rätt nästa steg, en trolig stödnivå och en tydligare riktning för lansering.',
    },
    intro: {
      eyebrow: 'KONTAKT',
      title: 'Börja med en bostadsbedömning',
      text: 'Det enklaste sättet att börja är att skicka de viktigaste uppgifterna. När vi förstår bostadstyp, läge och nuvarande readiness-nivå kan vi tydligare guida nästa steg.',
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
        'BNB Ops är inriktat på att göra bostäder redo för Airbnb och lansering inom korttidsuthyrning.',
    },
    form: {
      title: 'Begär en bostadsbedömning',
      text:
        'Skicka några uppgifter så återkommer vi med en första bedömning av lämplighet, omfattning och nästa steg.',
      fields: {
        name: 'Namn',
        email: 'E-post',
        phone: 'Telefon',
        area: 'Område / Adress',
        propertyType: 'Typ av bostad',
        rooms: 'Antal rum',
        furnished: 'Möblerad',
        message: 'Meddelande',
      },
      propertyTypes: ['Lägenhet', 'Radhus', 'Villa'],
      furnishedOptions: ['Ja', 'Delvis', 'Nej'],
      submit: 'Skicka förfrågan',
      sending: 'Skickar...',
      success:
        'Din förfrågan har skickats. Vi återkommer till dig inom kort.',
      error:
        'Något gick fel när formuläret skickades. Försök igen.',
      validation:
        'Fyll i de obligatoriska fälten: namn, e-post, område/adress och typ av bostad.',
      disclaimer:
        'Genom att skicka formuläret godkänner du att vi får kontakta dig angående din förfrågan.',
    },
    support: {
      title: 'Det är bra om du skickar med',
      items: [
        'Bostadens område eller adress',
        'Bostadstyp och antal rum',
        'Nuvarande möbleringsnivå',
        'Nuvarande skick',
        'Om du vill ha endast setup eller bredare stöd',
      ],
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

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    propertyType: t.form.propertyTypes[0],
    rooms: '',
    furnished: t.form.furnishedOptions[0],
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({ loading: false, error: '', success: '' });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.area.trim() ||
      !formData.propertyType.trim()
    ) {
      setStatus({
        loading: false,
        error: t.form.validation,
        success: '',
      });
      return;
    }

    try {
      setStatus({ loading: true, error: '', success: '' });

      const response = await fetch('/api/property-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Request failed');
      }

      setStatus({
        loading: false,
        error: '',
        success: t.form.success,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        area: '',
        propertyType: t.form.propertyTypes[0],
        rooms: '',
        furnished: t.form.furnishedOptions[0],
        message: '',
      });
    } catch (error) {
      setStatus({
        loading: false,
        error: t.form.error,
        success: '',
      });
    }
  }

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
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.intro.eyebrow}
            title={t.intro.title}
            text={t.intro.text}
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
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

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white">{t.support.title}</h3>

              <div className="mt-6 space-y-4">
                {t.support.items.map((item) => (
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

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              {t.form.title}
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">{t.form.text}</p>

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.name}
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.email}
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.phone}
                  </label>
                  <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.area}
                  </label>
                  <input
                    name="area"
                    type="text"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.propertyType}
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  >
                    {t.form.propertyTypes.map((option) => (
                      <option key={option} value={option} className="bg-slate-950">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.rooms}
                  </label>
                  <input
                    name="rooms"
                    type="text"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.furnished}
                  </label>
                  <select
                    name="furnished"
                    value={formData.furnished}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  >
                    {t.form.furnishedOptions.map((option) => (
                      <option key={option} value={option} className="bg-slate-950">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-slate-300">
                    {t.form.fields.message}
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  />
                </div>
              </div>

              {status.error ? (
                <p className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {status.error}
                </p>
              ) : null}

              {status.success ? (
                <p className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  {status.success}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status.loading}
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.loading ? t.form.sending : t.form.submit}
              </button>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {t.form.disclaimer}
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}