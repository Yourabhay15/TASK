import React from 'react';

const testimonials = [
  {
    name: 'Amit Sharma',
    quote: 'Fantastic service! My car looks brand new every time.',
  },
  {
    name: 'Priya Singh',
    quote: 'Quick, professional, and affordable. Highly recommended!',
  },
  {
    name: 'Rahul Verma',
    quote: 'The best car wash experience I have ever had.',
  },
];

const Testimonials = () => (
  <div className="container mt-5">
    <div className="bg-section">
      <h2 className="section-title text-center">Testimonials</h2>
      <div className="row justify-content-center">
        {testimonials.map((t, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>"{t.quote}"</p>
                  <footer className="blockquote-footer mt-2">{t.name}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials; 