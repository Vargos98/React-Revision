import { useState } from "react";
import axios from "axios";
const One = () => {
  const [product, setProducts] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>setProducts(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Fetching Data Using Axios
      </h1>
      <button
        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 mb-8"
        onClick={fetchData}
      >
        Get Data
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-700 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{item.description}</p>
            <h5 className="text-lg font-bold text-green-400">${item.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default One