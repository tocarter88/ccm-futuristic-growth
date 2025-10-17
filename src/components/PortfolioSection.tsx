import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Forge Pixel",
    category: "Creative Studio",
    description: "Modern creative studio showcase with stunning visuals",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    link: "https://forge-pixel.lovable.app/"
  },
  {
    title: "MindWave Zen",
    category: "Wellness Platform",
    description: "Calming meditation and mindfulness web experience",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    link: "https://mindwave-zen.lovable.app/"
  },
  {
    title: "Ember Cafe",
    category: "Restaurant Website",
    description: "Cozy cafe website with warm, inviting design",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
    link: "https://ember-cafe.lovable.app/"
  },
  {
    title: "GrowBloom",
    category: "Growth Marketing",
    description: "Dynamic marketing platform for scaling businesses",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop",
    link: "https://growbloom.lovable.app/"
  },
  {
    title: "Neurology Lift",
    category: "Healthcare Platform",
    description: "Professional neurology clinic website with modern aesthetics",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
    link: "https://neurology-lift.lovable.app/"
  }
];

export const PortfolioSection = () => {
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
      className="py-32 px-6 bg-[hsl(var(--section-light))]"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6 relative inline-block">
            <span className="relative">
              Our Work Speaks for Itself
              {/* Reflection shine effect */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent skew-x-12 animate-shine" />
              </span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--glow-primary))] to-[hsl(var(--glow-secondary))] mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`group relative block transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* RGB Glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-rgb opacity-0 group-hover:opacity-75 rounded-2xl blur-sm transition-opacity duration-500 animate-border-flow bg-[length:200%_200%]" />
              
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--overlay))] via-[hsl(var(--overlay))]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-12 h-12 mx-auto mb-4" />
                      <span className="text-lg font-semibold">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
