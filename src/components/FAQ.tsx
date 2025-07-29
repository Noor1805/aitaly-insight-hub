import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SplitText from './SplitText';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Ai Tally and how does it work?",
      answer: "Ai Tally is an AI-powered business intelligence tool that connects to your existing Tally software. It reads your business data, analyzes patterns, and sends you daily insights, alerts, and suggestions in simple English via WhatsApp, email, or mobile dashboard. No need to change your current Tally setup."
    },
    {
      question: "Do I need to know how to use Tally to benefit from Ai Tally?",
      answer: "Not at all! That's the beauty of Ai Tally. Even if you find Tally too technical or confusing, Ai Tally translates all the complex data into simple, actionable insights in plain English. It's designed specifically for business owners who want insights without the technical hassle."
    },
    {
      question: "Is my business data safe and secure?",
      answer: "Absolutely. We use bank-grade encryption for all data transmission and storage. Your Tally data is never stored permanently on our servers - we only read and analyze it to generate insights. We're also fully compliant with Indian data protection regulations."
    },
    {
      question: "Can Ai Tally help me with GST compliance?",
      answer: "Yes! Ai Tally continuously monitors your GST obligations and sends timely reminders before deadlines. It can identify potential issues in your GST data, suggest corrections, and help ensure you never miss important filing dates again."
    },
    {
      question: "How quickly can I get started with Ai Tally?",
      answer: "Setup takes less than 15 minutes. Our team will help you connect Ai Tally to your Tally software via a secure connection. You'll start receiving insights within 24 hours of setup. We also provide free onboarding support to ensure everything works perfectly."
    },
    {
      question: "What types of businesses can use Ai Tally?",
      answer: "Ai Tally works for any business using Tally - from small shops and restaurants to large manufacturing companies. It's particularly valuable for FMCG distributors, retailers, textile businesses, pharmaceutical companies, and any business that wants better financial insights."
    },
    {
      question: "Can multiple people in my business access Ai Tally?",
      answer: "Yes! You can set different access levels for different roles. For example, you (the owner) get full insights, your staff can access basic reports, and your CA can get detailed compliance information. Everyone gets appropriate information for their role."
    },
    {
      question: "What if I'm not satisfied with Ai Tally?",
      answer: "We offer a 14-day free trial with no commitment. If you're not completely satisfied, you can cancel anytime with no questions asked. We're confident that once you see the value Ai Tally brings to your business, you'll wonder how you managed without it."
    },
    {
      question: "Do you provide support in regional languages?",
      answer: "Yes! Our AI can communicate in Hindi, English, and several regional languages. Our support team also speaks Hindi, Gujarati, Tamil, and other Indian languages to ensure you get help in the language you're most comfortable with."
    },
    {
      question: "How much does Ai Tally cost and are there any hidden fees?",
      answer: "Our plans start at ₹999/month with no setup fees or hidden charges. You get a 14-day free trial to test everything. We believe in transparent pricing - what you see is what you pay. No surprises, ever."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitText
            text="Frequently Asked Questions"
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
            Got questions? We've got answers. If you don't find what you're looking for, 
            feel free to WhatsApp us directly.
          </p>
        </div>
        
        <div className="max-w-4xl font-orbitron mx-auto">
          <Accordion type="single" collapsible className="w-full animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;