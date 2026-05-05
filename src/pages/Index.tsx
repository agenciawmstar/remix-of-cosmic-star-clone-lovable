import { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import cosmicBg from '@/assets/cosmic-bg.webp';
import cosmicBgMobile from '@/assets/cosmic-bg-mobile.webp';
import { useResponsiveImage } from '@/hooks/useResponsiveImage';

const ProblemSection     = lazy(() => import('@/components/ProblemSection').then(m => ({ default: m.ProblemSection })));
const UrgencySection     = lazy(() => import('@/components/UrgencySection').then(m => ({ default: m.UrgencySection })));
const StorySection       = lazy(() => import('@/components/StorySection').then(m => ({ default: m.StorySection })));
const SolutionsSection   = lazy(() => import('@/components/SolutionsSection').then(m => ({ default: m.SolutionsSection })));
const StatsSection       = lazy(() => import('@/components/StatsSection').then(m => ({ default: m.StatsSection })));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection     = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer             = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const ExitIntentPopup    = lazy(() => import('@/components/ExitIntentPopup').then(m => ({ default: m.ExitIntentPopup })));
const WhatsAppButton     = lazy(() => import('@/components/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

const Index = () => {
  const bgImage = useResponsiveImage(cosmicBg, cosmicBgMobile);

  return (
    <main
      className="min-h-screen bg-background overflow-x-hidden relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="fixed inset-0 bg-background/80 pointer-events-none" />

      <Suspense fallback={null}><ExitIntentPopup /></Suspense>
      <Suspense fallback={null}><WhatsAppButton /></Suspense>

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <Suspense fallback={null}><ProblemSection /></Suspense>
        <Suspense fallback={null}><UrgencySection /></Suspense>
        <Suspense fallback={null}><StorySection /></Suspense>
        <Suspense fallback={null}><SolutionsSection /></Suspense>
        <Suspense fallback={null}><StatsSection /></Suspense>
        <Suspense fallback={null}><TestimonialsSection /></Suspense>
        <Suspense fallback={null}><ContactSection /></Suspense>
        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    </main>
  );
};

export default Index;
