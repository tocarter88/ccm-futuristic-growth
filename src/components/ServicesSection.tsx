import { useEffect, useRef, useState } from 'react';
import { Megaphone, Code, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "Data-driven Meta and Google Ads campaigns that maximize ROI and drive qualified leads to your business.",
    gradient: "from-[hsl(var(--glow-primary))] to-[hsl(var(--glow-secondary))]"
  },
  {
    icon: Code,
    title: "Website Optimization",
    description: "High-converting landing pages and websites designed to turn visitors into customers with seamless UX.",
    gradient: "from-[hsl(var(--glow-secondary))] to-[hsl(var(--glow-primary))]"
  },
  {
    icon: TrendingUp,
    title: "Brand Identity + Social Growth",
    description: "Build a memorable brand presence and grow your social following with strategic content and engagement.",
    gradient: "from-[hsl(var(--glow-primary))] to-[hsl(var(--accent))]"
  }
];

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--glow-primary))] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--glow-secondary))] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-primary-foreground/30 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 150} ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* RGB Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-rgb opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500 animate-border-flow bg-[length:200%_200%]" />
              
              <div className="relative bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:animate-glow-pulse`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--glow-primary))]/0 to-[hsl(var(--glow-secondary))]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
