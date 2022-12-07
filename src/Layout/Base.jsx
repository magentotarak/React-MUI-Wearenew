import React from "react";
import Sticky from "./Common/Navigation/Sticky";
import Topcontainer from "./Common/Navigation/Topcontainer";
import Howwework from './Home/Section/Howwework';
import './Css/Base.css';
import Shordetails from "./Home/Section/Shordetails";
import Servicedetails from "./Home/Section/Servicedetails";
import Formdetails from "./Home/Section/Formdetails";
import Footer from "./Common/Footer";

function Base() {
  return (
    <>


      <Topcontainer />
      <Sticky />
      <Servicedetails/>
      <Howwework />
      <Shordetails/>
      <Formdetails/>
      <Footer/>



    </>
  );
}

export default Base;