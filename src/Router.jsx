import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About-Us"

function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="about-us" element={ <AboutUs/> }/>
        </Routes>
    )
}

export default Allroutes