import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import axios from 'axios';
import Breaker from './pages/Breaker';
function App() {
  return (
    <Router >
      <div className="min-h-screen bg-neutral-400">
        <NavBar/>
        <div className='content'>
          <Routes className="routes">
            <Route path="/" element={<HomePage/>}/>
            <Route path='/breaker' element={<Breaker/>}/>
          </Routes>

        </div>
      
      </div>
    </Router>
  );
}

export default App;
