import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; // ✅ fixed name
import Gallery from './pages/Gallery'; // adjust path if needed
import Navbar from './pages/Navbar2';

import './App.css';

function App() {
  return (
    <Router>
      <div
 style={{
  background: "url('/fiber.jpg') center/cover no-repeat",
  minHeight: '100vh',
  minWidth: '100vw',
  color: 'white',
}}>

        {/* Navbar */}
        <Navbar />

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