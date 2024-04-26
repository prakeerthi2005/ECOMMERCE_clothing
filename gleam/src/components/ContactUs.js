import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Let's Start a Conversation. Ask how we can help you.</p>
        <ul>
          <li>Email: Gleam@gmail.com</li>
-          <li>Phone: 7799157979</li>
          <li>Address: 56 PQR Lane, Kolkata, West Bengal, 700001</li>
        </ul>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" action="">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
