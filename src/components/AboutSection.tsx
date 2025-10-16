import { useEffect, useRef, useState } from 'react';

const features = [
  "Ad Campaigns that Convert.",
  "Websites that Impress.",
  "Growth You Can Measure."
];

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 bg-[hsl(var(--section-light))] relative overflow-hidden"
    >
      {/* Parallax Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--glow-primary))] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--glow-secondary))] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Your Growth Partner
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--glow-primary))] to-[hsl(var(--glow-secondary))] mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            CCM Growth Labs is a new marketing agency focused on helping other startups scale 
            affordably and effectively. We combine data-driven strategies with creative excellence 
            to deliver measurable results.
          </p>
        </div>

        {/* Animated Feature Slider */}
        <div className="relative h-32 flex items-center justify-center overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute text-4xl md:text-5xl font-bold transition-all duration-700 ${
                index === currentFeature
                  ? 'opacity-100 translate-x-0'
                  : index < currentFeature
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--glow-primary))] to-[hsl(var(--glow-secondary))]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentFeature
                  ? 'bg-accent w-8'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
