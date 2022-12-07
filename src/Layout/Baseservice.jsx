import React from 'react'
import Sticky from "./Common/Navigation/Sticky";
import Topcontainer from "./Common/Navigation/Topcontainer";
import './Css/Base.css';
import Footer from "./Common/Footer";
import Ourservice from './Service/Ourservice'

function Baseservice() {
  return (
    <>
      
      <Topcontainer />
      <Sticky />
      <Ourservice/>
      <Footer/>


    </>
  );
}

export default Baseservice;
