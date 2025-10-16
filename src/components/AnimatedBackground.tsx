export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-accent/10 rotate-45 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/5 rounded-lg animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[hsl(var(--glow-primary))]/20 to-[hsl(var(--glow-secondary))]/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--glow-secondary))]/10 to-transparent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--glow-primary))" />
            <stop offset="100%" stopColor="hsl(var(--glow-secondary))" />
          </linearGradient>
        </defs>
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </svg>
    </div>
  );
};
