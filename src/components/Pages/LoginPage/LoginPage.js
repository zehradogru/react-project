// src/components/LoginPage/LoginPage.js

import React, { useState } from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, password });
    // Burada login işlemleri yapılabilir, örneğin API çağrısı gibi
  };

  const handleForgotPassword = () => {
    // Forgot password işlemleri burada yapılabilir, örneğin modal açılabilir veya yeni bir sayfaya yönlendirme yapılabilir
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
          <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
        </div>
        <button type="submit">Log in</button>
        <div className={styles['signup-link']}>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
      </form>
    </div>
  );
};

export default LoginPage;
