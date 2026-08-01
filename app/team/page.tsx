import { Navbar } from "@/components/Navbar";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Team />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
