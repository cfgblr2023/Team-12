import React, { useState } from 'react';
import './menteeform.css'; // Import the CSS file for styling

function DropoutForm() {
  const [reason, setReason] = useState('');
  const [educationTill, setEducationTill] = useState('');
  const [interests, setInterests] = useState('');
  const [modeOfEducation, setModeOfEducation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleEducationTillChange = (e) => {
    setEducationTill(e.target.value);
  };

  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  };

  const handleModeOfEducationChange = (e) => {
    setModeOfEducation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Reason:', reason);
    console.log('Education Till:', educationTill);
    console.log('Interests:', interests);
    console.log('Mode of Education:', modeOfEducation);
    // Reset form fields
    setReason('');
    setEducationTill('');
    setInterests('');
    setModeOfEducation('');
    setPhoneNumber('');
    setPassword('');
    setName('');
    setLocation('');

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="location">Location:</label>
      <select id="location" value={location} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        <option value="north">North Bangalore</option>
        <option value="south">South Bangalore</option>
        <option value="east">East Bangalore</option>
        <option value="west">West Bangalore</option>
      </select>
    </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Dropout:</label>
          <select
            id="reason"
            value={reason}
            onChange={handleReasonChange}
          >
            <option value="">Select Reason</option>
            <option value="family">Family Problems</option>
            <option value="financial">Financial Worries</option>
            <option value="childLabour">Child Labour</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Education Till:</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="<5th"
                checked={educationTill === '<5th'}
                onChange={handleEducationTillChange}
              />
              <span>&lt;5th Grade</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="<10th"
                checked={educationTill === '<10th'}
                onChange={handleEducationTillChange}
              />
              <span>&lt;10th Grade</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="<12th"
                checked={educationTill === '<12th'}
                onChange={handleEducationTillChange}
              />
              <span>&lt;12th Grade</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="interests">My Interests:</label>
          <select
            id="interests"
            value={interests}
            onChange={handleInterestsChange}
          >
            <option value="">Select Interest</option>
            <option value="technical">Technical</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mode of Education:</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="online"
                checked={modeOfEducation === 'online'}
                onChange={handleModeOfEducationChange}
              />
              <span>Online</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="offline"
                checked={modeOfEducation === 'offline'}
                onChange={handleModeOfEducationChange}
              />
              <span>Offline</span>
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DropoutForm;
