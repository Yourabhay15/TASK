import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
];

const Gallery = () => (
  <div className="container mt-5">
    <div className="bg-section">
      <h2 className="section-title text-center">Gallery</h2>
      <div className="row">
        {images.map((img, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <img src={img} alt={`Car Wash ${idx + 1}`} className="img-fluid rounded shadow-sm mb-3" />
          </div>
        ))}
      </div>
      <div className="mt-5 text-center">
        <h4 className="mb-3">Watch Our Work</h4>
        <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '600px' }}>
          <iframe src="https://www.youtube.com/embed/2g811Eo7K8U" title="Car Wash Video" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery; 