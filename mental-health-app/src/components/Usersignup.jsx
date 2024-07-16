import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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

const Usersignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, you can do something with userCredential.user
      // Redirect to home page or user profile page after successful sign-up
      history.push('/');
    } catch (error) {
      setError(error.message);
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
      <div className="card" style={{ width: '18rem', backgroundColor: '#f9f9f9', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <h5 className="card-title">User Sign Up</h5>
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
          <button className="signup-button" onClick={handleSignup}>Sign Up</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Usersignup;
