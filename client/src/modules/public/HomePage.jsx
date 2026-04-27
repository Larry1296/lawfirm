import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorks from "./sections/HowItWorks";
import ServicesSection from "./sections/ServicesSection";
import Testimonials from "./sections/Testimonials";
import CTASection from "./sections/CTASection";
import ContactSection from "./sections/ContactSection";
import AboutSection from "./sections/AboutSection";
import PublicNavbar from "../../layouts/public/PublicNavbar";

export default function HomePage() {
  return (
    <div>
      <PublicNavbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="cta">
        <CTASection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>
    </div>
  );
}
