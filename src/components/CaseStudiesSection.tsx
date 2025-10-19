import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Placeholder data - will be updated with real links later
const caseStudies = [
  {
    id: 1,
    title: 'Case Study 1',
    client: 'Client Name',
    description: 'Brief description of the case study and results achieved.',
    metrics: ['Metric 1', 'Metric 2', 'Metric 3'],
    link: '#',
  },
  {
    id: 2,
    title: 'Case Study 2',
    client: 'Client Name',
    description: 'Brief description of the case study and results achieved.',
    metrics: ['Metric 1', 'Metric 2', 'Metric 3'],
    link: '#',
  },
  {
    id: 3,
    title: 'Case Study 3',
    client: 'Client Name',
    description: 'Brief description of the case study and results achieved.',
    metrics: ['Metric 1', 'Metric 2', 'Metric 3'],
    link: '#',
  },
];

export const CaseStudiesSection = () => {
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
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our success stories and the results we've delivered for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">{study.client}</p>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {study.description}
                </p>

                <div className="space-y-2 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn"
                  asChild
                >
                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    <span>View Case Study</span>
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
