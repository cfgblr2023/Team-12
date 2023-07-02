// import Footer from "../Footer";

// const Login = () => {
//     return ( 
//         <div>
//             <br /><br />
//             <h1>Login Page</h1>
//             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

//             <Footer/>
//         </div>
//      );
// }
 
// export default Login;



import React, { useState } from 'react';
import Footer from '../Footer';
import '../login.css';

const Login = () => {

  const [loginType, setLoginType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Type:', loginType);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    // Reset form fields
    setLoginType('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <div>
        <br /><br /><br /><br />
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Login Type:</label>
          <select
            value={loginType}
            onChange={handleLoginTypeChange}
            className="form-control"
          >
            <option value="">Select Login Type</option>
            <option value="volunteer">Volunteer</option>
            <option value="mentee">Mentee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password/PIN:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <Footer/>
    </div>
  );
};

export default Login;
