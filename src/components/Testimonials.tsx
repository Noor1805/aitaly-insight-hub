import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohit Sharma",
      role: "FMCG Business Owner",
      location: "Mumbai",
      content: "Earlier I used to spend hours trying to understand Tally reports. Now Ai Tally sends me daily WhatsApp messages in simple Hindi-English that I can actually understand. My CA is also impressed!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Meena Patel",
      role: "Retail Store Owner",
      location: "Ahmedabad", 
      content: "Ai Tally saved me from a ₹50,000 GST penalty by alerting me 3 days before the deadline. It's like having a smart accountant working 24/7 for my business.",
      rating: 5,
      avatar: "MP"
    },
    {
      name: "Vijay Gupta",
      role: "Pharmaceutical Distributor",
      location: "Delhi",
      content: "The profit suggestions are amazing! Ai Tally identified slow-moving stock and suggested discount strategies that increased my monthly profit by 15%.",
      rating: 5,
      avatar: "VG"
    },
    {
      name: "Rashni Jain",
      role: "Textile Manufacturer",
      location: "Surat",
      content: "My staff can now access basic reports through their phones without touching the main Tally system. It has improved our efficiency tremendously.",
      rating: 5,
      avatar: "RJ"
    },
    {
      name: "Arjun Singh", 
      role: "Electronics Retailer",
      location: "Bangalore",
      content: "Best investment for my business! The daily reports help me make quick decisions. I can see profit margins, pending payments, and stock levels at a glance.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Priya Agarwal",
      role: "Beauty Products Distributor", 
      location: "Pune",
      content: "Ai Tally speaks my language! No more technical jargon. It explains everything in simple terms and even gives suggestions to improve my business.",
      rating: 5,
      avatar: "PA"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Real Stories from Real Business Owners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Join thousands of business owners who've transformed their operations with Ai Tally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover-lift transition-spring relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10,000+", label: "Business Owners" },
            { number: "₹50 Cr+", label: "Revenue Tracked" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "AI Monitoring" }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;