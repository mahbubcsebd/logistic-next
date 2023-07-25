/* eslint-disable react/jsx-key */
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import services from "../../data/services.js";
import classes from '../../styles/services.module.scss';

const Services = () => {
  return (
      <div
          id="services"
          className="services section-pb"
      >
          <div className="services-area">
              <Container>
                  <Row>
                      {services.map((service, index) => {
                        const { title, desc, img, tag } = service;
                          return (
                              <Col
                                  md={6}
                                  lg={4}
                                  className="mb-4"
                              >
                                  <div
                                      className={`${classes.singleOurService}`}
                                  >
                                      <Link
                                          href="/"
                                          className={`${classes.serviceImgBox}`}
                                      >
                                          <Image
                                              src={img}
                                              alt="services"
                                              className={`${classes.serviceImg}`}
                                          />
                                          <div
                                              className={`${classes.serviceCat}`}
                                          >
                                              <Image
                                                  src={tag}
                                                  alt="services"
                                              />
                                          </div>
                                      </Link>
                                      <div
                                          className={`${classes.serviceContent}`}
                                      >
                                          <Link
                                              href="/service-details"
                                              className={`${classes.serviceTitle}`}
                                          >
                                              {title}
                                          </Link>
                                          <p
                                              className={`${classes.serviceText}`}
                                          >
                                              {desc}
                                          </p>
                                          <Link
                                              href="/service-details"
                                              className="btn-text"
                                          >
                                              Explore Now{' '}
                                              <span>
                                                  <HiOutlineArrowNarrowRight />
                                              </span>
                                          </Link>
                                      </div>
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

export default Services;