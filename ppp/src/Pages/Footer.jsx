import React from 'react'
import '../CSS/footer.css'
import logo from '../Images/wlogo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <section className='footer '>
        <div className="d-flex content container">
          <div className="logo-sec">
          <img src={logo} alt='-'/>
          </div>
          <div className="essentials">
            <h2>Essentials</h2>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Hotel</p>
          </div>
          <div className="social">
          <h2>Contact</h2>
          <a href="mailto:petitepetsparadise@gmail.com" style={{color:'white', textDecoration:"none", fontWeight:"200"}}>
          <p> <IoMdMail/> petitepetsparadise@gmail.com</p>
          </a>
          <a href="tel:1234567890" style={{color:'white', textDecoration:"none", fontWeight:"200"}}>

          <p><FaPhoneAlt /> +91 1234567890</p>
          </a>
          </div>
        </div>
        <div className="footerbottom">
        YOUR FURRY FRIEND'S HOME AWAY FROM HOME!!!
        </div>
        </section>
  )
}

export default Footer