import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [forms, setForm] = useState()
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/forms');
      setForm(res.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      {(forms) && forms.map((data, index) =>
        <ul key='index'>
          <li>firstName: {data.firstName}</li>
          <li>lastName: {data.lastName}</li>
          <li>phoneNumber: {data.phoneNumber}</li>
          <li>email: {data.email}</li>
          <li>zipCode: {data.zipCode}</li>
          <li>eventType: {data.eventType}</li>
          <li>proposedDates: {data.proposedDates}</li>
          <li>-----</li>
        </ul>
      )}
    </div>
  );

}

export default App;
