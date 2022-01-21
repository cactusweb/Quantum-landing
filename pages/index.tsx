import Nav from "../components/Nav";
import LandingHero from "../components/LandingHero";
import FeaturesSection from "../components/FeaturesSection";
import RoadmapSection from "../components/RoadmapSection";
import SuccessSection from "../components/SuccessSection";
import FAQSection from "../components/FAQSection";
import CommunitySection from "../components/CommunitySection";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Nav />
      <LandingHero />
      <FeaturesSection />
      <RoadmapSection />
      <SuccessSection />
      <FAQSection />
      <CommunitySection />
      <Footer />
    </>
  );
};

export default IndexPage;
