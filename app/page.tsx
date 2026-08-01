import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UsageGuide } from "@/components/UsageGuide";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UsageGuide />
        <About />
        <Impact />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
