import React from 'react'

const Card = ({ data, handleClick }) => {
  const { image, name , artist, added } = data;

  return (
    <div className="w-60 h-32 bg-zinc-200 p-4 rounded-md relative flex gap-4">
      <div className="w-20 h-20 bg-orange-600 rounded-md">
        <img src={image} alt={name} className="w-full h-full rounded-lg" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        className={`w-[70%] py-3 text-black ${added ? "bg-green-400 text-black":"bg-blue-600 text-white"} absolute top-24 rounded-full ml-20 font-medium whitespace-nowrap`}
        onClick={handleClick}
      >
        {added ? "Added to Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
};

export default Card;
