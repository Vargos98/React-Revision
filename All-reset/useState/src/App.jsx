// import React from 'react'

import Header from "./components/Header"
import ListItems from "./components/ListItems"

const App = () => {
  return (
    <div className='w-full bg-black h-screen text-center text-white p-10'>
        <div className="w-72 h-72 bg-red-200 rounded-lg mx-auto mt-20 ">
          <Header title={"Todoie-List"}/>
          <ListItems />

        </div>
    </div>
  )
}

export default App