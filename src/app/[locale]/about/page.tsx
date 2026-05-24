import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";

export default async function AboutPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.about;
  const isAr = locale === "ar";
  const arrow = isAr ? "ArrowLeft" : "ArrowRight";

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} body={t.hero.body} bgImage="/images/about_hero.png" />

      {/* STATS BAND */}
      <Section size="sm" className="-mt-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {t.stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="flex items-baseline gap-2">
                <div className="text-display text-3xl font-medium md:text-4xl">
                  {s.value}
                </div>
                {s.unit && (
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-fg-subtle)]">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 text-sm text-[var(--color-fg-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* STORY */}
      <Section size="md">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={t.story.eyebrow} title={t.story.title} />
            <div className="relative mt-8">
              {/* Outer soft aura glow */}
              <div className="absolute -inset-2 rounded-[24px] bg-gradient-to-tr from-[var(--color-accent)]/15 to-[var(--color-accent-2)]/10 blur-xl opacity-75 animate-halo pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl aspect-[4/3] group animate-float-slow">
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090d]/60 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="/images/concrete_construction.png"
                  alt={isAr ? "كيماويات البناء والديكور السعودية" : "Saudi Decorative and Construction Chemicals"}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
            {t.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* VALUES */}
      <Section size="md" className="border-t border-[var(--color-border)]">
        <SectionHeader
          eyebrow={t.values.eyebrow}
          title={t.values.title}
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl">
          {t.values.items.map((v) => (
            <Card key={v.title} interactive className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Icon name={v.icon as IconName} size={22} />
              </div>
              <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-fg-muted)]">
                {v.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section size="md">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-14 text-center">
          <div className="absolute inset-0 hero-grid-bg pointer-events-none opacity-50" />
          <div className="relative">
            <h2 className="text-display text-3xl font-medium md:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
              {t.cta.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href={`/${locale}/contact`} size="lg" trailingIcon={arrow}>
                {t.cta.primary}
              </Button>
              <Button href={`/${locale}/products`} variant="secondary" size="lg">
                {t.cta.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
