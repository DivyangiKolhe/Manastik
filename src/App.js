import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookAppointmentForm from './BookAppointmentForm';
import DoctorAppointmentEmail from './DoctorAppointmentEmail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookAppointmentForm />} />
        <Route path="/appointment-email" element={<DoctorAppointmentEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
