import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faSadTear, faTired, faAngry, faMeh } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import GoBack from './GoBack';


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
    navigate('/prompt', { state: { prompt: moodPrompts[mood] } }); 
  };

  const getIcon = (mood) => {
    switch (mood) {
      case '😊':
        return faSmile;
      case '😞':
        return faSadTear;
      case '😰':
        return faTired; 
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
          <GoBack />
      <h2 style={{ display: "flex", justifyContent: "center", position: "relative", top: "25px" , color:"#973D22"}}>Select Your Mood</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}>
        {Object.keys(moodPrompts).map(mood => (
          <button key={mood} onClick={() => handleMoodSelect(mood)} style={{display:"flex", justifyContent:"space-around" , margin:"30px", borderColor:"#973D22", borderRadius:"5px"}}>
            <FontAwesomeIcon icon={getIcon(mood)} style={{ height: "150px", color: "#973D22"  }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
