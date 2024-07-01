import triangle from "../assets/triangle.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import bg from "../assets/contact-bg-main.png";
import vectorbg1 from "../assets/vector-bg-1.png";


function ContactUs() {
    
    return (
    
            <><section className="home-main-section about">
            <div className="home-main-bg">
                <img src={bg} alt="contact-bg-main" className="contact-bg-main" />
            </div>

            <div className="home-main-overlay">
                <div className="home-main contact">
                <div className="container">
                    <div className="home-main-flex">
                        <div className="icon-triangle home-main-icon active">
                            <img src={triangle} alt="triangle" />
                        </div>
                        
                            <div className= "slide home-main-text active">
                            
                                <h1>Lorem ipsum dolor</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-padding">
        <img src={vectorbg1} alt="vector-bg-1" className="vector-bg-1" />
                <div className="container">
                    <div className="contact-flex">
                        <div className="contact-content-col">
                    <h1 className="section-head left">Contact <span>Information</span></h1>
                    <p className="section-text left">
                    Donec rutrum congue leo eget malesuada. 
                    Nulla porttitor accumsan tincidunt. 
                    Proin eget tortor risus.
                    </p>
                    <div className="contact-content-flex">
                        <div className="con-icon-col">
                        <img src={location} alt="location" />
                        <div>
                        <h1>Princetown Branch</h1>
                         <p>2825 Masonic Hill Road, Little Rock, Arkansas 72201</p>
                        </div>
                        </div>

                        <div className="con-icon-col">
                        <img src={phone} alt="phone" />
                        <div>
                         <h1>Phone Number</h1>
                         <p>+353 000 0000</p>
                        </div>
                        </div>

                        <div className="con-icon-col">
                        <img src={email} alt="email" />
                        <div>
                         <h1>Email</h1>
                         <p>contact@webname.com</p>
                         </div>
                        </div>
                    </div>
                    </div>
                    <div className="contact-form-col">
                    <form>
                    <input type="text" placeholder="Full name *" /><br/>
                    <input type="text" placeholder="Email *" /><br/>
                    <input type="text" placeholder="Company *" /><br/>
                    <input type="text" placeholder="Phone number *" /><br/>

                    <div className="contact-form-col-flex">
                    <input type="text" placeholder="City *" />
                    <input type="text" placeholder="State *" />
                    <input type="text" placeholder="ZIP *" />
                    <input type="text" placeholder="Select country *" />
                    </div>

                    <textarea placeholder="Comments"></textarea><br/>
                    <input type="submit" value="Submit"/>
                        </form>
                    </div>
                    </div>

                    
                    

                </div>
            </section></>

        
        
    );
}

export default ContactUs;
