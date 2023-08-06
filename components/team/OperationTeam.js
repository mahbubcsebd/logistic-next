'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { operationTeam } from '../../data/team';
import TitleTwo from '../title/TitleTwo';
import SingleTeam from './SingleTeam';

const OperationTeam = () => {
  return (
    <div id="team" class="team section-pb">
      <div class="team-area">
        <Container>
          <TitleTwo
            title="Our Operations Team"
            text="Welcome to our logistic service company. We are the best at our transportaion service ever."
          />
          <Row>
            {operationTeam.map((team, index) => {
              const { id, name, img, post } = team;
              return (
                <Col sm={6} lg={4} xl={3} className="mb-4" key={index}>
                  <SingleTeam id={id} name={name} img={img} post={post} />
                </Col>
              );
            })}
          </Row>
          <div className='mx-auto text-center mt-5'>
            <div className="btn btn-orange">Contact</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OperationTeam;
