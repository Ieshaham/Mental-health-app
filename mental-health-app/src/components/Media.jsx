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
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6; // Number of videos per page

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: process.env.REACT_APP_YOUTUBE_API_KEY,
              q: tabQueries[activeTab],
              part: 'snippet',
              maxResults: 50, // Fetch more videos to accommodate pagination
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

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleTabClick = tab => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset current page when changing tabs
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
        {currentVideos.map(video => (
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
      <div className="pagination">
        {Array.from({ length: Math.ceil(videos.length / videosPerPage) }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Media;
