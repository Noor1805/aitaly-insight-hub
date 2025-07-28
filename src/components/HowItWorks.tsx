import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, MessageCircle, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: "Connect Your Tally",
      description: "Secure one-time setup to connect Ai Tally with your existing Tally software. No data migration needed.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Brain,
      title: "AI Reads & Analyzes",
      description: "Our AI continuously monitors your business data, identifies patterns, and generates intelligent insights.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: MessageCircle,
      title: "Get Smart Reports",
      description: "Receive daily summaries, alerts, and suggestions via WhatsApp, email, or mobile dashboard.",
      color: "bg-success/10 text-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            How Ai Tally Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Get started in minutes and transform your business intelligence forever
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in">
                <Card className="border-border hover-lift transition-spring h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Benefits showcase */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Business Owners Love Ai Tally
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                "No more manual Tally confusion",
                "Never miss GST deadlines again",
                "Spot profit opportunities instantly",
                "Get insights in plain English"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="mx-auto">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;