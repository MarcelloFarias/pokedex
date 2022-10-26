import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Details from './pages/Details/index.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);