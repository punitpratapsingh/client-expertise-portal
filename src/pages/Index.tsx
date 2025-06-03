
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WebVitalsSection from "@/components/WebVitalsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WebVitalsSection />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
