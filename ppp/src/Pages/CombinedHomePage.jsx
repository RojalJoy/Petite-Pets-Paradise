import React from 'react';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import Memories from './Memories';
import MeetUpForm from './MeetUpForm';
function CombinedHomePage(){
    return(
        <>
        <Navbar/>


        <Memories/>
        </>
    )
}
export default CombinedHomePage;
