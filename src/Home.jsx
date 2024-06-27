import React, { useState, useEffect } from "react";
import logo from "./assets/triangle.svg";
import bg from "./assets/bg-1.mp4";
import { Button } from 'react-bootstrap';
import img1 from './assets/img1.png';
import Award from "./Component/Award";
import News from "./Component/News";
import vectorbg1 from "./assets/vector-bg-1.png";
import vectorbg2 from "./assets/vector-bg-2.png";
import vectorbg3 from "./assets/vector-bg-3.png";
import vectorbg4 from "./assets/vector-bg-4.png"


function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
            title: "Advancing Oligonucleotide Science",
            description: "siRNA, ASO, Aptamers, and More for Revolutionary Therapies."
        },
        {
            title: "Commitment to Quality",
            description: "Excellence in CDMO Manufacturing and Development - From Research to GMP Scale Production."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
    
            <><section className="home-main-section">
            <div className="home-main-bg">
                <video className="videoTag" autoPlay loop muted>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>

            <div className="home-main">
                <div className="container">
                    <div className="home-main-flex">
                        <div className={`icon-triangle home-main-icon ${activeSlide === 0 ? "active" : ""}`}>
                            <img src={logo} alt="triangle" />
                        </div>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide home-main-text ${index === activeSlide ? "active" : ""}`}
                            >
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <section className="home-second section-padding">
        <img src={vectorbg1} alt="vector-bg-1" className="vector-bg-1" />
        <img src={vectorbg2} alt="vector-bg-2" className="vector-bg-2" />
                <div className="container">
                    <h1 className="section-head">Oligonucleotide <span>Science</span></h1>
                    <p className="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi ornare interdum metus, vitae semper mauris tristique eu.
                        Nunc vehicula, orci quis suscipit tincidunt, turpis mi ultrices tellus,
                        nec tempus orci augue in dolor. Maecenas quam nisi, aliquet id porta sed,
                        tristique lacinia mauris. Donec sit amet lacus quis dui imperdiet cursus
                        non a nisi. Nunc nec dapibus arcu. Aliquam erat volutpat. Suspendisse nec
                        ex ac odio eleifend tristique. Aenean tempus nisl diam, nec tempus ex
                        sollicitudin id.
                    </p>
                    <Button className="view-more-btn" variant="primary">View more</Button>{' '}

                </div>
            </section>
            
            <section className="section-padding">
            <img src={vectorbg3} alt="vector-bg-3" className="vector-bg-2" />
                <div className="container">
                    <h1 className="section-head">Products<span> & Services</span></h1>
                    <div className="service-flex">
                        <div className="service-col">
                            <img src={img1} alt="img1" />
                            <h3>Preclinical Manufacturing</h3>
                            <Button variant="link">View More</Button>
                        </div>

                        <div className="service-col">
                            <img src={img1} alt="img1" />
                            <h3>Preclinical Manufacturing</h3>
                            <Button variant="link">View More</Button>
                        </div>

                        <div className="service-col">
                            <img src={img1} alt="img1" />
                            <h3>Preclinical Manufacturing</h3>
                            <Button variant="link">View More</Button>
                        </div>
                    </div>

                    <div className="service-flex margin-top">
                        <div className="service-col">
                            <img src={img1} alt="img1" />
                            <h3>Preclinical Manufacturing</h3>
                            <Button variant="link">View More</Button>
                        </div>

                        <div className="service-col">
                            <img src={img1} alt="img1" />
                            <h3>Preclinical Manufacturing</h3>
                            <Button variant="link">View More</Button>
                        </div>

                        <div className="service-col">
                            <img src={img1} alt="img1" />
                            <h3>Preclinical Manufacturing</h3>
                            <Button variant="link">View More</Button>
                        </div>
                    </div>
                </div>
            </section>
            
            <Award />
            
            <section className="section-padding news-section">
            <img src={vectorbg4} alt="vector-bg-4" className="vector-bg-2" />
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

export default Home;
