import React, { useState } from 'react';

const UseState = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} placeholder="enter something..." />
      {inputValue}
    </div>
  );
};

export default UseState;
