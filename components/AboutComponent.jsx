import React from "react";
import {Col, Container, Row} from "reactstrap";
import Image from "next/image";
import AboutImage from '../public/assets/images/about-left-image.png'
import Service1 from '../public/assets/images/service-icon-01.png'
import Service2 from '../public/assets/images/service-icon-02.png'
import Service3 from '../public/assets/images/service-icon-03.png'
import Service4 from '../public/assets/images/service-icon-04.png'


const About = () => {
    return(
        <div id="about" className="about-us section">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <Image src={AboutImage} alt="person graphic" />
                        </div>
                    </Col>
                    <Col lg={8} className="align-self-center">
                        <div className="services">
                            <Row>
                                <Col lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="icon">
                                            <Image src={Service1} alt="reporting" />
                                        </div>
                                        <div className="right-text">
                                            <h4>Data Analysis</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="icon">
                                            <Image src={Service2} alt="" />
                                        </div>
                                        <div className="right-text">
                                            <h4>Data Reporting</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="icon">
                                            <Image src={Service3} alt="" />
                                        </div>
                                        <div className="right-text">
                                            <h4>Web Analytics</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                        <div className="icon">
                                            <Image src={Service4} alt="" />
                                        </div>
                                        <div className="right-text">
                                            <h4>SEO Suggestions</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About