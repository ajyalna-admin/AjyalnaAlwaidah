import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Vision } from "@/components/Vision";
import { Summary } from "@/components/Summary";
import { Resources } from "@/components/Resources";
import { Journey } from "@/components/Journey";
import { CoursesGuide } from "@/components/CoursesGuide";
import { Tracks } from "@/components/Tracks";
import { ImtidadSection } from "@/components/Imtidad";
import { Impact } from "@/components/Impact";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Summary />
        <Resources />
        <Journey />
        <CoursesGuide />
        <Tracks />
        <ImtidadSection />
        <Impact />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
