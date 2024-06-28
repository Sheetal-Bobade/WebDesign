//import React, { useState, useEffect } from "react";
import triangle from "../assets/triangle.svg";
import bg from "../assets/bg-2.mp4";
import join from "../assets/join-our-team.mp4";
import { Button } from 'react-bootstrap';
import img1 from '../assets/about-img-2.png';
import News from "../Component/News";
import abtimg1 from "../assets/about-img-1.png";
import abtimg3 from "../assets/about-img-3.png";
import vectorbg1 from "../assets/vector-bg-1.png";
import vectorbg5 from "../assets/vector-bg-5.png";
import vectorbg6 from "../assets/vector-bg-6.png";


function AboutUs() {
    
    return (
    
            <><section className="home-main-section about">
            <div className="home-main-bg">
                <video className="videoTag" autoPlay loop muted>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>

            <div className="home-main-overlay">
                <div className="home-main">
                <div className="container">
                    <div className="home-main-flex">
                        <div className="icon-triangle home-main-icon active">
                            <img src={triangle} alt="triangle" />
                        </div>
                        
                            <div className= "slide home-main-text active">
                            
                                <h1>Advancing Oligonucleotide Science</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Morbi ornare interdum metus, vitae semper mauris tristique eu.
                                      Nunc vehicula, 
                                     orci quis suscipit tincidunt, 
                                    turpis mi ultrices tellus, nec tempus orci augue in dolor.
                                    Nunc nec dapibus arcu. Aliquam erat volutpat. Suspendisse
                                     nec ex ac odio eleifend tristique. Aenean tempus nisl diam,
                                      nec tempus ex sollicitudin id.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-padding">
        <img src={vectorbg1} alt="vector-bg-1" className="vector-bg-1" />
                <div className="container">
                    <div className="about-flex">
                        <div className="about-content-col">
                    <h1 className="section-head left">Discover new career <span>opportunities</span></h1>
                    <p className="section-text left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi ornare interdum metus, vitae semper mauris tristique eu. 
                    Nunc vehicula, orci quis suscipit tincidunt, turpis mi ultrices tellus, 
                    nec tempus orci augue in dolor. Maecenas quam nisi, aliquet id porta sed, 
                    tristique lacinia mauris. Donec sit amet lacus quis dui imperdiet cursus non a nisi.<br/><br/>
                    Nunc nec dapibus arcu. Aliquam erat volutpat. Suspendisse nec ex ac odio eleifend tristique. 
                    Aenean tempus nisl diam, nec tempus ex sollicitudin id.
                    </p>
                    <div className="abt-icon-flex">
                        <div className="icon-col">
                        <img src={triangle} alt="triangle" />
                         <h1>2006</h1>
                         <p>Established</p>
                        </div>

                        <div className="icon-col">
                        <img src={triangle} alt="triangle" />
                         <h1>8900+</h1>
                         <p>Global Partners</p>
                        </div>

                        <div className="icon-col">
                        <img src={triangle} alt="triangle" />
                         <h1>10+</h1>
                         <p>R&D Centers and CDMO</p>
                        </div>
                    </div>
                    </div>
                    <div className="about-img-col">
                    <img src={abtimg1} alt="abt-img-1" className="abt-img-1" />
                    </div>
                    </div>

                    
                    <h1 className="section-head top-padding">Our <span>facilities</span></h1>
                    <div className="service-flex">
                    <div className="service-col about">
                        <img src={img1} alt="img1" />
                            <div>
                            <h3>Preclinical Manufacturing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Morbi ornare interdum metus, 
                                vitae semper mauris tristique eu. Nunc vehicula, 
                                orci quis suscipit tincidunt, turpis mi ultrices tellus, 
                                nec tempus orci augue in dolor.</p>
                            <Button variant="link">View More</Button>
                            </div>
                        </div>

                        <div className="service-col about">
                        <img src={img1} alt="img1" />
                            <div>
                            <h3>Preclinical Manufacturing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Morbi ornare interdum metus, 
                                vitae semper mauris tristique eu. Nunc vehicula, 
                                orci quis suscipit tincidunt, turpis mi ultrices tellus, 
                                nec tempus orci augue in dolor.</p>
                            <Button variant="link">View More</Button>
                            </div>
                        </div>
                        </div>

                </div>
            </section>
            
            
           <section className="section-padding section-bg">
           <img src={vectorbg5} alt="vector-bg-5" className="vector-bg-1" />
           <img src={vectorbg6} alt="vector-bg-6" className="vector-bg-2" />
           <div className="container">
                    <div className="about-flex second">
                        <div className="about-content-col second">
                    <h1 className="section-head left">Quality <span>Assurance</span></h1>
                    <p className="section-text left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi ornare interdum metus, vitae semper mauris tristique eu. 
                    Nunc vehicula, orci quis suscipit tincidunt, turpis mi ultrices 
                    tellus, nec tempus orci augue in dolor. Maecenas quam nisi, aliquet 
                    id porta sed, tristique lacinia mauris. Donec sit amet lacus quis dui 
                    imperdiet cursus non a nisi.<br/><br/>
                    Nunc nec dapibus arcu. Aliquam erat volutpat. 
                    Suspendisse nec ex ac odio eleifend tristique. 
                    Aenean tempus nisl diam, nec tempus ex sollicitudin id.
                    </p>
                    </div>
                    <div className="about-img-col second">
                    <img src={abtimg3} alt="abt-img-1" className="abt-img-1" />
                    </div>
                    </div>

                    <div className="about-flex second top-padding">  
                    <div className="about-img-col second">
                    <img src={abtimg3} alt="abt-img-1" className="abt-img-1" />
                    </div>

                    <div className="about-content-col second">
                    <h1 className="section-head left">Quality <span>Assurance</span></h1>
                    <p className="section-text left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi ornare interdum metus, vitae semper mauris tristique eu. 
                    Nunc vehicula, orci quis suscipit tincidunt, turpis mi ultrices 
                    tellus, nec tempus orci augue in dolor. Maecenas quam nisi, aliquet 
                    id porta sed, tristique lacinia mauris. Donec sit amet lacus quis dui 
                    imperdiet cursus non a nisi.<br/><br/>
                    Nunc nec dapibus arcu. Aliquam erat volutpat. 
                    Suspendisse nec ex ac odio eleifend tristique. 
                    Aenean tempus nisl diam, nec tempus ex sollicitudin id.
                    </p>
                    </div>
                    </div>
                    </div>

           </section>

           <section className="home-main-section cv">
            <div className="home-main-bg">
                <video className="videoTag" autoPlay loop muted>
                    <source src={join} type="video/mp4" />
                </video>
            </div>

            <div className="home-main-overlay">
                <div className="home-main">
                <div className="container">
                    <div className="send-cv">
                        <h1 class="section-head white">Join our team</h1>
                        <p class="section-text white">Aliquam erat volutpat. Suspendisse nec ex ac odio eleifend tristique.</p>
                        <button type="button" class="view-more-btn btn btn-primary">Send CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            
            <section className="section-padding news-section">
                <div className="container">
                    <h1 className="section-head">Our Latest <span>news</span></h1>
                    <p className="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec sollicitudin molestie malesuada.
                    </p>
                    <News />
                    <Button className="view-more-btn view-all" variant="primary">View all</Button>{' '}
                </div>
            </section></>

        
        
    );
}

export default AboutUs;
