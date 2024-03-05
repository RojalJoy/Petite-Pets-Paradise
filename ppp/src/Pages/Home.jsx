import React, { useRef } from 'react';
import { firestore } from "./fire.js";
import { addDoc, collection } from "@firebase/firestore";

export default function Home() {
    const nameRef = useRef(); // Ref for the name input field
    const passwordRef = useRef(); // Ref for the password input field

    const customerRef = collection(firestore, "customer"); // Reference to the 'customer' collection

    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            password: passwordRef.current.value
        };
        try {
            await addDoc(customerRef, data); // Add the document to the 'customer' collection
            console.log("Document added successfully!");
        } catch (error) {
            console.error("Error adding document: ", error.message);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSave}>
                <label>Enter Name: </label>
                <input type="email" ref={nameRef} />
                <label>Enter Password: </label>
                <input type="password" ref={passwordRef} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
