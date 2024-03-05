// Parks.js

import React, { useEffect, useState } from 'react';
import { firestore } from './fire';
import { collection, getDocs } from '@firebase/firestore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import ParkDetails from './ParkDetails';

const DogParkCard = ({ park }) => {
  return (
    <div className="dog-park-card">
      <Link to={`/park/${encodeURIComponent(park.name)}`}>
        <h2>{park.name}</h2>
        <img src={park.image} alt={park.name} />
      </Link>
      <p><strong>Location:</strong> {park.location}</p>
      <p><strong>Description:</strong> {park.desc}</p>
      <a href={park.directions} target="_blank" rel="noopener noreferrer">Directions</a>
    </div>
  );
};

const DogParkList = ({ parks }) => {
  return (
    <div className="dog-park-list">
      {parks.map((park, index) => (
        <DogParkCard key={index} park={park} />
      ))}
    </div>
  );
};

const Parks = () => {
  const [dogParks, setDogParks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parksCollection = await getDocs(collection(firestore, 'petActivities'));
        const parksData = parksCollection.docs.map(doc => doc.data());
        setDogParks(parksData);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <h1>Dog Parks</h1>
      <DogParkList parks={dogParks} />
    </div>
  );
};

export default Parks;
