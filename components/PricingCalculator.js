'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

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

function estimatePackage({
  city,
  propertyType,
  rooms,
  furnished,
  condition,
  photoSupport,
  opsPlanning,
  language,
}) {
  let score = 0;

  if (propertyType === 'Townhouse' || propertyType === 'Radhus') score += 2;
  if (propertyType === 'Villa') score += 4;
  if (rooms === '2') score += 2;
  if (rooms === '3') score += 4;
  if (rooms === '4+') score += 6;
  if (furnished === 'Partly' || furnished === 'Delvis') score += 2;
  if (furnished === 'No' || furnished === 'Nej') score += 4;

  if (
    condition === 'Needs light improvement' ||
    condition === 'Behöver lätt förbättring'
  ) {
    score += 2;
  }

  if (
    condition === 'Needs more preparation' ||
    condition === 'Behöver mer förberedelse'
  ) {
    score += 5;
  }

  if (photoSupport === 'Yes' || photoSupport === 'Ja') score += 4;
  if (opsPlanning === 'Yes' || opsPlanning === 'Ja') score += 5;
  if (city === 'Stockholm') score += 1;

  let pkg;
  let range;

  if (score <= 6) {
    pkg = 'start';
    range =
      language === 'en'
        ? '12,900 – 17,900 SEK excl. VAT'
        : '12 900 – 17 900 SEK exkl. moms';
  } else if (score <= 14) {
    pkg = 'launch';
    range =
      language === 'en'
        ? '21,900 – 27,900 SEK excl. VAT'
        : '21 900 – 27 900 SEK exkl. moms';
  } else {
    pkg = 'premium';
    range =
      language === 'en'
        ? '34,900 – 44,900 SEK excl. VAT'
        : '34 900 – 44 900 SEK exkl. moms';
  }

  return { pkg, range };
}

export default function PricingCalculator({ lang, content }) {
  const t = content;

  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [rooms, setRooms] = useState('');
  const [furnished, setFurnished] = useState('');
  const [condition, setCondition] = useState('');
  const [photoSupport, setPhotoSupport] = useState('');
  const [opsPlanning, setOpsPlanning] = useState('');

  useEffect(() => {
    setCity(t.calculator.options.city[0]);
    setPropertyType(t.calculator.options.propertyType[0]);
    setRooms(t.calculator.options.rooms[0]);
    setFurnished(t.calculator.options.furnished[0]);
    setCondition(t.calculator.options.condition[0]);
    setPhotoSupport(t.calculator.options.yesNo[1]);
    setOpsPlanning(t.calculator.options.yesNo[1]);
  }, [t]);

  const result = useMemo(() => {
    if (
      !city ||
      !propertyType ||
      !rooms ||
      !furnished ||
      !condition ||
      !photoSupport ||
      !opsPlanning
    ) {
      return null;
    }

    return estimatePackage({
      city,
      propertyType,
      rooms,
      furnished,
      condition,
      photoSupport,
      opsPlanning,
      language: lang,
    });
  }, [city, propertyType, rooms, furnished, condition, photoSupport, opsPlanning, lang]);

  const cardMap = {
    start: t.cards.start,
    launch: t.cards.launch,
    premium: t.cards.premium,
  };

  const recommendedCard = result ? cardMap[result.pkg] : t.cards.launch;

  return (
    <section className="border-y border-white/10 bg-white/5 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={t.calculator.eyebrow}
          title={t.calculator.title}
          text={t.calculator.text}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.city}
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.city.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.propertyType}
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.propertyType.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.rooms}
                </label>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.rooms.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.furnished}
                </label>
                <select
                  value={furnished}
                  onChange={(e) => setFurnished(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.furnished.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.condition}
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.condition.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.photoSupport}
                </label>
                <select
                  value={photoSupport}
                  onChange={(e) => setPhotoSupport(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.yesNo.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">
                  {t.calculator.fields.opsPlanning}
                </label>
                <select
                  value={opsPlanning}
                  onChange={(e) => setOpsPlanning(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  {t.calculator.options.yesNo.map((option) => (
                    <option key={option} value={option} className="bg-slate-950">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t.calculator.result.recommended}
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              {recommendedCard.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-cyan-200">
              {recommendedCard.micro}
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              {recommendedCard.desc}
            </p>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
              <p className="text-sm text-slate-400">{t.calculator.result.estimate}</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-300">
                {result
                  ? result.range
                  : lang === 'en'
                  ? 'Select your property details'
                  : 'Välj dina bostadsuppgifter'}
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              {t.calculator.result.validation}
            </p>

            <ul className="mt-8 space-y-4">
              {recommendedCard.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-7 text-slate-400">
              {t.calculator.result.note}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={makeHref('/contact', lang)}
                className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                {t.calculator.result.ctaPrimary}
              </Link>

              <Link
                href={makeHref('/contact', lang)}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.calculator.result.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}