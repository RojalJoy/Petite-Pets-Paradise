import React, { useRef } from 'react';
import { firestore } from "./fire.js";
import { addDoc, collection } from "@firebase/firestore";
import '../CSS/Register.css'; 
import Navbar from './Navbar.js';

export default function MeetUpForm() {


    const usernameRef = useRef(); // Ref for the username input field
    const nameRef = useRef(); // Ref for the first name input field
    const dateRef = useRef(); // Ref for the last name input field
    const petNameRef = useRef(); // Ref for the pet's name input field
    const phoneRef = useRef(); // Ref for the phone number input field

    const customerRef = collection(firestore, "meetup"); // Reference to the 'customer' collection

    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            name: nameRef.current.value,
            date: dateRef.current.value,
            petName: petNameRef.current.value,
            phone: phoneRef.current.value
        };
        try {
            await addDoc(customerRef, data); // Add the document to the 'customer' collection
            console.log("Document added successfully!");
        } catch (error) {
            console.error("Error adding document: ", error.message);
        }
    }
    
    return (
        <>
          <Navbar/>
        <div className="register-container">
                        <h1>Meetup form</h1>
                        <img className="cat" src={require("../Images/cat@2x.png")} alt="Cat"/>
          <svg className='catvector' width="294" height="422" viewBox="0 0 294 422" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0.5H290.5L406.5 277.5C343.167 331.167 206.5 434.8 166.5 420C116.5 401.5 158.5 267 82 201C20.8 148.2 2.16667 45.3333 0.5 0.5Z" fill="#FFE699"/>
</svg>


<img className="dog" src={require("../Images/dog@2x.png")} alt="Dog"/>
        <svg className='dogvector' width="359" height="363" viewBox="0 0 359 363" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89 35.4999C25.8 -36.1001 -87 19.6666 -135.5 56.4999L-2.5 362.5L359 361.5C351.5 243 234 333.5 213 257C192 180.5 168 125 89 35.4999Z" fill="#FCAE7C"/>
</svg>
            <form onSubmit={handleSave}>

                <div >
                        <label>First Name: </label>
                        <input type="text" ref={nameRef} required /></div>

                <div>
                    <label>Username: </label>
                    <input type="text" ref={usernameRef} required />
                    
                </div>
                <div >
                    <label>Pet's Name: </label>
                    <input type="text" ref={petNameRef} required /></div>
                <div>
                    <label>Select Date: </label>
                    <input type="date" ref={dateRef} required />
                </div>
                 

                <div>
                    <label>Phone Number: </label>
                    <input type="tel" ref={phoneRef} required />
                </div>
                <div></div>
                <div>
                    <button type='submit'>Submit</button></div>
            </form>
        </div>
        </>
    );
}
