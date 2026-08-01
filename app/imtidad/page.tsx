import { Navbar } from "@/components/Navbar";
import { ImtidadSection } from "@/components/Imtidad";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function ImtidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <ImtidadSection />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
