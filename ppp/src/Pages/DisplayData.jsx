import React, { useState, useEffect } from 'react';
import { firestore } from "./fire.js";
import { collection, getDocs } from "@firebase/firestore";

export default function DisplayData() {
    const [customerData, setCustomerData] = useState([]);

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

    return (
        <div>
            <h1>Customer Data</h1>
            <ul>
                {customerData.map((customer) => (
                    <li key={customer.id}>
                        <strong>Name:</strong> {customer.name}, <strong>Password:</strong> {customer.password}
                    </li>
                ))}
            </ul>
        </div>
    );
}
