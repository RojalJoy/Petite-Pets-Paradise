import React from 'react';

function HP({ username, onLogout }) {
  return (
    <>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/meetup">Meet Up</a>
        <a href="/hotel">Hotels</a>
        <button onClick={onLogout}>Logout</button>
      </div>

      <div className="homecover">
        <img className="homeImg" src={require('../Images/cat.png')} alt="homecover" />
      </div>

      <div className="label">
        <h1 className="heading">Welcome, {username}!</h1>
        <div className="button-container">
          <button className="button">More Info</button>
        </div>
        <div className="image"><img className="paw" src={require('../Images/paw 2.png')} alt="paw" /></div>
        <div className="image"><img className="logo" src={require('../Images/logo.png')} alt="logo" /></div>
      </div>
    </>
  );
}

export default HP;
