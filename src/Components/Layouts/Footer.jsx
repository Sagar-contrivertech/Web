import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <footer id="footer" className="footer-app">
                <div className="container-wrap bg-footer-color">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="row wow fadeInUp">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget footer-widget widget-about">
                                        <div href="#" className="footer-logo">
                                            <img src="assets/img/image.jpg" alt="saaspik" style={{height:"50px"}} />
                                          <p style={{color:"white", display: 'contents'}}> Contriver Tech</p> 
                                        </div>
                                        <p>
                                        We make it simple, faster, and reliable.
                                        </p>
                                        <h4 className="footer-title">Social</h4>
                                        <ul className="social-share-link">
                                            <li><a href="#" className="share_facebook"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="#" className="share_twitter"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="#" className="share_pinterest"><i className="fab fa-pinterest-p" /></a></li>
                                            <li><a href="#" className="share_linkedin"><i className="fab fa-linkedin-in" /></a></li>
                                        </ul>
                                    </div>
                                    {/* /.widget footer-widget */}
                                </div>
                                {/* /.col-lg-3 col-md-6 col-sm-6 */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget footer-widget widget-contact">
                                        <h3 className="widget-title">Main Office</h3>
                                        <ul className="widget-contact-info"  style={{cursor:'pointer'}}>
                                            <li><i className="ei ei-icon_pin_alt" />Mumbai ,MH</li>
                                            <li><i className="ei ei-icon_phone" />+91 8779742206 &amp; 9920033369</li>
                                            <li><a href='mailto:info@contrivertech.com '>
                                                <i className='ei ei-icon_mail'/>
                                                info@contriverteh.com</a></li>
                                        </ul>
                                    </div>
                                    {/* /.widget footer-widget */}
                                </div>
                                {/* /.col-lg-3 col-md-6 col-sm-6 */}
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget footer-widget">
                                        <h3 className="widget-title">Company</h3>
                                        <ul className="footer-menu">
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="#">Terms of Service</Link></li>
                                        </ul>
                                    </div>
                                    {/* /.widget footer-widget */}
                                </div>
                                {/* /.col-lg-3 col-md-6 col-sm-6 */}
                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="widget footer-widget">
                                       <img src="assets/footer.png" style={{width:'400px'}}/>
                                    </div>
                                    {/* /.widget footer-widget */}
                                </div>
                                {/* /.col-lg-3 col-md-6 col-sm-6 */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.footer-inner */}
                        <div className="site-info">
                            <div className="copyright text-center">
                                <p>© {new Date().getFullYear()} All Rights Reserved Design by <a href="/" target="_blank">Contriver Tech</a>
                                </p>
                            </div>
                        </div>
                    </div>{/* /.container */}
                </div>
                {/* /.container-wrap */}
            </footer>{/* /#footer */}
        </Fragment>
    )
}

export default Footer