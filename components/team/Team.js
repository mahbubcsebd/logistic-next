'use client'

import { Col, Container, Row } from 'react-bootstrap';
import { leadTeam } from "../../data/team";
import SingleTeam from './SingleTeam';

const Team = () => {
  return (
    <div id="team" class="team section-pb">
      <div class="team-area">
        <Container>
          <Row>
            <div class="section-top-title">
              <h2 class="section-title">Our Dedicated Team</h2>
            </div>
          </Row>
          <Row>
          {leadTeam.map((team, index)=>{
            const {id, name, img, post} = team;
            return (
              <Col sm={6} lg={4} xl={3} className="mb-4" key={index}>
                <SingleTeam id={id} name={name} img={img} post={post} />
              </Col>
            );
          })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Team;
