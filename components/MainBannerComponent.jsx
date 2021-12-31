import React from "react";
import {Col, Container, Row} from "reactstrap";
import Image from 'next/image'
import BannerImage from '../public/assets/images/banner-right-image.png'

const MainBanner = () => {
    return(
        <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={6} className="align-self-center">
                                <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s"
                                     data-wow-delay="1s">
                                    <h6>Welcome to Space Dynamic</h6>
                                    <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                                    <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5 (beta
                                        2). This CSS template is free for you provided by
                                        <a rel="nofollow"
                                           href="https://templatemo.com/page/1"
                                           target="_parent">TemplateMo</a>.
                                    </p>
                                    <form id="search" action="#" method="GET">
                                        <fieldset>
                                            <input type="address" name="address" className="email"
                                                   placeholder="Your website URL..." autoComplete="on" required/>
                                        </fieldset>
                                        <fieldset>
                                            <button type="submit" className="main-button">Analyze Site</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="right-image wow fadeInRight" data-wow-duration="1s"
                                     data-wow-delay="0.5s">
                                    <Image src={BannerImage} alt="team meeting"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainBanner