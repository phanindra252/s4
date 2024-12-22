import {Team} from "../components/OurServices/OurServicesComponent";
import {Wefollow} from "../components/OurServices/OurServicesComponent";
import RecentProjects from "../components/home/Recentprojects";
import ServicesSection from "../components/home/Services";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";


function OurServices() {
    return (
      <div>
        <ServicesSection />
        <Wefollow />
        <Team />
        <Stats />
        <RecentProjects />
        <Testimonials />
        {/* Other components */}
      </div>
    );
  }

export default OurServices;