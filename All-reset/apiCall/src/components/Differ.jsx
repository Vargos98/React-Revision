import {useState} from "react";
import axios from "axios";

const Differ = () => {
  const [albums, setAlbums] = useState([]);
  function getData(){
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(response => setAlbums(response.data));
    
  }
  async function postData(){
   try {
     const response = await axios.post('https://jsonplaceholder.typicode.com/albums',{
       userId: 11,
       id: 101,
       title: "Test Album",
     })
     console.log("Post response:", response.data)
   }
    catch (error) {
     console.error("Error posting data:", error);
    
   }
  }
  return (
    <div className="w-full h-fit mx-auto bg-zinc-700 flex items-center justify-center p-10 ">
      <button onClick={getData} className="px-4 py-2 bg-white border-none rounded-xl">Get more data</button>
      {albums ? <div className="">
       <ul className="text-zinc-200 ">
        {albums.map((item,index)=>{
          return <>
            <li key={index} className="flex items-center justify-between gap-4 m-2">
              <h1 className="font-bold text-orange-300">{item.id}</h1>
              <h2>{item.title}</h2>
            </li>
            
          </>
        })}
       </ul>
      </div> : <>Empty data</>}
      <button onClick={postData} className="px-4 py-2 bg-zinc-200 border-none rounded-xl ml-10">post data</button>
    </div>
  )
}


export default Differ;