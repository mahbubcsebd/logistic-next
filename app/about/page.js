import Logistic from "@/components/About/Logistic";
import Banner from "@/components/Banner";

const page = () => {
  return (
    <div id="logistic-page" className="logistic-page">
      <div className="logistic-page-area">
        <Banner text="About Us" title="Who we are" />
        <Logistic />
      </div>
    </div>
  );
}

export default page