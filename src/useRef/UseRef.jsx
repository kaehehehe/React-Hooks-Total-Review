import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1>UseRef</h1>
      <input placeholder="text..." ref={inputRef}/>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default UseRef;
