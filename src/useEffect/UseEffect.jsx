import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data[0].email);
      console.log('API WAS CALLED');
    });
  }, []);
  return (
    <div>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseEffect;
