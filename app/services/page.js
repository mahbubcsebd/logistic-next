import Banner from "@/components/Banner";
import Services from "@/components/services/Services";

const Page = () => {
    return (
        <div
            id="services-page"
            className="services-page"
        >
            <div className="services-page-area">
                <Banner
                    text="Our Services"
                    title="Logistics Services"
                />
                <Services />
            </div>
        </div>
    );
};

export default Page;
