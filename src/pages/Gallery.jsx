const Gallery = () => {
    const videos = ['one.mp4', 'two.mp4', 'three.mp4'];
  
    return (
      <section className="section" style={{ padding: '2rem 1rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginTop: '10rem',marginBottom: '2rem', textAlign: 'center', color: '#eee' }}>
          Project Gallery
        </h2>
  
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {videos.map((file, index) => (
            <div key={file} style={{ maxWidth: '400px', width: '100%' }}>
              <video
                controls
                style={{ width: '100%', borderRadius: '10px', backgroundColor: '#000' }}
              >
                <source src={`/videos/${file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p style={{ textAlign: 'center', marginTop: '0.5rem', color: '#ccc' }}>
                Project Video {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;
  