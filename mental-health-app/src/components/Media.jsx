

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoBack from './GoBack';

const Media = () => {
  const tabQueries = {
    meditation: 'mindfulness meditation black woman ',
    exercise: 'black woman pilates',
    podcast: 'black women podcast'
  };

  const [activeTab, setActiveTab] = useState('meditation');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: process.env.REACT_APP_YOUTUBE_API_KEY,
              q: tabQueries[activeTab],
              part: 'snippet',
              maxResults: 20,
              type: 'video'
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [activeTab]);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
        <GoBack />
      <div className="tabs">
        <button
          className={activeTab === 'meditation' ? 'active' : ''}
          onClick={() => handleTabClick('meditation')}
        >
          Meditation
        </button>
        <button
          className={activeTab === 'exercise' ? 'active' : ''}
          onClick={() => handleTabClick('exercise')}
        >
          Exercise
        </button>
        <button
          className={activeTab === 'podcast' ? 'active' : ''}
          onClick={() => handleTabClick('podcast')}
        >
          Podcast
        </button>
      </div>
      <div className="videos-container">
        {videos.map(video => (
          <div key={video.id.videoId} className="video-item">
            <iframe
              title={video.snippet.title}
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Media;
