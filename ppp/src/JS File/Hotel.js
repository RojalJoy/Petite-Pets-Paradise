import React, { useState, useEffect } from 'react';
import '../CSS/Hotel.css';
import Navbar from '../Pages/Navbar';
import { FaHeart } from 'react-icons/fa';
import { firestore } from "../Pages/fire";
import { collection, getDocs, addDoc, query, where, deleteDoc, doc } from "@firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Pages/UserContext';
import Footer from '../Pages/Footer';

function Hotel() {
    const [hotels, setHotels] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortByPrice, setSortByPrice] = useState('ascending');
    const [petFee, setPetFee] = useState(false);
    const [noPetFee, setNoPetFee] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        fetchHotelsFromFirebase();
        if (isLoggedIn()) {
            // Fetch user's favorites from the database and update the state
            fetchFavoritesFromDatabase();
        }
    }, []);

    const fetchHotelsFromFirebase = async () => {
        const hotelsCollectionRef = collection(firestore, 'NewPetHotels');
        const hotelsQuerySnapshot = await getDocs(hotelsCollectionRef);
    
        const fetchedHotels = hotelsQuerySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id, // Include the document ID for unique identification
        }));
        setHotels(fetchedHotels);
    };

    const filteredHotels = hotels.filter(hotel => {
        return (
            hotel.Name.toLowerCase().includes(searchText.toLowerCase()) &&
            ((petFee && hotel.Special.toLowerCase().includes('there is pet fee')) ||
             (noPetFee && hotel.Special.toLowerCase().includes('no pet fee')) ||
             (!petFee && !noPetFee)) // Display all hotels when no checkboxes are checked
        );
    });


    if (sortByPrice === 'ascending') {
        filteredHotels.sort((a, b) => parseFloat(a.Price.replace('Rs.', '').replace(',', '')) - parseFloat(b.Price.replace('Rs.', '').replace(',', '')));
    } else {
        filteredHotels.sort((a, b) => parseFloat(b.Price.replace('Rs.', '').replace(',', '')) - parseFloat(a.Price.replace('Rs.', '').replace(',', '')));
    }

    const handleFavoriteClick = async (Name,image, Rating) => {
        if (user) {
            // Check if the hotel is already in favorites
            if (!favorites.includes(Name)) {
                // Add the hotel to favorites
                setFavorites([...favorites, Name]);
                try {
                // Add the favorite to the database
                const favoritesCollectionRef = collection(firestore, 'favorites');
                const favoriteData = {
                    username: user,  // Assuming you have a 'username' field in your user object
                    Name: Name,
                    image: image, // Add the image to the database
                Rating: Rating, // Add the rating to the database

                };

                
                    await addDoc(favoritesCollectionRef, favoriteData);
                    console.log(`Added ${Name} to favorites for user ${user}.`);
                } catch (error) {
                    console.error('Error adding favorite to the database:', error);
                }
            } else {
                // Remove the hotel from favorites
                const updatedFavorites = favorites.filter((name) => name !== Name);
                setFavorites(updatedFavorites);

                // Remove the favorite from the database
                const favoritesCollectionRef = collection(firestore, 'favorites');
                const favoritesQuery = query(
                    favoritesCollectionRef,
                    where('username', '==', user),
                    where('Name', '==', Name)
                );

                const favoritesQuerySnapshot = await getDocs(favoritesQuery);

                if (!favoritesQuerySnapshot.empty) {
                    const favoriteDocId = favoritesQuerySnapshot.docs[0].id;
                    await deleteDoc(doc(favoritesCollectionRef, favoriteDocId));
                    console.log(`Removed ${Name} from favorites for user ${user}.`);
                }
            }
        } else {
            alert('Please log in to add to favorites.');
            // If not logged in, redirect to the login page
            navigate('/LoginForm');
        }
    };

    const isHotelInFavorites = (Name) => favorites.includes(Name);

    // Placeholder functions for user authentication (you need to implement your own authentication logic)
    const isLoggedIn = () => true; // Replace with your authentication check
    const saveFavoritesToDatabase = (updatedFavorites) => {
        // Implement logic to save updatedFavorites to the database
        console.log('Saving favorites to the database:', updatedFavorites);
    };

    const fetchFavoritesFromDatabase = async () => {
        // Fetch user's favorites from the database and update the state
        const favoritesCollectionRef = collection(firestore, 'favorites');
        const favoritesQuery = query(favoritesCollectionRef, where('username', '==', user));
        const favoritesQuerySnapshot = await getDocs(favoritesQuery);

        const fetchedFavorites = favoritesQuerySnapshot.docs.map(doc => doc.data().Name);
        setFavorites(fetchedFavorites);
    };



    const [selectedPlace, setSelectedPlace] = useState(''); // Step 1

    useEffect(() => {
        fetchHotelsFromFirebase();
        if (isLoggedIn()) {
            fetchFavoritesFromDatabase();
        }
    }, []);

const uniquePlaces = Array.from(new Set(hotels.map(hotel => hotel.place))); // Get unique places

    const handlePlaceChange = (e) => {
        setSelectedPlace(e.target.value);
    };

    const filteredHotelsByPlace = filteredHotels.filter(hotel => {
        return selectedPlace === '' || hotel.place === selectedPlace;
    });



    return (
        <>
            <Navbar />
            <h1>Hotels and Restaurants <img className="Hlogo" src={require("./hotel-1@2x.png")} alt="Hotel Logo" /> </h1>
            <div className="Hcontainer">

                
                <div id="filters">
                    <input type="text" id="searchInput" placeholder="Search by name..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <label htmlFor="sortByPrice">Sort by Price:</label>
                    
                    <select id="sortByPrice" value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>

                    <label htmlFor="petFeeCheckbox">Pet Fee:</label>
                    <input type="checkbox" id="petFeeCheckbox" checked={petFee} onChange={(e) => setPetFee(e.target.checked)} />

                    <label htmlFor="noPetFeeCheckbox">No Pet Fee:</label>
                    <input type="checkbox" id="noPetFeeCheckbox" checked={noPetFee} onChange={(e) => setNoPetFee(e.target.checked)} />


                     {/* Step 2: Dropdown for selecting place */}
                     <label htmlFor="placeDropdown">Select Place:</label>
                    <select id="placeDropdown" value={selectedPlace} onChange={handlePlaceChange}>
                        <option value="">All Places</option>
                        {uniquePlaces.map(place => (
                            <option key={place} value={place}>
                                {place}
                            </option>
                        ))}
                    </select>
                    
                </div>
                {/* ... (your existing code) */}
                <div className="Hhotels" id="hotelsContainer">
                    {filteredHotelsByPlace.map((hotel) => (
                        <div className="Hhotel1" key={hotel.Name}>
                            <Link to={`/hotel/${hotel.Name}`} className="Hname">

                                <img src={hotel['image']} alt={hotel.Name} />
                                {hotel.Name}
                            </Link>
                            {/* Favorites icon */}
                            <div className="Hfavorite" onClick={() => handleFavoriteClick(hotel.Name, hotel['image'], hotel.Rating)}>
                                <FaHeart color={favorites.includes(hotel.Name) ? 'red' : 'gray'} />
                            </div>
                            <div className="Hprice">Price: {hotel.Price}</div>
                            <div className="Hspecial">{hotel.Special}</div>
                            <div className="Hrating">Rating: {hotel.Rating}</div>

                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Hotel;
