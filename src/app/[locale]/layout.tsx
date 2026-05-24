import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import { isLocale, locales, localeMeta, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const title =
    locale === "ar"
      ? "النظام الأول | كيماويات البناء والديكور"
      : "The First System | Decorative & Construction Chemicals";
  const description =
    locale === "ar"
      ? "الجهة الرائدة في كيماويات البناء والديكور المتقدمة في المملكة. الوكيل الحصري لـ Creative Concrete Concepts منذ 2015."
      : "The Kingdom's leading authority in advanced decorative and construction chemicals. Exclusive agent for Creative Concrete Concepts since 2015.";
  return {
    title,
    description,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      siteName: dict.brand.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
  };
}

export default async function LocaleLayout(props: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const meta = localeMeta[typedLocale];

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexArabic.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Header locale={typedLocale} dict={dict} />
        <main>{props.children}</main>
        <Footer locale={typedLocale} dict={dict} />
        <WhatsAppFab locale={typedLocale} />
      </body>
    </html>
  );
}
