// LoginPage.js
import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('Login successful:', response.data);
      setIsLoggedIn(response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response.data);
      alert('Invalid email or password');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className={styles['login-container']}>
      <form className={styles['login-form']} onSubmit={handleSubmit}>
        <h2>Logo</h2>
        <h2>Log in Into Your Account</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className={styles['forgot-password']}>
          <a href="/forgotpassword" onClick={handleForgotPassword}>Forgot password?</a>
        </div>
        <button type="submit">Log in</button>
        <div className={styles['signup-link']}>
          <p>Don't have an account? <a href="/sign-up">Sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
