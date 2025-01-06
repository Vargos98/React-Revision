// import React from 'react'

import { useState } from "react"

const App = () => {
  const [length, setLength]= useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword]= useState("");

  const passwordGenerator = ()=>{
    
  }


  return (
    <div className=" text-center text-white bg-black w-full h-screen">
      <h1 className="py-20 font-semibold underline underline-offset-4 text-4xl">Password Generator</h1>
    </div>
  )
}

export default App