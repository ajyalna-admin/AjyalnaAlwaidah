import { Navbar } from "@/components/Navbar";
import { Summary } from "@/components/Summary";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function SummaryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Summary />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
