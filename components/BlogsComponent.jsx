import React, {useEffect} from "react";
import Image from "next/image";
import BlogDec from '../public/assets/images/blog-dec.png'
import BlogThumb from '../public/assets/images/big-blog-thumb.jpg'
import BlogThumb1 from '../public/assets/images/blog-thumb-01.jpg'
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../redux/Actions/blogsActions";
import {Col, Container, Row} from "reactstrap";
import {fetchMultiBlogs} from "../redux/Actions/multiBlogsActions";

const Blogs = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlogs())
        dispatch(fetchMultiBlogs())
    }, [])

    const blogsData = useSelector((state) => {
        return state
    })

    const multiBlogsData = useSelector((state) => {
        return state
    })

    return(
        <div id="blog" className="our-blog section">
            <Container>
                <Row>
                    <Col lg={6} className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                        <div className="top-dec">
                            <Image src={BlogDec} alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                        <div className="left-image">
                            <a href="#"><Image src={BlogThumb} alt="Workspace Desktop"/></a>
                            <div className="info">
                                <div className="inner-content">
                                    {blogsData.blogs.data ? blogsData.blogs.data.map((b, index) => (
                                        <>
                                            <ul key={index}>
                                                <li><i className="fa fa-calendar"/>{b.date}</li>
                                                <li><i className="fa fa-users"/>{b.users}</li>
                                                <li><i className="fa fa-folder"/>{b.folder}</li>
                                            </ul>
                                            <a href="#"><h4>{b.title}</h4></a>
                                            <p>{b.content}</p>
                                        </>
                                    )) : 'Loading'}
                                    <div className="main-blue-button">
                                        <a href="#">Discover More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                        <div className="right-list">
                            <ul>
                                <li>
                                    <div className="left-content align-self-center">
                                        <span><i className="fa fa-calendar"/> 18 Mar 2021</span>
                                        <a href="#"><h4>New Websites &amp; Backlinks</h4></a>
                                        <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                                    </div>
                                    <div className="right-image">
                                        <a href="#"><Image src={BlogThumb1} alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="left-content align-self-center">
                                        <span><i className="fa fa-calendar"/> 14 Mar 2021</span>
                                        <a href="#"><h4>SEO Analysis &amp; Content Ideas</h4></a>
                                        <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                                    </div>
                                    <div className="right-image">
                                        <a href="#"><Image src={BlogThumb1} alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="left-content align-self-center">
                                        <span><i className="fa fa-calendar"/> 06 Mar 2021</span>
                                        <a href="#"><h4>SEO Tips &amp; Digital Marketing</h4></a>
                                        <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                                    </div>
                                    <div className="right-image">
                                        <a href="#"><Image src={BlogThumb1} alt=""/></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blogs