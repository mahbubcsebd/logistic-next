'use client';

import { syne } from '@/app/fonts';
import workImg from '@/public/images/how-to-work.png';
import classes from '@/styles/howItWorks.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
// import CountUp from 'react-countUp';

function HowItWorks() {
    const countData = [
        {
            id: 1,
            number: 365,
            title: 'Delivered Packages.',
        },
        {
            id: 2,
            number: 95,
            title: 'Countries Covered.',
        },
        {
            id: 3,
            number: 535,
            title: 'Satisfied Clients.',
        },
        {
            id: 4,
            number: 757,
            title: 'Tons of Goods.',
        },
    ];
    return (
        <div id="how-it-works" className="how-it-works section-pb">
            <div className={`${classes.howItWorksArea}`}>
                <Container>
                    <Row>
                        <Col lg={6} xxl={5} className="mb-4 mb-lg-0">
                            <div className="section-content">
                                <h2
                                    className={`${classes.textWhite} section-title ${syne.className}`}
                                >
                                    How It works
                                </h2>
                                <p className={`${classes.textWhite} section-text`}>
                                    A logistics website facilitates the transportation, and delivery
                                    of products. It provides platform for companies to manage their
                                    shipping needs efficiently.
                                </p>
                                <div className={`${classes.counterBoxWrapper}`}>
                                    {countData.map((count) => {
                                        const { id, title } = count;
                                        return (
                                            <div
                                                className={`${classes.singleCounterBox} ${syne.className}`}
                                                key={id}
                                            >
                                                <div className={`${classes.counterNumber}`}>
                                                    {/* <CountUp end={number} duration={2} />+ */}
                                                </div>
                                                <p className={`${classes.counterCategory}`}>
                                                    {title}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} className="d-none d-xxl-block">
                            <div className={`${classes.htwImg}`}>
                                <Image src={workImg} alt="htw" />
                            </div>
                        </Col>
                        <Col lg={6} xxl={4}>
                            <div className={`${classes.singleWork}`}>
                                <h3>Request a Quote</h3>
                                <p>
                                    The first step in using our logistics services is to request a
                                    quote.
                                </p>
                            </div>
                            <div className={`${classes.singleWork}`}>
                                <h3>Book Your Shipment</h3>
                                <p>
                                    Decided to use our services, the next step is to book your
                                    shipment.
                                </p>
                            </div>
                            <div className={`${classes.singleWork}`}>
                                <h3>Track Your Shipment</h3>
                                <p>
                                    We will provide you with real-time updates on the location and
                                    status of your shipment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HowItWorks;
