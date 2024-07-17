import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import axios from 'axios';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      surname,
      email,
      password,
    };

    try {

      const userResponse = await axios.post('http://localhost:5000/users', userData);
      
      console.log('User registered:', userResponse.data);

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className={styles['sign-up-container']}>
      <form className={styles['sign-up-form']} onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
