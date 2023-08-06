import Banner from "@/components/Banner";
import LeadTeam from "@/components/team/LeadTeam";
import Leading from "@/components/team/Leading";
import OperationTeam from "@/components/team/OperationTeam";

const page = () => {
    return (
      <div id="team-page" className="team-page">
        <div className="team-page-area">
          <Banner text="Our Team" title="Meet Our Squad" />
          <LeadTeam/>
          <OperationTeam/>
          <Leading/>
        </div>
      </div>
    );
};

export default page;
