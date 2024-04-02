import React from 'react';
import { useLocation } from 'react-router-dom';

const PromptPage = () => {
  const location = useLocation();
  const prompt = location.state && location.state.prompt;

  return (
    <div>
      <h2>Prompt</h2>
      <p>{prompt}</p>
    </div>
  );
};

export default PromptPage;
