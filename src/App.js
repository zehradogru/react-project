// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage/HomePage';
import InfluencersPage from './components/Pages/InfluencersPage/InfluencersPage';
import BoardPage from './components/Pages/BoardPage/BoardPage';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import SignUpPage from './components/Pages/LoginPage/SignUpPage/SignUpPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // giriş
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserInfo(user);
  };

  // çıkış
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} userInfo={userInfo} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/influencers" element={<InfluencersPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={handleLogin} />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
