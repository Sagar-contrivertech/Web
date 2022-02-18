import React, { Fragment,useState } from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'
import Loader from '../Loader'
import axios from 'axios'
import swal from 'sweetalert'

const Contact = () => {
    const [data, setdata] = useState({ email: '', name: '', Subject: '', message: '' })
    const url = "https://mighty-chamber-40377.herokuapp.com/api/query"

    const Registration = (e) => {
        e.preventDefault();
        const contactData = { email: data.email, Subject: data.Subject, message: data.message, name: data.name }
        console.log(url)
        axios.post(url, contactData).then((res) => {
            if (res.status == 200) {
                console.log(res)
                swal('We will contact you soon')
                setdata({ email: '', name: '', Subject: '', message: '' })
            } else {
                console.log('err')
            }
        })
    }
    const onChange = (e) => {
        e.preventDefault();
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <Fragment>
            {/* <Loader /> */}
            <Header />
            <div>
                <section className="page-banner-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="page-title-wrapper">
                                    <div className="page-title-inner">
                                        <h1 className="page-title">We could just be <br /> what your brand needs</h1>
                                        {/* <p>
                                        we could just be what your brand needs
                                        </p> */}
                                    </div>
                                    {/* /.page-title-inner */}
                                </div>
                                {/* /.page-title-wrapper */}
                            </div>
                            {/* /.col-lg-8 */}
                            <div className="col-lg-4">
                                <div className="animate-element-contact">
                                    <img src="media/animated/001.png" alt="" className="wow pixFadeDown" data-wow-duration="1s" />
                                    <img src="media/animated/002.png" alt="" className="wow pixFadeUp" data-wow-duration="2s" />
                                    <img src="media/animated/003.png" alt="" className="wow pixFadeLeft" data-wow-delay="0.3s" data-wow-duration="2s" />
                                    <img src="media/animated/004.png" alt="man" className="wow pixFadeUp" data-wow-duration="2s" />
                                </div>
                                {/* /.animate-element-contact */}
                            </div>
                            {/* /.col-lg-4 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                    <svg className="circle" data-parallax="{&quot;y&quot; : 250}" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="950px" height="950px">
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
                {/*===========================*/}
                {/*=         Contact         =*/}
                {/*===========================*/}
                <section className="contactus">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-infos">
                                    <div className="contact-info">
                                        <h3 className="title">Our Location</h3>
                                        <p className="description">
                                            Kandivali West, <br />Mumbai 400067
                                        </p>
                                        <div className="info phone">

                                        </div>
                                    </div>
                                    {/* /.contact-info */}
                                    <div className="contact-info">
                                        <h3 className="title">Say Hello</h3>
                                        <p className="description">

                                        </p>
                                        <div className="info Phone">
                                            <i className="ei ei-icon_phone" />

                                            <a href="tel:9920033369">+91-9920033369</a> <br />
                                            <i className="ei ei-icon_phone" />
                                            <a href='tel:8779742206'>+91-8779742206</a>
                                        </div>
                                    </div>
                                    {/* /.contact-info */}
                                </div>
                                {/* /.contact-infos */}
                            </div>
                            {/* /.col-md-4 */}
                            <div className="col-md-8">
                                <div className="contact-froms">
                                    <form  className="contact-form" data-pixsaas="contact-froms" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" name="name" placeholder="Name" required   onChange={onChange}
                                                value={data.name}/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="email" placeholder="Email" required   value={data.email}
                                                onChange={onChange}/>
                                            </div>
                                        </div>
                                        <input type="text" name="Subject" placeholder="Subject"  value={data.Subject}
                                                onChange={onChange}/>
                                        <textarea name="content" placeholder="Your Comment" required defaultValue={""} 
                                        name='message'
                                        value={data.message}
                                        onChange={onChange}
                                        />
                                        <button type="submit" className="pix-btn submit-btn" onClick={(e)=>Registration(e)}>
                                            <span className="btn-text">Send Your Massage</span>
                                            <i className="fas fa-spinner fa-spin" />
                                        </button>
                                        {/* <input type="hidden" name="recaptcha_response" id="recaptchaResponse" /> */}
                                        {/* <div className="row">
                                            <div className="form-result alert">
                                                <div className="content" />
                                            </div>
                                        </div> */}
                                    </form>
                                    {/* /.contact-froms */}
                                </div>
                                {/* /.faq-froms */}
                            </div>
                            {/* /.col-md-8 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                </section>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Contact