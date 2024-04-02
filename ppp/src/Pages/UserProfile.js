import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext';
import { firestore } from './fire'; // Update the path as needed

import { doc, getDoc } from '@firebase/firestore';
import { collection, getDocs, query, where } from '@firebase/firestore';
import {imageDB} from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import '../CSS/profile.css'; // Import your stylesheet
import Navbar from './Navbar';
import Footer from './Footer';

const UserProfile = () => {
  const { user, logoutUser } = useUser();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    age: '',
    petName: '',
    petType: ''
  });
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!user) {
          console.error('No user data');
          return;
        }

        const favoritesDocRef = collection(firestore, 'favorites');
        const favoritesQuery = query(favoritesDocRef, where('username', '==', user));
        const favoritesSnapshot = await getDocs(favoritesQuery);

        if (!favoritesSnapshot.empty) {
          const favoritesData = favoritesSnapshot.docs.map((doc) => doc.data());
          setFavorites(favoritesData);
        } else {
          console.error('Favorites not found for username:', user);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    if (user) {
      fetchFavorites();
    }
  }, [user]);



  useEffect(() => {
    const fetchData = async () => {
      console.log(user)
      if (!user) {
        console.error('NOo user data');// Skip if user is undefined
      }
      try {

       
        const userDocRef = collection(firestore, 'customer');
        const customerQuery = query(userDocRef, where('username', '==', user));
        const querySnapshot = await getDocs(customerQuery);
        
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();

          if (data) {
            setUserData({
              firstName: data?.firstName || '',
              lastName: data?.lastName || '',
              email: data?.email || '',
              phone: data?.phone || '',
              location: data?.location || '',
              age: data?.age || '',
              petName: data?.petName || '',
              petType: data?.petType || '',
            });
          } else {
            console.error('User data is undefined for username:', user);
          };
        } else {
          console.error('User document not found for username:', user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (update user details) if needed
  };



  const [recommendedHotelNames, setRecommendedHotelNames] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch recommended hotel names based on user's favorite hotel Ratings
      fetchRecommendedHotelNames();
    }
  }, [user, favorites]);


//recommentations
  const fetchRecommendedHotelNames = async () => {
    try {
      const favoritesCollectionRef = collection(firestore, 'favorites');
      const favoritesQuery = query(favoritesCollectionRef, where('username', '==', user));
      const favoritesQuerySnapshot = await getDocs(favoritesQuery);

      const favoriteHotelNames = favoritesQuerySnapshot.docs.map(doc => doc.data().Name);
      const Ratings = favoritesQuerySnapshot.docs.map(doc => doc.data().Rating);

      // Fetch hotel names with similar Ratings but different names
      const hotelsCollectionRef = collection(firestore, 'NewPetHotels');
      const recommendedHotelNamesQuery = query(hotelsCollectionRef, where('Rating', 'in', Ratings));
      const recommendedHotelNamesQuerySnapshot = await getDocs(recommendedHotelNamesQuery);

      const recommendedHotelNamesData = recommendedHotelNamesQuerySnapshot.docs
        .filter(doc => !favoriteHotelNames.includes(doc.data().Name)) // Filter out already favorited hotels
        .map(doc => ({
          name: doc.data().Name,
          image: doc.data().image, // Assuming there is an 'Image' field in your hotels collection
          Rating: doc.data().Rating,
        }));

      setRecommendedHotelNames(recommendedHotelNamesData);
    } catch (error) {
      console.error('Error fetching recommended hotel names:', error);
    }
  };


//upload image
  const [img,setImg]=useState('')
  const[imgUrl,setImgUrl] =useState([])
  //upload
  const handleClick = () =>{
    if(img !==null){
      const ImgRef= ref(imageDB,`files/${v4()}`)
      uploadBytes(ImgRef,img).then(value=>{
          console.log(value)
          getDownloadURL(value.ref).then(url=>{
              setImgUrl(data=>[...data,url])
          })
      })
    }
  }




  return (
    <>
    <Navbar/>
    <div className="contain">
      <header>
        {user ? (
          <>
            <h1>Welcome, {userData.firstName} {userData.lastName}!</h1>
            <p>Here are your profile details:</p>
          </>
        ) : (
          <h1>Welcome!</h1>
        )}
      </header>
      <main>
        <section className="profile-details">
          <form onSubmit={handleFormSubmit}>
            <div className="profile-image">
              <img src="profile-pic.jpg" alt="Profile Picture" />
            </div>
            <div className="user-info">
                <h2>User Information</h2>
                <input type="text" id="firstName" name="firstName"  placeholder="firstName" defaultValue={userData.firstName} />
                <input type="text" id="lastName" name="lastName"  placeholder="lastName" defaultValue={userData.lastName} />
                <input  type="email"  id="email"  name="email"  placeholder="Email"  defaultValue={userData.email}  />
                <input  type="tel"  id="phone"  name="phone"  placeholder="Phone"  defaultValue={userData.phone} />
                <input  type="text"  id="location"  name="location" placeholder="Location"  defaultValue={userData.location}  />
            </div>
            {/* <button type="submit">Update Details</button> */}
          </form>

        </section>
        <section className="pet-details">
          <h2>Pet Information</h2>
          <p><strong>Pet Name:</strong> {userData.petName}</p>
          <p><strong>Pet Type:</strong> {userData.petType}</p>
          <input type="file" onChange={(e)=>setImg(e.target.files[0])}/>
          <button onClick={handleClick}>Upload</button>
        </section>

        <section className="favorites">
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          <ul >
            {favorites.map((favorite, index) => (
              <li key={index}>
                <p><strong> {favorite.Name}</strong></p>
                <p> <img src={favorite.image} alt="Hotel" /></p>
                <p><strong>Rating:</strong> {favorite.Rating}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't added any favorites yet.</p>
        )}
      </section>

      <section className="recommendations">
        <h2>Recommended Hotels</h2>
        {recommendedHotelNames.length > 0 ? (
          <ul>
            {recommendedHotelNames.map((hotel, index) => (
               <li key={index}>
               <p><strong>{hotel.name}</strong></p>
               <p><img src={hotel.image} alt="Hotelimage" /></p>
               <p><strong>Rating:</strong> {hotel.Rating}</p>
             </li>
            ))}
          </ul>
        ) : (
          <p>No recommended hotels at the moment.</p>
        )}
      </section>

      </main>
      <footer>
        {user ? (
          <button onClick={logoutUser} className="logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/LoginForm" className="login-btn">
            Login
          </Link>
        )}
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default UserProfile;
