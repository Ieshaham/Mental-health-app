

import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import GoBack from './GoBack';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Gemini = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleGenerateText = async () => {
        setLoading(true);
        setMessages(prevMessages => [...prevMessages, { text: userInput, fromUser: true }]);

        const MODEL_NAME = "gemini-1.0-pro-latest";
        const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

        if (!API_KEY) {
            console.error("Error: GOOGLE_GEMINI_API_KEY environment variable is not defined.");
            setLoading(false);
            return;
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 1,
            topK: 0,
            topP: 0.95,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: [],
        });

        const result = await chat.sendMessage(userInput);
        const response = result.response;
        setMessages(prevMessages => [...prevMessages, { text: response.text(), fromUser: false }]);
        setUserInput('');
        setLoading(false);
    };

    return (
        <div className="gemini-container">
            <GoBack />
           
                <div className="messages">
                    {messages.map((message, index) => (
                        <p key={index} className={message.fromUser ? 'user-message' : 'generated-message'}>{message.text}</p>
                    ))}
                </div>
          
            <div className="user-input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                    className="user-input"
                />
                <button className="send-button"onClick={handleGenerateText} >Send<i className="fas fa-paper-plane"></i> </button>
            </div>
            {loading && <p className="loading">Loading...</p>}
        </div>
    );
};

export default Gemini;


