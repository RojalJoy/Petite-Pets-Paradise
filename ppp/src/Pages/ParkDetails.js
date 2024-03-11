import React, { useState, useEffect } from 'react';
import { firestore } from "../Pages/fire";
import Navbar from '../Pages/Navbar';
import { collection, getDocs, query, where } from "@firebase/firestore";
import Footer from './Footer';

function ParkDetails() {
    const [ParkDetails, setParkDetails] = useState(null);

    useEffect(() => {
        const fetchParkDetails = async () => {
            const ParkName = decodeURIComponent(window.location.pathname.split('/').pop());

            const ParksCollectionRef = collection(firestore, 'petActivities');
            const ParksQuery = query(ParksCollectionRef, where('name', '==', ParkName));
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
                                <span style={{ fontWeight: 'bold' }}>Name:</span> {ParkDetails.name}
                            </p>
                          
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Location:</span> {ParkDetails.location}
                            </p>

                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                               
                                <a href={ParkDetails['directions']} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <button style={{ padding: '10px', background: '#2196F3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                        Get Directions
                                    </button>
                                </a>
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Description:</span> {ParkDetails.desc}
                            </p>
 
                        </>
                    ) : (
                        <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                            {ParkDetails && ParkDetails.error}
                        </p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ParkDetails;
