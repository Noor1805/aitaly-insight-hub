import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import SplitText from "./SplitText";
import CountUp from "./CountUp"; // Custom animation

const Testimonials = () => {
  const topRow = [
    {
      name: "Mohit Sharma",
      role: "FMCG Business Owner",
      location: "Mumbai",
      content:
        "I used to struggle with Tally reports. Now Ai Tally sends me clear updates on WhatsApp every day.",
      rating: 5,
      avatar: "MS",
    },
    {
      name: "Anita Verma",
      role: "Boutique Owner",
      location: "Delhi",
      content:
        "Managing accounts is now super easy. Ai Tally gives me updates I actually understand.",
      rating: 5,
      avatar: "AV",
    },
    {
      name: "Rakesh Yadav",
      role: "Electronics Shop Owner",
      location: "Lucknow",
      content:
        "Tally was confusing. Now Ai Tally gives me profit and expense updates daily on WhatsApp.",
      rating: 4,
      avatar: "RY",
    },
    {
      name: "Pooja Mehra",
      role: "Freelance Designer",
      location: "Bangalore",
      content:
        "I no longer have to ask my CA. I get real-time, simple info on WhatsApp.",
      rating: 5,
      avatar: "PM",
    },
    {
      name: "Imran Shaikh",
      role: "Pharma Distributor",
      location: "Hyderabad",
      content:
        "Ai Tally simplified accounting. Sales and payments come straight to WhatsApp.",
      rating: 4,
      avatar: "IS",
    },
    {
      name: "Neha Jain",
      role: "Cafe Owner",
      location: "Pune",
      content:
        "I was clueless about my accounts. Now I get daily summaries that make sense.",
      rating: 5,
      avatar: "NJ",
    },
    {
      name: "Meena Patel",
      role: "Retail Store Owner",
      location: "Ahmedabad",
      content:
        "Ai Tally saved me from a ₹50K penalty by reminding me before the GST deadline.",
      rating: 5,
      avatar: "MP",
    },
    {
      name: "Vijay Gupta",
      role: "Pharma Distributor",
      location: "Delhi",
      content:
        "Ai Tally's suggestions helped boost my profits by 15%. Great tool!",
      rating: 5,
      avatar: "VG",
    },
  ];
  const bottomRow = [
    {
      name: "Rashni Jain",
      role: "Textile Manufacturer",
      location: "Surat",
      content:
        "My team now accesses reports from phones—no need to open Tally directly.",
      rating: 5,
      avatar: "RJ",
    },
    {
      name: "Vikram Chauhan",
      role: "Mobile Retailer",
      location: "Jaipur",
      content:
        "No more daily headaches. Reports come to WhatsApp—no laptop needed.",
      rating: 4,
      avatar: "VC",
    },
    {
      name: "Farah Naqvi",
      role: "Beauty Salon Owner",
      location: "Bhopal",
      content:
        "I was scared of numbers, but now everything feels simple and clear.",
      rating: 5,
      avatar: "FN",
    },
    {
      name: "Deepak Rana",
      role: "Auto Parts Dealer",
      location: "Chandigarh",
      content:
        "Every sale and payment update comes to WhatsApp—zero manual work!",
      rating: 4,
      avatar: "DR",
    },
    {
      name: "Ritika Sen",
      role: "Online Seller",
      location: "Kolkata",
      content:
        "Handling accounting with orders and returns was tough. Now it's stress-free.",
      rating: 5,
      avatar: "RS",
    },
    {
      name: "Arjun Nair",
      role: "Logistics Business Owner",
      location: "Kochi",
      content:
        "I don’t rely on my team anymore. Ai Tally gives me all updates in a simple format.",
      rating: 5,
      avatar: "AN",
    },
    {
      name: "Arjun Singh",
      role: "Electronics Retailer",
      location: "Bangalore",
      content:
        "Daily reports show profit margins, stock, and payments clearly.",
      rating: 5,
      avatar: "AS",
    },
    {
      name: "Priya Agarwal",
      role: "Beauty Distributor",
      location: "Pune",
      content:
        "Ai Tally explains everything in easy language and gives great tips.",
      rating: 5,
      avatar: "PA",
    },
    {
      name: "Ritika Verma",
      role: "CA & Tax Consultant",
      location: "New Delhi",
      content:
        "My clients often ask for simplified summaries. With Ai Tally, I can share clear WhatsApp reports without spending hours on formatting or explanations.",
      rating: 5,
      avatar: "RV",
    },
    {
      name: "Rajeev Menon",
      role: "Restaurant Chain Owner",
      location: "Bangalore",
      content:
        "Understanding my profit margins across branches was a nightmare. Now Ai Tally gives me crisp, daily updates in Hinglish that even my managers follow easily.",
      rating: 5,
      avatar: "RM",
    },
    {
      name: "Pooja Desai",
      role: "Textile Business Owner",
      location: "Surat",
      content:
        "I never liked checking balance sheets. But now, Ai Tally sends daily summaries I actually enjoy reading. It feels like my business is speaking to me!",
      rating: 5,
      avatar: "PD",
    },
    {
      name: "Anil Kapoor",
      role: "Pharma Distributor",
      location: "Lucknow",
      content:
        "Earlier, I depended completely on my accountant. Now with Ai Tally, I get real-time updates myself—simple, clear, and directly on WhatsApp.",
      rating: 5,
      avatar: "AK",
    },
  ];

  const renderCards = (data: typeof topRow) =>
    data.map((testimonial, index) => (
      <Card
        key={index}
        className="min-w-[350px] max-w-sm w-full border-border hover-lift transition-spring relative overflow-hidden m-2"
      >
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-12 h-12 text-primary" />
        </div>
        <CardContent className="p-6 h-auto  max-h-full overflow-visible">
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed italic">
            "{testimonial.content}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">
                {testimonial.avatar}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                {testimonial.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
              <p className="text-xs text-primary">{testimonial.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ));

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <SplitText
            text="Real Stories from Real Business Owners"
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
            Join thousands of business owners who've transformed their
            operations with Ai Tally
          </p>
        </div>

        {/* Top Row - Left to Right */}
        <div className="overflow-hidden mb-0">
          <div className="flex  animate-scroll-left">{renderCards(topRow)}</div>
        </div>

        {/* Bottom Row - Right to Left */}
        <div className="overflow-hidden">
          <div className="flex  animate-scroll-right">
            {renderCards(bottomRow)}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10000", post: "+", label: "Business Owners" },
            { pre: "₹", number: "50", post: "Cr +", label: "Revenue Tracked" },
            { number: "99.9", post: "%", label: "Uptime" },
            { number: "24", post: "Hours", label: "AI Monitoring" },
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-4xl font-orbitron font-bold text-foreground">
                <span className="font-bold text-foreground">{stat.pre}</span>
                <CountUp
                  from={0}
                  to={Number(stat.number)}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <span className="font-bold text-foreground">{stat.post}</span>
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
