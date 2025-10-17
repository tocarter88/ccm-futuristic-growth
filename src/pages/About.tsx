import { Navbar } from '@/components/Navbar';
import { AboutSection } from '@/components/AboutSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';
import { SectionDivider } from '@/components/SectionDivider';

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <SectionDivider variant="wave" />
        <StatsSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
