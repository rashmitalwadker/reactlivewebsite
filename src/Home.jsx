import React from "react";
import digital from "../src/images/pic3.jpg";
import {NavLink} from "react-router-dom";
import Common from './Common';
const Home = () => {
return(
<>
<Common name="Grow Your Business With"
imgsrc={digital}visit="/service"
btname="Get Started"/>

</>
);
};

export default Home;