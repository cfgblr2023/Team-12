
// import React from 'react';
// import '../../App.css';

// function SignUp() {
//   return (
//     <>
//       <br /><br /><br /><br />
//       <h1>Login As:</h1>


//     </>
//   );
// }

// export default SignUp;


import React from 'react';
import { Link } from 'react-router-dom';
import '../signupstyle.css'

function SignUp() {
  return (
    <>
      <br /><br /><br /><br />
      <h1>Login As:</h1>
      <br /><br />
      <center>
      <Link to="/volunteer-form" className="big-button">
        Volunteer
      </Link>

      <Link to="/mentee" className="big-button">
        Mentee
      </Link>
      </center>
    </>
  );
}

export default SignUp;

