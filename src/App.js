// src/App.js

import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Navbar component'ını import edin
import HomePage from './components/Pages/HomePage/HomePage';
import InfluencersPage from './components/Pages/InfluencersPage/InfluencersPape.js'; // Doğru yola gir
import BoardPage from './components/Pages/BoardPage/BoardPage.js';
import LoginPage from './components/Pages/LoginPage/LoginPage.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch yerine Routes kullan
import './App.css'; // Genel CSS dosyanızı import edin

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar'ı buraya ekleyin */}
        <main>
          <Routes> {/* Switch yerine Routes kullan */}
            <Route path="/" element={<HomePage />} exact />
            <Route path="/influencers" element={<InfluencersPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;