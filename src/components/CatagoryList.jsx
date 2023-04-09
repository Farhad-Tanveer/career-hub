import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CatagoryList = ({ catagory }) => {
  const { name, jobAvailable } = catagory;
  return (
    <div>
      <div className="w-96 mx-auto shadow-xl mb-24 px-7 pb-5 rounded-md ">
        <img src="" alt="" />
        <div>
          <h2 className=" text-md font-bold">{name}</h2>
          <p className="text-sm text-gray-700">{jobAvailable}</p>
        </div>
      </div>
    </div>
  );
};

export default CatagoryList;
