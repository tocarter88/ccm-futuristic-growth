import { Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--section-dark))] py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--glow-primary))] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              CCM Growth Labs
            </h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              We transform startups and local businesses into recognizable brands through data-driven marketing strategies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="mailto:contact@ccmgrowthlabs.com"
                className="w-10 h-10 rounded-lg bg-accent/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-primary-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6 relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Paid Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Social Media Growth
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6 relative inline-block">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#work" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6 relative inline-block">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent" />
            </h4>
            <p className="text-primary-foreground/70 mb-4 text-sm">
              Subscribe to our newsletter for marketing tips and updates.
            </p>
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button size="icon" className="bg-accent hover:bg-accent/90 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} CCM Growth Labs. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
