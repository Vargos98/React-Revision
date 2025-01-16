import React from 'react'
import { useState } from 'react'

const Two = () => {
  const [name, setName] = useState({name: ""});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='name' onChange={(event)=>setName({name:event.target.value})} />
      </form>
    </div>
  )
}

export default Two