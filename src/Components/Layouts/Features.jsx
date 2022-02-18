import React, { Fragment, useEffect } from 'react'
import $ from 'jquery'
const Features = () => {
    return (

        < Fragment >
            <section className="featured-nine">
                <div className="container">
                    <div className="section-title style-five text-center">
                        <h3 className="sub-title wow pixFadeUp">What We Do</h3>
                        <h2 className="title wow pixFadeUp" data-wow-delay="0.2s">
                            How can we Help You
                        </h2>
                    </div>{/* /.section-title */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="saaspik-icon-box-wrapper style-ten wow fadeInRight" data-wow-delay="0.3s">
                                <div className="saaspik-icon-box-icon">
                                    <img src="media/feature/61.png" alt="" />
                                </div>
                                <div className="pixsass-icon-box-content">
                                    <h3 className="pixsass-icon-box-title"><a href="#">Fully Secured Web Applications</a></h3>
                                    <p>
                                        We provide our client with Fully integrated suite of tools to manage your business from small to medium sized enterprises.
                                        {/* Our solutions allows you to put your business on complete automation manage any of the following front-office and back-office activities Our solutions offer a fully integrated suite of tools to manage your business */}
                                    </p>
                                    {/* <a href="#" className="pix-btn btn-grey color-three">Learn More</a> */}
                                </div>
                            </div>{/* /.pixsass-box style-ten wow fadeInRight */}
                        </div>{/* /.col-lg-4 col-md-6 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="saaspik-icon-box-wrapper style-ten wow fadeInRight" data-wow-delay="0.5s">
                                <div className="saaspik-icon-box-icon">
                                    <img src="media/feature/62.png" alt="" />
                                </div>
                                <div className="pixsass-icon-box-content">
                                    <h3 className="pixsass-icon-box-title"><a href="#">Easy Support</a></h3>
                                    <p>
                                       We provide Long Term Support for your Applications and make  Sure your Bussiness never gets Effect.
                                       We embrace latest technologies to meet your business challenges precisely.
                                    </p>
                                    {/* <a href="#" className="pix-btn  color-three btn-grey">Learn More</a> */}
                                </div>
                            </div>{/* /.pixsass-box style-ten wow fadeInRight */}
                        </div>{/* /.col-lg-4 col-md-6 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="saaspik-icon-box-wrapper style-ten wow fadeInRight" data-wow-delay="0.7s">
                                <div className="saaspik-icon-box-icon">
                                    <img src="media/feature/63.png" alt="" />
                                </div>
                                <div className="pixsass-icon-box-content">
                                    <h3 className="pixsass-icon-box-title"><a href="#"> Web  &amp; Applications Development</a></h3>
                                    <p>
                                    Deep experience & creative expertise: An unrelenting focus on high quality, while offering our clients world-class services sets us apart from the competition
                                    </p>
                                    {/* <a href="#" className="pix-btn btn-grey color-three">Learn More</a> */}
                                </div>
                            </div>{/* /.pixsass-box style-ten wow fadeInRight */}
                        </div>{/* /.col-lg-4 col-md-6 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>{/* /.featured */}
            {/*============================*/}
            {/*=         Tabs         =*/}
            {/*============================*/}
            <section className="app-tabs">
                <div className="container-wrap bg-color-one">
                    <div className="container">
                        <div id="pix-tabs" className="tabs-three">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="download-tab-content">
                                        <div className="section-title style-five">
                                            <h3 className="sub-title wow fadeInUp">Selected Works</h3>
                                            <h2 className="title wow fadeInUp" data-wow-delay="0.3s">Get to the<br /> best outcome.</h2>
                                            <p className="wow fadeInUp" data-wow-delay="0.5s">
                                            All our services are fully integrated to exceed your business requirements.We are experts in presenting genuine & inventive web design, web development, and Mobile App Development in slicing, adaptation, assimilation and customization services 
                                            </p>
                                        </div>
                                        <ul id="pix-tabs-nav" className="wow fadeInUp" data-wow-delay="0.7s">
                                            <li><a href="#feature_tab1"><i className="ei ei-icon_pencil-edit" /> Website</a>
                                            </li>
                                            <li><a href="#feature_tab2"><i className="ei ei-icon_piechart" /> Erp &amp; Crm </a></li>
                                            <li><a href="#feature_tab3"><i className="ei ei-icon_mobile" /> Mobile App </a></li>
                                            {/* <li><a href="#feature_tab2"><i className="ei ei-icon_Se" /> Support</a></li> */}
                                        </ul> {/* tabs-nav */}
                                    </div>
                                    {/* /.download-tab-content */}
                                </div>
                                {/* /.col-lg-5 */}
                                <div className="col-lg-7">
                                    <div className="tabs-content-wrapper">
                                        <div id="pix-tabs-content" className="job-board-tabs-content wow fadeIn">
                                            <div id="feature_tab1" className="content">
                                                <div className="tab-image">
                                                    <img src="media/tabs/web.png" alt="sasspik tab" />
                                                </div>
                                                {/* /.tab-image */}
                                            </div>
                                            <div id="feature_tab2" className="content">
                                                <div className="tab-image">
                                                    <img src="media/tabs/erp.png" alt="sasspik tab" />
                                                </div>
                                                {/* /.tab-image */}
                                            </div>
                                            <div id="feature_tab3" className="content">
                                                <div className="tab-image">
                                                    <img src="media/tabs/mobile.png" alt="sasspik tab" />
                                                </div>
                                                {/* /.tab-image */}
                                            </div>
                                        </div> {/* tabs-content */}
                                        <div className="tab-bg-shape-wrapper">
                                            <div className="dot">
                                                <img src="media/tabs/dot.png" className="dot-shape" alt="saaspik" />
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="545px" height="641px" style={{ opacity: '0.1' }}>
                                                <defs>
                                                    <linearGradient id="PSgrad_0" x1="86.603%" x2="0%" y1="0%" y2="50%">
                                                        <stop offset="0%" stopColor="rgb(252,72,140)" stopOpacity="0.96" />
                                                        <stop offset="100%" stopColor="rgb(26,191,104)" stopOpacity="0.96" />
                                                        <stop offset="100%" stopColor="rgb(126,63,244)" stopOpacity="0.96" />
                                                    </linearGradient>
                                                </defs>
                                                <path fillRule="evenodd" opacity="0.102" fill="rgb(126, 63, 244)" d="M1.000,160.999 C23.035,-96.001 800.875,-81.679 457.464,487.628 C425.619,540.421 352.186,601.676 289.000,627.999 C217.967,657.591 134.004,632.446 143.000,563.999 C171.000,350.964 -4.898,229.782 1.000,160.999 Z" />
                                                <path fill="url(#PSgrad_0)" d="M1.000,160.999 C23.035,-96.001 800.875,-81.679 457.464,487.628 C425.619,540.421 352.186,601.676 289.000,627.999 C217.967,657.591 134.004,632.446 143.000,563.999 C171.000,350.964 -4.898,229.782 1.000,160.999 Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* /.tabs-content-wrapper */}
                                </div>
                                {/* /.col-lg-7 */}
                            </div>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.container */}
                </div>
                {/* /.container-wrap */}
            </section>
            {/* /.job-bord-tabs */}
            {/*=================================*/}
            {/*=         Image Content         =*/}
            {/*=================================*/}
            <section id="app_image_content">
                <div className="container">
                    <div className="app-image-content-wrapper-one">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="app-download-image">
                                    <img src="media/feature/app1.png" className="wow fadeInDown" alt="saaspik" />
                                </div>
                                {/* /.animaated-elements-three */}
                            </div>
                            {/* /.col-lg-5 */}
                            <div className="col-lg-7">
                                <div className="image-content-three app-content-wrap pl-85">
                                    <div className="section-title">
                                        <h2 className="title wow fadeInUp">
                                            Quickly query <br />
                                            and Instant Support
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="0.3s">
                                           We provide Long Term Support For your Web Applications.
                                        </p>
                                        <ul className="list-items list-icon-arrow wow fadeInUp" data-wow-delay="0.4s">
                                            <li>Quick Access</li>
                                            <li>Easy setup process</li>
                                            <li>Live call support</li>
                                        </ul>
                                    </div>
                                    {/* <a href="#" className="app-btn-two btn-light wow flipInX" data-wow-delay="0.5s">
                                        <i className="fi flaticon-google-play" />
                                        <span className="btn-text">
                                            <span className="text-top">Get on the</span>
                                            <span>Google play</span>
                                        </span>
                                    </a> */}
                                </div>
                                {/* /.image-content-three */}
                            </div>
                            {/* /.col-lg-7 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.job-image-content-wrapper-one */}
                    <div className="app-image-content-wrapper-two">
                        <div className="row align-items-center">
                            <div className="col-lg-7 pix-order-two">
                                <div className="image-content-three app-content-wrap pr-85">
                                    <div className="section-title">
                                        <h2 className="title wow fadeInUp">
                                            Set your<br />
                                            own targets.
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="0.3s">
                                        From conceptualization to full website development implementation we have serviced our clients in wide range of industries whether it’s a start up or a big company. From PSD to HTML, React JS , Node JS,and MongoDb,Mysql
                                         our web development services come with unmatched customer support. We embrace latest technologies to meet your business challenges precisely.
                                        </p>
                                        <ul className="list-items list-icon-arrow wow fadeInUp" data-wow-delay="0.4s">
                                            {/* <li>Quick Access</li>
                                            <li>Easy setup process</li>
                                            <li>Live call support</li> */}
                                        </ul>
                                    </div>
                                    {/* <a href="#" className="app-btn-two btn-light wow flipInX" data-wow-delay="0.5s">
                                        <i className="fi flaticon-google-play" />
                                        <span className="btn-text">
                                            <span className="text-top">Get on the</span>
                                            <span>Google play</span>
                                        </span>
                                    </a> */}
                                </div>
                                {/* /.image-content-three */}
                            </div>
                            {/* /.col-lg-7 */}
                            <div className="col-lg-5">
                                <div className="app-download-image">
                                    <img src="media/feature/app2.png" className="wow fadeInDown" alt="saaspik" />
                                </div>
                            </div>
                            {/* /.col-lg-5 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.job-image-content-wrapper-two */}
                </div>
                {/* /.container */}
            </section>
            {/* /#job_image_content */}
            {/*============================*/}
            {/*=         Download         =*/}
            {/*============================*/}
            <section className="download-two">
                <div className="container-wrap bg-color-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="download-feature-image-two">
                                    <img src="media/download/3.png" alt="" className="image-one wow pixFadeRight" />
                                    <img src="media/download/4.png" alt="" className="image-two wow pixFadeLeft" />
                                </div>
                                {/* /.download-feature-image */}
                            </div>
                            {/* /.col-lg-7 */}
                            <div className="col-lg-5 pix-order-one">
                                <div className="download-wrapper-two">
                                    <h2 className="title wow pixFadeUp">Create</h2>
                                    <h2 className="title wow pixFadeUp" style={{marginLeft: '100px'}}>Debug</h2>
                                    <h2 className="title wow pixFadeUp">Deliver</h2>
                                    {/* <p className="wow pixFadeUp" data-wow-delay="0.3s">
                                    Delivering technology solutions.
                                    </p> */}
                                    {/* <div className="app-btn-wrapper">
                                        <a href="#" className="app-btn-two wow flipInX" data-wow-delay="0.5s">
                                            <i className="fi flaticon-google-play" />
                                            <span className="btn-text">
                                                <span className="text-top">Get on the</span>
                                                <span>Google play</span>
                                            </span>
                                        </a>
                                    </div> */}
                                    {/* /.app-btn-wrapper */}
                                </div>
                                {/* /.download-wrapper */}
                            </div>
                            {/* /.col-lg-5 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                    <div className="section-animate-element">
                        <div className="leaf-top">
                            <img src="media/download/leaf1.png" alt="saaspik leaf" />
                        </div>
                        <div className="leaf-bottom">
                            <img src="media/download/leaf2.png" alt="saaspik leaf" />
                        </div>
                        <div className="ball">
                            <img src="media/download/ball.png" alt="saaspik" />
                        </div>
                        <div className="triangle">
                            <img src="media/download/triangle.png" alt="saaspik" />
                        </div>
                    </div>
                </div>
                {/* /.container-wrap */}
            </section>
        </Fragment >
    )
}

export default Features