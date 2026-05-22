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
      <section id="about" className="pt-0">
        <AboutSection />
      </section>

      {/* Services / Offerings */}
      <section id="services" className="pt-0">
        <ServicesSection />
      </section>

      {/* How It Works / Steps */}
      <section id="how-it-works" className="pt-0">
        <HowItWorks />
      </section>

      {/* Features / Highlights */}
      <section id="features" className="pt-0">
        <FeaturesSection />
      </section>

      {/* Call to Action */}
      <section id="cta" className="pt-0">
        <CTASection />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="pt-0">
        <Testimonials />
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="pt-0">
        <ContactSection />
      </section>
    </div>
  );
}
