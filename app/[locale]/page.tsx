import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
import { IconMarquee } from '@/components/IconMarquee';
import { InnovationSection } from '@/components/home/InnovationSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { ArchitectureSection } from '@/components/home/ArchitectureSection';

import BracketsSectionClient from '@/components/home/BracketsSectionClient';

// Heavy/interactive sections loaded only when needed
const JoinSection = dynamic(
  () => import('@/components/home/JoinSection').then(m => ({ default: m.JoinSection }))
);
const ShowcaseSection = dynamic(
  () => import('@/components/home/ShowcaseSection').then(m => ({ default: m.ShowcaseSection }))
);
const PillarsSection = dynamic(
  () => import('@/components/home/PillarsSection').then(m => ({ default: m.PillarsSection }))
);
const GiantsSection = dynamic(
  () => import('@/components/home/GiantsSection').then(m => ({ default: m.GiantsSection }))
);
const CTASection = dynamic(
  () => import('@/components/home/CTASection').then(m => ({ default: m.CTASection }))
);
const ReviewsSection = dynamic(
  () => import('@/components/home/ReviewsSection').then(m => ({ default: m.ReviewsSection }))
);

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "By Luxor",
    "url": "https://byluxor.com",
    "logo": "https://byluxor.com/logo.png",
    "sameAs": [
      "https://x.com/byluxor",
      "https://github.com/byluxor"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Hero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        ctaText={t('cta_main')}
        ctaLink="/luxor"
      />

      <IconMarquee />

      <InnovationSection />
      <PhilosophySection />
      <ArchitectureSection />

      <BracketsSectionClient />

      <JoinSection />

      <ShowcaseSection />

      <PillarsSection />

      <GiantsSection />

      <CTASection />

      <ReviewsSection />
    </div>
  );
}
