import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAppointmentForm.css';

const BookAppointmentForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentDetails = {
      patientName: name,
      patientDOB: dob,
      patientPhone: phone,
      patientEmail: email,
    };
    // Navigate to the Appointment Email component with state
    navigate('/appointment-email', { state: { appointmentDetails } });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
