import React, { useState, useEffect } from 'react';
import '../CSS/Parks.css';
import Navbar from '../Pages/Navbar';

import { firestore } from "../Pages/fire";
import { collection, getDocs } from "@firebase/firestore";
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Services() {
  const [services, setServices] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(''); // State for the selected place

  useEffect(() => {
    const fetchServicesFromFirebase = async () => {
      const servicesCollectionRef = collection(firestore, 'PetServices');
      const servicesQuerySnapshot = await getDocs(servicesCollectionRef);

      const fetchedServices = servicesQuerySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setServices(fetchedServices);
    };

    fetchServicesFromFirebase();
  }, []);

  // Get unique places from services
  const uniquePlaces = [...new Set(services.map(service => service.place))];

  // Filter services based on the selected place
  const filteredServices = selectedPlace
    ? services.filter(service => service.place === selectedPlace)
    : services;

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="Pcontainer">
        <h1>Services  <img className="Hlogo" src={require("../JS File/hotel-1@2x.png")} alt="service Logo" /> </h1>

        {/* Dropdown for selecting a place */}
        <select onChange={handlePlaceChange} value={selectedPlace}>
          <option value="">Select a Place</option>
          {uniquePlaces.map(place => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>

        <div className="Hparks" id="servicesContainer">
          {filteredServices.map((service) => (
            <div className="Hservices1" key={service.Name}>
              <Link to={`/service/${service.Name}`} className="Hname">
                <img src={service['image-src']} alt={service.Name} />
                {service.Name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
