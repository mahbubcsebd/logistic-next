'use client'

import { Col, Row } from 'react-bootstrap';

const TitleTwo = ({title, text}) => {
  return (
    <Row className="section-top-2 justify-content-center">
      <Col xxl={4}>
        <h2 className="section-title">{title}</h2>
      </Col>
      <Col xxl={6} className="ms-auto">
        <p className="section-text">
          {text}
        </p>
      </Col>
    </Row>
  );
};

export default TitleTwo;
