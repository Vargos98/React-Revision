import { useState } from 'react'

import Navbar from './components/Navbar'
import Card from './components/Card'



function App() {

  const data=[
    {title:"Home",artist:"John lark",added:false},
    {title:"Leave me alone",artist:"skidman",added:false},
    {title:"demon",artist:"Eminem",added:false},
    {title:"Far away",artist:"linkin Park",added:false},
  ]
  const [songData, setSongData] = useState(data)
  function handleClick(index){
    setSongData((prev)=>{
     return prev.map((item, itemIndex)=>{
       if(itemIndex===index){
         return {...item,added:!item.added}
       }
        return item
      })
    })

  }
  return (
    <div className='w-full h-screen bg-zinc-100'>
      <Navbar data={songData}/>
      {songData.map((obj,index)=>(
        <Card data={obj} index={index} key={index} handleClick={handleClick}/>
      ))}
    </div>
  )
}

export default App
