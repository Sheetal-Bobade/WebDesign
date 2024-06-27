import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./About-Us"

function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/about-us" element={ <AboutUs/> }/>
        </Routes>
    )
}

export default Allroutes