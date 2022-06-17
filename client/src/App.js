
import React, { useState, useEffect } from 'react';
import {Typography} from '@mui/material';

export default function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/members')
      .then(res => res.json())
      .then(data => {
            setData(data)
            console.log({data})
          })
  }, []);


  return (
    <div>
      {
      (typeof data.members === 'undefined') ? (<Typography>Loading...</Typography>) :
      (data.members.map((member, i) => {
        return <Typography key={i}>{member}</Typography>
      }))
      }
    </div>
  );

}
