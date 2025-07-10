import React from 'react';
import Testimonials from './Testimonials';

const Home = () => (
  <div className="container mt-5">
    <div className="text-center mb-5 bg-section">
      <h1 className="section-title">Welcome to Vap'd Dashsteam</h1>
      <p className="lead">Premium Car & Bike Wash Services</p>
      <a href="/contact" className="btn btn-primary btn-lg mt-3">Book Now</a>
    </div>
    <div className="row mb-4 bg-section">
      <div className="col-md-6 mb-4 mb-md-0">
        <h2 className="section-title">Who We Are</h2>
        <p>We are passionate car care professionals dedicated to making your vehicle shine. With years of experience and a customer-first approach, Vap'd Dashsteam delivers the best wash and detailing services in town.</p>
      </div>
      <div className="col-md-6">
        <h2 className="section-title">Our Achievements & Milestones</h2>
        <ul>
          <li>1000+ happy customers</li>
          <li>Upto 10% off on first booking</li>
          <li>Free shipping on all bookings</li>
          <li>Dedicated support 24/7</li>
          <li>Money-back guarantee</li>
        </ul>
      </div>
    </div>
    <Testimonials />
  </div>
);

export default Home; 