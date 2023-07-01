// import React, { useState } from 'react';

// const VolunteerForm = () => {
//   const [preference, setPreference] = useState('');
//   const [daysAvailable, setDaysAvailable] = useState([]);
//   const [date, setDate] = useState('');

//   const handlePreferenceChange = (event) => {
//     setPreference(event.target.value);
//   };

//   const handleDaysAvailableChange = (event) => {
//     const selectedDays = Array.from(event.target.options)
//       .filter((option) => option.selected)
//       .map((option) => option.value);

//     setDaysAvailable(selectedDays);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform any necessary form submission logic here
//     console.log('Preference:', preference);
//     console.log('Days Available:', daysAvailable);
//     console.log('Date:', date);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="preference">Preference:</label>
//       <input
//         type="text"
//         id="preference"
//         value={preference}
//         onChange={handlePreferenceChange}
//       />

//       <label htmlFor="daysAvailable">Days Available:</label>
//       <select
//         id="daysAvailable"
//         multiple
//         value={daysAvailable}
//         onChange={handleDaysAvailableChange}
//       >
//         <option value="monday">Monday</option>
//         <option value="tuesday">Tuesday</option>
//         <option value="wednesday">Wednesday</option>
//         <option value="thursday">Thursday</option>
//         <option value="friday">Friday</option>
//       </select>

//       <label htmlFor="date">Date:</label>
//       <input
//         type="date"
//         id="date"
//         value={date}
//         onChange={handleDateChange}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default VolunteerForm;


//------------------------------------------------------------------------

// import React, { useState } from 'react';
// import '../volunteer.css'

// const VolunteerForm = () => {
//   const [preference, setPreference] = useState('online');
//   const [daysAvailable, setDaysAvailable] = useState([]);
//   const [date, setDate] = useState('');
//   const [skills, setSkills] = useState('');
//   const [mode, setMode] = useState('accept');

//   const handlePreferenceChange = (event) => {
//     setPreference(event.target.value);
//   };

//   const handleDaysAvailableChange = (event) => {
//     const selectedDays = Array.from(event.target.options)
//       .filter((option) => option.selected)
//       .map((option) => option.value);

//     setDaysAvailable(selectedDays);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleSkillsChange = (event) => {
//     setSkills(event.target.value);
//   };

//   const handleModeChange = (event) => {
//     setMode(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform any necessary form submission logic here
//     console.log('Preference:', preference);
//     console.log('Days Available:', daysAvailable);
//     console.log('Date:', date);
//     console.log('Skills:', skills);
//     console.log('Mode:', mode);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="volunteer-form">
//       <div className="form-group">
//         <label>
//           <input
//             type="radio"
//             value="online"
//             checked={preference === 'online'}
//             onChange={handlePreferenceChange}
//           />
//           Online
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="offline"
//             checked={preference === 'offline'}
//             onChange={handlePreferenceChange}
//           />
//           Offline
//         </label>
//       </div>

//       <div className="form-group">
//         <label htmlFor="daysAvailable">Days Available:</label>
//         <select
//           id="daysAvailable"
//           multiple
//           value={daysAvailable}
//           onChange={handleDaysAvailableChange}
//         >
//           <option value="monday">Monday</option>
//           <option value="tuesday">Tuesday</option>
//           <option value="wednesday">Wednesday</option>
//           <option value="thursday">Thursday</option>
//           <option value="friday">Friday</option>
//         </select>
//       </div>

//       <div className="form-group">
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={handleDateChange}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="skills">Skills:</label>
//         <input
//           type="text"
//           id="skills"
//           value={skills}
//           onChange={handleSkillsChange}
//         />
//       </div>

//       <div className="form-group">
//         <label>Mode:</label>
//         <label>
//           <input
//             type="radio"
//             value="accept"
//             checked={mode === 'accept'}
//             onChange={handleModeChange}
//           />
//           Accept
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="reject"
//             checked={mode === 'reject'}
//             onChange={handleModeChange}
//           />
//           Reject
//         </label>
//       </div>

//       <button type="submit" className="submit-button">Submit</button>
//     </form>
//   );
// };

// export default VolunteerForm;

//----------------------------------------------------------------------

// import React, { useState } from 'react';
// import '../volunteer.css'

// const VolunteerForm = () => {
//   const [preference, setPreference] = useState('online');
//   const [daysAvailable, setDaysAvailable] = useState([]);
//   const [date, setDate] = useState('');
//   const [skills, setSkills] = useState('');

//   const handlePreferenceChange = (event) => {
//     setPreference(event.target.value);
//   };

//   const handleDaysAvailableChange = (event) => {
//     const selectedDays = Array.from(event.target.options)
//       .filter((option) => option.selected)
//       .map((option) => option.value);

//     setDaysAvailable(selectedDays);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleSkillsChange = (event) => {
//     setSkills(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform any necessary form submission logic here
//     console.log('Preference:', preference);
//     console.log('Days Available:', daysAvailable);
//     console.log('Date:', date);
//     console.log('Skills:', skills);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="volunteer-form">
//       <div className="form-group">
//         <label>
//           <input
//             type="radio"
//             value="online"
//             checked={preference === 'online'}
//             onChange={handlePreferenceChange}
//           />
//           Online
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="offline"
//             checked={preference === 'offline'}
//             onChange={handlePreferenceChange}
//           />
//           Offline
//         </label>
//       </div>

//       <div className="form-group">
//         <label htmlFor="daysAvailable">Days Available:</label>
//         <select
//           id="daysAvailable"
//           multiple
//           value={daysAvailable}
//           onChange={handleDaysAvailableChange}
//         >
//           <label>Select a day</label>
//           <option value="0">Sunday</option>
//           <option value="1">Monday</option>
//           <option value="2">Tuesday</option>
//           <option value="3">Wednesday</option>
//           <option value="4">Thursday</option>
//           <option value="5">Friday</option>
//           <option value="6">Saturday</option>
//         </select>
//       </div>

      

//       <div className="form-group">
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={handleDateChange}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="skills">Skills:</label>
//         <select
//           id="skills"
//           value={skills}
//           onChange={handleSkillsChange}
//         >
//           <option value="">Select a skill</option>
//           <option value="tailory">Tailoring</option>
//           <option value="teaching">Teaching</option>
//           <option value="handloom">Handloom</option>
//           <option value="computer">Computer</option>
//           <option value="others">Others</option>
//         </select>
//       </div>

//       <button type="submit" className="submit-button">Submit</button>
//     </form>
//   );
// };

// export default VolunteerForm;


import React, { useState } from 'react';
import '../menteeform.css' // Import the CSS file for styling
import axios from 'axios';

function RegistrationForm() {
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [preference, setPreference] = useState('');
  const [week, setWeek] = useState('');
  const [educationalQualification, setEducationalQualification] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [skills, setSkills] = useState('');
  const [locality, setLocality] = useState('');

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePreferenceChange = (e) => {
    setPreference(e.target.value);
  };

  const handleWeekChange = (e) => {
    setWeek(e.target.value);
  };

  const handleEducationalQualificationChange = (e) => {
    setEducationalQualification(e.target.value);
  };

  const handleAadharNoChange = (e) => {
    setAadharNo(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleLocalityChange = (e) => {
    setLocality(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const body = {
      phoneNo,
      password,
      preference,
      week,
      educational_qualification: educationalQualification,
      aadhar_no: aadharNo,
      skills,
      locality
    }
    console.log(body)
    const response = await axios.post('http://localhost:5000/volunteer/', body);
    console.log(response.data);
    // Reset form fields
    setPhoneNo('');
    setPassword('');
    setPreference('');
    setWeek('');
    setEducationalQualification('');
    setAadharNo('');
    setSkills('');
    setLocality('');
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={handlePhoneNoChange}
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
          <label>Preference:</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="online"
                checked={preference === 'online'}
                onChange={handlePreferenceChange}
              />
              <span>Online</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="offline"
                checked={preference === 'offline'}
                onChange={handlePreferenceChange}
              />
              <span>Offline</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="week">Week:</label>
          <select id="week" value={week} onChange={handleWeekChange}>
            <option value="">Select Week</option>
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="educationalQualification">Educational Qualification:</label>
          <input
            type="text"
            id="educationalQualification"
            value={educationalQualification}
            onChange={handleEducationalQualificationChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="aadharNo">Aadhar No:</label>
          <input
            type="text"
            id="aadharNo"
            value={aadharNo}
            onChange={handleAadharNoChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <select id="skills" value={skills} onChange={handleSkillsChange}>
            <option value="">Select Skills</option>
            <option value="tailoring">Tailoring</option>
            <option value="handloom">Handloom</option>
            <option value="technical">Technical</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="locality">Locality:</label>
          <select id="locality" value={locality} onChange={handleLocalityChange}>
            <option value="">Select Locality</option>
            <option value="north">North Bangalore</option>
            <option value="south">South Bangalore</option>
            <option value="east">East Bangalore</option>
            <option value="west">West Bangalore</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;




  
      
      
 
