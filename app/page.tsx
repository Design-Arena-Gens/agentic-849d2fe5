import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
