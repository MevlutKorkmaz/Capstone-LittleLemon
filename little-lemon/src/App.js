import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
