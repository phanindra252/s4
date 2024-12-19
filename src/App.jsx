import Navbar from "./components/Navbar";
import Carousel from "./components/carousel";
import FeaturesSection from "./components/Feautessection";
import ConstructionHero from "./components/Hero";
import ServicesSection from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <FeaturesSection />
      <ConstructionHero />
      <ServicesSection />
      {/* Other components */}
    </div>
  );
}

export default App;
