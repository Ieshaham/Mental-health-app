// GoBack.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Goes back one step in history
  };

  return (
    <button onClick={goBack} 
    style={{height:"50px", width:"75px"}}
    className='goback-button'>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default GoBack;

