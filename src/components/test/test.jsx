import React, { useState } from 'react';

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  function handleButtonClick2() {
    setCounter2(counter2 + 1);
  }

  console.log('Test render')

  return (
    <div className="logo">
      Counter1: {counter}<br />
      Counter 2: {counter2}
      <button type="button" onClick={handleButtonClick}>Click me</button>
      <button type="button" onClick={handleButtonClick2}>Click me</button>
    </div>
  );
};

export default Test;

Test.propTypes = {};
