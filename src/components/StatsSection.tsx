import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 3, suffix: '', label: 'Clients Helped' },
  { value: 5, suffix: '', label: 'Campaigns Run' },
  { value: 2.5, suffix: 'x', label: 'Average Growth' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' }
];

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          
          // Animate counters
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.suffix === 'x' ? parseFloat(current.toFixed(1)) : Math.floor(current);
                  return newCounts;
                });
              }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-[hsl(var(--section-light))] to-[hsl(var(--background))] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2">
                <div className="text-5xl md:text-7xl font-display font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-500">
                  <span className="animate-count-up">
                    {counts[index]}
                  </span>
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
