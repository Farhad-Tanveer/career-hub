import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";

const AppliedJobsDetails = ({ singleJob }) => {
  console.log(singleJob);
  const {
    companyLogo,
    companyName,
    jobTitle,
    salary,
    location,
    remoteOrOnsite,
    fulltimeOrParttime,
  } = singleJob;
  return (
    <div>
      <div className="flex flex-col lg:flex-row shadow-xl rounded-md bg-purple-50">
        <figure>
          <img
            className="object-center m-6 mt-14 rounded-md h-28 bg-gray-300"
            src={companyLogo}
          />
        </figure>
        <div className="flex flex-col lg:flex-row gap-10 px-6 py-6">
          <div>
            <h2 className="card-title">{jobTitle}</h2>
            <p>{companyName}</p>
            <div className="flex gap-3 my-3">
              <a className="btn btn-outline btn-info">{remoteOrOnsite}</a>
              <a className="btn btn-outline btn-info">{fulltimeOrParttime}</a>
            </div>
            <div className="flex gap-4 my-3 text-sm">
              <div className="flex gap-2  items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{location}</p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faDollar} />
                <p>{salary}</p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-start items-center mr-5">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;
