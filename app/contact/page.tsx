import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
