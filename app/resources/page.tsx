import { Navbar } from "@/components/Navbar";
import { Resources } from "@/components/Resources";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Resources />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
