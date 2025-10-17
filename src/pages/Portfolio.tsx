import { Navbar } from '@/components/Navbar';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { SectionDivider } from '@/components/SectionDivider';

const Portfolio = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <PortfolioSection />
        <SectionDivider variant="gradient" />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
