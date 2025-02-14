// import React from 'react'

const Card = ({data, handleClick, index}) => {
  const{title, artist,added} = data;
  return (
  
   <div className="p-4 2-60 shadow-lg rounded-2xl border border-gray-200">
    <div className="flex flex-col w-60 h-60 items-center text-center space-y-4 ">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{artist}</p>
      <button onClick={()=>handleClick(index)} className="bg-orange-500 px-4 py-2 rounded-md text-white">{added ? "Added":"Add to favourites"}</button>
    </div>

   </div>
  )
}

export default Card