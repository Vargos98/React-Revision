/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ cardData }) => {
  return (
    <>
      {cardData.map((item, index) => (
        <div key={index} className="w-64 border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white text-center p-4">
          <img 
            src={item.imageUrl} 
            alt="Card Image" 
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          <button className={`${item.Active ? "bg-blue-400": "bg-zinc-300"} py-1 px-3 mt-2 rounded-xl`}>{item.Active ? "Sorry not available":"Click me!"}</button>
        </div>
      ))}
    </>
  );
};

export default Card;
