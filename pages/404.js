import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import error from "../public/images/404.png";
import variables from '../styles/variables.module.scss';

const PageNotFound = () => {
    return (
        <div className="">
            <Header />
            <div
                id="notFoundPage"
                className="notFoundPage"
            >
                <div className="notFoundArea">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <div className="notFound-content">
                                    <Image
                                        src={error}
                                        alt="404"
                                    />

                                    <h2
                                        style={{
                                            color: variables.primaryColor,
                                        }}
                                        className="notFoundTitle"
                                    >
                                        404 Page Not Found
                                    </h2>
                                    <p className="notFoundText">
                                        This page is incidentally inaccessible
                                        because of support. We will back very
                                        before long much obliged for your
                                        understanding
                                    </p>
                                    <Link
                                        className="btn btn-orange"
                                        href="/"
                                    >
                                        Go Back To Homepage
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
