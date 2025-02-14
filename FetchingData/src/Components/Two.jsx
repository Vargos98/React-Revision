import axios from "axios";
import { useState, useEffect } from "react"

// This method automatically loads data from the api as soon as the page loads using useEffect.
const Two = () => {
  const[product, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async ()=>{
      try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
          setLoading(false);
      } catch (error) {
        console.log(error)
        
      }
    }
    fetchData();
  },[]);
  
  if(loading) return <h1>Loading...</h1>;



  return (
    <div className="min-h-screen bg-zinc-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Fetching Data Using Axios & useEffect so the data is fetched as soon as the website loads.
      </h1>
      
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
  )
}

export default Two