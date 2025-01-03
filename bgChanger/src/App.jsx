import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("Olive");

  return (
    <div style={{ background: color }} className="w-full h-screen">
      <div className="max-w-screen-xl mx-auto bg-black rounded-lg px-4 py-8 flex flex-wrap justify-center gap-4">
        <button
          className="border-none px-4 py-3 bg-white rounded-br-full"
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          {color}
        </button>
        <button
          className="border-none px-4 py-3 bg-white rounded-br-full"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("Yellow")}
        >
          {color}
        </button>
        <button
          className="border-none px-4 py-3 bg-white rounded-br-full"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          {color}
        </button>
        <button
          className="border-none px-4 py-3 bg-white rounded-br-full"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("Blue")}
        >
          {color}
        </button>
        <button
          className="border-none px-4 py-3 bg-white rounded-br-full"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("Olive")}
        >
          {color}
        </button>
        <button
          className="border-none px-4 py-3 bg-white rounded-br-full"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          {color}
        </button>

      </div>
    </div>
  );
};

export default App;
