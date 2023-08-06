'use client';

import box from '@/public/icons/box.svg';
import classes from '@/styles/form.module.scss';
import Image from 'next/image';
import { Col, Container, Form, Row } from 'react-bootstrap';

const ContactForm = () => {
  async function handleQuoteForm(formData) {
    const name = formData.get(quoteName);
    console.log(name);
  }
  return (
    <div id="contact-form" className="request-quote section-pb">
      <div className="request-quote-area">
        <Container>
          <Form
            action={handleQuoteForm}
            id="request-quote-form-2"
            className={`${classes.cargoForm}`}
          >
            <div className={`${classes.formTitleBox}`}>
              <h3 className={`${classes.formTitle}`}>Request a Quote</h3>
              <div className={`${classes.formTitleIcon}`}>
                <Image src={box} alt="box" />
              </div>
            </div>
            <div className={`${classes.formInputWrapper}`}>
              <Row>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-name">Enter Name</Form.Label>
                  <Form.Control
                    id="quote-name"
                    type="text"
                    name="quoteName"
                    placeholder="Enter Name"
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-email">Enter Email</Form.Label>
                  <Form.Control
                    id="quote-email"
                    type="email"
                    name="quoteEmail"
                    placeholder="Enter Email"
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-number">Enter Number</Form.Label>
                  <Form.Control
                    id="quote-number"
                    type="text"
                    name="quoteNumber"
                    placeholder="Enter Number"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-depart-city">
                    Depart City
                  </Form.Label>
                  <Form.Control
                    id="quote-depart-city"
                    type="text"
                    name="quoteDepartCity"
                    placeholder="Enter Depart City"
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-delivery-city">
                    Delivery City
                  </Form.Label>
                  <Form.Control
                    id="quote-delivery-city"
                    type="text"
                    name="quoteDeliveryCity"
                    placeholder="Enter Delivery City"
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <Form.Select aria-label="Freight Type">
                    <option selected>Road Freight</option>
                    <option value="1">Demo 1</option>
                    <option value="2">Demo 2</option>
                    <option value="3">Demo 3</option>
                    <option value="4">Demo 4</option>
                    <option value="5">Demo 5</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-weight">Enter Weight</Form.Label>
                  <Form.Control
                    id="quote-weight"
                    type="text"
                    name="quoteWeight"
                    placeholder="Enter Weight"
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-height">Enter Height</Form.Label>
                  <Form.Control
                    id="quote-height"
                    type="text"
                    name="quoteHeight"
                    placeholder="Enter Enter Height"
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <Form.Label htmlFor="quote-length">Enter Length</Form.Label>
                  <Form.Control
                    id="quote-length"
                    type="email"
                    name="quoteLength"
                    placeholder="Enter Length"
                  />
                </Col>
              </Row>
              <div className={`${classes.formCheckboxWrapper}`}>
                <Form.Check
                  type="checkbox"
                  id="quote-express-delivery"
                  label="Express Delivery"
                />

                <Form.Check
                  type="checkbox"
                  id="quote-insurance"
                  label="Insurance"
                />
                <Form.Check
                  type="checkbox"
                  id="quote-fragile"
                  label="Fragile"
                />
                <Form.Check
                  type="checkbox"
                  id="quote-packaging"
                  label="Packaging"
                />
              </div>
              <input
                className="btn btn-orange mt-8"
                type="submit"
                value="Request Submit"
              />
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default ContactForm;
