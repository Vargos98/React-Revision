import { useRef } from "react";

const One = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Accessing values of the input fields using refs
    console.log(nameRef.current.value);
    console.log(ageRef.current.value);
    console.log(emailRef.current.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-zinc-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">FORM - 1 using useRef hook</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            ref={nameRef}
            placeholder="Name"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            ref={ageRef}
            placeholder="Age"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default One;
