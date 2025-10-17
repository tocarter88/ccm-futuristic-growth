import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "EcoBlend Co.",
    role: "Founder & CEO",
    content: "CCM Growth Labs helped us triple our website traffic in just one month. Their strategic approach to paid advertising exceeded all our expectations.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    company: "TechFlow Solutions",
    role: "Marketing Director",
    content: "The website they built for us is stunning and converts like crazy. Our lead generation increased by 250% within the first quarter.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Artisan Bakery",
    role: "Owner",
    content: "From zero to hero! They built our brand from the ground up and our local presence has never been stronger. Highly recommend!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
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
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--glow-primary))] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--glow-secondary))] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it — hear what our clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
               <div className="group relative">
                {/* RGB glow effect on hover only */}
                <div className="absolute -inset-0.5 bg-gradient-rgb opacity-0 group-hover:opacity-75 rounded-2xl blur-sm transition-opacity duration-500 animate-border-flow bg-[length:200%_200%]" />
                
                <div className="relative bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 h-full hover:bg-card/20 transition-all duration-500">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-primary-foreground/10 pt-6">
                    <div className="font-bold text-primary-foreground text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-accent text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-primary-foreground/60 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
