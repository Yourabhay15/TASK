import React from 'react';

const usps = [
  { icon: 'bi-truck', title: 'Free Shipping', desc: 'Free shipping on all bookings.' },
  { icon: 'bi-headset', title: 'Dedicated Support', desc: '24/7 customer support for all your needs.' },
  { icon: 'bi-cash-coin', title: 'Money-Back Guarantee', desc: 'Satisfaction guaranteed or your money back.' },
  { icon: 'bi-star', title: 'Trending Services', desc: 'Our most popular and trending car care services.' },
];

const WhyChooseUs = () => (
  <div className="container mt-5">
    <div className="bg-section">
      <h2 className="section-title text-center">Why Choose Us</h2>
      <div className="row">
        {usps.map((usp, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <i className={`bi ${usp.icon} display-4 mb-3`}></i>
                <h5 className="card-title">{usp.title}</h5>
                <p className="card-text">{usp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhyChooseUs; 