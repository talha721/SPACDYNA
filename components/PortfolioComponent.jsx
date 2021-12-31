import React from "react";
import {Col, Container, Row} from "reactstrap";
import PortfolioImage from '../public/assets/images/portfolio-image.png'
import Image from "next/image";


const Portfolio = () => {
    return(
        <div id="portfolio" className="our-portfolio section">
            <Container>
                <Row>
                    <Col lg={{ size: 6, offset: 3 }}>
                        <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6}>
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="hidden-content">
                                    <h4>SEO Analysis</h4>
                                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                </div>
                                <div className="showed-content">
                                    <Image src={PortfolioImage} alt=""/>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col lg={3} sm={6}>
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                <div className="hidden-content">
                                    <h4>Website Reporting</h4>
                                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                </div>
                                <div className="showed-content">
                                    <Image src={PortfolioImage} alt=""/>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col lg={3} sm={6}>
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="hidden-content">
                                    <h4>Performance Tests</h4>
                                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                </div>
                                <div className="showed-content">
                                    <Image src={PortfolioImage} alt=""/>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col lg={3} sm={6}>
                        <a href="#">
                            <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="hidden-content">
                                    <h4>Data Analysis</h4>
                                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                                </div>
                                <div className="showed-content">
                                    <Image src={PortfolioImage} alt=""/>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio