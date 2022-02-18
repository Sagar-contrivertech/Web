import React, { Fragment } from 'react'
import Banner from '../Layouts/Banner'
import Features from '../Layouts/Features'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'
import Team from '../Layouts/Teams'
import Loader from '../Loader'

const Home = () => {
    return (
        <Fragment>
           
            <div>
              
                <a href="#main_content" data-type="section-switch" className="return-to-top">
                    <i className="fa fa-chevron-up" />
                </a>
                {/* /.page-loader */}
                <div id="main_content">

                    {/*=   Navbar =*/}

                    <Header />

                    {/*= Banner  =*/}

                    <Banner />
                    {/* /.banner banner-six */}

                    {/*=  Feature =*/}

                    <Features />
                    {/* /.download */}

                    {/*= Team =*/}

                    <Team />
                    {/* /.client-logo-list */}
                    {/*=        Footer         =*/}
                    <Footer />
                </div>{/* /#site */}
            </div>
        </Fragment>
    )
}

export default Home