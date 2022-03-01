import React, { useCallback, useEffect, useState } from 'react';

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunc = useCallback(() => {
    console.log(`someFunc : number ${number}`);
  }, [number]);

  useEffect(() => {
    console.log('someFunc was changed!');
  }, [someFunc]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunc}>Call someFunc</button>
    </div>
  );
};

export default UseCallback;
