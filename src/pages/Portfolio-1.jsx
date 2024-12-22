import { Back, RenovationHeader, RenovationFooter, Photos, SyncedSlider, SuccessStory } from "../components/portfolio-1/Portfolio-1Components";  


function Portfolio1() {
    return (
      <div>
        <Back />
        <RenovationHeader />
        <Photos />
        <RenovationFooter />
        <SyncedSlider />
        <SuccessStory />
        {/* Other components */}
      </div>
    );
  }

export default Portfolio1;