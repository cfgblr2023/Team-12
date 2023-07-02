// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try { 
//         const response = await axios.get('http://localhost:3000/volunteer/id/64a09848c0f3c9949820f887');
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h2>Mentee: {item.mentee}</h2>
//           <p>Skills: {item.skills.join(', ')}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const DataList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/volunteer/id/64a09848c0f3c9949820f887'); 
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item._id}>{item.name}</li> 
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DataList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('localhost:5000/volunteer/id/64a09848c0f3c9949820f887'); // Replace with your backend API endpoint
//       setData(response.data);
//       console.log(response.data); // Log the data to the console
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item._id}>{item.name}</li> // Replace 'name' with the key you want to display from your data
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // Replace with your backend API endpoint
      setData(response.data);
      console.log(response.data); // Log the data to the console
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Data List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
