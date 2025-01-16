const Card = ({values}) => {
  const { image, title, description, friends, handleClick } = values;

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src={image}
        alt={title}
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {title}
        </span>
      </div>
      <p className="text-gray-300">{description}</p>
      <button
        className="bg-white text-black mt-3 px-4 py-1 rounded-full"
        onClick={()=>handleClick} // Button click triggers handleClick
      >
        {friends ? "Friends" : "Add Friend"}
      </button>
    </div>
  );
};

export default Card;
