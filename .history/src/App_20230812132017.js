import React from 'react';
import './App.css';
import VideoSearch from './VideoSearch';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <VideoSearch />
    </div>
  );
}

export default App;
