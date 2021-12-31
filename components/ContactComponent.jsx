import React, {useState} from 'react'
import {Button, Col, Container, Row} from "reactstrap";
import Image from "next/image";
import ContactDecoration from '../public/assets/images/contact-decoration.png'
import {Control, LocalForm} from "react-redux-form";
import {useDispatch, useSelector} from "react-redux";
import {postContact} from "../redux/Actions/contactActions";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [contactUs, setContactUs] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    })
    const dispatch = useDispatch()

    const contact = useSelector((state) => {
        return state
    })

    const handleChange = values => {
        const { name, surname, email, message, value } = values.target;
        setContactUs({...contactUs, [name]: value, [surname]: value, [email]: value, [message]: value })
    }

    const handleSubmit = values => {
        dispatch(postContact(values))
    }

    return(
        <div id="contact" className="contact-us section" style={{ marginTop: '60px' }}>
            <Container>
                <Row>
                    <Col lg={6} className="align-self-center wow fadeInLeft" data-wow-duration="0.5s"
                         data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor
                                incididunt ut labore et dolores</p>
                            <div className="phone-info">
                                <h4>For any enquiry, Call Us: <span><i className="fa fa-phone"/> <a
                                    href="#">010-020-0340</a></span></h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <LocalForm id="contact-form" onSubmit={values => handleSubmit(values)}>
                            <fieldset disabled={contact.contactUs.isProcessing}>
                                <Row>
                                    <Col lg={6}>
                                            <Control.text model='.name' type="name" name="name" id="name" placeholder="Name" autoComplete="on"
                                                          onChange={handleChange}/>
                                    </Col>
                                    <Col lg={6}>
                                            <Control.text model='.surname' type="surname" name="surname" id="surname" placeholder="Surname"
                                                          autoComplete="on" onChange={handleChange}/>
                                    </Col>
                                    <Col lg={12}>
                                            <Control.text model='.email' type="text" name="email" id="email" pattern="[^ @]*@[^ @]*"
                                                          placeholder="Your Email" onChange={handleChange}/>
                                    </Col>
                                    <Col lg={12}>
                                            <Control.textarea model='.message' name="message" type="text" className="form-control" id="message"
                                                              placeholder="Message" onChange={handleChange}/>
                                    </Col>
                                    <Col lg={12}>
                                            <Button type="submit"
                                                    id="form-submit"
                                                    className="main-button"
                                                    disabled={contact.contactUs.isProcessing}
                                            >{contact.contactUs.isProcessing ? 'Sending..' : 'Send Message'}</Button>
                                    </Col>
                                </Row>
                            </fieldset>
                            <div className="contact-dec">
                                <Image src={ContactDecoration} alt=""/>
                            </div>
                            <ToastContainer position="top-center"
                                            autoClose={31000000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            style={{ width: '500px' }}/>
                        </LocalForm>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact