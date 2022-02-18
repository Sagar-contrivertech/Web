import React, { Fragment } from 'react'
import Bubble from './Bubble'

const Banner = () => {
    return (
        <Fragment>
            <section className="banner banner-eight">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banne-content-wrapper-eight">
                                <h3 className="subtitle wow fadeInUp"><span>New</span> SOFTWARE DEVELOPMENT WITH REMARKABLE  RESULTS</h3>
                                <h1 className="banner-title wow fadeInUp" data-wow-delay="0.3s">
                                    <span>One Stop</span><br />
                                    <h5>Solutions for Web and AppServices</h5>
                                </h1>
                                <p className="description wow fadeInUp" data-wow-delay="0.5s">
                                    Contriver Tech is a dynamic and rapidly growing website development company that combines capability and devotion with your goals to achieve the perfect end-result that makes your business profitable
                                </p>
                                {/* <div className="banner-button-container">
                                    <a href="#" className="banner-btn pix-btn btn-four btn-round wow fadeInUp" data-wow-delay="0.7s">Get */}
                                {/* Started</a> */}
                                {/* <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="play-btn play-btn-outline popup-video wow pixFadeUp" data-wow-delay="0.6s">
                                        <i className="ei ei-arrow_triangle-right" /> Watch Video</a> */}
                                {/* </div> */}
                            </div>
                            {/* /.banne-content-wrapper-six */}
                        </div>
                        {/* /.col-lg-6 */}
                        <div className="col-lg-6">
                            <div className="banner-six-promo-image text-right">
                                <img src="media/banner/app/mockup.png" className="wow pixZoomIn" alt="saaspik" />
                                <div className="banner-leaf">
                                    <div className="leaf-left">
                                        <img src="media/banner/app/leaf1.png" alt="saaspik leaf" />
                                    </div>
                                    <div className="leaf-right">
                                        <img src="media/banner/app/leaf2.png" alt="saaspik leaf" />
                                    </div>
                                </div>
                            </div>
                            {/* /.banner-six-promo-image */}
                        </div>
                        {/* /.col-lg-6 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
                <div className="banner-background-element">
                    {/* <div className="ball">
                        <img src="media/banner/app/ball.png" data-parallax alt="saaspik ball" />
                    </div> */}
                    <div className="triangle">
                        <img src="media/banner/app/triangle.png" alt="saaspik ball" />
                    </div>
                    <div className="dot-shape">
                        <img src="media/banner/app/dot.png" alt="saaspik" />
                    </div>
                    <div className="circle-bg" />
                </div>
            </section>
            <ul className="home-animate-ball">
                <li className="home-ball" />
                <li className="home-ball" />
                <li className="home-ball" />
                <li className="home-ball" />
            </ul>
        </Fragment>
    )
}

export default Banner