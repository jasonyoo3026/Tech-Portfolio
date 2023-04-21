import React, { useState } from 'react';
import { Header } from 'semantic-ui-react';

const Contact = () => {
  // Add states for input values and validation messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Add an event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError('Name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!message) {
      setMessageError('Message is required.');
      isValid = false;
    } else {
      setMessageError('');
    }

    if (isValid) {
      // Submit the form or perform the desired action
    }
  };

  return (
    <section className="container mt-5" style={{ marginBottom: '2rem' }}>
      <Header as="h1" dividing>
        Contact
      </Header>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-danger">{nameError}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {messageError && <p className="text-danger">{messageError}</p>}
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
