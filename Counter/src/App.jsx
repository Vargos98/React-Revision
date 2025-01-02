import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
   if(count < 10){
    setCount((prevCount) => prevCount + 1);
   }
  }

  function decrease() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <>
      <h1>Current count is: {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default App;
