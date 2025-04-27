import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAttention(true);

      setTimeout(() => {
        setAttention(false);
      }, 1000); // Stop giggle after 1s
    }, 2000); // Start giggle after 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-dc">DC</span>
          <span className="logo-cable">CABLE</span>
          <div className="logo-sub">AUTHORIZED CONTRACTOR</div>
        </div>

        {/* Hamburger */}
        <button 
  className={`hamburger ${menuOpen ? 'open' : ''}`} 
  onClick={() => setMenuOpen(!menuOpen)}
>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</button>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





