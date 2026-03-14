import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { UrgencySection } from '@/components/UrgencySection';
import { StorySection } from '@/components/StorySection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import cosmicBg from '@/assets/cosmic-bg.webp';
import cosmicBgMobile from '@/assets/cosmic-bg-mobile.webp';
import { useResponsiveImage } from '@/hooks/useResponsiveImage';

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
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-background/80 pointer-events-none" />
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProblemSection />
        <UrgencySection />
        <StorySection />
        <SolutionsSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
