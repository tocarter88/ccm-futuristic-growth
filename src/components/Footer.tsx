import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--section-dark))] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              CCM Growth Labs
            </h3>
            <p className="text-primary-foreground/60">
              Growing brands into recognizable names
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </a>
            <a 
              href="mailto:contact@ccmgrowthlabs.com"
              className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} CCM Growth Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
