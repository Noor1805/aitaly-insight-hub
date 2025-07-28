import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-orbitron md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Get started today and see how Ai Tally can revolutionize your business intelligence.
            Our team is here to help you every step of the way.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CTA Section */}
          <div className="animate-fade-in">
            <Card className="border-border gradient-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                  Start Your Free Trial Today
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">Setup in 15 minutes</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">Instant WhatsApp reports</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">No technical knowledge required</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Get WhatsApp Demo Now
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="w-5 h-5" />
                    Schedule a Call
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-6">
                  14-day free trial • No credit card required • Setup support included
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in">
            <Card className="border-border h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {/* Founder */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">RK</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Rashmi Kalani</h4>
                      <p className="text-muted-foreground">Founder & CEO</p>
                      <p className="text-sm text-primary">Available for direct consultation</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">+91 9841057742</p>
                      <p className="text-sm text-muted-foreground">Available 9 AM - 7 PM IST</p>
                    </div>
                  </div>
                  
                  {/* WhatsApp */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp Support</p>
                      <p className="text-sm text-muted-foreground">Quick responses within 30 minutes</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">support@aitally.com</p>
                      <p className="text-sm text-muted-foreground">For detailed inquiries</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ceebros Building</p>
                      <p className="text-sm text-muted-foreground">
                        11/32 A3, Cenotaph Road<br />
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-medium text-primary">Quick Response Promise:</span> We respond to all 
                    WhatsApp messages within 30 minutes during business hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;