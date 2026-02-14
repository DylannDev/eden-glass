import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Highlights from "../components/home/Highlights";
import CTASection from "../components/home/CTASection";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Reassurance from "../components/home/Reassurance";
import FAQ from "../components/home/FAQ";
import PreFooterCTA from "@/components/home/PreFooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <CTASection />
      <Services />
      <Testimonials />
      <Reassurance />
      <FAQ />
      <PreFooterCTA />
    </>
  );
}
