import React from 'react';

const services = [
  { title: 'Basic Wash', desc: 'Exterior wash and dry', price: '₹199' },
  { title: 'Average Wash', desc: 'Exterior + interior vacuum', price: '₹299' },
  { title: 'Premium Wash', desc: 'Full wash, wax, and polish', price: '₹499' },
  { title: 'Exterior Foam Wash', desc: 'Deep foam cleaning', price: '₹399' },
  { title: 'Bike Wash & Polish', desc: 'Complete bike care', price: '₹149' },
];

const Services = () => (
  <div className="container mt-5">
    <div className="bg-section">
      <h2 className="section-title text-center">Our Services</h2>
      <div className="row">
        {services.map((service, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
                <p className="card-text fw-bold">{service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services; 