import { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', description: '' });

  const openModal = (title, description) => {
    setModalData({ isOpen: true, title, description });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <section className="section">
      <div className="tagline">
  <span className="tagline-normal">DC Cable:</span> <span className="tagline-gradient">Powering Possibilities</span>
</div>

      <div className="highlights">
  <div className="highlight-box" onClick={() => openModal('OSHA Certified', 'We comply with all OSHA safety standards to ensure safe and secure working environments.')}>
    <h4>✅ OSHA Certified</h4>
    <p>Tap for more</p>
  </div>

  <div className="highlight-box" onClick={() => openModal('Aerial Installation', 'We specialize in safe, efficient high-pole cable routing using bucket trucks and certified teams.')}>
    <h4>🛠️ Aerial Installation</h4>
    <p>Tap for more</p>
  </div>

  <div className="highlight-box" onClick={() => openModal('Based in Florida', 'Locally owned and operated. We proudly serve all regions of the continental US.')}>
    <h4>📍 Based in Florida</h4>
    <p>Tap for more</p>
  </div>

  <div className="highlight-box" onClick={() => openModal('Underground Runs', 'We handle protected, professional cable installations beneath the surface — safe from environmental wear.')}>
    <h4>🚜 Underground Runs</h4>
    <p>Tap for more</p>
  </div>

  <div className="highlight-box" onClick={() => openModal('Fiber Splicing', 'Precision fiber-optic splicing for fast, reliable, high-speed data networks.')}>
    <h4>🔌 Fiber Splicing</h4>
    <p>Tap for more</p>
  </div>

  <div className="highlight-box" onClick={() => openModal('Coax Maintenance', 'Reliable support and maintenance for coaxial systems to keep your networks strong.')}>
    <h4>📡 Coax Maintenance</h4>
    <p>Tap for more</p>
  </div>

  <div className="highlight-box" onClick={() => openModal('Over 10 Years Experience', 'With over a decade in the industry, we bring expertise, professionalism, and reliability to every job.')}>
    <h4>⏱ Over 10 Years Experience</h4>
    <p>Tap for more</p>
  </div>
</div>


      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        description={modalData.description}
      />
    </section>
  );
};

export default Home;