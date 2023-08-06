import Banner from "@/components/Banner";
import Freight from "@/components/partners/Freight";
import Marketplace from "@/components/partners/Marketplace";
import Shipping from "@/components/partners/Shipping";

const page = () => {
    return (
      <div id="partner-page" className="partner-page">
        <div className="partner-page-area">
          <Banner text="Our Partners" title="Our Partners" />
          <Shipping/>
          <Freight/>
          <Marketplace/>
        </div>
      </div>
    );
};

export default page;