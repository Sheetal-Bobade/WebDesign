import React from "react";
import { Button } from 'react-bootstrap';
import { FaChevronRight  } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer(){
    return(
        
    <footer>
        
           <section className="footer-main">
            <div className="footer-main-bg">
                <video className="videoTag" autoPlay loop muted>
                    <source src="./Videos/footer-bg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="footer-main-content">
                <div className="container">
                <h1 className="section-head white">Let's innovate together</h1>
                <p className="section-text white">Contact us today to begin your innovation journey.</p>
                <Button className="view-more-btn" variant="primary">Lets Discuss your needs</Button>{' '}
                </div>
            </div>
            </section>

            <section className="footer-section">
                <div className="container">
                    <div className="footer-flex">

                        <div className="footer-col">
                            <h4 className="footer-head">Links</h4>
                            <ul>
                                <li>Our Works</li>
                                <li>Achievements</li>
                                <li>Team of Experts</li>
                                <li>Live Stream</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-head">Links</h4>
                            <ul>
                                <li>Our Works</li>
                                <li>Achievements</li>
                                <li>Team of Experts</li>
                                <li>Live Stream</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-head">Links</h4>
                            <ul>
                                <li>Our Works</li>
                                <li>Achievements</li>
                                <li>Team of Experts</li>
                                <li>Live Stream</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="footer-col last">
                            <div className="last-wrap">
                            <h4 className="footer-head">Subscribe</h4>
                            <form className="newsletter">
                             <input type="email" id="email" placeholder="example@gmail.com" name="email"/>
                             <button type="submit"><FaChevronRight/></button>
                             </form>
                           <p>
                            Curabitur non nulla sit amet nisl tempus convallis<br/> 
                            quis ac lectus. Pellentesque in ipsum id
                           </p>
                        </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="footer-section-last">
                <div className="container">
                <div className="footer-flex">
                    <div className="footer-col-last logo">
                    <img src="Images/Logo.png" alt="logo"/>
                    </div>

                    <div className="footer-col-last copyright">
                    <p>© 2024 websitename. All Rights Reserved.</p>
                    </div>

                    <div  className="footer-col-last social-links">
                    <FaInstagram />   
                    <FaFacebookF />
                    <FaLinkedinIn />

                    </div>
                </div>
                </div>

            </section>
        
    </footer>

        
     
    );
}

export default Footer;