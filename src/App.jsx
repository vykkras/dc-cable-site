import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; // ✅ fixed name
import Gallery from './pages/Gallery'; // adjust path if needed

import './App.css';

function App() {
  return (
    <Router>
      <div
  className="App"
  style={{
    background: 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
    minHeight: '100vh',
    minWidth: '100vw',
    color: 'white',
  }}
>

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <span className="logo-dc">DC</span>
            <span className="logo-cable">CABLE</span>
            <div className="logo-sub">AUTHORIZED CONTRACTOR</div>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

