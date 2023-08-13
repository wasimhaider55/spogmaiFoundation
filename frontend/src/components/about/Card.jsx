import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className=" lg:mx-16 md:mx-12 sm:mx-10 mx-5">
      <div className=" bg-gray-100 text-black rounded-xl">
        <img src={image} alt="Wasim Haider" className=" w-full h-64" />
        <h1 className=" px-4 text-md pt-8 text-center">{title}</h1>
        <h1 className=" px-4 text-md pt-8 text-center pb-10  font-light opacity-70">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Card;
