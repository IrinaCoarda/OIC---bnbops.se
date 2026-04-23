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
    </main>
  );
}
