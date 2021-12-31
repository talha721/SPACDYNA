import React from "react";
import {Col, Container, Row} from "reactstrap";


const Footer = () => {
    return(
        <footer>
            <Container>
                <Row>
                    <Col lg={12} className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
                        <p>© Copyright 2021 Space Dynamic Co. All Rights Reserved.
                            <br/>Design: <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer