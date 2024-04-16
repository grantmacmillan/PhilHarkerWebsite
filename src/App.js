import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EcologyScreen from './screens/EcologyScreen';
import SoftwareScreen from './screens/SoftwareScreen';
import WritingScreen from './screens/WritingScreen';
import ContactScreen from './screens/ContactScreen';
import './App.css';

// Navigation Bar Component
const NavBar = () => {
  useEffect(() => {
    const adjustPadding = () => {
      const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    };

    // Adjust padding on mount and after window resize
    adjustPadding();
    window.addEventListener('resize', adjustPadding);

    // Cleanup listener when component unmounts
    return () => window.removeEventListener('resize', adjustPadding);
  }, []);
  return (
    <nav className="custom-navbar">
      <ul className="custom-nav-list">
        <li className="custom-nav-item">
          <Link to="/" className="custom-nav-link">Home</Link>
        </li>
        <li className="custom-nav-item">
          <Link to="/ecology" className="custom-nav-link">Ecology</Link>
        </li>
        <li className="custom-nav-item">
          <Link to="/software" className="custom-nav-link">Software</Link>
        </li>
        <li className="custom-nav-item">
          <Link to="/writing" className="custom-nav-link">Writing</Link>
        </li>
        <li className="custom-nav-item">
          <Link to="/contact" className="custom-nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

// App Component
function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/ecology" element={<EcologyScreen />} />
          <Route path="/software" element={<SoftwareScreen />} />
          <Route path="/writing" element={<WritingScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
