import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadTear, faTired, faAngry, faMeh } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MoodSelector = () => {
  const navigate = useNavigate();

  const moodPrompts = {
    '😊': 'Think about something that made you smile today and write about it.',
    '😞': 'Reflect on something that\'s been bothering you lately and how you can overcome it.',
    '😰': 'Take a moment to acknowledge your worries and write down one thing you can do to ease your anxiety.',
    '😡': 'Vent your frustrations by writing about what\'s making you angry and how you can address it constructively.',
    '😌': 'Find a quiet place to relax and write about a moment of peace or contentment you experienced recently.'
  };

  const handleMoodSelect = (mood) => {
    navigate('/prompt', { state: { prompt: moodPrompts[mood] } }); // Navigate to '/prompt' route with mood prompt
  };

  const getIcon = (mood) => {
    switch (mood) {
      case '😊':
        return faSmile;
      case '😞':
        return faSadTear;
      case '😰':
        return faTired; // Changed from faFaceTired to faTired
      case '😡':
        return faAngry;
      case '😌':
        return faMeh;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", position: "relative", top: "25px" }}>Select Your Mood</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>
        {Object.keys(moodPrompts).map(mood => (
          <button key={mood} onClick={() => handleMoodSelect(mood)}>
            <FontAwesomeIcon icon={getIcon(mood)} style={{ height: "100px", color: "#973D22" }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
