import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Login from './routes/Login';
import Home from './routes/Home';

function App() {

  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
