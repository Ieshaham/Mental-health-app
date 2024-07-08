// src/components/UserAuth.jsx

import React, { useState } from 'react';
import { initializeApp } from 'firebase/app'; // Import initializeApp from Firebase Modular SDK
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Import specific auth functions
import GoBack from './GoBack';



// Initialize Firebase app instance
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth from Firebase Modular SDK

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Handle successful logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <GoBack />
      <h2>Firebase Authentication</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className='signin-button ' onClick={handleLogin}>Log In</button>
      <button className='signup-button' onClick={handleLogout}>Log Out</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserAuth;
