import React from 'react';

const Contact = () => (
  <div className="container mt-5">
    <div className="bg-section">
      <h2 className="section-title text-center">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Contact Details</h5>
          <p><strong>Phone Number:</strong><br />+91 74889 28997</p>
          <p><strong>Address:</strong><br />Basudhara Complex,<br />South Collectorate Road,<br />Opposite Reliance Smart Point and Near Collectorate,<br />Buxar, Bihar, 802103</p>
          <p><strong>Email:</strong><br />contactus@dashsteam.com</p>
          <p>
            <a href="https://instagram.com" className="me-2" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" className="me-2" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://linkedin.com" className="me-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
          </p>
        </div>
        <div className="col-md-6">
          <h5>Send Us a Message</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled>Send (Demo Only)</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact; 