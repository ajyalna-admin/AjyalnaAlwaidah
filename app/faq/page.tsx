import { Navbar } from "@/components/Navbar";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Faq />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
