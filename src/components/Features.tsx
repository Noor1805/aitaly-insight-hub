import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  AlertTriangle, 
  TrendingUp, 
  PieChart, 
  Smartphone, 
  Users, 
  FileText,
  Shield,
  Clock
} from "lucide-react";
import SplitText from './SplitText';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Business Brain",
      description: "Remembers, thinks, suggests, reports, and warns — your intelligent business assistant that never sleeps.",
      color: "text-primary"
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts",
      description: "Get instant notifications for dues, GST deadlines, stock shortages, and data mismatches before they become problems.",
      color: "text-destructive"
    },
    {
      icon: TrendingUp,
      title: "Profit Booster Suggestions",
      description: "AI analyzes your data to suggest actionable strategies for increasing revenue and reducing costs.",
      color: "text-success"
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "Beautiful charts for sales, profit, expenses, and trends that make sense of your business performance.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Mobile Dashboard",
      description: "Access your business insights anywhere with our responsive mobile dashboard and cloud backup.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Multi-Level Access",
      description: "Set different access levels for Owner, Staff, and CA with appropriate permissions for each role.",
      color: "text-muted-foreground"
    },
    {
      icon: FileText,
      title: "Daily/Weekly Reports",
      description: "Automated business summaries delivered to your WhatsApp or email in simple, understandable language.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with encrypted data transmission and secure cloud storage for peace of mind.",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Real-time Sync",
      description: "Instant synchronization with your Tally data ensures you always have the latest business information.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitText
            text="Everything Your Business Brain Needs"
            className="text-2xl text-center font-orbitron md:text-5xl"
            delay={100}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            From intelligent monitoring to actionable insights, Ai Tally transforms your Tally data 
            into a competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover-lift transition-spring gradient-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-orbitron font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;