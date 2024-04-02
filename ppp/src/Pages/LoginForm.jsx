import React, { useState, useEffect } from 'react';
import { firestore } from "./fire.js";
import { collection, getDocs } from "@firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import "../CSS/Register.css"

import { useUser } from '../Pages/UserContext';
export default function LoginForm() {
    const { loginUser } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [customerData, setCustomerData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const customerCollectionRef = collection(firestore, "customer");
            const dataSnapshot = await getDocs(customerCollectionRef);
            const newData = [];
            dataSnapshot.forEach(doc => {
                newData.push({ id: doc.id, ...doc.data() });
            });
            setCustomerData(newData);
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect only runs once

    const handleLogin = (e) => {
        e.preventDefault();
        const foundCustomer = customerData.find(customer => customer.username === username && customer.password === password);
        if (foundCustomer) {
            loginUser(username); 
            setLoggedIn(true);
            setErrorMessage('');
            navigate('/')
        } else {
            setLoggedIn(false);
            setErrorMessage('Invalid username or password.');
        }
    };
  
<button onClick={() => navigate('/Register')}>Register</button>

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
        setErrorMessage('');
    };

    if (loggedIn) {
        return (
            
            <div>
                <h1>Welcome, {username}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
    

    return (
        <>
          <Navbar/>
          <div className="register-container">
      
                                    <img className="cat" src={require("../Images/cat@2x.png")} alt="Cat"/>
                    <svg className='catvector' width="294" height="422" viewBox="0 0 294 422" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.5H290.5L406.5 277.5C343.167 331.167 206.5 434.8 166.5 420C116.5 401.5 158.5 267 82 201C20.8 148.2 2.16667 45.3333 0.5 0.5Z" fill="#FFE699"/>
            </svg>


            <img className="dog" src={require("../Images/dog@2x.png")} alt="Dog"/>
                    <svg className='dogvector' width="359" height="363" viewBox="0 0 359 363" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89 35.4999C25.8 -36.1001 -87 19.6666 -135.5 56.4999L-2.5 362.5L359 361.5C351.5 243 234 333.5 213 257C192 180.5 168 125 89 35.4999Z" fill="#FCAE7C"/>
            </svg>
      
            <h1>Login</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
                
                <button onClick={() => navigate('/Register')}>Register</button> {/* Add the register button */}
            </form>
        </div>
            
        </>
    );
}
