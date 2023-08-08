import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, image, link } = props;
  return (
    <div className="w-full lg:w-[80%] text-white   rounded-lg overflow-hidden  transition transform hover:-translate-y-1 shadow-lg shadow-slate-900">
      <Link to={link}>
        <div className="bg-blue-700  border-2 border-gray-500 ">
          <div className="relative group">
            <img
              src={image}
              alt="title"
              className="w-full h-80 object-cover "
            />
            <button className="xs:hidden mx-[10rem] my-[8.4rem] opacity-0 absolute inset-0 flex justify-center items-center transition duration-300 bg-white border-2 border-blue-500 text-blue-500 text-md font-semibold py-2 px-4 rounded-full group-hover:opacity-100">
              ViewMore
            </button>
          </div>
          <p className="py-2 text-2xl font-bold  text-center">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
