import React from 'react';
import "../CSS/AboutUs.css"

import { Helmet } from 'react-helmet';

function AboutUs() {
  return (
    <>

    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet"/>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Manjari:wght@100;400;700&display=swap" rel="stylesheet"></link>


    </Helmet>
    <div className='aboutus'>
      <h1>ABOUT US
      </h1>
      <svg id="vec5" viewBox="0 0 243 135" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M213.5 26.4999C199.5 -20.3001 110 6.99988 67 26.4999C-13.5 57.9999 -12.4999 71.9999 24.0001 106.5C60.5001 141 150 141.5 213.5 122C269.423 104.827 231 84.9999 213.5 26.4999Z" fill="#FCAE7C"/>
</svg>
<svg id="vec6" viewBox="0 0 613 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M609.632 281H-39.4017C-80.9996 203.235 -134.33 39.3941 -14.8696 6.15199C134.456 -35.4006 133.923 149.333 393.109 89.7578C600.459 42.0975 623.853 197.394 609.632 281Z" fill="#FA9189"/>
</svg>


      <div className="doggo">
      <img src={require("../Images/doggo-1@2x.png")} alt=""/>

      </div>
      <svg id="rec16" viewBox="0 0 747 499" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M716.167 36.3747C714.641 14.8907 695.988 -1.28856 674.503 0.236611L122.538 39.4209C105.363 40.6402 91.0193 52.979 87.2474 69.7797L1.67395 450.932C-3.79926 475.31 14.7416 498.475 39.7267 498.475H707.131C729.758 498.475 747.636 479.282 746.032 456.711L716.167 36.3747Z" fill="#FFE699"/>
</svg>

<svg id="rec17" viewBox="0 0 745 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M741.637 38.7939C741.544 17.8167 724.451 0.985141 703.457 1.19892L149.832 6.83645C133.048 7.00736 118.299 18.1562 113.543 34.2673L2.77288 409.477C-4.12854 432.854 12.4034 456.47 36.7028 457.946L702.967 498.414C724.974 499.75 743.604 482.147 743.506 460.109L741.637 38.7939Z" stroke="#FFE699" stroke-width="2"/>
</svg>


  <p className="Aboutpara">
    <span>PETITE PETS PARADISE has been providing professional & trusted pet care since October 2005.  Since then, we have cared for thousands of pets, as well as some homes and yards. Over the years, multiple services were added to help you.</span>
    <span><br></br></span>
    <span><br></br></span>

 <span>Our team has taken numerous measures to ensure your pets are always in a safe, balanced and nurturing environment. With years of experience, knowledge and service, we have, and continuously learn and update our practices to keep your pet friends happy, healthy, balanced and fun loving.</span>
 <span><br></br></span>
 <span><br></br></span>

 <span>We look forward to a lifetime of helping you care for your pet friends, home and yard</span>
 </p>
  <p className="stay">
  <span className="Book">BOOK YOUR'S AND YOUR </span>
  <span><br /><br /></span>
  <span className="pets">PETS STAY WITH US TODAY!!</span>
  </p>


  </div>


      
    </>

  );
}

export default AboutUs;
