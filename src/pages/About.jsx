
import CompanyName from './CompanyName';
const About = () => {
  return (
    <section className="section">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      About <CompanyName />
    </h2>

      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: '#ddd' }}>
        At <CompanyName />, we specialize in high-quality aerial and underground installations.
        With over a decade of hands-on experience, we’ve earned a reputation for precision,
        safety, and reliability across Florida and beyond.
      </p>

      <h3 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: '#ccc' }}>
        Emergency Response & Past Projects
      </h3>
      <ul style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', color: '#ccc', paddingLeft: '1rem' }}>
        <li>🌪️ Hurricane Ida – Emergency restoration work in Louisiana (2021)</li>
        <li>🌊 Hurricane Ian – Critical infrastructure repairs in Fort Myers, FL (2022)</li>
        <li>🌀 Hurricane Francine – Full-service deployment in Louisiana (2024)</li>
        <li>🌬️ Hurricane Helene – Multi-state emergency support in Georgia, North Carolina, and South Carolina (2024)</li>
      </ul>
    </section>
  );
};

export default About;

  
  