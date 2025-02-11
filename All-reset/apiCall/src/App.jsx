import {useEffect, useState} from 'react'
import Differ from './components/Differ';


const App = () => {
  const [post, setPosts]= useState(null);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json();
    })
    .then((post)=>{
      setPosts(post.slice(0,10));
      
    })
    .catch((err)=>{
      console.error("Something went wrong: ",err);
    })
    
  },[])
  
  return (
    <div>
      {post ? post.map((item,index)=>{
        return (
          <div key={index} className='p-20 bg-zinc-800 text-white'>
            <h3 className='font-bold'>{item.id}</h3>
            <h2 className='text-zinc-200 font-semibold underline'>{item.title}</h2>
            <p className='w-[50%] mt-3 text-start'>{item.body}</p>
          </div>
        )
      }):<>Nothing to show</>}
      <Differ />
    </div>
  )
}

export default App