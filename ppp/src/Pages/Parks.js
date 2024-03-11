import React, { useState, useEffect } from 'react';
import '../CSS/Parks.css';
import Navbar from '../Pages/Navbar';

import { firestore } from "../Pages/fire";
import { collection, getDocs } from "@firebase/firestore";
import { Link} from 'react-router-dom';
import Footer from "./Footer";


function Parks() {
  const [parks, setparks] = useState([]);

  useEffect(() => {
      const fetchparksFromFirebase = async () => {
          const parksCollectionRef = collection(firestore, 'petActivities');
          const parksQuerySnapshot = await getDocs(parksCollectionRef);

          const fetchedparks = parksQuerySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
          }));
          setparks(fetchedparks);
      };

      fetchparksFromFirebase(); // Call the function here
  }, []); // Add an empty dependency array to ensure useEffect runs only once

  return (
      <>
          <Navbar />

          <div className="Pcontainer">
          <h1>parks  <img className="Hlogo" src={require("../JS File/hotel-1@2x.png")} alt="park Logo" /> </h1>
              <div className="Hparks" id="parksContainer">
                  {parks.map((park) => ( // Map over the 'parks' state
                      <div className="Hparks1" key={park.name}>
                          <Link to={`/park/${park.name}`} className="Hname">
                              <img src={park['image']} alt={park.name} />
                              {park.name}
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
          <Footer/>
      </>
  );
}

export default Parks;
