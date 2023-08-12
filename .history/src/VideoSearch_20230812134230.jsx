import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyAZw_7fp6hzKHZ_UNfC9jRiNJBWZQnTOmM';
const CHANNEL_ID = 'CSgDjZ_Vv8g';
const RESULTS_PER_PAGE = 10;


const VideoSearch = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
  
    const searchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&type=video&q=${searchTerm}&maxResults=${RESULTS_PER_PAGE}&pageToken=${currentPage > 1 ? videos.length : ''}`
        );
  
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      searchVideos();
    };
  
    return (
      <div>
        <h1>Video Search</h1>
        <input
          type="text"
          placeholder="Search videos by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => handlePageChange(1)}>Search</button>
  
        <div>
          {videos.map((video) => (
            <div key={video.id.videoId}>
              <h2>{video.snippet.title}</h2>
              <iframe
                title={video.snippet.title}
                width="560"
                height="415"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
  
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
        </div>
      </div>
    );
  };
  
  export default VideoSearch;
