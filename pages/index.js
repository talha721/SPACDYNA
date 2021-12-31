import React from "react";
import Navbar from '../components/NavbarComponent'
import MainBanner from "../components/MainBannerComponent";
import About from "../components/AboutComponent";
import Services from '../components/ServicesComponent'
import Blogs from "../components/BlogsComponent";
import Portfolio from "../components/PortfolioComponent";
import Contact from "../components/ContactComponent";
import Footer from "../components/FooterComponent";

export default function Home() {
    return (
        <>
            <Navbar/>
            <MainBanner/>
            <About/>
            <Services/>
            <Portfolio/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </>
    )
}
