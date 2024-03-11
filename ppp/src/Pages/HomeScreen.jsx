import React from 'react';

import '../CSS/H.css';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import img from '../Images/petcare.png'
import round from '../Images/round.png'
import pet from '../Images/petpoints.png'
import '../CSS/pet.css'

import "../CSS/AboutUs.css";
import AboutUs from './AboutUs';
import PetCare from './PetCare';


function HomeScreen() {
  return (
    <>
    <Navbar/>
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Manjari:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap" rel="stylesheet"/>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Manjari:wght@100;400;700&display=swap" rel="stylesheet"></link>

      </Helmet>
  
        {/* <div className="BG">
            <img src={require("../Images/cat--dog-foot-prints-1@2x.png")} alt=""/>
        </div> */}
<div className='all'>
    <div className="page1">
    <div className="lookingfor">
        <span class="wrap1"> Looking for a </span>
            <span class="orange">Pet friendly</span>
            <span><br/></span>
            <span class="wrap2">Accomodation </span>
            
        </div>
        <div className="paws">
            <img src={require("../Images/paws.png")} alt=""/>
        </div>

            <div><img className="homedog" src={require("../Images/homedown.png")} alt=""/>  
          
                <svg className='vectorhome2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,160L24,154.7C48,149,96,139,144,138.7C192,139,240,149,288,138.7C336,128,384,96,432,80C480,64,528,64,576,85.3C624,107,672,149,720,170.7C768,192,816,192,864,213.3C912,235,960,277,1008,277.3C1056,277,1104,235,1152,208C1200,181,1248,171,1296,160C1344,149,1392,139,1416,133.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                </div> 
            {/* <div className='vectorhome1'> <img  src={require("../Images/orangevec.jpeg")} alt=""/></div> */}
            
    </div>    
        



   
    <div className='page2'>
            <div className="browndog">
                <img src={require("../Images/browndog.png")} alt=""/>
            </div>
            <div>
                <div className="greyrectangle">
                    <p className="desc">Petite Pets Paradise is a platform designed to help pet owners find travel options that
                        welcome their furry friends. The platform provides a guide with details about pet-friendly hotels and
                        restaurants, including locations and user ratings. It goes further by connecting pet owners with places
                        offering events, activities, and various pet care services. The system makes it easy for pet owners to
                        plan trips, reduces stress, and boosts the visibility of pet-friendly businesses.</p>
                </div>

            </div>
            <div className="ellipse">
                <p><a className="text" href="hotel.html">VIEW HOTEL</a></p>
            </div>
            <div className="viewhotel">
                <img src={require("../Images/viewhotel.png")} alt=""/>
            </div>
            <div className="vector3">
            <svg id="vector-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 556 251" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path id="vector-3-s-path1" d="M196.205,23.76C56.9655,-55.438,8.07081,82.2125,1.02837,160.937C-13.7272,321.428,133.829,211.957,217.667,211.957c83.839,0,217.981,87.847,303.496,0c85.516-87.848-5.03-176.7092-72.436-166.9108C381.32,54.8445,370.254,122.758,196.205,23.76Z" fill="#fa9189"/></svg>


            </div>




            <div className="homeawaytext">
                <p className="Label"></p>
                <span className="text-wrapper">Your HOME AWAY FROM HOME.
                </span>
                <span className="text-wrapper-mid"> <br /> </span>
                <span className="text-wrapper-1"> Carry your
                    <span className="orange "> FURRY FRIENDS </span>
                    with you </span>
                <span className="orange">
                    </span>
            </div>
            <div className="vectortext">
                <span className="welcome"> <b>WELCOME TO YOUR LUXURIOUS</b></span>
                <span className="break"><br /> </span>
                <span className="homeaway"> <b>Home Away From Home !</b></span>
            </div>

            <div className="rectangle1">
            <svg id="ezpI3Egi6U21" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458 96" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M15.0926,9.05972c1.0861-4.50584,5.1259-7.67488,9.7608-7.65672L446.156,3.05365c5.774.02262,10.329,4.91663,9.938,10.67735l-4.866,71.6625c-.367,5.4082-4.976,9.5392-10.392,9.3139L11.0372,76.8286c-6.29497-.2618-10.782262-6.2095-9.30594-12.3345L15.0926,9.05972Z" fill="none" stroke="#4b515e" stroke-width="2"/></svg>


            </div>
            <div className="rectangle2">
            <svg id="eZSJCk71olP1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461 94" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                <path d="M12.2887,25.5015c1.0037-4.9861,5.2948-8.6339,10.3774-8.8217L448.784,0.932941c6.346-.234516,11.572,4.938299,11.403,11.286459L458.286,83.294C458.127,89.2525,453.251,94,447.29,94h-435.3551C4.98782,94,-0.219692,87.6398,1.15125,80.8293L12.2887,25.5015Z" fill="#4b515e"/></svg>


            </div>
            </div>
            <div className='aboutus'>
                    <h1 className='About'>ABOUT US</h1>
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


                
                    <section >
                        <PetCare/>
                    </section>
                            
     </div>
    </>
  );
}

export default HomeScreen;
