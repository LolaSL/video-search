import React from 'react';
import './App.css';
import VideoSearch from './VideoSearch';
import Navbar from './Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component */}
      <div className="container">
        <VideoSearch />
      </div>
    </div>
  );
}

export default App;

