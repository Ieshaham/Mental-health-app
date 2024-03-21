import React, { useState, useEffect } from 'react';
import axios from 'axios';



const JournalPromptGenerator = () => {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    // Function to fetch prompt from GPT-3 API
    const fetchPrompt = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/text-davinci-003/completions',
          {
            prompt: "Generate a journal prompt about gratitude:",
            max_tokens: 50,
            temperature: 0.7
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          }
        );

        // Extract generated prompt from response
        const generatedPrompt = response.data.choices[0].text.trim();
        setPrompt(generatedPrompt);
      } catch (error) {
        console.error('Error fetching prompt:', error);
      }
    };

    // Fetch prompt when component mounts
    fetchPrompt();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>Journal Prompt</h2>
      <p>{prompt}</p>
    </div>
  );
};

export default JournalPromptGenerator;
