import { Navbar } from '@/components/Navbar';
import { ServicesSection } from '@/components/ServicesSection';
import { Footer } from '@/components/Footer';
import { SectionDivider } from '@/components/SectionDivider';

const Services = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
        <SectionDivider variant="gradient" />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
