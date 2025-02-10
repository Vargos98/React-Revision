import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Runs only once when component mounts

  return (
    <div className='w-full bg-black h-screen text-center text-white p-10'>
      <div className="w-72 h-72 bg-red-200 rounded-lg mx-auto mt-20 ">
        <h1 className="text-black text-xl font-semibold underline underline-offset-2">Stop watch</h1>
        <p className="text-red-900 mt-20">Current time in seconds: {time}</p>
      </div>
    </div>
  );
};

export default App;
