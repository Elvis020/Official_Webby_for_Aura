import React from 'react';
import './scss/style.scss';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Accordion from './Accordion/Accordion';

const Footer = () => {
    return (
        <footer id="footer" className="footer-area">
            <div className="footer__top bg--cart-2">
                <div className="container">
                    <div className="row" >
                        {/* <!-- Start Single Wedget --> */}
                        <div className="col col-lg-5 col-md-6 col-sm-6 mt-5 col-12">
                            <div className="single__wedget">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/footer_img/logo/voopo.png" alt="voip" /></a>
                                </div>
                                <div className="content">
                                    {/* <p>There are variations of passages of Lorem Ipsum available, the majority have suffered alteration.</p> */}
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Wedget -->

                        
                    <!-- Start Single Wedget --> */}
                        <div className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 col-12 mt-5  xs__mt--40">
                            <div className="single__wedget">
                                <h2 className="ft__title">Quick Links</h2>
                                <ul className="ft__contact__link">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5 sm__mt--40 md__mt--40">
                            <div className="single__wedget">
                                <h2 className="ft__title">Locate Us</h2>
                                <ul className="ft__contact__link">
                                    <li><a href="#">KNUST,Kumasi</a></li>
                                    <li><a href="#">Ghana</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Single Wedget --> */}
                    </div>
                </div>
            </div>
            <div className="copyright bg--cart-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright__inner">
                                <p>Copyright 2020 © All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="ft__social__link">
                                {/* TODO: Replace the icons with react icons */}
                                <ul className="social-icon">
                                    <li><a href="#"><FaFacebook /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
