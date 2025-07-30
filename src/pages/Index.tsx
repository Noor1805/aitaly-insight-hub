import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TargetCursor from "@/components/TargetCursor";
import MediaShowcase from "@/components/MediaShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <Navbar />
      <Hero />
      <section>
        <MediaShowcase />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <FAQ />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
