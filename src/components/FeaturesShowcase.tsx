import { useState, useEffect, useRef } from 'react';
import { Zap, Target, TrendingUp, Sparkles, BarChart3, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Data-driven strategies tailored to your unique business goals',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Quick turnaround times without compromising on quality',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Growth',
    description: 'Track your success with transparent, real-time analytics',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: Sparkles,
    title: 'Creative Excellence',
    description: 'Stand out with innovative campaigns that capture attention',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: BarChart3,
    title: 'ROI Focused',
    description: 'Every campaign optimized for maximum return on investment',
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Direct access to your marketing team, no middlemen',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
];

export const FeaturesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, strategy, and execution to deliver results that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="p-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
