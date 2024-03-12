import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'; // Import your Navbar styles if needed
import { useUser } from '../Pages/UserContext';
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const { user } = useUser();

  const profileLink = user ? '/UserProfile' : '/LoginForm';
  const username = user ? user : 'Name';
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <img src={require("../Images/logo.png")} alt="Logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Hotel">Hotels</Link></li>
          <li><Link to="/Parks">Parks</Link></li>
          <li><Link to="">Contact</Link></li>
          <li><Link to="/MeetUpForm">MeetUp</Link></li>
          <li><Link to="">Services</Link></li>
          <li><Link to="/Memories">Memories</Link></li>
          <li><Link to={profileLink}><i className="fas fa-user"></i>{username}</Link></li>
        </ul>
      </nav>
      <nav className='nav-mobile'>
        <div className="logo">
          <img src={require("../Images/logo.png")} alt="Logo" />
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-label="Toggle navigation" aria-expanded={isOpen}
          onClick={handleToggle}>
          <span class="navbar-toggler-icon"><TiThMenu size={25} /></span>
        </button>
      </nav>
      
    </>


  );
}

export default Navbar;
