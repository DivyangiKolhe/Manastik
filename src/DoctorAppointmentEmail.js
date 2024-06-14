import React from 'react';
import { useLocation } from 'react-router-dom';
import './DoctorAppointmentEmail.css';

const DoctorAppointmentEmail = () => {
  const location = useLocation();
  const { patientName, patientDOB, patientPhone, patientEmail } = location.state.appointmentDetails || {};

  const appointmentDate = '13 June 2024';
  const appointmentTime = '10 AM';
  const doctorName = 'Dr. M.D. Jadhav';
  const patientMRN = '123456789';

  return (
    <div className="email-container">
      <div className="header">
        <img
          src="https://manastik.com/wp-content/uploads/2023/09/Manastik-logo.svg"
          alt="Apollo Hospital Logo"
          className="logo"
        />
        <div className="header-content">
          <div className="header-title">
            <h1>Manastik</h1>
            <h2>PATIENT APPOINTMENT LETTER</h2>
            <h3>Your Compassionate Guide in Dementia Care</h3>
          </div>
          <h3>Dementia Care Company</h3>
          <p>
            Manastik Dementia Care Center<br />
            Pune 411038<br />
            Phone: 7588285664<br />
            Email: contact@manastik.com<br/>
            <a href="https://manastik.com/">website: Manastik</a>
          </p>
        </div>
      </div>
      <div className="content">
        <p>Dear {patientName},</p>
        <p><strong>Date of Birth:</strong> {patientDOB}</p>
        <p><strong>Patient MRN:</strong> {patientMRN}</p>
        <p><strong>Phone:</strong> {patientPhone}</p>
        <p><strong>Email:</strong> {patientEmail}</p>
        <div className="content-container">
          <p>
            You are scheduled for an appointment with the Apollo Hospital. If you need to cancel or change your
            appointment, please notify us in advance by calling 7588285664. Please plan on two to four hours for your first clinic appointment.
          </p>
          <p><strong>Your appointment is scheduled for:</strong></p>
          <p><strong>Date:</strong> {appointmentDate}</p>
          <p><strong>Time:</strong> {appointmentTime}</p>
          <p><strong>with Dr:</strong> {doctorName}</p>
          <p>
            Please arrive 30 minutes before your appointment time.
          </p>
        </div>
        <p className="About-items">
          <strong>About Us:</strong><br/>
        </p>
        <p className="about">
          <strong>"Your Compassionate Guide in Dementia Care We specialize in offering comprehensive resources and support for individuals and families navigating the challenges of dementia "</strong>
        </p>

        <p className="bring-items">
          <strong>PLEASE BRING THE FOLLOWING WITH YOU TO YOUR APPOINTMENT:</strong>
        </p>
        <ul>
          <li>Insurance card(s), including Medicare, Medi-Cal</li>
          <li>Insurance co-pay (We accept credit, debit, or checks – no cash please)</li>
          <li>Valid photo ID</li>
          <li>
            Completed forms listed below, all of which are in your new patient packet:
            <ul>
              <li>Allergy and Medication form</li>
              <li>Patient Intake Questionnaire requesting physician and pharmacy information</li>
            </ul>
          </li>
        </ul>
        <p>
          For more information and services for our patients, check out our website{' '}
          <a href="https://manastik.com/#">Manastik/contactUs</a>
        </p>
      </div>
    </div>
  );
};

export default DoctorAppointmentEmail;
