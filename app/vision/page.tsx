import { Navbar } from "@/components/Navbar";
import { Vision } from "@/components/Vision";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Vision />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
