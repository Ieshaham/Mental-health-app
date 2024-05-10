import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import GoBack from './GoBack';

// Initialize Firebase
const firebaseConfig = {
  
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
  

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Initialize Firestore

const PromptPage = () => {
  const location = useLocation();
  const prompt = location.state && location.state.prompt;

  // Define state variables
  const [inputValue, setInputValue] = useState(prompt || '');
  const [isModified, setIsModified] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsModified(true);
  };

  const handleSave = async () => {
    try {
      // Save the user input to Firestore
      await saveEntryToFirestore(inputValue);
      setIsModified(false);
      console.log('Entry saved successfully!');
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  const saveEntryToFirestore = async (inputValue) => {
    await db.collection('journalEntries').add({
      input: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // Add a timestamp
    });
  };

  return (
    <div>
      <GoBack />
      <div className='prompt' >
        <h2>Today's Journal Prompt</h2>
        <p>{prompt}</p>
        
        <textarea
          style={{ width: "60rem", height: "15rem" , marginBottom:"10px"}}
          value={inputValue}
          onChange={handleInputChange}
        />
       
        <button 
          className='prompt-save-button' 
          onClick={handleSave} 
          disabled={!isModified}
          style={{ width: "15rem" }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PromptPage;
