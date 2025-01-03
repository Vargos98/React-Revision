import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("Olive");

  const colors = ["orange", "yellow", "green", "blue", "olive", "red"];

  return (
    <div style={{ background: color }} className="w-full h-screen">
      <div className="max-w-screen-xl mx-auto bg-black rounded-lg px-4 py-8 flex flex-wrap justify-center gap-4">
        {colors.map((clr) => (
          <button
            key={clr}
            className="border-none px-4 py-3 bg-white rounded-br-full"
            style={{ backgroundColor: clr }}
            onClick={() => setColor(clr)}
          >
            {clr.charAt(0).toUpperCase() + clr.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
