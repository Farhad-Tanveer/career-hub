import React from "react";

const CatagoryList = ({ catagory }) => {
  const { img, name, jobAvailable } = catagory;
  return (
    <>
      <div className=" w-60 h-48 mx-auto shadow-xl mb-24 px-7 pb-5 rounded-md bg-white flex flex-col justify-center items-start">
        <img className="object-cover w-20 mt-auto" src={img} alt="" />
        <div className="mt-auto">
          <h2 className=" text-md font-bold">{name}</h2>
          <p className="text-sm text-gray-700 ">{jobAvailable}</p>
        </div>
      </div>
    </>
  );
};

export default CatagoryList;
