// import React from "react";
import { FaHome, FaWallet, FaClock, FaPlus } from "react-icons/fa";

const Sidebar = () => (
  <div className="w-20 bg-white shadow-lg h-full flex flex-col justify-between p-4">
    <div className="space-y-4">
      <button className="w-full p-4 text-primary hover:bg-lightGray rounded-lg flex justify-center">
        <FaHome size={20} />
      </button>
      <button className="w-full p-4 text-primary hover:bg-lightGray rounded-lg flex justify-center">
        <FaWallet size={20} />
      </button>
      <button className="w-full p-4 text-primary hover:bg-lightGray rounded-lg flex justify-center">
        <FaClock size={20} />
      </button>
    </div>
    <button className="w-full p-4 text-white bg-primary hover:bg-purple-700 rounded-lg flex justify-center">
      <FaPlus size={20} />
    </button>
  </div>
);

export default Sidebar;
