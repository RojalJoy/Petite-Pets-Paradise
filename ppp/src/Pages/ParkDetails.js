import React, { useState, useEffect } from 'react';
import { firestore } from "../Pages/fire";
import Navbar from '../Pages/Navbar';
import { collection, getDocs, query, where } from "@firebase/firestore";

function ParkDetails() {
    const [ParkDetails, setParkDetails] = useState(null);

    useEffect(() => {
        const fetchParkDetails = async () => {
            const ParkName = decodeURIComponent(window.location.pathname.split('/').pop());

            const ParksCollectionRef = collection(firestore, 'PetParks');
            const ParksQuery = query(ParksCollectionRef, where('Name', '==', ParkName));
            const ParksQuerySnapshot = await getDocs(ParksQuery);

            if (!ParksQuerySnapshot.empty) {
                const Park = ParksQuerySnapshot.docs[0].data();
                setParkDetails(Park);
            } else {
                setParkDetails({ error: 'Park not found' });
            }
        };

        fetchParkDetails();
    }, []);

    // Inline CSS for ParkDetails component
    const ParkDetailsStyle = {
        // Add your specific styles here
        border: '2px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto',
    };

    return (
        <>
            <Navbar />
            <div className="container" style={ParkDetailsStyle}>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', marginBottom: '20px' }}>Park Details</h1>
                <div className="details" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {ParkDetails ? (
                        <>
                            <img src={ParkDetails['image']} alt={ParkDetails.Name} style={{ maxWidth: '40%', alignSelf: 'flex-start', borderRadius: '5px' }} />
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Name:</span> {ParkDetails.Name}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Price:</span> {ParkDetails.Price}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Special:</span> {ParkDetails.Special}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Location:</span> {ParkDetails.location}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Place:</span> {ParkDetails.place}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Website:</span>{' '}
                                <a href={ParkDetails['Website-href']} target="_blank" rel="noopener noreferrer" style={{ color: '#2196F3', textDecoration: 'none' }}>
                                    {ParkDetails['Website-href']}
                                </a>
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Description:</span> {ParkDetails.Description}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Rating:</span> {ParkDetails.Rating}
                            </p>
                        </>
                    ) : (
                        <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                            {ParkDetails && ParkDetails.error}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ParkDetails;
