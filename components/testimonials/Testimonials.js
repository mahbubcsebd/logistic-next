'use client';

import testimonials from '@/data/testimonials';
import { Col, Container, Row } from 'react-bootstrap';
import SingleTestimonial from './SingleTestimonial';

const Testimonials = () => {
  return (
    <div id="tetimonial" className="tetimonial section">
      <div className="testimonial-area">
        <Container>
          <Row>
            {testimonials.map((testimonial, index) => {
              const { id, author, img, post, text } = testimonial;
              return (
                <Col key={index} md={6} className="mb-4">
                  <SingleTestimonial
                    id={id}
                    author={author}
                    img={img}
                    post={post}
                    text={text}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Testimonials;
