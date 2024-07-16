import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import GoBack from './GoBack';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page after successful login
      history.push('/gemini');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to login page after successful logout
      history.push('/login'); // Assuming you have a login route
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <GoBack />
      <div style={{
      padding: '20px',
      borderRadius: '8px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="card-sign-in"
      style={{ width: '18rem',
         backgroundColor: '#f9f9f9', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
        <div className="card-body">
          <h5 className="card-title">Sign In</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">to continue to chat</h6>
          
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
          <button className='signin-button' onClick={handleLogin}>Log In</button>
          <button className='signup-button' onClick={handleLogout}>Log Out</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserAuth;

