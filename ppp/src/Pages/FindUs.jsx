import React from 'react';
import "../CSS/FindUs.css"
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

function FindUs() {
  return (
    <>
<Navbar/>
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet"/>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Manjari:wght@100;400;700&display=swap" rel="stylesheet"></link>


    </Helmet>

    <h1 className='contactUs'>CONTACT US
      </h1>
      <svg id="Vec-5"  viewBox="0 0 702 675" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M685.312 402.127C742.076 490.275 640.498 578.299 582.613 611.293C442.57 671.054 401.49 628.928 263.314 657.981C-65.3216 727.081 33.6425 575.809 1.8993 295.676C-29.8439 15.543 345.473 0.602539 442.57 0.602539C539.666 0.602539 631.161 69.702 605.02 178.02C578.879 286.338 614.356 291.941 685.312 402.127Z" fill="#FFE699"/>
</svg>

<img className= "feedback" src={require("../Images/feedback.png")} alt=""/>
<p className="feedbacktext">Give Your Valuable Feedback !!!</p>
<a style={{color:'black', textDecoration:"none"}} href="tel:8755498733">
<img className= "phone" src={require("../Images/phone-1@2x.png")} alt=""/>
<p className="phonetext">+91 8755498733</p>
</a>
<a style={{color:'black', textDecoration:"none"}} href="mailto:petitepetsparadise@gmail.com">
<img className= "mail" src={require("../Images/mail-2@2x.png")} alt=""/>
<p className="mailtext">petitepetsparadise@gmail.com</p>
</a>


<img className= "finder" src={require("../Images/magnifying-glass-1@2x.png")} alt=""/>
<div className="findushere">
  <span className="Find">FIND US</span>
  <span><br /></span>
  <span className="Here">HERE</span>
</div>
<div>

</div>











      </>

);
}

export default FindUs;