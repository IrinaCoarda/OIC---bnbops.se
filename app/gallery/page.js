import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import { supabaseServer } from '../../lib/supabaseServer';

const content = {
  en: {
    hero: {
      badge: 'Gallery',
      title: 'Visual proof of what a stronger launch can look like',
      subtitle:
        'This page shows the kind of transformation, presentation quality and guest-ready standard that helps a property feel more launch-ready from the start.',
    },
    sectionTitle: 'Example transformation categories',
    bridge:
      'A stronger presentation is not cosmetic. It directly shapes perceived quality before a guest ever books.',
    caseStudy: {
      eyebrow: 'CASE STUDY BLOCK',
      title: 'Before and after direction',
      text:
        'Even when the physical changes are simple, the shift in impression can be major. This is what turns a room from basic to more launch-ready.',
      before: 'Before',
      after: 'After',
      detailsTitle: 'What changed',
      fallbackValueCards: [
        {
          title: 'Presentation upgrade',
          text: 'From underprepared and visually flat to more structured, styled and guest-ready.',
        },
        {
          title: 'Booking confidence',
          text: 'A stronger first impression helps owners feel more confident when taking the next launch step.',
        },
        {
          title: 'Launch-readiness',
          text: 'The room feels closer to listing standard and easier to position professionally.',
        },
      ],
      ctaPrimary: 'Request this level of setup',
      ctaSecondary: 'See how it works',
    },
  },
  sv: {
    hero: {
      badge: 'Galleri',
      title: 'Visuellt bevis på hur en starkare lansering kan se ut',
      subtitle:
        'Den här sidan visar vilken typ av transformation, presentationskvalitet och gästredo standard som hjälper en bostad att kännas mer lanseringsredo redan från start.',
    },
    sectionTitle: 'Exempel på transformationskategorier',
    bridge:
      'En starkare presentation är inte bara kosmetisk. Den påverkar direkt den upplevda kvaliteten redan innan en gäst bokar.',
    caseStudy: {
      eyebrow: 'CASE STUDY BLOCK',
      title: 'Före och efter riktning',
      text:
        'Även när de fysiska förändringarna är relativt enkla kan skiftet i intryck bli stort. Det är så ett rum går från enkelt till mer lanseringsredo.',
      before: 'Före',
      after: 'Efter',
      detailsTitle: 'Vad som förändrades',
      fallbackValueCards: [
        {
          title: 'Förbättrad presentation',
          text: 'Från oförberedd och visuellt svag till mer strukturerad, stylad och gästredo.',
        },
        {
          title: 'Trygghet inför bokning',
          text: 'Ett starkare första intryck hjälper ägaren att känna större trygghet inför nästa steg mot lansering.',
        },
        {
          title: 'Lanseringsredo känsla',
          text: 'Rummet känns närmare annonsstandard och lättare att positionera professionellt.',
        },
      ],
      ctaPrimary: 'Begär denna nivå av setup',
      ctaSecondary: 'Se hur det fungerar',
    },
  },
};

function normalizeUrl(url) {
  if (!url) return null;
  if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('/')) {
    return url;
  }
  return `/${url}`;
}

function makeHref(path, lang) {
  return lang === 'sv' ? `${path}?lang=sv` : path;
}

function field(item, base, lang) {
  return item?.[`${base}_${lang}`] || item?.[base] || '';
}

function SectionTitle({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
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

function CaseStudyBlock({ t, featured, lang }) {
  if (!featured) return null;

  const title = field(featured, 'title', lang);
  const resultTitle =
    field(featured, 'result_title', lang) || (lang === 'sv' ? 'Resultat' : 'Result');
  const resultText = field(featured, 'result_text', lang);
  const performanceHook = field(featured, 'performance_hook', lang);

  const details = [
    field(featured, 'detail_1', lang),
    field(featured, 'detail_2', lang),
    field(featured, 'detail_3', lang),
    field(featured, 'detail_4', lang),
  ].filter(Boolean);

  const beforeImage = normalizeUrl(featured.before_image_url);
  const afterImage = normalizeUrl(featured.after_image_url);

  if (!beforeImage || !afterImage) return null;

  return (
    <section
      id="featured-case"
      className="border-y border-white/10 bg-white/[0.04] px-6 py-24 lg:px-8 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={t.caseStudy.eyebrow}
          title={t.caseStudy.title}
          text={t.caseStudy.text}
        />

        <div className="mt-14 grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={beforeImage}
                    alt={t.caseStudy.before}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/80 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    {t.caseStudy.before}
                  </div>
                  <div className="absolute left-5 bottom-5 text-lg font-semibold uppercase tracking-[0.2em] text-white/90">
                    {t.caseStudy.before}
                  </div>
                </div>
              </div>

              <div className="hidden h-full items-center justify-center lg:flex">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-14 w-[2px] bg-white/10" />
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                    →
                  </div>
                  <div className="h-14 w-[2px] bg-white/10" />
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={afterImage}
                    alt={t.caseStudy.after}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-400/15 px-4 py-2 text-sm text-cyan-100 backdrop-blur-sm">
                    {t.caseStudy.after}
                  </div>
                  <div className="absolute left-5 bottom-5 text-lg font-semibold uppercase tracking-[0.2em] text-white/90">
                    {t.caseStudy.after}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-8 shadow-[0_20px_60px_rgba(8,145,178,0.08)] md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {resultTitle}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {title}
              </h3>
              {resultText ? (
                <p className="mt-5 text-lg leading-8 text-slate-200">{resultText}</p>
              ) : null}
              {performanceHook ? (
                <p className="mt-4 text-sm font-medium leading-7 text-cyan-200">
                  {performanceHook}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={makeHref('/contact', lang)}
                  className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                >
                  {t.caseStudy.ctaPrimary}
                </Link>

                <Link
                  href={makeHref('/how-it-works', lang)}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {t.caseStudy.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {details.length > 0 ? (
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                <h3 className="text-2xl font-semibold text-white">
                  {t.caseStudy.detailsTitle}
                </h3>
                <div className="mt-6 space-y-4">
                  {details.map((item) => (
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
            ) : null}

            {t.caseStudy.fallbackValueCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function GalleryPage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === 'sv' ? 'sv' : 'en';
  const t = content[lang];

  let data = [];
  try {
    const result = await supabaseServer
      .from('gallery_cases')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    data = result.data || [];
  } catch (error) {
    console.error('Gallery fetch failed:', error);
  }

  const featured = data.find((item) => item.is_featured) || null;
  const showcaseCases = data.filter((item) => normalizeUrl(item.showcase_image_url));

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
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.sectionTitle}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {showcaseCases.map((item) => {
              const image = normalizeUrl(item.showcase_image_url);
              const title = field(item, 'title', lang);
              const text = field(item, 'short_description', lang);
              const label = field(item, 'showcase_label', lang) || title;

              return (
                <Link
                  key={item.id}
                  href={`${makeHref('/gallery', lang)}#case-${item.id}`}
                  className="group block overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]"
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                    <div className="absolute left-5 right-5 bottom-5">
                      <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm">
                        {label}
                      </span>
                    </div>
                  </div>

                  <div className="min-h-[190px] p-7 md:p-8">
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                    <p className="mt-4 leading-8 text-slate-300">{text}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-slate-300">
            {t.bridge}
          </div>
        </div>
      </section>

      <CaseStudyBlock t={t} featured={featured} lang={lang} />
    </main>
  );
}