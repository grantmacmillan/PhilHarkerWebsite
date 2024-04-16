import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EcologyScreen from './screens/EcologyScreen';
import SoftwareScreen from './screens/SoftwareScreen';
import WritingScreen from './screens/WritingScreen';
import './App.css';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
