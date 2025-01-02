// import React from 'react'

const Card = (props) => {
  const {image,title,description} = props;
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
         
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
  )
}

export default Card