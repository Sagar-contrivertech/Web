import React, { Fragment } from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Loader from "../Loader";

const Services = () => {
    return (
        <Fragment>
            {/* <Loader/> */}
            <Header />
            {/*  */}
            <div>
                <section className="page-banner">
                    <div className="container">
                        <div className="page-title-wrapper">
                            <h1 className="page-title">What We Do?</h1>
                            <ul className="bradcurmed">
                                <li><a href="#" rel="noopener noreferrer">Home</a></li>
                                <li>Services</li>
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

                <section className="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="popup-videos wow pixFadeRight">
                                    <div className="video-thumbnail">
                                        <img src="https://abit.bt/wp-content/uploads/2019/02/server.gif" alt="thumbnail" />
                                    </div>
                                    {/* /.video-thumbnail */}
                                    <a href="https://abit.bt/wp-content/uploads/2019/02/server.gif" ><i className="ei ei-arrow_triangle-right" /></a>
                                </div>
                                {/* /.popup-video */}
                            </div>
                            {/* /.col-lg-5 */}
                            <div className="col-lg-7">
                                <div className="service-content">
                                    <div className="section-title">
                                        <h3 className="sub-title wow pixFadeUp" data-wow-delay="0.3s">Our Service</h3>
                                        <h2 className="title wow pixFadeUp" data-wow-delay="0.5s">
                                            We Offer the Best<br />
                                            Business Solutions
                                        </h2>
                                    </div>
                                    {/* /.section-title */}
                                    <p className="wow pixFadeUp" data-wow-delay="0.7s">
                                    We design, develop and deploy digital products that meet or exceed your expectations - no matter how complex the project. We work across all web development stages - from initial design and wireframing to testing and QA. We help you translate any kind of design into functional digital products such as websites, mobile apps or enterprise solutions.
                                    </p>
                                </div>
                                {/* /.service-content */}
                            </div>
                            {/* /.col-lg-7 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                </section>
                {/* /.service */}
                {/*===========================*/}
                {/*=         Feature         =*/}
                {/*===========================*/}
                <section className="featured-two-service">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3 className="sub-title wow pixFadeUp">Our service</h3>
                            <h2 className="title wow pixFadeUp" data-wow-delay="0.3s">Why choose us ?</h2>
                        </div>{/* /.section-title */}
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="saaspik-icon-box-wrapper style-two wow pixFadeUp" data-wow-delay="0.3s">
                                    <div className="saaspik-icon-box-icon">
                                        <img src="https://miro.medium.com/max/1024/1*J8xwRYjRNLhPnCD-Yngurg.gif" alt=""  style={{height:'252px'}}/>
                                    </div>
                                    <div className="pixsass-icon-box-content">
                                        <h3 className="pixsass-icon-box-title"><a>App Development</a></h3>
                                        <p>We deliver an immersive mobile experience with native iOS and Android apps. Build an optimized custom mobile app. Quickly bring your business online, with SMS marketing and online reservations, while streamlining your operations in the cloud
                                        </p>
                                    </div>
                                </div>{/* /.pixsass-box style-two wow pixFadeUp */}
                            </div>{/* /.col-lg-4 col-md-6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="saaspik-icon-box-wrapper style-two wow pixFadeUp" data-wow-delay="0.5s">
                                    <div className="saaspik-icon-box-icon">
                                        <img src="https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif" alt="" style={{height:'252px'}} />
                                    </div>
                                    <div className="pixsass-icon-box-content">
                                        <h3 className="pixsass-icon-box-title"><a href="#">Web App</a></h3>
                                        <p>
                                        We provide innovative solutions implemented with wallet solutions that are W3C compliant. Our application development company provides client-centric solution. We have the ability to develop safe, secure and sustainable web applications.
                                        </p>
                                    </div>
                                </div>{/* /.pixsass-box style-two wow pixFadeUp */}
                            </div>{/* /.col-lg-4 col-md-6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="saaspik-icon-box-wrapper style-two wow pixFadeUp" data-wow-delay="0.7s">
                                    <div className="saaspik-icon-box-icon">
                                        <img src="https://www.bignetworld.com/wp-content/uploads/2018/10/Domain-Web-Hosting.gif" alt="" style={{height:'252px'}} />
                                    </div>
                                    <div className="pixsass-icon-box-content">
                                        <h3 className="pixsass-icon-box-title"><a >Dev ops</a></h3>
                                        <p>
                                        We build applications from scratch and support the infrastructure requirements of our clients, providing high availability and scalability. We do not use any off-the-shelf solutions.
                                        </p>
                                    </div>
                                </div>{/* /.pixsass-box style-two wow pixFadeUp */}
                            </div>{/* /.col-lg-4 col-md-6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="saaspik-icon-box-wrapper style-two wow pixFadeUp" data-wow-delay="0.9s">
                                    <div className="saaspik-icon-box-icon">
                                        <img src="https://globaledu.net.in/assets/images/gif/web-hosting.gif" alt="" />
                                    </div>
                                    <div className="pixsass-icon-box-content">
                                        <h3 className="pixsass-icon-box-title"><a>Web Design</a></h3>
                                        <p>
                                        At Contriver Tech, we know the difference between good design and great design. We obsess over the smallest of details, think outside the box and create experiences that bring in more business. Let us change the way your customers interact with your brand.
                                        </p>
                                    </div>
                                </div>{/* /.pixsass-box style-two wow pixFadeUp */}
                            </div>{/* /.col-lg-4 col-md-6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="saaspik-icon-box-wrapper style-two wow pixFadeUp" data-wow-delay="1s">
                                    <div className="saaspik-icon-box-icon">
                                        <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt=""  style={{height:'270px'}}/>
                                    </div>
                                    <div className="pixsass-icon-box-content">
                                        <h3 className="pixsass-icon-box-title"><a>Testing</a></h3>
                                        <p>
                                        Creating is not everything. We aim to ensure that software fully meets its requirements and user expectations. Our team of dedicated analysts perform formal non-functional testing on a daily basis in order to create an experience worth sharing
                                        </p>
                                    </div>
                                </div>{/* /.pixsass-box style-two wow pixFadeUp */}
                            </div>{/* /.col-lg-4 col-md-6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="saaspik-icon-box-wrapper style-two wow pixFadeUp" data-wow-delay="1.2s">
                                    <div className="saaspik-icon-box-icon">
                                        <img src="https://primacyinfotech.com/assets/images/crm-erp.gif" alt="" />
                                    </div>
                                    <div className="pixsass-icon-box-content">
                                        <h3 className="pixsass-icon-box-title"><a href="#">CRM / ERP</a></h3>
                                        <p>
                                        Whether you are a small company or a large enterprise, our custom CRM Services can help you accomplish your business goals and provide the right solution for your business. With on demand, we offer complete end to end solution with CRM Services. We specialize in designing and implementing custom CRM systems that fit your requirements.
                                        </p>
                                    </div>
                                </div>{/* /.pixsass-box style-two wow pixFadeUp */}
                            </div>{/* /.col-lg-4 col-md-6 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </section>{/* /.featured */}
                {/*===========================*/}
                {/*=         Count Up        =*/}
                {/*===========================*/}
                {/* /.pricing */}
                {/*===============================*/}
                {/*=         Testimonial         =*/}
                {/*===============================*/}
                
                {/*========================*/}
                {/*=         Team         =*/}
                {/*========================*/}
                <section className="newsletter-two" id="newsletter" style={{margin:"45px",borderRadius:'20px'}}>
                    <div className="container">
                        <div className="newsletter-content-two text-center wow pixFadeUp">
                            <h2 className="title">
                               Subscribe to NewsLetter !
                            </h2>
                        </div>
                        {/* /.newsletter-content */}
                        <form action="https://saaspik.pixelsigns.art/saaspik/php/subscribe.php" method="post" className="newsletter-form-two wow pixFadeUp" data-pixsaas="newsletter-subscribe">
                            <div className="newsletter-inner">
                                <input type="email" name="email" className="form-control" id="newsletter-form-email" placeholder="Enter your Email" required />
                                <button type="submit" name="submit" id="newsletter-submit" className="newsletter-submit">
                                    <span className="btn-text">Subscribe Now!</span>
                                    <i className="fas fa-spinner fa-spin" />
                                </button>
                                <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                            </div>
                            {/* /.newsletter-inner */}
                            <div className="clearfix" />
                            <div className="form-result alert">
                                <div className="content" />
                            </div>
                            {/* /.form-result*/}
                        </form>
                    </div>
                    {/* /.container */}
                    <div className="scroll-circle wow pixFadeUp">
                        <img src="media/background/circle12.png" data-parallax="{&quot;y&quot; : -230}" alt="circle6" />
                    </div>
                </section>
            </div>

            {/*  */}
            <Footer />
        </Fragment>
    )
}

export default Services