import { Navbar } from "@/components/Navbar";
import { Journey } from "@/components/Journey";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Journey />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
