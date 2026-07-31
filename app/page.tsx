import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Vision } from "@/components/Vision";
import { Summary } from "@/components/Summary";
import { Journey } from "@/components/Journey";
import { Resources } from "@/components/Resources";
import { Impact } from "@/components/Impact";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { JoinUs } from "@/components/JoinUs";
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
        <Summary />
        <Journey />
        <Resources />
        <Impact />
        <Team />
        <Faq />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
