import Banner from "@/components/Banner";
import TestimonialTwo from "@/components/testimonials/TestimonialTwo";
import Testimonials from "@/components/testimonials/Testimonials";

const page = () => {
    return (
      <div id="partner-page" className="partner-page">
        <div className="partner-page-area">
          <Banner text="Our Testimonials" title="Customer Feedback" />
        <Testimonials/>
        <TestimonialTwo/>
        </div>
      </div>
    );
};

export default page;