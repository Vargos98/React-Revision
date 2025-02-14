import React from 'react'

const Navbar = ({data}) => {
  const {added} = data;
  return (
    <div className='flex items-center justify-between px-20 p-5'>
      <div><h1>Orange</h1></div>
      <div className='flex items-center gap-2 bg-orange-500 px-4 text-white rounded-md'>
        <h2>Favourites</h2>
        <h3>{data.filter(item=> item.added).length}</h3>
      </div>
    </div>
  )
}

export default Navbar