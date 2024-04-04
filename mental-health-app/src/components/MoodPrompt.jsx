import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GoBack from './GoBack';

const PromptPage = () => {
  const location = useLocation();
  const prompt = location.state && location.state.prompt;

  //  Define state variables
  const [inputValue, setInputValue] = useState(prompt || '');
  const [isModified, setIsModified] = useState(false);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsModified(true);
  };


  const handleSave = () => {
    // Perform saving logic here, e.g., send data to server
    console.log('Saving input:', inputValue);
    setIsModified(false);
  };

  return (
    <div>
      <GoBack />
    <div className='prompt' >
      <h2>Today's Journal Prompt</h2>
      <p>{prompt}</p>
      
      <input
        style={{width:"60rem"}}
        onChange={handleInputChange}
      />
     
      <button 
        className='prompt-save-button' 
        onClick={handleSave} 
        disabled={!isModified}
        style={{width:"15rem"}}
      >
        Save
      </button>
    </div>
    </div>
  );
};

export default PromptPage;
