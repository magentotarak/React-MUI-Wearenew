import React from "react";
import Sticky from "./Common/Navigation/Sticky";
import Topcontainer from "./Common/Navigation/Topcontainer";
import './Css/Base.css';
import Footer from "./Common/Footer";
import Intro from "./About/Intro";

function Baseabout() {
  return (
    <>


      <Topcontainer />
      <Sticky />
     <Intro/>
      <Footer/>



    </>
  );
}

export default Baseabout;