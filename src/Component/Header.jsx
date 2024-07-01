import React from "react";


function Header(){
    return(
        
    <header>
        <div className="container">
          <div className="header">
        <div><img src="Images/Logo.png" alt="logo"/></div>
        <div>
            <nav className="menu">
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/">Products & Services</a>
                <a href="/">News</a>
                <a href="/">Career</a>
                <a href="/contact-us">Contact Us</a>
            </nav>
        </div>
        </div>
        </div>
    </header>

        
     
    );
}

export default Header;