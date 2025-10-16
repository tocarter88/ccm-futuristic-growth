import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StatsSection } from '@/components/StatsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { SectionDivider } from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="gradient" />
      <div id="about">
        <AboutSection />
      </div>
      <SectionDivider variant="wave" />
      <div id="services">
        <ServicesSection />
      </div>
      <StatsSection />
      <SectionDivider />
      <div id="work">
        <PortfolioSection />
      </div>
      <SectionDivider variant="gradient" />
      <TestimonialsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
