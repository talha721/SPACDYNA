import React from "react";
import ServicesImage from '../public/assets/images/services-left-image.png'
import {Col, Container, Row} from "reactstrap";
import Image from "next/image";

const Services = () => {
    return(
        <div id="services" className="our-services section">
            <Container>
                <Row>
                    <Col lg={6} className="align-self-center  wow fadeInLeft" data-wow-duration="1s"
                         data-wow-delay="0.2s">
                        <div className="left-image">
                            <Image src={ServicesImage} alt=""/>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="section-heading">
                            <h2>Grow your website with our <em>SEO</em> service &amp; <span>Project</span> Ideas</h2>
                            <p>Space Dynamic HTML5 template is free to use for your website projects. However, you are
                                not permitted to redistribute the template ZIP file on any CSS template collection
                                websites. Please contact us for more information. Thank you for your kind
                                cooperation.</p>
                        </div>
                        <Row>
                            <Col lg={12}>
                                <div className="first-bar progress-skill-bar">
                                    <h4>Website Analysis</h4>
                                    <span>84%</span>
                                    <div className="filled-bar"/>
                                    <div className="full-bar"/>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="second-bar progress-skill-bar">
                                    <h4>SEO Reports</h4>
                                    <span>88%</span>
                                    <div className="filled-bar"/>
                                    <div className="full-bar"/>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="third-bar progress-skill-bar">
                                    <h4>Page Optimizations</h4>
                                    <span>94%</span>
                                    <div className="filled-bar"/>
                                    <div className="full-bar"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services