import { useState, useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital marketing services including social media management, content creation, SEO optimization, paid advertising campaigns, email marketing, and brand strategy development.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results vary depending on the service and your goals. Paid advertising can show results within weeks, while SEO and organic growth strategies typically show significant results within 3-6 months. We provide transparent reporting so you can track progress every step of the way.',
  },
  {
    question: 'What makes your agency different?',
    answer: 'We focus on data-driven strategies tailored to your specific business goals. Unlike larger agencies, you get direct access to your marketing team with no middlemen. We pride ourselves on rapid execution, transparent communication, and measurable results.',
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer: 'We work with businesses across various industries. Our strategic approach is adaptable to different markets and niches. During our discovery phase, we dive deep into understanding your specific industry landscape and target audience.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer customized pricing based on your specific needs and goals. After our initial consultation, we create a tailored proposal that outlines the scope of work and investment required. We believe in transparent pricing with no hidden fees.',
  },
  {
    question: 'How involved will I need to be?',
    answer: 'We handle the heavy lifting, but your input is valuable. We typically need your involvement during the initial strategy phase and periodic check-ins for approvals and feedback. We adapt to your preferred level of involvement.',
  },
];

export const FAQSection = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-accent hover:no-underline py-6">
                  <span className="font-display text-lg md:text-xl font-semibold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
