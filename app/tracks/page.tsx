import { Navbar } from "@/components/Navbar";
import { Tracks } from "@/components/Tracks";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function TracksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Tracks />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
