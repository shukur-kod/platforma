import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Section from './Components/Section/Section';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/science-fiction" element={<Section title="Science Fiction" />} />
          <Route path="/fantasy" element={<Section title="Fantasy" />} />
          <Route path="/trending" element={<Section title="Trending" />} />
          <Route path="/popular" element={<Section title="Popular" />} /> {/* Popular bo'limini qo'shish */}
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
