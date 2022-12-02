import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Main from './Main';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/Signup" element={<Signup/>} />
       <Route path="/Main" element={<Main/>} />
      </Routes>
    </Router>
  )
}

export default App;
