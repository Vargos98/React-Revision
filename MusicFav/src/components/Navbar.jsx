import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
      <h3 className='text-orange-400 font-semibold'>Orange</h3>
      <div className='flex px-3 py-2 bg-orange-500 text-white rounded-md text-sm gap-3'>
        <h3>Favourites : </h3>
        <h4>{data.filter(item=> item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar