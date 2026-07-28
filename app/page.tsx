import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Vision } from "@/components/Vision";
import { Structure } from "@/components/Structure";
import { Programs } from "@/components/Programs";
import { Resources } from "@/components/Resources";
import { Excellence } from "@/components/Excellence";
import { Impact } from "@/components/Impact";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Structure />
        <Programs />
        <Resources />
        <Excellence />
        <Impact />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
