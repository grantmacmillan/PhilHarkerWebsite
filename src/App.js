import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EcologyScreen from './screens/EcologyScreen';
import SoftwareScreen from './screens/SoftwareScreen';
import WritingScreen from './screens/WritingScreen';
import './App.css';
import ContactScreen from './screens/ContactScreen';

// Navigation Bar Component
const NavBar = () => {

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/ecology" className="nav-link">Ecology</Link>
        </li>
        <li className="nav-item">
          <Link to="/software" className="nav-link">Software</Link>
        </li>
        <li className="nav-item">
          <Link to="/writing" className="nav-link">Writing</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

// App Component
function App() {
  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const app = document.querySelector('.App');
    app.style.marginTop = `${navbarHeight}px`;
  }, []);
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
