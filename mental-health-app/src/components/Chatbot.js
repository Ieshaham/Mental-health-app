import React, { useState } from 'react';
import OpenAI from 'openai';

const Chatbot = () => {
  const [prompt, setPrompt] = useState('');

  const generatePrompt = async () => {
    
    const apiKey = "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";

    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
    try {
      const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo-0125',
        prompt: `Write a journal prompt about:`,
      });

      const generatedPrompt = completion.data.choices[0].text.trim();
      setPrompt(generatedPrompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  };

  return (
    <div>
      <h1>Journal Prompt Generator</h1>
      <button onClick={generatePrompt}>Generate Prompt</button>
      <p>{prompt}</p>
    </div>
  );
};

export default Chatbot;
