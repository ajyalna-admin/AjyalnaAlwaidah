import { Navbar } from "@/components/Navbar";
import { CoursesGuide } from "@/components/CoursesGuide";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ChatbotButton } from "@/components/ChatbotButton";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <CoursesGuide />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </>
  );
}
