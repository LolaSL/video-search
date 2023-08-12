import React from 'react';
import './App.css';
import VideoSearch from './components/VideoSearch.jsx';
import Navbar from './;
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <VideoSearch />
        </div>
      </div>
    </Router>
  );
}

export default App;


