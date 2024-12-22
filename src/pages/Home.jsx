import Carousel from "../components/home/carousel";
import FeaturesSection from "../components/home/Feautessection";
import ConstructionHero from "../components/home/Hero";
import ServicesSection from "../components/home/Services";
import Cta from "../components/home/Cta";
import Recentprojects from "../components/home/Recentprojects";
import Testimonials from "../components/home/Testimonials";
import EthosSection from "../components/home/EthosandPrinciples";
import Stats from "../components/home/Stats";
import GetInTouch from "../components/home/Getintouch";

function Home() {
  return (
    <div>
      <Carousel />
      <FeaturesSection />
      <ConstructionHero />
      <ServicesSection />
      <Cta />
      <Recentprojects />
      <Testimonials />
      <EthosSection />
      <Stats />
      <GetInTouch />
      {/* Other components */}
    </div>
  );
}

export default Home;
