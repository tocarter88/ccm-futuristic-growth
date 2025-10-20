import { useState, useEffect, useRef } from 'react';
import { Lightbulb, Target, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We dive deep into your business, audience, and goals to understand what makes you unique.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Strategy',
    description: 'We craft a data-driven marketing strategy tailored to your objectives and market position.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Execution',
    description: 'Our team launches multi-channel campaigns with precision, creativity, and attention to detail.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart,
    title: 'Optimization',
    description: 'We continuously analyze performance and refine strategies to maximize your ROI.',
    color: 'from-green-500 to-emerald-500',
  },
];

export const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-accent/20 via-accent to-accent/20 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`inline-block p-6 rounded-2xl bg-card/80 backdrop-blur-sm border-2 transition-all duration-500 ${
                        isActive ? 'border-accent shadow-xl scale-105' : 'border-border/50'
                      }`}>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon in center */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'scale-125 shadow-2xl' : 'scale-100'
                      }`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-xl opacity-50 transition-opacity duration-500 ${
                        isActive ? 'opacity-70' : 'opacity-0'
                      }`} />
                    </div>

                    {/* Spacer for layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? 'w-8 bg-accent' : 'w-2 bg-accent/30'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
