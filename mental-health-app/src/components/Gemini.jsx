// import React, { useEffect, useState } from 'react';
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// const Gemini = () => {
//     const [generatedText, setGeneratedText] = useState(null);

//     useEffect(() => {
//         const runChat = async () => {
//             // Set your API key and model name
//             const MODEL_NAME = "gemini-1.5-pro-latest";
//             const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

//             // Check if the API key is defined
//             if (!API_KEY) {
//                 console.error("Error: GOOGLE_GEMINI_API_KEY environment variable is not defined.");
//                 return; // Exit early if API key is not defined
//             }

//             // Create a new instance of GoogleGenerativeAI with your API key
//             const genAI = new GoogleGenerativeAI(API_KEY);

//             // Get the generative model with the specified model name
//             const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//             // Define generation configuration and safety settings
//             const generationConfig = {
//                 temperature: 1,
//                 topK: 0,
//                 topP: 0.95,
//                 maxOutputTokens: 8192,
//             };

//             const safetySettings = [
//                 {
//                     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//                     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//                 },
//                 {
//                     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//                     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//                 },
//                 {
//                     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//                     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//                 },
//                 {
//                     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//                     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//                 },
//             ];

//             // Start a chat session with the specified configuration
//             const chat = model.startChat({
//                 generationConfig,
//                 safetySettings,
//                 history: [],
//             });

//             // Send a message to the chat and log the response
//             const result = await chat.sendMessage("Write a sonnet about a programmers life, but also make it rhyme.");
//             const response = result.response;
//             setGeneratedText(response.text());
//             console.log(response.text());
//         };

//         runChat();
//     }, []);

//     return (
//         <div>
//             <h2>Generated Text:</h2>
//             <p>{generatedText}</p>
//         </div>
//     );
// };

// export default Gemini;

import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";


const Gemini = () => {
    const [userInput, setUserInput] = useState('');
    const [generatedText, setGeneratedText] = useState(null);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleGenerateText = async () => {
        setLoading(true); // Set loading state to true

        const MODEL_NAME = "gemini-1.0-pro-latest";
        const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

        if (!API_KEY) {
            console.error("Error: GOOGLE_GEMINI_API_KEY environment variable is not defined.");
            setLoading(false); // Set loading state to false
            return;
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 1,
            topK: 0,
            topP: 0.95,
            maxOutputTokens: 8192,
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
        setGeneratedText(response.text());
        setLoading(false); // Set loading state to false
        console.log(response.text());
    };

    return (
        <div className="container">
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message here"
            />
            <button onClick={handleGenerateText}>Send</button>
            {/* Display loading indicator when loading */}
            {loading && <p className="loading">Loading...</p>}
            <h2>Generated Text:</h2>
            <p>{generatedText}</p>
        </div>
    );
};

export default Gemini;
