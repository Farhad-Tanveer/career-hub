import React from "react";

const CatagoryList = ({ catagory }) => {
  const { img, name, jobAvailable } = catagory;
  return (
    <div>
      <div className="w-96 mx-auto shadow-xl mb-24 px-7 pb-5 rounded-md ">
        <img className="object-cover w-20" src={img} alt="" />
        <div>
          <h2 className=" text-md font-bold">{name}</h2>
          <p className="text-sm text-gray-700">{jobAvailable}</p>
        </div>
      </div>
    </div>
  );
};

export default CatagoryList;
