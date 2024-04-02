import React, { useRef } from 'react';
import { firestore } from "./fire.js";
import {  query, where, getDocs, addDoc, collection } from "@firebase/firestore";
import '../CSS/Register.css'; 
import Navbar from './Navbar.js';

export default function Register() {
    const emailRef = useRef(); // Ref for the email input field
    const passwordRef = useRef(); // Ref for the password input field
    const confirmPasswordRef = useRef(); // Ref for the confirm password input field
    const usernameRef = useRef(); // Ref for the username input field
    const firstNameRef = useRef(); // Ref for the first name input field
    const lastNameRef = useRef(); // Ref for the last name input field
    const petNameRef = useRef(); // Ref for the pet's name input field
    const ageRef = useRef(); // Ref for the age input field
    const locationRef = useRef(); // Ref for the location input field
    const petTypeRef = useRef(); // Ref for the pet type input field
    const phoneRef = useRef(); // Ref for the phone number input field

    const customerRef = collection(firestore, "customer"); // Reference to the 'customer' collection

    const handleSave = async (e) => {
        e.preventDefault();
           // Validate password and confirm password
           const password = passwordRef.current.value;
           const confirmPassword = confirmPasswordRef.current.value;
   
           if (password !== confirmPassword) {
               alert("Password and Confirm Password do not match. Please check again.");
               return;
           }

            // Check if the entered username already exists in the 'customer' collection
        const existingUserQuery = query(customerRef, where("username", "==", usernameRef.current.value));
        const existingUserSnapshot = await getDocs(existingUserQuery);

        if (!existingUserSnapshot.empty) {
            alert("Username already exists. Please choose a different username.");
            return;
        }
          // Check if the entered username already exists in the 'customer' collection
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
            username: usernameRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            petName: petNameRef.current.value,
            age: ageRef.current.value,
            location: locationRef.current.value,
            petType: petTypeRef.current.value,
            phone: phoneRef.current.value
        };
        try {
            await addDoc(customerRef, data); // Add the document to the 'customer' collection
            console.log("Document added successfully!");
            // Show an alert when the document is added successfully
            alert("Registration successful! Click OK to reload the page.");

            
            // Reload the register page
            window.location.reload();
        } catch (error) {
            console.error("Error adding document: ", error.message);
        }
    };
    
    return (
        <>
              <Navbar/>
                                                 <img className="cat" src={require("../Images/cat@2x.png")} alt="Cat"/>
                    <svg className='catvector' width="294" height="422" viewBox="0 0 294 422" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.5H290.5L406.5 277.5C343.167 331.167 206.5 434.8 166.5 420C116.5 401.5 158.5 267 82 201C20.8 148.2 2.16667 45.3333 0.5 0.5Z" fill="#FFE699"/>
            </svg>


            <img className="dog" src={require("../Images/dog@2x.png")} alt="Dog"/>
                    <svg className='dogvector' width="359" height="363" viewBox="0 0 359 363" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89 35.4999C25.8 -36.1001 -87 19.6666 -135.5 56.4999L-2.5 362.5L359 361.5C351.5 243 234 333.5 213 257C192 180.5 168 125 89 35.4999Z" fill="#FCAE7C"/>
            </svg>
            <div className="register-container">
                                    <h1>Registration form</h1>
 

            <form onSubmit={handleSave}>

                <div >
                        <label>First Name: </label>
                        <input type="text" ref={firstNameRef} required /></div>
                <div >
                        <label>Last Name: </label>
                        <input type="text" ref={lastNameRef} required />
                        
                </div>
                <div >
                    <label>Email: </label>
                    <input type="email" ref={emailRef} required /></div>
                <div>
                    <label>Username: </label>
                    <input type="text" ref={usernameRef} required />
                    
                </div>
                <div >
                    <label>Password: </label>
                    <input type="password" ref={passwordRef} required /></div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" ref={confirmPasswordRef} required />
                </div>
                <div >
                    <label>Pet's Name: </label>
                    <input type="text" ref={petNameRef} required /></div>
                <div>
                    <label>Pet Type: </label>
                    <input type="text" ref={petTypeRef} required />
                </div>
                 
                 <div>
                    <label>Your Age: </label>
                    <input type="number" ref={ageRef} required /></div>
                <div>
                    <label>Phone Number: </label>
                    <input type="tel" ref={phoneRef} required />
                </div>
                <div>
                    <label>Location: </label>
                    <input type="text" ref={locationRef} required />
                </div>
                <div></div>
                <div>
                    <button type='submit'>Submit</button></div>
            </form>
        </div>
        </>
    )
}
