export const metadata = {
  title: "SiliconMind AI HomePage",
  description: "Chatbot Development and AI Automation",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import CtaBanner from "@/components/cta-banner";
import Onboarding from "@/components/onboarding";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Onboarding />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
