export const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'gradient' | 'wave' }) => {
  if (variant === 'wave') {
    return (
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--glow-primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--glow-secondary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--glow-primary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="relative w-full h-px my-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-2 h-2 bg-accent rounded-full shadow-glow animate-glow-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-full flex items-center justify-center my-20">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/30" />
      <div className="mx-8 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
        <div className="w-2 h-2 rounded-full bg-accent/60 animate-glow-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 rounded-full bg-accent/30 animate-glow-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/30" />
    </div>
  );
};
