import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Crown, Building2 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small businesses and shops",
      icon: MessageCircle,
      features: [
        "Connect 1 Tally company",
        "Daily WhatsApp reports",
        "Basic AI alerts",
        "Mobile dashboard",
        "Email support",
        "GST deadline reminders"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional", 
      price: "₹1,999",
      period: "/month",
      description: "For growing businesses with multiple locations",
      icon: Crown,
      features: [
        "Connect up to 3 Tally companies", 
        "Advanced AI insights",
        "Profit optimization suggestions",
        "Multi-user access (5 users)",
        "Weekly detailed reports",
        "Priority WhatsApp support",
        "Custom alert settings",
        "Visual analytics & charts"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹4,999", 
      period: "/month",
      description: "For large businesses and CA firms",
      icon: Building2,
      features: [
        "Unlimited Tally companies",
        "Advanced AI business brain",
        "Dedicated account manager",
        "Unlimited users",
        "Custom integrations",
        "API access",
        "White-label reports", 
        "24/7 phone support",
        "Training & onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-orbitron md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Choose the perfect plan for your business. Start with a 14-day free trial, no credit card required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-stagger">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border hover-lift transition-spring ${
                plan.popular ? 'border-primary shadow-brand scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-orbitron font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Money back guarantee */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-success" />
            <span className="text-success font-medium">14-day free trial • No setup fees • Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;