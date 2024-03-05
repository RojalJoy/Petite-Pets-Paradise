import React from 'react';
import Modal from 'react-modal';
import { useUser } from '../Pages/UserContext';

Modal.setAppElement('#root'); // Set the root element for accessibility

function BookingModal({ isOpen, onRequestClose, onBook }) {
  const { user } = useUser();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Booking Modal"
    >
      <h2>Booking Information</h2>
      {user ? (
        <>
          <p>Hello, {user}! Please confirm your booking details:</p>
          {/* Display booking details here */}
          <button onClick={onBook}>Confirm Booking</button>
        </>
      ) : (
        <>
          <p>Please log in to proceed with the booking.</p>
          {/* You can provide a login form or a button to redirect to the login page */}
          <button onClick={onRequestClose}>Close</button>
        </>
      )}
    </Modal>
  );
}

export default BookingModal;
