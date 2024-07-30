// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import InfluencersPage from './Pages/InfluencersPage/InfluencersPage';
import BoardPage from './Pages/BoardPage/BoardPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/LoginPage/SignUpPage/SignUpPage';
import ResetPassword from './Pages/LoginPage/ResetPassword/ResetPassword';
import SwitchRole from './Pages/SwitchRole/SwitchRole';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ToolsPage from './Pages/ToolsPage/ToolsPage';


import '@fortawesome/fontawesome-free/css/all.min.css';

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
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/register" element={<SwitchRole />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tools" element={<ToolsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
