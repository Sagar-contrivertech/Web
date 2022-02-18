import React, { Fragment } from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Loader from "../Loader";
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <Fragment>
            {/* <Loader /> */}
            <Header />
            <div>
                <section className="page-banner">
                    <div className="container">
                        <div className="page-title-wrapper">
                            <h1 className="page-title">About Us</h1>
                            <ul className="bradcurmed">
                                <li><a href="index.html" rel="noopener noreferrer">Home</a></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        {/* /.page-title-wrapper */}
                    </div>
                    {/* /.container */}
                    <svg className="circle" data-parallax="{&quot;x&quot; : -200}" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="950px" height="950px">
                        <path fillRule="evenodd" stroke="rgb(250, 112, 112)" strokeWidth="100px" strokeLinecap="butt" strokeLinejoin="miter" opacity="0.051" fill="none" d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z" />
                    </svg>
                    <ul className="animate-ball">
                        <li className="ball" />
                        <li className="ball" />
                        <li className="ball" />
                        <li className="ball" />
                        <li className="ball" />
                    </ul>
                </section>
                {/* /.page-banner */}
                {/*=========================*/}
                {/*=         About         =*/}
                {/*=========================*/}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="about-content">
                                    <div className="section-title">
                                        {/* <h3 className="sub-title wow pixFadeUp">Our History</h3> */}
                                        <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">
                                            We transform your ideas
                                            <br/>
                                             into engaging digital experiences <br />
                                        </h2>
                                    </div>
                                    {/* /.section-title */}
                                    <p className="description wow pixFadeUp" data-wow-delay="0.4s">
                                        A Global IT Company, provides all range of software services to our clients. We strive for excellence and follow modern paradigms and innovative methods to serve our clients with dedication, keeping in mind the needs of the global market. We are your ONE STOP SOLUTION for your Software needs
                                    </p>
                                    {/* <div className="singiture wow pixFadeUp" data-wow-delay="0.5s">
                                        <h4>
                                            Max Conversion
                                        </h4>
                                        <img src="media/about/sing.png" className="wow pixFadeUp" data-wow-delay="0.6s" alt="sign" />
                                    </div> */}
                                    {/* /.singiture */}
                                </div>
                                {/* /.about-content */}
                            </div>
                            {/* /.col-lg-7 */}

                            <div className="col-lg-5">
                                <div className="about-thumb wow pixFadeRight" data-wow-delay="0.6s" style={{ margin: '50px' }}>
                                    <img src="https://i.pinimg.com/originals/27/9d/a0/279da0eddd5cf914d29ec923e837e3fe.gif" alt="about" />
                                </div>
                                {/* /.about-thumb */}
                            </div>
                            {/* /.col-lg-5 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                </section>
                {/* /.about */}
                {/*===========================*/}
                {/*=         Feature         =*/}
                {/*===========================*/}

                {/* /.featured */}
                {/*===========================*/}
                {/*=         Count Up        =*/}
                {/*===========================*/}
                
            </div>
            <div>
                {/* /.testimonial */}
                {/*========================*/}
                {/*=         Team         =*/}
                {/*========================*/}
     
                {/* /.teams */}
                {/*=================================*/}
                {/*=         Logo Carousel         =*/}
                {/*=================================*/}
              
                {/* /.brand-logo */}
                {/*==================================*/}
                {/*=         Call To Action         =*/}
                {/*==================================*/}
                <section className="call-to-action" style={{margin:'40px',borderRadius:'20px'}}>
                    <div className="overlay-bg"><img src="media/background/ellipse.png" alt="bg" /></div>
                    <div className="container">
                        <div className="action-content text-center wow pixFadeUp">
                            <h2 className="title">
                                We are optimists who<br />
                                love to work together
                            </h2>
                            <p>
                                Connect With Us to FullFill Your Bussiness Requirment.
                            </p>
                            <Link to ="/contact" className="pix-btn btn-light" style={{cursor:'pointer'}}>Let's Connect</Link>
                        </div>
                        {/* /.action-content */} 
                    </div>
                    {/* /.container */}
                    {/* <div className="scroll-circle">
                        <img src="media/background/circle13.png" data-parallax="{&quot;y&quot; : -130}" alt="circle" />
                    </div> */}
                    {/* /.scroll-circle */}
                </section>
            </div>


            <Footer />
        </Fragment>
    )
}
export default About