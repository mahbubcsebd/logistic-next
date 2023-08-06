'use client';

import { shippingPartners } from '@/data/partners';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

function Shipping() {
  return (
    <div id="shipping-partners" class="shipping-partners section-pb">
      <div class="shipping-partners-area">
        <Container>
          <Row>
            <h2 className="partners-title">Shipping Partners</h2>
          </Row>
          <Row>
            {shippingPartners.map((partner, index) => {
              return (
                  <Col key={index} sm={6} lg={4} xl={3} className='mb-4'>
                <div className="single-partner">
                    <Image src={partner} alt={partner} />
                </div>
                  </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Shipping;
