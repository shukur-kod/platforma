// src/Components/Home/Home.jsx
import React from 'react';
import './Home.css'; // CSS faylini import qilish
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>Welcome to the Movie Platform!</h2>
      <p>Select a category from the navbar to explore our collection.</p>
    </motion.div>
  );
};


export default Home;