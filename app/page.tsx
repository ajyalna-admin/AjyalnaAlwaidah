import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Vision } from "@/components/Vision";
import { Programs } from "@/components/Programs";
import { Resources } from "@/components/Resources";
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
        <Programs />
        <Resources />
        <Impact />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
