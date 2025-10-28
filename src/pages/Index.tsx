import Hero from "@/components/Hero";
import Campaign from "@/components/Temp_campaign";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Validation from "@/components/Validation";
import Markets from "@/components/Markets";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Validation />
      <Problem />
      <Features />
      <Markets />
      <CTA />
      <Campaign/>
      <Footer />
    </main>
  );
};

export default Index;
