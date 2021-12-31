import React, {useEffect, useState} from "react";
import {Col, Container, Nav, NavbarBrand, NavItem, NavLink, Row} from "reactstrap";

const Navbar = () => {
    return(
        <header className="header-area header-sticky wow slideInDown fixed-top" data-wow-duration="0.75s" data-wow-delay="0s">
            <Container>
                <Row>
                    <Col>
                        <nav className="main-nav">
                            <NavbarBrand style={NavbarBrandStyle} href="index.html" className="logo">
                                <h4>Spac<span>Dyna</span></h4>
                            </NavbarBrand>
                            <Nav id='sidebar'>
                                <NavItem className="scroll-to-section"><NavLink href="#top" className="active">Home</NavLink></NavItem>
                                <NavItem className="scroll-to-section"><NavLink href="#about">About Us</NavLink></NavItem>
                                <NavItem className="scroll-to-section"><NavLink href="#services">Services</NavLink></NavItem>
                                <NavItem className="scroll-to-section"><NavLink href="#portfolio">Portfolio</NavLink></NavItem>
                                <NavItem className="scroll-to-section"><NavLink href="#blog">Blog</NavLink></NavItem>
                                <NavItem className="scroll-to-section"><NavLink href="#contact">Message Us</NavLink></NavItem>
                                <NavItem className="scroll-to-section">
                                    <div className="main-red-button">
                                        <NavLink href="#contact">Contact Now</NavLink>
                                    </div>
                                </NavItem>
                            </Nav>
                            <a className='menu-trigger' onClick={sideBar}>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Navbar

const sideBar = () => {
    let x = document.getElementById("sidebar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const NavbarBrandStyle = {
    paddingTop: '0',
    paddingBottom: '0',
    marginRight: '0',
    fontSize: '0',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
}