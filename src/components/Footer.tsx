import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--gradient-hero)] text-primary">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center">
                <img className="w-60" src="/assets/logo.svg" alt="" />
              </div>
            </div>
            
            <p className="text-primary/80 mb-6 max-w-md leading-relaxed">
              The AI-powered business brain that transforms your Tally data into actionable insights. 
              Smart, simple, and designed for Indian businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="cursor-target border-2 hover:border-white border-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5" />
                Get WhatsApp Demo
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold font-orbitron mb-4">Quick Links</h3>
            <ul className="space-y-3 ">
              {[
                "How It Works",
                "Features", 
                "Pricing",
                "Testimonials",
                "FAQ",
                "Contact"
              ].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} 
                     className="text-primary hover:text-black transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold font-orbitron mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-primary">+91 9841057742</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-primary">support@aitally.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-primary text-sm">
                  Ceebros Building, 11/32 A3<br />
                  Cenotaph Road, Chennai
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary text-sm">
            © 2024 Ai Tally. All rights reserved. Made with <span className="animate-pulse">❤️ </span>for Indian businesses.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-primary hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-primary hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;