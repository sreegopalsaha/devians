import Footer from "@/components/footer";
import AboutSection from "./about-section";
import EventsSection from "./events-section";
import HeroSection from "./hero-section";
import JoinUsSection from "./join-us-section";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <JoinUsSection />
      <Footer/>
    </div>
  );
}

export default LandingPage;
