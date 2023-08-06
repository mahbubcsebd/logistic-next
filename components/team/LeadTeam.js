'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { leadTeam } from '../../data/team';
import TitleTwo from '../title/TitleTwo';
import SingleTeam from './SingleTeam';

const LeadTeam = () => {
  return (
    <div id="team" class="team section-pb">
      <div class="team-area">
        <Container>
          <TitleTwo
            title="Our Leadership Team"
            text="Welcome to our logistic service company. We are the best at our transportaion service ever."
          />
          <Row>
            {leadTeam.map((team, index) => {
              const { id, name, img, post } = team;
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

export default LeadTeam;
