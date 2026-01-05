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
import cosmicBg from '@/assets/cosmic-bg.jpg';

const Index = () => {
  return (
    <main 
      className="min-h-screen bg-background overflow-x-hidden relative"
      style={{
        backgroundImage: `url(${cosmicBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-background/80 pointer-events-none" />
      
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
