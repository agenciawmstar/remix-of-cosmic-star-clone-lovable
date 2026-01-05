import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { UrgencySection } from '@/components/UrgencySection';
import { StorySection } from '@/components/StorySection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { StatsSection } from '@/components/StatsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <UrgencySection />
      <StorySection />
      <SolutionsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
