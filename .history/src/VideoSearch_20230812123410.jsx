import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const CHANNEL_ID = 'YOUR_CHANNEL_ID';

const VideoSearch = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&type=video&q=${searchTerm}`
      );

      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
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
      <button onClick={searchVideos}>Search</button>

      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSearch;
