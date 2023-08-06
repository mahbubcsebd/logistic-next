"use client"

import Banner from "@/components/Banner";
import Faq from "@/components/faq/Faq";
import QuoteForm from "@/components/form/QuoteForm";

const page = () => {
    return (
      <div id="faq-page" className="faq-page">
        <div className="faq-page-area">
          <Banner text="FAQ" title="Discover FAQ" />
          <Faq/>
          <QuoteForm />
        </div>
      </div>
    );
};

export default page;
