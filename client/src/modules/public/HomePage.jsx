// src/modules/public/HomePage.jsx
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import HowItWorks from "./sections/HowItWorks";
import FeaturesSection from "./sections/FeaturesSection";
import CTASection from "./sections/CTASection";
import Testimonials from "./sections/Testimonials";
import ContactSection from "./sections/ContactSection";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero / Landing */}
      <section id="home" className="pt-0">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services / Offerings */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* How It Works / Steps */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Features / Highlights */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* Call to Action */}
      <section id="cta">
        <CTASection />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact / Footer */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
