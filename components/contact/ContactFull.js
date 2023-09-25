'use client';

import { Col, Row } from 'react-bootstrap';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';

function ContactFull() {
    return (
        <Row>
            <Col lg={7} className="mb-4">
                <ContactForm />
            </Col>
            <Col lg={5}>
                <ContactInfo />
            </Col>
        </Row>
    );
}

export default ContactFull;
