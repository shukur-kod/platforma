// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Qidiruv funksiyasini qo'shish (masalan, qidiruv natijalarini ko'rsatish)
    console.log("Qidiruv: ", searchTerm);
  };

  return (
    <nav className="navbar">
       <div className="navbar-logo">
        <h1>Movie Platform</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/science-fiction">Science Fiction</Link></li>
        <li><Link to="/fantasy">Fantasy</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/popular">Popular</Link></li>
      </ul>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Qidirish..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Qidirish</button>
      </form>
    </nav>
  );
};

export default Navbar;