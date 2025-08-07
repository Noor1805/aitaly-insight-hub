import { Button } from "@/components/ui/button";

import { Brain, MessageCircle, BarChart3, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--gradient-hero)]">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Business Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-poppins md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Your{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              24/7 Business Brain
            </span>
            ,
            <br />
            Powered by AI
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in">
            Ai Tally connects to your Tally software and delivers smart business
            insights, alerts, and suggestions in plain English — straight to
            your phone.
          </p>

          {/* Value proposition */}
          <p className="text-lg text-primary font-medium mb-12 animate-fade-in">
            "You run the business. Ai Tally runs the numbers."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto cursor-target"
            >
              <MessageCircle className="w-5 h-5" />
              Get WhatsApp Demo
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto cursor-target"
            >
              <BarChart3 className="w-5 h-5" />
              View Live Dashboard
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-stagger">
            <div className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover-lift">
              <Brain className="w-6 h-6 text-primary" />
              <span className="font-medium">24/7 AI Monitoring</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover-lift">
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="font-medium">WhatsApp Reports</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover-lift">
              <Smartphone className="w-6 h-6 text-primary" />
              <span className="font-medium">Mobile Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
