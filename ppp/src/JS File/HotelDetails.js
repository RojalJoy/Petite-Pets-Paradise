import React, { useState, useEffect } from 'react';
import { firestore } from "../Pages/fire";
import Navbar from '../Pages/Navbar';
import { collection, getDocs, query, where } from "@firebase/firestore";
import Footer from '../Pages/Footer';

function HotelDetails() {
    const [hotelDetails, setHotelDetails] = useState(null);

    useEffect(() => {
        const fetchHotelDetails = async () => {
            const hotelName = decodeURIComponent(window.location.pathname.split('/').pop());

            const hotelsCollectionRef = collection(firestore, 'NewPetHotels');
            const hotelsQuery = query(hotelsCollectionRef, where('Name', '==', hotelName));
            const hotelsQuerySnapshot = await getDocs(hotelsQuery);

            if (!hotelsQuerySnapshot.empty) {
                const hotel = hotelsQuerySnapshot.docs[0].data();
                setHotelDetails(hotel);
            } else {
                setHotelDetails({ error: 'Hotel not found' });
            }
        };

        fetchHotelDetails();
    }, []);

    // Inline CSS for HotelDetails component
    const hotelDetailsStyle = {
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
            <div className="container" style={hotelDetailsStyle}>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', marginBottom: '20px' }}>Hotel Details</h1>
                <div className="details" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {hotelDetails ? (
                        <>
                            <img src={hotelDetails['image']} alt={hotelDetails.Name} style={{ maxWidth: '40%', alignSelf: 'flex-start', borderRadius: '5px' }} />
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Name:</span> {hotelDetails.Name}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Price:</span> {hotelDetails.Price}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Special:</span> {hotelDetails.Special}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Location:</span> {hotelDetails.location}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Place:</span> {hotelDetails.place}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                               
                                <a href={hotelDetails['Website-href']} target="_blank" rel="noopener noreferrer" style={{ color: '#2196F3', textDecoration: 'none' }}>
                                <button style={{ padding: '10px', background: '#2196F3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                      Click to Book
                                    </button>
                                </a>
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                               
                               <a href={hotelDetails['directions']} target="_blank" rel="noopener noreferrer" style={{ color: '#2196F3', textDecoration: 'none' }}>
                               <button style={{ padding: '10px', background: '#2196F3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                     Let us direct you
                                   </button>
                               </a>
                           </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Description:</span> {hotelDetails.Description}
                            </p>
                            <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Rating:</span> {hotelDetails.Rating}
                            </p>
                        </>
                    ) : (
                        <p style={{ fontFamily: 'Merriweather, sans-serif', fontSize: '16px', lineHeight: '1.5', marginBottom: '10px' }}>
                            {hotelDetails && hotelDetails.error}
                        </p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HotelDetails;
