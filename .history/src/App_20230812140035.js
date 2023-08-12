import React from 'react';
import './App.css';
import VideoSearch from './VideoSearch';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
          <VideoSearch />
        </div>
      </div>
    </Router>
  );
}

export default App;


