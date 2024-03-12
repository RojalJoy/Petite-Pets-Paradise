import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'; // Import your Navbar styles if needed
import { useUser } from '../Pages/UserContext';
import PetCare from './PetCare';
import FindUs from './FindUs';
function Navbar() {
  const { user } = useUser();

  const profileLink = user ? '/UserProfile' : '/LoginForm';
  const username = user ? user : 'Name';

  return (
    <nav>
      <div className="logo">
        <img src={require("../Images/logo.png")} alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Hotel">Hotels</Link></li>
        <li><Link to="/Parks">Parks</Link></li>
        <li><Link to="/FindUs">Contact</Link></li>
        {/* <li><Link to="/MeetUpForm">MeetUp</Link></li> */}
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Memories">Memories</Link></li>
        <li><Link to={profileLink}><i className="fas fa-user"></i>{username}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
