import React, { useState, useEffect } from 'react';
import { firestore } from "../Pages/fire";
import Navbar from '../Pages/Navbar';
import { collection, getDocs, query, where } from "@firebase/firestore";
import Footer from './Footer';

function ServiceDetails() {
    const [ServiceDetails, setServiceDetails] = useState(null);

    useEffect(() => {
        const fetchServiceDetails = async () => {
            const ParkName = decodeURIComponent(window.location.pathname.split('/').pop());

            const ParksCollectionRef = collection(firestore, 'PetServices');
            const ParksQuery = query(ParksCollectionRef, where('Name', '==', ParkName));
            const ParksQuerySnapshot = await getDocs(ParksQuery);

            if (!ParksQuerySnapshot.empty) {
                const Park = ParksQuerySnapshot.docs[0].data();
                setServiceDetails(Park);
            } else {
                setServiceDetails({ error: 'Park not found' });
            }
        };

        fetchServiceDetails();
    }, []);

    // Inline CSS for ServiceDetails component
    const ServiceDetailsStyle = {
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
            <div className="container" style={ServiceDetailsStyle}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', marginBottom: '20px' }}>
                    {ServiceDetails ? ServiceDetails.Name : 'Park Details'}
                </h1>
                <div className="details" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {ServiceDetails ? (
                        <>
                            <img src={ServiceDetails['image-src']} alt={ServiceDetails.Name} style={{ maxWidth: '40%', alignSelf: 'flex-start', borderRadius: '5px' }} />

                          
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Location:</span> {ServiceDetails.Location}
                            </p>

                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                               
                                <a href={ServiceDetails['Directions']} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <button style={{ padding: '10px', background: '#2196F3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                        Get Directions
                                    </button>
                                </a>
                            </p>

                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                               
                               <a href={ServiceDetails['Website']} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                   <button style={{ padding: '10px', background: '#2196F3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                       Website
                                   </button>
                               </a>
                           </p>

                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Description:</span> {ServiceDetails.Desc}
                            </p>
 
                        </>
                    ) : (
                        <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                            {ServiceDetails && ServiceDetails.error}
                        </p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ServiceDetails;
