
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToAction from "@/components/common/CallToAction";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Smart Sales Process | Sales Playbooks & AI Automation for Founders</title>
        <meta name="description" content="Custom sales playbooks and AI automation solutions for founders, solopreneurs, and small businesses. Transform your sales performance." />
      </Helmet>
      
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CallToAction
        title="Ready to Transform Your Sales Performance?"
        subtitle="Schedule a free consultation to discuss your unique challenges and how we can help."
        buttonText="Schedule a Free Consultation"
        buttonLink="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services/sales-playbook"
      />
    </>
  );
};

export default Home;
