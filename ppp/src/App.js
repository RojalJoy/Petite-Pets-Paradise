

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './JS File/HomePage';
// import MeetupPage from './MeetupPage';
import Hotel from './JS File/Hotel';
import HotelDetails from './JS File/HotelDetails';

import LoginForm from './Pages/LoginForm';

import Register from './Pages/Register';

import HomeScreen from './Pages/HomeScreen';
import { UserProvider } from './Pages/UserContext';

import Feedbackform from './Pages/Feedbackform';
import MeetUpForm from './Pages/MeetUpForm'
import FirebaseImage from './Pages/FirebaseImage';
import Memories from './Pages/Memories';
import UserProfile from './Pages/UserProfile';
import Parks from './Pages/Parks';
import ParkDetails from './Pages/ParkDetails'; 
function App() {
 
  return (
    <BrowserRouter>
     <UserProvider> 
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/hotel/:name" element={<HotelDetails />} />
        {/* <Route path="/meetup" element={<MeetupPage />} /> */}
        {/* Pass the hotel name as a parameter to HotelDetails */}
        {<Route path="/Hotel" element={<Hotel />} /> }
        {<Route path="/LoginForm" element={<LoginForm />} /> }
        {<Route path="/Register" element={<Register />} /> }
        {<Route path="/MeetUpForm" element={<MeetUpForm />} /> }
        {<Route path="/Memories" element={<Memories />} /> }
        {<Route path="/UserProfile" element={<UserProfile />} /> }
        {<Route path="/Parks" element={<Parks />} /> }
        {<Route path="/park/:name" element={<ParkDetails />} />}
      </Routes>
      </UserProvider> 
    </BrowserRouter>
  );
}

export default App;
