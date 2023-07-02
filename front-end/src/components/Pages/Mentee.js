import React, { useState } from 'react';
import '../menteeform.css'; // Import the CSS file for styling
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
        reason,
        education:educationTill,
        my_intrests:interests,
        mode: modeOfEducation,
        phoneNo:phoneNumber,
        password,
        name,
        location
    }
    console.log(body)
    // Handle form submission logic here
    const response = await axios.post('http://localhost:5000/mentee/', body);
      console.log(response.data);
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
    
    
    <div className="container"><br/><br/><br/>
      <h1>Dropout Form</h1>
      <form onSubmit={handleSubmit}>
      <table >
        <tr>
          <td>
            <label htmlFor="phoneNumber">Phone Number:</label>
          </td>
          <td>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="password">Password:</label>
          </td>
          <td>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="name">Name:</label>
          </td>
          <td>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="location">Location:</label>
          </td>
          <td>
            <select
              id="location"
              value={location}
              onChange={handleLocationChange}
            >
              <option value="">Select Location</option>
              <option value="north">North Bangalore</option>
              <option value="south">South Bangalore</option>
              <option value="east">East Bangalore</option>
              <option value="west">West Bangalore</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="reason">Reason for Dropout:</label>
          </td>
          <td>
            <select id="reason" value={reason} onChange={handleReasonChange}>
              <option value="">Select Reason</option>
              <option value="family">Family Problems</option>
              <option value="financial">Financial Worries</option>
              <option value="childLabour">Child Labour</option>
              <option value="others">Others</option>
            </select>{" "}
          </td>
        </tr>

        <tr>
          <td>
            <label>Education Till:</label>
          </td>
          <td>
            <label>
              <input
                type="radio"
                value="<5th"
                checked={educationTill === "<5th"}
                onChange={handleEducationTillChange}
              />
              <span>&lt;5th Grade</span>
            </label>

            <label>
              <input
                type="radio"
                value="<10th"
                checked={educationTill === "<10th"}
                onChange={handleEducationTillChange}
              />
              <span>&lt;10th Grade</span>
            </label>

            <label>
              <input
                type="radio"
                value="<12th"
                checked={educationTill === "<12th"}
                onChange={handleEducationTillChange}
              />
              <span>&lt;12th Grade</span>
            </label>
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="interests">My Interests:</label>
          </td>
          <td>
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
          </td>
        </tr>

        <tr>
          <td>
            <label>Mode of Education:</label>
          </td>
          <td>
            <label>
              <input
                type="radio"
                value="online"
                checked={modeOfEducation === "online"}
                onChange={handleModeOfEducationChange}
              />
              <span>Online</span>
            </label>

            <label>
              <input
                type="radio"
                value="offline"
                checked={modeOfEducation === "offline"}
                onChange={handleModeOfEducationChange}
              />
              <span>Offline</span>
            </label>
          </td>
        </tr>
        <tr>
          <td>

          </td>
          <td>
          <button type="submit">Submit</button>
          </td>
        </tr>
        
      </table>
      </form>
    </div>
  );
}

export default DropoutForm;