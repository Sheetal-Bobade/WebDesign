import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About-Us";
import ContactUs from "./Pages/Contact-Us"

function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/about-us" element={ <AboutUs/> }/>
            <Route path="/about-us" element={ <AboutUs/> }/>
            <Route path="/contact-us" element={ <ContactUs/> }/>
            
        </Routes>
    )
}

export default Allroutes