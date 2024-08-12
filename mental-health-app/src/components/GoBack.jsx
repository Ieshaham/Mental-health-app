

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBack = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack(); // Navigate back to previous location
  };

  return (
    <button className="goback-button"onClick={handleClick}>Go Back</button>
  );
};

export default GoBack;



