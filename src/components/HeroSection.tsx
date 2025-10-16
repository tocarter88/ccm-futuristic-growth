import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { AnimatedBackground } from './AnimatedBackground';
import { GridBackground } from './GridBackground';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--hero-gradient-start))]/80 to-[hsl(var(--hero-gradient-start))]" />
      
      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--glow-primary))] rounded-full blur-3xl opacity-20 animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--glow-secondary))] rounded-full blur-3xl opacity-10 animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      <GridBackground />
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full mb-8 text-accent animate-slide-in-left">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Award-Winning Marketing Agency</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight leading-[1.1]">
            We grow new brands into{' '}
            <span className="relative inline-block group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--glow-primary))] to-[hsl(var(--glow-secondary))] animate-shimmer bg-[length:200%_auto]">
                recognizable names
              </span>
              {/* Reflection shine effect */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine" />
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,7 Q25,2 50,7 T100,7" stroke="url(#heroUnderline)" strokeWidth="3" fill="none" className="animate-pulse" />
                <defs>
                  <linearGradient id="heroUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--glow-primary))" />
                    <stop offset="100%" stopColor="hsl(var(--glow-secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We help startups, e-commerce brands, and local businesses grow through{' '}
            <span className="font-semibold text-accent">results-driven marketing</span>.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
              <span>200+ Campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" style={{ animationDelay: '0.6s' }} />
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Get a Free Strategy Plan
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};
