import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery"

const Header = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        const script = document.createElement('script');

        script.src = "assets/js/header.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }

    }

    const onReload = () => {
        window.location.reload()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Fragment>
            <div onClick={handleToggle}>
                <div class="home-version-6" data-style="default" >
                    <header className="site-header header-eight header_trans-fixed" data-top={992} >
                        <div className="container" >
                            <div className="header-inner">
                                <div className="toggle-menu">
                                    <span className="bar" />
                                    <span className="bar" />
                                    <span className="bar" />
                                </div>
                                {/* /.toggle-menu */}
                                <div className="site-mobile-logo">
                                    <a href="/" className="logo">
                                        <img src="assets/img/logo.jpg" alt="site logo" className="main-logo" />
                                        <img src="assets/img/logo.jpg" alt="site logo" className="sticky-logo" />
                                    </a>
                                </div>
                                <nav className="site-nav">
                                    <div className="close-menu">
                                        <span>Close</span>
                                        <i className="ei ei-icon_close" />
                                    </div>
                                    <div className="site-logo">
                                        <a href="/" className="logo">
                                            <img src="assets/img/logo.jpg" alt="site logo" className="main-logo" />
                                            <img src="assets/img/logo.jpg" alt="site logo" className="sticky-logo" />
                                        </a>
                                    </div>
                                    {/* /.site-logo */}
                                    <div className="menu-wrapper" data-top={992} >
                                        <ul className="site-main-menu"  >
                                            <li onClick={onReload}>
                                                <Link to="/">Home</Link>

                                            </li>
                                            <li onClick={onReload} ><Link to="/about">About</Link></li>
                                            <li onClick={onReload} >
                                                <Link to="/services">Services</Link>
                                            </li>
                                            <li onClick={onReload}><Link to="/contact">Contact</Link></li>
                                        </ul>
                                        {/* <div>
                                        <Hamburger onClick={handleToggle}/>
                                    </div> */}
                                    </div>
                                    {/* /.menu-wrapper */}
                                    <div className="nav-right">
                                        <Link to="/contact" className="nav-btn">Get Quote</Link>
                                    </div>
                                </nav>{/* /.site-nav */}
                            </div>{/* /.header-inner */}
                        </div>{/* /.container */}
                    </header>
                </div>
            </div>

        </Fragment>
    )
}

export default Header